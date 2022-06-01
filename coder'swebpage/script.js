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
    const destroy = document.getElementById()
};

if (window.navigator.onLine) {
    online()
} else {
    offline
}

function ClickMe() {
    var x = document.getElementsByClassName("graph")
    x[0].style.display = "none"
}

window.addEventListener('offline', offline);
window.addEventListener('online', online);
