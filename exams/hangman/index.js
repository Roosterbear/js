/*

Hangman Game

Given a word or phrase, we have to guess, letter by letter the hidden movie.

*/

function hangmanGame(movie){

  // Keep given word
  const _movie = movie.toUpperCase();
  
  // Array with valid letters
  const validLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
                        'L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
  
  // Keep count of wasted letter
  const wastedLetter = [];

  let wordsMovie = _movie.trim();

  const readline = require('readline');

  const rl = readline.createInterface(process.stdin, process.stdout);

  // Welcome and ask for a letter to guess
  console.log('@@@@@ Welcome to the Hangman Game! @@@@@');
  console.log('...Try to guess the hidden movie...');
  console.log('***** You have 5 attempts left *****');
  console.log('');

  
  rl.question('Give me a letter: ', (input) => {
    // El valor ingresado por el usuario estará almacenado en la variable "input"
    console.log('Valor ingresado:', input);
    

    // Cierra la interfaz después de obtener la entrada del usuario
    rl.close();
  });

  //TODO:
  
  //TODO:
  
  //TODO:
  
  //TODO:

  console.log(`The movie was: ${_movie}`);
  console.log(`The movie was: ${wordsMovie}`);

  
}


hangmanGame('Harry Potter and I dont know');