import "./index.css";
import Cliente from "./classes/Cliente.js";
import Impuesto from "./classes/Impuesto.js";

let impuesto1 = new Impuesto(1_000_000, 200_000);
let cliente1 = new Cliente("Carlos", impuesto1);

console.log(impuesto1);
console.log(cliente1);

let calculoImpuesto1 = cliente1.calcularImpuesto();
console.log(calculoImpuesto1);