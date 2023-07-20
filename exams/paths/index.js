/*

Given a Linux absolute path, get a simplified path.

Rules:
When there are spaces, double bar or ".", ommit.
When there are "..", delete the last folder.

pathSimplify("/home/");             // Output: /home
pathSimplify("/x/./y/../../z/");    // Output: /z
pathSimplify("/../");               // Output: /
pathSimplify("/home//pruebas/");    // Output: /home/pruebas
 
*/


function pathSimplify(path){
  let pile = [];

  const parts = path.split('/');

  // Array Test
  //parts.forEach(p=>console.log(p));

  for(const part of parts){
    // Deleting the last item from the array
    if(part==='..'){
      pile.pop();
    }
    // Adding items while not blank or one dot
    else if(part !== '.' && part !== ''){
      pile.push(part);
    }
  }

  return '/'+pile.join('/');
}

console.log(pathSimplify("/home/"));             // Output: /home
console.log(pathSimplify("/x/./y/../../z/"));    // Output: /z
console.log(pathSimplify("/../"));               // Output: /
console.log(pathSimplify("/home//pruebas/"));    // Output: /home/pruebas

/*

Now, do the same with filter and reduce

*/
