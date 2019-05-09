export class RTorneo {
    constructor(
        public id: number,
        public nombre: string,
        public sede: string,
        public cancha: string,
        public descripcion: string,
        public imagen?: string,
        public inscripcionInicio?: Date,
        public inscripcionFinal?: Date,
        public torneoInicio?: Date,
        public torneoFinal?: Date
    ){}
}
