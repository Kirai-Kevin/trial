// document.getElementById('signUpBtn').addEventListener('click', function() {
//     window.location.href = 'https://nandomoreira-tic-tac-toe.netlify.app/';
// });

document.getElementById('signInBtn').addEventListener('click', function() {
    window.location.href = '/signIn.html';
});


document.addEventListener("DOMContentLoaded", function() {
    const signUpBtn = document.getElementById("signUpBtn");
    const nameField = document.getElementById("nameField").querySelector("input");
    const emailField = document.querySelector('input[type="email"]');
    const passwordField = document.querySelector('input[type="password"]');

    this.pictureInPictureElement;signUpBtn.addEventListener("click", function() {
        const username = nameField.value;
        const email = emailField.value;
        const password = passwordField.value;

        if (username.trim() === "" || email.trim() === "" || password.trim() === "") {
            alert("Please fill in all fields.");
            return;
        }

        const user = {
            username: username,
            email: email,
            password: password
        };

        localStorage.setItem("user", JSON.stringify(user));

        window.location.href = "./index.html";
    });
});

if (typeof localStorage !== 'undefined'){
    console.log("It is available");
} else {
    console.log("It is not available");
}