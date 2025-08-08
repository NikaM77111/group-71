# შექმენით ფუნქცია სახელად - filter_positives, რომელიც არგუმენტად მიიღებს სიას,
#  თქვენი მიზანი იქნება არგუმენტად გადაცემული სიიდან მხოლოდ დადებითი რიცხვები დააბრუნოთ.

def filter_positives(numbers):
    result = []
    for num in numbers:
        if num > 0:
            result.append(num)
    return result