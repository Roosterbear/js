const $app = document.getElementById('app');

class Gato{
    constructor(){
        this.sonido = 'Miauuuuu';

        window.addEventListener('keydown', e=>{
            
            setTimeout(()=>{
                
                $app.innerHTML += `<h1>${this.sonido} + ${e.key}</h1>`
            },1);
        })
    }
}

const gato = new Gato();