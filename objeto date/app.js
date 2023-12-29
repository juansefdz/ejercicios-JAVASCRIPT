let tiempo = Date.now();
console.log(tiempo);

let fechaActual = new Date();
console.log(fechaActual);

let fechaEspecifica = new Date("2023-11-26T12:30:00");
console.log(fechaEspecifica);

let fechaMilisegundos = Date.now();
console.log(fechaMilisegundos);

let fechaString = "2023-11-26T12:30:00";
let milisegundos = Date.parse(fechaString);

console.log(`Cadena de fecha: ${fechaString}`);
console.log(`Milisegundos desde Epoch: ${milisegundos}`);

let marcaTiempo = Date.UTC(2023, 10, 26, 12, 30, 0);

console.log(`Marca de tiempo UTC: ${marcaTiempo}`);

// Crear una instancia de Date para el 28 de noviembre de 2023
//let fechaEjemplo = new Date('2023-11-28');

//getDay
// Obtener el día de la semana
//let diaSemana = fechaEjemplo.getDay();

// Crear un array con los nombres de los días de la semana
//let nombresDias = [ 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado','Domingo'];
//0                                                              //6
// Imprimir el día de la semana
//console.log(`El 28 de noviembre de 2023 es un ${nombresDias[diaSemana]}.`);

//getDate
// Crear una instancia de Date para el 28 de noviembre de 2023
// let fechaEjemplo = new Date('2023-11-28');

// // Obtener el día del mes
// let diaDelMes = fechaEjemplo.getDate();

// Imprimir el día del mes
//console.log(`El día del mes es: ${diaDelMes}`);
// Crear una instancia de Date para el 26 de noviembre de 2023

// let fechaEjemplo = new Date('2023-11-28');

// // Obtener el año
// let año = fechaEjemplo.getFullYear();

// // Imprimir el año
// console.log(`El año es: ${año}`);

// // Crear una instancia de Date para el 26 de noviembre de 2023 a las 14:45:30
// let fechaEjemplo = new Date('2023-11-26T14:45:30');

// // Obtener las horas
// let horas = fechaEjemplo.getHours();

// // Imprimir las horas
// console.log(`Las horas es: ${horas}`);

// // Crear una instancia de Date para el 26 de noviembre de 2023 a las 14:45:30
// let fechaEjemplo = new Date('2023-11-26T14:45:30');

// // Obtener los minutos
// let minutos = fechaEjemplo.getMinutes();

// // Imprimir los minutos
// console.log(`Los minutos son: ${minutos}`);

// Crear una instancia de Date para el 26 de noviembre de 2023 a las 14:45:30
// let fechaEjemplo = new Date('2023-11-26T14:45:30');

// // Obtener los minutos
// let minutos = fechaEjemplo.getMinutes();

// // Imprimir los minutos
// console.log(`Los minutos son: ${minutos}`);|

// let formatoFecha = fechaActual.toLocaleString("es-ES", {
//   weekday: "long",
//   year: "numeric",
//   month: "long",
//   day: "numeric",
// });

// console.log(`Fecha formateada: ${formatoFecha}`);


// let otraFecha = new Date('2023-12-31');

// let diferenciaEnMilisegundos = otraFecha - fechaActual;
// let diferenciaEnDias = diferenciaEnMilisegundos / (1000 * 60 * 60 * 24);

// console.log(`Días de diferencia: ${diferenciaEnDias}`);

// 7. Ejercicio Práctico:

// Crear una función que tome dos fechas como parámetros y devuelva la diferencia en años, meses y días.

function diferenciaFechas(fecha1, fecha2) {
    // Obtener las diferencias en milisegundos
    let diferenciaMilisegundos = Math.abs(fecha2 - fecha1);
  
    // Calcular años
    let años = Math.floor(diferenciaMilisegundos / (365.25 * 24 * 60 * 60 * 1000));
  
    // Calcular meses
    let meses = Math.floor((diferenciaMilisegundos % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
  
    // Calcular días
    let días = Math.floor((diferenciaMilisegundos % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
  
    return { años, meses, días };
  }
  
  // Crear instancias de fechas
  let fechaInicio = new Date('2023-01-01');
  let fechaFin = new Date('2023-12-31');
  
  // Calcular la diferencia
  let resultado = diferenciaFechas(fechaInicio, fechaFin);
  
  // Imprimir el resultado
  console.log(`Diferencia: ${resultado.años} años, ${resultado.meses} meses, ${resultado.días} días`);
  