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
  public getBottles: any;
  customerDtail: any;
  public bottlesData: any = { bottle_size: '',qtyPerPet:''}
  public bottleQuantity: any = { bot_id:'', quantity:''}
  bottlesize: any;
  constructor(public apicall: ApicallService, public global: GlobalService , public router: Router) { }
  ngOnInit() {
   this.apicall.api_getbootles();
    this.global.Getbottledetail.subscribe(res => {
      this.getBottles = res;
      console.log(this.getBottles)
    });
  }
  async addbootle(){
    console.log(this.bottlesData)
    await this.apicall.api_addbotle(this.bottlesData)
    await this.apicall.api_getbootles();
  }
  editquantity(item : any){
    this.bottleQuantity.bot_id = item.bot_id;
    this.bottleQuantity.quantity = item.quantity;
    this.bottlesize = item.bottle_size;
    // this.bottleQuantity.bottlePrice = item.bottlePrice;
  }
  async addquantity(){
    console.log(this.bottleQuantity);
    await this.apicall.api_addbotlequantity(this.bottleQuantity);
    await this.apicall.api_getbootles();
  }
}
