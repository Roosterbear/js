/*
    const MAX = 10;
    let amount = 0;
    while (amount++ < MAX) {
      let sum = amount;
    }
    console.log(sum);
*/

/*
console.log(x)
const x = 0;
*/

/*
    const MAX = 5;

    for (var i = 0; i < MAX; i++) {
      setTimeout(function() {
        console.log(i);
      });
    }

    for (let i = 0; i < MAX; i++) {
      setTimeout(function() {
        console.log(i);
      });
    }
*/


// TODO: Fix this for loop by scoping the variable i.
// Do not use a IIFE to get to pass.
// HINT - remember how let and const work with block scope.
/*
const userIds = [1, 2, 3];
const users = [];

for (var i = 0; i < userIds.length; i++) {
    fun(function() {
        users.push({
            userId: userIds[i]
        });
    });
}

function fun(cb) { setTimeout(cb) };

*/
