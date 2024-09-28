const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailValidation = document.getElementById("email-validation");
const passwordValidation = document.getElementById("password-validation");
const successMessage = document.getElementById("success-validation");
const formSubmitButton = document.getElementById("form-submit");
const validateEmail = () => {
    const emailValue = emailInput.value;
    if (emailValue.length > 3 && emailValue.includes('@') && emailValue.includes('.')) {
        emailValidation.style.display = "none";
        return true;
    } else {
        emailValidation.style.display = "block";
        return false;
    }
}
const validatePassword = () => {
    const passwordValue = passwordInput.value;
    if (passwordValue.length > 8) {
        passwordValidation.style.display = "none";
        return true;
    } else {
        passwordValidation.style.display = "block";
        return false;
    }
}
emailInput.addEventListener("input", (event) => {
    if (validateEmail() && validatePassword()) {
        successMessage.style.display = "block";
    } else {
        successMessage.style.display = "none";
    }
});
passwordInput.addEventListener("input", (event) => {
    if (validatePassword() && validateEmail()) {
        successMessage.style.display = "block";
    } else {
        successMessage.style.display = "none";
    }
});
formSubmitButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (validateEmail() && validatePassword()) {
        const confirmSubmission = confirm("Are you sure to submit ?");
        if (confirmSubmission) {
            alert("Successful signup!");
        } else {
            emailInput.value = "";
            passwordInput.value = "";
            window.location.reload();
        }
    } else {
        window.scrollTo(0, 0);
    }
})