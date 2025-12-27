def is_prime(number):
    if number <= 1:
        return False
    for i in range(2, int(number ** 0.5) + 1):  # ვამოწმებ მხოლოდ უფრო მცირე რიცხვებს
        if number % i == 0:
            return False
    return True

# მაგალითი
num = int(input("შეიყვანეთ რიცხვი: "))
if is_prime(num):
    print(f"რიცხვი {num} მარტივია.")
else:
    print(f"რიცხვი {num} არ არის მარტივი.")
