import { Component } from '@angular/core';
import { ApicallService } from 'src/app/services/apicall.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-datadetails',
  templateUrl: './datadetails.component.html',
  styleUrls: ['./datadetails.component.scss']
})
export class DatadetailsComponent {

<<<<<<< HEAD
  
=======
>>>>>>> 9bfe86648527424fe58a507e6ccb6afdb8961fb8

  constructor( public apicall: ApicallService , public global: GlobalService) {}
  public transationdetal: any;
  ngOnInit(){
      this.apicall.api_gettransaction();
      this.global.GetTransaction.subscribe( res=>{
        this.transationdetal = res;
        console.log(this.transationdetal)
      })
  }

 
}
