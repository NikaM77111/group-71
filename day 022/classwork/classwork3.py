my_height = 182
user_height = int(input("Enter your height (in cm): "))

if my_height > user_height:
    print("I'm taller than you.")
elif user_height > my_height:
    print("You're taller than me")
else:
    print("We have equal heights")
