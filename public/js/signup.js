// Firebase config (same as login.js)
const firebaseConfig = {
    apiKey: "AIzaSyDcb2YvAUBfoSwk_-14Qf9ck1c1QWdU3_w",
    authDomain: "lyrical-bolt-470510-g3.firebaseapp.com",
    projectId: "lyrical-bolt-470510-g3",
    storageBucket: "lyrical-bolt-470510-g3.appspot.com",
    messagingSenderId: "23574584111",
    appId: "1:23574584111:web:2eb92ba4d384718df05fda"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Handle Signup
const signupForm = document.getElementById('signup-form');
const errorMessage = document.getElementById('error-message');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            // Redirect to artisan page or login after signup
            window.location.href = "login.html";
        })
        .catch(error => {
            errorMessage.textContent = error.message;
        });
});

// Optional: link to login page
document.getElementById('login-link').addEventListener('click', () => {
    window.location.href = "login.html";
});
