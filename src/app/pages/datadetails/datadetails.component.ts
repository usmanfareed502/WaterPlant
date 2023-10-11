import { DatePipe } from '@angular/common';
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
  public filterDtata: any = { type: null, start:null, end:null}
  constructor( public apicall: ApicallService , public global: GlobalService , public datePipe: DatePipe) {}
 
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
    this.filterDtata.type = event.target.value;

  }
  get_installmentbymoont(event: any) {
    const startDate = new Date(event.target.value);
    startDate.setDate(1); // Set the day to 1 to get the start of the month

    const endDate = new Date(startDate);
    endDate.setMonth(endDate.getMonth() + 1);
    endDate.setDate(endDate.getDate() - 1); // Subtract 1 day to get the end of the month

    const formattedStartDate = this.datePipe.transform(startDate, 'yyyy-MM-dd');
    const formattedEndDate = this.datePipe.transform(endDate, 'yyyy-MM-dd');
    console.log(formattedStartDate);
    console.log(formattedEndDate);
    this.filterDtata.start = formattedStartDate;
    this.filterDtata.end = formattedEndDate;
    return { start: formattedStartDate, end: formattedEndDate };
  }
  filtertransactions(){
    console.log(this.filterDtata)
    this.apicall.api_gettransactionsbyfilter(this.filterDtata)
  }
}
