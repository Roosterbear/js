const mi_objeto = {
  nombre: "Luis",
  apellido: "Perea",
  gustos:{
    musica:"rock",
    grupo: "Frank Zappa, Pearl Jam, Belle and Sebastian, Babasónicos y Caifanes",
    juego: "Ajedrez",
    otro: "Leer"
  }
}

// Note that "gustos: hobbies" gets whole "gustos" as the name "hobbies"
// Now, "gustos:{grupo}" gets "grupo" from "gustos" as the same name
const {nombre, gustos: hobbies, gustos:{grupo}} = mi_objeto

console.log(`Me gusta escuchar la musica de ${grupo}`)
console.log(`Mi Hobbie es jugar ${hobbies.juego}`)
console.log(`Mi Hobbie tambien es ${hobbies.otro}`)
