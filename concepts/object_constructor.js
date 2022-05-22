// Object Literal
const producto1 = {
    descripcion: 'Manzana',
    precio: 44
}

// Object Constructor
function Producto(descripcion, precio){
    this.descripcion = descripcion
    this.precio = precio
}

const producto2 = new Producto('Naranja', 20)
const producto3 = new Producto('Sandia', 10)

// Remember that in destructuring, we must use the same names as object
const {descripcion, precio} = producto3
console.log(`Compraste el producto: ${descripcion} en $${precio}`)





