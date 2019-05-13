export class Torneo {
    id: number;
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


