import { CommonModule, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddOfficerComponent } from '../add-officer/add-officer.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-manage-officer',
  standalone: true,
  imports: [NgFor,FormsModule,CommonModule,AddOfficerComponent,RouterLink],
  templateUrl: './manage-officer.component.html',
  styleUrl: './manage-officer.component.css'
})
export class ManageOfficerComponent {

  public officerList:any=[];

  constructor(private http:HttpClient){
    this.loadTable();
  }

  loadTable(){
    this.http.get("http://localhost:8080/officer/view-all")
    .subscribe(data=>{
      this.officerList=data;
    })
  }

  deleteCustomer(id : any){
    this.http.delete(`http://localhost:8080/officer/delete/${id}`)
    .subscribe(data=>{
      this.loadTable();
    })
  }

  public selectedCustomer : any ={};
  selectUpdateCustomer(officer : any){
    this.selectedCustomer=officer
  }

  saveCustomer(){
    this.http.put("http://localhost:8080/officer/update",this.selectedCustomer)
    .subscribe(data=>{
      alert("Officer Updated !!!")
    })
  }
}
