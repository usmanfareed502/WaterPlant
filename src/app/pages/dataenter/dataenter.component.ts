import { Component } from '@angular/core';
import { ApicallService } from 'src/app/services/apicall.service';
import { GlobalService } from 'src/app/services/global.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dataenter',
  templateUrl: './dataenter.component.html',
  styleUrls: ['./dataenter.component.scss']
})
export class DataenterComponent {

  public insertbill: any = {
    c_id: '',date: '', no_of_boottels:'', amount: '', discount: '',
    total: '', submittedBill: 0, remainingBill: '',paymentstatus:''
  }


  public user: any = { name: '', number: '', address: '' }
  public data1: any = { name: '', number: '', address: '' }
  public getcusromer1: any;

  constructor(public apicall: ApicallService, public global: GlobalService , public router: Router) { }

  async ngOnInit() {
    await this.apicall.api_getcustomer();
    this.global.Getcustomer.subscribe(res => {
      this.getcusromer1 = res;
      console.log(this.getcusromer1)
    });
  }

  async addcustomer() {

    await this.apicall.api_addcustomer(this.user)
    console.log(this.user)
    this.user = { name: '', number: '', address: '' }
  }
  selectname(event : any){
    console.log(event.target.value)
    this.insertbill.c_id = event.target.value;
  }
  addamount(event : any){
    this.insertbill.amount = event.target.value;
    this.insertbill.total = this.insertbill.amount;
    this.insertbill.remainingBill = this.insertbill.total 

  }
  adddicount(event : any){
 this.insertbill.discount = event.target.value;
   const x = this.insertbill.amount * this.insertbill.discount/100;
   this.insertbill.total = this.insertbill.amount - x;
   this.insertbill.remainingBill = this.insertbill.total;

  }
  insertsubmitbill(event : any){
    this.insertbill.submittedBill = event.target.value;
    this.insertbill.remainingBill = this.insertbill.total-this.insertbill.submittedBill;
    console.log(this.insertbill.remainingBill)
  }
  submit(){
    if( this.insertbill.remainingBill == 0){
      this.insertbill.paymentstatus = 'confirm'
    }
    else{
      this.insertbill.paymentstatus = 'pending'
    }
    console.log(this.insertbill)
    this.apicall.api_addbilldetails(this.insertbill)
    this.router.navigate(['/default/seemedicine'])
    this.insertbill= {
      c_id: '',date: '', no_of_boottels:'', amount: '', discount: '',
      total: '', submittedBill: '', remainingBill: '',paymentstatus:''
    }
 this.apicall.api_getallbils();
  }

}