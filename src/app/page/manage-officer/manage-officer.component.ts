import { CommonModule, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddOfficerComponent } from '../add-officer/add-officer.component';
import { RouterLink } from '@angular/router';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-officer',
  standalone: true,
  imports: [NgFor, FormsModule, CommonModule, AddOfficerComponent, RouterLink],
  templateUrl: './manage-officer.component.html',
  styleUrl: './manage-officer.component.css'
})

export class ManageOfficerComponent {

  public officerList: any = [];
  public selectedOfficer: any = {};
  public filteredOfficerList: any = [];
  public findOfficer: String = "";

  constructor(private http: HttpClient) {
    this.loadTable();
  }

  loadTable() {
    this.http.get("http://localhost:8080/officer/view-all")
      .subscribe(data => {
        this.officerList = data;
      });
  }

  deleteOfficer(id: any) {
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
        this.http.delete(`http://localhost:8080/officer/delete/${id}`)
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

  selectUpdateOfficer(officer: any) {
    this.selectedOfficer = officer
  }

  updateOfficer() {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.put("http://localhost:8080/officer/update", this.selectedOfficer)
          .subscribe(data => {
            Swal.fire("Saved!", "", "success");
          })
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");  
      }
    });
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
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Invalid Entry!"
                });
                return of(null);
              })
            )
            .subscribe(nicData => {
              if (nicData) {
                console.log(nicData);
                this.officerList = [nicData];
              } else {
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "No officer found with the given ID or NIC"
                });
              }
            });
        }
      });
  }
}
