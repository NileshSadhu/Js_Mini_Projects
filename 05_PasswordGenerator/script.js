const generateBtn = document.getElementById("generateBtn");
const passwordField = document.getElementById("passwordField");

generateBtn.addEventListener('click', function () {
    let number = "1234567890";
    let symbol = "!@#$%^&*()_+=-";
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    let beta = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let password = number + symbol + alpha + beta;
    let pass = "";

    while (pass.length <= 12) {
        pass += password[Math.floor(Math.random() * password.length)];
    };

    passwordField.value = pass;
    console.log(pass);
})