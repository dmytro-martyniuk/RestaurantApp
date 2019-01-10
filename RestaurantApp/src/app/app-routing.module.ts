import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WaiterComponent } from './waiterMain/waiter/waiter.component';
import { ManagerComponent } from './managerMain/manager/manager.component';
import { ManagerZarzadComponent } from './managerMain/manager-zarzad/manager-zarzad.component'
import { ManagerReportComponent } from './managerMain/manager-report/manager-report.component'
import { ManagerFeedbackComponent } from './managerMain/manager-feedback/manager-feedback.component';
import { WaiterTableComponent } from './waiterMain/waiter-table/waiter-table.component';
import { ManagerFeedDetailComponent } from './managerMain/manager-feed-detail/manager-feed-detail.component';
import { WaiterStartZamowienieComponent } from './waiterMain/waiter-start-zamowienie/waiter-start-zamowienie.component';
import { WaiterZamowienieComponent } from './waiterMain/waiter-zamowienie/waiter-zamowienie.component';
import { ManagerAddFeedbackComponent } from './managerMain/manager-add-feedback/manager-add-feedback.component';
import { WaiterAddDishComponent } from './waiterMain/waiter-add-dish/waiter-add-dish.component';
import { WaiterDishListComponent } from './waiterMain/waiter-dish-list/waiter-dish-list.component';
import { WaiterCheckComponent } from './waiterMain/waiter-check/waiter-check.component';
import { WaiterOrderFinishComponent } from './waiterMain/waiter-order-finish/waiter-order-finish.component';
import { WaiterPopupComponent } from './waiterMain/waiter-popup/waiter-popup.component';
import { ManagerZarzStolikComponent } from './managerMain/manager-zarz-stolik/manager-zarz-stolik.component';
import { ManagerZarzStolikL1Component } from './managerMain/manager-zarz-stolik-l1/manager-zarz-stolik-l1.component';
import { ManagerZarzStolikL2Component } from './managerMain/manager-zarz-stolik-l2/manager-zarz-stolik-l2.component';
import { ManagerZarzStolikL3Component } from './managerMain/manager-zarz-stolik-l3/manager-zarz-stolik-l3.component';
import { ManagerZarzStolikL5Component } from './managerMain/manager-zarz-stolik-l5/manager-zarz-stolik-l5.component';
import { ManagerZarzStolikL4Component } from './managerMain/manager-zarz-stolik-l4/manager-zarz-stolik-l4.component';
import { ManagerZarzStolikL6Component } from './managerMain/manager-zarz-stolik-l6/manager-zarz-stolik-l6.component';
import { MenuListComponent } from './managerMain/menu-list/menu-list.component';
import { ManagerAddDanieComponent } from './managerMain/manager-add-danie/manager-add-danie.component';
import { ManagerDanieDetailComponent } from './managerMain/manager-danie-detail/manager-danie-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'manager', component: ManagerComponent },
  { path: 'waiter', component: WaiterComponent },
  { path: 'waiter-table/:lokalizacja', component: WaiterTableComponent },
  { path: 'new-order', component: WaiterStartZamowienieComponent },
  { path: 'order-all', component: WaiterZamowienieComponent },
  { path: 'manager/mgmnt', component: ManagerZarzadComponent },
  { path: 'manager/report', component: ManagerReportComponent },
  { path: 'manager/feedback', component: ManagerFeedbackComponent },
  { path: 'waiter-table/:lokalizacja', component: WaiterTableComponent },
  { path: 'addDish', component: WaiterAddDishComponent },
  { path: 'dish-list/:type', component: WaiterDishListComponent },
  { path: 'check', component: WaiterCheckComponent },
  { path: 'order', component: WaiterOrderFinishComponent },
  { path: 'waiter-table/:lokalizacja', component: WaiterTableComponent },
  { path: 'manager/feedback/:id ', component: ManagerFeedDetailComponent },
  { path: 'dish-popup/:id', component: WaiterPopupComponent },
  { path: 'waiter-table/:lokalizacja', component: WaiterTableComponent},
  { path: 'new-order', component: WaiterStartZamowienieComponent},
  { path: 'order-all', component: WaiterZamowienieComponent},
  { path: 'manager/mgmnt', component:ManagerZarzadComponent },
  { path: 'manager/report', component:ManagerReportComponent }, 
  { path: 'manager/feedback', component:ManagerFeedbackComponent },
  { path: 'waiter-table/:lokalizacja', component: WaiterTableComponent},
  { path: 'addDish', component: WaiterAddDishComponent},
  { path: 'dish-list/:type', component: WaiterDishListComponent},
  { path: 'check', component: WaiterCheckComponent},
  { path: 'order', component: WaiterOrderFinishComponent},
  { path: 'waiter-table/:lokalizacja', component: WaiterTableComponent }, 
  { path: 'manager/feedback/:id ', component: ManagerFeedDetailComponent },
  { path: 'manager/addfeednack', component: ManagerAddFeedbackComponent },
  { path: 'manager/mngmt/location', component: ManagerZarzStolikComponent}, 
  { path: 'manager/mngmt/location/L1', component: ManagerZarzStolikL1Component },
  { path: 'manager/mngmt/location/L2', component: ManagerZarzStolikL2Component },
  { path: 'manager/mngmt/location/L3', component: ManagerZarzStolikL3Component },
  { path: 'manager/mngmt/location/L4', component: ManagerZarzStolikL4Component },
  { path: 'manager/mngmt/location/L5', component: ManagerZarzStolikL5Component },
  { path: 'manager/mngmt/location/L6', component: ManagerZarzStolikL6Component },
  { path: 'manager/menu', component: MenuListComponent},
  { path: 'manager/add/danie', component: ManagerAddDanieComponent},
  { path: 'manager/danie/:id ', component: ManagerDanieDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }