import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WaiterComponent } from './waiterMain/waiter/waiter.component';
import { ManagerComponent } from './managerMain/manager/manager.component';
import { WaiterTableComponent } from './waiterMain/waiter-table/waiter-table.component';
import { WaiterStartZamowienieComponent } from './waiterMain/waiter-start-zamowienie/waiter-start-zamowienie.component';
import { WaiterZamowienieComponent } from './waiterMain/waiter-zamowienie/waiter-zamowienie.component';
 
 
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'manager', component: ManagerComponent },
  { path: 'waiter', component: WaiterComponent },
  { path: 'waiter-table/:lokalizacja', component: WaiterTableComponent},
  { path: 'new-order', component: WaiterStartZamowienieComponent},
  { path: 'order-all', component: WaiterZamowienieComponent}
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}