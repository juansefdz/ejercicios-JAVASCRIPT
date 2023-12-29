//CASO1
alert(`CASO 1`);

let pagoHildebrando = undefined;
let opcionesHildebrando = undefined;
let flag = true;
let flag2 = false;

let preguntaSaldo = prompt("Hildebrando ya te pagaron? si - no");

console.log(preguntaSaldo);
if (preguntaSaldo == "si") {
  pagoHildebrando = 2500000;
  flag2 = true;

  const opcionesHildebrando = prompt(`tienes varias opciones para elegir
  dependiendo de lo que quieras de puedo decir que es lo más recomendable:
  1. comer la almojabana con gasesosa y vale 15.000.
  2. comer un subway con gaseosa y vale 23.000.
  3. no comer nada. `);
  if (pagoHildebrando > 0 && pagoHildebrando <= 2500000) {
    do {
      switch (opcionesHildebrando) {
        case "1":
          alert("te caería mal por que lleva mucho en el stand");
          console.log();
          flag = true;
          break;

        case "2":
          alert("estarías llenito y bien :)");
          flag = true;
          break;

        case "3":
          alert("te tocaría comprar algo en Medellín");
          flag = true;
          break;
        default:
          alert("tienes que elegir una opción");
          flag = true;
      }
    } while (flag == false);
  }
} else {
  alert(
    "Lo siento no te han pagado, no tienes dinero para comprar en el aeropuerto!!!!"
  );
}
if (flag2 == true) {
  const decisionCompra = prompt(`Despues de lo que te dije, que deseas comprar:
1. almohabana con gaseosa.
2. subway con gaseosa
3. no comprar nada `);

  if (decisionCompra == 1) {
    pagoHildebrando -= 15000;
    console.log(
      `te queda de saldo ${pagoHildebrando} despues de comprar la almojabana con gaseosa`
    );
  }

  if (decisionCompra == 2) {
    pagoHildebrando -= 23000;
    console.log(
      `te queda de saldo ${pagoHildebrando} despues de comprar el subway con gaseosa`
    );
  }
  if (decisionCompra == 3) {
    console.log(
      `no hiciste ninguna compra tu saldo sigue en: ${pagoHildebrando}`
    );
  }
}
alert(`CASO 2`);
//CASO 2
let factorReduccionAlto = undefined;
let factorReduccionLargo = undefined;
let factorReduccionAncho = undefined;

alert(`has llegado a la sala de espera!! recuerda que las medidas de la maletas según la aerolinea, debe ser de:
50 cms de alto.
40 cms de largo.
20 cms de ancho.`);

alert(`al parecer tus medidas de la maleta son mayores a las permitidas.
de alto tienen 60 cms, de largo 40cms, y ancho 20cms. `);

let maletaAerolinea = {
  alto: 55,
  largo: 40,
  ancho: 20,
};

let maletaPasajero = {
  alto: 60,
  largo: 40,
  ancho: 20,
};

//factor reducción de cada dimensión
if (maletaPasajero.alto > maletaAerolinea.alto) {
  factorReduccionAlto = maletaAerolinea.alto / maletaPasajero.alto;
  console.log(factorReduccionAlto);
}

if (maletaPasajero.largo > maletaAerolinea.largo) {
  factorReduccionLargo = maletaAerolinea.largo / maletaPasajero.largo;
  console.log(factorReduccionAlto);
}
if (maletaPasajero.ancho > maletaAerolinea.ancho) {
  factorReduccionAncho = maletaAerolinea.ancho / maletaPasajero.ancho;
  console.log(factorReduccionAlto);
}
//factor de reducción más pequeño
const factorMinimo = Math.min(
  factorReduccionAlto,
  factorReduccionAncho,
  factorReduccionLargo
);
maletaPasajero.alto = maletaPasajero.alto * factorMinimo;
maletaPasajero.largo = maletaPasajero.largo * factorMinimo;
maletaPasajero.ancho = maletaPasajero.ancho * factorMinimo;
console.log(factorMinimo);
console.log(`tu nuevas medidas de la meleta son${maletaPasajero}`);

//CASO3
alert(`CASO 3`);
const claveEncriptada = "01110010_01101001_01110111_01101001";
alert(
  `La clave del aeropuerto parecer estar encriptada! 01110010_01101001_01110111_0110100.  `
);

let opcionInternet = prompt(
  `Deseas pagar 50.000 por decifrar la clave y acceder al internet?`
);
if (opcionInternet == "si") {
  pagoHildebrando -= 50000;
  alert(
    `se te han descontado 50.000 pesos de su saldo!, tu nuevo saldo es ${pagoHildebrando}`
  );
  alert("decifrando");

  const claveEncriptadaDividida = claveEncriptada.split("_");
  const letraLista = [];
  for (const i of claveEncriptadaDividida) {
    letraLista.push(Number.parseInt(i, 2));
  }
  const listaFinal = [];
  for (const i of letraLista) {
    listaFinal.push(String.fromCharCode(i));
  }
  alert(`la contraseña es: ${listaFinal.join("")}`);
}

//CASO4
alert(`CASO 4`);
alert(`acabas de pedir un taxi y deseas ir a el hotel de las mariposas amarillas
el conductor solo entiende las palabras con i en las vocales, creo que esto te servira de algo:`);

let frase = "Taxi me puede llevar al hotel mariposas amarillas";

alert(frase.replace(/[a,e,o,u]/g, "i"));

//CASO5
alert(`CASO 5`);
alert(
  `llegaste al hotel y la tarifa está muy cara, creo que deberias jugar piedra papel o tijera con el conductor.`
);

//1.piedra
//2.papel
//3.tijera
const tiroJugador = prompt(`que opción deseas:
1.piedra
2. papel
3. tijera.`);
alert(`uno... dos... tres... piedra... papel... o tijera...`);
alert(`el taxista hace su juego y lanza...`);
const tiroTaxista = Math.floor(Math.random() * 3 + 1);
console.log(tiroTaxista);
if (tiroTaxista == 1) {
  alert("piedra");
} else if (tiroTaxista == 2) {
  alert("papel");
} else {
  alert("tijera");
}
if (tiroJugador == tiroTaxista) {
  alert(`no pasa nada...`);
} else if (tiroJugador == 3 && tiroTaxista == 1) {
  alert(`el taxista gana. te toca pagar la carrera`);
  pagoHildebrando -= 300000;
} else if (tiroJugador == 1 && tiroTaxista == 2) {
  alert(`el taxista gana. te toca pagar la carrera`);
  pagoHildebrando -= 300000;
} else if (tiroJugador == 2 && tiroTaxista == 3) {
  alert(`el taxista gana. te toca pagar la carrera`);
  pagoHildebrando -= 300000;
} else {
  alert(`es tu día de suerte, has ganado! no pagas la carrera`);
}

//CASO6
alert(`CASO 6`);
alert(
  `te bajas del taxi y llegas al hotel y observas que hay un patrón de vestimenta para cada caso...`
);
let NumeroDiasHotel = 4;
const vidaHildebrando = true;

const piscina = true;
const caminata = true;
const playa = true;
const hotel = true;

do {
  if (NumeroDiasHotel > 0) {
    const camiseta = prompt(`que camiseta deseas usar:
    amarilla
    verde
    roja
    azul`);
    switch (camiseta) {
      case "amarilla":
        const opcionAmarillo = prompt(
          `si deseas ingresar a la piscina digita 1. no ingresar 2.`
        );
        if (opcionAmarillo == 1) {
          alert(`te empiezas a sentir ahogado, demasiado cloro...
            
            
            mueres....`);
          vidaHildebrando = false;
        } else {
          alert(`no pasa nada...`);
          NumeroDiasHotel--;
          console.log(NumeroDiasHotel);
        }
        break;

      case "verde":
        const opcionVerde = prompt(
          `si deseas toda la caminata 1. solo hacer un tramo 2.`
        );
        if (opcionVerde == 1) {
          alert(`vas a una hermosa cascada y tomaras muchas fotos`);
        } else {
          alert(`decidiste devolverte solo y de noche te perdiste....`);
        }
        NumeroDiasHotel--;
        break;
      case "roja":
        const opcionRojo = prompt(
          `jugar voleibol 1. nadar en el mar 2. tomar cocteles mientras descansas 3.`
        );
        if (opcionRojo == 1) {
          alert(`la pasas genial jugando voleibol!!`);
          NumeroDiasHotel--;
        } else if (opcionRojo == 2) {
          alert(`en el mar montaste moto acuatica!!!`);
          NumeroDiasHotel--;
        } else {
          alert(`empiezas a sentir dolor de cabeza....
            
            pierdes la vision....
            
            danaste tus vacaciones por un chirrinchi adulterado... tienes que terminar tus vacaciones`);
          NumeroDiasHotel = 0;
        }
        break;
      case "azul":
        const opcionAzul = prompt(
          `jugar bingo 1. bailar en el hotel 2. apostar en el casino 3.`
        );
        if (opcionRojo == 1) {
          alert(`ganaste jugando bingo!!! has ganado 30000. que buena suerte!`);
          pagoHildebrando += 30000;
          NumeroDiasHotel--;
        } else if (opcionRojo == 2) {
          alert(`que bien lo pasaste bailando!`);
          NumeroDiasHotel--;
        } else {
          alert(`la casa siempre gana en el casino.... solo quedaste con el dinero de los pasajes. 
              se acaban tus vacaciones aqui!`);
          NumeroDiasHotel = 0;
        }
        break;
    }
  }
  alert(`es un nuevo dia, numero de dias restantes ${NumeroDiasHotel}`);
} while (vidaHildebrando == true);
