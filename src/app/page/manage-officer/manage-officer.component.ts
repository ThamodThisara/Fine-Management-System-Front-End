import { CommonModule, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddOfficerComponent } from '../add-officer/add-officer.component';
import { RouterLink } from '@angular/router';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-manage-officer',
  standalone: true,
  imports: [NgFor,FormsModule,CommonModule,AddOfficerComponent,RouterLink],
  templateUrl: './manage-officer.component.html',
  styleUrl: './manage-officer.component.css'
})

export class ManageOfficerComponent {

  public officerList:any=[];
  public selectedOfficer : any ={};
  public filteredOfficerList: any = [];
  public findOfficer : String= "";

  constructor(private http:HttpClient){
    this.loadTable();
  }

  loadTable(){
    this.http.get("http://localhost:8080/officer/view-all")
      .subscribe(data => {
        this.officerList = data;
        // this.filteredOfficerList = this.officerList;
      });
  }

  deleteOfficer(id : any){
    this.http.delete(`http://localhost:8080/officer/delete/${id}`)
    .subscribe(data=>{
      this.loadTable();
    })
  }

  selectUpdateOfficer(officer : any){
    this.selectedOfficer=officer
  }

  saveOfficer(){
    this.http.put("http://localhost:8080/officer/update",this.selectedOfficer)
    .subscribe(data=>{
      alert("Officer Updated !!!")
    })
  }

  searchOfficer() {
    this.http.get(`http://localhost:8080/officer/get-by-officer-id/${this.findOfficer}`)
      .pipe(
        catchError(error => {
          console.error("Officer ID search failed, trying NIC search", error);
          return of(null); 
        })
      )
      .subscribe(data => {
        if (data) {
          console.log(data);
          this.officerList = [data];
        } else {
          this.http.get(`http://localhost:8080/officer/get-by-nic/${this.findOfficer}`)
            .pipe(
              catchError(nicError => {
                console.error("NIC search also failed", nicError);
                alert("Invalid Entry!");
                return of(null);
              })
            )
            .subscribe(nicData => {
              if (nicData) {
                console.log(nicData);
                this.officerList = [nicData];
              } else {
                alert("No officer found with the given ID or NIC");
              }
            });
        }
      });
  }
}
