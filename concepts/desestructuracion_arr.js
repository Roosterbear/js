// Para cambiar nombres: F2
const numbnames = ['uno', 'dos', 'tres', 'cuatro', 'cinco'];

const [,,three,,] = numbnames;

console.log(three);

const returnArray = ()=>{
  return ['ABC',123];
}

const [letras, numeros] = returnArray();

console.log(letras, numeros);

// Ahora vamos a hacer una funcion dentro de otra funcion y desestructurarla

const weird = (nombre)=>{
  return [nombre,()=>{console.log('Hola Mundo')}];
}

const [nombre,setNombre] = weird('Hulk');
console.log(nombre);
setNombre();
