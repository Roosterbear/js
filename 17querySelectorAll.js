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

const ele = document.querySelectorAll('li');

const impares = document.querySelectorAll('li:nth-child(odd)');

impares.forEach(impares=>impares.style.background = '#eee');
ele[2].style.color = 'red';
ele[3].style.background = 'yellow';
ele[4].textContent = 'FERNANDO ROOSTERBEAR WAS HERE';

console.log(ele);