import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-waiter-zamowienie',
  templateUrl: './waiter-zamowienie.component.html',
  styleUrls: ['./waiter-zamowienie.component.css']
})
export class WaiterZamowienieComponent implements OnInit {

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }
}
