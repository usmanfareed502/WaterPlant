import { Component } from '@angular/core';
import { ApicallService } from 'src/app/services/apicall.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-addmedicine',
  templateUrl: './addmedicine.component.html',
  styleUrls: ['./addmedicine.component.scss']
})
export class AddmedicineComponent {

//  public data:any={name:'Medicine Name',copmanyname:'company name'}
 
  public user:any={ name:'',number:'',address:''}
  public data:any={name:''}
  public data1:any={date:'',amount:'',description:''}

  public isshowcustomer=true;
  public isshowexpence=false;
  public inputValue: any;
  public input:any;
  public input1:any;
  public input2:any;
  public segmentvalue : any  = "complete";
  public getcusromer1:any
  public getexpence: any;
  public getbilldetails: any;
  constructor( public apicall: ApicallService , public global: GlobalService) {}
  ngOnInit(){
    this.apicall.api_getcustomer();
    this.global.Getcustomer.subscribe(res=>{
      this.getcusromer1 = res;
      console.log(this.getcusromer1)
    });

    this.apicall.api_getexpance()
    this.global.Getexpance.subscribe(res=>{
      this.getexpence =res;
      console.log(this.getexpence)
    });
    this.apicall.api_getbilldetails();
    this.global.Getbilldetails.subscribe(res=>{
     this.getbilldetails = res;
      console.log(this.getbilldetails)
    })
  }
  Customer(){
  this.isshowcustomer=true;
  this.isshowexpence=false;
  this.segmentvalue = "complete";
  }
  Expence(){
this.isshowexpence=true;
this.isshowcustomer=false;
this.segmentvalue = "reject";
  }
  addcustomer(){
    this.apicall.api_addcustomer(this.user)
    console.log(this.user)
  }
 
  addexpance() {
  this.apicall.api_addexpance(this.data)
  console.log(this.data)
}
addbill(){
  this.apicall.api_addbilldetails(this.data1);
  console.log(this.data1)
}
 

}
