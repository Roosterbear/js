import getHeroe from './getHeroe';


const getHeroeByIdAsync = (id)=>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      const hero = getHeroe(id);
      hero?resolve(hero):reject('No se encontro heroe');
    },2000);
  });
}

getHeroeByIdAsync(9)
  .then(heroe=>console.log('heroe', heroe.name))
  .catch(err=>console.log(err));