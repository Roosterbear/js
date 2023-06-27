/* 1st scope */
/* --------------------------------------------------------------- */

// We can not declare "number" with var, let or const in this scope
let number = 1;
console.log("From global scope "+number);


if(true){
  /* 2nd scope */
  /* --------------------------------------------------------------- */

  /* This "number" is just for this level */
  const number = 2
  console.log("Value from first level of the block "+number);
  
  if(true){
    /* 3rd scope */
    /* --------------------------------------------------------------- */ 

    /* This "number" is just for this level */
    // If I declare it as var, it will throw an error because we have a global number yet
    let number = 3
    console.log("Value from second level of the block "+number);

  }
}