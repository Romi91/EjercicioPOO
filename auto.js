class car {
    constructor(ruedas, velocidadIncial, volante){
        this.ruedas = ruedas;
        this.velocidadIncial = velocidadIncial;
        this.volante = volante;
        
    }
    acelerar(a) {
        if(a >= velocidadMaxima){
           return ("Fundiste el motor, su velocidad maxima es :" + velocidadMaxima);
        } else {
            return ("La aceleracion es : " + a);
        }

    }
    frenar(f){
        if(f === this.velocidadIncial){
            return ("Esta frenado");
        }else{
            return("No esta frenado");
        }
        
    }
    girar(){

    }
    arrancar(){

    }
    marchaAtras(){

    }
}
const modelo = prompt("Ingrese el modelo");
const marca = prompt("Ingrese la marca");
const color = prompt("Ingrese el color");
const puertas = prompt("Ingrese la cantidad de puertas");
const velocidadMaxima = prompt("Ingrese la velocidad maxima");
const patente = prompt("Ingrese el numero de patente");
const carOne = new car(4, 0, 1, modelo, marca, color, puertas, velocidadMaxima, patente);
const ace = carOne.acelerar(100);
//console.log(ace);
const fr = carOne.frenar(0);
console.log(fr);
//console.log(carOne);


//class avion extends car {
  //  constructor(turbina, alerones, helice, cola){
    //    super();
    //}
//}