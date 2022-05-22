const Toalla = {
    descripcion: `Una toalla sucia`,
    precio: 200
}

const Maleta = {
    descripcion: `Una maleta muy jodida`,
    precio: 500
}

const Compra = {
    descripcion: '',
    precio: 0,
    darPrecio: function(gracias,por_su_compra, vuelva_pronto){
        console.log(`Pago de ${Math.ceil(this.precio*1.15)} por ${this.descripcion} - ${gracias} ${por_su_compra}, ${vuelva_pronto}`)
    }
}

const arreglo = ['Gracias', ' por su compra', 'vuelva pronto!']

Compra.darPrecio.apply(Maleta, arreglo)