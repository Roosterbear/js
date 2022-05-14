const one_name = 'Luis'
const names = ['Isa', 'Wicho', 'Tony']

const more_names = ['Anastasio','Panchito', 'Jeremias']

// Coping arrays the best way
const new_names = [...names]

// Mixing arrays the best ways
const mix_names = [...names,...more_names]

// Slicing words by letters
const letters = [...one_name]

console.log(new_names)
console.log(mix_names)
console.log(letters)
