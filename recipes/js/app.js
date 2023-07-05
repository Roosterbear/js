function iniciarApp(){

  const selectCategorias = document.querySelector('#categorias');
  selectCategorias.addEventListener('change', seleccionarCategoria)

  const resultado = document.querySelector('#resultado');
  const modal = new bootstrap.Modal('#modal', {});

  obtenerCategorias();

  function obtenerCategorias(){
    const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
    fetch(url)
      .then(respuesta=>respuesta.json())      
      .then(resultado=>mostrarCategorias(resultado.categories))
  }

  function mostrarCategorias(categorias = []){

    categorias.forEach(categoria=>{
      const {strCategory} = categoria;
      const option = document.createElement('OPTION');
      option.value = strCategory;
      option.textContent = strCategory;

      selectCategorias.appendChild(option);
    })
  }

  function seleccionarCategoria(e){
    const categoria = e.target.value;
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`;

    fetch(url)
      .then(respuesta=>respuesta.json())
      .then(resultado=>mostrarRecetas(resultado.meals))
  }

  function mostrarRecetas(recetas=[]){
    
    limpiarHTML(resultado);

    recetas.forEach(receta=>{
      const {idMeal, strMeal, strMealThumb} = receta;

      const recetaContenedor = document.createElement('DIV');
      recetaContenedor.classList.add('col-md-4');

      const recetaCard = document.createElement('DIV');
      recetaCard.classList.add('card', 'mb-4');

      const recetaImagen = document.createElement('IMG');
      recetaImagen.classList.add('card-img-top');
      recetaImagen.alt = `Imagen de la Receta ${strMeal}`;
      recetaImagen.src = strMealThumb;

      const recetaCardBody = document.createElement('DIV');
      recetaCardBody.classList.add('card-body');

      const recetaHeading = document.createElement('H3');
      recetaHeading.classList.add('card-title', 'mb-3', 'text-center');
      recetaHeading.textContent = strMeal;

      const recetaButton = document.createElement('BUTTON');
      recetaButton.classList.add('btn', 'btn-danger', 'w-100');
      recetaButton.textContent = 'Open Recipe';
      //recetaButton.dataset.bsTarget = "#modal";
      //recetaButton.dataset.bsToggle = "modal";
      recetaButton.onclick = function(){
        seleccionarReceta(idMeal);
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

  function seleccionarReceta(id){
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    fetch(url)
      .then(respuesta=>respuesta.json())
      .then(resultado=>mostrarRecetaModal(resultado.meals[0]))
  }

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
    modal.show();
  }

  function limpiarHTML(selector){
    while(selector.firstChild){
      selector.removeChild(selector.firstChild);
    }
  }
}

document.addEventListener('DOMContentLoaded', iniciarApp);