import heroes from './data/heroes'

const getHeroe = (id)=>{
  return heroes.find(heroe=>heroe.id===id);
}

export default getHeroe;

