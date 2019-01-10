import { Stolik } from './Stolik';

export class Zamowienie{
    public id: number;
   
    public dania_zamowienia_id: number[];
    
    public stolik: Stolik;
    
    public widacStolik: boolean;
    
    widacKucharz: boolean;
    odbiorKelner: boolean;
}