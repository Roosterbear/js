/*
const cantidades = [200,300,1000,1500,4000,7200,150,300];
const resultado = cantidades.filter(cantidad=>cantidad>999);
console.log(resultado);
*/


const alumnos = [
    {nombre:'Luis',aceptado:true},
    {nombre:'Juan',aceptado:false},
    {nombre:'Carmen',aceptado:false},
    {nombre:'Ana',aceptado:false},
    {nombre:'Isabel',aceptado:true}
]

const aceptados = alumnos.filter(alumno=>alumno.aceptado);

console.log(aceptados);