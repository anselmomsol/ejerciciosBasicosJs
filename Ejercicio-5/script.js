const resultado = document.getElementById("resultado");

let num = parseInt(prompt('Introduce un número'));
let resultado2 = 1;

for(let i = num; i>1; i--){
    resultado2 = resultado2 * i
}

resultado.textContent = `El factorial de ${num} es ${resultado2}`

