import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/services/apicall.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-enter-pets',
  templateUrl: './enter-pets.component.html',
  styleUrls: ['./enter-pets.component.scss']
})
export class EnterPetsComponent {
  public isshowcustomer = true;
  public isshowcustomer1 = false;
  public ispendingcustomer = true;
  public ispaidcustomer = true;
  public segmentvalue: any = "complete";
  public segment2value: any = "complete";
  // public insertbill: any = {
  //   c_id: '',bot_id:'',date: new Date().toISOString().split('T')[0],no_of_pets:'', no_of_boottels:'', return:0,empty:0, amount: '',del_charges: 0,
  //   total: '', submittedBill: 0, remainingBill: '',paymentstatus:'',returnstatus:'confirm'
  // }
public insertbill:any = { c_id: '',date: new Date().toISOString().split('T')[0],amount: '',
  total: '', submittedBill: 0, remainingBill: '',paymentstatus:'' , addpetdetail:[] };

  public payAmount : any = {b_id:'', submittedBill:'', remainingBill:'', paymentstatus:''}
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
  public allbills:any;
  public darliter: any;
  public halfliter: any;
  public fivelitr: any;
  customername: any = 'Choose Cutomer';
event: any;
selectedBottleSize: any;
  qtnperpet: any;
  remainbill: any;
  submitbill: any;
  public petquantity : any;
  confirmbills: any;
  pendingbill: any;
  public totalSum = 0;
  public remainingsum = 0;
  public submittedBill = 0;
  billdetail: any;
   constructor(public apicall: ApicallService, public global: GlobalService , public router: Router) { }

  async ngOnInit() {
    await this.apicall.api_getcustomer();
    this.global.Getcustomer.subscribe(res => {
      this.getcusromer1 = res;
      console.log(this.getcusromer1)
    });
    await this.apicall.api_getallpetsbils();
    this.global.Getallpetsbils.subscribe(res => {
      this.allbills = res;
      for (let x of this.allbills) {
          this.totalSum += x.total;
          console.log(this.totalSum)
          this.remainingsum += x.remainingBill;
          console.log(this.remainingsum)
          this.submittedBill += x.submittedBill;
          console.log(this.submittedBill)
      }
      this.pendingbill =  this.allbills.filter((x: { paymentstatus: string; }) => x.paymentstatus === 'pending');
      console.log(this.pendingbill)
      this.confirmbills =  this.allbills.filter((x: { paymentstatus: string; }) => x.paymentstatus === 'confirm');
      console.log(this.confirmbills)
    });
    this.apicall.api_getbootles();
    this.global.Getbottledetail.subscribe(res => {
      this.getBottles = res.filter( (item: any) => item.bot_id !== 2);
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
  onSearchChange() {
    // console.log(event.target.value);
    this.search_result = this.getcusromer1.filter((d: { name: string; }) =>
    d.name.toLowerCase().includes(this.searchTerm.toLowerCase())
  );
    console.log(this.search_result);
}
adbills(){
  this.isshowcustomer = true;
  this.isshowcustomer1 = false;
  this.segmentvalue = "complete"
}
seebills(){
  this.isshowcustomer = false;
  this.isshowcustomer1 = true;
  this.segmentvalue = "reject"
}
pendingbills(){
  this.ispendingcustomer = true;
  this.ispaidcustomer = false;
  this.segment2value = "complete"
}
paidbillsbills(){
  this.ispendingcustomer = false;
  this.ispaidcustomer = true;
  this.segment2value = "reject"
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
    element.click()
  }
  seletbottlesize() {
    const x = this.darliter * 6;
    this.insertbill.addpetdetail.push({bot_id : 1 ,no_of_pets: this.darliter ,  no_of_bottles: x});
    }
    selethalfliter(){
      const x = this.halfliter * 12;
      this.insertbill.addpetdetail.push({bot_id : 3 ,no_of_pets: this.halfliter ,  no_of_bottles: x});
    }
    seletfivelitrliter(){
      const x = this.halfliter * 2;
      this.insertbill.addpetdetail.push({bot_id : 4 ,no_of_pets: this.fivelitr ,  no_of_bottles: x});
    }
  // seletbottlesize(event : any){
  //   console.log(event)
  //   this.insertbill.bot_id = event;
  //   console.log(this.insertbill.bot_id)
  //   const x = this.getBottles.filter( (item : any) => item.bot_id  == this.insertbill.bot_id);
  //   this.qtnperpet = x[0].qtyPerPet;
  //   console.log(this.qtnperpet)
  //   // this.qtnperpet = event.qtyPerPet;
  //   // console.log(this.qtnperpet)
  //   // if(this.qtnperpet == 1){
  //   //   this.insertbill.returnstatus = 'pending';
  //   // }
  // }
  // packetcalculation(){
  //     this.insertbill.petdetal.no_of_boottels  = this.insertbill.petdetal.no_of_pets * this.qtnperpet;
  //     console.log(  this.insertbill.no_of_boottels)
  // }
  addamount(){
    this.insertbill.amount = this.insertbill.total;
    this.insertbill.remainingBill = this.insertbill.total 

  }
//   adddicount(event : any){
//  this.insertbill.discount = event.target.value;
//    const x = this.insertbill.amount * this.insertbill.discount/100;
//    this.insertbill.total = this.insertbill.amount - x;
//    this.insertbill.remainingBill = this.insertbill.total;

//   }
  insertsubmitbill(){
    // this.insertbill.submittedBill = event.target.value;
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
    this.apicall.api_addpetdetails(this.insertbill)
    // this.router.navigate(['/default/seemedicine'])
    // this.insertbill= {
    //   c_id: '',date: '', no_of_boottels:'',no_of_pets:'', amount: '',
    //   total: '', submittedBill: '', remainingBill: '',paymentstatus:''
    // }
//  this.apicall.api_getallbils();
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
 await this.apicall.api_getallpetsbils();
  }
  getbilldetail(item: any){
    const x = { b_id: item.b_id}
    this.apicall.api_getbillbyb_id(x);
    this.global.GetBillDetailB_id.subscribe( res =>{
      this.billdetail = res;
      console.log(this.billdetail)
    })
  }
}
