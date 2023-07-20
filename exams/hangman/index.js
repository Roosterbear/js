/*

Hangman Game

Given a word, we have to guess, letter by letter the hidden word.

*/

function hangmanGame(movie){
  // Keep given word
  const _movie = movie.toUpperCase();
  
  // Array with valid letters
  const validLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
                        'L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z',]
  
  // Keep count of wasted letter
  const wastedLetter = [];

  let wordsMovie = _movie.trim().replace('H', 'Mr. H');


  //TODO: Welcome and ask for a letter to guess
  console.log('***** Welcome to the Hangman Game! *****');
  console.log('Try to guess the hidden movie...');
  console.log('***** Welcome to the Hangman Game! *****');
  //TODO:
  
  //TODO:
  
  //TODO:
  
  //TODO:

  console.log(`The movie was: ${_movie}`);
  console.log(`The movie was: ${wordsMovie}`);

  
}


hangmanGame('Harry Potter and I dont know');