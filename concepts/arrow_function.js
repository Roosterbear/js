const nombre = 'Luis'

// This is an Expression normal function
const normal = function(nombre){
    return `Hola ${nombre} desde una funcion normal de expresion`
}
console.log(normal(nombre))


// This is an arrow function
const bigArrow = ()=>{
    let mensaje = 'Hola desde una arrow function...'
    return mensaje
}
console.log(bigArrow())


// Look that: if we use just one parameter, we don't need parenthesis
// ...we only use parenthesis when there is no parameters or there are more than two
const arrowArg = nombre=>{
    return `Hola ${nombre} desde una arrow function sin paréntesis`
}
console.log(arrowArg(nombre))


// When function is a single line, we can remove the keys
const arrowNoKeys = nombre=>`Hola ${nombre} desde una arrow function sin llaves`
console.log(arrowNoKeys(nombre))


// We can omit the word return to return the last value
const arrowNoReturn = nombre=>`Hola ${nombre} desde una arrow function sin return`
console.log(arrowNoReturn(nombre))


// Until there's a ridiculously small function
const tinyArrow = nombre=>nombre
console.log(tinyArrow(nombre))