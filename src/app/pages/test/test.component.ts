import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/services/apicall.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  public alldata: any = {
    Customer: 'Customer', Expence: 'Expence', Add: 'Add', Customer_Name: 'Customer Name', Customer_Number: 'Customer Number',
    Customer_Address: 'Customer Address', close: 'close', Expance: 'Expance', Name: 'Name', Descripition: 'Descripition',
    Date: 'Date', Amount: 'Amount', BILL: 'BILL', Details: 'Details',
  }
  public getcusromer1: any;
  customerDtail: any;
  constructor(public apicall: ApicallService, public global: GlobalService , public router: Router) { }
  ngOnInit() {
   this.apicall.api_getcustomer();
    this.global.Getcustomer.subscribe(res => {
      this.getcusromer1 = res;
      console.log(this.getcusromer1)
    });
  }
  editcustomer(item : any){
    this.customerDtail = item
  }
 
  viewcustomerdetail(c_id : any){
    // console.log(c_id)
    // this.router.navigate(['/default/customer-detail'] , { state : { data:c_id}});
  }
}
