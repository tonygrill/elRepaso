//se genera un nuevo arreglo a partir un solo elemento de listDeCompras
//
/*var listaDeCompras=[];
listaDeCompras[8]='Pepino';
var array2=listaDeCompras[8].split("");
array2.push("cebolla");
console.log(array2.length);

//el método includes verifica si existe un elemento en un arreglo, retora un valor booleano
//el método every verifica si todos los elementos cumplen la condición

var pintores = ["Picasso", "Donatello", "Velazquez", "Dali"];
console.log(pintores.includes('Antonini'));//verifica si el elemento Antonini se encuentra en pintores
//-----------------------------------------------------------------------------------------
//Método every, verifica si todos los elementos en un arreglo cumplen condición
var numer = [6,9,7,8];
var cumplen = numer.every((num)=>{
    return num > 5;
})
console.log(cumplen);
//método join vuelve a unir en un string todos los elementos

var miNombre = ['A','N','T','O','N','I','O'];
var nombreJunto = miNombre.join('');
console.log(nombreJunto);
console.log(nombreJunto.length)*/
//----------_-_-_-_-__
//Método forEach puede iterar en el array de manera general pero sin hacer cambios

var miNum = [1,2,3,4,5];
miNum.forEach((num)=>{
    if(num===3 || num===2){ //este metodo retorna todos los 3 y 2 presentes en el arreglo
        console.log(num);
    }
});
//___----_____------____-____---_-
//El método .map si puede alterar los valores del array
var masunox = [1,2,3,4,5,6,7];
var laSuma = masunox.map((num)=>{
    return num +   1; //le suma 1 a cada elemento de masunox.
});
console.log(laSuma);
console.log
