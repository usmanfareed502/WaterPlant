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
    c_id: '',bot_id:'',date: '', no_of_boottels:'',empty:'', amount: '', discount: '',
    total: '', submittedBill: 0, remainingBill: '',paymentstatus:'',returnstatus:'confirm'
  }
  selectedItems : any = [];

  public user: any = { name: '', number: '', address: '' }
  public data1: any = { name: '', number: '', address: '' }
  public getcusromer1: any;
  public linkcolordropdownSettings={}
  public allowSearchFilter=true;
  public getBottles: any;
  public bottleId: any;
  public noofPets: any;
   constructor(public apicall: ApicallService, public global: GlobalService , public router: Router) { }

  async ngOnInit() {
    await this.apicall.api_getcustomer();
    this.global.Getcustomer.subscribe(res => {
      this.getcusromer1 = res;
      console.log(this.getcusromer1)
    });
    this.apicall.api_getbootles();
    this.global.Getbottledetail.subscribe(res => {
      this.getBottles = res;
      console.log(this.getBottles)
    });
    
    this.linkcolordropdownSettings = {
      textField: 'name',
      singleSelection: false,
      allowSearchFilter: true,
      clearSearchFilter: true,
      enableCheckAll:true,   
      //  singleSelection: false,
      // idField: 'item_id',
      // textField: 'item_text',
      // selectAllText: 'Select All',
      // unSelectAllText: 'UnSelect All',
      itemsShowLimit: 1,
      // allowSearchFilter: true
    };
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
  seletbottlesize(event : any){
    this.insertbill.bot_id = event.target.value;
    console.log(this.insertbill.bot_id)
  }
  packetcalculation(event : any){
    console.log(event.target.value);
    if(this.insertbill.bot_id == 1){
      this.insertbill.no_of_boottels  = event.target.value * 6;
      console.log(  this.insertbill.no_of_boottels)
    }
    else if(this.insertbill.bot_id == 2){
      this.insertbill.no_of_boottels  = event.target.value * 1;
      console.log(  this.insertbill.no_of_boottels)
      this.insertbill.returnstatus = 'pending';
    }
    else if(this.insertbill.bot_id == 3){
      this.insertbill.no_of_boottels  = event.target.value * 2;
      console.log(  this.insertbill.no_of_boottels)
    }
    else if(this.insertbill.bot_id == 4){
      this.insertbill.no_of_boottels  = event.target.value * 12;
      console.log(  this.insertbill.no_of_boottels)
    }
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