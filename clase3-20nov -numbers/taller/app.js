console.log("inicio de taller");

//1. Número a un nuevo número: Declara una variable num con un valor numérico y
//luego crea una nueva variable llamada newNum utilizando la función Number()
//para convertir num a un nuevo número. Muestra en consola newNum.
let num = 30;
let newNum = Number(50);
num = newNum;

console.log("1.");
console.log(num);

//2. Rangos numéricos - Number.MAX_VALUE: Muestra en consola el valor máximo
//que puede ser representado en JavaScript utilizando Number.MAX_VALUE.
console.log("2.");
console.log(Number.MAX_VALUE);

//3. Rangos numéricos - Number.MIN_VALUE: Muestra en consola el valor mínimo
//positivo que puede ser representado en JavaScript utilizando
//Number.MIN_VALUE.
console.log("3.");
console.log(Number.MIN_VALUE);

//4. Rangos numéricos - Number.MAX_SAFE_INTEGER: Muestra en consola el valor
//máximo seguro que puede ser representado con precisión en JavaScript
//utilizando Number.MAX_SAFE_INTEGER.
console.log("4.");
console.log(Number.MAX_SAFE_INTEGER);

//5. Rangos numéricos - Number.MIN_SAFE_INTEGER: Muestra en consola el valor
//mínimo seguro que puede ser representado con precisión en JavaScript
//utilizando Number.MIN_SAFE_INTEGER.
console.log("5.");
console.log(Number.MIN_SAFE_INTEGER);

//6. Comprobación numérica - Number.isFinite(number): Declara una variable num
//y utiliza el método Number.isFinite() para comprobar si num es un número finito.
//Muestra el resultado en consola.
console.log("6.");
console.log(Number.isFinite(num));

//7. Comprobación numérica - Number.isInteger(number): Declara una variable
//num y utiliza el método Number.isInteger() para comprobar si num es un
//número entero. Muestra el resultado en consola.
console.log("7.");
console.log(Number.isInteger(num));

//8. Comprobación numérica - Number.isSafeInteger(number): Declara una variable
//num y utiliza el método Number.isSafeInteger() para comprobar si num es un
//número seguro para representar con precisión en JavaScript. Muestra el
//resultado en consola.
console.log("8.");
console.log(Number.isSafeInteger(num));

//9. Representación numérica - .toExponential(digits): Declara una variable num y
//utiliza el método .toExponential() para mostrar su representación en notación
//exponencial con un número específico de dígitos decimales. Muestra el resultado
//en consola.
console.log("9.");
console.log(num.toExponential(3));

//10. Representación numérica - .toFixed(digits): Declara una variable num y utiliza
//el método .toFixed() para mostrar su representación con un número específico
//de dígitos decimales. Muestra el resultado en consola.
console.log("10.");
console.log(num.toFixed(3));

//11. Representación numérica - .toPrecision(size): Declara una variable num y utiliza
//el método .toPrecision() para mostrar su representación con una longitud total
//específica. Muestra el resultado en consola.
console.log("11.");
console.log(num.toPrecision(3));


//12. Convertir - Number.parseInt(text): Declara una variable text con un valor
//numérico en formato de cadena y utiliza Number.parseInt() para convertirlo a un
//número entero. Muestra el resultado en consola.
let text="20.234"
console.log("12.");
console.log(Number.parseInt(text));


//13. Convertir - Number.parseInt(text, radix): Declara una variable text con un valor
//numérico en formato de cadena y utiliza Number.parseInt() con una base
//específica para convertirlo a un número entero. Muestra el resultado en consola.
console.log("13.");
console.log(Number.parseInt(text,5));

//14. Convertir - Number.parseFloat(text): Declara una variable text con un valor
//numérico en formato de cadena y utiliza Number.parseFloat() para convertirlo a
//un número de punto flotante. Muestra el resultado en consola.
console.log("14.");
console.log(Number.parseFloat(text));

//15. Convertir - Number.parseFloat(text, radix): Declara una variable text con un
//valor numérico en formato de cadena y utiliza Number.parseFloat() con una
//base específica para convertirlo a un número de punto flotante. Muestra el
//resultado en consola.
console.log("15.");
console.log(Number.parseFloat(text,12));

//16. Convertir - .toString: Declara una variable num y utiliza el método .toString()
//para convertirlo a una cadena. Muestra el resultado en consola.
console.log("16.");
console.log(Number.toString(num));


//17. Método Math.abs(x): Declara una variable num con un valor negativo y utiliza
//Math.abs() para obtener su valor absoluto. Muestra el resultado en consola.
let negNum=-152;
console.log("17.");
console.log(Math.abs(negNum));

//18. Método Math.sign(x): Declara una variable num con un valor y utiliza
//Math.sign() para obtener su signo. Muestra el resultado en consola.
console.log("18.");
console.log(Math.sign(negNum));


//19. Método Math.exp(x): Declara una variable num y utiliza Math.exp() para calcular
//la exponenciación de num. Muestra el resultado en consola.
console.log("19.");
console.log(Math.exp(num));


//20. Método Math.expm1(x): Declara una variable num y utiliza Math.expm1() para
//calcular e^x - 1. Muestra el resultado en consola.
console.log("20.");
console.log(Math.expm1(num));


//21. Método Math.max(a, b, c...): Utiliza Math.max() para encontrar el valor máximo
//entre varios números. Muestra el resultado en consola.
const mayor = Math.max(21, 54, -34, 100, 0);
console.log("21.");
console.log(mayor);

//22. Método Math.min(a, b, c...): Utiliza Math.min() para encontrar el valor mínimo
//entre varios números. Muestra el resultado en consola.
const menor = Math.min(21, 54, -34, 100, 0);
console.log("22.");
console.log(menor);

//23. Método Math.pow(base, exp): Utiliza Math.pow() para calcular la potencia de un
//número. Muestra el resultado en consola.
console.log("23.");
console.log(`8² = ${Math.pow(8, 2)}`);


//24. Método Math.sqrt(x): Utiliza Math.sqrt() para calcular la raíz cuadrada de un
//número. Muestra el resultado en consola.
console.log("24.");
console.log(Math.sqrt(16));

//25. Método Math.cbrt(x): Utiliza Math.cbrt() para calcular la raíz cúbica de un
//número. Muestra el resultado en consola.
console.log("25.");
console.log(Math.cbrt(6));


//26. Método Math.imul(a, b): Utiliza Math.imul() para calcular la multiplicación de
//dos números como un entero de 32 bits. Muestra el resultado en consola.
console.log("26.");
console.log(Math.imul(5,2));


//27. Método Math.clz32(x): Utiliza Math.clz32() para contar los ceros principales de
//un número en su representación de 32 bits. Muestra el resultado en consola.
console.log("27.");
console.log(Math.clz32(num));



//28. Método Math.random(): Utiliza Math.random() para generar un número
//pseudoaleatorio entre 0 (inclusive) y 1 (exclusive). Muestra el resultado en
//consola.
console.log("28.");
console.log(Math.random());

//29. Método de redondeo - Math.round(x): Utiliza Math.round() para redondear un
//número al entero más cercano. Muestra el resultado en consola.
console.log("29.");
console.log(Math.round(12.54));

//30. Método de redondeo - Math.ceil(x): Utiliza Math.ceil() para redondear hacia
//arriba un número al entero más cercano. Muestra el resultado en consola.
console.log("30.");
console.log(Math.ceil(43.23));


//31. Método de redondeo - Math.floor(x): Utiliza Math.floor() para redondear hacia
//abajo un número al entero más cercano. Muestra el resultado en consola.
console.log("31.");
console.log(Math.floor(45.3));

//32. Método de redondeo - Math.fround(x): Utiliza Math.fround() para convertir un
//número a su representación de punto flotante de 32 bits más cercana. Muestra el
//resultado en consola.
console.log("32.");
console.log(Math.fround(23.123));

//33. Método de redondeo - Math.trunc(x): Utiliza Math.trunc() para truncar la parte
//decimal de un número. Muestra el resultado en consola.
console.log("33.");
console.log(Math.trunc(10.123));


//34. Método trigonométrico - Math.sin(x): Utiliza Math.sin() para calcular el seno de
//un ángulo en radianes. Muestra el resultado en consola.
console.log("34.");
console.log(Math.sin(10));


//35. Método trigonométrico - Math.cos(x): Utiliza Math.cos() para calcular el coseno
//de un ángulo en radianes. Muestra el resultado en consola.
console.log("35.");
console.log(Math.cos(30));


//36. Método trigonométrico - Math.tan(x): Utiliza Math.tan() para calcular la
//tangente de un ángulo en radianes. Muestra el resultado en consola.
console.log("36.");
console.log(Math.tan(25));
//37. Método trigonométrico - Math.hypot(a, b...): Utiliza Math.hypot() para calcular
//la longitud de la hipotenusa de un triángulo a partir de sus lados. Muestra el
//resultado en consola.
console.log("37.");
console.log(Math.hypot(3,10));

//38. Operadores aritméticos con .toFixed(digits), Number.parseInt(text): Declara
//dos variables numéricas y realiza una operación aritmética que involucre
//.toFixed() y Number.parseInt(). Muestra el resultado en consola.

let var1 = 10;
let var2= 20.5;
let resultado=var1+var2;
console.log("38.");
console.log(resultado.toFixed(1), Number.parseInt(resultado));

//39. Operadores aritméticos con Number.parseFloat(text), .toPrecision(size):
//Declara dos variables numéricas en formato de cadena y realiza una operación
//aritmética que involucre Number.parseFloat() y .toPrecision(). Muestra el
//resultado en consola.

let varnum1="123.5";
let varnum2="2";

console.log("39.");
console.log(Number.parseFloat(varnum1));
//40. Operadores aritméticos con Math.random(), Math.abs(x): Utiliza
//Math.random() para generar un número y realiza una operación aritmética que
//involucre Math.abs(). Muestra el resultado en consola.
console.log("40.");

let numaleatorio = Math.random();
let resultadoaleatorio=10+numaleatorio;
console.log(Math.abs(resultadoaleatorio));

//41. Operadores aritméticos con Math.random(), .toString: Utiliza Math.random()
//para generar un número y realiza una operación aritmética que involucre
//.toString(). Muestra el resultado en consola.
console.log("41.");

numaleatorio=Math.random();
resultadoaleatorio=20+numaleatorio;
let resultadocadena=resultadoaleatorio.toString();
console.log(resultadocadena);

//42. Operadores aritméticos con Math.random(), Math.exp(x): Utiliza
//Math.random() para generar un número y realiza una operación aritmética que
//involucre Math.exp(). Muestra el resultado en consola.
console.log("42.");

numaleatorio=Math.random();
resultadoaleatorio=30+numaleatorio;
console.log(Math.exp(resultadoaleatorio));

//43. Operadores aritméticos con Math.sqrt(x), Math.clz32(x): Utiliza Math.sqrt() y
//Math.clz32() para realizar una operación aritmética. Muestra el resultado en
//consola.
num=15;
const raiz=Math.sqrt(num);
const clz=Math.clz32(num);
console.log("43.");
console.log(raiz+clz);


//44. Operadores de asignación con Asignación: Declara una variable x con un valor y
//asigna ese valor a otra variable y. Muestra el valor de y en consola.
console.log("44.");

let variablex="y";
let variabley=variablex;
console.log(variabley);

//45. Operadores de asignación con a += b: Declara dos variables numéricas y utiliza
//el operador += para sumar el valor de la segunda variable a la primera. Muestra el
//resultado en consola.

console.log("45.");

num1=3;
num2=2;
console.log(num1+=num2);


//46. Operadores de asignación con Suma y asignación: Declara dos variables
//numéricas y utiliza el operador += para incrementar el valor de la primera variable
//sumándole el valor de la segunda. Muestra el resultado en consola.

console.log("46.");

num1=5;
num2=6;
console.log(num1+=num2);


//47. Operadores de asignación con Resta y asignación: Declara dos variables
//numéricas y utiliza el operador -= para decrementar el valor de la primera
//variable restando el valor de la segunda. Muestra el resultado en consola.


console.log("47.");

num1=7;
num2=3;
console.log(num1-=num2);

//48. Operadores de asignación con Multiplicación y asignación: Declara dos
//variables numéricas y utiliza el operador *= para multiplicar el valor de la primera
//variable por el valor de la segunda. Muestra el resultado en consola.
console.log("48.");

num1=6;
num2=4;
console.log(num1*=num2);

//49. Operadores de asignación con División y asignación: Declara dos variables
//numéricas y utiliza el operador /= para dividir el valor de la primera variable por el
//valor de la segunda. Muestra el resultado en consola.

console.log("49.");

num1=3;
num2=8;
console.log(num1/=num2);
//50. Operadores de asignación con Módulo y asignación: Declara dos variables
//numéricas y utiliza el operador %= para calcular el residuo de la división de la
//primera variable por la segunda. Muestra el resultado en consola.

console.log("50.");

num1=9;
num2=12;
console.log(num1%=num2);
//51. Operadores de asignación con Exponenciación y asignación: Declara una
//variable numérica y utiliza el operador **= para elevarla a una potencia
//específica. Muestra el resultado en consola.

console.log("51.");

num1=2;
num2=6;
console.log(num1**=num2);
//52. Operadores unarios Incremento: Declara una variable numérica y utiliza el
//operador ++ para incrementar su valor en 1. Muestra el resultado en consola.

console.log("52.");
num=10;
num++
console.log(num);

//53. Operadores unarios Decremento: Declara una variable numérica y utiliza el
//operador -- para decrementar su valor en 1. Muestra el resultado en consola.

console.log("53.");
num=10;
num--
console.log(num);
//54. Operadores unarios Incremento previo: Declara una variable num con un valor
//numérico. Utiliza el operador unario de incremento previo (++num) para
//aumentar el valor de num en 1 antes de asignarlo a la variable result. Muestra el
//nuevo valor de result en la consola.

console.log("54.");
num=10;
resultado=++num;
console.log(resultado);
//55. Operadores unarios Decremento previo: Declara una variable num con un valor
//numérico. Utiliza el operador unario de decremento previo (--num) para disminuir
//el valor de num en 1 antes de asignarlo a la variable result. Muestra el nuevo
//valor de result en la consola.

console.log("55.");
num=10;
resultado=--num;
console.log(resultado);
//56. Operadores unarios Resta unaria: Declara una variable num con un valor
//numérico. Utiliza el operador unario de resta (-num) para obtener el opuesto
console.log("56.");
num=5;
resultado=-num;
console.log(resultado);