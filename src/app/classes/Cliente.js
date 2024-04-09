export default class Cliente {
    constructor(nombre, impuesto){
        this._nombre = nombre;
        this._impuesto = impuesto;
    }

    getNombre(){
        return this._nombre;
    }

    setNombre(nuevoNombre){
        this._nombre = nuevoNombre;
        return this._nombre;
    }

    getImpuesto(){
        return this._impuesto
    }

    setImpuesto(nuevoImpuesto){
        this._impuesto = nuevoImpuesto;
        return this._nuevoImpuesto;
    }

    calcularImpuesto(){
        return (this._impuesto.getMontoBrutoAnual() - this._impuesto.getDeducciones())* 0.21;
    }

}

