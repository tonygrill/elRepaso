var saludo1 = function(){
    return 'Antonio';
}

var complemetoSaludo = function(){
    return ' como estas ';
}

var saludar =  function (cb1,cb2){
    return cb1() + cb2();
}

var saludoCompleto = saludar(saludo1, complemetoSaludo);
console.log(saludoCompleto);
//__--_--_-_---___---____----__--______----___

var  devuelvoFrase = function(comida){
return 'Hoy quiero comer ' + comida;
}

var speak = function(comida, cb){
    return cb(comida);
}

var finnal = speak ('pizza ', devuelvoFrase);
console.log(finnal);
 