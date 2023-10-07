import { Component } from '@angular/core';
import { ApicallService } from 'src/app/services/apicall.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-datadetails',
  templateUrl: './datadetails.component.html',
  styleUrls: ['./datadetails.component.scss']
})
export class DatadetailsComponent {

  public data:any=
  {RefrenceNumber:'Refrence Number',date:'Date',time:'Time',day:'Day',name:'Name',
    name1:'Father Name',gender:'Gender',more:'More',harbal:'Harbal-Medicine',
    medicine:'Medicines',dis:'Discription',close:'Close',under:'Understood'} 

  // public getmedicineckeckup: any[] = [];
  // public getmedicineckeckup1: any;
  // des: any;

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
