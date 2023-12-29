//SELECTORES GLOBALES.

//objeto Document - DOM

console.log(document);

//acceder al head
console.log(document.head);

//aceder al body
console.log(document.body);

//acceder a la URL
console.log(document.URL);
//acceder al dominio
console.log(document.domain); //deprecrado

//acceder a formulario
console.log(document.forms);

//acceder a los links
console.log(document.links);

//SELECTORES PERSONALIZADOS

//seleccionar por clase --> devuelve una lista con las coincidencias
let elemento = document.getElementsByClassName("subtitulo");
console.log(elemento);

//seleccionar por ID
let elemento2 = document.getElementById("telefono");
console.log(elemento2);

//seleccionar query selector
let elemento3 = document.querySelector(".subtitulo");
document.querySelectorAll("a");
console.log(elemento3);

//selector por decadencia
let elemento4 = document.querySelector("#contenedor a");
console.log(elemento4);

let elementoNoExiste = document.querySelector("icono");
console.log(elementoNoExiste);

//cambiar propiedades de un elemento seleccionado

let elementoSeleccionado = document.querySelector("h1");
console.log(elementoSeleccionado.textContent); //textcontent saber el valor de una etiqueta especifica con el queryselector
console.log(elementoSeleccionado.innerHTML);
console.log(document.querySelector("#contenedor").innerHTML); //convertir a string el el id contenedor

//cambiar el texto de una etiqueta
elementoSeleccionado.textContent += " - TITULO MODIFICADO DOM EN JAVASCRIPT";

const contenedor = document.querySelector("#contenedor");
contenedor.innerHTML =
  `
<h4 class="titulo">sección de anclas</h4>
<img src="https://cdn.pixabay.com/photo/2021/11/28/16/21/christmas-tree-6830685_1280.png"/>

` + contenedor.innerHTML;
console.log(document.querySelector("#contenedor").innerHTML);
console.log(document.querySelector("#contenedor").outerHTML);

//style

console.log(contenedor.style);

const listaDeColores = [
  "pink",
  "red",
  "green",
  "clay",
  "purple",
  "blue",
  "orange",
  "yellow",
];
const titulos = ["feliz Navidad", "te desea RIWI"];

contenedor.style.background = "black";

setTimeout(() => {
  let colorRandom = Math.floor(Math.random() * 7);
  contenedor.style.background = listaDeColores[colorRandom];
}, 200);

//background
setInterval(() => {
  let colorRandom = Math.floor(Math.random() * 7);
  contenedor.style.background = listaDeColores[colorRandom];
}, 100);

//mensaje riwi
setInterval(() => {
  let msgRandom = Math.floor(Math.random() * 2);
  document.querySelector(".titulo").textContent = titulos[msgRandom];
}, 1000);

const coders = [
  { nombre: "Manuel", edad: 23, ciudad: "Medellín", fechaNac: "23-08-2000" },

  { nombre: "Valentina", edad: 23, ciudad: "Medellín", fechaNac: "13-06-2008" },

  { nombre: "Tatiana", edad: 23, ciudad: "Medellín", fechaNac: "18-05-2003" },

  { nombre: "juan", edad: 23, ciudad: "Medellín", fechaNac: "12-03-1999" },
];

setTimeout(() => {
    cargarDatos();
}, 2000);
function cargarDatos() {
   
  const tbody=document.querySelector("#contenido_tabla");
  coders.sort((a, b) => a.nombre.localeCompare(b.nombre));
  tbody.innerHTML="";

  coders.forEach((estudiante) => {
    const{nombre,ciudad,edad,fechaNac}=estudiante;
    tbody.innerHTML+= `
    <tr>
        <td> ${nombre}</td>
        <td> ${edad}</td>
        <td> ${ciudad}</td>
        <td> ${fechaNac}</td>
    </tr>`
  });
}
