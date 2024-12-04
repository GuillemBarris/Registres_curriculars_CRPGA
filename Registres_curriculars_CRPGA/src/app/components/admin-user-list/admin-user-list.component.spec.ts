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

  
});
