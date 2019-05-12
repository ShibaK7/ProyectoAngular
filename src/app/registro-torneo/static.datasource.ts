import { Injectable } from "@angular/core";
import { Observable, from } from "rxjs";
import { TorneoP } from "./paso1.model";

@Injectable()
export class StaticDataSource {
    saveTorneos(torneop: TorneoP): Observable<TorneoP>{
        console.log(JSON.stringify(torneop));
        return from([torneop]);
        
    }
}