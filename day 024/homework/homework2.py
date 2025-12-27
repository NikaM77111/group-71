# მომხმარებლისგან პაროლის მოთხოვნა
password = input("enter your password: ")

# პაროლის გამეორება სწორი შეყვანამდე
repeat = input("repeat your password: ")

while repeat != password:
    print("password doesnt match, try again.")
    repeat = input("repeat password: ")

print("password is succesfully completed")
