//1. Crea un objeto llamado persona con propiedades como
//nombre, edad y ciudad.
console.log("1.");
const persona = {
  nombre: "juan",
  edad: "32",
  ciudad: "Envigado",
};
console.log(persona);
//2. Agrega una propiedad adicional al objeto persona que
//represente su ocupación.
console.log("2.");
persona.ocupacion = "Coder";
console.log(persona);
//3. Accede a una propiedad del objeto persona y muestra su valor
//en la consola.
console.log("3.");
console.log(persona.nombre);

//4. Crea otro objeto llamado libro con propiedades como título,
//autor y año de publicación.

console.log("4.");
const libro = {
  titlo: "el nombre del viento",
  autor: "patrick routhfous",
  año: "2000",
};
console.log(libro);
//5. Combina las propiedades de los objetos persona y libro en un
//nuevo objeto llamado informacion.
console.log("5.");
let informacion = Object.assign(persona, libro);
console.log(informacion);
//6. Cambia el valor de una propiedad en el objeto persona.
console.log("6.");
persona.nombre = "pepe";
console.log(persona);
//7. Elimina una propiedad del objeto libro.
console.log("7.");
delete libro.año;
console.log(libro);
//8. Crea un objeto llamado coche con propiedades como modelo,
//marca y año.
console.log("8.");
const carro = {
  modelo: "sandero",
  marca: "Renault",
  año: 2019,
};
console.log(carro);

//9. Muestra todas las propiedades del objeto coche en la consola.
console.log(Object.keys(carro));
//10.Agrega un método al objeto coche que imprima un mensaje
//en la consola.
console.log("10.");

//11.Crea un objeto llamado circulo con propiedades como radio y
//color.
console.log("11.");
const circulo = {
  objetoc: "circulo",
  radio: 10,
  color: "rojo",
};
console.log(circulo);

//12.Calcula el área del círculo utilizando la fórmula A = πr2 y
//muestra el resultado.
let a = Math.PI * (circulo.radio * circulo.radio);
console.log(a);

//13.Crea un objeto llamado rectangulo con propiedades como
//ancho y alto.
console.log("13.");
const rectangulo = {
  objetor: "rectangulo",
  ancho: 10,
  alto: 20,
};
//14.Calcula el perímetro del rectángulo utilizando la fórmula
// P = 2* (ancho + alto) y muestra el resultado.

console.log("14.");
let p = 2 * (rectangulo.ancho + rectangulo.alto);
console.log(`el perimetro del triangulo es: ${p}`);
//15.Combina las propiedades de los objetos circulo y rectangulo
//en un nuevo objeto llamado formas.
console.log("15.");
let formas = Object.assign(circulo, rectangulo);
console.log(formas);
//16.Crea un objeto llamado computadora con propiedades como
//marca, modelo y precio.
console.log("16.");
const computadora = {
  marca: "HP",
  modelo: 2022,
  precio: 2000000,
};
console.log(computadora);

//17.Muestra el precio de la computadora en la consola.
//
console.log("17.");
console.log(`el precio de la computadora es: ${computadora.precio} pesos`);
//18.Agrega una propiedad al objeto computadora que indique si
//tiene o no una tarjeta gráfica.
console.log("18.");

computadora.tarjetagrafica = "si";
console.log(computadora);

//19.Crea un objeto llamado mascota con propiedades como
//nombre, especie y edad.

const mascota = {
  nombre: "loky",
  especie: "criollo",
  edad: 2,
};

//20.Muestra en la consola la especie de la mascota en
//mayúsculas.
console.log(mascota.especie.toUpperCase());
//21.Crea un objeto llamado fruta con propiedades como nombre y
//color.
const fruta = {
  nombre: "manzana",
  color: "roja",
};

//22.Agrega un método al objeto fruta que imprima un mensaje
//indicando si la fruta está madura.

let mensaje = {
  info: "madura",
};
console.log(`la ${fruta.nombre} esta ${mensaje.info}`);
//23.Crea un objeto llamado estudiante con propiedades como
//nombre, edad y calificaciones.
console.log("23.");
const estudiante = {
  nombre: "juan",
  edad: 32,
  calificaciones: { n1: 100, n2: 100, n3: 100, n4: 90 },
};
console.log(estudiante);

//24.Muestra en la consola el promedio de las calificaciones del
//estudiante.
console.log("24.");
const numeronotas = Object.keys(estudiante.calificaciones).length;
const { n1, n2, n3 } = estudiante.calificaciones;
const sumaNotas = n1 + n2 + n3;
console.log(sumaNotas);
const promedio = sumaNotas / numeronotas;
console.log(promedio);

//25.Agrega una propiedad al objeto estudiante que indique si ha
//aprobado o no.
console.log("25.");
if (promedio >= 65) {
  estudiante.promedio = promedio;
  estudiante.definitiva = "aprobo";
} else {
  estudiante.promedio = promedio;
  estudiante.definitiva = "reprobo";
}
console.log(estudiante);
//26.Crea un objeto llamado bolsa con propiedades como tamaño y
//color.
console.log("26.");
const bolsa = {
  tamanio: 10,
  color: "verde",
};
//27.Muestra en la consola un mensaje que indique la capacidad
//de la bolsa (tamaño).
console.log("27.");
console.log(`la capacidad de la bolsa es de ${bolsa.tamanio}`);
//28.Agrega un método al objeto bolsa que cambie su color.
//29.Crea un objeto llamado telefono con propiedades como
//marca, modelo y sistema operativo.
console.log("29.");
let celular = {
    marca: "nokia",
    modelo:1100,
    sistemaoperativo:"roky1.0"
    };
  
//30.Muestra en la consola un mensaje indicando el sistema
//operativo del teléfono.
console.log("30.");
console.log(`el sistema operativo del telefono es ${celular.sistemaoperativo}`);
//31.Agrega una propiedad al objeto telefono que represente la
//cantidad de memoria RAM.
console.log("31.");
celular.ram="2gb";
console.log(celular);
//32.Crea un objeto llamado animal con propiedades como tipo y
//sonido.
//33.Muestra en la consola un mensaje que indique el sonido del
//animal.
//
//34.Agrega un método al objeto animal que imprima un mensaje
//indicando su tipo y sonido.
//35.Crea un objeto llamado vuelo con propiedades como
//aerolínea, número de vuelo y hora de salida.
//36.Muestra en la consola un mensaje que indique la aerolínea y
//el número de vuelo.
//37.Agrega una propiedad al objeto vuelo que represente el
//destino del vuelo.
//38.Crea un objeto llamado jugador con propiedades como
//nombre, equipo y posición.
//39.Muestra en la consola un mensaje que indique el nombre y el
//equipo del jugador.
//40.Agrega un método al objeto jugador que imprima un mensaje
//indicando su posición en el equipo.
