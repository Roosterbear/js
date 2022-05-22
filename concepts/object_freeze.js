// if we need the compiler to tell us de ERROR, active: 'use strict'
// 'use strict'

const producto = {
    descripcion: 'domino',
    tipo:'juego',
    precio: 100
}

console.log(`El producto ${producto.descripcion} cuesta ${producto.precio} pesos`)

Object.freeze(producto)

console.log(`-------------------------------------------------`)

console.log(`Intentemos modificar precio...`)
// If we don't use strict mode, the compiler just skips this
producto.precio = 120
console.log(`El producto ${producto.descripcion} sigue costando ${producto.precio} pesos`)
console.log(`Producto congelado: ${Object.isFrozen(producto)}`)
console.log(`-------------------------------------------------`)

console.log(`Intentemos agregar otra característica...`)
producto.impuesto = 0.15
console.log(`Impuesto: ${producto.impuesto}`)
console.log(`Producto congelado: ${Object.isFrozen(producto)}`)
console.log(`-------------------------------------------------`)

console.log(`Intentemos borrar precio...`)
delete producto.precio
console.log(`El producto ${producto.descripcion} sigue costando ${producto.precio} pesos`)
console.log(`Producto congelado: ${Object.isFrozen(producto)}`)



