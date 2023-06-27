const cart = new Set();

cart.add('Guitar');
cart.add('Bass Guitar');
cart.add('Socks');

cart.delete('Socks');

// Delete Set -> cart.clear()

console.log(cart.size);

// Iteretion

cart.forEach(product=>{
  console.log(product);
});



// Deleting duplicate values !!

const values = [1,2,3,4,3,2,1,2,3,4,5,6,7,8,9];

const noDuplicates = new Set(values);

console.log(noDuplicates);

// WeakSet accept only objects