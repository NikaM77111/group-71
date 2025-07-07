alphabet ="abcdefghijklmnopqrstuvwxyz"

first_5 = alphabet [:5]
last_5  = alphabet [:-5]

#reversed
revers_first = first_5 [-1::]
revers_last = last_5 [::-1]

#connect
result = revers_first + revers_last 

print(result)