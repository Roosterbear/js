const notifyBtn = document.querySelector('#notify');

notifyBtn.addEventListener('click', ()=>{
  Notification
    .requestPermission()
    .then(result=>{
      console.log('the result is: ', result)
    })
});

const launchNotification = document.querySelector('#launch');

launchNotification.addEventListener('click', ()=>{
  if(Notification.permission === 'granted'){
    new Notification('This is the notification', {
      icon: 'birthday-cake.png'
    })
  }
});