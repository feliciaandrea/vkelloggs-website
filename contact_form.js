document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const formResponse = document.getElementById("formResponse");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        document.getElementById('firstNameError').textContent = '';
        document.getElementById('lastNameError').textContent = '';
        document.getElementById('emailError').textContent = '';
        document.getElementById('phoneNumberError').textContent = '';
        document.getElementById('messageError').textContent = '';

        let isValid = true;

        const firstName = document.getElementById('firstName').value.trim();
        if (!firstName || !containsOnlyLettersAndSpaces(firstName)) {
            document.getElementById('firstNameError').textContent = 'Please enter a valid first name.';
            isValid = false;
        }

        const lastName = document.getElementById('lastName').value.trim();
        if (!lastName || !containsOnlyLettersAndSpaces(lastName)) {
            document.getElementById('lastNameError').textContent = 'Please enter a valid last name.';
            isValid = false;
        }

        const email = document.getElementById('email').value.trim();
        if (!email.endsWith('@gmail.com')) {
            document.getElementById('emailError').textContent = 'Please enter a valid email ending with @gmail.com.';
            isValid = false;
        }

        const phone = document.getElementById('phone').value.trim();
        if (!containsOnlyNumbers(phone)) {
            document.getElementById('phoneNumberError').textContent = 'Please enter a valid phone number containing only numbers.';
            isValid = false;
        }

        const message = document.getElementById('message').value.trim();
        if (!message || countWords(message) < 5) {
            document.getElementById('messageError').textContent = 'Please enter a message with at least 5 words.';
            isValid = false;
        }

        if (isValid) {
            formResponse.textContent = "Thank you for your message. We will get back to you soon.";
            formResponse.style.color = "#FF7070";
            form.reset();
        } else {
            formResponse.textContent = "Please fill out all required fields";
            formResponse.style.color = "#FF7070";
        }
    });

    function containsOnlyLettersAndSpaces(str) {
        for (let i = 0; i < str.length; i++) {
            let charCode = str.charCodeAt(i);
            if (!(charCode >= 65 && charCode <= 90) && !(charCode >= 97 && charCode <= 122) && charCode !== 32) {
                return false;
            }
        }
        return true;
    }

    function containsOnlyNumbers(str) {
        for (let i = 0; i < str.length; i++) {
            if (!(str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57)) {
                return false;
            }
        }
        return true;
    }

    function countWords(str) {
        return str.trim().split(/\s+/).length;
    }
});