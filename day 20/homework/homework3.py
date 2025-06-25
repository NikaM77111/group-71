stock = 300  # საწყისი მარაგი

while stock >= 2:
    print("You have bought the drink")
    stock -= 2
    print("Remaining stock:", stock)

if stock < 2:
    print("Out of stock")
