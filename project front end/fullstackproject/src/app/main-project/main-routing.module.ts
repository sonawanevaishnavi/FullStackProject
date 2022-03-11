import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { LoginComponent } from './login model/login/login.component';
import { MainProjectComponent } from './main.component';


const routes: Routes = [
    {path:'',
    component:MainProjectComponent,
    children:[
      {
        path:'landing',
        component:LoginComponent
      },
      {
        path:'',
        redirectTo:'landing',
        pathMatch:'full',
      },
      {
        path:'dashboard',
        component:DashboardComponent
      },

    ]}
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class MainRoutingModule { }