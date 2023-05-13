const heroes = [
  {
    id:1,
    name:'Batman',
    owner:'DC',
  },
  {
    id:2,
    name:'Spiderman',
    owner:'Marvel',
  },
  {
    id:3,
    name:'Superman',
    owner:'DC',
  },
  {
    id:4,
    name:'Ironman',
    owner:'Marvel',
  },
];

const getHeroes = owner=>{
  return heroes.filter(heroe=>heroe.owner===owner);
}


console.log(getHeroes('DC'));
