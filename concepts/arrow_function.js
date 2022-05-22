const nombre = 'Luis'

// Esta es una funcion normal de expresión
const normal = function(nombre){
    return `Hola ${nombre} desde una funcion normal de expresion`
}

console.log(normal(nombre))

// Esta es una arrow function

const bigArrow = ()=>{
    let mensaje = 'Hola desde una arrow function...'
    return mensaje
}

console.log(bigArrow())

// Observa que: si solo es un parámetro, no necesitamos paréntesis
// ...únicamente se usan cuando no pasamos parámetros o son más de uno
const arrowArg = nombre=>{
    return `Hola ${nombre} desde una arrow function sin paréntesis`
}

console.log(arrowArg(nombre))

// Cuando la función es de una sola línea podemos quitar las llaves

const arrowNoKeys = nombre=>`Hola ${nombre} desde una arrow function sin llaves`
console.log(arrowNoKeys(nombre))

// Podemos omitir la palabra return para regresar el último valor
const arrowNoReturn = nombre=>`Hola ${nombre} desde una arrow function sin return`
console.log(arrowNoReturn(nombre))

// Hasta quedar una funcion ridiculamente muy pequeña
const tinyArrow = nombre=>nombre
console.log(tinyArrow(nombre))