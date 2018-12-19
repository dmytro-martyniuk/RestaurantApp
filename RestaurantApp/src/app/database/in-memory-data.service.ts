import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Danie } from '../classes/Danie';
import { TypDania } from '../classes/TypDania';
import { DanieZamowienie } from '../classes/DanieZamowienie';
import { Zamowienie } from '../classes/Zamowienie';

export class InMemoryDataService  implements InMemoryDbService {
  createDb() {
    const dania = [
      { id: 1, typ: TypDania["Zupa"], nazwa: 'Barsz ukraiński', opis:'Fajny barszczyk', cena: '7 zl', skladniki: ['Mrachewka', 'Buraki', 'Ziemniaki'] },
      { id: 2, typ: TypDania["Zupa"], nazwa: 'Zupa pomidorowa', opis:'Fajna zupa', cena: '5 zl', skladniki: ['Mrachewka', 'Buraki', 'Ziemniaki'] }
    ];
    const daniaZam = [
      {id:1, danie_id: 1, ilosc:1, uwaga: 'Bez soli'}
    ];
    const zamowienia = [
      {
        id:1, 
        dania_zamowienia_id: [1], 
        stolik: {
          lokalizacja:{
            nazwa: 'L1'
          },
          nazwa: 'S1'
        },
        widacStolik: true,
        widacKucharz: false,
        odbiorKelner: false
      }
    ];
    return {dania, daniaZam, zamowienia};
  }
}