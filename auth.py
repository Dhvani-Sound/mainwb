from firebase_config import auth

def signup(email, password):
    try:
        user = auth.create_user_with_email_and_password(email, password)
        print("✅ Signup successful! User ID:", user['localId'])
        return user
    except Exception as e:
        print("❌ Signup Error:", e)
        return None

def login(email, password):
    try:
        user = auth.sign_in_with_email_and_password(email, password)
        print("✅ Login successful!")
        return user
    except Exception as e:
        print("❌ Login Error:", e)
        return None
