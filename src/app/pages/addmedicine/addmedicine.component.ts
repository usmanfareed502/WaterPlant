import { Component } from '@angular/core';
import { ApicallService } from 'src/app/services/apicall.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-addmedicine',
  templateUrl: './addmedicine.component.html',
  styleUrls: ['./addmedicine.component.scss']
})
export class AddmedicineComponent {

 public data:any={name:'Medicine Name',copmanyname:'company name'}
 
  public user:any={ name:'',company_name:''}

  public isshowcustomer=false;
  public isshowexpence=false;
  public inputValue: any;
  public input:any;
  public input1:any;
  public input2:any;
  constructor( public apicall: ApicallService , public global: GlobalService) {}
  ngOnInit(){
    
  }
  Customer(){
  this.isshowcustomer=true;
  this.isshowexpence=false;
  }
  Expence(){
this.isshowexpence=true;
this.isshowcustomer=false;
  }
  // addmedicine(){
  //   console.log(this.user)
  //    this.apicall.api_adddatamedicine(this.user)
  //    this.user = { name: '', company_name: '' };
  // }
  inputdata1(){
    console.log(this.input);
    console.log(this.input1);
    console.log(this.input2);
  }
 
  inputdata() {
    console.log(this.inputValue);   
}
 

}
