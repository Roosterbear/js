// Since we declare 'i' like global, always is the same variable

const outer = function() {
    for(i = 1; i <= 3; i++) {
        console.log('i = '+i);
        console.log('---------');
        inner();
        // Here, 'i' is still 6
        console.log('---------');
        console.log('Now i = '+i);
        // When this 'for' asks for 'i', the result is 6
        // Then we leave and finish
    }
};

const inner = function() {
    // Here it prints 1 to 5 
    for(i = 1; i <= 5; i++) {
        console.log(i);
    }
    // Here 'i' is 6 now, then we leave
};

outer();