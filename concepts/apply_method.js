const Producto = {
    descripcion: `Una toalla sucia`,
    precio: 200
}

const Compra = {
    descripcion: '',
    precio: 0,
    darPrecio: function(gracias,por_su_compra){
        console.log(`Tienes que pagar ${Math.ceil(this.precio*1.15)} por ${this.descripcion} - ${gracias}${por_su_compra}`)
    }
}

const arreglo = ['Gracias', ' por su compra']

Compra.darPrecio.apply(Producto, arreglo)