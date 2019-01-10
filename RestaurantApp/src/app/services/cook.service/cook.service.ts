import { Injectable } from '@angular/core';
import { Zamowienie } from 'src/app/classes/Zamowienie';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/internal/observable/of';
import { HttpClient } from '@angular/common/http';
import { map, filter, catchError, tap } from 'rxjs/operators';
import { DanieZamowienie } from 'src/app/classes/DanieZamowienie';


@Injectable({
  providedIn: 'root'
})
export class CookService {

  allDanieZamowienie: DanieZamowienie[];
  daniaZamURL: string = 'api/daniaZam';

  allZamowienia: Zamowienie[];
  zamowienieURL: string = 'api/zamowienia';


  constructor(private http: HttpClient) { }

  getAllZamowienia() {
    this.getZamowienia().subscribe(
      data => { this.allZamowienia = data;  console.log(this.allZamowienia);}
    )
  }

  getZamowienia(): Observable<Zamowienie[]> {
    return this.http.get<Zamowienie[]>(this.zamowienieURL)
      .pipe(
        tap(_ => console.log('fetched zamówienia')),
        catchError(this.handleError('getAllZamowienie', []))
      );
  }



  getAllDanieZamowienie() {
    this.getDanieZamowienia().subscribe(
      data => { this.allDanieZamowienie = data; console.log(this.allDanieZamowienie);}
    )
  }

  getDanieZamowienia(): Observable<DanieZamowienie[]> {
    return this.http.get<DanieZamowienie[]>(this.daniaZamURL)
      .pipe(
        tap(_ => console.log('fetched dania zamówienia')),
        catchError(this.handleError('getAllZamowienie', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
