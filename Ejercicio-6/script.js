const resultado = document.getElementById("resultado");

let contador = 0;
let suma = 0;

while(suma < 50){
    let numero = parseInt(prompt("Introduzca numeros hasta llegar a 50."));
    suma = suma + numero;
    contador++;
    console.log(suma);
    console.log(contador);
    
}

resultado.textContent = `El total de numeros introducidos es ${contador}`;