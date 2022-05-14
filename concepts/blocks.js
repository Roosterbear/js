
var valor = 'hola'

function prueba(){
    console.log(valor)
    // De aqui toma la variable
    // ...pero cuando lo hace aun no esta definida!
    var valor = 'hello'
}

prueba()