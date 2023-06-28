
function myIteration(cart){
  let i = 0;

  return{
    next: ()=>{
      const fin = (i >= cart.length);
      const valor = !fin? cart[i++]:undefined;

      return{
        fin,
        valor
      }
    }
  }
}


const cart = ['product1', 'product2', 'product3'];

const theIteration = myIteration(cart);

console.log(theIteration.next());
console.log(theIteration.next());
console.log(theIteration.next());
console.log(theIteration.next());