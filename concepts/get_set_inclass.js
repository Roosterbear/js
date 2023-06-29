class Song{
    constructor(theme,author){
        this._theme = theme
        this._author = author
    }

    set band(band){
        this._author = band.toUpperCase();
    }

    get getSong(){
        console.log(`This song is ${this._theme} by ${this._author}`)
    } 
}

const mySong = new Song('Black', 'Metallica')

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// In a get, we do not need the parenthesis
mySong.getSong

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// In a set, we pass the value as a normal variable
mySong.band = 'Pearl Jam';

mySong.getSong

