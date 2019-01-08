import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { TableService } from 'src/app/services/table.service/table.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-waiter-zamowienie',
  templateUrl: './waiter-zamowienie.component.html',
  styleUrls: ['./waiter-zamowienie.component.css']
})
export class WaiterZamowienieComponent implements OnInit {

  constructor(
    private location: Location, public tableService: TableService, private router: Router
  ) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  addDanie():void {
    this.router.navigate(['addDish']);
  }

  check(): void{
    this.router.navigate(['check']);
  }

  openOrder(): void{
    this.router.navigate(['order']);
  }
}
