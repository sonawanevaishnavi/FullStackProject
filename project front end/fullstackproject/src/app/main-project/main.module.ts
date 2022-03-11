import { NgModule } from "@angular/core";
import { MainRoutingModule} from "./main-routing.module";
import { MainProjectComponent } from "./main.component";
import { DashboardComponent } from "./dashboard/dashboard/dashboard.component";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { RegisterComponent } from './register/register/register.component';

const component = [
    MainProjectComponent,
    DashboardComponent,
  
  ];

  @NgModule({
      declarations:[...component, RegisterComponent],
    imports:[
        MainRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    

    ],
exports:[...component],
})

export class MainModule {}