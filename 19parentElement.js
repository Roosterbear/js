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

const hijos = document.querySelectorAll('li');
const hijo = document.querySelector('li');


console.log(hijos[0].parentElement.parentElement.parentElement);
console.log(hijo.parentElement.parentElement.parentElement);