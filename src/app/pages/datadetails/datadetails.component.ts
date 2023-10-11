import { Component } from '@angular/core';
import { ApicallService } from 'src/app/services/apicall.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-datadetails',
  templateUrl: './datadetails.component.html',
  styleUrls: ['./datadetails.component.scss']
})
export class DatadetailsComponent {

  

  constructor( public apicall: ApicallService , public global: GlobalService) {}

  ngOnInit(){

  }
       // ngOnInit() {
  //   this.apicall.api_getmedicineckeckup();
  //   this.global.Getmedicineckeckup.subscribe(res=>{
  //     this.getmedicineckeckup =res;
  //     console.log(this.getmedicineckeckup)
  //   })
  // }
    // this.apicall.api_getmedicineckeckup1()
    // this.global.Getmedicineckeckup1.subscribe(res=>{
    //   this.getmedicineckeckup1=res;
    //   console.log(this.getmedicineckeckup1)
    // })
  
  // async descraption(item:any){
  //   console.log(item)
  //   this.des = item.description
  //   await this.apicall.api_getmedicineckeckup(item.p_id)
  //    this.global.Getmedicineckeckup.subscribe(res=>{
  //     this.getmedicineckeckup=res;
  //     console.log(this.getmedicineckeckup)
  //    });
  // }
 
}
