import { Component, ViewChild } from '@angular/core'; 
import { ApicallService } from 'src/app/services/apicall.service';
import { GlobalService } from 'src/app/services/global.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  getcusromer1: any;
  transationdetal: any;
  allbills: any;
  pendingbills: any;
  confirmbills: any;
  
  constructor(public apicall: ApicallService, public global: GlobalService) { }
  async ngOnInit() {
    this.apicall.api_gettransaction();
    this.global.GetTransaction.subscribe( res=>{
      this.transationdetal = res;
      console.log(this.transationdetal)
    });
    await this.apicall.api_getcustomer();
    this.global.Getcustomer.subscribe(res => {
      this.getcusromer1 = res;
      console.log(this.getcusromer1)
    });
    this.apicall.api_getallbils();
    this.global.Getcustomerbills.subscribe( res =>{
      this.allbills = res;
      console.log(this.allbills);
      this.pendingbills =  this.allbills[0].filter((x: { paymentstatus: string; }) => x.paymentstatus === 'pending').length;
     console.log(this.pendingbills)
     this.confirmbills =  this.allbills[0].filter((x: { paymentstatus: string; }) => x.paymentstatus === 'confirm').length;
     console.log(this.confirmbills)

    })
  }
}
