let cardNumber = document.getElementById("cardNumber");
let fullName = document.getElementById("fullName");
let cvcCode = document.getElementById("CVC");
let cardDate = document.getElementById("date");

function validateCardDetails() {
    validateFullName();
    validateCVC();
    validateDate();
    if (cardNumber.className !== "invalidCardNumber" && fullName.className !== "invalidFullName" &&
        cvcCode.className !== "invalidCVC" && cardDate.className !== "invalidDate") {
        document.write("Congrats! the regicardNumberation was successful")
    }
}

function isNumberKey(event) {
    let charCode = event.charCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

function validateCardNumber() {
    let cardNumberValue = cardNumber.value;

    if (cardNumberValue === "") {
        cardNumber.style.backgroundImage = "url('')";
    }

    if (cardNumberValue.startsWith("4")) {
        cardNumber.style.backgroundImage = "url('images/Visa-Logo.png')";
    } else if (cardNumberValue.startsWith("5")) {
        cardNumber.style.backgroundImage = "url('images/mastecard-logo.png')";
    }

    let cardNumberNewValue = cardNumberValue.split(" ").join("");
    if (cardNumberNewValue.length > 0) {
        cardNumberNewValue = cardNumberNewValue.match(new RegExp('.{1,4}', 'g')).join(" ");
    }
    cardNumber.value = cardNumberNewValue;

    if (cardNumberValue.length <= 19) {
        cardNumber.className = "cardNumber";
    } else {
        cardNumber.className = "invalidCardNumber";
    }
}

function validateFullName() {
    if (fullName.value.length > 100 || fullName.value.trim() === "") {
        fullName.className = "invalidFullName"
    } else {
        fullName.className = "fullName"
    }
}

function validateCVC() {
    if (cvcCode.value.toString().split("").length > 4 || cvcCode.value.toString().split("").length === 0) {
        cvcCode.className = "invalidCVC";
    } else {
        cvcCode.className = "CVC";
    }
}

function validateDate() {
    let cardDate = document.getElementById("date");
    let now = new Date();
    let today = `$ { now.getFullYear() } - $ { now.getMonth() + 1 } - $ { now.getDate() }`
    if (cardDate.value < today || cardDate.value === "") {
        cardDate.className = "invalidDate"
    } else {
        cardDate.className = "date"
    }
}