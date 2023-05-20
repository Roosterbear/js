const my_object = {
  description: 'Video game',
  price: 500,
  year: 2000
}

// JSON.stringify pass the content of an object to String
const game = JSON.stringify(my_object);

console.log(game);
console.log("La variable pasada por JSON.stringify es del tipo: "+typeof(game));