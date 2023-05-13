// We can use this object
const Toalla = {
    descripcion: `Una toalla sucia`,
    precio: 200
}

// We can use this object too...
const Maleta = {
    descripcion: `Una maleta muy jodida`,
    precio: 500
}

// We use this object 'Compra' with apply to use "darPrecio" method
const Compra = {
    descripcion: '',
    precio: 0,
    darPrecio: function(gracias, por_su_compra, vuelva_pronto){
        console.log(`Pago de ${Math.ceil(this.precio*1.15)} por ${this.descripcion} - ${gracias} ${por_su_compra}, ${vuelva_pronto}`);
    }
}

// In 'apply', we need an array to inject all arguments at once
const arreglo = ['Gracias', ' por su compra', 'vuelva pronto!'];

// We use compra to get "darPrecio" method, 
// and pass the object and arguments in array
Compra.darPrecio.apply(Maleta, arreglo);
Compra.darPrecio.apply(Toalla, arreglo);