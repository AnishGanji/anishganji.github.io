function myFunction() {
    document.getElementById('click').innerHTML=Date()
}

const status = document.querySelector('.status');
const status2 = document.querySelector('.status2');

let online = () => {
    status.innerHTML = 'Hi I am Coder'
    status2.innerHTML = 'Touch my Image'
    status.style.backgroundColor = 'none'
    status2.style.backgroundColor = 'none'
}

let offline = () => {
   status.innerHTML = 'No Connection'
   status.style.backgroundColor = '#e02401'

   status2.innerHTML = 'No Connection'
   status2.style.backgroundColor = '#e02401'
};

if (window.navigator.onLine) {
    online()
} else {
    offline
}

window.addEventListener('offline', offline);
window.addEventListener('online', online);