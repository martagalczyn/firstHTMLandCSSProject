function validateIsFull() {
    var form = document.forms["reservation"].elements;
    var isFull = true;

    for (var i = 0; i < form.length; i++) {
        if (form[i].value.length == 0) {
            isFull = false;
        }
    }
    document.getElementById('submit').disabled = !isFull;
}

function validateName() {
    var name = document.getElementById("name").value.trim();
    var isValid = /^[A-ZŻŹĆĄŚĘŁÓŃ][a-zzżźćńółęąś]{1,16}\s[A-ZŻŹĆĄŚĘŁÓŃ][a-zzżźćńółęąś]{1,16}$/.test(name);
    var errorText = "Name field should contain two words, that starts with uppercase";

    if (isValid) {
        document.getElementById("name").style.borderColor = "green";
        document.getElementById("nameError").innerHTML = "";
        return true;
    } else {
        document.getElementById("name").style.borderColor = "red";
        document.getElementById("nameError").innerHTML = errorText;
        return false;
    }
}

function validateNumber() {
    var number = document.getElementById("number").value.trim();
    var isValid = /^(5[0]|[1-4][0-9]|[1-9])$/.test(number);
    var errorText = "Number field should contain number from 1 to 50";

    if (isValid) {
        document.getElementById("number").style.borderColor = "green";
        document.getElementById("numberError").innerHTML = "";
        return true;
    } else {
        document.getElementById("number").style.borderColor = "red";
        document.getElementById("numberError").innerHTML = errorText;
        return false;
    }
}

function validateEmail() {
    var userEmail = document.getElementById("email").value.trim();
    var isValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(userEmail);
    var errorText = "E-mail field should contain valid e-mail adress";

    if (isValid) {
        document.getElementById("email").style.borderColor = "green";
        document.getElementById("emailError").innerHTML = "";
        return true;
    } else {
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("emailError").innerHTML = errorText;
        return false;
    }
}

function validateMessage() {
    var message = document.getElementById("message").value.trim();
    var isValid = /.{10,}/.test(message);
    var errorText = "Message field should contain at least 10 characters";

    if (isValid) {
        document.getElementById("message").style.borderColor = "green";
        document.getElementById("messageError").innerHTML = "";
        return true;
    } else {
        document.getElementById("message").style.borderColor = "red";
        document.getElementById("messageError").innerHTML = errorText;
        return false;
    }
}

function clear() {
    document.getElementById("reservation").reset();
    document.getElementById("name").style.borderColor = "initial";
    document.getElementById("number").style.borderColor = "initial";
    document.getElementById("email").style.borderColor = "initial";
    document.getElementById("message").style.borderColor = "initial";
    document.getElementById("submit").style.display = "none"
    document.getElementById("submit").disabled = true;

    setTimeout(function() {
        document.getElementById("submitInfo").innerHTML = "";
    }, 2000);
    document.getElementById("submitInfo").innerHTML = "Your message has been send";
        document.getElementById("submit").style.display = "flex";
    ;

}

function validateForm() {
    var nameValidation = validateName();
    var numberValidation = validateNumber();
    var emailValidation = validateEmail();
    var messageValidation = validateMessage();

    if (nameValidation & numberValidation & emailValidation & messageValidation) {
        clear();
        return true;
    }
    else {
        return false;
    }
}

