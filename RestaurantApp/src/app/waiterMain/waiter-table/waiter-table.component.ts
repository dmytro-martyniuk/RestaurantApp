import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { TableService } from 'src/app/services/table.service/table.service';
import { Stolik } from 'src/app/classes/Stolik';


@Component({
  selector: 'waiter-table',
  templateUrl: './waiter-table.component.html',
  styleUrls: ['./waiter-table.component.css']
})
export class WaiterTableComponent implements OnInit {

  localisation: string;
  tables: Stolik[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private tableService: TableService
  ) { }

  ngOnInit() {
    this.setTables();
    var s = this.tableService.getAllZamowienia();
  }

  setTables() {
    this.localisation = this.route.snapshot.paramMap.get('lokalizacja');
    this.tables = this.tableService.getTablesByLocalization(this.localisation);
  }

  goBack(): void {
    this.location.back();
  }

  chooseTable(table:Stolik){
    let s = this.tableService.findZamowienie(table);
    if(s == true){
      this.router.navigate(['order-all']);  
    }else{
      this.router.navigate(['new-order']);  
    }
  }

}
