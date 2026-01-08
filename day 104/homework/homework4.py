try:
    a = int(input("enter first number: "))
    b = int(input("enter your second number: "))
    result = a / b
    print(result)
except ZeroDivisionError:
    print("cant divide number by 0.:")