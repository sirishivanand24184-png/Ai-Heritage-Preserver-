// Firebase config - replace with your project values
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "lyrical-bolt-470510-g3.firebaseapp.com",
    projectId: "lyrical-bolt-470510-g3",
    storageBucket: "lyrical-bolt-470510-g3.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
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
    // Redirect to signup page
    window.location.href = "signup.html";
});
