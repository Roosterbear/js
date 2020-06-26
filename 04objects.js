let robot = {
    fuerza:1,
    color:'gris',
    generacion:'7'
}

let d = new Date();
let year = d.getFullYear();

let persona = new Object();
persona.pelo = 'cafe';
persona.year = 1976;
persona.edad = function(){
    return year-this.year;
},
persona.altura = 1.7;

console.error(robot.color);
console.info(persona.pelo);
