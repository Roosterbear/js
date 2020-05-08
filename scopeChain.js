var a = 1;
afuera();

function afuera(){
    var b = 2;

    adentro();
    function adentro(){
        var c = 3;
        console.log(a+b+c);
    }
}