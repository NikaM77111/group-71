minutes = [60, 120, 180, 240, 30]

hours = list(map(lambda minute: minute / 60, minutes)) 
print(hours)