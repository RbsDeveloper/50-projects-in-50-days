const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');


const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener('click', ()=> {
    const html = document.querySelector('html');

    if(html.classList.contains('dark')){
        html.classList.remove('dark')
        toggle.innerHTML = 'Dark Mode';
    }else {
        html.classList.add('dark');
        toggle.innerHTML = 'Light Mode';
    }
});

function setTime() {
    const time = new Date();
    const hour = time.getHours();
    const hoursForClock = hour % 12;
    const minute = time.getMinutes();
    const second = time.getSeconds();
    const date = time.getDate();
    const day = time.getDay();
    const month = time.getMonth();
    const ampm = hour >=12 ? 'PM' : "AM";

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minute, 0, 59, 0, 360)}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(second, 0, 59, 0, 360)}deg)`;

    timeEl.innerHTML = `${hoursForClock}:${minute <= 9 ? `0${minute}` : minute} ${ampm}`;
    dateEl.innerHTML = `${days[day]}, ${months[month]}<span class="circle">${date}</span>`;
    
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setInterval(setTime, 1000);