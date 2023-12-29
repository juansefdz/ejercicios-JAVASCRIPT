//condicionales

const puntaje = 100;

if (puntaje === 100) {
  console.log("el puntaje es igual");
} else if (puntaje > 100) {
  console.log("el puntaje es mayor a 100");
} else {
  console.log("el puntaje es menor a 100");
}

//switch

const metodoPago = "efectivo";

switch (metodoPago) {
  case "efectivo":
    console.log("pagaste en efectivo");
    break;
  case "tarjeta":
    console.log("pagaste con tarjeta");
    break;
  default:
    console.log("usaste otro metodo de pago");
}
//version con iff del switch
if (metodoPago == "efectivo") {
  console.log("pagaste en efectivo");
} else if (metodoPago == "tarjeta") {
  console.log("pagaste con tarjeta");
} else {
  console.log("usaste otro metodo de pago");
}

//for loop
for (let i = 0; i <= 10; i++) {
  console.log(`9x${i}=${i * 9}`);
}

//for loops anidados
for (let i = 0; i <= 10; i++) {
  for (let j = 0; j <= 12; j++) {
    console.log(`${i} x ${j}= ${i * j}`);
  }
}
//for in and of

let automovil = {
  modelo: "camaro",
  motor: "5.0",
  anio: "2023",
  marca: "chevrolet",
};

for (let i in automovil) {
  console.log(`${automovil[i]}`);
}
for (let i in automovil) {
  console.log(`${i}`);
}

let automoviles = ["camaro", "sail", "duster", "jetta"];
for (let i of automoviles) {
  console.log(`${i}`);
}
//do wile
let saldo = 10;
do {
  const opcion = prompt(`***Bienvenido al cajero ***
  1. consultar
  2. depositar
  3. retirar
  4. salir
  
  Seleccione una opción:`);

  switch (opcion) {
    case "1":
      alert(`su saldo es de ${saldo}`);
      break;
    case "2":
      let nuevosaldo = prompt("cuanto va a depositar");
      saldo += Number(nuevosaldo);
      alert(`su nuevo saldo es ${saldo}`);
      break;
    case "3":
      let cantidadRetiro = prompt("cuanto dinero va a retirar");
      if (cantidadRetiro > saldo) {
        alert("saldo insuficiente");
      } else {
        saldo -= Number(cantidadRetiro);
      }
      break;
    default:
      alert("opcion no valida");
  }
} while (opcion != "4");

//while

let entrada = prompt("ingrese un número");
console.log(isNaN(Number("asdad")));

while (!isNaN(Number("entrada"))) {
  console.log("el numero ingresado no es valido, ingrese nuevamente");
  entrada = "23";
}
