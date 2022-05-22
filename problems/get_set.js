// Crear una lista de canciones

const canciones = {
    tema:"Evenflow",
    grupo:"Pearl Jam",

    set setSong(tema){
        this.tema = tema
    },

    set setGrupo(grupo){
        this.grupo = grupo
    },

    get getSong(){
        console.log(`Añadiendo ${this.tema} de ${this.grupo}`)
    }
}

canciones.setGrupo = `Frank Zappa`
canciones.setSong = `Motherly Love`
canciones.getSong

