import turtle 
import random

screen = turtle.Screen()
screen.setup(width=500, height=500)

turtles = []
colors = ['red', 'blue', 'orange', 'green', 'purple', 'pink']

for color in colors :
    tim = turtle.Turtle()
    tim.color(color)
    tim.penup()
    tim.shape('turtle')
    turtles.append(tim)

startingY = 50 * (len(turtles)-1) / 2
for t in range(0, len(turtles)) :
    turtles[t].goto(-200, startingY - 50 * t)

racing = True
userBet = screen.textinput(title="Make your bet", prompt="Which turtle will you vote for? enter a color: ")
winner = ""
while racing :
    for t in turtles :
        t.forward(random.randint(0,5))
        if t.xcor() > 230 :
            racing = False
            winner = t.pencolor()

if userBet == winner :
    print(f"You win! {winner} won!")
else :
    print(f"You lose! {winner} won you loser!")

screen.exitonclick()