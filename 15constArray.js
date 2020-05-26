function constArray(){
    const arreglo = [1,2,3,4,];
    console.log(arreglo);
    //arreglo = [5,6,7,8];
    arreglo[4] = 7;
    console.log(arreglo);
    arreglo.push(8);
    console.log(arreglo);
}

constArray();