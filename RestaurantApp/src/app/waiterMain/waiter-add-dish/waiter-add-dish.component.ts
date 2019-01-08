import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-waiter-add-dish',
  templateUrl: './waiter-add-dish.component.html',
  styleUrls: ['./waiter-add-dish.component.css']
})
export class WaiterAddDishComponent implements OnInit {

  constructor(private location: Location, private router: Router) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  openZupa(): void{
    console.log("open zupa");
    this.router.navigate(['dish-list/Zupa']); 
  }

  openGlowne(): void{
    console.log("open glowne");
    this.router.navigate(['dish-list/Glowne']); 
  }

  openDeser(): void{
    console.log("open deser");
    this.router.navigate(['dish-list/Deser']); 
  }

  openNapoj(): void{
    console.log("open napoj");
    this.router.navigate(['dish-list/Napoj']); 
  }

  openSpecjalne(): void{
    console.log("open specjalne");
    this.router.navigate(['dish-list/Specjalne']); 
  }
}
