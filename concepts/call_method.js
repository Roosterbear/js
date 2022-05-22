const pearl = {
    name: `I'm still alive`,
    band: `Pearl Jam`
}

const zappa = {
    name: `I ain't no heart`,
    band: `Frank Zappa`
}

const babas = {
    name: `Natural`,
    band: `Babasonicos`
}

const caifanes = {
    name: `Perdi mi ojo de venado`,
    band: `Caifanes`
}

const Walkman = {
    name: 'Sony',
    reproducir: function(){
        console.log(`This walkman is playing ${this.name} by ${this.band}`)
    }
}

Walkman.reproducir.call(zappa)

