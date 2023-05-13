//Mecanismo por el cual todos los objetos o elementos de JavaScrip
//pueden extender sus propiedades y métodos
/*Array.prototype.mayoresQueTres = function(){
    var arregloModificado = [];
    for(let i=0; i<this.length; i++){
        if(this[i]>3){
            arregloModificado.push(false);
        }else{
            arregloModificado.push(this[i]);
        }
    }
    return arregloModificado;
};
var arreglo = [1,2,7,5,9,3,2,1];
var nuevoArreglo = arreglo.mayoresQueTres();
console.log(nuevoArreglo);
//___-----_---_________------____-
//otro ejemplo


class LatinoAmerica{
    constructor(){
        this.paises = [];
    }
}
LatinoAmerica.prototype.agregarPais = function(pais){
    this.paises.push(pais);
}
var continente = new latinoAmerica();//la variable continente tendra la tarea de insertar en latinoamerica los paises
continente.agregarPais('Venezuela');//la variable continente invoca al prototipo agregar pais 
continente.agregarPais('Colombia');
console.log(continente.paises);*/
//--__--__--___--____-_____---__--_---

class Numeritos{
    constructor(){
        this.num = [];
    }
}
Numeritos.prototype.pushear = function(cualquierNum){
    this.num.push(cualquierNum);
}
Numeritos.prototype.elPromedi = function(){
    var promedio = this.suma() / this.num.length;
    return promedio;
}

Numeritos.prototype.suma = function(){
    var sumaNum = 0;
    for(var i = 0; i < this.num.length; i++){
    sumaNum += this.num[i];
    }
    return sumaNum;
}


var meternum = new Numeritos();
meternum.pushear(2);
meternum.pushear(1);
meternum.pushear(7);
meternum.pushear(14);
console.log(meternum.num);
console.log('La suma es ' + meternum.suma());
console.log('el promedio es '+ meternum.elPromedi());

var meternum2 = new Numeritos();
meternum2.pushear(10);
meternum2.pushear(11);
meternum2.pushear(7);
meternum2.pushear(5);
console.log('los elementos son ' + meternum2.num);
console.log('la suma es ' + meternum2.suma());
console.log('el promedio es ' + meternum2.elPromedi());
