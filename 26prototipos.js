function Prototipo(nombre){
    this.nombre = nombre;
    this.accion = function(){
        console.log('Soy un prototipo llamado: '+this.nombre);
    }
}

const pro = new Prototipo('Pancho');
pro.accion();

Prototipo.prototype.otraAccion = function(){
    return 'Y vendo pozole los sabados y menudo los domingos';
}

console.log(pro.otraAccion());