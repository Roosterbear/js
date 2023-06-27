function Client(name, balance, email){
  this.name = name;
  this.balance = balance;
  this.email = email;
}

Client.prototype.getClient = function(){
  return `The name of the client is: ${this.name} has ${this.balance} and his email is: ${this.email}`
}

const rodrigo = new Client('Rodrigo', 500, 'rod@traffic.com');
console.log(rodrigo.getClient());

/* ---------------------------------------- */

function Company(name, balance, email, www){
  // Let's pass de CONSTRUCTOR from Client to Company
  Client.call(this, name, balance, email);
  this.www = www;
}

// Let's pass the prototypes from Client to Company
Company.prototype = Object.create(Client.prototype);

const mocosoft = new Company('Mocosoft', 59000, 'admin@mocosoft.com', 'mocosoft.com');

// Now we can use the prototype getClient:
console.log(mocosoft.getClient());