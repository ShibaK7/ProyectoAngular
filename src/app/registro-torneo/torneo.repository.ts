import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TorneoP } from "./paso1.model";
import { StaticDataSource } from "./static.datasource";

@Injectable()
export class TorneoRepository {
    private torneos: TorneoP[]=[];

    constructor(private dataSource: StaticDataSource) {}

    getTorneos(): TorneoP[]{
        return this.torneos;
    }

    saveTorneos(torneoP: TorneoP):Observable<TorneoP>{
        return this.dataSource.saveTorneos(torneoP);
    }
}