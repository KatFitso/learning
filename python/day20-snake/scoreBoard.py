from turtle import Turtle
FONT = ('courier', 20, 'normal')
ALIGNMENT = 'center'
DATAFILE = 'day20-snake/info.txt'

class ScoreBoard (Turtle):
    def __init__(self):
        super().__init__()
        self.data = {}

        with open(DATAFILE) as file:
            contents = file.read()
            contents = contents.split("\n")
            for line in contents:
                line = line.split('=')
                self.data[line[0]] = line[1]

        self.highscore = int(self.data['highscore']) or 0
        self.score = 0
        self.goto(0, 265)
        self.color('white')
        self.writeScore()
        self.hideturtle()

    def writeScore(self) :
        self.write(f"Score = {self.score}", False, ALIGNMENT, FONT)

    def writeGameOver(self) :
        if self.score > self.highscore:
            self.data['highscore'] = self.score
            self.highscore = self.score
            with open(DATAFILE, 'w') as file:
                file.write("")
            with open(DATAFILE, 'a') as file:
                for data in self.data:
                    file.write(f"{data}={self.data[data]}")
        self.penup()
        self.goto(0, 0)
        self.pendown()
        self.write(f"GAME OVER", False, ALIGNMENT, FONT)
    
    def increaseScore(self): 
        self.score += 1
        self.clear()
        self.writeScore()