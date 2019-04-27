import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";

@Injectable({ providedIn: 'root' })
export class InMemoryInformacionService implements InMemoryDbService {
    createDb() {
        const JUGADORES = [
            { id: 1, ranking: 1, nacionalidad: "Serbia", nombre: "Novak Djokovic", edad: 31, puntos: 11070, torneosJugados: 18, foto: "../assets/jugadores/NovakDjokovic.JPG", biografia: "", partidos: "", torneos: "" },
            { id: 2, ranking: 2, nacionalidad: "España", nombre: "Rafael Nadal", edad: 32, puntos: 8725, torneosJugados: 16, foto: "../assets/jugadores/RafaelNadal.JPG", biografia: "", partidos: "", torneos: "" },
            { id: 3, ranking: 3, nacionalidad: "Alemania", nombre: "Alexander Zverev", edad: 21, puntos: 6040, torneosJugados: 20, foto: "../assets/jugadores/AlexanderZverev.JPG", biografia: "", partidos: "", torneos: "" },
            { id: 4, ranking: 4, nacionalidad: "Suiza", nombre: "Roger Federer", edad: 37, puntos: 5590, torneosJugados: 17, foto: "../assets/jugadores/RogerFederer.JPG", biografia: "", partidos: "", torneos: "" },
            { id: 5, ranking: 5, nacionalidad: "Austria", nombre: "Dominic Thiem", edad: 25, puntos: 4765, torneosJugados: 24, foto: "../assets/jugadores/DominicThiem.JPG", biografia: "", partidos: "", torneos: "" },
            { id: 6, ranking: 6, nacionalidad: "Japon", nombre: "Kei Nishikori", edad: 29, puntos: 4200, torneosJugados: 23, foto: "../assets/jugadores/KeiNishikori.JPG", biografia: "", partidos: "", torneos: "" },
            { id: 7, ranking: 7, nacionalidad: "Sudafrica", nombre: "Kevin Anderson", edad: 32, puntos: 4115, torneosJugados: 18, foto: "../assets/jugadores/KevinAnderson.JPG", biografia: "", partidos: "", torneos: "" },
            { id: 8, ranking: 8, nacionalidad: "Grecia", nombre: "Stefanos Tsitsipas", edad: 20, puntos: 3240, torneosJugados: 28, foto: "../assets/jugadores/StefanosTsitsipas.JPG", biografia: "", partidos: "", torneos: "" },
            { id: 9, ranking: 9, nacionalidad: "Argentina", nombre: "Juan Martin del Potro", edad: 30, puntos: 3225, torneosJugados: 14, foto: "../assets/jugadores/JuanMartinDelPotro.JPG", biografia: "", partidos: "", torneos: "" },
            { id: 10, ranking: 10, nacionalidad: "Estados Unidos", nombre: "John Isner", edad: 33, puntos: 3085, torneosJugados: 23, foto: "../assets/jugadores/JohnIsner.JPG", biografia: "", partidos: "", torneos: "" },
            { id: 11, ranking: 11, nacionalidad: "Croacia", nombre: "Marin Cilic", edad: 30, puntos: 3015, torneosJugados: 18, foto: "../assets/jugadores/MarinCilic.JPG", biografia: "", partidos: "", torneos: "" },
            { id: 12, ranking: 12, nacionalidad: "Rusia", nombre: "Karen Khachanov", edad: 22, puntos: 2810, torneosJugados: 24, foto: "../assets/jugadores/KarenKhachanov.JPG", biografia: "", partidos: "", torneos: "" },
            { id: 13, ranking: 13, nacionalidad: "Croacia", nombre: "Borna Coric", edad: 22, puntos: 2345, torneosJugados: 20, foto: "../assets/jugadores/BornaCoric.JPG", biografia: "", partidos: "", torneos: "" },
            { id: 14, ranking: 14, nacionalidad: "Rusia", nombre: "Daniil Medvedev", edad: 23, puntos: 2295, torneosJugados: 27, foto: "../assets/jugadores/DaniilMedvedev.JPG", biografia: "", partidos: "", torneos: "" },
            { id: 15, ranking: 15, nacionalidad: "Canada", nombre: "Milos Raonic", edad: 28, puntos: 2140, torneosJugados: 21, foto: "../assets/jugadores/MilosRaonic.JPG", biografia: "", partidos: "", torneos: "" },
            { id: 16, ranking: 16, nacionalidad: "Italia", nombre: "Marco Cecchinato", edad: 26, puntos: 2021, torneosJugados: 29, foto: "../assets/jugadores/MarcoCecchinato.JPG", biografia: "", partidos: "", torneos: "" },
            { id: 17, ranking: 17, nacionalidad: "Georgia", nombre: "Nikoloz Basilashvili", edad: 27, puntos: 1930, torneosJugados: 29, foto: "../assets/jugadores/NikolozBasilashvili.JPG", biografia: "", partidos: "", torneos: "" },
            { id: 18, ranking: 18, nacionalidad: "Italia", nombre: "Fabio Fognini", edad: 31, puntos: 1885, torneosJugados: 25, foto: "../assets/jugadores/FabioFognini.JPG", biografia: "", partidos: "", torneos: "" },
            { id: 19, ranking: 19, nacionalidad: "Francia", nombre: "Gael Monfils", edad: 32, puntos: 1875, torneosJugados: 21, foto: "../assets/jugadores/GaelMonfils.JPG", biografia: "", partidos: "", torneos: "" },
            { id: 20, ranking: 20, nacionalidad: "Canada", nombre: "Denis Shapovalov", edad: 19, puntos: 1820, torneosJugados: 27, foto: "../assets/jugadores/DenisShapovalov.JPG", biografia: "", partidos: "", torneos: "" }
          ];
          const JUGADORAS = [
            {id: 1, ranking: 1, nacionalidad: "Japon", nombre: "Naomi Osaka", edad: 21},
            {id: 2, ranking: 2, nacionalidad: "Rumania", nombre: "Simona Halep", edad: 27},
            {id: 3, ranking: 3, nacionalidad: "Republica Checa", nombre: "Petra Kvitova", edad: 29},
            {id: 4, ranking: 4, nacionalidad: "Republica Checa", nombre: "Karolina Pliskova", edad: 27},
            {id: 5, ranking: 5, nacionalidad: "Alemania", nombre: "Angelique Kerber", edad: 31},
            {id: 6, ranking: 6, nacionalidad: "Ucrania", nombre: "Elina Svitolina", edad: 24},
            {id: 7, ranking: 7, nacionalidad: "Holanda", nombre: "Kiki Bertens", edad: 27},
            {id: 8, ranking: 8, nacionalidad: "Estados Unidos", nombre: "Sloane Stephens", edad: 26},
            {id: 9, ranking: 9, nacionalidad: "Australia", nombre: "Ashleigh Barty", edad: 22},
            {id: 10, ranking: 10, nacionalidad: "Bielorrusia", nombre: "Aryna Sabalenka", edad: 20},
            {id: 11, ranking: 11, nacionalidad: "Estados Unidos", nombre: "Serena Williams", edad: 37},
            {id: 12, ranking: 12, nacionalidad: "Dinamarca", nombre: "Caroline Wozniacki", edad: 28},
            {id: 13, ranking: 13, nacionalidad: "Letonia", nombre: "Anastasija Sevastova", edad: 28},
            {id: 14, ranking: 14, nacionalidad: "Estados Unidos", nombre: "Madison Keys", edad: 24},
            {id: 15, ranking: 15, nacionalidad: "Estonia", nombre: "Anett Kontaveit", edad: 23},
            {id: 16, ranking: 16, nacionalidad: "China", nombre: "Qiang Wang", edad: 27},
            {id: 17, ranking: 17, nacionalidad: "Belgica", nombre: "Elise Mertens", edad: 23},
            {id: 18, ranking: 18, nacionalidad: "Alemania", nombre: "Julia Goerges", edad: 30},
            {id: 19, ranking: 19, nacionalidad: "España", nombre: "Garbiñe Muguruza", edad: 25},
            {id: 20, ranking: 20, nacionalidad: "Suiza", nombre: "Belinda Bencic", edad: 22}
        ];
          return {JUGADORES, JUGADORAS};
    }
}