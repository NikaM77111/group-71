def arithmetic_mean(numbers):
    if len(numbers) == 0:
        return 0  
    total = 0
    for number in numbers:
        total += number
    return total / len(numbers)
