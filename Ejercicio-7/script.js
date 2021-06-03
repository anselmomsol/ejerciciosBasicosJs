let array1 = [1,2,3,4,5];
let pares = [];
let impares = [];

for(let i=0; i < array1.length; i++){
    let numMultiplicar = Math.round(Math.random()*(10 - 1)+1);
    let result = array1[i] * numMultiplicar;
    console.log(`${numMultiplicar} * ${array1[i]} = ${result}`)
    if(result % 2 === 0){
        pares.push(result);
    }else{
        impares.push(result);
    }
}

console.log("impares: " + impares);
console.log("pares: " + pares);
