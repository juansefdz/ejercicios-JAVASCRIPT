const divPadre = document.querySelector(".padre > .hijo");

if (divPadre) {
  console.log(divPadre);

  const divHijos = divPadre.children;

  for (let i = 0; i < divHijos.length; i++) {
    divHijos[i].style.margin = "10px";
  }

  console.log(divHijos);
} else {
  console.log("no hay hijos del padre ");
}
