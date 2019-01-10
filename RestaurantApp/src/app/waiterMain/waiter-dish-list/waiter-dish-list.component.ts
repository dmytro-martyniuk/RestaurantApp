import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TableService } from 'src/app/services/table.service/table.service';
import { Danie } from 'src/app/classes/Danie';
import { Location } from '@angular/common';


@Component({
  selector: 'app-waiter-dish-list',
  templateUrl: './waiter-dish-list.component.html',
  styleUrls: ['./waiter-dish-list.component.css']
})
export class WaiterDishListComponent implements OnInit {

  dishType: String="adasd";
  dania: Danie[];

  constructor(private location: Location, private route: ActivatedRoute,
    private router: Router, public tableService: TableService) { }

  ngOnInit() {
    this.dishType = this.route.snapshot.paramMap.get('type');
    this.dania = this.tableService.getDishesByType(this.dishType);
  }

  goBack(): void {
    this.location.back();
  }

  addDish(id: number){
    this.router.navigate(['dish-popup/'+id]);
  }

}
