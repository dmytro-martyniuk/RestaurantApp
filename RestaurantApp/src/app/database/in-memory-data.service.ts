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
    const feedbacks = [
      {id: 1, type: 'Uwaga', topic: 'Uwaga do muzyki' , description:'Zbyt głośna muzyka', personData: 'Agata, 43 lata'},
      {id: 2, type: 'Skarga', topic: 'Skarga na obsługę' , description:'Podczas obsługi gości kelner był niemiły.', personData: 'Damian, 21 lata'},
      {id: 3, type: 'Porada', topic: 'Porada dotycząca sali' , description:'Porada dotycząca oświetlenia na sali. Moim zdaniem na sali jest zaciemno', personData: 'Monika 33 lata'},
      {id: 4, type: 'Uwaga', topic: 'Długo oczekiwałem na zamówiony posiłemm' , description:'Po zamówieniu posiłku, zapytałem kelnera ile czasu muszę czekać na posiłek, na co otrzymałem odpowieź - od 7 do 10 minut. W rzeczywistości oczekiwałem 25 min. Niestaty nie dostaliśmy żadnej rekompensaty.', personData: 'Władysław 61 lat'}
    ];
    return {dania, daniaZam, zamowienia, feedbacks};
  }
}