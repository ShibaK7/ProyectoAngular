export class RTorneo {
    constructor(
        public id: number,
        public nombre: string,
        public sede: string,
        public cancha: string,
        public descripcion: string,
        public imagen: string,
        public inscripcionInicio: string,
        public inscripcionFinal: string,
        public torneoInicio: string,
        public torneoFinal: string
    ){}
}
