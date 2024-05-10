document.addEventListener("DOMContentLoaded", function() {
    const signUpBtn = document.getElementById("signUpBtn");
    const nameField = document.getElementById("nameField").querySelector("input");
    const passwordField = document.querySelector('input[type="password"]');

    signUpBtn.addEventListener("click", function() {
        const username = nameField.value;
        const password = passwordField.value;

        if (username.trim() === "" || password.trim() === "") {
            alert("Please fill in all fields.");
            return;
        }

        const storedUser = localStorage.getItem("user");

        if (storedUser!== null) {
            const user = JSON.parse(storedUser);
            window.location.href = "./index.html";
        } else {
            console.log("No user data found in local storage.");
        }
    });
});

