import { Component } from '@angular/core';
import { ApicallService } from 'src/app/services/apicall.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-seemedicine',
  templateUrl: './seemedicine.component.html',
  styleUrls: ['./seemedicine.component.scss']
})
export class SeemedicineComponent {
  public allbills: any;
  public getcusromer1: any;
  public payAmount : any = {b_id:'', submittedBill:'', remainingBill:'', paymentstatus:''}
  public filter: any = { c_id:null,date: null};
  totalamount: any;
  public isshowcustomer = true;
  public isshowexpence = false;
  public pendingbill: any;
  public confirmbills: any;
  public segmentvalue: any = "complete";
  constructor( public apicall: ApicallService , public global: GlobalService) {}
  async ngOnInit() {
    this.apicall.api_getallbils();
    this.global.Getcustomerbills.subscribe( res =>{
      this.allbills = res;
      this.pendingbill =  this.allbills[0].filter((x: { paymentstatus: string; }) => x.paymentstatus === 'pending');
     console.log(this.pendingbill)
     this.confirmbills =  this.allbills[0].filter((x: { paymentstatus: string; }) => x.paymentstatus === 'confirm');
     console.log(this.confirmbills)
      console.log(this.allbills);
    })
    await this.apicall.api_getcustomer();
    this.global.Getcustomer.subscribe(res => {
      this.getcusromer1 = res;
      console.log(this.getcusromer1)
    });
  }
  selectname(event : any){
    console.log(event.target.value)
    this.filter.c_id = event.target.value;
  }
  // selectpymentstatus(event: any){
  //   this.filter.paymentstatus = event.target.value;
  //   console.log(event.target.value)
  // }
  selectdate(event : any){
     this.filter.date = event.target.value;
    console.log(event.target.value)
  }
  filterdata(){
    console.log(this.filter)
    this.apicall.api_getallbilsbyfilter(this.filter)
  }
  paymodelopen(item : any){ 
    this.payAmount.b_id = item.b_id;
    this.payAmount.submittedBill = item.submittedBill;
    this.payAmount.remainingBill = item.remainingBill;
    this.totalamount = item.total;
    this.apicall.api_getallbils();
  }
  insertremaingpayment(){
    this.payAmount.remainingBill=this.payAmount.submittedBill-this.totalamount;
    if(this.totalamount == this.payAmount.submittedBill){
      this.payAmount.paymentstatus = 'confirm';
    }
    else{
      this.payAmount.paymentstatus = 'pending';
  }
  console.log(this.payAmount)
  this.apicall.api_updatebilldetails(this.payAmount)
  this.apicall.api_getallbils();
    this.global.Getcustomerbills.subscribe( res =>{
      this.allbills = res;
      console.log(this.allbills);
    })
  }
  pendingbills() {
    this.isshowcustomer = true;
    this.isshowexpence = false;
    this.segmentvalue = "complete";
  }
  paidbills(){
    this.isshowexpence = true;
    this.isshowcustomer = false;
    this.segmentvalue = "reject";
  }
}
