import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Lokalizacja } from 'src/app/classes/Lokalizacja';
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
    private location: Location,
    private tableService: TableService
  ) { }

  ngOnInit() {
    this.setTables();
  }

  setTables() {
    this.localisation = this.route.snapshot.paramMap.get('lokalizacja');
    this.tables = this.tableService.getTablesByLocalization(this.localisation);
  }

  goBack(): void {
    this.location.back();
  }

}
