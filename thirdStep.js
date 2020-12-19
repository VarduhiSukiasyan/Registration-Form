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
        document.write("Congrats! the registration was successful")
    }
}

function validateCardNumber() {
    let cardType = document.getElementById("divLogo");
    let str = document.getElementById('cardNumber').value;

    if (str.startsWith("4")) {
        console.log(str);
        let cardLogo = document.createElement("img");
        cardLogo.className = "logo";
        cardLogo.src = "images/Visa-Logo.png";
        cardType.appendChild(cardLogo);
    }
    if (str.startsWith("5")) {
        let cardLogo = document.createElement("img");
        cardLogo.className = "logo";
        cardLogo.src = "images/mastecard-logo.png";
        cardType.appendChild(cardLogo);
    }
    if (str === "") {
        cardType.removeChild(cardType.childNodes[3]);
    }

    str = str.replace(/\s/g, '');
    if (str.length % 4 == 0) {
        document.getElementById('cardNumber').value += " ";
    }
    if (str.length > 15) {
        cardNumber.disabled = true;
    }
    if (str.trim() !== "") {
        if (!isNaN(Number(str.trim()))) {
            cardNumber.className = "cardNumber";
        } else {
            cardNumber.className = "invalidCardNumber";
        }
    } else {
        cardNumber.className = "cardNumber";
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
    let today = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`
    if (cardDate.value < today || cardDate.value === "") {
        cardDate.className = "invalidDate"
    } else {
        cardDate.className = "date"
    }
}