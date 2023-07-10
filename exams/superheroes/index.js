    // From a superheroes object:
    // 1.- Make a function that accept a name. Seek if the heroe exists.
    // 2.- Make a function that receives an array of names and seek if heroes exist.
    // 3.- In both cases, display info if the superehero exists.
    
    
    const superheroes = {
      'Ironman': {
          realName: 'Tony Stark',
          powers: ['Advanced Tech', 'Air mobility'],
          team: 'Avengers'
      },
      'Captain America': {
          realName: 'Steve Rogers',
          powers: ['Superhuman strength', 'Outstanding agility and reflexes'],
          team: 'Avengers'
      },
      'Thor': {
          realName: 'Thor Odinson',
          powers: ['Mjolnir', 'Wind and Thunder'],
          team: 'Avengers'
      },
      'Spiderman': {
          realName: 'Peter Parker',
          powers: ['Balance', 'Sticky spiderwebs', 'Spider sense'],
          team: 'Avengers'
      },
      'Hulk': {
          realName: 'Bruce Banner',
          powers: ['Superhuman strength', 'Invulnerability'],
          team: 'Avengers'
      },
      'Superman': {
          realName: 'Clark Kent',
          powers: ['Superhuman strength', 'Can Fly', 'Lasers'],
          team: 'Justice League'
      },
      'Batman': {
          realName: 'Bruce Wayne',
          powers: ['Advanced Tech', 'Super force', 'Intelligence'],
          team: 'Justice League'
      },
      'Wonder Woman': {
          realName: 'Diane Prince',
          powers: ['Superhuman strength', 'Inmortality', 'Regenerative healing factor'],
          team: 'Justice League'
      },
      'Flash': {
          realName: 'Barry Allen',
          powers: ['Speed force', 'Accelerate time', 'Time traveler'],
          team: 'Justice League'
      }
  };
   
   
// ################################################################

function showHero(hero){
   
    if(hero in superheroes){
        const info = superheroes[hero];
        console.log(`####### ${hero} #######`);
        console.log(`Real name: ${info.realName}`);
        console.log(`Powers: ${info.powers.join(', ')}`);
        console.log(`Team: ${info.team}`);
        console.log(``);
    }else{
        console.log(`There are not data from ${hero.toUpperCase()}`);
        console.log(``);
    }
}


function showHeroes(heroes){
    heroes.forEach(hero=>{
        showHero(hero);
    });
}


showHero('Batman');
showHero('Ronin');
showHeroes(['Flash', 'Ironman', 'Riddler', 'Wonder Woman', 'Captain America', 'Joker']);