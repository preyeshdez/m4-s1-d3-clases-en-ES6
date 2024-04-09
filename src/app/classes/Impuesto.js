export default class Impuesto {
    constructor(montoBrutoAnual = 0, deducciones = 0){
        this._montoBrutoAnual = montoBrutoAnual;
        this._deducciones = deducciones;
    }

    getMontoBrutoAnual(){
        return this._montoBrutoAnual
    }

    setMontoBrutoAnual(nuevoMontoBruto){
        this._montoBrutoAnual = nuevoMontoBruto;
        return this._montoBrutoAnual;
    }

    getDeducciones(){
        return this._deducciones;
    }

    setDeducciones(nuevaDeduccion){
        this._deducciones = nuevaDeduccion;
        return this._deducciones;
    }
}

