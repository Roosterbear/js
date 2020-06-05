// Promesas

const promesa = new Promise(function(resolve,reject){
    let azar = Boolean(Math.floor((Math.random()*2)));
    if(azar){
        resolve('BUENA SUERTE');
    }else{
        reject('MALA SUERTE');
    }

});

promesa.then(function(mensaje){
    console.log(mensaje);
}).catch(function(error){
    console.log(error);
});
