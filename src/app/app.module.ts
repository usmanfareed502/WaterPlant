import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, DatePipe, HashLocationStrategy , LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { DefaultlayoutComponent } from './Default/defaultlayout/defaultlayout.component';
// import { HeaderComponent } from './common/header/header.component';
// import { SidebarComponent } from './common/sidebar/sidebar.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPrintModule } from 'ngx-print';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TestComponent } from './pages/test/test.component';
import { DataenterComponent } from './pages/dataenter/dataenter.component';
import { DatadetailsComponent } from './pages/datadetails/datadetails.component';
import { AddmedicineComponent } from './pages/addmedicine/addmedicine.component';
import { SeemedicineComponent } from './pages/seemedicine/seemedicine.component';
import { CustomerDetailComponent } from './pages/customer-detail/customer-detail.component';
import { SafeurlPipe } from './services/pipes/safeUrl/safeurl.pipe';
@NgModule({
  declarations: [
    AppComponent,
    // DefaultlayoutComponent,
    // HeaderComponent,
    // SidebarComponent,
    LoginComponent,
    TestComponent,
    DataenterComponent,
    DatadetailsComponent,
    AddmedicineComponent,
    SeemedicineComponent,
    CustomerDetailComponent,
    SafeurlPipe,
    // DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    NgxPrintModule,
    NgMultiSelectDropDownModule.forRoot(),
    ToastrModule.forRoot(
      {
        timeOut: 3000,
        closeButton: true,
        // progressBar: true,
      }
    ),
    NgApexchartsModule,
    CommonModule
  ],
  providers: [{provide: LocationStrategy , useClass:HashLocationStrategy},DatePipe], 
  bootstrap: [AppComponent]
})
export class AppModule { 


}
