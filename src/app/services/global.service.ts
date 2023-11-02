import {
    Injectable
}
from '@angular/core';
import {
    BehaviorSubject
}
from 'rxjs';

@Injectable({ providedIn: 'root' }) export class GlobalService {

    constructor() {}
   
  private loginwaterplant=new BehaviorSubject<any>('');
  public Loginwaterplant=this.loginwaterplant.asObservable();
  set_loginwaterplant(loginwaterplant:any){
    this.loginwaterplant.next(loginwaterplant)
    console.log(loginwaterplant)
  }

private addcustomer=new BehaviorSubject<any>('');
public Addcustomer=this.addcustomer.asObservable()
set_addcustomer(addcustomer:any){
this.addcustomer.next(addcustomer)
console.log(addcustomer)
}

private getcustomer=new BehaviorSubject<any>('');
public Getcustomer=this.getcustomer.asObservable()
set_getcustomer(getcustomer:any){
this.getcustomer.next(getcustomer)
console.log(getcustomer)
}

private getexpance=new BehaviorSubject<any>('');
public Getexpance=this.getexpance.asObservable()
set_getexpance(getexpance:any){
this.getexpance.next(getexpance)
console.log(getexpance)
}
private addexpance=new BehaviorSubject<any>('');
public Addexpance=this.addexpance.asObservable()
set_addexpance(addexpance:any){
this.addexpance.next(addexpance)
console.log(addexpance)
}

private addbilldetails=new BehaviorSubject<any>('');
public Addbilldetails=this.addbilldetails.asObservable()
set_addbilldetails(addbilldetails:any){
this.addbilldetails.next(addbilldetails)
console.log(addbilldetails)
}

private getbilldetails=new BehaviorSubject<any>('');
public Getbilldetails=this.getbilldetails.asObservable()
set_getbilldetails(getbilldetails:any){
this.getbilldetails.next(getbilldetails)
console.log(getbilldetails)
}
private addexpancedetails=new BehaviorSubject<any>('');
public Addexpancedetails=this.addexpancedetails.asObservable()
set_addexpancedetails(addexpancedetails:any){
this.addexpancedetails.next(addexpancedetails)
console.log(addexpancedetails)
}

private getexpancedetails=new BehaviorSubject<any>('');
public Getexpancedetails=this.getexpancedetails.asObservable()
set_getexpancedetails(getexpancedetails:any){
this.getexpancedetails.next(getexpancedetails)
console.log(getexpancedetails)
}

private getcustomerdetail=new BehaviorSubject<any>('');
public Getcustomerdetail=this.getcustomerdetail.asObservable()
set_getdatabyc_id(getcustomerdetail:any){
this.getcustomerdetail.next(getcustomerdetail)
console.log(getcustomerdetail)
}






    private adddatamedicine = new BehaviorSubject<any>('');
    public Adddatamedicine = this.adddatamedicine.asObservable();

    set_adddatamedicine(adddatamedicine : any) {
        this.adddatamedicine.next(adddatamedicine);
        console.log(adddatamedicine);
    }
 
 private adddataa = new BehaviorSubject<any>('');
    public Adddataa = this.adddataa.asObservable();

    set_adddataa(adddataa : any) {
        this.adddataa.next(adddataa);
        console.log(adddataa);
    }

    private getlogin = new BehaviorSubject<any>('');
    public Getlogin = this.getlogin.asObservable();

    set_getlogin(getlogin : any) {
        this.getlogin.next(getlogin);
        console.log(getlogin);
    }
/////////////
    private getmedicine = new BehaviorSubject<any>('');
    public Getmedicine = this.getmedicine.asObservable();

    set_getmedicine(getmedicine : any) {
        this.getmedicine.next(getmedicine);
        console.log(getmedicine);
    }

    private getmedicineckeckup = new BehaviorSubject<any>('');
    public Getmedicineckeckup = this.getmedicineckeckup.asObservable();

    set_getmedicineckeckup(getmedicineckeckup : any) {
        this.getmedicineckeckup.next(getmedicineckeckup);
        console.log(getmedicineckeckup);
    }

    private getmedicineckeckup1 = new BehaviorSubject<any>('');
    public Getmedicineckeckup1 = this.getmedicineckeckup1.asObservable();

    set_getmedicineckeckup1(getmedicineckeckup1 : any) {
        this.getmedicineckeckup1.next(getmedicineckeckup1);
        console.log(getmedicineckeckup1);
    }

    private getTransaction = new BehaviorSubject<any>('');
    public GetTransaction = this.getTransaction.asObservable();

    set_getgetTransaction(getTransaction : any) {
        this.getTransaction.next(getTransaction);
        console.log(getTransaction);
    }
    private getcustomerbills = new BehaviorSubject<any>('');
    public Getcustomerbills = this.getcustomerbills.asObservable();

    set_getcustomerbills(getcustomerbills : any) {
        this.getcustomerbills.next(getcustomerbills);
        console.log(getcustomerbills);
    }

   

}
