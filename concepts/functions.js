// This is a function that returns an object
const getUser = ()=> ({
  uid:'abc123',
  username: 'Tu_papito',
});

// We assign the funcion value to user 
const user = getUser();
console.log(user);


// TAREA
// 1. Transformar a una funcion de flecha
// 2. Tiene que retornar un objeto implicito

function getUsuarioActivo( nombre ){
  return{
    uid:'cdf456',
    username: nombre,
  }
};


const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);