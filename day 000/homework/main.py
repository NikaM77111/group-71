from turtle import *


#we want to build a house

#step 1: draw a square
width(7)
color("purple")
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
#end of square

#drawing a door
forward(70)
color("yellow")
begin_fill()
left(90)
forward(120)
right(90)    #height of the door
forward(60)
right(90)
forward(120)
end_fill()


penup()
goto(200,200)
pendown()

color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()

#drawing a windows
penup()
goto(50,100)
pendown()

color("orange")
begin_fill()
right(60)
forward(25)
left(90)
forward(25)
left(90)
forward(25)
left(90)
forward(25)
end_fill()

penup()
goto(150,100)
pendown()

color("orange")
begin_fill()
right(90)
forward(25)
right(90)
forward(25)
right(90)
forward(25)
right(90)
forward(25)
end_fill()


exitonclick()