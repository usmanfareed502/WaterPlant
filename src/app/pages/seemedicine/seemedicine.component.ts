import { Component } from '@angular/core';
import { ApicallService } from 'src/app/services/apicall.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-seemedicine',
  templateUrl: './seemedicine.component.html',
  styleUrls: ['./seemedicine.component.scss']
})
export class SeemedicineComponent {
  public allbills: any;
  constructor( public apicall: ApicallService , public global: GlobalService) {}
  ngOnInit() {
    this.apicall.api_getallbils();
    this.global.Getcustomerbills.subscribe( res =>{
      this.allbills = res;
      console.log(this.allbills);
    })
  }
}
