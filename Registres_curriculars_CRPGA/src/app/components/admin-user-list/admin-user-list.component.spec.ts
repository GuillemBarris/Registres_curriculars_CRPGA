import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { AdminUserListComponent } from './admin-user-list.component';
import { DatabaseService } from '../../services/database.service';

describe('AdminUserListComponent', () => {
  let component: AdminUserListComponent;
  let fixture: ComponentFixture<AdminUserListComponent>;
  let databaseService: jasmine.SpyObj<DatabaseService>;

  const mockUsers = [
    { username: 'user1', email: 'user1@example.com', type: 'admin' },
    { username: 'user2', email: 'user2@example.com', type: 'user' },
  ];

  beforeEach(async () => {
    const databaseServiceSpy = jasmine.createSpyObj('DatabaseService', ['getUsers']);

    await TestBed.configureTestingModule({
      imports: [AdminUserListComponent],
      providers: [{ provide: DatabaseService, useValue: databaseServiceSpy }],
    }).compileComponents();

    databaseService = TestBed.inject(DatabaseService) as jasmine.SpyObj<DatabaseService>;
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


  
});
