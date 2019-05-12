export class Inscrito {
    id: number;
    idCompetencia: number;
    nombreJugador?: string;
    nombreJugadora?: string;
    equipo?: string;

    constructor(idCompetencia: number, nombreJugador?: string, nombreJugadora?: string, equipo?: string) {
        this.idCompetencia = idCompetencia;
        this.nombreJugador = nombreJugador;
        this.nombreJugadora = nombreJugadora;
        this.equipo = equipo;
    }
}