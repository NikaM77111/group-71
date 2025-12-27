alphabet = "abcdefghijklmnopqrstuvwxyz"

# ამოიღეთ ყოველი მესამე სიმბოლო
every_third = alphabet[::3]

# შებრუნებული სტრინგიდან ამოიღეთ მხოლოდ ყოველი მეორე სიმბოლო
reversed_alphabet = alphabet[::-1]
every_second_reversed = reversed_alphabet[::2]

print("Every third character:", every_third)
print("Every second character of reversed string:", every_second_reversed)
