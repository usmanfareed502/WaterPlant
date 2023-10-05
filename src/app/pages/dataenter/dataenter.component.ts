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
    ref: 'Refrence Number', date: 'Date', time: 'Time',day:'Days', name: 'Name', fn: 'Father Name',
    dis: 'Discraption', gender: 'Gender', sg: 'Select  Gender', m: 'Male', fem: 'Female', ot: 'Other',
    medicine: 'Medicine', submit: 'Submit'
  }
  public addmorebtn: string = 'cancel';
  public linkcolordropdownSettings={}
  public allowSearchFilter=true;
  public allprintcolor: any = [];
  public user: any = { reference_number: '', date: '', time: '',day:'', name: '', father_name: '', description: '', gender: '', temperature:'',bp:'',pluse:'',other:'', medicines: [] }
  public alloptionsdata: any = []
  public allmedicine: any = []
  constructor(public apicall: ApicallService, public global: GlobalService) { }

  ngOnInit() {
    this.apicall.api_getmedicine();
    this.global.Getmedicine.subscribe(res => {
      this.alloptionsdata = res;
      console.log(this.allmedicine);
    });
    this.linkcolordropdownSettings = {
      textField: 'name',
      allowSearchFilter: true,
      clearSearchFilter: true,
    };
  }

 
  async adddata() {
    await this.apicall.api_adddataa(this.user)
    console.log(this.user)
    this.user = {
      reference_number: '', date: '', time: '',day:'', name: '', father_name: '', description: '',  gender: '',
      temperature:'',bp:'',pluse:'',other:'',
     
      medicines: []
    }
  }

}