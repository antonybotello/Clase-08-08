const meses = new Array(
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
);
const dias = new Array(
  "domingo",
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sábado"
);
var f = new Date();
document.getElementById("fecha").innerHTML =
  dias[f.getDay()] +
  ", " +
  f.getDate() +
  " de " +
  meses[f.getMonth()] +
  " " +
  f.getFullYear();
