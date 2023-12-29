//alert("hola");

//variables

nombre = "riwi Medellín"; //se declara con var si no se especifica que tipo de variable es.

var NombreCampus = "riwi Medellín"; //un tipo de asignación de variable poco usada. (var).

let NombreCoder = "Antony Martinez"; //el let solo vive del ambito que se va a usar.

const PI = 3.1416;

//strings

//declaración normal
const ciudad = "Medellín";
//declaración función integrada de string
const ciudad2 = String("Bucaramanga");
//declaraciòn con instancia de clase
const ciudad3 = new String("Bogota");

console.log(ciudad);
console.log(ciudad2);
console.log(ciudad3);
//solo muestra el valor (valueOf)
console.log(ciudad3.valueOf());

//Metodos
const centro = "Riwi Coders";
const coder = "Antony Martinez";

console.log("string sin mutar:", centro);

//convertir una cadena de texto a MAYUSCULA
console.log("string a Mayuscula:", centro.toUpperCase());

//convertir una cadena de texto a minuscula
console.log("String a minuscula:", centro.toLowerCase());

//conocer la cantidad de palabras que tiene una cadena de texto
console.log("La palabra", centro, "tiene:", centro.length, "caracteres");

//conocer el indice de una palabra
//-1 significa que no se encontro
console.log(
  "la palabra",
  centro,
  "tiene la letra w en el indice",
  centro.indexOf("w")
);

//verificar si el texto contiene la palabra juan
console.log(coder.toLowerCase().includes("juan"));

//concatenar los dos strings o cadenas de texto
//concat
console.log(centro.concat("Nombre coder: ", coder));
//sintaxis +
console.log(centro + "Nombre coder: " + coder);
//backstrings
console.log(`${centro} Nombre coder: ${coder}`);

//quitar espacios en los extremos del string
const email = "   juan.fdz@riwi.io       ";
//quita los espacios en los extremos
console.log(email.trim());
//al inicio
console.log(email.trimStart());
//final
console.log(email.trimEnd());

//remplazar a Antony Juan
console.log(coder.replace("Juan", "Antony"));

//cortar una palabra
//substring
console.log(coder.substring(0, 6));
//slice
console.log(coder.slice(0, 6));

//posicion o letra segun un indice
//charAt
console.log(coder.charAt(5));
//[]
console.log(coder[5]);

//dividir una cadena de caraceteres
console.log(coder.split(" "));
console.log(coder.split(" ")[0]);

//repetir nombre coder
console.log(coder.repeat(3));

// comparar cadenas
let cadena1 = "hola";
let cadena2 = "adios";

console.log(cadena1.localeCompare(cadena2));

//buscar una palabra
console.log(coder.search(/Antony/));

//rellenar una cadena de texto
console.log(coder.padStart(25,"0"));