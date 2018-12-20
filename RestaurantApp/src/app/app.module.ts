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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ManagerComponent,
    ManagerZarzadComponent,
    WaiterComponent,
    ManagerReportComponent,
    ManagerFeedbackComponent,
    WaiterTableComponent,
    ManagerFeedDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularDateTimePickerModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { delay: 1500  }
    )
  ],
  providers: [LoginService, CookieService, TableService, FeedbackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
