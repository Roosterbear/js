// if we need the compiler to tell us de ERROR, active: 'use strict'
//'use strict'

const producto = {
    descripcion: 'ajedrez',
    tipo:'juego',
    precio: 300
}

console.log(`El producto ${producto.descripcion} cuesta ${producto.precio} pesos`)

Object.seal(producto)

console.log(`-------------------------------------------------`)

console.log(`Intentemos modificar precio...`)
// If we don't use strict mode, the compiler just skips this
producto.precio = 320
console.log(`El producto ${producto.descripcion} ahora cuesta ${producto.precio} pesos`)
console.log(`Producto sellado: ${Object.isSealed(producto)}`)
console.log(`-------------------------------------------------`)

console.log(`Intentemos agregar otra característica...`)
producto.impuesto = 0.15
console.log(`Impuesto: ${producto.impuesto}`)
console.log(`Producto sellado: ${Object.isSealed(producto)}`)
console.log(`-------------------------------------------------`)

console.log(`Intentemos borrar precio...`)
delete producto.precio
console.log(`El producto ${producto.descripcion} sigue en ${producto.precio} pesos`)
console.log(`Producto sellado: ${Object.isSealed(producto)}`)



