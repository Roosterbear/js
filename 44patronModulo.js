/* 
 <div id="app"></div>
*/

const credencial = (function(){
    let nombre = 'Fernando';
    const crearElemento = ()=>{
        const etiqueta = document.createElement('h2');
        etiqueta.textContent = `Nombre: ${nombre}`;
        document.querySelector('#app').appendChild(etiqueta);
    }

    return{
        public: function(){
            crearElemento();
        }
    }
})();

credencial.public();