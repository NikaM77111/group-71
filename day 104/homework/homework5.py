try:
    a = int(input("entwr your first number:"))
    b = int(input("enter your second number: "))
    print(a / b)

except ValueError:
    print("please enter number only .")

except ZeroDivisionError:
    print("cannot divide number by 0.")
