let numero = parseInt(prompt("Introduzca un número a evaluar."));

for (let i = 1; i <= numero; i++) {
    if (i % 2 === 0) {
        console.log(`${i} es un número par.`);
    } else {
       console.log(`${i} es un número impar.`) 
    }
}