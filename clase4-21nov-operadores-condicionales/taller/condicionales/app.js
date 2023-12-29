//Ejercicios  Condicionales en JavaScript

//1. Verifica si un número es positivo.
//2. Verifica si un número es negativo.
console.log("1.2.");
let num = 50;
num >= 0 ? console.log("es positivo") : console.log("es negativo");
//3. Comprueba si un número es par.
//4. Comprueba si un número es impar.
console.log("3.4.");
num % 2 == 0 ? console.log("es par") : console.log("es impar");
//5. Determina si un número es múltiplo de 5.
console.log("5.");
num % 5 == 0
  ? console.log("es multiplo de 5")
  : console.log("no es multiplo de 5");
//6. Verifica si un número es divisible entre 3.
console.log("6.");
num % 3 === 0
  ? console.log("es Divisible entre 3")
  : console.log(" no es divisible entre 3");
//7. Determina si un número es mayor que 100.
console.log("7.");
num > 100 ? console.log("es mayor de 100") : console.log("es menor de 100");
//8. Verifica si un número es menor que -50.
console.log("8.");
num < -50 ? console.log("es menor de -50") : console.log("es mayor de -50");
//9. Comprueba si un número está en el rango de 20 a 50.
console.log("9.");
if (num >= 20 && num <= 50) {
  console.log("el numero esta en el rango");
} else {
  console.log("el numero no esta en el rango");
}
//10.Determina si un número es igual a 0.
num == 0
  ? console.log("el numero es igual a 0")
  : console.log("el numero no es igual a 0");
//11.Verifica si un número es mayor que -10 y menor que 10.
if (num > -10 && num < 10) {
  console.log("el numero es menor a -10 y mayor a 10");
} else {
  console.log("el numero no es menor a -10 y ni mayor a 10");
}
//12.Determina si un número es un año bisiesto.
console.log("12.");
let año = 2023;
if (año % 4 === 0 && año % 100 !== 0) {
  console.log("es año bisiesto");
} else {
  console.log("no es año bisiesto");
}
//13.Verifica si una persona es mayor de edad (mayor o igual a 18 años).
console.log("13.");
let edad = 18;
if (edad > 0 && edad < 18) {
  console.log("es menor de edad.");
} else {
  console.log("es mayor de edad.");
}
//14.
console.log("14. comodin");
//15.Verifica si un número es un cuadrado perfecto.
console.log("15.");
let numero = 20;
num = Math.sqrt(numero);
if (num * num == 0) {
  console.log("el numero es cuadrado perfecto");
} else {
  console.log("el numero no es cuadrado perfecto");
}
//16.Determina si un número es un número de Fibonacci.
console.log("16.");
num = 1;
let num1 = 5 * num * num;
let num2 = Math.sqrt(num1 + 4);
let num3 = Math.sqrt(num1 - 4);

if (num2 % 1 === 0 || num3 % 1 === 0) {
  console.log("el numero es fibonacci");
} else {
  console.log("el numero no es fibonacci");
}
//17.Verifica si un número es una potencia de 2.
console.log("17.");
if (num > 0 && (num & (num - 1)) === 0) {
  console.log(`${numero} es una potencia de 2.`);
} else {
  console.log(`${numero} no es potencia de 2.`);
}
//18.Determina si un número es un palíndromo.
console.log("18.");
num = 112211;
let stringNum = num.toString();
let cadenaInvertida = undefined;

cadenaInvertida = stringNum.split("").reverse().join("");
stringNum == cadenaInvertida
  ? console.log(`${num} es palindromo`)
  : console.log(`${num} no es palindromo`);

//19.Verifica si una cadena de texto contiene la palabra "JavaScript".

console.log("19.");
let frase = "Verifica si una cadena de texto contiene la palabra JavaScript";

frase.includes("JavaScript")
  ? console.log(`contiene la palabra JavaScript`)
  : console.log(`no cotienen la palabra JavaScript`);
//20.Determina si una cadena tiene más de 10 caracteres.

console.log("20.");

cantidad = frase.length;
if (frase < 10) {
  console.log("el string tiene menos de 10 caracteres");
} else console.log(`el string tiene mas de 10 caracteres`);
//21.Verifica si una cadena de texto está en minúsculas.

frase === frase.toLowerCase()
  ? console.log(`esta completamente en minuscula`)
  : console.log(`no esta completamente en minuscula`);
//22.Determina si una cadena de texto contiene al menos un número.
console.log("22.");
if (/\d/.test(frase)) {
  console.log(`tiene por lo menos 1 numero`);
} else console.log(`no tiene numeros`);
//23.Verifica si una cadena de texto termina con un punto (.).
console.log("23.");
if (frase.endsWith(".")) {
  console.log("frase con un punto.");
} else {
  console.log("frase no termina con un punto.");
}

//24.Determina si una cadena de texto es un pangrama (contiene todas
//las letras del alfabeto).
let pangrama =
  "El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja";
if (new Set(pangrama.toLowerCase().replace(/[^a-z]/g, "")).size === 26) {
  console.log("La cadena es un pangrama.");
} else {
  console.log("La cadena no es un pangrama.");
}

//25.Verifica si un día de la semana es laborable (de lunes a viernes).
console.log("25.");

let dia = "jueves";
if (["lunes", "martes", "miércoles", "jueves", "viernes"].includes(dia)) {
  console.log(`${dia} es laborable.`);
} else console.log(`${dia} no es laborable.`);

//26.Determina si un día es fin de semana (sábado o domingo).
console.log("26.");

let finDeSemana = "domingo";
if (["sabado", "domingo"].includes(finDeSemana)) {
  console.log(`${finDeSemana} es fin de semana.`);
} else console.log(`${dia} no es fin de semana.`);
//27.Verifica si un número representa un mes válido (del 1 al 12).

console.log("27.");
let mes = 12;
if (mes >= 1 && mes <= 12) {
  console.log(`${mes} es un mes válido.`);
} else console.log(`${mes} no es un mes válido.`);

//28.Determina si una hora está en el rango de 9 AM a 6 PM.

console.log("28.");

let hora = 19;
if (hora >= 9 && hora <= 18) {
  console.log(`${hora}:00 está en el rango de 9 AM a 6 PM.`);
} else console.log(`${hora}:00 no está en el rango de 9 AM a 6 PM.`);

//29.Verifica si una persona es mayor de 65 años o menor de 18 años.
console.log("29.");
console.log("29");
edad = 12;
if (edad > 65 || edad < 18) {
  console.log(`es menor de 18 o mayor de 65`);
} else console.log(`no es es mayor de 18 o mayor de 65`);

//30.Determina si un triángulo es equilátero (tres lados iguales).
console.log("30.");
let ladoA = 5;
let ladoB = 5;
let ladoC = 2;
if (ladoA === ladoB && ladoB === ladoC) {
  console.log("El triángulo es equilátero");
} else console.log("El triángulo no es equilátero");

//31.Verifica si un triángulo es isósceles (dos lados iguales).
console.log("31.");
ladoA = 5;
ladoB = 5;
ladoC = 2;
if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC) {
  console.log("El triángulo es isoceles");
} else console.log("El triángulo no es isoceles");

//32.Determina si un triángulo es escaleno (todos los lados diferentes).

console.log("32.");
ladoA = 5;
ladoB = 3;
ladoC = 2;
if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC) {
  console.log("El triángulo es escaleno");
} else console.log("El triángulo no es escaleno");

//33.Verifica si un número es mayor que el doble de otro número.

console.log("33.");

//34.Determina si la suma de dos números es mayor que 100.
console.log("34.");
num1 = 4;
num2 = 2;

num1 + num2 > 100
  ? console.log("la suma de los dos numeros es mayor a 100")
  : console.log("la suma de los dos numeros es menor a 100");
//35.Verifica si la resta de dos números es menor que 50.

num1 = 4;
num2 = 2;

num1 - num2 < 50
  ? console.log("la resta de los dos numeros es menor a 50")
  : console.log("la resta de los dos numeros es no menor a 50");
//36.Determina si un número es el doble del otro número.
console.log("36.");
if ((num1 === 2) * num2 || (num2 === 2) * num1) {
  console.log("número es el doble del otro número");
} else console.log("número no es el doble del otro número");
//37.Verifica si el doble de un número es igual al triple de otro número.
console.log("37.");
if (num1 * 2 === num2 * 3 || num2 * 2 === num1 * 3) {
  console.log("el doble de un número es igual al triple de otro número");
} else
  console.log("el doble de un número  no es igual al triple de otro número");
//38.Determina si la suma de dos números es igual a 50.
console.log("38.");
num1 + num2 == 50 ? console.log("la suma de dos números es igual a 50") : console.log("la suma de dos números no es igual a 50");
//39.Verifica si el producto de dos números es mayor que 500.
console.log("39.");
num1 * num2 > 500 ? console.log("producto de dos números es mayor que 500") : console.log("producto de dos números no es mayor que 500");
//40.Determina si la división de dos números es menor que 10.
console.log("40.");
num1 / num2 < 10 ? console.log("la división de dos números es menor que 10") : console.log("la división de dos números no es menor que 10");
