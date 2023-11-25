import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ApicallService } from 'src/app/services/apicall.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent {
  public allbills: any;
  public getcusromer1: any;
  public payAmount : any = {b_id:'', submittedBill:'', remainingBill:'', paymentstatus:''}
  totalamount: any;
  public customerId: any;
  public customerid: any;
  public filterDtata:any = { c_id:'' ,paymentstatus:null,start:null, end:null}
  submitbill: any;
  remainbill: any;
  public getonebootlebill: any;
  public getpetbill: any;
  public isshowcustomer = true;
  public isshowcustomer1 = false;
  public segmentvalue: any = "complete";
        public totalbootles = 0;
        public emptybootles = 0;
        public returnbootles = 0;
  billdetail: any;
        
  constructor( public apicall: ApicallService , public global: GlobalService , public date: DatePipe) {}
  async ngOnInit() {
   console.log(history.state.data)
   this.customerId = history.state.data;
    this.customerid = { c_id: this.customerId};
    this.apicall.api_getallbilsbyc_id(this.customerid);
    this.global.Getcustomerdetail.subscribe( res =>{
      this.allbills = res;
      this.getonebootlebill = this.allbills[0].filter( (item: any) => item.bot_id == 2);
      console.log(this.getonebootlebill);
      for( let x of this.getonebootlebill){
        this.totalbootles += x.no_of_boottels;
        console.log(this.totalbootles);
        this.emptybootles += x.empty;
        console.log(this.emptybootles);
        this.returnbootles += x.return;
        console.log(this.returnbootles);
      }
      this.getpetbill = this.allbills[0].filter( (item: any) => item.bot_id != 2);
      console.log(this.getpetbill);
    })
   
   
  }
  selectpymentstatus(event : any){
    console.log(event.target.value)
    this.filterDtata.paymentstatus = event.target.value;
  }
 
 selectdate(event: any) {
  const startDate = new Date(event.target.value);
  startDate.setDate(1); // Set the day to 1 to get the start of the month

  const endDate = new Date(startDate);
  endDate.setMonth(endDate.getMonth() + 1);
  endDate.setDate(endDate.getDate() - 1); // Subtract 1 day to get the end of the month

  const formattedStartDate = this.date.transform(startDate, 'yyyy-MM-dd');
  const formattedEndDate = this.date.transform(endDate, 'yyyy-MM-dd');
  console.log(formattedStartDate);
  console.log(formattedEndDate);
  this.filterDtata.start = formattedStartDate;
  this.filterDtata.end = formattedEndDate;
  return { start: formattedStartDate, end: formattedEndDate };
}
 filterdata(){
  this.filterDtata.c_id = this.customerId;
  console.log(this.filterDtata)
  this.apicall.api_getallbilsbyc_idbyafilter(this.filterDtata)
}
onebottleills(){
  this.isshowcustomer = true;
  this.isshowcustomer1 = false;
  this.segmentvalue = "complete";
}
petbills(){
  this.isshowcustomer = false;
  this.isshowcustomer1 = true;
  this.segmentvalue = "reject";
}
paymodelopen(item : any){ 
  console.log(item)
  this.payAmount.b_id = item.b_id;
  this.payAmount.submittedBill = item.remainingBill;
  // this.payAmount.remainingBill = item.remainingBill;
  this.submitbill = item.remainingBill;
  this.remainbill = item.remainingBill;
  // this.totalamount = item.total;
  //  this.submitbill = item.total- item.submittedBill;
  console.log(this.submitbill)
  console.log(item.submittedBill)
}
async insertremaingpayment(){
   this.payAmount.submittedBill = this.submitbill;  
  this.payAmount.remainingBill=this.remainbill-this.submitbill;
  if(this.payAmount.remainingBill == 0){
    this.payAmount.paymentstatus = 'confirm';
  }
  else{
    this.payAmount.paymentstatus = 'pending';
}
console.log(this.payAmount)
// await this.apicall.api_updatebilldetails(this.payAmount)
await this.apicall.api_getallbilsbyc_id(this.customerid);
}
refresh(){
  this.filterDtata.paymentstatus = null;
  this.filterDtata.start = null;
  this.filterDtata.end = null;
  const x = { c_id: this.customerId};
  this.apicall.api_getallbilsbyc_id(x);
}
getbilldetail(item: any){
  const x = { b_id: item.b_id}
  this.apicall.api_getbillbyb_id(x);
  this.global.GetBillDetailB_id.subscribe( res =>{
    this.billdetail = res;
    console.log(this.billdetail)
  })
}
}
