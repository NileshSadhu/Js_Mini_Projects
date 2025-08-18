setInterval(() => {

    let date = new Date();
    const day = date.getDay();

    const Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
    console.log(Days[day]);

    document.getElementById("showDay").innerText = Days[day];

    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let period = hour >= 12 ? "PM" : "AM";

    if (hour === 0) {
        hour = 12;
    } else if (hour > 12) {
        hour -= 12;
    }

    var time = `${hour} : ${minutes} : ${seconds} ${period}`;
    document.getElementById("showClock").innerText = time;

}, 1000);