document.addEventListener('DOMContentLoaded', function(){
  const email = {
    email: '',
    asunto: '',
    mensaje: ''
  }

  const inputEmail = document.querySelector('#email');
  const inputAsunto =  document.querySelector('#asunto');
  const inputMensaje = document.querySelector('#mensaje');
  const btnSubmit = document.querySelector('#btnSubmit');

  // Assign events
  inputEmail.addEventListener('input', validate);

  inputAsunto.addEventListener('input', validate);

  inputMensaje.addEventListener('input', validate);

  function validate(e){
    let reference = e.target.parentElement;

    if(e.target.value.trim() === ''){
      mostrarAlerta(`The field ${e.target.id} is mandatory`, reference);
      email[e.target.name]='';
      comprobarEmail();
      return;
    }
    
    if(e.target.id === 'email' && !validarEmail(e.target.value)){
      mostrarAlerta('Email not valid', reference);
      email[e.target.name]='';
      comprobarEmail();
      return;
    }
    
    limpiarAlerta(reference);

    email[e.target.name] = e.target.value.trim().toLowerCase();

    comprobarEmail();
  }

  function mostrarAlerta(message, reference){

    limpiarAlerta(reference);

    // It is recommended to write de labels in uppercase
    const error = document.createElement('P');

    // This method is a lote better than innerHTML to aoid injecting bad code
    error.textContent = message;
    error.classList.add('text-center', 'text-red-alert');

    // Injecting error to form
    reference.appendChild(error);
  }

  function limpiarAlerta(reference){
    const alerta = reference.querySelector('.text-red-alert');
    if(alerta){
      alerta.remove();
    }
  }

  function validarEmail(email){
    const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const resultado = regex.test(email);
    return resultado;
  }

  function comprobarEmail(){
    console.log(email);
    if(Object.values(email).includes('')){
      btnSubmit.classList.add('opacity-50');
      btnSubmit.disabled = true;
      return;
    }
    btnSubmit.classList.remove('opacity-50');
    btnSubmit.disabled = false;
  }

});