foods = ["salad H", "burger J" , "fish H","fries J","fruits H","nuts H"]

healthy_foods = list(filter(lambda food: "H" in food, foods))

last_chars = [food[-1] for food in healthy_foods]

print (last_chars)