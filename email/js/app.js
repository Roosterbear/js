document.addEventListener('DOMContentLoaded', function(){
  const inputEmail = document.querySelector('#email');
  const inputAsunto =  document.querySelector('#asunto');
  const inputMensaje = document.querySelector('#mensaje');

  // Assign events
  inputEmail.addEventListener('blur', validate);

  inputAsunto.addEventListener('blur', validate);

  inputMensaje.addEventListener('blur', validate);

  function validate(e){
    let reference = e.target.parentElement;

    if(e.target.value.trim() === ''){
      mostrarAlerta(`The field ${e.target.id} is mandatory`, reference);
      return;
    }
    
    if(e.target.id === 'email' && !validarEmail(e.target.value)){
      mostrarAlerta('Email not valid', reference);
      return;
    }
    
    limpiarAlerta(reference);
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
});