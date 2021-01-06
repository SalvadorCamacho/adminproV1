import { NgModule } from "@angular/core";
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';



@NgModule ({
    declarations: [
        HeaderComponent,
        SidebarComponent,
        NopagefoundComponent,
        BreadcrumsComponent
    ],
    exports: [
        NopagefoundComponent,
        HeaderComponent,
        SidebarComponent,        
        BreadcrumsComponent      
    ] 

})

export class SharedModule { }