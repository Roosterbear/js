const elemento = document.createElement('li');
const enlace = document.createElement('a');

elemento.className = 'nueva';
enlace.setAttribute('href','#');
enlace.textContent = "NUEVO ENLACE";

elemento.appendChild(enlace);
document.querySelector('ul').appendChild(elemento);