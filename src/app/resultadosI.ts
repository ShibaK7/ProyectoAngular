export class ResultadoI
{
    id : number;
    genero? : string;
    torneo? : string;
    bandera1? : string;
    jugador1 : string;
    bandera2? : string;
    jugador2 : string;
    j1s1: number;
    j2s1: number;
    j1s2: number;
    j2s2: number;
    j1s3: number;
    j2s3: number;
    j1s4: number;
    j2s4: number;
    j1s5: number;
    j2s5: number;
    verificacion : number;
    abandono : number;
    motivo : string;
    fechaCompetencia? : string;

    constructor(jugador1 : string,jugador2 : string, j1s1: number,
                 j2s1 : number, j1s2 : number, j2s2 : number ,
                 j1s3 : number, j2s3 : number, j1s4 : number,
                 j2s4 : number, j1s5 : number, j2s5 : number,
                 verificacion : number, abandono : number,
                 motivo : string){
                    this.jugador1 = jugador1;
                    this.jugador2 = jugador2;
                    this.j1s1 = j1s1;
                    this.j2s1 = j2s1;
                    this.j1s2 = j1s2;
                    this.j2s2 = j2s2;
                    this.j1s3 = j1s3;
                    this.j2s3 = j2s3;
                    this.j1s4 = j1s4;
                    this.j2s4 = j2s4;
                    this.j1s5 = j1s5;
                    this.j2s5 = j2s5;
                    this.verificacion = verificacion;
                    this.abandono = abandono;
                    this.motivo = motivo;
                    this.genero = null;
                    this.torneo = null;
                    this.bandera1 = null;
                    this.bandera2 = null;
                    this.fechaCompetencia = null;
    }

    
}

