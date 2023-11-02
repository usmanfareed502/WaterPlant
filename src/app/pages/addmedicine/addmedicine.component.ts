import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/services/apicall.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-addmedicine',
  templateUrl: './addmedicine.component.html',
  styleUrls: ['./addmedicine.component.scss']
})
export class AddmedicineComponent {


  public alldata: any = {
    Customer: 'Customer', Expence: 'Expence', Add: 'Add', Customer_Name: 'Customer Name', Customer_Number: 'Customer Number',
    Customer_Address: 'Customer Address', close: 'close', Expance: 'Expance', Name: 'Name', Descripition: 'Descripition',
    Date: 'Date', Amount: 'Amount', BILL: 'BILL', Details: 'Details',
  }

  public user: any = { name: '', number: '', address: '' }
  public data: any = { name: '' }
  public data1: any = { e_id: '', ex_amount: '', description: '', date: '' }
  public customerDtail : any ={ c_id:'' ,name: '', number: '', address: '',status:''}
  public isshowcustomer = true;
  public isshowexpence = false;

  public segmentvalue: any = "complete";
  public getcusromer1: any
  public getexpence: any;
  public getbilldetails: any;
  public getexpancedetails: any;
  constructor(public apicall: ApicallService, public global: GlobalService , public router: Router) { }
  async ngOnInit() {
    await this.apicall.api_getcustomer();
    this.global.Getcustomer.subscribe(res => {
      this.getcusromer1 = res;
      console.log(this.getcusromer1)
    });

    this.apicall.api_getexpance()
    this.global.Getexpance.subscribe(res => {
      this.getexpence = res;
      console.log(this.getexpence)
    });

    this.apicall.api_getexpancedetails()
    this.global.Getexpancedetails.subscribe(res => {
      this.getexpancedetails = res;
      console.log(this.getexpancedetails)
    })
  }
  Customer() {
    this.isshowcustomer = true;
    this.isshowexpence = false;
    this.segmentvalue = "complete";
  }
  Expence() {
    this.isshowexpence = true;
    this.isshowcustomer = false;
    this.segmentvalue = "reject";
  }
  async addcustomer() {
  
    await this.apicall.api_addcustomer(this.user)
    console.log(this.user)
    this.user = { name: '', number: '', address: '' }
   this.apicall.api_getcustomer()
    

  }
  editcustomer(item : any){
    this.customerDtail = item
  }
  async updatestatus($event:any) {
    console.log($event)
    this.customerDtail.status = $event;
    
  }
  async updatecustomer(){
    console.log(this.customerDtail)
    await this.apicall.api_editcustomer(this.customerDtail)
    await this.apicall.api_getcustomer();
  }
  viewcustomerdetail(c_id : any){
    console.log(c_id)
    this.router.navigate(['/default/customer-detail'] , { state : { data:c_id}});
  }
  async addexpance() {
    await this.apicall.api_addexpance(this.data)
    console.log(this.data)
    this.data = { name: '' };
    this.apicall.api_getexpance();
  }
  expensename(event: any){
    this.data1.e_id = event.target.value;
  }

  addexpancedetail() {

    this.apicall.api_addexpancedetails(this.data1);
    console.log(this.data1)
    this.data1 = { e_id: '', ex_amount: '', description: '', date: '' }
    this.apicall.api_getexpancedetails();
   

  }

}
