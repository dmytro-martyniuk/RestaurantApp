import { Injectable } from '@angular/core';
import { Stolik } from 'src/app/classes/Stolik';
import { STOLIKI } from '../../database/stoliki-db';
import { Lokalizacja } from 'src/app/classes/Lokalizacja';
import { Zamowienie } from 'src/app/classes/Zamowienie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, filter, catchError, tap } from 'rxjs/operators';
import { Danie } from 'src/app/classes/Danie';
import { of } from 'rxjs/internal/observable/of';
import { DanieZamowienie } from 'src/app/classes/DanieZamowienie';
import { componentNeedsResolution } from '@angular/core/src/metadata/resource_loading';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  zamowienieURL: string = 'api/zamowienia';
  danieURL: string = 'api/dania';
  daniaZamURL: string = 'api/daniaZam';
  requestedLocalisation: Lokalizacja;
  allZamowienia: Zamowienie[];
  currentTable: Stolik;
  currentOrder: Zamowienie;
  allDishes: Danie[];
  selectedDishes: DanieZamowienie[]=[];

  constructor(private http: HttpClient) { }

  getTablesByLocalization(localisation: string): Stolik[] {
    this.requestedLocalisation = { nazwa: localisation };
    return STOLIKI.filter(s => s.lokalizacja.nazwa == this.requestedLocalisation.nazwa);
  }

  findZamowienie(table: Stolik): boolean {
    this.currentTable = table;
    if ((this.allZamowienia.filter(s => (JSON.stringify(s.stolik) == JSON.stringify(table)
      && s.widacStolik == true))).length > 0) {
      this.currentOrder = this.allZamowienia.find(s => (JSON.stringify(s.stolik) == JSON.stringify(table)
        && s.widacStolik == true));
      return true;
    } else {
      return false;
    }
  }
  getAllDishes() {
    this.getDishes().subscribe(
      data => { this.allDishes = data; }
    )
  }
  getDishes(): Observable<Danie[]> {
    return this.http.get<Danie[]>(this.danieURL)
      .pipe(
        tap(_ => console.log('fetched dania')),
        catchError(this.handleError('getAllDishes', []))
      );
  }

  getAllZamowienia() {
    this.getZamowienia().subscribe(
      data => { this.allZamowienia = data; }
    )
  }

  getZamowienia(): Observable<Zamowienie[]> {
    return this.http.get<Zamowienie[]>(this.zamowienieURL)
      .pipe(
        tap(_ => console.log('fetched zamówienia')),
        catchError(this.handleError('getAllZamowienie', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  startNewOrder() {
    let newOrder = new Zamowienie();
    var id = Math.floor((Math.random() * 10000) + 1);
    newOrder.id = id;
    newOrder.stolik = this.currentTable;
    newOrder.widacStolik = true;
    newOrder.widacKucharz = false;
    newOrder.odbiorKelner = false;
    newOrder.dania_zamowienia_id = [];
    this.currentOrder = newOrder;
  }

  getDishesByType(dishType: String): Danie[] {
    return this.allDishes.filter(d => JSON.stringify(dishType) == JSON.stringify(d.typ));
  }
  findDishById(dishId: string): Danie {
    return this.allDishes.find(d => JSON.stringify(Number(dishId)) == JSON.stringify(d.id));
  }
  addSelectedDish(dish: DanieZamowienie){
    this.selectedDishes.push(dish);
    this.currentOrder.dania_zamowienia_id.push(dish.id);
    this.addSelDish(dish).subscribe(
      d=>console.log(d)
    )
  }

  addSelDish (dish: DanieZamowienie): Observable<any> {
    return this.http.post<DanieZamowienie>(this.daniaZamURL, dish)
      .pipe(
        tap(_ => console.log('fetched zamówienia')),
        catchError(this.handleError('getAllZamowienie', []))
      );
  }
}
