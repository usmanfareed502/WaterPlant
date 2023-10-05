import { Component } from '@angular/core';
import { ApicallService } from 'src/app/services/apicall.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-seemedicine',
  templateUrl: './seemedicine.component.html',
  styleUrls: ['./seemedicine.component.scss']
})
export class SeemedicineComponent {
  public data={name:'Medicine Name',companyname:'company Name'}
  
  public allmedicine: any;
// getmedicine: any;

  constructor( public apicall: ApicallService , public global: GlobalService) {}
  ngOnInit() {
    this.apicall.api_getmedicine();
    this.global.Getmedicine.subscribe( res=>{
      this.allmedicine = res;
      console.log(this.allmedicine);
    })
    
  }
}
