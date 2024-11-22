import { Component } from '@angular/core';
import { NavComponent } from '../../common/nav/nav.component';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dash-board-page',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './dash-board-page.component.html',
  styleUrl: './dash-board-page.component.css'
})
export class DashBoardPageComponent {
  constructor(private http:HttpClient) {
  }

  public fineCount: any = 0;
  public trafficLawCount: any = 0;
  public officerCount: any = 0;

  ngOnInit(): void {
    this.getTotalCounts();
  }

  getTotalCounts() {
    this.http.get("http://localhost:8080/fine/get-fine-count")
    .subscribe(data => {
      this.fineCount = data;
    })

    this.http.get("http://localhost:8080/officer/get-officer-count")
    .subscribe(data => {
      this.officerCount = data;
    })

    this.http.get("http://localhost:8080/trafficLaw/get-traffic-law-count")
    .subscribe(data => {
      this.trafficLawCount = data;
    })
  }
}
