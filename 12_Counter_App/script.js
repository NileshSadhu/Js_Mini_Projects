
const dec = document.getElementById("decrement");
const inc = document.getElementById("increment");
const reset = document.getElementById("reset");
const number = document.getElementById("showNo");

inc.addEventListener('click', () => {
    let currentNumber = parseInt(number.textContent);
    let newNumber = (currentNumber + 1).toString();
    number.textContent = newNumber;
})

reset.addEventListener('click', () => {
    number.textContent = "0";
})

dec.addEventListener('click', () => {
    let currentNumber = parseInt(number.textContent);
    let newNumber = (currentNumber - 1).toString();
    number.textContent = newNumber;
})