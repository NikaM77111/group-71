my_list = [
    10,             # int
    20,             # int
    3.14,           # float
    2.71,           # float
    "hello",        # string
    "world",        # string
    True,           # boolean
    False,          # boolean
    [1, 2],         # list
    [3, 4],         # list
]

# გამოვიტანოთ მხოლოდ Boolean ტიპები:
for i in my_list:
    if type(i) == bool:
        print(i)
