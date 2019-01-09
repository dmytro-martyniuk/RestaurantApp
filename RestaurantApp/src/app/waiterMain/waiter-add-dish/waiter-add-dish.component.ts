import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { TableService } from 'src/app/services/table.service/table.service';


@Component({
  selector: 'app-waiter-add-dish',
  templateUrl: './waiter-add-dish.component.html',
  styleUrls: ['./waiter-add-dish.component.css']
})
export class WaiterAddDishComponent implements OnInit {

  constructor(private location: Location, private router: Router, public tableService: TableService) { }

  ngOnInit() {
    this.tableService.getAllDishes();
  }

  goBack(): void {
    this.location.back();
  }

  openZupa(): void{
    this.router.navigate(['dish-list/Zupa']); 
  }

  openGlowne(): void{
    this.router.navigate(['dish-list/Glowne']); 
  }

  openDeser(): void{
    this.router.navigate(['dish-list/Deser']); 
  }

  openNapoj(): void{
    this.router.navigate(['dish-list/Napoj']); 
  }

  openSpecjalne(): void{
    this.router.navigate(['dish-list/Specjalne']); 
  }
}
