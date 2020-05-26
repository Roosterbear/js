let nombres = ['Jacinto','Jeremias','Panchito'];
var eje = localStorage.getItem('nombre');

nombres.forEach(function(nombre,index){
    console.log(index+1+': '+nombre);
});
console.log(eje);
//nombres.forEach(nombre =>console.log(nombre));