/* This is a basic Callback*/

// Callback is a function that we pass like parameter
const doSomething = callback =>{
    const result = 'I am a normal callback...'
    // We pass a value to the function
    callback(result)
}

// Exec the function that contains the callback
doSomething(result=>{
    console.log(result)
})

/* ------------------------------------------- */

/* This is a callback with different names
   just to show thet anyway works
*/

const doOtherThing = callback_or_whatever =>{
    callback_or_whatever('This really does not matter, anyway works !!')
}

doOtherThing(the_name_you_like=>{
    console.log(the_name_you_like)
})