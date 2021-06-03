
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

const dni = prompt("Introduzca su dni.");

if(dni <= 0 || dni.length > 8){
    console.log("Numero no valido")
}else{
    let posicion = dni % 23;
    letras.indexOf(posicion);
    console.log(letras[posicion]);
}
