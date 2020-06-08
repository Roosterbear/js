/*
<a href="#" id="btnJSON" class="button">Consumir JSON</a>
<h3>El resultado se ver&aacute; aqu&iacute;</h3>
<div id="datos"></div>
*/

const btn = document.querySelector('#btnJSON').addEventListener('click',consumirJSON);

function consumirJSON(){
    fetch('discos.json')
        .then(function(resp){
            return resp.json();
        })
        .then(function(discos){
            let html = '';
            discos.forEach(function(disco){
                html += `<h4><strong>${disco.nombre}</strong> - ${disco.album}</h4>`;
            })
            document.getElementById('datos').innerHTML = html;
        })
        .catch(function(error){
            console.log(error);
        });
}
    
        