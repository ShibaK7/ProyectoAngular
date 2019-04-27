import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";

@Injectable({ providedIn: 'root' })
export class InMemoryInformacionService implements InMemoryDbService {
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
    const JUGADORAS = [
      { id: 1, ranking: 1, nacionalidad: "Japon", nombre: "Naomi Osaka", edad: 21 },
      { id: 2, ranking: 2, nacionalidad: "Rumania", nombre: "Simona Halep", edad: 27 },
      { id: 3, ranking: 3, nacionalidad: "Republica Checa", nombre: "Petra Kvitova", edad: 29 },
      { id: 4, ranking: 4, nacionalidad: "Republica Checa", nombre: "Karolina Pliskova", edad: 27 },
      { id: 5, ranking: 5, nacionalidad: "Alemania", nombre: "Angelique Kerber", edad: 31 },
      { id: 6, ranking: 6, nacionalidad: "Ucrania", nombre: "Elina Svitolina", edad: 24 },
      { id: 7, ranking: 7, nacionalidad: "Holanda", nombre: "Kiki Bertens", edad: 27 },
      { id: 8, ranking: 8, nacionalidad: "Estados Unidos", nombre: "Sloane Stephens", edad: 26 },
      { id: 9, ranking: 9, nacionalidad: "Australia", nombre: "Ashleigh Barty", edad: 22 },
      { id: 10, ranking: 10, nacionalidad: "Bielorrusia", nombre: "Aryna Sabalenka", edad: 20 },
      { id: 11, ranking: 11, nacionalidad: "Estados Unidos", nombre: "Serena Williams", edad: 37 },
      { id: 12, ranking: 12, nacionalidad: "Dinamarca", nombre: "Caroline Wozniacki", edad: 28 },
      { id: 13, ranking: 13, nacionalidad: "Letonia", nombre: "Anastasija Sevastova", edad: 28 },
      { id: 14, ranking: 14, nacionalidad: "Estados Unidos", nombre: "Madison Keys", edad: 24 },
      { id: 15, ranking: 15, nacionalidad: "Estonia", nombre: "Anett Kontaveit", edad: 23 },
      { id: 16, ranking: 16, nacionalidad: "China", nombre: "Qiang Wang", edad: 27 },
      { id: 17, ranking: 17, nacionalidad: "Belgica", nombre: "Elise Mertens", edad: 23 },
      { id: 18, ranking: 18, nacionalidad: "Alemania", nombre: "Julia Goerges", edad: 30 },
      { id: 19, ranking: 19, nacionalidad: "España", nombre: "Garbiñe Muguruza", edad: 25 },
      { id: 20, ranking: 20, nacionalidad: "Suiza", nombre: "Belinda Bencic", edad: 22 }
    ];
    const INDIVIDUALES = [
      { id: 1, genero: "masculino", torneo: "", bandera1:"../assets/banderas/italia.png", jugador1: "Jannik Sinner", bandera2: "../assets/banderas/hungria.png", jugador2: "Mate Valkuz", uno: "6-2", dos: "0-6", tres: "6-4", cuatro: "", cinco: "" },
      { id: 2, genero: "masculino", torneo: "", bandera1:"../assets/banderas/serbia.png", jugador1: "Filip Krajinovic", bandera2: "../assets/banderas/italia.png", jugador2: "Andreas Seppi", uno: "6-2", dos: "5-7", tres: "7-5", cuatro: "", cinco: "" },
      { id: 3, genero: "masculino", torneo: "", bandera1:"../assets/banderas/francia.png", jugador1: "Pierre-Hugues Herbert", bandera2: "../assets/banderas/belarus.png", jugador2: "Egor Fabbiano", uno: "6-3", dos: "6-2", tres: "", cuatro: "", cinco: "" },
      { id: 4, genero: "masculino", torneo: "", bandera1:"../assets/banderas/paises-bajos.png", jugador1: "Robin Haase", bandera2: "../assets/banderas/italia.png", jugador2: "Thomas Fabbiano", uno: "6-5", dos: "6-3", tres: "6-2", cuatro: "", cinco: "" },
      { id: 5, genero: "masculino", torneo: "", bandera1:"../assets/banderas/alemania.png", jugador1: "Peter Gojowczyk", bandera2: "../assets/banderas/sudafrica.png", jugador2: "Lloyd Harris", uno: "7-5", dos: "6-4", tres: "", cuatro: "", cinco: "" },
      { id: 6, genero: "masculino", torneo: "", bandera1:"../assets/banderas/argentina.png", jugador1: "Pablo Cuevas", bandera2: "../assets/banderas/alemania.png", jugador2: "Yannick Maden", uno: "6-3", dos: "3-6", tres: "6-4", cuatro: "", cinco: "" },
      { id: 7, genero: "masculino", torneo: "", bandera1:"../assets/banderas/eslovenia.png", jugador1: "Aljaz Bedene", bandera2: "../assets/banderas/nueva-zelandia.png", jugador2: "Bernard Tomic", uno: "6-4", dos: "6-3", tres: "", cuatro: "", cinco: "" },
      { id: 8, genero: "masculino", torneo: "", bandera1:"../assets/banderas/italia.png", jugador1: "Jannik Sinner", bandera2: "../assets/banderas/hungria.png", jugador2: "Frances Tiafoe", uno: "6-4", dos: "6-3", tres: "", cuatro: "", cinco: "" },
      { id: 9, genero: "masculino", torneo: "", bandera1:"../assets/banderas/italia.png", jugador1: "Jannik Sinner", bandera2: "../assets/banderas/hungria.png", jugador2: "Frances Tiafoe", uno: "6-4", dos: "6-3", tres: "", cuatro: "", cinco: "" },
      { id: 10, genero: "masculino", torneo: "", bandera1:"../assets/banderas/italia.png", jugador1: "Jannik Sinner", bandera2: "../assets/banderas/hungria.png", jugador2: "Frances Tiafoe", uno: "6-4", dos: "6-3", tres: "", cuatro: "", cinco: "" },
      { id: 11, genero: "masculino", torneo: "", bandera1:"../assets/banderas/italia.png", jugador1: "Jannik Sinner", bandera2: "../assets/banderas/hungria.png", jugador2: "Frances Tiafoe", uno: "6-4", dos: "6-3", tres: "", cuatro: "", cinco: "" },
      { id: 12, genero: "masculino", torneo: "", bandera1:"../assets/banderas/italia.png", jugador1: "Jannik Sinner", bandera2: "../assets/banderas/hungria.png", jugador2: "Frances Tiafoe", uno: "6-4", dos: "6-3", tres: "", cuatro: "", cinco: "" },
      { id: 13, genero: "masculino", torneo: "", bandera1:"../assets/banderas/italia.png", jugador1: "Jannik Sinner", bandera2: "../assets/banderas/hungria.png", jugador2: "Frances Tiafoe", uno: "6-4", dos: "6-3", tres: "", cuatro: "", cinco: "" },
      { id: 14, genero: "masculino", torneo: "", bandera1:"../assets/banderas/italia.png", jugador1: "Jannik Sinner", bandera2: "../assets/banderas/hungria.png", jugador2: "Frances Tiafoe", uno: "6-4", dos: "6-3", tres: "", cuatro: "", cinco: "" },
      { id: 15, genero: "masculino", torneo: "", bandera1:"../assets/banderas/italia.png", jugador1: "Jannik Sinner", bandera2: "../assets/banderas/hungria.png", jugador2: "Frances Tiafoe", uno: "6-4", dos: "6-3", tres: "", cuatro: "", cinco: "" },
      { id: 16, genero: "femenino", torneo: "", bandera1:"", jugador1: "Tereza Martincova", jugador2: "Kai-Lin Zhang", uno: "6-4", dos: "6-4", tres: "", cuatro: "", cinco: "" },
      { id: 17, genero: "femenino", torneo: "", bandera1:"", jugador1: "Karman Thandi", jugador2: "Kwan Yau Ng", uno: "6-4", dos: "6-4", tres: "", cuatro: "", cinco: "" },
      { id: 18, genero: "femenino", torneo: "", bandera1:"", jugador1: "Ya-Hsuan Lee", jugador2: "Ayano Shimizu", uno: "6-4", dos: "6-4", tres: "", cuatro: "", cinco: "" },
      { id: 19, genero: "femenino", torneo: "", bandera1:"", jugador1: "Yuxuan Zhang", jugador2: "Ya-Yi Yang", uno: "6-0", dos: "6-1", tres: "", cuatro: "", cinco: "" },
      { id: 20, genero: "femenino", torneo: "", bandera1:"", jugador1: "Elena-Gabriela Ruse", jugador2: "Mayo Hibi", uno: "7-5", dos: "2-6", tres: "6-4", cuatro: "", cinco: "" },
      { id: 21, genero: "femenino", torneo: "", bandera1:"", jugador1: "Lizette Cabrera", jugador2: "Junri Namigata", uno: "6-4", dos: "6-3", tres: "", cuatro: "", cinco: "" },
      { id: 22, genero: "femenino", torneo: "", bandera1:"", jugador1: "Olga Doroshina", jugador2: "Peangtarn Plipuech", uno: "6-2", dos: "6-3", tres: "", cuatro: "", cinco: "" },
      { id: 23, genero: "femenino", torneo: "", bandera1:"", jugador1: "Su Jeong Jang", jugador2: "Momoko Kobori", uno: "6-1", dos: "6-4", tres: "", cuatro: "", cinco: "" },
      { id: 24, genero: "femenino", torneo: "", bandera1:"", jugador1: "Bibiane Schoofs", jugador2: "Carol", uno: "6-3", dos: "6-2", tres: "", cuatro: "", cinco: "" },
      { id: 25, genero: "femenino", torneo: "", bandera1:"", jugador1: "Nao Hibino", jugador2: "Ankita Raina", uno: "7-5", dos: "6-1", tres: "", cuatro: "", cinco: "" },
      { id: 26, genero: "femenino", torneo: "", bandera1:"", jugador1: "Yuxuan Zhang", jugador2: "Karman Thandi", uno: "6-2", dos: "6-2", tres: "", cuatro: "", cinco: "" },
      { id: 27, genero: "femenino", torneo: "", bandera1:"", jugador1: "Tereza Martinicova", jugador2: "Ya-Hsuan Lee", uno: "6-3", dos: "6-0", tres: "", cuatro: "", cinco: "" },
      { id: 28, genero: "femenino", torneo: "", bandera1:"", jugador1: "Elena-Gabriela Ruse", jugador2: "Olga Doroshina", uno: "7-5", dos: "7-5", tres: "", cuatro: "", cinco: "" },
      { id: 29, genero: "femenino", torneo: "", bandera1:"", jugador1: "Su Jeong Jang", jugador2: "Lizette Cabrera", uno: "6-4", dos: "6-4", tres: "", cuatro: "", cinco: "" },
      { id: 30, genero: "femenino", torneo: "", bandera1:"", jugador1: "Fang Ting Xun", jugador2: "Yingying Duan", uno: "7-5", dos: "7-5", tres: "", cuatro: "", cinco: "" }
    ];

    const DOBLES = [
      {id:1, genero :"masculino", torneo:"", jugador1:"Roberto Carballaes Baena", jugador2:"Jaume Munar", jugador3:"Ben McLachlan", jugador4:"Jan-Lennard Struff", uno:"6-1", dos:"3-6", tres:"11-9", cuatro:"", cinco:""},
      {id:2, genero :"masculino", torneo:"", jugador1:"Leander Paes", jugador2:"Benoit Paire", jugador3:"Austin Krajicek", jugador4:"Artem Sitak", uno:"4-6", dos:"6-4", tres:"10-7", cuatro:"", cinco:""},
      {id:3, genero :"masculino", torneo:"", jugador1:"", jugador2:"", jugador3:"", jugador4:"", uno:"", dos:"", tres:"", cuatro:"", cinco:""},
      {id:4, genero :"masculino", torneo:"", jugador1:"", jugador2:"", jugador3:"", jugador4:"", uno:"", dos:"", tres:"", cuatro:"", cinco:""},
      {id:5, genero :"masculino", torneo:"", jugador1:"", jugador2:"", jugador3:"", jugador4:"", uno:"", dos:"", tres:"", cuatro:"", cinco:""},
      {id:6, genero :"masculino", torneo:"", jugador1:"", jugador2:"", jugador3:"", jugador4:"", uno:"", dos:"", tres:"", cuatro:"", cinco:""},
      {id:7, genero :"masculino", torneo:"", jugador1:"", jugador2:"", jugador3:"", jugador4:"", uno:"", dos:"", tres:"", cuatro:"", cinco:""},
      {id:8, genero :"masculino", torneo:"", jugador1:"", jugador2:"", jugador3:"", jugador4:"", uno:"", dos:"", tres:"", cuatro:"", cinco:""},
      {id:9, genero :"masculino", torneo:"", jugador1:"", jugador2:"", jugador3:"", jugador4:"", uno:"", dos:"", tres:"", cuatro:"", cinco:""},
      {id:10, genero :"masculino", torneo:"", jugador1:"", jugador2:"", jugador3:"", jugador4:"", uno:"", dos:"", tres:"", cuatro:"", cinco:""},
      {id:11, genero :"femenino", torneo:"", jugador1:"", jugador2:"", jugador3:"", jugador4:"", uno:"", dos:"", tres:"", cuatro:"", cinco:""},
      {id:12, genero :"femenino", torneo:"", jugador1:"", jugador2:"", jugador3:"", jugador4:"", uno:"", dos:"", tres:"", cuatro:"", cinco:""},
      {id:13, genero :"femenino", torneo:"", jugador1:"", jugador2:"", jugador3:"", jugador4:"", uno:"", dos:"", tres:"", cuatro:"", cinco:""},
      {id:14, genero :"femenino", torneo:"", jugador1:"", jugador2:"", jugador3:"", jugador4:"", uno:"", dos:"", tres:"", cuatro:"", cinco:""},
      {id:15, genero :"femenino", torneo:"", jugador1:"", jugador2:"", jugador3:"", jugador4:"", uno:"", dos:"", tres:"", cuatro:"", cinco:""},
      {id:16, genero :"femenino", torneo:"", jugador1:"", jugador2:"", jugador3:"", jugador4:"", uno:"", dos:"", tres:"", cuatro:"", cinco:""},
      {id:17, genero :"femenino", torneo:"", jugador1:"", jugador2:"", jugador3:"", jugador4:"", uno:"", dos:"", tres:"", cuatro:"", cinco:""},
      {id:18, genero :"femenino", torneo:"", jugador1:"", jugador2:"", jugador3:"", jugador4:"", uno:"", dos:"", tres:"", cuatro:"", cinco:""},
      {id:19, genero :"femenino", torneo:"", jugador1:"", jugador2:"", jugador3:"", jugador4:"", uno:"", dos:"", tres:"", cuatro:"", cinco:""},
      {id:20, genero :"femenino", torneo:"", jugador1:"", jugador2:"", jugador3:"", jugador4:"", uno:"", dos:"", tres:"", cuatro:"", cinco:""}
    ];
    return { JUGADORES, JUGADORAS, INDIVIDUALES, DOBLES };
  }
}