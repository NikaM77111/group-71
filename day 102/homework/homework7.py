car_brands = [
    'BMW', 'Audi', 'Tesla', 'Toyota',
    'Ford', 'Kia', 'Mazda', 'Lexus'
]

short_brands = [brand for brand in car_brands if len(brand) <= 5]

print(short_brands)


