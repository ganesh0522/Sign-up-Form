const bind = (selector) => document.querySelector(selector);

const btnSubmit = bind("button");
const inputPassword = bind("#password");
const inputConfirmPassword = bind("#confirm-password");

btnSubmit.addEventListener("click", () => {
    const password = inputPassword.value;
    const confirmPassword = inputConfirmPassword.value;

    if (password !== confirmPassword) {
        inputPassword.setCustomValidity("Passwords do not match");
    }else {
        inputPassword.setCustomValidity("");
    }
})
