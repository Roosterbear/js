// Reference pass - we pass an object
// The object changes, it is not a COPY

const worker = {
  name: 'Adolfo',
  job: 'Data Analysis'
}

// It will say 'Adolfo'
console.log(`The worker's name is ${worker.name} and works in ${worker.job}`);

// We pass the object itself
// and We change the data inside
const change = (worker)=>worker.name = 'Nepomuseno';

// We use the function
change(worker);

// And now the name has changed!
console.log(`NOW the worker's name is ${worker.name} and still works in ${worker.job}`);