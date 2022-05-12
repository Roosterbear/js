/* This is a basic Callback*/

const doSomething = callback =>{
    const result = '...'
    callback(result)
}

doSomething(result=>{
    console.log(result)
})