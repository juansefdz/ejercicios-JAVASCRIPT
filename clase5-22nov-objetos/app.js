//OBJETOS LITERALES: agrupan una serie de variables y se llaman atributos.

//creación de un objeto literal.
const coder = {
  nombre: "ana",
  edad: 24,
  barrio: "Palmas",
};

console.log(coder);

//sintaxis (.)
console.log(coder.nombre);
console.log(coder.edad);
console.log(coder.barrio);

//sintaxis []
console.log(coder["nombre"]);
console.log(coder["edad"]);
console.log(coder["barrio"]);

//agregar una propiedad
//primera forma
coder.foto = "./img/fotoana.jpg";
console.log(coder);
//segunda forma
coder["hermanos"] = 2;
console.log(coder);

//eliminar atributos de un objeto literal
delete coder.foto;
console.log(coder);

//es recomendable no eliminar sino más bien reasignar una propiedad.
coder.hermano = undefined;
console.log(coder);

//guardar los atributos en variables.
const nombrecoder = coder.nombre;
const edadcoder = coder.edad;
console.log(nombrecoder, edadcoder);

//desestructuración de objetos (destructuring object) - solo lo tiene JS -
const { barrio, edad, nombre } = coder;
console.log(barrio);
console.log(typeof edad);
console.log(edad);
console.log(typeof nombre);
console.log(nombre);

let producto = {
  nombreCel: "celular ultimo modelo",
  precio: 1500000,
  disponible: true,
  informacion: {
    peso: "1kg",
    medidas: '10"',
  },
};

console.log(producto.precio);
console.log(producto.informacion.medidas);

const {
  nombreCel,
  precio,
  disponible,
  informacion: { medidas, peso },
} = producto;
console.log(nombreCel);
console.log(precio);
console.log(disponible);
console.log(medidas);
console.log(peso);

//congelar un objeto literal (estricto)
Object.freeze(producto);
console.log(producto);
producto.nuevo = "nuevo";
console.log(producto);
//saber si un atributo de un objeto está congelado
console.log(Object.isFrozen(producto));
nuevoObjeto = { ...producto };
console.log(Object.isFrozen(nuevoObjeto));

//congelamiento dinamico
Object.seal(producto);
producto.nombreCel = "tablet";
producto.nuevapropiedad = "nueva";
console.log(producto);

//unir dos objetos
const producto1 = {
  nameproducto: "cama",
  descripcion: "de madera, roble",
};
const medidascama = {
  alto: 2,
  ancho: 1.5,
};

//primera forma
let resultado = Object.assign(producto1, medidascama, { precio: 1234 });
console.log(resultado);

//segunda forma

resultado = { ...producto1, ...medidascama, precio: 2468 };
console.log(resultado);

const nombreMascota = "pepe";

const mascota = {
  nombreMascota,
};
console.log(mascota);

//
Object.defineProperty(mascota, "edad", {
  writable: false,
  configurable: true,
  enumerable: true,
  value: 2,
});

console.log(mascota);
mascota.edad = 3;
console.log(mascota);

console.log(Object.keys(mascota));
console.log(Object.values(mascota));
console.log(Object.entries(mascota));