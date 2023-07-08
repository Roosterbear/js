const calculator = require('.');

test('Adding 1+2 to test add function...', ()=>{
  const result = calculator.sum(1,2);
  expect(result).toBe(3);
});

test.todo('I will do this, some day...');