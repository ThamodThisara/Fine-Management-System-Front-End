import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-traffic-law',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-traffic-law.component.html',
  styleUrl: './add-traffic-law.component.css'
})
export class AddTrafficLawComponent {
  constructor(private http:HttpClient){}

  public trafficLawDetail:any = {
    id : "",
    titie : "",
    description : "",
    fineAmount : ""
  }

  addTrafficLaw(){
    this.http.post("http://localhost:8080/trafficLaw/add",this.trafficLawDetail)
    .subscribe(data=>{
      alert("Traffic Law Added Successfully !!!")
    })
  }
}
