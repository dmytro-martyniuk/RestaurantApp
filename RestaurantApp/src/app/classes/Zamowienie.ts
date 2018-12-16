import { DanieZamowienie } from './DanieZamowienie';
import { Stolik } from './Stolik';

export class Zamowienie{
    id:number;
    dania: DanieZamowienie[];
    stolik: Stolik;
    widacStolik: boolean;
    widacKucharz: boolean;
    odbiorKelner: boolean;
}