class Person{
  constructor(name){
    this._name = name;
  }

  get name(){
    return this._name;
  }

  saludar(){
    return 'Hola mundo';
  }
}

let persona = new Person('Luis');
console.log(persona.saludar);