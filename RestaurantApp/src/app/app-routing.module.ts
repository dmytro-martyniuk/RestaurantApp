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
import { CookDashboardComponent } from './cook/cook-dashboard/cook-dashboard.component';


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
  { path: 'cook', component: CookDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }