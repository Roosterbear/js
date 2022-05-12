const mi_objeto = {
  nombre: "Luis",
  apellido: "Perea",
  gustos:{
    musica:"rock",
    grupo: "pearl jam",
    juego: "ajedrez"
  }
}

const {nombre, gustos, gustos:{grupo}} = mi_objeto


console.log(grupo)
