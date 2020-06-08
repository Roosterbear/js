/*
<a href="#" id="btnTXT" class="button">Consumir archivo TXT</a>
<h2>El resultado se ver&aacute; aqu&iacute;</h2>
<div id="datos"></div>
*/   

const btn = document.querySelector('#btnTXT').addEventListener('click',consumirTXT);

function consumirTXT(){
    fetch('texto.txt')
        .then(function(res){
            return res.text();
        })
        .then(function(nombres){
            document.getElementById('datos').innerHTML = nombres;
        })
        .catch(function(error){
            console.log(error);
        });
}
