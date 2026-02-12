# #Multiple Level Inheritance

# Multiple Level Inheritance არის კონცეფცია, როდესაც კლასი მემკვიდრეობით იღებს 
# თვისებებს არა პირდაპირი მშობლისგან, არამედ მისი მშობლისგან. ეს არის კლასების
# ჰიერარქიული მემკვიდრეობა, სადაც შვილი კლასი მემკვიდრეობით იღებს სხვა შვილის თვისებებს.

# მაგალითი:
class A:
    def method_A(self):
        print("Method A")

class B(A):
    def method_B(self):
        print("Method B")

class C(B):
    def method_C(self):
        print("Method C")

c = C()
c.method_A()  # Method A
c.method_B()  # Method B
c.method_C()  # Method C
