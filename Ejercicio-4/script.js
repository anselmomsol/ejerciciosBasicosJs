const respuesta = document.getElementById("respuesta");

let numero = prompt("Introduzca un numero mayor a 1 para verificar si es primo.");

if(numero <= 1){
    respuesta.textContent = `El número que ingreso no es valido.`
}else if(numero % 2 != 0){
    respuesta.textContent = `El numero ${numero} es un numero primo.` 
}else{
    respuesta.textContent = `El numero ${numero} no es un numero primo.`
}