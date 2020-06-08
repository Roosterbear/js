/* HTML */
/* 
   <button>Click</button>

    <!-- Esta es la ventanita -->
    <div class="wrapper">
        <div class="ventanita">
            <div class="cerrar">X</div>
            <div class="contenido">
                <h1>Oferta</h1>
                <p>30% de descuento en tu sitio web!</p>
                <a href="#">Quiero saber</a>
            </div><!-- contenido -->
        </div><!-- ventanita -->
    </div><!-- wrapper -->

*/

/* CSS */
/* 
button{
    display: block;
    margin: 20px auto;
    background: #eee;
    color: #333;
    padding: 20px 50px;
}

.wrapper{
    background: rgba(0,0,0,0.5);
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display:none;
}

.ventanita{
    font-family: arial;
    text-align: center;
    width: 100%;
    max-width: 300px;
    margin: 7% auto;
    padding: 30px;
    background: white;
    position: relative;
}

p{
    margin-bottom: 25px;
    margin-top: -15px;
}

.ventanita a{
    background: tomato;
    color: white;
    text-decoration: none;
    padding: 6px 10px;
}

h1{
    font-size: 2.7rem;
    color:#1db954;
    font-weight: bold;
    margin-top: -5px;
}

.cerrar{
    font-size: 1.2rem;
    color:#777777;
    position: absolute;
    top: 10px;
    right: 12px;
    cursor: pointer;
}
*/

const button = document.querySelector('button');
const ventanita = document.querySelector('.wrapper');
const cerrar = document.querySelector('.cerrar');

button.addEventListener('click', ()=>ventanita.style.display='block');
cerrar.addEventListener('click', ()=>ventanita.style.display='none');
ventanita.addEventListener('click', ()=>ventanita.style.display='none');