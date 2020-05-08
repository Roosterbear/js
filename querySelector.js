/*
<h1 class="titulo">Titulo</h1>
<h2 class="subtitulo">Subtitulo</h2>
*/

let h1 = document.querySelector('.titulo');
let h2 = document.querySelector('.subtitulo');

h1.style.display = 'block';
h2.style.display = 'none';

h1.addEventListener('click',function(){
    h1.style.display = 'none';
    h2.style.display = 'block';
});

h2.addEventListener('click',function(){
    h1.style.display = 'block';
    h2.style.display = 'none';
});