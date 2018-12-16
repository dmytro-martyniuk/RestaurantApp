import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule }     from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service/login.service';
import { WaiterComponent } from './waiter/waiter.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WaiterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [LoginService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
