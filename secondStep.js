/////////Step 2/3 //////////
let email = document.getElementById("email");
let pass = document.getElementById("pass");
let repPass = document.getElementById("repPass");
let standard = document.getElementById("standard");
let premium = document.getElementById("premium");

function validateSecondStepFields() {
    validateEmail();
    validatePass();
    validateRadioButton();
    if (email.className !== "invalidEmail" && pass.className !== "invalidPass" &&
        repPass.className !== "invalidPass" && standard.className !== "invalidRadio" &&
        premium.className !== "invalidRadio") {
        // window.location.pathname = '/Registration-Form/thirdStep.html';
        window.location.pathname = window.location.pathname = '/C:/Users/Vardan/Desktop/Registration%20form/thirdStep.html';
    }
}

function validateEmail() {
    if (!(email.value.endsWith("@gmail.com")) && !(email.value.endsWith("@mail.ru")) && !(email.value.endsWith("@inbox.ru"))) {
        email.className = "invalidEmail";
    } else {
        email.className = "email"
    }
}

function validatePass() {
    if (pass.value !== repPass.value || pass.value.trim() === "") {
        pass.className = "invalidPass";
        repPass.className = "invalidPass"
    } else {
        pass.className = "pass";
        repPass.className = "pass";
    }
}

function validateRadioButton() {
    if (!standard.checked && !premium.checked) {
        standard.className = "invalidRadio";
        premium.className = "invalidRadio";
    } else {
        standard.className = "radio";
        premium.className = "radio";
    }
}