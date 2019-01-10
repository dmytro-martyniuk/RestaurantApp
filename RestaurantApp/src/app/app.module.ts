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
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { ManagerReportComponent } from './managerMain/manager-report/manager-report.component';
import { ManagerFeedbackComponent } from './managerMain/manager-feedback/manager-feedback.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './database/in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { WaiterTableComponent } from './waiterMain/waiter-table/waiter-table.component';
import { TableService } from './services/table.service/table.service';
import { FeedbackService } from './services/feedback.service/feedback.service';
import { ManagerFeedDetailComponent } from './managerMain/manager-feed-detail/manager-feed-detail.component';
import { WaiterZamowienieComponent } from './waiterMain/waiter-zamowienie/waiter-zamowienie.component';
import { WaiterStartZamowienieComponent } from './waiterMain/waiter-start-zamowienie/waiter-start-zamowienie.component';
import { WaiterAddDishComponent } from './waiterMain/waiter-add-dish/waiter-add-dish.component';
import { WaiterDishListComponent } from './waiterMain/waiter-dish-list/waiter-dish-list.component';
import { WaiterCheckComponent } from './waiterMain/waiter-check/waiter-check.component';
import { WaiterOrderFinishComponent } from './waiterMain/waiter-order-finish/waiter-order-finish.component';
import { WaiterPopupComponent } from './waiterMain/waiter-popup/waiter-popup.component';
import { ManagerAddFeedbackComponent } from './managerMain/manager-add-feedback/manager-add-feedback.component';
import { FormsModule } from '@angular/forms';
import { ManagerZarzStolikComponent } from './managerMain/manager-zarz-stolik/manager-zarz-stolik.component';
import { ManagerZarzStolikL1Component } from './managerMain/manager-zarz-stolik-l1/manager-zarz-stolik-l1.component';
import { ManagerZarzStolikL2Component } from './managerMain/manager-zarz-stolik-l2/manager-zarz-stolik-l2.component';
import { ManagerZarzStolikL3Component } from './managerMain/manager-zarz-stolik-l3/manager-zarz-stolik-l3.component';
import { ManagerZarzStolikL4Component } from './managerMain/manager-zarz-stolik-l4/manager-zarz-stolik-l4.component';
import { ManagerZarzStolikL5Component } from './managerMain/manager-zarz-stolik-l5/manager-zarz-stolik-l5.component';
import { ManagerZarzStolikL6Component } from './managerMain/manager-zarz-stolik-l6/manager-zarz-stolik-l6.component';
import { DanieService } from './services/danie.service/danie.service';
import { MenuListComponent } from './managerMain/menu-list/menu-list.component';
import { DanieDetailComponent } from './managerMain/danie-detail/danie-detail.component';
import { ManagerAddDanieComponent } from './managerMain/manager-add-danie/manager-add-danie.component';
import { ManagerDanieDetailComponent } from './managerMain/manager-danie-detail/manager-danie-detail.component';
import { CookDashboardComponent } from './cook/cook-dashboard/cook-dashboard.component';
import { CookService } from './services/cook.service/cook.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ManagerComponent,
    ManagerZarzadComponent,
    WaiterComponent,
    WaiterTableComponent,
    WaiterZamowienieComponent,
    WaiterStartZamowienieComponent,
    ManagerReportComponent,
    ManagerFeedbackComponent,
    WaiterTableComponent,
    ManagerFeedDetailComponent,
    ManagerAddFeedbackComponent,
    WaiterAddDishComponent,
    WaiterDishListComponent,
    WaiterCheckComponent,
    WaiterOrderFinishComponent,
    ManagerFeedDetailComponent,
    WaiterPopupComponent,
    ManagerZarzStolikComponent,
    ManagerZarzStolikL1Component,
    ManagerZarzStolikL2Component,
    ManagerZarzStolikL3Component,
    ManagerZarzStolikL4Component,
    ManagerZarzStolikL5Component,
    ManagerZarzStolikL6Component,
    MenuListComponent,
    DanieDetailComponent,
    ManagerAddDanieComponent,
    ManagerDanieDetailComponent,
    CookDashboardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularDateTimePickerModule,
    HttpClientModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [LoginService, CookieService, TableService, FeedbackService, InMemoryDataService, DanieService, CookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
