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
const primer = document.querySelector('#elementos');

primer.children[0].classList.add('mi_clasesota');
primer.children[0].classList.add('mi_clasesita');
primer.children[0].classList.remove('mi_clasesita');

primer.children[0].setAttribute('data-elem',1);
console.log(primer.children[0].hasAttribute('data-elem'));
console.log(primer.children[0].getAttribute('data-elem'));
primer.children[0].removeAttribute('data-elem');
