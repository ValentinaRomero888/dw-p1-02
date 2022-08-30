"use strict";

/* TODO */

/* Calcular e informar un sueldo sabiendo que:

  - La categoria define el sueldo basico mensual (1: u$s 1000, 2: u$s 1500, 3: u$s 2000)
  - La subcategoria define el multiplicador (A: x1.5, B: x2, C: x2.5)
  - Ambos datos son ingresados por el usuario

- Informar dentro de que rango esta el sueldo:

  - Rango `inicial`: entre u$s 1500 inclusive y u$s 3000 inclusive
  - Rango `intermedio`: entre u$s 3000 exclusive y u$s 4000 inclusive
  - Rango `avanzado`: si supera los u$s 4000 */

/*categorias*/
/*ingresos*/

var categoria;
var subcategoria;
var sueldo;
var multiplicador;

do {
  categoria = prompt("Ingrese la categoria(valor entre 1 y 3):");
  if (!isNaN(categoria));
  {
    categoria = parseInt(categoria);
  }
} while (isNaN(categoria) || categoria < 1 || categoria > 3);

alert("Usted ingreso" + " "+ categoria);

do {
  subcategoria = prompt("Ingrese la subcategoria (A/B/C):");
  if (isNaN(subcategoria)) {
    subcategoria = subcategoria.toLocaleUpperCase();
  }
} while (subcategoria != "A" && subcategoria != "B" && subcategoria != "C");
alert(
  "Usted ingreso la subcategoria" + " " +
   subcategoria + " "+     
    "para definir el multiplicador"
);
switch (categoria) {
  case 1:
    sueldo = 1000;
    break;
  case 2:
    sueldo = 1500;
  default:
    2000;
}
switch (subcategoria) {
  case "A":
    multiplicador =sueldo * 1, 5;
    alert("Su rango es Inicial");
    break;
  case "B":
    multiplicador = sueldo * 2;
    alert("Su rango es Intermedio");
  default:
  multiplicador = sueldo * 2, 5;
  alert("Su rango es Avanzado");
}

