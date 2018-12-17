import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Danie } from '../classes/Danie';
import { TypDania } from '../classes/TypDania';
import { DanieZamowienie } from '../classes/DanieZamowienie';
import { Zamowienie } from '../classes/Zamowienie';

export class InMemoryDataService  implements InMemoryDbService {
  createDb() {
    let dania = [
      { id: 1, typ: TypDania["Zupa"], nazwa: 'Barsz ukraiński', opis:'Fajny barszczyk', cena: '7 zl', skladniki: ['Mrachewka', 'Buraki', 'Ziemniaki'] },
      { id: 2, typ: TypDania["Zupa"], nazwa: 'Zupa pomidorowa', opis:'Fajna zupa', cena: '5 zl', skladniki: ['Mrachewka', 'Buraki', 'Ziemniaki'] }
    ];
    let daniaZam = [];
    let zamowienia = [];
    return {dania:Danie, daniaZam:DanieZamowienie, zamowienia:Zamowienie};
  }
}