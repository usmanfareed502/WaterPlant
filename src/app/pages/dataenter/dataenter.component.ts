import { Component } from '@angular/core';
import { ApicallService } from 'src/app/services/apicall.service';
import { GlobalService } from 'src/app/services/global.service';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-dataenter',
  templateUrl: './dataenter.component.html',
  styleUrls: ['./dataenter.component.scss']
})
export class DataenterComponent {

  public insertbill: any = {
    c_id: '',date: '', security: '', return: '', empty: '', amount: '', discount: '',
    total: '', submittedBill: '', remainingBill: ''
  }


  public user: any = { name: '', number: '', address: '' }
  public data1: any = { name: '', number: '', address: '' }
  public getcusromer1: any;

  constructor(public apicall: ApicallService, public global: GlobalService) { }

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
  }
  addamount(event : any){
    this.insertbill.amount = event.target.value;
    this.insertbill.total = this.insertbill.amount;
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

  }

}