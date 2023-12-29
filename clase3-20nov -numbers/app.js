// alert("hola");

//creación números
const numero1 = 20;

//segunda forma

const numero2 = Number(200);

//tercera forma

const numero3 = Number(23.3);

console.log(numero1);
console.log(numero2);
console.log(numero3);

//el maximo valor de un número
console.log(Number.MAX_VALUE);

//valor minimo de un número
console.log(Number.MIN_VALUE);

//obtener NaN
console.log(Number.NaN);

//valor infinito positivo
console.log(Number.POSITIVE_INFINITY);

//valor infinito negativo
console.log(Number.NEGATIVE_INFINITY);

//operaciones con números

let num1 = 30;
let num2 = 20;

let resultado;

//suma
resultado = num1 + num2;
console.log(`la suma de ${num1} + ${num2} = ${resultado}`);

//resta
resultado = num1 - num2;
console.log(`la resta de ${num1} + ${num2} = ${resultado}`);

//multiplicación
resultado = num1 * num2;
console.log(`la multiplicación de ${num1} * ${num2} = ${resultado}`);

//división
resultado = num1 / num2;
console.log(`la división de ${num1} / ${num2} = ${resultado}`);

//modulo
resultado = num1 % num2;
console.log(`el residuo de ${num1} / ${num2} = ${resultado}`);

//incrementar variable o número

let antesDeIncremento = num1;
//primera forma
num1 = num1 + 1;

//segunda forma
num1++;

//tercera forma
++num1;

//incrementos en número
num1 += 3;
console.log(num1);

//decremento variable o número

let antesDeDecremento = num2;
//primera forma
num2 = num2 - 1;

//segunda forma
num2--;

//tercera forma
--num2;

//decremento en número
num2 -= 4;
console.log(num2);

//objeto math

const PI = Math.PI;

console.log(`el número PI = ${PI}`);

//EULER
console.log(`el número euler = ${Math.E}`);

//redondear un número

const numero_1 = 2.8;
console.log(Math.round(numero_1));

//aproximar hacia abajo
console.log(Math.floor(numero_1));

//aproximar hacia arriba
console.log(Math.ceil(numero_1));

//raiz cuadrada
console.log(Math.sqrt(16));

//valor absoluto
console.log(Math.abs(-400));

//potenciación
console.log(`8² = ${Math.pow(8, 2)}`);
console.log(`8² = ${8 ** 2}`);

//mayor de un conjunto de números
const mayor = Math.max(21, 54, -34, 100, 0);
console.log(mayor);

//menor de un conjunto de números
const menor = Math.min(21, 54, -34, 100, 0);
console.log(menor);

//número random
console.log(Math.random());

//número random xxde 1 a N xx  n=10
console.log(Math.floor(Math.random() * 10));

//número random xxde 10 a 30
console.log(Math.floor(Math.random() * (30 - 10 + 1) + 10));


/**
 * 1.divisiones, multiplicaciones
 * 2.sumas, restas
 * 
 */
resultado = (20+30)*2;
console.log(resultado);