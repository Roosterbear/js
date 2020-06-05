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

console.log(hijos[5].previousElementSibling.textContent);
console.log(hijos[5].nextElementSibling.textContent);