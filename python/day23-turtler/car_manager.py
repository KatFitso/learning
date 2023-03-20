from turtle import Turtle
import random

COLORS = ["red", "orange", "yellow", "green", "blue", "purple"]
STARTING_MOVE_DISTANCE = 5
MOVE_INCREMENT = 10

class CarManager:
    def __init__(self):
        self.cars = []
        self.speed = 10

    def move(self):
        print(len(self.cars))
        for car in self.cars:
            car.forward(self.speed)
            if car.xcor() < -400 :
                self.cars.pop(0)

    def addCar(self):
        if random.randint(0,100) < 25:
            self.genNewCar()

    def genNewCar(self):
        car = Turtle()
        car.penup()
        car.shape('square')
        car.shapesize(stretch_wid=1, stretch_len=2)
        car.color(random.choice(COLORS))
        car.setheading(180)
        randx = 400
        randy = random.randint(-225, 225)
        car.goto(randx, randy)
        
        self.cars.append(car)

    def crash(self, turtle):
        for car in self.cars:
            if car.distance(turtle) < 10:
                return True
        return False
    
    def speedUp(self) :
        self.speed += MOVE_INCREMENT
        