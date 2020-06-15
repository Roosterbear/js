//Promesas vs Que

setTimeout(()=>console.log('Quiero ganar'),0);


new Promise(resolve=>resolve('Ganan las promesas!'))
    .then(console.log);