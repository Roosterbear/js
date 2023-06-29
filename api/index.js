const btnAPI = document.querySelector('#loadAPI');
btnAPI.addEventListener('click', getData);

function getData(){
  const url = 'https://picsum.photos/list';
  fetch(url)
    .then(answer=>answer.json())
    .then(answer=>console.log(answer))
}