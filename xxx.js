//repaso de funciones
//function sumaTres (x){
//console.log(x + 3);
//}
//sumaTres(3);
//_____________________________

//tres maneras de declarar una funcióm

/*function sumaTres(x){
    return x + 3;
}

var sumaTres = function(x){
    return x + 3;
}*/

//ejemplo de como pasar un parametro

/*var sumaTres = (x) => {
    return x + 3;
};
x = 8;
console.log(sumaTres(x));+*/

// como convertir letras a numeros y separarlas y obtener el cuadrado de cada dígito separado.

function separarEnteroYMostrar(numero){
    digito = numero.toString().split("");
    for(i=0; i < digito.length; i++){
    console.log(digito[i]);
    console.log('El cuadrado es: ' + Math.pow(digito[i],2));
}
}
var numero = 7892;
separarEnteroYMostrar(numero);

//Programa que cuente los digitos de un entero

function contarDigitos(enteroo){
    var numeroString = enteroo.toString();
    var contarDigitos = numeroString.length;
    return contarDigitos;
}

var enteroo = 8987898;
var cantidadDeDigitos = contarDigitos(enteroo);
console.log('Cantidad de dígitos de ' + enteroo + ' es ' + cantidadDeDigitos);

//------------------------------------------------
//Código que transforma digitos en strings
function digitosToStrings (elnumero){
    var num1 = "uno";
    var num2 = "dos";
    var num3 = "tres";
    var num4 = "cuatro";
    var num5 = "cinco";
    var num6 = "seis";
    var num7 = "siete";
    var num8 = "ocho";
    var num9 = "nueve";
    var num0 = "cero";
    numToLetras = elnumero.toString("").split();
    for(i = 0; i < numToLetras.length; i++){
        if(numToLetras[i] === 0){
            console.log(num0);
        }else if (numToLetras[i] == 1){
            console.log(num1);
        }else if (numToLetras[i] == 2){
            console.log(num2);
        }else if (numToLetras[i] == 3){
            console.log(num3);
        }else if (numToLetras[i] == 4){
            console.log(num4);
        }else if (numToLetras[i] == 5){
            console.log(num5);
        }else if (numToLetras[i] == 6){
            console.log(num6);
        }else if (numToLetras[i] == 7){
            console.log(num7);
        }else if (numToLetras[i] == 8){
            console.log(num8);
        }else if (numToLetras[i] == 9){
            console.log(num9);
        }
    }
} 
digitosToStrings(453);
function digitosToStrings(elnumero) {
    var num1 = "uno";
    var num2 = "dos";
    var num3 = "tres";
    var num4 = "cuatro";
    var num5 = "cinco";
    var num6 = "seis";
    var num7 = "siete";
    var num8 = "ocho";
    var num9 = "nueve";
    var num0 = "cero";
  
    numToLetras = elnumero.toString().split("");//
    
    for (i = 0; i < numToLetras.length; i++) {
      if (numToLetras[i] == "0") {
        console.log(num0);
      } else if (numToLetras[i] == "1") {
        console.log(num1);
      } else if (numToLetras[i] == "2") {
        console.log(num2);
      } else if (numToLetras[i] == "3") {
        console.log(num3);
      } else if (numToLetras[i] == "4") {
        console.log(num4);
      } else if (numToLetras[i] == "5") {
        console.log(num5);
      } else if (numToLetras[i] == "6") {
        console.log(num6);
      } else if (numToLetras[i] == "7") {
        console.log(num7);
      } else if (numToLetras[i] == "8") {
        console.log(num8);
      } else if (numToLetras[i] == "9") {
        console.log(num9);
      }
    }
  }
  
  // Ejemplo de uso
  digitosToStrings(131088); // Salida: "dos", "cinco", "cuatro"*/
  