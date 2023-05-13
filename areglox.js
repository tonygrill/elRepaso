var deportes = {conBalon:['Football', 'basketball', 'Rugby'],
sinBalon:['surf', 'Paracaidismo', 'Boxeo']};

var persona = {nombre:'Antonio', apellido:'Moreno', edad:'36', 
estudios:{esProgramador: true}};
//delete persona.edad;   //permite borrar una propiedad.
persona.edad = '26';
console.log(persona);

//---____---------__________----------
//funciones dentro de un objeto.
var misFunciones ={saludar: function(){
    console.log("hola")
},
};
misFunciones.saludar();
//--__--------------________________________
//BRACKETS-NOTATION 
var comidas = {};
var bracketNotation = function(prop1,porp2){
    comidas[prop1] = ['frutas','vegetales'];
    comidas[porp2] = ['hamburguesas', 'papas fritas'];
};
bracketNotation('Saludable','noSaludable');//se les pasa por parametro a la funcion bracketNotation
console.log(comidas);//se imprime el objeto comida
//-__-_---_---__-_-______-----_-------____

//método objets
var libro = {autor:'Borges', genero:'policial', año:1990};
var tienePropiedad = libro.hasOwnProperty('autor'); // esto muestra si el libro tiene determinada propiedad, retorna un valor booleano
console.log(tienePropiedad); 
var todasPropiedades = Object.keys(libro);
console.log(todasPropiedades);
//-----_______------________-------_______

//implementación del for in, este bucle solo sirve para recorrer objetos
var mundo = {continentes: 7, paises: 195, oceanos: 5};
for (var prop in mundo){
    console.log('esta el la propiedad: '+prop);
    console.log('este es el valor: '+ mundo[prop]);
}
//--_________-----_____________________--------

//implementacion del this, se refiere a un contexto
var mascota = {animal: 'perro', raza: 'pastor', amistoso: true, 
dueña: 'Evelyn', info: function(){
    console.log('la dueña del perro es ' + this.dueña);//el apuntador this se refiere siempre al cotexto en el objeto
},
};
mascota.info();