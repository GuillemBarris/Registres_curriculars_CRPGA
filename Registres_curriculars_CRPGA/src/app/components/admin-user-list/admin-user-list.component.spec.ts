import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { AdminUserListComponent } from './admin-user-list.component';
import { UserService } from '../../services/user.service';

describe('AdminUserListComponent', () => {
  let component: AdminUserListComponent;
  let fixture: ComponentFixture<AdminUserListComponent>;
  let databaseService: jasmine.SpyObj<UserService>;

  const mockUsers = [
    { username: 'user1', email: 'user1@example.com', type: 'admin' },
    { username: 'user2', email: 'user2@example.com', type: 'user' },
  ];

  beforeEach(async () => {
    const databaseServiceSpy = jasmine.createSpyObj('DatabaseService', ['getUsers']);

    await TestBed.configureTestingModule({
      imports: [AdminUserListComponent],
      providers: [{ provide: UserService, useValue: databaseServiceSpy }],
    }).compileComponents();

    databaseService = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
    fixture = TestBed.createComponent(AdminUserListComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load users on init', () => {
    databaseService.getUsers.and.returnValue(of(mockUsers));
    component.ngOnInit();
    expect(databaseService.getUsers).toHaveBeenCalled();
    expect(component.users).toEqual(mockUsers);
  });

  it('should display users in the table', () => {
    databaseService.getUsers.and.returnValue(of(mockUsers));
    component.ngOnInit();
    fixture.detectChanges();

    const tableRows = fixture.debugElement.queryAll(By.css('table.users-table tr'));
    expect(tableRows.length).toBe(3); // Includes header row
    expect(tableRows[1].nativeElement.textContent).toContain('user1');
    expect(tableRows[2].nativeElement.textContent).toContain('user2');
  });

  it('should display "No users to display" when no users are loaded', () => {
    databaseService.getUsers.and.returnValue(of([]));
    component.ngOnInit();
    fixture.detectChanges();

    const paragraphs = fixture.debugElement.queryAll(By.css('p'));
    const noUsersMessage = paragraphs[1]; 
    expect(noUsersMessage.nativeElement.textContent).toBe('No hi ha usuaris per mostrar.');
});

it('should call editUser when edit button is clicked', () => {
  databaseService.getUsers.and.returnValue(of(mockUsers));
  component.ngOnInit();
  fixture.detectChanges();

  spyOn(component, 'editUser');
  const editButton = fixture.debugElement.query(By.css('button.edit-button'));
  editButton.triggerEventHandler('click', null);

  expect(component.editUser).toHaveBeenCalledWith(mockUsers[0]);
});

it('should call deleteUser when delete button is clicked', () => {
  databaseService.getUsers.and.returnValue(of(mockUsers));
  component.ngOnInit();
  fixture.detectChanges();

  spyOn(component, 'deleteUser');
  const deleteButton = fixture.debugElement.query(By.css('button.delete-button'));
  deleteButton.triggerEventHandler('click', null);

  expect(component.deleteUser).toHaveBeenCalledWith(mockUsers[0]);
});

it('should call editUser when edit button is clicked', () => {
    databaseService.getUsers.and.returnValue(of(mockUsers));
    component.ngOnInit();
    fixture.detectChanges();

    spyOn(component, 'editUser');
    const editButton = fixture.debugElement.query(By.css('button.edit-button'));
    editButton.triggerEventHandler('click', null);

    expect(component.editUser).toHaveBeenCalledWith(mockUsers[0]);
  });

  it('should call deleteUser when delete button is clicked', () => {
    databaseService.getUsers.and.returnValue(of(mockUsers));
    component.ngOnInit();
    fixture.detectChanges();

    spyOn(component, 'deleteUser');
    const deleteButton = fixture.debugElement.query(By.css('button.delete-button'));
    deleteButton.triggerEventHandler('click', null);

    expect(component.deleteUser).toHaveBeenCalledWith(mockUsers[0]);
  });

  it('should handle errors', () => {
    databaseService.getUsers.and.returnValue(throwError(() => new Error('Failed to fetch users')));
    spyOn(console, 'error');

    component.ngOnInit();
    expect(console.error).toHaveBeenCalledWith('Error fetching users:', jasmine.any(Error));
    expect(component.users).toEqual([]);
  });

  
});
