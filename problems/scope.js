
let numero = 1;
console.log("Desde scope global "+numero);
if(true){
  const numero = 2
  console.log("Desde primer nivel de bloque "+numero);
  
  if(true){
    // Si lo declaro como var, marcaria error porque ya tengo un "numero" global
    let numero = 3
    console.log("Desde segundo nivel de bloque "+numero);

  }
}