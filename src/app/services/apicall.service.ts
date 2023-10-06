import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { ToastService } from './toast.service';

const connectionTitle = "Connection Problem!";
const connectionMesg = "Please Check Your Internet Connection";
const congratesTitle = "Congratulations!";
const sorryTitle = "Sorry!";
@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  addbilldetails: any;
  getordercomplete(arg0: string) {
    throw new Error('Method not implemented.');
  }
   data: any;
   public title: any = 'LOGIN SUCCESSFUL';
  public message:any = 'you are successful login';
  constructor
  ( public global: GlobalService,public router:Router ,
    public authservice: AuthService, public toast : ToastService) 
   {}
 /////post/////
 async api_loginwaterplant(data : any ){
  await this.authservice.con(data,'loginwaterplant').then(async (res) => {
     this.data = JSON.parse(String(res).toString());
     console.log(this.data);
     if(this.data.error == false)
     {
      this.toast.SuccessToast(this.message , this.title);
      this.router.navigate(['./default/dashboard'])
      this.global.set_loginwaterplant(this.data)
     }
     else {
      this.message = 'Username or password missmatched'
      this.title = 'LOGIN UNSUCCESSFUL'
      this.toast.ErrorToast(this.message , this.title);
     }

   }, (err) => {
     console.log(err);
   });
 }

 async api_addcustomer(data : any ){
  await this.authservice.con(data, 'addcustomer').then(async (res) => {
     this.data = JSON.parse(String(res).toString());
   
   }, (err) => {
     console.log(err);
   });
 }

async api_getcustomer() {
await this.authservice.getdata('getcustomer').then((result) => {
    this.data = JSON.parse(String(result));
   console.log(this.data);
    this.global.set_getcustomer(this.data);
  }, (err) => {
    console.log(err);
  });
}


async api_addexpance(data : any ){
  await this.authservice.con(data, 'addexpance').then(async (res) => {
     this.data = JSON.parse(String(res).toString());
   
   }, (err) => {
     console.log(err);
   });
 }

 async api_getexpance() {
  await this.authservice.getdata('getexpance').then((result) => {
      this.data = JSON.parse(String(result));
     console.log(this.data);
      this.global.set_getexpance(this.data);
    }, (err) => {
      console.log(err);
    });
  }

  async api_addbilldetails(data : any ){
    await this.authservice.con(data, 'addbilldetails').then(async (res) => {
       this.data = JSON.parse(String(res).toString());
     
     }, (err) => {
       console.log(err);
     });
   }
   async api_getbilldetails() {
    await this.authservice.getdata('getbilldetails').then((result) => {
        this.data = JSON.parse(String(result));
       console.log(this.data);
        this.global.set_getbilldetails(this.data);
      }, (err) => {
        console.log(err);
      });
    }
  
  





 async api_adddatamedicine(data : any ){
  await this.authservice.con(data, 'adddatamedicine').then(async (res) => {
     this.data = JSON.parse(String(res).toString());
   
   }, (err) => {
     console.log(err);
   });
 }
///

async api_adddataa(data : any ){
  await this.authservice.con(data, 'adddataa').then(async (res) => {
     this.data = JSON.parse(String(res).toString());
    
   }, (err) => {
     console.log(err);
   });
 }
 async api_getlogin(data : any ){
  await this.authservice.con(data, 'loginsing').then(async (res) => {
     this.data = JSON.parse(String(res).toString());
     console.log(this.data);
     if(this.data.error == false)
     {
      this.toast.SuccessToast(this.message , this.title);
      // this.router.navigate(['./default/dataenter'])
      this.global.set_getlogin(this.data)
     }
     else {
      this.message = 'Username or password missmatched'
      this.title = 'LOGIN UNSUCCESSFUL'
      this.toast.ErrorToast(this.message , this.title);
     }

   }, (err) => {
     console.log(err);
   });
 }

///get///
async api_getmedicine() {
await this.authservice.getdata('getmedicine').then((result) => {
    this.data = JSON.parse(String(result));
   console.log(this.data);
    this.global.set_getmedicine(this.data);
  }, (err) => {
    console.log(err);
  });
}
/////
async api_getmedicineckeckup(p_id:any) {
  await this.authservice.getdata('getmedicineckeckup/'+p_id).then((result) => {
      const data = JSON.parse(String(result));
    //  console.log(this.data);
      this.global.set_getmedicineckeckup(data);
    }, (err) => {
      console.log(err);
    });
  }
  ///
  async api_getmedicineckeckup1() {
    await this.authservice.getdata('getmedicineckeckup1').then((result) => {
        this.data = JSON.parse(String(result));
       console.log(this.data);
        this.global.set_getmedicineckeckup1(this.data);
      }, (err) => {
        console.log(err);
      });
    }


//  async api_addcheckupmedicine(data : any ){
//   await this.authservice.con(data, 'addcheckupmedicine').then(async (res) => {
//      this.data = JSON.parse(String(res).toString());
//    }, (err) => {
//      console.log(err);
//    });
//  }
  // async api_getmedicineckeckup() {
  //   await this.authservice.getdata('getmedicineckeckup').then((result) => {
  //       this.data = JSON.parse(String(result));
  //      console.log(this.data);
  //       this.global.set_getmedicineckeckup(this.data);
  //     }, (err) => {
  //       console.log(err);
  //     });
  //   }
}
