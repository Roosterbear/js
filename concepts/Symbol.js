const nombre = Symbol();
const lastName = Symbol('The last name');

// Empty object
const person = {}

person[nombre] = 'Fernando';
person[lastName] = 'Roosterbear';
person.type = 'Premium';

console.log(person);

