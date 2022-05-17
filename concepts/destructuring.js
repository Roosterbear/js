const mi_objeto = {
  nombre: "Luis",
  apellido: "Perea",
  gustos:{
    musica:"rock",
    grupo: "pearl jam",
    juego: "ajedrez"
  }
}

// Note that "gustos: hobbies" gets whole "gustos" as the name "hobbies"
// Now, "gustos:{grupo}" gets "grupo" from "gustos" as the same name
const {nombre, gustos: hobbies, gustos:{grupo}} = mi_objeto

console.log(grupo)
console.log(hobbies.juego)
