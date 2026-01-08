def check_password(password):
    try:
        if len(password) < 8:
            raise Exception("Password too short")

        if " " in password:
            raise Exception("Password cannot contain spaces")

        return "Password accepted"

    except Exception as e:
        return e.args[0]
