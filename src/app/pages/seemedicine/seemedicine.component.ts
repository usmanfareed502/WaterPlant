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
  public clearBottleEmpty: any = {b_id:'',bot_id:'',empty:'',returnstatus:''}
  totalamount: any;
  public isshowcustomer = true;
  public isshowcustomer1 = false;
  public isshowexpence = false;
  public pendingbill: any;
  public pendingEmptyBill: any;
  public confirmbills: any;
  public segmentvalue: any = "complete";
  public whatsappText:string = 'whatsapp://send?text='
  noOfbootle: any;
  bottlesubttotle: any;
  emptyBottle: any;
  remainbill: any;
  submitbill: any;
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
     this.pendingEmptyBill =  this.allbills[0].filter((x: { 	returnstatus: string; }) => x.returnstatus === 'pending');
     console.log(this.pendingEmptyBill)
  
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
 await this.apicall.api_updatebilldetails(this.payAmount)
  await this.apicall.api_getallbils();
    this.global.Getcustomerbills.subscribe( res =>{
      this.allbills = res;
      console.log(this.allbills);
    })
  }
  pendingbills() {
    this.isshowcustomer = true;
    this.isshowcustomer1 = false;
    this.isshowexpence = false;
    this.segmentvalue = "complete";
  }
  paidbills(){
    this.isshowexpence = true;
    this.isshowcustomer = false;
    this.isshowcustomer1 = false;
    this.segmentvalue = "reject";
  }
  return(){
    this.isshowcustomer1 = true;
    this.isshowexpence = false;
    this.isshowcustomer = false;
    this.segmentvalue = "return";
  }
  clearbottle(item: any){
    this.noOfbootle = item.no_of_boottels;
    this.clearBottleEmpty.b_id = item.b_id;
    this.clearBottleEmpty.bot_id = item.bot_id;
    this.bottlesubttotle= item.no_of_boottels - item.empty;
    this.emptyBottle= item.empty;
   
    this.clearBottleEmpty.returnstatus = item.returnstatus;
    console.log(this.clearBottleEmpty)
  }
  async insertempty(){
    this.clearBottleEmpty.empty = this.emptyBottle +  this.bottlesubttotle;
   console.log(this.clearBottleEmpty.empty)
    if(this.clearBottleEmpty.empty == this.noOfbootle){
      this.clearBottleEmpty.returnstatus = 'confirm';
    }
    else{
      this.clearBottleEmpty.returnstatus = 'pending';
    }
    console.log(this.clearBottleEmpty);
    await this.apicall.api_updsteempty(this.clearBottleEmpty);
    await this.apicall.api_getallbils();
  }
}
