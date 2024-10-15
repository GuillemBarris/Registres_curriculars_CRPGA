import { Routes } from '@angular/router';
import { SdaComponent } from './components/sda/sda.component';
import { RegistresUComponent } from './components/registres-u/registres-u.component';

export const routes: Routes = [
    {path: 'sda', component: SdaComponent},
    {path: 'registres-u', component: RegistresUComponent},

];
