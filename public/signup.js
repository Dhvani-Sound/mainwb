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

// Handle signup form submission
document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();  // Prevent form from refreshing the page

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Sign up with Firebase Authentication
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('User signed up: ', user.email);

            // Store the user info (optional - if you need to persist it)
            localStorage.setItem("user", JSON.stringify(user));

            // Redirect to dashboard on successful signup
            window.location.href = "dashboard.html";
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert('Error: ' + errorMessage);  // Show error message on failed signup
        });
});