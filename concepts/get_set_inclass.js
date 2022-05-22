class Song{
    constructor(theme,author){
        this._theme = theme
        this._author = author
    }

    get getSong(){
        console.log(`This song is ${this._theme} by ${this._author}`)
    } 
}

const mySong = new Song('Black', 'Pearl Jam')
mySong.getSong

