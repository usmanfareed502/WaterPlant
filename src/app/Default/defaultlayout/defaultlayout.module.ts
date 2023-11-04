import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DefaultlayoutComponent } from './defaultlayout.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from 'src/app/common/header/header.component';
import { SidebarComponent } from 'src/app/common/sidebar/sidebar.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TestComponent } from 'src/app/pages/test/test.component';
import { DataenterComponent } from 'src/app/pages/dataenter/dataenter.component';
import { DatadetailsComponent } from 'src/app/pages/datadetails/datadetails.component';
import { AddmedicineComponent } from 'src/app/pages/addmedicine/addmedicine.component';
import { SeemedicineComponent } from 'src/app/pages/seemedicine/seemedicine.component';
import { CustomerDetailComponent } from 'src/app/pages/customer-detail/customer-detail.component';
const routes: Routes = [
    // { path: '', redirectTo: '/layout', pathMatch: 'full', data: { title: 'Layout' } },
    {
      path: '', component: DefaultlayoutComponent,
      // canActivate: [MainGuard],
      // canLoad: [MainGuard],
      children:
        [
          { path: '', redirectTo: '/default/dashboard', pathMatch: 'full' },
          { path: 'default/dashboard', component: DashboardComponent },
          { path: 'default/dataenter', component: DataenterComponent },
          { path: 'default/datadetails', component:  DatadetailsComponent },
          { path: 'default/addmedicine', component:   AddmedicineComponent },
          { path: 'default/seemedicine', component:    SeemedicineComponent },
          { path: 'default/customer-detail', component:    CustomerDetailComponent },
          { path: 'default/test', component:    TestComponent },
          // { path: 'default/test', component: TestComponent },

  
      ]
    },
  ]
  
  @NgModule({
    declarations: [
        DefaultlayoutComponent,
        HeaderComponent,
        SidebarComponent,
        DashboardComponent,
    ],
    imports: [
      HttpClientModule,
      CommonModule,
      RouterModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forChild(routes),
      NgApexchartsModule
    ],
    exports: [RouterModule],
    providers: [
      {provide: LocationStrategy, useClass: HashLocationStrategy},
    ],
    bootstrap: [DefaultlayoutComponent],
  })
  export class DefaultlayoutModule { }
  