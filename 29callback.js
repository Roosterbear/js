/*
   <h1>Mensajes</h1>
    <div id="mensajes"></div>
*/

const mensajes = ['hola','como estas','me puedes llamar por favor','es urgente'];

function agregarMensaje(mensaje,callback){
    setTimeout(function(){
        mensajes.push(mensaje);
        callback();
    },1500);
}

function mostrarMensajes(){
    let codigo = '';
    mensajes.forEach(function(mensaje){
        codigo+= `<h4>${mensaje}</h4>` ;
    });
    document.getElementById('mensajes').innerHTML = codigo;
}

setTimeout(()=>agregarMensaje('ya siempre no....',mostrarMensajes),2500);
setTimeout(()=>agregarMensaje('ay!, siii, mejor si',mostrarMensajes),6500);
setTimeout(()=>agregarMensaje('...es mas, mejor te marco...',mostrarMensajes),8500);

 mostrarMensajes();
