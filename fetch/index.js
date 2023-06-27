let users = [];

fetch('https://reqres.in/api/users')
  .then(data=>data.json())
  .then(user=>{
    users = user.data;
    console.log(users);
  });

  

  // 1.- Add data to DOM
  // 2.- Add a loader