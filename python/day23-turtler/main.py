import time
from turtle import Screen
from player import Player
from car_manager import CarManager
from scoreboard import Scoreboard

screen = Screen()
screen.listen()
screen.setup(width=600, height=600)
screen.tracer(0)

cars = CarManager()

scoreboard = Scoreboard()

player = Player()
screen.onkeypress(player.move, "space")

game_is_on = True
while game_is_on:
    cars.addCar()
    cars.move()
    time.sleep(0.1)
    if player.finsihed():
        scoreboard.scored()
        cars.speedUp()
    screen.update()
    if cars.crash(player):
        game_is_on = False
    
