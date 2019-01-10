import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TableService } from 'src/app/services/table.service/table.service';
import { Danie } from 'src/app/classes/Danie';
import { Location } from '@angular/common';


@Component({
  selector: 'app-waiter-popup',
  templateUrl: './waiter-popup.component.html',
  styleUrls: ['./waiter-popup.component.css']
})
export class WaiterPopupComponent implements OnInit {

  dishId: string;
  selectedDish: Danie;
  textareaValue: string = "";
  selectedOption: string = "1";
  showM: boolean = false;

  constructor(private location: Location, private route: ActivatedRoute,
    private router: Router, public tableService: TableService) { }

  ngOnInit() {
    this.dishId = this.route.snapshot.paramMap.get('id');
    this.selectedDish = this.tableService.findDishById(this.dishId);
  }

  goBack(): void {
    this.location.back();
  }

  doTextareaValueChange(ev) {
    try {
      this.textareaValue = ev.target.value;
    } catch (e) {
      console.info('could not set textarea-value');
    }
  }

  addDish() {
    this.showM = true;
    setTimeout(() => {
      var idd = Math.floor((Math.random() * 10000) + 1);
      let s = { id: idd, danie_id: Number(this.dishId), ilosc: Number(this.selectedOption), uwaga: this.textareaValue, nazwa: this.selectedDish.nazwa, cena: this.selectedDish.cena, przekazano:false, zaplacono: false };
      this.tableService.addSelectedDish(s);
      this.location.back();
    }, 500);
  }

}
