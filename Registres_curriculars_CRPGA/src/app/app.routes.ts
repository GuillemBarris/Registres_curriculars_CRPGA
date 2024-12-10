import { Routes } from '@angular/router';
import { SdaComponent } from './components/sda/sda.component';
import { RegistresUComponent } from './components/registres-u/registres-u.component';
import { LoginComponent } from './components/login/login.component';
import { SummaryComponent } from './components/summary/summary.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminUserListComponent } from './components/admin-user-list/admin-user-list.component';
import { AdminRegistresUComponent } from './components/admin-registres-u/admin-registres-u.component';
import { AdminUserRegisterComponent } from './components/admin-user-register/admin-user-register.component';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'sda', component: SdaComponent},
    {path: 'registres-u', component: RegistresUComponent},
    {path: 'login', component: LoginComponent},
    {path:'summary', component: SummaryComponent},
    {path: 'admin-home', component: AdminHomeComponent},
    {path: 'admin-user-list', component: AdminUserListComponent},
    {path: 'admin-registres-u', component: AdminRegistresUComponent},
    {path: 'admin-register', component: AdminUserRegisterComponent}


];
