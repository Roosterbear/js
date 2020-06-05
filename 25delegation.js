// Elimina el elemento seleccionado por Delegacion
document.addEventListener('click',terminator);

function terminator(e){
    e.preventDefault;

    //console.log(e.target);
    if (e.target.tagName == 'LI'){
        e.target.remove();
    }else{
        console.log(e.target.classList.contains('interno')?'interno':e.target);
    }
}

//Estilo
/*
 <style>
        .button{
            padding: 15px;
            margin: 10px;
            border: 1px solid #111111;
            text-decoration: none;
            color:tomato;
        }
</style>
*/

//html
/*
<hr>
<h1>Hola mundo</h1>
<h2>Bienvenido</h2>
<label for="myInput">Dame tu nombre: </label>
<input type="text" name="myInput" id="myInput">
 
<label for="myInput">Dame tu nombre: </label>
<input type="text" name="myInput" id="myInput">
<a href="#" class="button" id="cargar">Cargar</a>
<ul id="elementos">
       <li>Primer elemento</li>
       <li>Segundo elemento</li>
       <li>Tercer elemento</li>
       <li>Cuarto elemento</li>
       <li>Quinto elemento</li>
       <li>Sexto elemento</li>
       <li>Septimo elemento</li>
</ul>
<div class="interno">DIV Interno</div>
<div class="row">
       <div class="interno">DIV Interno</div>
       <input type="checkbox" id="opcion"> Comer
       <input type="checkbox" id="opcion"> Bañarme
       <input type="checkbox" id="opcion"> Trabajar
       <hr>
       <input type="radio" name="tipo_solicitud" id="si" checked="checked">Si
       <input type="radio" name="tipo_solicitud" id="no"> no
       <hr><br><br>
       <a href="#" class="button" id="cargar">Cargar</a>
       <div class="api"></div>
   </div>
*/

