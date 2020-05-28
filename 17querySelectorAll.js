const ele = document.querySelectorAll('li');

const impares = document.querySelectorAll('li:nth-child(odd)');

impares.forEach(impares=>impares.style.background = '#eee');
ele[2].style.color = 'red';
ele[3].style.background = 'yellow';
ele[4].textContent = 'FERNANDO ROOSTERBEAR WAS HERE';

console.log(ele);