// Definir el prototipo del objeto Estudiante
function Estudiante(nombre) {
    this.nombre = nombre;
    this.notas = [];
  }
  
  // Agregar un método al prototipo del objeto Estudiante para agregar una nota
  Estudiante.prototype.agregarNota = function(nota) {
    this.notas.push(nota);
  };
  
  // Agregar un método al prototipo del objeto Estudiante para calcular la suma de las notas
  Estudiante.prototype.calcularSuma = function() {
    var suma = 0;
    for (var i = 0; i < this.notas.length; i++) {
      suma += this.notas[i];
    }
    return suma;
  };
  
  // Agregar un método al prototipo del objeto Estudiante para calcular el promedio de las notas
  Estudiante.prototype.calcularPromedio = function() {
    var suma = this.calcularSuma();
    return suma / this.notas.length;
  };
  
  // Crear instancias de estudiantes
  var estudiante1 = new Estudiante("Juan");
  estudiante1.agregarNota(8);
  estudiante1.agregarNota(9);
  estudiante1.agregarNota(7);
  
  var estudiante2 = new Estudiante("María");
  estudiante2.agregarNota(6);
  estudiante2.agregarNota(7);
  estudiante2.agregarNota(9);
  
  // Obtener la suma y el promedio de las notas de cada estudiante
  console.log(estudiante1.nombre + ":");
  console.log("Suma de notas: " + estudiante1.calcularSuma());
  console.log("Promedio de notas: " + estudiante1.calcularPromedio());
  
  console.log(estudiante2.nombre + ":");
  console.log("Suma de notas: " + estudiante2.calcularSuma());
  console.log("Promedio de notas: " + estudiante2.calcularPromedio());
  