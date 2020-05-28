const primer = document.querySelector('#elementos');

primer.children[0].classList.add('mi_clasesota');
primer.children[0].classList.add('mi_clasesita');
primer.children[0].classList.remove('mi_clasesita');

primer.children[0].setAttribute('data-elem',1);
console.log(primer.children[0].hasAttribute('data-elem'));
console.log(primer.children[0].getAttribute('data-elem'));
primer.children[0].removeAttribute('data-elem');
