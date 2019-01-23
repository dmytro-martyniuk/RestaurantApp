import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Danie } from '../classes/Danie';
import { TypDania } from '../classes/TypDania';
import { DanieZamowienie } from '../classes/DanieZamowienie';
import { Zamowienie } from '../classes/Zamowienie';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const dania = [
      { id: 1, typ: "Zupa", nazwa: 'Barszcz ukraiński', opis: 'Fajny barszczyk -  zupa zaprawiana, w której skład wchodzą buraki, kapusta świeża oraz ziemniaki pokrojone w słupki. Może zawierać kawałki gotowanego mięsa (wołowiny lub wieprzowiny).', cena: '17 zl', skladniki: ['Mrachewka', ' Buraki', ' Ziemniaki', 'Woda', 'Kapusta', 'Mięso'] },
      { id: 2, typ: "Zupa", nazwa: 'Zupa pomidorowa', opis: 'Fajna zupa -  zupa przygotowywana na bazie rosołu lub bulionu z warzyw. Głównym składnikiem nadającym smak są świeże pomidory lub koncentrat pomidorowy. Zupę podaje się z makaronem lub ryżem, a czasem nawet z tzw. zacierką i lanym ciastem. Bardzo często do poprawy smaku stosuje się zioła, np. bazylię lub natkę pietruszki oraz zabiela śmietaną. Dobrze jest na sam koniec dodać nieco cukru oraz szczyptę cynamonu. Zupa pomidorowa składa się na tradycyjny obiad kuchni polskiej', cena: '15 zl', skladniki: ['Ogórki', ' Kapusta', ' Cebula', 'Ziemniaki', 'Por', 'Pietruszka', 'Mięso', 'Pieprz i sól'] },
      { id: 3, typ: "Zupa", nazwa: 'Zupa ogórkowa', opis: 'Fajna zupa  ogórkowa -  potrawa kuchni polskiej, zupa gotowana na wywarze mięsnym lub mięsno-warzywnym z dodatkiem startych na tarce ogórków kiszonych lub przecieru ogórkowego i ziemniaków.', cena: '15 zl', skladniki: ['Ogórki', ' Kapusta', ' Cebula', 'Ziemniaki', 'Por', 'Pietruszka', 'Mięso', 'Pieprz i sól'] },
      { id: 4, typ: "Glowne", nazwa: 'Kluski z karkówką', opis: 'Pyszne kluseczki - Jest to danie obiadowe, które wszyscy lubimy. Kiedy mamy trochę więcej czasu znajdujemy przyjemność w jego przyrządzaniu i jedzeniu:) Nie macie pomysłu na obiad? To polecam nasz Danie to jest bardzo popularne w rodzinnych stronach mojego męża czyli na południu Polski:)', cena: '45 zl', skladniki: ['Koperek', ' Karkówka', ' Kluski'] },
      { id: 5, typ: "Glowne", nazwa: 'Placek węgierski', opis: 'Świeżutki placek', cena: '40 zl', skladniki: ['Placek', ' Gulasz'] },
      { id: 6, typ: "Glowne", nazwa: 'Ziemniaki ze schabowym', opis: 'Pyszniutki schab', cena: '45 zl', skladniki: ['Ziemniaki', ' Schabowy', ' Koperek'] },
      { id: 7, typ: "Glowne", nazwa: 'Łosoś z ryżem', opis: 'Łosoś jeszcze wczoraj pływał', cena: '55 zl', skladniki: ['Łosoś', ' Ryż', ' Buraczki'] },
      { id: 8, typ: "Deser", nazwa: 'Strudel z jabłkami', opis: 'Fajny strudel', cena: '15 zl', skladniki: ['Strudel', ' Jabka'] },
      { id: 9, typ: "Deser", nazwa: 'Sernik wspomnienie', opis: 'Fajny sernik', cena: '12 zl', skladniki: ['Ser', ' Banan', ' Śmietana'] },
      { id: 10, typ: "Deser", nazwa: 'Tort confetti', opis: 'Słodzitki torcik', cena: '19 zl', skladniki: ['Orzechi', ' Sliwki', ' Śmietana'] },
      { id: 11, typ: "Deser", nazwa: 'Ciasto z morelami', opis: 'Fajne cisto', cena: '16 zl', skladniki: ['Orzechi', ' Morela', ' Ananas'] },
      { id: 12, typ: "Napoj", nazwa: 'Kawa', opis: 'Fajna kawa', cena: '15 zl', skladniki: ['Kawa', ' Cukier'] },
      { id: 13, typ: "Napoj", nazwa: 'Herbata', opis: 'Fajna herbata', cena: '12 zl', skladniki: ['Herbata', ' Cukier'] },
      { id: 14, typ: "Napoj", nazwa: 'Sok', opis: 'Fajny sok', cena: '13 zl', skladniki: ['Pomarańcz', ' Banan', ' Gruszka'] },
      { id: 15, typ: "Napoj", nazwa: 'Woda', opis: 'Fajna woda', cena: '5 zl', skladniki: ['Woda'] },
      { id: 16, typ: "Napoj", nazwa: 'Wódka', opis: 'Fajna wódka', cena: '95 zl', skladniki: ['Wódka Dwa Konie',] },
      { id: 17, typ: "Specjalne", nazwa: 'Kurczak w końskim sosie', opis: 'Fajny', cena: '65 zl', skladniki: ['Kurczak', ' Sos koński', ' Ziemniaki'] },
      { id: 18, typ: "Specjalne", nazwa: 'Świeże brokuły', opis: 'Świeżutkie brokuły', cena: '25 zl', skladniki: ['Brokuły'] }



    ];
    const daniaZam = [
      { id: 1, danie_id: 1, ilosc: 1, uwaga: 'Bez soli', nazwa: 'Barszcz ukraiński', cena: '17 zl', przekazano: false },
      { id: 2, danie_id: 3, ilosc: 1, uwaga: 'Bez soli', nazwa: 'Zupa ogórkowa', cena: '17 zl', przekazano: false },
      { id: 3, danie_id: 5, ilosc: 1, uwaga: 'Bez soli', nazwa: 'Placek węgierski', cena: '17 zl', przekazano: false },
      { id: 4, danie_id: 6, ilosc: 1, uwaga: 'Bez soli', nazwa: 'Ziemniaki ze schabowym', cena: '17 zl', przekazano: false },
      { id: 5, danie_id: 14, ilosc: 1, uwaga: 'Bez soli', nazwa: 'Sok', cena: '17 zl', przekazano: false }



    
    ];
    const zamowienia = [
      {
        id: 1,
        dania_zamowienia_id: [1,2],
        stolik: {
          lokalizacja: {
            nazwa: 'L1'
          },
          nazwa: 'S1'
        },
        widacStolik: true,
        widacKucharz: true,
        odbiorKelner: false
      },
      {
        id: 2,
        dania_zamowienia_id: [3,4,5],
        stolik: {
          lokalizacja: {
            nazwa: 'L2'
          },
          nazwa: 'S3'
        },
        widacStolik: true,
        widacKucharz: true,
        odbiorKelner: false
      },
      {
        id: 2,
        dania_zamowienia_id: [3,4,5],
        stolik: {
          lokalizacja: {
            nazwa: 'L2'
          },
          nazwa: 'S3'
        },
        widacStolik: true,
        widacKucharz: false,
        odbiorKelner: false
      }
    ];
    const feedbacks = [
      { id: 1, type: 'Uwaga', topic: 'Uwaga do muzyki', description: 'Zbyt głośna muzyka', personData: 'Agata, 43 lata' },
      { id: 2, type: 'Skarga', topic: 'Skarga na obsługę', description: 'Podczas obsługi gości kelner był niemiły.', personData: 'Damian, 21 lata' },
      { id: 3, type: 'Porada', topic: 'Porada dotycząca sali', description: 'Porada dotycząca oświetlenia na sali. Moim zdaniem na sali jest zaciemno', personData: 'Monika 33 lata' },
      { id: 4, type: 'Uwaga', topic: 'Długo oczekiwałem na zamówiony posiłemm', description: 'Po zamówieniu posiłku, zapytałem kelnera ile czasu muszę czekać na posiłek, na co otrzymałem odpowieź - od 7 do 10 minut. W rzeczywistości oczekiwałem 25 min. Niestaty nie dostaliśmy żadnej rekompensaty.', personData: 'Władysław 61 lat' }
    ];
    return { dania, daniaZam, zamowienia, feedbacks };
  }
}