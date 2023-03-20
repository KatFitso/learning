from turtle import Turtle
FONT = ('courier', 20, 'normal')
ALIGNMENT = 'center'

FONT = ("Courier", 24, "normal")

class Scoreboard(Turtle):
    def __init__(self):
        super().__init__()
        self.penup()
        self.goto(0, 280)
        self.score = 1
        self.write(f"Level: {self.score}", False, ALIGNMENT, FONT)
    
    def scored(self):
        self.score += 1
        self.clear()
        self.write(f"Level: {self.score}", False, ALIGNMENT, FONT)
