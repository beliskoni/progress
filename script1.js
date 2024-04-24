const country = document.getElementById ('country');
const city = document.getElementById ('city');
const weekday = document.getElementById ('weekday');
const cloudy = document.getElementById ('cloudy');
const temp = document.getElementById ('temp');
const deg = document.getElementById ('deg');
const timeEl = document.getElementById('time');

day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday'];

setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12hrformat = hour >= 13 ? hour %12: hour
    const minutes = time.getMinutes();
    const ampm = hour >=12 ? 'PM' : 'AM'

    timeEl.innerHTML = hoursIn12hrformat + ':' + minutes+ ' ' + `<span id="am/pm">${ampm}</span>`

    // weekday.innerHTML = weekday[day];





},1000 );











