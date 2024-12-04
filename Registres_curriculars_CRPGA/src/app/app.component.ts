import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistresUComponent } from "./components/registres-u/registres-u.component";
import { SdaComponent } from './components/sda/sda.component';
import { LoginComponent } from './components/login/login.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminUserListComponent } from './components/admin-user-list/admin-user-list.component';
import { AdminRegistresUComponent } from './components/admin-registres-u/admin-registres-u.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegistresUComponent, SdaComponent, LoginComponent, AdminHomeComponent, AdminUserListComponent, AdminRegistresUComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Registres_curriculars_CRPGA';
}
