import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {SharedRoutingModule} from './shared-routing.module';
import { SidebarComponent } from "./side-navbar/sidebar/sidebar.component";
import { HeaderComponent } from "./top-header/header/header.component";

const COMPONENTS = [
    SidebarComponent,
    HeaderComponent
];



@NgModule({
    declarations:[...COMPONENTS,],
    imports:[
        CommonModule,
        SharedRoutingModule
    ],
    exports:[...COMPONENTS,],
    })
    export class SharedModule { }