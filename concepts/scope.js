
let number = 1;
console.log("Desde scope global "+number);
if(true){
  const number = 2
  console.log("Desde primer nivel de bloque "+number);
  
  if(true){
    // If I declare it as var, it will mark an error because I have a  global number yet
    let number = 3
    console.log("Desde segundo nivel de bloque "+number);

  }
}