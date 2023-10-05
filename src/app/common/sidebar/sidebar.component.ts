import { Component, Renderer2 } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private renderer: Renderer2,
    // private commonService: CommonService,
    // private authServe: AuthService,
    // private loaderService: LoaderService
  ) {
   
   }
   showData = false;

  toggleData() {
    this.showData = !this.showData;
  }
   public loadScript(url: string) {
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  keepDropdownOpen(event: Event): void {
    event.stopPropagation();
  } 
  
}