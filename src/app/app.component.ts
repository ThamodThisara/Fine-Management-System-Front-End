import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ManageOfficerComponent } from './page/manage-officer/manage-officer.component';
import { NavComponent } from './common/nav/nav.component';
import { LoginPageComponent } from './page/login-page/login-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ManageOfficerComponent,NavComponent,LoginPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fine-management';
}
