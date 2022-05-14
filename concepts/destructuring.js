const mi_objeto = {
  nombre: "Luis",
  apellido: "Perea",
  gustos:{
    musica:"rock",
    grupo: "pearl jam",
    juego: "ajedrez"
  }
}

// Note that gustos: hobbies names "gustos" as "hobbies"
// gustos:{grupo} gets "grupo" from "gustos" as the same name
const {nombre, gustos: hobbies, gustos:{grupo}} = mi_objeto

console.log(grupo)
console.log(hobbies.juego)
