// Promesas

const promesa = new Promise(function(resolve,reject){
    resolve('caso cerrado');
});

promesa.then(function(mensaje){
    console.log(mensaje);
});
