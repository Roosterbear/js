const my_object = {
  description: 'Video Game',
  price: 500,
  year: 2000
}

// JSON.stringify pass the content of an object to String
const game = JSON.stringify(my_object);

console.log(game);
console.log("The variable passed by JSON.stringify is the type of: "+typeof(game));