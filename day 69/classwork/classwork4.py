# დაწერეთ ფუნქცია, რომელიც დააბრუნებს True-ს თუ არგუმენტად გადაცემული სტრინგის პირველი და ბოლო ასო ერთმანეთს ემთხვევა


def first_last_same(s):
    if len(s) == 0:
        return False
    else:
        return s[0] == s[-1]
    
print(first_last_same("radar"))
print(first_last_same("hello"))