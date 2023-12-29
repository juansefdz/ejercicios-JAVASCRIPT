//lista sintaxis []
const listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(listaNumeros);

//lista mixta
//objeto
//lista
//booleano
//string
const mixta = ["ho  la mun  do", [1, 2, 3, 4, 5, 6], true, { nombre: "juan" }];
console.log(mixta);

//acceder al elemento
console.log(mixta[3].nombre);

//acceder al elemento "2"
console.log(mixta[1][1]);

//eliminar los espacios
console.log(mixta[0]);
console.log(mixta[0].trim().split(" ").join(""));
console.log(mixta[0].replace(/\s/g, ""));

//metodo listas

//push - agregar items a la lista al final.
//el push muta la lista con el nuevo elemento
mixta.push("nuevo elemento");
console.log(mixta);

//unshif - agregar elementos al inicio de la lista
mixta.unshift({ nombre: "camilo", edad: 29 });
console.log(mixta);

//pop - elimina el ultimo elemento de la lista
mixta.pop();
console.log(mixta);

//shift - eliminar al inicio
mixta.shift();
console.log(mixta);

//recorrer listas

const coders = [
  { id: Date.now(), nombre: "Sara", tiempoRiwi: 2, barrio: "Santa fe" },
  {
    id: Date.now() + 1,
    nombre: "Cristian",
    tiempoRiwi: 3,
    barrio: "San javier",
  },
  { id: Date.now() + 2, nombre: "pedro", tiempoRiwi: 1, barrio: "laureles" },
  { id: Date.now() + 3, nombre: "Daniel", tiempoRiwi: 10, barrio: "laureles" },
];

console.log(coders);

//recorrer listas
//for
console.log("recorrer con for in");
for (i in coders) {
  console.log(i);
}
console.log("recorrer con for of");
for (i of coders) {
  console.log(i);
}
console.log(" recorrer con foreach");

//.foreach -- recorre toda la lista sin devolver nada
coders.forEach((i, index) => {
  console.log(i, index);
  i.tiempoRiwi++;
  console.log(coders);

  if (i.tiempoRiwi >= 5) {
    console.log(i.nombre);
  }
});

//metodo .map
//muy similar al foreach pero retorna un nuevo arreglo modificado.

let nuevaLista = coders.map((item, index) => {
  return (item.edad = Math.floor(Math.random() * (30 - 15 + 1) + 15));
});
console.log(nuevaLista);

//otra forma
nuevaLista = coders.map((item, index) => {
  const edadRandom = Math.floor(Math.random() * (30 - 15 + 1) + 15);
  item.edad = edadRandom;
  return { ...item, edad: edadRandom };
});
console.log(nuevaLista);

//otro ejercicio
//buscar coder

let codersBuscar = "sara";

const estudiantesEncontrados = [];
coders.map((estudiante) => {
  if (estudiante.nombre.toLowerCase() === codersBuscar) {
    estudiantesEncontrados.push(estudiante);
  }
});
console.log(estudiantesEncontrados);
estudiantesEncontrados.forEach((estudiantes) => {
  const { nombre, edad, barrio } = estudiantes;
  console.log(`Nombre: ${nombre} Edad: ${edad} Barrio: ${barrio}`);
});

//Filter: filtrar elementos de una lista

const encontrados = coders.filter(
  (estudiante) => estudiante.nombre.toLowerCase() == "sara"
);
console.log(encontrados);

//mayores de edad
const mayoresEdad = coders.filter((estudiante) => estudiante.edad >= 18);
console.log(mayoresEdad);

//some - similar a filter retorna un booleano
const hayMayoresEdad = coders.some((estudiante) => estudiante >= 18);
console.log(hayMayoresEdad);

//sort - ordenar una lista.
const Ordenados = coders.sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log(coders);
console.log(Ordenados);

//every - todos tienen que cumplirse (condicion)
console.log(coders.every((coder) => coder.edad >= 18));

//ejercicio

const productos = [
  {
    id: Date.now() + 1,
    nombre: "Celular",
    categoria: "tecnologia",
    cantidad: 5,
    precio: 50000000,
  },
  {
    id: Date.now() + 2,
    nombre: "Arroz",
    categoria: "comida",
    cantidad: 5,
    precio: 2300,
  },
  {
    id: Date.now() + 3,
    nombre: "Medias",
    categoria: "ropa",
    cantidad: 5,
    precio: 25000,
  },
  {
    id: Date.now() + 4,
    nombre: "Tablet",
    categoria: "tecnologia",
    cantidad: 5,
    precio: 1500000,
  },
  {
    id: Date.now() + 5,
    nombre: "Pizza",
    categoria: "comida",
    cantidad: 5,
    precio: 8000,
  },
  {
    id: Date.now() + 6,
    nombre: "Laptop",
    categoria: "tecnologia",
    cantidad: 5,
    precio: 7000000,
  },
  {
    id: Date.now() + 7,
    nombre: "Chaqueta",
    categoria: "ropa",
    cantidad: 5,
    precio: 500000,
  },
  {
    id: Date.now() + 8,
    nombre: "audifonos",
    categoria: "tecnologia",
    cantidad: 5,
    precio: 70000,
  },
  {
    id: Date.now() + 9,
    nombre: "Reloj",
    categoria: "tecnologia",
    cantidad: 5,
    precio: 900000,
  },
  {
    id: Date.now() + 10,
    nombre: "Pasta",
    categoria: "comida",
    cantidad: 5,
    precio: 6000,
  },
  {
    id: Date.now() + 11,
    nombre: "Camisa",
    categoria: "ropa",
    cantidad: 5,
    precio: 20000,
  },
];

//filtrar entre 500000 y 1000000 mostrar en consola

let rango = prompt(
"Ingresa el rango del precio que quieres filtrar, separados por coma sin espacio"
);

rango = rango.split(",");

if (isNaN(Number(rango[0])) || isNaN(Number(rango[1]))) {
  alert("Los valores ingresados no son correctos");
} else {
  console.log(rango[0], rango[1]);
  let buscarPrecio = productos.filter(
    (producto) =>
      producto.precio >= Number(rango[0]) && producto.precio <= Number(rango[1])
  );
  console.log(buscarPrecio);

  let productosMostrar = "";

  buscarPrecio.forEach((producto) => {
    productosMostrar += `Nombre: ${producto.nombre}, Precio: ${producto.precio}, categoria: ${producto.categoria} \n`;
  });

  alert(`
   PRODUCTOS EN ESTA RANGO DE PRECIO
   ${productosMostrar}
  `);
}

/* 

 rango = prompt(
  "Ingresa el rango del precio que quieres filtrar, separados por coma sin espacio"
);

rango = rango.split(",");

if (isNaN(Number(rango[0])) || isNaN(Number(rango[1]))) {
  alert("los valores ingresados no son correctos");
} else {
  console.log(rango[0], rango[1]);
  let buscarPrecio = productos.filter(
    (producto) =>
      producto.precio >= Number(rango[0]) && producto.precio <= Number(rango[1])
  );
  console.log(buscarPrecio);

  const prueba = JSON.stringify(buscarPrecio);
  alert(prueba);
}
buscarPrecio.forEach((producto) => {
  productoMostrar = `nombre: ${producto.nombre},
   Precio:${producto.precio} `;
});
 */