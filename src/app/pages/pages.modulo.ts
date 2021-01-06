import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from "./pages.routes";
import { FormsModule } from "@angular/forms";

//Temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';

// ng2-charts
import { ChartsModule } from 'ng2-charts';
import { GraficoDonaComponent } from '../componentes/grafico-dona/grafico-dona.component';

@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent,
        IncrementadorComponent,
        GraficoDonaComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component      
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ]

})

export class PagesModule { }