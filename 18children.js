const ul = document.querySelector('ul');

let hijos = ul.children;
console.log(hijos[6].textContent);
hijos[6].style.background = 'tomato';
console.log(hijos);