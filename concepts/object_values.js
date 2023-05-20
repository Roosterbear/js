const other_object = {
  description: 'Video movie',
  price: 100,
  year: 1984,
}

const the_array = Object.values(other_object);

console.log(the_array);

console.log('The value passed by Object values is the type of: '+typeof(the_array));