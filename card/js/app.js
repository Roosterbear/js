const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners(){
  listaCursos.addEventListener('click', agregarCurso);
  carrito.addEventListener('click', eliminarCurso);
  vaciarCarrito.addEventListener('click', cleanHTML);
}

function agregarCurso(e){
  e.preventDefault();

  if(e.target.classList.contains('agregar-carrito')){
    const cursoSeleccionado = e.target.parentElement.parentElement;
    leerDatosCurso(cursoSeleccionado);
  }
}

function eliminarCurso(e){
  if(e.target.classList.contains('borrar-curso')){
    const cursoID = e.target.getAttribute('data-id');

    articulosCarrito = articulosCarrito.filter(curso=>curso.id !== cursoID);

    carritoHTML();
  }
}

function leerDatosCurso(curso){
  const infoCurso = {
    imagen: curso.querySelector('img').src,
    titulo: curso.querySelector('h4').textContent,
    precio: curso.querySelector('.precio span').textContent,
    id: curso.querySelector('a').getAttribute('data-id')

  }

  articulosCarrito = [...articulosCarrito, infoCurso];
  console.log(articulosCarrito);

  carritoHTML();
}

function carritoHTML(){
  // Clean HTML
  cleanHTML();

  // Generate HTML from cart
  articulosCarrito.forEach( curso=>{
    const row = document.createElement('tr');
    const {imagen, titulo, precio, id} = curso;
    row.innerHTML = `
      <td>
        <img src="${imagen}" width="135"/>
      </td>
      <td><small>
        ${titulo}
      </small></td>
      <td><strong>
        ${precio}
      </strong></td>
      <td><a href="#" class="borrar-curso" data-id="${id}"> X </td>
    `

    contenedorCarrito.appendChild(row);
  });
}


function cleanHTML(){
  while(contenedorCarrito.firstChild){
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}
