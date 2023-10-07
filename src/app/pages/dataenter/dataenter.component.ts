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
  public data: any = {
    Customer_Name: 'Customer Name',Customer_Number:'Customer Number',Customer_Address: 'Customer Address',submit: 'Submit',
    date:'Date',security:'Security',No_of_bottels:'No of bottels',return:'Return',empty:'Empty',amount:'Amount',
    descount:'Descount in %',total:'Total',sucmitted:'Sucmitted bill',remeaning:'Remeaning bill'
  }
  // public addmorebtn: string = 'cancel';
  // public linkcolordropdownSettings={}
  // public allowSearchFilter=true;
  // public allprintcolor: any = [];
  public user: any = { name: '', father_name: ''}
  // public alloptionsdata: any = []
  // public allmedicine: any = []
  constructor(public apicall: ApicallService, public global: GlobalService) { }

  ngOnInit() {
     
  }

 
  async adddata() {
    // await this.apicall.api_adddataa(this.user)
    // console.log(this.user)
    // this.user = {
    //   reference_number: '', date: '', time: '',day:'', name: '', father_name: '', description: '',  gender: '',
    //   temperature:'',bp:'',pluse:'',other:'',
     
    //   medicines: []
    // }
  }

}