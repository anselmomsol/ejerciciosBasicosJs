let colorUsuario = prompt("Introduzca un color").toLowerCase();

let colores =  ["azul", "amarillo", "rojo", "verde", "rosa"];

for(i=0;i<colores.length;i++){
    if(colorUsuario === colores[i]){
        console.log("Color encontrado");
        break;
    }else{
        console.log("Color no encontrado")
    }
}

