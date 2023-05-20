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
// We do not need the parenthesis
mySong.getSong
// We pass the value as a normal variable
mySong.band = 'pearl jam';
mySong.getSong

