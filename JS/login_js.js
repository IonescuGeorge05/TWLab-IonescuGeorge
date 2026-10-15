let loginForm = document.getElementById("loginForm");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");

loginForm.addEventListener("submit", function(e) {
e.preventDefault();

const email = emailInput.value.trim();
const password = passwordInput.value;
// prenume.nume, optional 2 cifre, apoi @e-uvt.ro (ex: ion.popescu05@e-uvt.ro)
const emailRegex = /^[a-zA-Z]+\.[a-zA-Z]+(\d{2})?@e-uvt\.ro$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{7,}$/;

if (!emailRegex.test(email)) {
alert("Email invalid! Folosește formatul prenume.nume[2 cifre opționale]@e-uvt.ro");
emailInput.focus();
return;
}

if (!passwordRegex.test(password)) {
alert("Parola trebuie să aibă minim 7 caractere și să conțină litere mari, litere mici, cifre și un caracter special.");
passwordInput.focus();
return;
}

alert("Login reușit!");
window.location.href = "home.html";
});
