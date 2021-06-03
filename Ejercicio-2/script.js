const respuesta = document.getElementById("respuesta");

let figuraElegida = prompt("Introduzca el area de que figura quiere calcular.");

switch (figuraElegida) {
    case "triangulo": let bt = prompt("Introduzca la base del triangulo.");
        let ht = prompt("introduzca la altura del triangulo.");
        respuesta.textContent = `El area del triangulo ingresado es ${bt * ht / 2}.`;
        break;
    case "rectangulo": let br = prompt("Introduzca la base del rectángulo.");
        let hr = prompt("Introduzca la altura del rectángulo.");
        respuesta.textContent = `El area del rectágulo ingresado es ${br * hr}.`
        break;
    case "circulo": let rc = prompt("Introduzca el radio del circulo");
        respuesta.textContent = `El area del circulo ingresado es ${Math.PI * Math.pow(rc,2)}.`
        break;
    default:
        respuesta.textContent = `La figura que elegió no es valida, por favor intente con otra.`
}