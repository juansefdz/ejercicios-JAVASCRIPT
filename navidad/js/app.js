const snowContainer = document.querySelector(".snow");
const audio = document.querySelector("#musica_navidad");
audio.play();
audio.loop = true;


snowContainer.innerHTML = "";

function generarNieve() {
  Array.from({ length: 51 }).forEach((_, i) => {
    const num = generarNumero(10, 36);
    snowContainer.innerHTML += `<span style="--i:${num}"></span>`;
  });
}

function generarNumero(inicio, final) {
  return Math.floor(Math.random() * (final - inicio + 1) + inicio);
}

generarNieve();
function diferenciaFechas(fecha1, fecha2) {
  let diferenciaMilisegundos = Math.abs(fecha2 - fecha1);

  let años = Math.floor(diferenciaMilisegundos / (365.25 * 24 * 60 * 60 * 1000));
  let meses = Math.floor((diferenciaMilisegundos % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
  let dias = Math.floor((diferenciaMilisegundos % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
  let horas = Math.floor((diferenciaMilisegundos % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  let minutos = Math.floor((diferenciaMilisegundos % (60 * 60 * 1000)) / (60 * 1000));
  let segundos = Math.floor((diferenciaMilisegundos % (60 * 1000)) / 1000);

  return { años, meses, dias, horas, minutos, segundos };
}

function actualizarDiferencia() {
  let fechaInicio = new Date(); // Fecha actual
  let fechaFin = new Date('2023-12-25T00:00:00'); // Fecha actual

  let resultado = diferenciaFechas(fechaInicio, fechaFin);


 
  let fechaContainer = document.querySelector(".fecha");
  fechaContainer.innerHTML = `<h3>Faltan ${resultado.dias} días, con \n  ${resultado.horas}:${resultado.minutos}:${resultado.segundos} para navidad!!!</h3>`;
}

// Actualizar cada segundo

  setInterval(actualizarDiferencia, 1000);

  actualizarDiferencia();

//agregar musica 

