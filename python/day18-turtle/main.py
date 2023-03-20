import random

from turtle import Turtle, Screen, colormode
circles = int(input("how many cicles do you want?"))

timmy = Turtle()
screen = Screen()
colormode(255)
timmy.pensize(1)
timmy.speed(0)


def genColor () :
  return (
    random.randint(0, 255),
    random.randint(0, 255),
    random.randint(0, 255),
  )

for i in range(circles) :
  timmy.pencolor(genColor())
  timmy.forward(5)
  timmy.circle(50)
  timmy.left(360/circles)

screen.exitonclick()

tuple1 = (1, 2, 3)

timmy.color(1, 2, 3)

timmy.color(tuple1)
timmy.color( (1, 2, 3) )
