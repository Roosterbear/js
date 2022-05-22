// #1
// Correct the scope ERROR in sum
const MAX = 5;
let amount = 0;
    
// You have somwthing to do here...

while (amount++ < MAX) {
    let sum = amount;
}

// Uncomment below and look the ERROR
// console.log(sum);

// ----------------------------------

// #2
// Discover WHY we get only number 5 in first loop

for (var i = 0; i < MAX; i++) {
  setTimeout(function() {
    console.log(i);
  });
}

setTimeout(function() {
  console.log('-------------');
});

for (let i = 0; i < MAX; i++) {
  setTimeout(function() {
    console.log(i);
  });
}

