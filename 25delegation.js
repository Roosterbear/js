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
