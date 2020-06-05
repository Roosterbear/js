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

const ul = document.querySelector('ul');

let hijos = ul.children;
console.log(hijos[6].textContent);
hijos[6].style.background = 'tomato';
console.log(hijos);