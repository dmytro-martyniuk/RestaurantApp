import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TableService } from 'src/app/services/table.service/table.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-waiter-start-zamowienie',
  templateUrl: './waiter-start-zamowienie.component.html',
  styleUrls: ['./waiter-start-zamowienie.component.css']
})
export class WaiterStartZamowienieComponent implements OnInit {

  constructor(
    private router: Router,
    private location: Location,
    public tableService: TableService
  ) { }

  ngOnInit() {

  }
  startOrder(){
    this.tableService.startNewOrder();
    this.router.navigate(['order-all'])
  }

  goBack(): void {
    this.location.back();
  }

}
