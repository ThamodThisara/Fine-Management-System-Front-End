import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ManageOfficerComponent } from './page/manage-officer/manage-officer.component';
import { NavComponent } from './common/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ManageOfficerComponent,NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fine-management';
}
