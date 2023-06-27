const carrito = [
    {descripcion:'Monitor',precio:2300,existencia:true},
    {descripcion:'Laptop',precio:32000,existencia:true},
    {descripcion:'Impresora',precio:3200,existencia:true},
    {descripcion:'Mouse',precio:100,existencia:true},
    {descripcion:'Macbook',precio:40000,existencia:true},
    {descripcion:'Teclado',precio:200,existencia:true}
]

// Comment below to unable
const descuento = carrito.some(carrito=>carrito.precio>1000)

// Uncomment below to change message
//const descuento = carrito.some(carrito=>carrito.precio>10000000)


// if some product (at least one) costs some price, return true...
console.log(descuento?'Aplica descuento':'No aplica descuento')