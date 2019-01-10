import { Injectable } from '@angular/core';
import { Danie } from 'src/app/classes/Danie';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, filter, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class DanieService {

  constructor(
    private http: HttpClient
  ) { }

  allDania: Danie[];
  danieURL: string = "api/dania";


  getAllDania() {
    this.getDania().subscribe(
      data => { this.allDania = data }
    )
    // console.log("Wsystkie dania:")
    // console.log(this.allDania);
  }


  getDania(): Observable<Danie[]> {
    return this.http.get<Danie[]>(this.danieURL)
      .pipe(
        tap(_ => console.log('fetched data')),
        catchError(this.handleError('getAllFeedbacks', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  addDanie(danie: Danie) {
    this.addDanieToDB(danie).subscribe(
      d => console.log(d)
    )
  }

  addDanieToDB(danie: Danie): Observable<any> {
    return this.http.post<Danie>(this.danieURL, danie)
      .pipe(
        tap(_ => console.log('added feedback to db')),
        catchError(this.handleError('getAllZamowienie', []))
      );
  }

  // updateDanie(danie: Danie) {
  //   this.updateDanieDB(danie).subscribe(
  //     d => console.log(d)
  //   )
  // }

  // updateDanieDB(danie: Danie): Observable<any> {
  //   return this.http.put<Danie>(this.danieURL,danie,danie.id)
  //   return this.http.post<Danie>(this.danieURL, danie)
  //     .pipe(
  //       tap(_ => console.log('added feedback to db')),
  //       catchError(this.handleError('getAllZamowienie', []))
  //     );
  // }



}
