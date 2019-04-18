import { Injectable } from "@angular/core";
import { Observable, from } from "rxjs";

import { Jugadora } from './jugadora';

@Injectable()
export class JUGADORAS {
    private jugadoras: Jugadora[] = [
        {id: 21, ranking: 1, nacionalidad: "Japon", nombre: "Naomi Osaka", edad: 21},
        {id: 22, ranking: 2, nacionalidad: "Rumania", nombre: "Simona Halep", edad: 27},
        {id: 23, ranking: 3, nacionalidad: "Republica Checa", nombre: "Petra Kvitova", edad: 29},
        {id: 24, ranking: 4, nacionalidad: "Republica Checa", nombre: "Karolina Pliskova", edad: 27},
        {id: 25, ranking: 5, nacionalidad: "Alemania", nombre: "Angelique Kerber", edad: 31},
        {id: 26, ranking: 6, nacionalidad: "Ucrania", nombre: "Elina Svitolina", edad: 24},
        {id: 27, ranking: 7, nacionalidad: "Holanda", nombre: "Kiki Bertens", edad: 27},
        {id: 28, ranking: 8, nacionalidad: "Estados Unidos", nombre: "Sloane Stephens", edad: 26},
        {id: 29, ranking: 9, nacionalidad: "Australia", nombre: "Ashleigh Barty", edad: 22},
        {id: 30, ranking: 10, nacionalidad: "Bielorrusia", nombre: "Aryna Sabalenka", edad: 20},
        {id: 31, ranking: 11, nacionalidad: "Estados Unidos", nombre: "Serena Williams", edad: 37},
        {id: 32, ranking: 12, nacionalidad: "Dinamarca", nombre: "Caroline Wozniacki", edad: 28},
        {id: 33, ranking: 13, nacionalidad: "Letonia", nombre: "Anastasija Sevastova", edad: 28},
        {id: 34, ranking: 14, nacionalidad: "Estados Unidos", nombre: "Madison Keys", edad: 24},
        {id: 35, ranking: 15, nacionalidad: "Estonia", nombre: "Anett Kontaveit", edad: 23},
        {id: 36, ranking: 16, nacionalidad: "China", nombre: "Qiang Wang", edad: 27},
        {id: 37, ranking: 17, nacionalidad: "Belgica", nombre: "Elise Mertens", edad: 23},
        {id: 38, ranking: 18, nacionalidad: "Alemania", nombre: "Julia Goerges", edad: 30},
        {id: 39, ranking: 19, nacionalidad: "España", nombre: "Garbiñe Muguruza", edad: 25},
        {id: 40, ranking: 20, nacionalidad: "Suiza", nombre: "Belinda Bencic", edad: 22}
    ];

    getJugadoras(): Observable<Jugadora[]> {
        return from([this.jugadoras]);
        }
}