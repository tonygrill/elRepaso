//ejemplo de Object.entries()//
/*const persona = {nombre: 'Antonio', edad: 30, prrfesión: 'Ingeniero'
};

//obteniendo las entradas del objeto persona
const entradas = object.entries(personas);
//iterando sobre entradas con ciclo 'for of'
for(const [clave,valor] of entradas){
    console.log(´${clave}: ${valor}´);
}*/
/*const persona = {
    nombre: 'Juan',
    edad: 30,
    profesion: 'ingeniero'
  };
  
  // Obteniendo las entradas del objeto persona
  const entradas = Object.entries(persona);
  
  // Iterando sobre las entradas
  for (const [clave, valor] of entradas) {
    console.log(`${clave}: ${valor}`);
  }
  //--______-----_____--__---------_____--__-
// Object.is es una herramienta que nos permite comparar dos arreglos de manera muy precisa
  var anto1 = {edad: 36, nacionalidad:'venezolana', vive: 'Colombia'};
  var anto2 = {edad: 36, nacionalidad:'venezolana', vive: 'Colombia'};
  console.log(Object.is(anto1, anto1));



*/



class Seccion {
  constructor(nombre, notas, secc) {
      this.estudiantes = [{ nombre: nombre, notas: notas, sección: secc }];
  }
}

var estudiante1 = new Seccion('Antonio', [10, 20, 11, 12], 1);
console.log(estudiante1.estudiantes);

Seccion.prototype.promedio = function() {
  var prom = 0;
  var suma = 0;
  for (var i = 0; i < this.estudiantes[0].notas.length; i++) {
      suma += this.estudiantes[0].notas[i];
  }
  prom = suma / this.estudiantes[0].notas.length;
  return prom;
}

console.log('El promedio del estudiante ' + estudiante1.estudiantes[0].nombre + ' es ' + estudiante1.promedio());
