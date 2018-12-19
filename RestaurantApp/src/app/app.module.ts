import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule }     from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './managerMain/manager/manager.component';
import { ManagerZarzadComponent } from './managerMain/manager-zarzad/manager-zarzad.component';
import { LoginService } from './services/login.service/login.service';
import { WaiterComponent } from './waiterMain/waiter/waiter.component';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './database/in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { WaiterTableComponent } from './waiterMain/waiter-table/waiter-table.component';
import { TableService } from './services/table.service/table.service';
import { WaiterZamowienieComponent } from './waiterMain/waiter-zamowienie/waiter-zamowienie.component';
import { WaiterStartZamowienieComponent } from './waiterMain/waiter-start-zamowienie/waiter-start-zamowienie.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ManagerComponent,
    ManagerZarzadComponent,
    WaiterComponent,
    WaiterTableComponent,
    WaiterZamowienieComponent,
    WaiterStartZamowienieComponent
    ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [LoginService, CookieService, TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
