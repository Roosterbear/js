let done = true

const isItDoneYet = new Promise((resolve, reject) =>{
    
    if(done){
        const workDone = 'The promise has finished yet'
        resolve(workDone)
    }else{
        const notYet = 'Im on it'
        reject(notYet)
    }
})

// Consume the promise

const check = ()=>{
    
    isItDoneYet
        .then(ok=>console.log(ok))

        .catch(err=>console.log(err))
}

check()
