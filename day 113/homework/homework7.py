cars = {
    "BMW": 1998,
    "Mrcedes": 2005,
    "Toyota": 1994,
    "Audi": 2015,
    "volkswagen": 2019,
}


Old_years = list(filter(lambda car: car[:1] < 2000, cars.items()))
print(Old_years)