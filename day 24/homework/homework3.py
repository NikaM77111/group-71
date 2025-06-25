# სასურველი რიცხვის შენახვა ცვლადში
secret_number = 7 

# მომხმარებლისგან რიცხვის შეტანა
guess = int(input("ცადე გამოიცნო რიცხვი: "))

# ციკლი სწორი რიცხვის გამოცნობამდე
while guess != secret_number:
    print("Try again")
    guess = int(input("ცადე ხელახლა: "))

print("You guessed the number successfully!")
