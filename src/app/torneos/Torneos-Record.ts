export class Torneo {
    id: number;
    id_competencia: number; 
    nombreTorneo: string;
    nacionalidad: string;
    fechaInicio: string;
    fechaFinal: string;
    tipoCancha: string;
    descripcion: string;
    titulo: string;
    informacion: string;
    financiamientoTotal: string;
    biografia: string;
    foto: string;
    imagen1: string;
    imagen2: string;
    imagen3: string;
    imagen4: string;
    tipoCompetencia: number;
    torneo: string;
    categoria: number;
    premioPrimerLugar: number;
    premioSegundoLugar: number;
    premioTercerLugar: number;
    a1 : number;
    a2 : number;
    a3 : number;
    a4 : number;
    a5 : number;
    a6 : number;
    b1 : number;
    b2 : number;
    b3 : number;
    b4 : number;
    b5 : number;
    b6 : number;
    fechaCompetencia: string;
    inscripcionInicio: string;
    inscripcionFinal: string;

    constructor(nombreTorneo: string, nacionalidad: string, tipoCancha: string, descripcion: string, financiamiento: string, fechaInicio: string, fechaFinal: string, inscripcionInicio: string, inscripcionFinal: string)
    {
        this.nombreTorneo = nombreTorneo;
        this.nacionalidad = nacionalidad;
        this.tipoCancha = tipoCancha;
        this.descripcion = descripcion;
        this.financiamientoTotal = financiamiento;
        this.fechaInicio = fechaInicio;
        this.fechaFinal = fechaFinal;
        this.inscripcionInicio = inscripcionInicio;
        this.inscripcionFinal = inscripcionFinal;
    }
}



