function Cliente(nombre, saldo){
  this.nombre = nombre;
  this.saldo = saldo;
}

Cliente.prototype.getNombre = function(){
  return `The name of the client is: ${this.nombre}`
}

const rodrigo = new Cliente('Rodrigo', 500);
console.log(rodrigo.getNombre());