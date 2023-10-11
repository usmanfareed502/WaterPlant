import { Component, OnInit } from '@angular/core';
import { ApicallService } from 'src/app/services/apicall.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-datadetails',
  templateUrl: './datadetails.component.html',
  styleUrls: ['./datadetails.component.scss']
})
export class DatadetailsComponent implements OnInit {
 
  public getexpence: any;
  public transationdetal: any;
  constructor( public apicall: ApicallService , public global: GlobalService) {}
 
  ngOnInit(){
      this.apicall.api_gettransaction();
      this.global.GetTransaction.subscribe( res=>{
        this.transationdetal = res;
        console.log(this.transationdetal)
      });

      this.apicall.api_getexpance()
      this.global.Getexpance.subscribe(res => {
        this.getexpence = res;
        console.log(this.getexpence)
      });
  }
  expensename(event: any){
  }

 
}
