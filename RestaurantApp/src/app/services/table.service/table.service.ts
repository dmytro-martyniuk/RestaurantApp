import { Injectable } from '@angular/core';
import { Stolik } from 'src/app/classes/Stolik';
import {STOLIKI} from '../../database/stoliki-db';
import { Lokalizacja } from 'src/app/classes/Lokalizacja';
import { Zamowienie } from 'src/app/classes/Zamowienie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, filter, catchError, tap } from 'rxjs/operators';
import { Danie } from 'src/app/classes/Danie';
import { of } from 'rxjs/internal/observable/of';
import { DanieZamowienie } from 'src/app/classes/DanieZamowienie';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  zamowienieURL: string = 'api/zamowienia';
  requestedLocalisation: Lokalizacja;
  allZamowienia: Zamowienie[];
  currentTable:Stolik;
  currentOrder:Zamowienie;

  constructor(private http: HttpClient) { }

  getTablesByLocalization(localisation: string):Stolik[]{
    this.requestedLocalisation = {nazwa: localisation};
     return STOLIKI.filter(s => s.lokalizacja.nazwa == this.requestedLocalisation.nazwa);
  }

  findZamowienie(table: Stolik):boolean{
    this.currentTable = table;
    if( (this.allZamowienia.filter(s=> (JSON.stringify(s.stolik) == JSON.stringify(table) 
    && s.widacStolik == true))).length>0){
      this.currentOrder = this.allZamowienia.find(s=> (JSON.stringify(s.stolik) == JSON.stringify(table) 
      && s.widacStolik == true));
      return true;
    }else{
      return false;
    }
  }

  getAllZamowienia(){
    this.getZamowienia().subscribe(
      data => {this.allZamowienia = data;}
    )
  }

  getZamowienia(): Observable<Zamowienie[]> {
    return this.http.get<Zamowienie[]>(this.zamowienieURL)
      .pipe(
        tap(_ => console.log('fetched data')),
        catchError(this.handleError('getAllZamowienie', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  startNewOrder(){
    let newOrder = new Zamowienie();
    var id = Math.floor((Math.random() * 10000) + 1);
    newOrder.id = id;
    newOrder.stolik = this.currentTable;
    newOrder.widacStolik = true;
    newOrder.widacKucharz = false;
    newOrder.odbiorKelner = false;
    this.currentOrder = newOrder;
  }
}
