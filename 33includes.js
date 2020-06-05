/* 
<p>Hola</p>
<p>como estas</p>
<p>espero que bien</p>
*/

//includes
const textos = document.querySelectorAll('p');
textos.forEach((texto)=>{
    if(texto.textContent.includes('Hola')){
        let p = texto.style;
        p.color = 'tomato';
        p.fontSize = '2rem';
    }
});
