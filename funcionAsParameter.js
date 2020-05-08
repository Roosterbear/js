function suma(num){
    return num + 2;
}

function resta(num){
    return num-2;
}

function multiplicacion(num){
    return num*2;
}

function division(num){
    return num/2;
}

function operaciones(numero,funcion){
    return funcion(numero);
}
console.log(operaciones(6,suma));
console.log(operaciones(6,resta));
console.log(operaciones(6,multiplicacion));
console.log(operaciones(6,division));
