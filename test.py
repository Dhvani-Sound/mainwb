from auth import signup, login

# Test Signup
email = input("Enter your email: ")
password = input("Enter your password: ")
signup(email, password)

# Test Login
email = input("Enter email to login: ")
password = input("Enter password: ")
user = login(email, password)

if user:
    print("User logged in:", user['email'])
