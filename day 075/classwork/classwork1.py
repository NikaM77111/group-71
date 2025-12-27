def manual_swapcase(input_str):
    result = ""
    for char in input_str:
        if char.islower():
            result += char.upper()  # პატარა ასოებს ცვლის დიდზე
        elif char.isupper():
            result += char.lower()  # დიდ ასოებს ცვლის პატარააზე
        else:
            result += char  # არ შეიცვლება სხვა სიმბოლოები
    return result

print(manual_swapcase("Hello World!"))  # "hELLO wORLD!"


