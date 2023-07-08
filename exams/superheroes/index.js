    /*
     
    Dado un array o un objeto de superhéroes de Marvel, haz un programa que pueda
    mostrar la información de un superheroe.
     
    Y añade una capacidad de buscar la información de varios superhéroes a la vez.
     
    Ejemplo:
    mostrarInformacionSuperheroe('Iron Man');
     
    Salida:
    Nombre real: Tony Stark
    powers: Tecnología avanzada, Movilidad aérea
    team: Avengers
     
    Ejemplo 2: 
    mostrarInformacionSuperheroes([array de nombres]]);
     
    Salida:
    Muestra la información de todos los superheroes
     
    */
     
    // Crear array de objetos de superheroes marvel
    const heroes = {
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

function showHero(name){

}