// Crear un objeto
// De un objeto dado, solo pasar a una funcion el nombre como parametro
// Desestructurar un objeto dentro de otro objeto

const hero = {
    nombre: "Ironman",
    liga: "Avengers",
    real: "Tony",
}

const getNombre = ({nombre})=>{
  return nombre; 
}

console.log(getNombre(hero));  
const returnPerson = ({real})=>{
  return{
    nombre: real,
    date: {
      year: 2023,
      month: "may",
    }
  }
}

const {date} = returnPerson(getNombre(hero));
const {year, month} = date;

console.log(year, month);

