const nombre = document.getElementById("nombre");
const edad = document.getElementById("edad");
const respuesta = document.getElementById("respuesta");

let nombre1 = prompt("Introduzca su nombre");
let edad1 = prompt("Introduzca su edad");

respuesta.textContent = `Hola! ${nombre1}, usted tiene ${edad1} años, y el año que viene tendrá ${++edad1} años. Saludos :)`

//ejercicio 1.

