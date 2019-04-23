import { Injectable } from "@angular/core";
//import { Observable, from} from "rxjs";

import { Jugador } from './jugador';
import { InMemoryDbService } from "angular-in-memory-web-api";

/*@Injectable()
export class JUGADORES {
    private jugadores: Jugador[] = [
        { id: 1, ranking: 1, nacionalidad: "Serbia", nombre: "Novak Djokovic", edad: 31, puntos: 11070, torneosJugados: 18 },
        { id: 2, ranking: 2, nacionalidad: "España", nombre: "Rafael Nadal", edad: 32, puntos: 8725, torneosJugados: 16 },
        { id: 3, ranking: 3, nacionalidad: "Alemania", nombre: "Alexander Zverev", edad: 21, puntos: 6040, torneosJugados: 20 },
        { id: 4, ranking: 4, nacionalidad: "Suiza", nombre: "Roger Federer", edad: 37, puntos: 5590, torneosJugados: 17 },
        { id: 5, ranking: 5, nacionalidad: "Austria", nombre: "Dominic Thiem", edad: 25, puntos: 4765, torneosJugados: 24 },
        { id: 6, ranking: 6, nacionalidad: "Japon", nombre: "Kei Nishikori", edad: 29, puntos: 4200, torneosJugados: 23 },
        { id: 7, ranking: 7, nacionalidad: "Sudafrica", nombre: "Kevin Anderson", edad: 32, puntos: 4115, torneosJugados: 18 },
        { id: 8, ranking: 8, nacionalidad: "Grecia", nombre: "Stefanos Tsitsipas", edad: 20, puntos: 3240, torneosJugados: 28 },
        { id: 9, ranking: 9, nacionalidad: "Argentina", nombre: "Juan Martin del Potro", edad: 30, puntos: 3225, torneosJugados: 14 },
        { id: 10, ranking: 10, nacionalidad: "Estados Unidos", nombre: "John Isner", edad: 33, puntos: 3085, torneosJugados: 23 },
        { id: 11, ranking: 11, nacionalidad: "Croacia", nombre: "Marin Cilic", edad: 30, puntos: 3015, torneosJugados: 18 },
        { id: 12, ranking: 12, nacionalidad: "Rusia", nombre: "Karen Khachanov", edad: 22, puntos: 2810, torneosJugados: 24 },
        { id: 13, ranking: 13, nacionalidad: "Croacia", nombre: "Borna Coric", edad: 22, puntos: 2345, torneosJugados: 20 },
        { id: 14, ranking: 14, nacionalidad: "Rusia", nombre: "Daniil Medvedev", edad: 23, puntos: 2295, torneosJugados: 27 },
        { id: 15, ranking: 15, nacionalidad: "Canada", nombre: "Milos Raonic", edad: 28, puntos: 2140, torneosJugados: 21 },
        { id: 16, ranking: 16, nacionalidad: "Italia", nombre: "Marco Cecchinato", edad: 26, puntos: 2021, torneosJugados: 29 },
        { id: 17, ranking: 17, nacionalidad: "Georgia", nombre: "Nikoloz Basilashvili", edad: 27, puntos: 1930, torneosJugados: 29 },
        { id: 18, ranking: 18, nacionalidad: "Italia", nombre: "Fabio Fognini", edad: 31, puntos: 1885, torneosJugados: 25 },
        { id: 19, ranking: 19, nacionalidad: "Francia", nombre: "Gael Monfils", edad: 32, puntos: 1875, torneosJugados: 21 },
        { id: 20, ranking: 20, nacionalidad: "Canada", nombre: "Denis Shapovalov", edad: 19, puntos: 1820, torneosJugados: 27 }
    ];

    constructor() { }

    getJugadores(): Observable<Jugador[]> {
        return from([this.jugadores]);
    }
}*/

@Injectable({ providedIn: 'root' })
export class InMemoryJugadorService implements InMemoryDbService {
    createDb() {
        const JUGADORES = [
            { id: 1, ranking: 1, nacionalidad: "Serbia", nombre: "Novak Djokovic", edad: 31, puntos: 11070, torneosJugados: 18 },
            { id: 2, ranking: 2, nacionalidad: "España", nombre: "Rafael Nadal", edad: 32, puntos: 8725, torneosJugados: 16 },
            { id: 3, ranking: 3, nacionalidad: "Alemania", nombre: "Alexander Zverev", edad: 21, puntos: 6040, torneosJugados: 20 },
            { id: 4, ranking: 4, nacionalidad: "Suiza", nombre: "Roger Federer", edad: 37, puntos: 5590, torneosJugados: 17 },
            { id: 5, ranking: 5, nacionalidad: "Austria", nombre: "Dominic Thiem", edad: 25, puntos: 4765, torneosJugados: 24 },
            { id: 6, ranking: 6, nacionalidad: "Japon", nombre: "Kei Nishikori", edad: 29, puntos: 4200, torneosJugados: 23 },
            { id: 7, ranking: 7, nacionalidad: "Sudafrica", nombre: "Kevin Anderson", edad: 32, puntos: 4115, torneosJugados: 18 },
            { id: 8, ranking: 8, nacionalidad: "Grecia", nombre: "Stefanos Tsitsipas", edad: 20, puntos: 3240, torneosJugados: 28 },
            { id: 9, ranking: 9, nacionalidad: "Argentina", nombre: "Juan Martin del Potro", edad: 30, puntos: 3225, torneosJugados: 14 },
            { id: 10, ranking: 10, nacionalidad: "Estados Unidos", nombre: "John Isner", edad: 33, puntos: 3085, torneosJugados: 23 },
            { id: 11, ranking: 11, nacionalidad: "Croacia", nombre: "Marin Cilic", edad: 30, puntos: 3015, torneosJugados: 18 },
            { id: 12, ranking: 12, nacionalidad: "Rusia", nombre: "Karen Khachanov", edad: 22, puntos: 2810, torneosJugados: 24 },
            { id: 13, ranking: 13, nacionalidad: "Croacia", nombre: "Borna Coric", edad: 22, puntos: 2345, torneosJugados: 20 },
            { id: 14, ranking: 14, nacionalidad: "Rusia", nombre: "Daniil Medvedev", edad: 23, puntos: 2295, torneosJugados: 27 },
            { id: 15, ranking: 15, nacionalidad: "Canada", nombre: "Milos Raonic", edad: 28, puntos: 2140, torneosJugados: 21 },
            { id: 16, ranking: 16, nacionalidad: "Italia", nombre: "Marco Cecchinato", edad: 26, puntos: 2021, torneosJugados: 29 },
            { id: 17, ranking: 17, nacionalidad: "Georgia", nombre: "Nikoloz Basilashvili", edad: 27, puntos: 1930, torneosJugados: 29 },
            { id: 18, ranking: 18, nacionalidad: "Italia", nombre: "Fabio Fognini", edad: 31, puntos: 1885, torneosJugados: 25 },
            { id: 19, ranking: 19, nacionalidad: "Francia", nombre: "Gael Monfils", edad: 32, puntos: 1875, torneosJugados: 21 },
            { id: 20, ranking: 20, nacionalidad: "Canada", nombre: "Denis Shapovalov", edad: 19, puntos: 1820, torneosJugados: 27 }
          ];
          return {JUGADORES};
    }
}