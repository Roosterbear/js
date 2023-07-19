
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

window.onload = ()=>{
  // REMEMBER: functions in listeners DOES NOT NEED PARENTHESES
  // ...since if we put the parentheses, the function will self-execute
  formulario.addEventListener('submit', validarFormulario);
}

function validarFormulario(e){
  e.preventDefault();

  const terminoBusqueda = document.querySelector('#termino').value;

  if(terminoBusqueda === ''){
    showAlert('Agrega un término de búsqueda');
  }
}

function showAlert(message){
  const isAlert = document.querySelector('.isAlert')

  if (!isAlert){

    const alert = document.createElement('P');
    
    alert.classList.add('isAlert', 'text-red-700', 'bg-red-100', 'mt-6', 'px-4', 'py-3', 'rounded', 'mx-auto', 'text-center');
    
    alert.innerHTML = `
    <strong>Error ! </strong><span>${message}</span>
    `;
    
    formulario.appendChild(alert);
    
    setTimeout(()=>{
      alert.remove();
    },2500);
  }

}