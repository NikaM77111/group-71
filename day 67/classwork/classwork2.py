# შექმენით ფუნქცია, რომელიც არგუმენტად მიიღებს სტრინგს.
#ფუნქციამ უნდა დაითვალოს მოცემულ სტრინგში ხმოვნების რაოდენობა.

def count_vowels(text):
    vowels = "aeiou"
    count = 0
    for i in text:
        if i in vowels:
            count += 1
    return count
print(count_vowels("hello world"))