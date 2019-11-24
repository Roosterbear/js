/*
<h1 id="titulo" data-mensaje="Este es un mensaje oculto" data-mensaje-oculto="Prohibido leer esto">Titulo</h1>
*/
let elemento = document.getElementById('titulo')
//Ver el contenido de la etiqueta
console.log(elemento.innerHTML)
//dataset se refiere a elementos data en las etiquetas
console.error(elemento.dataset.mensaje)
//en la etiqueta separamos con guiones, aqui con mayusculas
console.warn(elemento.dataset.mensajeOculto)