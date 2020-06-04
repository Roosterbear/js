class Padre{
    constructor(nombre){
        this.nombre = nombre;
    }

    cantar(){
        return 'canto al pie de tu ventana... soy '+this.nombre;
    }
}


class Hijo extends Padre{
    constructor(nombre,color){
        super(nombre);
        this.color = color;
    }

    bailar(){
        return 'baila esta cumbia... soy '+this.nombre+' y me gusta el '+this.color;
    }
}

let padre = new Padre('Amaro');
console.log(padre.cantar());
let hijo = new Hijo('Juan', 'rojo');
console.log(hijo.bailar());

