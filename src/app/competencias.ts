export class Competencias {
    constructor(
        public id: number,
        public tipoCompetencia: string,
        public idTorneo: number,
        public cupo: number,
        public categoria: string,
        public costo: number,
        public primero: string,
        public segundo: string,
        public tercero: string,
    ){}
}
