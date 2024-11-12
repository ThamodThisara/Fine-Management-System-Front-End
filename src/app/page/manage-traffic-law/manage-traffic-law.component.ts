import { CommonModule, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { catchError, of } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-traffic-law',
  standalone: true,
  imports: [NgFor, FormsModule, CommonModule, RouterLink],
  templateUrl: './manage-traffic-law.component.html',
  styleUrl: './manage-traffic-law.component.css'
})
export class ManageTrafficLawComponent {
  public trafficLawList : any = [];
  public selectedTrafficLaw: any = {};
  public findTrafficLaw: String = "";
  
  constructor(private http: HttpClient) {
    this.loadTable();
  }

  loadTable() {
    this.http.get("http://localhost:8080/trafficLaw/view-all")
      .subscribe(data => {
        this.trafficLawList = data;
      });
  }

  selectUpdateTrafficLaw(trafficLaw : any){
    this.selectedTrafficLaw = trafficLaw;
  }

  updateTrafficLaw(){
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.put("http://localhost:8080/trafficLaw/update", this.selectedTrafficLaw)
          .subscribe(data => {
            Swal.fire("Saved!", "", "success");
          })
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");  
      }
    });
  }

  deleteTrafficLaw(id : any){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.delete(`http://localhost:8080/trafficLaw/delete/${id}`)
          .subscribe(data => {
            this.loadTable();
          })
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      }
    });
  }

  searchTrafficLaw(){
    this.http.get(`http://localhost:8080/trafficLaw/get-by-id/${this.findTrafficLaw}`)
      .pipe(
        catchError(error => {
          console.error("Officer ID search failed, trying NIC search", error);
          return of(null);
        })
      )
      .subscribe(data => {
        this.trafficLawList = [data];
      });
  }
}
