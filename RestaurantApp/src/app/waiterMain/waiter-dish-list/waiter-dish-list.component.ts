import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-waiter-dish-list',
  templateUrl: './waiter-dish-list.component.html',
  styleUrls: ['./waiter-dish-list.component.css']
})
export class WaiterDishListComponent implements OnInit {

  dishType: String;
  constructor(    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.dishType = this.route.snapshot.paramMap.get('type');
    console.log(this.dishType);
  }

}
