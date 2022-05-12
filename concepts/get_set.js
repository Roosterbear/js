const reproductor = {
  cancion: '',
  set nuevaCancion(cancion){
    this.cancion = cancion
    console.log(`Reproduciendo ${cancion}`)
  },
  get obtenerCancion(){
    console.log(`${this.cancion}`)
  }
}

reproductor.nuevaCancion = "Evenflow"
reproductor.reproducir
