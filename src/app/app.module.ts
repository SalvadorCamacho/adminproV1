import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTES } from './app.routes';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

// Servicios

import { ServiceModule } from './services/service.module';

// Módulos
import { PagesModule } from './pages/pages.modulo';
import { FormsModule } from '@angular/forms';
import { RxjsComponent } from './pages/rxjs/rxjs.component';;
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, 
    RegisterComponent, RxjsComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
