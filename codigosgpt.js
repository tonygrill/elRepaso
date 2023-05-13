function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
  }


const base = 9;
const altura = 2;
const area = calcularAreaTriangulo(base, altura);
console.log("El area es "+area); // Output: 25

//producto notable (a+b)^2

function productoNotable(a, b){
    var r = ((a*a) + (2*a*b) + b*b);
    return r;
}
var a = 3;
var b = 5;
console.log(productoNotable(a,b));