const carrito = [
    {descripcion:'Monitor',precio:2300,existencia:true},
    {descripcion:'Laptop',precio:32000,existencia:true},
    {descripcion:'Impresora',precio:3200,existencia:true},
    {descripcion:'Mouse',precio:100,existencia:true},
    // Uncomment to change message
    //{descripcion:'Macbook',precio:40000,existencia:false},
    {descripcion:'Teclado',precio:200,existencia:true}
]

// 'Every' checks if every element keeps a condition
const existentes = carrito.every(carrito=>carrito.existencia)

console.log(existentes?'All elements in the cart are 0k':'Missing product')
