const carrito = [
    {descripcion:'Monitor',precio:2300,existencia:true},
    {descripcion:'Laptop',precio:32000,existencia:true},
    {descripcion:'Impresora',precio:3200,existencia:true},
    {descripcion:'Mouse',precio:100,existencia:true},
    // Uncomment to change message
    //{descripcion:'Macbook',precio:40000,existencia:false},
    {descripcion:'Teclado',precio:200,existencia:true}
]

const existentes = carrito.every(carrito=>carrito.existencia)

console.log(existentes?'Elementos de carrito existentes':'Falta existencia de algun producto')