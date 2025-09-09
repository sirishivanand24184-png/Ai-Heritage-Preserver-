// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyDcb2YvAUBfoSwk_-14Qf9ck1c1QWdU3_w",
    authDomain: "lyrical-bolt-470510-g3.firebaseapp.com",
    projectId: "lyrical-bolt-470510-g3",
    storageBucket: "lyrical-bolt-470510-g3.appspot.com", // corrected
    messagingSenderId: "23574584111",
    appId: "1:23574584111:web:2eb92ba4d384718df05fda"
};

// Initialize Firebase (compat version for auth)
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Handle Login
const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            // Redirect to artisan page after login
            window.location.href = "artisans.html"; 
        })
        .catch(error => {
            errorMessage.textContent = error.message;
        });
});

// Optional: handle signup link
document.getElementById('signup-link').addEventListener('click', () => {
    window.location.href = "signup.html";
});

