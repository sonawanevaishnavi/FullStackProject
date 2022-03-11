import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'Main',loadChildren:()=>import('./main-project/main.module').then(m=>m.MainModule)},
  {path:'',redirectTo:'Main',pathMatch:'full'},
  {path:'**',redirectTo:'Main'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
