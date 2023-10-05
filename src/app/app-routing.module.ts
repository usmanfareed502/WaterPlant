import { LoginGuard } from './auth/guards/login.guard';
import { DefaultlayoutComponent } from './Default/defaultlayout/defaultlayout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { TestComponent } from './pages/test/test.component';
import { DataenterComponent } from './pages/dataenter/dataenter.component';

const routes: Routes = [
        { path: '', redirectTo: 'login', pathMatch: 'full' },
        { path: 'login', component: LoginComponent, canActivate: [LoginGuard], data: { title: 'Login' } },
        // { path: 'default/dashboard', component: DashboardComponent },
        {path:'', loadChildren: () => import('../app/Default/defaultlayout/defaultlayout.module').then(module => module.DefaultlayoutModule)},
        { path: 'test', component: TestComponent },
        { path: 'dataenter', component:  DataenterComponent },
        // { path: 'default/login', component: LoginComponent },
  // {
  //   path: 'login', component: LoginComponent , canActivate:[LoginGuard]
  // }
]

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash: true} )],
  exports: [RouterModule]
})

export class AppRoutingModule { }
