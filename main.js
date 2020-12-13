//Botones Operaciones

let muestraOperacion = document.getElementById("muestraOperacion");

let resultado = document.getElementById("display");

let btnSumar = document.getElementById("add"); //Botón para sumar
btnSumar.addEventListener("click", sumar);

let btnRestar = document.getElementById("subtract"); //Botón para restar
btnRestar.addEventListener("click", restar);

let btnMultiplicar = document.getElementById("multiply"); //Botón para multiplicar
btnMultiplicar.addEventListener("click", multiplicar);

let btnDividir = document.getElementById("divide"); //Botón para dividir
btnDividir.addEventListener("click", dividir);

let btnIgual = document.getElementById("equals"); //Botón para mostrar resultado
btnIgual.addEventListener("click", igual);

let btnBorrarTodo = document.getElementById("clear");
btnBorrarTodo.addEventListener("click", borrar);

//Botones Números

let btnUno = document.getElementById("one");
btnUno.addEventListener("click", uno);

let btnDos = document.getElementById("two");
btnDos.addEventListener("click", dos);

let btnTres = document.getElementById("three");
btnTres.addEventListener("click", tres);

let btnCuatro = document.getElementById("four");
btnCuatro.addEventListener("click", cuatro);

let btnCinco = document.getElementById("five");
btnCinco.addEventListener("click", cinco);

let btnSeis = document.getElementById("six");
btnSeis.addEventListener("click", seis);

let btnSiete = document.getElementById("seven");
btnSiete.addEventListener("click", siete);

let btnOcho = document.getElementById("eight");
btnOcho.addEventListener("click", ocho);

let btnNueve = document.getElementById("nine");
btnNueve.addEventListener("click", nueve);

let btnCero = document.getElementById("zero");
btnCero.addEventListener("click", cero);

let btnDecimal = document.getElementById("decimal");
btnDecimal.addEventListener("click", decimal);

//Funciones Números

function uno() {
  resultado.textContent += "1";
}

function dos() {
  resultado.textContent += "2";
}

function tres() {
  resultado.textContent += "3";
}

function cuatro() {
  resultado.textContent += "4";
}

function cinco() {
  resultado.textContent += "5";
}

function seis() {
  resultado.textContent += "6";
}

function siete() {
  resultado.textContent += "7";
}

function ocho() {
  resultado.textContent += "8";
}

function nueve() {
  resultado.textContent += "9";
}

function cero() {
  resultado.textContent += "0";
}

//Función Borrar

function borrar() {
  muestraOperacion.textContent = " ";
  resultado.textContent = " ";
}

let numero1 = 0;
let numero2 = 0;
let operacion = 0;
let resuelto = 0;


// Funciones de Operaciones

//Función sumar

function sumar() {
  numero1 = parseInt(resultado.textContent,10);
  operacion = "+";

  muestraOperacion.innerHTML = `${numero1}${operacion}`;
  limpiar();
}

//Función restar

function restar() {
  numero1 = parseInt(resultado.textContent,10);
  operacion = "-";

  muestraOperacion.innerHTML = `${numero1}${operacion}`;
  limpiar();
}

//Función multiplicar

function multiplicar() {
  numero1 = parseInt(resultado.textContent,10);
  operacion = "*";

  muestraOperacion.innerHTML = `${numero1}${operacion}`;
  limpiar();
}

//Función Dividir

function dividir() {
  numero1 = parseInt(resultado.textContent,10);
  operacion = "/";

  muestraOperacion.innerHTML = `${numero1}${operacion}`;
  limpiar();
}

function igual() {
  numero2 = parseInt(resultado.textContent,10);

  resolver();
}

function limpiar() {
  resultado.textContent = "";
}

//Función para resolver, se hace un condicional para resolver dependiendo el caso

function resolver() {
  if (operacion === "+") {
    resuelto = numero1 + numero2;

    muestraOperacion.innerHTML = `${numero1}${operacion}${numero2}=${resuelto}`;
    resultado.innerHTML = `${resuelto}`;
  } else if (operacion === "-") {
    resuelto = numero1 - numero2;

    muestraOperacion.innerHTML = `${numero1}${operacion}${numero2}=${resuelto}`;
    resultado.innerHTML = `${resuelto}`;
  } else if (operacion === "*") {
    resuelto = numero1 * numero2;

    muestraOperacion.innerHTML = `${numero1}${operacion}${numero2}=${resuelto}`;
    resultado.innerHTML = `${resuelto}`;
  } else if (operacion === "/") {
    resuelto = numero1 / numero2;

    muestraOperacion.innerHTML = `${numero1}${operacion}${numero2}=${resuelto}`;
    resultado.innerHTML = `${resuelto}`;
  }
}
