# შექმენით ფუნქცია, რომელსაც გადასცემთ ინტეჯერების სიას. ფუნქციამ უნდა დააბრუნოს მეორე ყველაზე მცირე ელემენტი.

def second_smallest(integers):
    sorted_ints = sorted(integers)
    return sorted_ints[1]


print(second_smallest([13,23,89,5]))