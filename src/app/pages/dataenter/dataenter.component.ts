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
  
  public alldata: any = {
    Customer: 'Customer', Expence: 'Expence', Add: 'Add', Customer_Name: 'Customer Name', Customer_Number: 'Customer Number',
    Customer_Address: 'Customer Address', close: 'close', Expance: 'Expance', Name: 'Name', Descripition: 'Descripition',
    Date: 'Date', Amount: 'Amount', BILL: 'BILL', Details: 'Details',Addcustomer:'Add Customer',
  }
  public data: any = {
    Customer_Name: 'Customer Name',Customer_Number:'Customer Number',Customer_Address: 'Customer Address',submit: 'Submit',
    date:'Date',security:'Security',No_of_bottels:'No of bottels',return:'Return',empty:'Empty',amount:'Amount',
    descount:'Descount in %',total:'Total',sucmitted:'Sucmitted bill',remeaning:'Remeaning bill'
  }
 
  // public addmorebtn: string = 'cancel';
  // public linkcolordropdownSettings={}
  // public allowSearchFilter=true;
  // public allprintcolor: any = [];
  // public user: any = { name: '', father_name: ''}
  public user: any = { name: '', number: '', address: '' }
  public data1: any = { name: '', number: '', address: '' }
  public getcusromer1: any;
 
  constructor(public apicall: ApicallService, public global: GlobalService) { }

async  ngOnInit() {
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

   
}