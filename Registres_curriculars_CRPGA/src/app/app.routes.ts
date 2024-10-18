import { Routes } from '@angular/router';
import { SdaComponent } from './components/sda/sda.component';
import { RegistresUComponent } from './components/registres-u/registres-u.component';
import { LoginComponent } from './components/login/login.component';
import { SummaryComponent } from './components/summary/summary.component';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'sda', component: SdaComponent},
    {path: 'registres-u', component: RegistresUComponent},
    {path: 'login', component: LoginComponent},
    {path: 'summary', component: SummaryComponent}

];
