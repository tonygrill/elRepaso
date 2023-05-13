//declaración de clases, función constructora, método antiguo
function Auto(puertas,color, marca, años, ruedas){
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this.años = años;
    this.ruedas = ruedas;
    this.informacion = function(){
        console.log('este es un ' + this.marca + ' de color ' + this.color);
    };
}
var miPrimerAuto = new Auto(2,'rojo','ferrary',2000,4);// se le pasa información a la clase
console.log(miPrimerAuto);
miPrimerAuto.informacion();
//____--_--------___-______--________-------------------

//declaración de clases con el método nuevo expresión de clases
//las clases tienen en su interior solo dos cosas: propiedades y métodos.
class Auto2{
    constructor(puerta, elColor, laMarca, elAño, lasRuedas){
        this.puerta = puerta;
        this.elColor = elColor;
        this.laMarca = laMarca;
        this.elAño = elAño;
        this.lasRuedas = lasRuedas;
    }
    informacion(){
        console.log('este es un ' + this.laMarca + ' de color ' +  this.elColor);
    }
}
var miNuevoAuto = new Auto2(4, 'Blanco', 'Toyota', '2024', '4');
console.log(miNuevoAuto);
//miNuevoAuto.informacion();
//--_-_--_-___________________________________

//otro ejemplo
class Football{
    constructor(jugador){
        this.jugador = jugador;
    }
    obtenerNombre(){                //el método se declara fuera del constructor
        console.log(this.jugador);
    }
}
var portugal = new Football('Cristiano');
var brasl = new Football('Pele');

console.log(portugal);//maneras de llamar a la clase
//portugal.obtenerNombre();
//brasl.obtenerNombre();