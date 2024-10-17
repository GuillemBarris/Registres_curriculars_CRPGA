import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistresUComponent } from "./components/registres-u/registres-u.component";
import { SdaComponent } from './components/sda/sda.component';
import { LoginComponent } from './components/login/login.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegistresUComponent, SdaComponent, LoginComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Registres_curriculars_CRPGA';
}
