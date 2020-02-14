validatePassword = function () {
    var password = document.getElementById("password")
        , confirm_password = document.getElementById("confirm_password");

    if (password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Senhas diferentes!");
    } else {
        confirm_password.setCustomValidity('');
    }

    password.onchange = validatePassword;
    confirm_password.onkeyup = validatePassword;
}