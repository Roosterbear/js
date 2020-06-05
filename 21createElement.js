/* 
  <ul id="elementos">
       <li>Primer elemento</li>
       <li>Segundo elemento</li>
       <li>Tercer elemento</li>
       <li>Cuarto elemento</li>
       <li>Quinto elemento</li>
       <li>Sexto elemento</li>
       <li>Septimo elemento</li>
   </ul>
*/

const elemento = document.createElement('li');
const enlace = document.createElement('a');

elemento.className = 'nueva';
enlace.setAttribute('href','#');
enlace.textContent = "NUEVO ENLACE";

elemento.appendChild(enlace);
document.querySelector('ul').appendChild(elemento);