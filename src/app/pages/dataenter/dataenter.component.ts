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
    c_id: '',bot_id:2 ,date: new Date().toISOString().split('T')[0],no_of_pets:'', no_of_boottels:'',return:'',empty: 0, amount: '',
    del_charges: 0,total: '', submittedBill: 0, remainingBill: '',paymentstatus:'',returnstatus:'pending'
  }
  public bottleprice = 80;
  search : any = null ;
  search_result : any[] = [] ;
  selectedItems : any = [];
  searchTerm: string = '';
  public user: any = { name: '', number: '', address: '' ,security:''}
  public data1: any = { name: '', number: '', address: '' }
  public getcusromer1: any;
  public linkcolordropdownSettings={}
  public allowSearchFilter=true;
  public getBottles: any;
  public bottleId: any;
  public noofPets: any;
  customername: any = 'Choose Cutomer';
event: any;
selectedBottleSize: any;
  qtnperpet: any;
  public isshowcustomer = true;
  public isshowcustomer1 = false;
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
    this.global.Getselectdate.subscribe(res=>{
      this.insertbill.date = res;
    })
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
  onSearchChange() {
    // console.log(event.target.value);
    this.search_result = this.getcusromer1.filter((d: { name: string; }) =>
    d.name.toLowerCase().includes(this.searchTerm.toLowerCase())
  );
    console.log(this.search_result);
}

  async addcustomer() {

    await this.apicall.api_addcustomer(this.user)
    console.log(this.user)
    this.user = { name: '', number: '', address: '',security:'' }
    await this.apicall.api_getcustomer();
  }
  selectname(event : any, element:any , name: any){
    console.log(event.target.value)
    console.log(name)
    this.customername = name;
    this.insertbill.c_id = event.target.value;
    // let item: any[ ] = []
    // item = this.getcusromer1.filter((entry: { c_id: any; }) => entry.c_id === this.insertbill.c_id);
    // console.log(item)
    element.click()
  }
  // seletbottlesize(event : any){
  //   console.log(event)
  //   this.insertbill.bot_id = event.bot_id;
  //   console.log(this.insertbill.bot_id)
  //   this.qtnperpet = event.qtyPerPet;
  //   console.log(this.qtnperpet)
  //   if(this.qtnperpet == 1){
  //     this.insertbill.returnstatus = 'pending';
  //   }
  // }
  // packetcalculation(event : any){
  //   console.log(event.target.value); 
  //     this.insertbill.no_of_boottels  = event.target.value * this.qtnperpet;
  //     console.log(  this.insertbill.no_of_boottels)
  // }
  
//   adddicount(event : any){
//  this.insertbill.discount = event.target.value;
//    const x = this.insertbill.amount * this.insertbill.discount/100;
//    this.insertbill.total = this.insertbill.amount - x;
//    this.insertbill.remainingBill = this.insertbill.total;

//   }
amountcalculatio(){
  this.insertbill.amount = this.insertbill.no_of_boottels * this.bottleprice;
  this.insertbill.total = this.insertbill.amount;
  console.log(this.insertbill.total)
  this.insertbill.remainingBill = this.insertbill.total;
}
deliverycharges(){
  this.insertbill.amount = this.insertbill.no_of_boottels * this.bottleprice;
 this.insertbill.total = this.insertbill.amount;
 console.log(this.insertbill.total)
 this.insertbill.remainingBill = this.insertbill.total;
}
  insertsubmitbill(){
    this.insertbill.remainingBill = this.insertbill.total-this.insertbill.submittedBill;
    console.log(this.insertbill.remainingBill)
  }
  submit(){
    this.insertbill.no_of_pets = this.insertbill.no_of_boottels;
    if( this.insertbill.remainingBill == 0){
      this.insertbill.paymentstatus = 'confirm'
    }
    else if(this.insertbill.submittedBill == null){
      this.insertbill.submittedBill = 0;
    }
    else{
      this.insertbill.paymentstatus = 'pending'
    }
    this.global.set_adddate(this.insertbill.date)
    console.log(this.insertbill)
    this.apicall.api_addbilldetails(this.insertbill)
    this.router.navigate(['/default/seemedicine'])
    this.insertbill= {
      c_id: '',date: '', no_of_boottels:'', amount: '',
      total: '', submittedBill: '', remainingBill: '',paymentstatus:''
    }
 this.apicall.api_getallbils();
  }
  public changeDate(event:any) :void  {
    this.global.set_adddate(event)
  }
  refresh(){
    this.insertbill = {
      c_id: '',bot_id:2 ,date: new Date().toISOString().split('T')[0], no_of_boottels:'',return:'',empty:'', amount: '',
      del_charges: 0,total: '', submittedBill: 0, remainingBill: '',paymentstatus:'',returnstatus:'confirm'
    }
    this.customername = 'Choose Cutomer';
  }
}