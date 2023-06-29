// This is a function that returns an object
const getUser = ()=> ({
  uid:'abc123',
  username: 'tupapito',
});

// We assign the funcion value to user 
const user = getUser();
console.log(user);


// TAREA
// 1. Transformar a una funcion de flecha
// 2. Tiene que retornar un objeto implicito

/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
// Explicit: with return
// Implicit:  Just the value without a RETURN...
//            An object must have parenthesis in this case
/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

function getUsuarioActivo( nombre ){
  return{
    uid:'cdf456',
    username: nombre,
  }
};


const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);