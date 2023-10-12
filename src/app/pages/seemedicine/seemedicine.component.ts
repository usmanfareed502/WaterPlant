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
  public filter: any = { c_id:null,paymentstatus: null};
  totalamount: any;
  constructor( public apicall: ApicallService , public global: GlobalService) {}
  async ngOnInit() {
    this.apicall.api_getallbils();
    this.global.Getcustomerbills.subscribe( res =>{
      this.allbills = res;
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
  selectpymentstatus(event: any){
    this.filter.paymentstatus = event.target.value;
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
}
