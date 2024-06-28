// js7.js

function checkPasswordMatch() {
    // Récupérer les valeurs des champs password et confirm password
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Vérifier si les mots de passe correspondent
    if (password === confirmPassword) {
        alert("Passwords match!");
    } else {
        alert("Passwords do not match. Please try again.");
    }
}
