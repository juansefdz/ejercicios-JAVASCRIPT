//1.	Declara dos variables, num1 y num2, asignándoles valores numéricos diferentes y muestra en consola el resultado de sumarlos.

let num1 = 30;
let num2 = 15;

console.log(num1 + num2);
//2.	Define dos variables de tipo string, simpleString1 y simpleString2, con valores "Hola" y "Mundo" respectivamente. Muestra en consola la longitud total de ambas cadenas.

const simpleString1 = "Hola";
const simpleString2 = "Mundo";

console.log(simpleString1.length + simpleString2.length);

//3.	Crea dos variables de tipo string usando la función String(): stringUsingString1 con el valor "JavaScript" y stringUsingString2 con el valor "Ejercicios".

const stringUsingString1 = String("JavaScript");
const stringUsingString2 = String("Ejercicios");

//4.	Utiliza el operador new para crear dos variables de tipo string: stringUsingNewString1 con el valor "Concatenar" y stringUsingNewString2 con el valor "Strings".

const stringUsingNewString1 = new String("Concatenar");
const stringUsingNewString2 = new String("Strings");

//5.	Calcula e imprime en consola la posición del substring "la" en la variable simpleString1.

console.log(simpleString1.indexOf("la"));

//6.	Comprueba si la variable simpleString2 contiene el substring "ndo" e imprime el resultado en consola.

console.log(simpleString2.includes("ndo"));

//7.	Concatena las variables simpleString1 y simpleString2 utilizando el método concat() y muestra el resultado en consola.

console.log(simpleString1.concat(" ", simpleString2));
//8.	Concatena las variables simpleString1 y simpleString2 utilizando el operador + y muestra el resultado en consola.

console.log(simpleString1 + simpleString2);

//9.	Utiliza template strings para concatenar las variables simpleString1 y simpleString2 e imprime el resultado en consola.

console.log(`${simpleString1} ${simpleString2}`);

//10.	Declara una variable stringWithSpaces1 con el valor " TrimStart" y otra variable stringWithSpaces2 con el valor "TrimEnd ". Elimina los espacios en blanco al principio y al final de ambas cadenas e imprime el resultado en consola.

const stringWithSpaces1 = "  TrimStart";
const stringWithSpaces2 = "TrimEnd  ";

console.log(stringWithSpaces1.trimStart() + stringWithSpaces2.trimEnd());

//11.	Reemplaza la letra 'o' por la letra 'i' en la variable simpleString1 e imprime el resultado en consola.

console.log(simpleString1.replace("o", "i"));

//12.	Utiliza el método slice() para obtener los primeros tres caracteres de la variable simpleString2 e imprime el resultado en consola.

console.log(simpleString2.slice(0, 3));

//13.	Utiliza el método substring() para obtener una subcadena de la variable simpleString2 que comience en el índice 2 e imprime el resultado en consola.

console.log(simpleString2.substring(2));

//14.	Repite la variable simpleString1 dos veces utilizando el método repeat() e imprime el resultado en consola.

console.log(simpleString1.repeat(2));

//15.	Divide la cadena "Esto es una oración de ejemplo" en un array de palabras y muestra el resultado en consola.

console.log("Esto es una oración de ejemplo".split(" "));

//16.	Convierte la variable simpleString2 a mayúsculas utilizando el método toUpperCase() e imprime el resultado en consola.

console.log(simpleString2.toUpperCase());

//17.	Convierte la variable simpleString1 a minúsculas utilizando el método toLowerCase() e imprime el resultado en consola.

console.log(simpleString1.toLowerCase());

//18.	Declara una variable booleana y asígnale un valor booleano. Muestra en consola su tipo de dato utilizando el operador typeof().

const varbool = true;
console.log(typeof varbool);

//19.	Declara una variable arreglo y asígnale un array con al menos tres elementos. Muestra en consola la longitud del array.

const frutas = ["manzana", "pera", "uva"];
console.log(frutas.length);

//20.	Declara una variable objeto y asígnale un objeto con al menos tres propiedades. Muestra en consola una de las propiedades del objeto.

const vegetales = {
  cebolla: 100,
  pimenton: 200,
  papa: 50,
};

console.log(Object.values(vegetales.cebolla));

//21.	Declara una variable nulo y asígnale el valor null. Muestra en consola su tipo de dato utilizando el operador typeof().

const nulo = null;
console.log(typeof nulo);

//22.	Declara una variable indefinido y no le asignes ningún valor. Muestra en consola su tipo de dato utilizando el operador typeof().

const indefinido = undefined;
console.log(typeof indefinido);

//23.	Declara una variable decimal y asígnale un número decimal. Muestra en consola su tipo de dato utilizando el operador typeof().

const decimal = 3.1416;
console.log(typeof decimal);

//24.	Declara una variable negativo y asígnale un número negativo. Muestra en consola su tipo de dato utilizando el operador typeof().

const negativo = -10;
console.log(typeof negativo);

//25.	Utiliza el método indexOf() para encontrar la posición del carácter 'a' en la cadena "Casa" e imprime el resultado en consola.

const posletra = "casa";
console.log(posletra.indexOf("a"));

//26.	Comprueba si la cadena "Javascript" incluye el substring "Script" utilizando el método includes() e imprime el resultado en consola.
const palabra = "Javascript";
console.log(palabra.includes("Script"));

//27.	Concatena las cadenas "Hola" y "Mundo" utilizando el método concat() y muestra el resultado en consola.

console.log("hola".concat(" ", "mundo"));
//28.	Concatena las cadenas "Hola" y "Mundo" utilizando el operador + y muestra el resultado en consola.

console.log("hola" + " mundo");
//29.	Utiliza template strings para concatenar las cadenas "Hola" y "Mundo" e imprime el resultado en consola.

const hola = "hola";
const mundo = "mundo";

console.log(`${hola} ${mundo}`);
//30.	Declara una variable cadenaConEspacios con el valor " Ejemplo con espacios ". Utiliza el método trimStart() y trimEnd() para eliminar los espacios en blanco al principio y al final, respectivamente, e imprime el resultado en consola.

const cadenaConEspacios = " Ejemplo con espacios ";
console.log(cadenaConEspacios.trimStart().trimEnd());

//31.	Reemplaza la palabra "azul" por "rojo" en la cadena "El cielo es azul" utilizando el método replace() e imprime el resultado en consola.

const frase = "El cielo es azul";
console.log(frase.replace("azul", "rojo"));
//32.	Utiliza el método slice() para obtener los últimos cuatro caracteres de la cadena "Programación" e imprime el resultado en consola.

console.log("Programacion".slice(8));

//33.	Utiliza el método substring() para obtener una subcadena de la cadena "JavaScript" que comience en el índice 2 e imprime el resultado en consola.
console.log("JavaScript".substring(2));

//34.	Repite la cadena "Hola" tres veces utilizando el método repeat() e imprime el resultado en consola.

console.log("hola".repeat(3));

//35.	Divide la cadena "Esto es una oración de ejemplo" en un array de palabras y muestra el resultado en consola.

console.log("Esto es una oracion de ejemplo".split(" "));

//36.	Convierte la cadena "Javascript" a mayúsculas utilizando el método toUpperCase() e imprime el resultado en consola.

console.log("Javascript".toUpperCase());

//37.	Convierte la cadena "EJEMPLO" a minúsculas utilizando el método toLowerCase() e imprime el resultado en consola.

console.log("EJEMPLO".toLowerCase());

//38.	Declara una variable numero y asígnale un número. Muestra en consola su tipo de dato utilizando el operador typeof().

const numero = 20;
console.log(typeof numero);
//39.	Declara una variable booleana y asígnale un valor booleano. Muestra en consola su tipo de dato utilizando el operador typeof().

const booleana = false;
console.log(typeof booleana);
//40.	Declara una variable arreglo y asígnale un array con al menos tres elementos. Muestra en consola la longitud del array.
const arreglo =["juan", "andres", "ana"];
console.log(arreglo.length);

//41.	Declara una variable objeto y asígnale un objeto con al menos tres propiedades. Muestra en consola una de las propiedades del objeto.
let carro ={
    marca:"renault",
    modelo:2019,
    color:"gris"
}

console.log(carro.color);

//42.	Declara una variable nulo y asígnale el valor null. Muestra en consola su tipo de dato utilizando el operador typeof().

const nulo2 = null;
console.log(typeof nulo2);

//43.	Declara una variable indefinido y no le asignes ningún valor. Muestra en consola su tipo de dato utilizando el operador typeof().

let indefinido2= undefined;
console.log(typeof indefinido2);
//44.	Declara una variable decimal y asígnale un número decimal. Muestra en consola su tipo de dato utilizando el operador typeof().

const decimal2=2.34455
console.log(typeof decimal2);