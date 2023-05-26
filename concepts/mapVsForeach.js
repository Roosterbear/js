
const fruits = [
    {name:'kiwi', price:6},
    {name:'blackberries', price:8},
    {name:'apple', price:4},
    {name:'orange', price:2},
    {name:'strawberry', price:3},
    {name:'mango', price:2},
    {name:'pear', price:5},
    {name:'banana', price:1}
]

// If we need to keep the values, have to use 'map'
const fruta1 = fruits.map(function(fruit){
    return `Si quieres ${fruit.name} te cuesta: $${fruit.price}.00 USD [map]`
});

// We use 'forEach' just for temporary values
// 'forEach' doesn't keep values
// We can NOT assign an array to a new variable with forEach
const fruta2 = fruits.forEach(function(fruit){
    return `Si quieres ${fruit.name} te cuesta: $${fruit.price}.00 USD [forEach]`
});

console.log(fruta1);
console.log(fruta2); // Throws undefined

fruits.forEach(function(fruit){
    console.log(`Si quieres ${fruit.name} te cuesta: $${fruit.price}.00 USD [forEach alone]`);
});