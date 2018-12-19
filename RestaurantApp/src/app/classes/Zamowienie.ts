import { Stolik } from './Stolik';

export class Zamowienie{
    private _id: number;
   
    public _dania_zamowienia_id: number[];
    
    public _stolik: Stolik;
    
    public _widacStolik: boolean;
    
    widacKucharz: boolean;
    odbiorKelner: boolean;

    public Zamowienie(){}

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get dania_zamowienia_id(): number[] {
        return this._dania_zamowienia_id;
    }
    public set dania_zamowienia_id(value: number[]) {
        this._dania_zamowienia_id = value;
    }
    public get stolik(): Stolik {
        return this._stolik;
    }
    public set stolik(value: Stolik) {
        this._stolik = value;
    }
    public get widacStolik(): boolean {
        return this._widacStolik;
    }
    public set widacStolik(value: boolean) {
        this._widacStolik = value;
    }
}