import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/services/apicall.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public user : any = {username:'', password:''};
  constructor(public apicall: ApicallService, public global : GlobalService, public router : Router) {}

  addlogin() {
    this.router.navigate(['default/dashboard']);

    // console.log(this.user);
    // this.apicall.api_getlogin(this.user);
  }
  
  handleUpload($event:any) {
    console.log($event)
    console.log($event.target.files[0])
    const file = $event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        console.log(reader.result);
    };
  }

}
