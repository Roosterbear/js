/*

We get a Linux absolute path and we have to simplify it.

Rules:
When there are spaces (double bar) or ".", ommit.
When there are "..", delete the last folder.

pathSimplify("/home/");             // Output: /home
pathSimplify("/x/./y/../../z/");    // Output: /z
pathSimplify("/../");               // Output: /
pathSimplify("/home//pruebas/");    // Output: /home/pruebas
 
When there are spaces (double bar) or ".", ommit.
When there are "..", delete the last folder.

*/

function pathSimplify(path){
  let pile = [];

  const parts = path.split('/');

  for(const part of parts){
    if(part==='..'){
      pile.pop();
    }
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
 