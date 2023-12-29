const textoMaquina = document.querySelector("#maquina_escribir_texto");

const palabras = ["fronted", "backend", "ux/Iu", "Qa", "DevOps"];

let currentIndex = 0;

function maquinaEscribir() {
  textoMaquina.textContent = "";
  let textArr = palabras[currentIndex];
  textArr = textArr.split("");
  console.log(textArr);

  let i;
  const pintarString = setInterval(() => {
    textoMaquina.textContent += textArr[i];
    i++;
    clearInterval(pintarString);
    setTimeout(() => {
      borrarPalabra();
    }, 1000); //tiempo de espera antes de borrar la palabra
  }, 200); //tiempo de espera para escribir cada letra
}

function borrarPalabra() {
  let texto = textoMaquina.textContent;
  const borrarString = setInterval(() => {
    texto = texto.slice(0, -1);
    textoMaquina.textContent = texto;

    if (texto == "") {
      clearInterval(borrarString);
      currentIndex = (currentIndex + 1) % palabras.length; //cambiar a la siguiente palabra
      setTimeout(() => {
        maquinaEscribir();
      }, 500);
    }
  }, 100); //tiempo en borrar cada letra
}

maquinaEscribir();

let textoAnimado = document.querySelector(".text");
textoAnimado.innerHTML = textoAnimado.innerHTML
  .split("")
  .map(
    (letra, index) =>
      `<span style="transition-delay: ${index * 40}ms; filter:hue-rotate(${
        index * 30
      }deg)">${letra}
      </span>`
  )
  .join("");
