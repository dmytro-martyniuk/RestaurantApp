import { Component, OnInit } from '@angular/core';
import { DanieZamowienie } from 'src/app/classes/DanieZamowienie';
import { TableService } from 'src/app/services/table.service/table.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-waiter-check',
  templateUrl: './waiter-check.component.html',
  styleUrls: ['./waiter-check.component.css']
})
export class WaiterCheckComponent implements OnInit {

  selectedDishes: DanieZamowienie[];
  constructor(public tableService: TableService, private router: Router, private location: Location) { }

  ngOnInit() {
    this.selectedDishes = this.tableService.selectedDishes;
    this.selectedDishes = this.selectedDishes.filter(s => !s.zaplacono && s.przekazano);
  }

  goBack(): void {
    this.location.back();
  }

  payed(danie: DanieZamowienie) {
    this.selectedDishes
      .filter(s => JSON.stringify(s) === JSON.stringify(danie))
      .forEach(d => d.zaplacono = true);
    this.selectedDishes = this.selectedDishes.filter(s => !s.zaplacono);
    this.tableService.removeDish(danie);
    //this.tableService.updateDish();
  }
  pAll() {
    this.selectedDishes.forEach(s => s.zaplacono = true);
    this.tableService.removePD();
    swal({
      title: "Klient zapłacił za wszystko?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          this.location.back();
          swal("Za wszystko zapłacono", {
            icon: "success",
          });
        } else {
          swal("Klient nie zapłacił za wszystko!");
        }
      });
    //this.tableService.updateAll();
  }

  endO() {
    swal({
      title: "Zakończyć zamówienie?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          this.router.navigate(['waiter']);
          swal("Zamówienie zakończone", {
            icon: "success",
          });
        } else {
          swal("Zamówienie nie zakończone!");
        }
      });
  }
}
