
var valor = 'hola'

function prueba(){
    console.log(valor)
    // From here takes the variable
    // ...but when it happens, it isn't defined yet!
    var valor = 'hello'
}

prueba()