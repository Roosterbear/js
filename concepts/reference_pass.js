// Reference pass - we pass an object
// The object changes, it is not a copy

const worker = {
  name: 'Adolfo',
  job: 'Data Analysis'
}

// It will say 'Adolfo'
console.log(worker.name);

// We pass the object itself
// and We change the data inside
const change = (worker)=>worker.name = 'Nepomuseno';

// We use the function
change(worker);

// And now the name has changed!
console.log(worker.name);