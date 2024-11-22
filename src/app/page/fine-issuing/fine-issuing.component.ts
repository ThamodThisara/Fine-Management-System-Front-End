import { CommonModule, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fine-issuing',
  standalone: true,
  imports: [NgFor,FormsModule,CommonModule],
  templateUrl: './fine-issuing.component.html',
  styleUrl: './fine-issuing.component.css'
})
export class FineIssuingComponent {
  public trafficLawList: any = [];
  public officerList: any = [];

  constructor(private http:HttpClient){}

  ngOnInit(): void {
    this.loadFineTitle();
    this.loadOfficerId();
  }

  loadFineTitle() {
    this.http.get("http://localhost:8080/trafficLaw/view-all")
    .subscribe(data=>{
      this.trafficLawList = data;
    })
  }

  selectedFineAmount: string = '';

  // updateFineAmount(event: Event): void {
  //   const selectedValue = (event.target as HTMLSelectElement).value;
  //   console.log(selectedValue);
  //   this.selectedFineAmount = selectedValue;
  // }

  updateFineAmount(event: Event): void {
    const selectedOption = (event.target as HTMLSelectElement).selectedOptions[0];
    const selectedValue = selectedOption.value; // This gets the title
    const fineAmount = selectedOption.getAttribute('data-amount'); // Get the associated fine amount

    console.log(selectedValue);
    
    this.fineDetail.fineTitle = selectedValue; // Set the fine title
    this.fineDetail.fineTotalAmount = fineAmount ? parseFloat(fineAmount) : 0; // Update fine total amount
  }
  
  loadOfficerId(){
    this.http.get("http://localhost:8080/officer/view-all")
    .subscribe(data=>{
      this.officerList = data;
    })
  }

  public fineDetail:any = {
    date: "",
    time: "",
    driverName: "",
    driverLicenceNumber: "",
    driverNic: "",
    driverAddress: "",
    driverEmail: "",
    driverContact: "",
    fineTitle: "",
    fineTotalAmount: 0.00,
    officerTableId: ""
  }

  fineSubmit(){
    this.http.post("http://localhost:8080/fine/add",this.fineDetail)
    .subscribe(data=>{
      alert("Fine Submitted Successfully !!!")
    })
  }

}