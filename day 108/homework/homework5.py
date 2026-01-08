def validate_password(password):

    def has_min_length():
        return len(password) >= 8

    def has_digit():
        return any(char.isdigit() for char in password)

    def has_uppercase():
        return any(char.isupper() for char in password)

    if has_min_length() and has_digit() and has_uppercase():
        return "Password is valid"
    else:
        return "Password is invalid"



print(validate_password("Pass1234"))   # Password is valid
print(validate_password("pass123"))    # Password is invalid
print(validate_password("password"))   # Password is invalid
