// Un objeto literal es cuando encontramos las llaves {}

const persona ={
  nombre: "Luis Fernando",
  musica: "Rock",
  lenguaje: "Javascript",
}

// Estamos haciendo una REFERENCIA, no una copia
//const empleado = persona;

// Aquí creamos una COPIA del objeto
const empleado = {...persona};

empleado.lenguaje = "Java";
console.log( persona);
console.log( empleado );