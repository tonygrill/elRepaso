//Extenciones, es una manera de extender propiedades y métodos entre clases
class Persona{
    constructor(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
    }
    saludar(){
        console.log('hola, me llamo ' + this.nombre + ' tengo ' + this.edad + ' años');
    }
}

class Programador extends Persona{
    constructor(nombre, edad, añosExperiencia){
        super(nombre, edad);            //hereda las propiedades de la clase persona
        this.añosExperiencia = añosExperiencia;
    }
    codear(){
        console.log ('Soy ' + this.nombre + ' tengo ' + this.añosExperiencia + ' años de experiencia');
    }
}

var antonio = new Programador('Antonio', 37, 11);
antonio.saludar();
antonio.codear();