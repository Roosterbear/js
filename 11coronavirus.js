const fernando = document.querySelector('.fernando');
const barranca = document.querySelector('.barranca');
const aguascalientes = document.querySelector('.aguascalientes');
const mexico = document.querySelector('.mexico');
const mundo = document.querySelector('.mundo');

// Event bubbling
fernando.addEventListener('click',e=>{      
    //e.stopImmediatePropagation();  
    alert('Te has contaminado');
});

barranca.addEventListener('click',e=>{
    alert('Contaminaste la barranca');
});

aguascalientes.addEventListener('click',e=>{
    alert('Contaminaste aguascalientes');
});

mexico.addEventListener('click',e=>{
    alert('Contaminaste mexico');
});

mundo.addEventListener('click',e=>{
    alert('Contaminaste el mundo');
});


