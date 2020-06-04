class Clase{
    constructor(nombre){
        this.nombre = nombre;
    }

    accion(){
        return ('Soy una funcion de la clase:'+this.nombre);
    }

    static always(){
        return ('Me imprimire sin instanciar, siempre...');
    }
}

const objeto = new Clase('loca');
console.log(objeto.accion());
console.log(Clase.always());
