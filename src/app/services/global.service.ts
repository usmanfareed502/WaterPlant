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

   

}
