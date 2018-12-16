import { TypDania } from './TypDania';

export class Danie{
    id:number;
    typ: TypDania;
    nazwa: string;
    opis: Text;
    cena: string;
    skladniki: string[];
}