
let date = new Date();
const day = date.getDay();

const Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
console.log(Days[day]);

// document.getElementById("showDay").innerText = Days[day];

let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

if (hour > 12) {
    period = "PM";
} else {
    period = "AM";
}


var time = `${hour} : ${minutes} : ${seconds} ${period}`;
console.log(time); 