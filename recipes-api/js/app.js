function iniciarApp(){

  // Our select
  const selectCategorias = document.querySelector('#categorias');

  // The space where the meals are diplayed
  const resultado = document.querySelector('#resultado');


  if(selectCategorias){
    selectCategorias.addEventListener('change', seleccionarCategoria);
    // Calling the function to fill our select
    obtenerCategorias();
  }

  const favoritosDIV = document.querySelector('.favoritos');
  if(favoritosDIV){
    obtenerFavoritos();
  }


  // Adding the modal for recipes
  const modal = new bootstrap.Modal('#modal', {});

  

  // Getting the categories
  function obtenerCategorias(){
    const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
    fetch(url)
      .then(respuesta=>respuesta.json())      
      .then(resultado=>mostrarCategorias(resultado.categories))
  }

  // Filling the select of categories
  function mostrarCategorias(categorias = []){
    categorias.forEach(categoria=>{
      const {strCategory} = categoria;
      const option = document.createElement('OPTION');
      option.value = strCategory;
      option.textContent = strCategory;
      selectCategorias.appendChild(option);
    })
  }

  // Choosing our category
  function seleccionarCategoria(e){
    const categoria = e.target.value;
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`;

    fetch(url)
      .then(respuesta=>respuesta.json())
      .then(resultado=>mostrarRecetas(resultado.meals))
  }

  // Creating the Meals Cards
  function mostrarRecetas(recetas=[]){
    // +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
    //  When API, we have: idMeal, strMeal, strMealThumb
    //  When favorites, we have: id, titulo and img
    // +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

    limpiarHTML(resultado);

    recetas.forEach(receta=>{
      const {idMeal, strMeal, strMealThumb} = receta;

      const recetaContenedor = document.createElement('DIV');
      recetaContenedor.classList.add('col-md-4');

      const recetaCard = document.createElement('DIV');
      recetaCard.classList.add('card', 'mb-4');

      const recetaImagen = document.createElement('IMG');
      recetaImagen.classList.add('card-img-top');
      recetaImagen.alt = `Imagen de la Receta ${strMeal??receta.titulo}`;
      recetaImagen.src = strMealThumb??receta.img;

      const recetaCardBody = document.createElement('DIV');
      recetaCardBody.classList.add('card-body');

      const recetaHeading = document.createElement('H3');
      recetaHeading.classList.add('card-title', 'mb-3', 'text-center');
      recetaHeading.textContent = strMeal??receta.titulo;

      const recetaButton = document.createElement('BUTTON');
      recetaButton.classList.add('btn', 'btn-danger', 'w-100');
      recetaButton.textContent = 'Open Recipe';
      //recetaButton.dataset.bsTarget = "#modal";
      //recetaButton.dataset.bsToggle = "modal";
      recetaButton.onclick = function(){
        seleccionarReceta(idMeal??receta.id);
      }


      // Inject elements

      recetaCardBody.appendChild(recetaHeading);
      recetaCardBody.appendChild(recetaButton);

      recetaCard.appendChild(recetaImagen);
      recetaCard.appendChild(recetaCardBody);

      recetaContenedor.appendChild(recetaCard);

      resultado.appendChild(recetaContenedor);

    })
  }

  // Choosing our meals
  function seleccionarReceta(id){
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    fetch(url)
      .then(respuesta=>respuesta.json())
      .then(resultado=>mostrarRecetaModal(resultado.meals[0]))
  }

  // Creating modal recipe
  function mostrarRecetaModal(receta){
    const {idMeal, strInstructions, strMeal, strMealThumb} = receta;
    
    const modalTitle = document.querySelector('.modal .modal-title');
    const modalBody = document.querySelector('.modal .modal-body');

    modalTitle.textContent = strMeal;

    modalBody.innerHTML = `
      <img src="${strMealThumb}" class="img-fluid" alt="receta ${strMeal}" />
      <h3 class="my-2">Instructions</h3>
      <p>${strInstructions}</p>
      <h3 class="my-3">Ingredients - Measures</h3>
    `

    const listGroup = document.createElement('UL');
    listGroup.classList.add('list-group');
    for(let i=1;i<=20;i++){
      if(receta[`strIngredient${i}`]){
        const ingrediente = receta[`strIngredient${i}`];
        const cantidad = receta[`strMeasure${i}`];

        const ingredienteLi = document.createElement('LI');
        ingredienteLi.classList.add('list-group-item');
        ingredienteLi.textContent = `${ingrediente} - ${cantidad}`;

        listGroup.appendChild(ingredienteLi);
      }
    }

    modalBody.appendChild(listGroup);

    const modalFooter = document.querySelector('.modal-footer');
    limpiarHTML(modalFooter);

    const btnFavorito = document.createElement('BUTTON');
    btnFavorito.classList.add('btn', 'btn-danger', 'col');
    btnFavorito.textContent = existeStorage(idMeal)?'Unsave':'Save';

    // Store favorites in LocalStorage
    btnFavorito.onclick = function(){

      if(existeStorage(idMeal)){
        eliminarFavoritos(idMeal);
        btnFavorito.textContent = 'Save';
        mostrarToast('Eliminado correctamente');
        return
      }

      agregarFavorito({
        id:idMeal,
        titulo:strMeal,
        img:strMealThumb
      });
      btnFavorito.textContent = 'Unsave';
      mostrarToast('Agregado correctamente');
    }

    const btnCerrarModal = document.createElement('BUTTON');
    btnCerrarModal.classList.add('btn', 'btn-secondary', 'col');
    btnCerrarModal.textContent = 'Close';
    btnCerrarModal.onclick = function(){
      const favoritos = JSON.parse(localStorage.getItem('favoritos'))??[];
      modal.hide();
    }


    modalFooter.appendChild(btnFavorito);
    modalFooter.appendChild(btnCerrarModal);

    modal.show();
  }

  function agregarFavorito(receta){
    const favoritos = JSON.parse(localStorage.getItem('favoritos'))??[];
    localStorage.setItem('favoritos', JSON.stringify([...favoritos,receta]));
  }

  function eliminarFavoritos(id){
    const favoritos = JSON.parse(localStorage.getItem('favoritos'))??[];
    const nuevosFavoritos = favoritos.filter(favorito=>favorito.id !== id);
    localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
  }

  function existeStorage(id){
    const favoritos = JSON.parse(localStorage.getItem('favoritos'))??[];
    return favoritos.some(favorito=>favorito.id === id);
  }

  function mostrarToast(mensaje){
    const toastDIV = document.querySelector('#toast');
    const toastBody = document.querySelector('.toast-body');
    const toast = new bootstrap.Toast(toastDIV);
    toastBody.textContent = mensaje;
    toast.show();
  }

  function obtenerFavoritos(){
    const favoritos = JSON.parse(localStorage.getItem('favoritos'))??[];
    if(favoritos.length){
      mostrarRecetas(favoritos);
      return
    }else{
      const noFavoritos = document.createElement('P');
      noFavoritos.textContent = 'There is no favorites yet';
      noFavoritos.classList.add('fs-4','text-center','font-bold', 'mt-5') ;
      favoritosDIV.appendChild(noFavoritos);
    }
  }

  // Cleaning results before adding new content
  function limpiarHTML(selector){
    while(selector.firstChild){
      selector.removeChild(selector.firstChild);
    }
  }
}

document.addEventListener('DOMContentLoaded', iniciarApp);