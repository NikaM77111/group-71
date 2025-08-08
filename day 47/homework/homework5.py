def filter_vowels(text):
    vowels = "აეიოუAEIOUaeiou"
    result = ""
    for char in text:
        if char in vowels:
            result += char
    return result
