// This is a declaration function

function declaration(){
    console.log(`This is a declaration function`)
}

declaration()

// This is a expression function

const expression = function(){
    console.log(`This is a expression function`)
}

expression()

// You can think they both are the same, but...

try{
    anyWhere()
} catch(e){
    console.log(`This function doesn't exists, you moron!!`)
}

function anyWhere(){
    console.log(`You can call the declaration function before created`)
}

try{
    justAfter()
} catch(e){
    console.log(`This function doesn't exists, you moron!!`)
}

const justAfter = function(){
    console.log(`You'll never see this message`)
}

