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
  public filterDtata:any = { c_id:'' ,paymentstatus:null,start:null, end:null}
  constructor( public apicall: ApicallService , public global: GlobalService , public date: DatePipe) {}
  async ngOnInit() {
   console.log(history.state.data)
   this.customerId = history.state.data;
   const x = { c_id: this.customerId};
    this.apicall.api_getallbilsbyc_id(x);
    this.global.Getcustomerdetail.subscribe( res =>{
      this.allbills = res;
      console.log(this.allbills);
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
refresh(){
  this.filterDtata.paymentstatus = null;
  this.filterDtata.start = null;
  this.filterDtata.end = null;
  const x = { c_id: this.customerId};
  this.apicall.api_getallbilsbyc_id(x);
}
}
