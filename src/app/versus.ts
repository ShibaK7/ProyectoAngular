export class Versus {
    id: number;
    idCompetencia: number;
    nombreJugador1: string;
    nombreJugador2: string;
    hora:any;
    fecha: any;

   constructor(idx:number, idCompet: number, nomJugador1: string, nomJugador2: string, horax:any ,fechax: any) {
        this.id = idx;
        this.idCompetencia = idCompet;
        this.nombreJugador1 = nomJugador1;
        this.nombreJugador2 = nomJugador2;
        this.hora = horax;
        this.fecha = fechax;
    }
}