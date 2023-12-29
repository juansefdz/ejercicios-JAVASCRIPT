// Ejercicios selectores
// 1. Selecciona el elemento id “titulo” y cambia el contenido a
// “Nuevo titulo”

let elemento = document.getElementById(`elemento1`);
console.log(elemento);
elemento.innerHTML = "Nuevo título"; //cambia el contenido del elemento utilizando la propiedad innerHTML para establecer el nuevo texto.

// 2. Selecciona todos los elementos p con la clase párrafo, te
// cambia su contenido a texto actualizado y su color a rojo

let elementoParrafo = document.getElementsByClassName(`parrafo`);
for (let index = 0; index < elementoParrafo.length; index++) {
  elementoParrafo[index].style.color = "red";
}
// 3. Selecciona el primer elemento h2 y añade “ – Editado” a su
// contenido actual
let elementoSeleccionado = document.querySelector("h2");
elementoSeleccionado.textContent += " - Editado";

// 4. Selecciona todos los elementos li dentro de un ul y añade un
// número consecutivo a su contenido
let elementosli = document.querySelectorAll("li");
elementosli.forEach((item, index) => {
  // Añadir un número consecutivo al contenido
  item.textContent += ` - consecutivo ${index + 1}`;
});

// 5. Selecciona tosos los elementos span que esten dentro de un
// div y cambia su contenido a “Nuevo texto”
let elementosSpan = document.querySelectorAll("div span");
elementosSpan.forEach((span) => {
  span.textContent = "Nuevo texto";
});

// 6. Selecciona el ultimo elemento p y añade el texto “Ultimo
// parrafo”
let ultimoParrafo = document.querySelector("p:last-child");
ultimoParrafo.textContent += "Ultimo párrafo";
// 7. Selecciona todos los elementos p que tengan al menos una
// clase y añade un borde punteado de 1px de color naranja.
const parrafosConClase = document.querySelectorAll("p.clase");
parrafosConClase.forEach((parrafo) => {
  parrafo.style.border = "1px dotted orange";
});
// 8. Selecciona todos los elementos de tipo input con un atributo
// "type" de "text" y cambia su borde a 2px sólido verde.
const inputsText = document.querySelectorAll('input[type="text"]');
inputsText.forEach((input) => {
  input.style.border = "2px solid green";
});
//9. Selecciona todos los elementos div que sean hijos directos
//de un div con la clase "padre" y añade un margen de 10px.
const hijosPadre = document.querySelectorAll(".padre > div");
hijosPadre.forEach((div) => {
  div.style.margin = "20px";
});
