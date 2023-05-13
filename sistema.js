//sistema escolar 

class Seccion{
    constructor(nombre, notas, secc){
        this.estudiante = {nombre: nombre, notas: notas, sección: secc};
    }
}
var estudiante1 = new Seccion('Antonio', [10,20,11,12], 1);
console.log(estudiante1.estudiante);


Seccion.prototype.promedio = function(){
    var prom = 0;
    var suma = 0;
    for(var i = 0; i < this.estudiante.notas.length; i++){
      suma += this.estudiante.notas[i];
    }
    prom = suma / this.estudiante.notas.length;
    return prom;
  }
  console.log('el promedio de estudiante ' + estudiante1.estudiante.nombre + ' es ' + estudiante1.promedio());