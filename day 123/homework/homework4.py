class Product:
    def __init__(self, price, quantity):
        self.price = price
        self.quantity = quantity
    
    def total_value(self):
        return self.price * self.quantity


# პროდუქტების სია
products = [
    Product(price=100, quantity=2),
    Product(price=50, quantity=5),
    Product(price=200, quantity=1),
    Product(price=30, quantity=10)
]