import { Component, OnInit } from '@angular/core';
import { TableService } from 'src/app/services/table.service/table.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { DanieZamowienie } from 'src/app/classes/DanieZamowienie';

@Component({
  selector: 'app-waiter-order-finish',
  templateUrl: './waiter-order-finish.component.html',
  styleUrls: ['./waiter-order-finish.component.css']
})
export class WaiterOrderFinishComponent implements OnInit {

  selectedDishes: DanieZamowienie[];
  constructor(public tableService: TableService, private router: Router, private location: Location) { }

  ngOnInit() {
    this.selectedDishes = this.tableService.selectedDishes;
    this.selectedDishes = this.selectedDishes.filter(d => !d.przekazano);
  }

  goBack(): void {
    this.location.back();
  }

  reomveDish(dish: DanieZamowienie) {

    this.selectedDishes = this.selectedDishes.filter(obj => obj !== dish);
    this.tableService.selectedDishes = this.selectedDishes;
  }

  forwardOrder() {
    swal({
      title: "Przekazać do kucharza?",
      text: "Po przekazaniu nie można będzie zmieniać dania!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          this.selectedDishes.forEach(d => {
            d.przekazano = true;
            this.tableService.addDishDB(d);
          });
          this.tableService.addOrderDB();
          this.selectedDishes = [];
          swal("Zamówienie przekazane!", {
            icon: "success",
          });
        } else {
          swal("Zamówienie nie przekazane!");
        }
      });

  }

}
