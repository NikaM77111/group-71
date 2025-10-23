def count_occurrences(numbers, user_input):
    count = numbers.count(user_input)
    return count

# მაგალითი
numbers = [1, 2, 3, 4, 2, 3, 2, 5]
user_input = int(input("შეიყვანეთ რიცხვი: "))
occurrences = count_occurrences(numbers, user_input)
print(f"რიცხვი {user_input} გამოჩნდება {occurrences} ჯერ.")
