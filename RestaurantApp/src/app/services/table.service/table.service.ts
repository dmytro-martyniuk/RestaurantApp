import { Injectable } from '@angular/core';
import { Stolik } from 'src/app/classes/Stolik';
import {STOLIKI} from '../../database/stoliki-db';
import { Lokalizacja } from 'src/app/classes/Lokalizacja';
@Injectable({
  providedIn: 'root'
})
export class TableService {

  requestedLocalisation: Lokalizacja;
  constructor() { }

  getTablesByLocalization(localisation: string):Stolik[]{
    this.requestedLocalisation = {nazwa: localisation};
     return STOLIKI.filter(s => s.lokalizacja.nazwa == this.requestedLocalisation.nazwa);
  }
}
