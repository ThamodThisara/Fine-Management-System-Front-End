import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-officer',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-officer.component.html',
  styleUrl: './add-officer.component.css'
})
export class AddOfficerComponent {

  constructor(private http:HttpClient){}

  public officerDetail:any = {
    officer : "",
    name : "",
    position : "",
    nic : "",
    email : "",
    policeStation : "",
    address : ""
  }

  addOfficer(){
    this.http.post("http://localhost:8080/officer/add",this.officerDetail)
    .subscribe(data=>{
      alert("Officer Added Successfully !!!")
    })
  }
}
