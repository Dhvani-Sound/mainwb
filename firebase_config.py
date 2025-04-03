import pyrebase

firebaseConfig = {
    "apiKey": "AIzaSyBZIuBhJn8Ww5Dem71CZzDxwoMia0EyEdI",
    "authDomain": "Dhvani-Web.firebaseapp.com",
    "projectId": "dhvani-web",
    "storageBucket": "dhvani-web.appspot.com",
    "messagingSenderId": "554438627492",
    "appId": "Y1:554438627492:web:f277deb1527f51849a1631",
    "databaseURL": "https://dhvani-web-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

firebase = pyrebase.initialize_app(firebaseConfig)
auth = firebase.auth()
