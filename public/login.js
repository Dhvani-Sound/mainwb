// Firebase config and initialization
const firebaseConfig = {
    apiKey: "AIzaSyBZIuBhJn8Ww5Dem71CZzDxwoMia0EyEdI",
    authDomain: "Dhvani-Web.firebaseapp.com",
    projectId: "dhvani-web",
    storageBucket: "Dhvani-Web.appspot.com",
    messagingSenderId: "554438627492",
    appId: "Y1:554438627492:web:f277deb1527f51849a1631",
    databaseURL: "https://dhvani-web-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();  // Prevent form from refreshing the page

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Sign in with Firebase Authentication
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('User logged in: ', user.email);

            // Store the user info (optional - if you need to persist it)
            localStorage.setItem("user", JSON.stringify(user));

            // Redirect to dashboard on successful login
            window.location.href = "dashboard.html";
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert('Error: ' + errorMessage);  // Show error message on failed login
        });
});