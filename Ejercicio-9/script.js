let vocales = ["a", "e", "i", "o", "u"];

let palabra = prompt("Introduzca una palabra.").toLowerCase();

let vocales1 = 0;
for (j = 0; j < vocales.length; j++) 
    for (i = 0; i < palabra.length; i++) { 
        if (vocales[j] == palabra[i]) 
            vocales1++;
    }
/* console.log("vocales = " + vocales1);
console.log("Consonante = " + (palabra.length - vocales1));
console.log("Largo total = " + palabra.length);
 */
console.log(`La palabra elegida es ${palabra}, y tiene ${vocales1} vocales, ${palabra.length - vocales1} consonantes y un largo total de ${palabra.length}. `)