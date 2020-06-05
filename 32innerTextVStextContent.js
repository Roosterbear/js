/* 
<p>Hola</p>
<p>como estas</p>
<p>espero que bien</p>
<p>Adios <span style="display:none">(puto el que lo lea)</span></p>
*/

//textContent vs innerText

const textos = document.querySelectorAll('p');

//no muestra elementos internos ocultos
//textos.forEach((texto)=>console.log(texto.innerText));

//muestra todos los elementos internos, esten ocultos o no
//textos.forEach((texto)=>console.log(texto.textContent));