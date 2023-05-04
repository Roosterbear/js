const arreglo1 = [1,2,3,4,5,6,7];

let arreglo2 = [...arreglo1,];

const arreglo3 = arreglo2.map(n=>n*2);

console.log(arreglo1);
console.log(arreglo2);
console.log(arreglo3);

