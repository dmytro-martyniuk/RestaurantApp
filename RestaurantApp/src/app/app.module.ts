import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule }     from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './managerMain/manager/manager.component';
import { ManagerZarzadComponent } from './managerMain/manager-zarzad/manager-zarzad.component';
import { LoginService } from './services/login.service/login.service';
import { WaiterComponent } from './waiter/waiter.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ManagerComponent,
    ManagerZarzadComponent,
    WaiterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
