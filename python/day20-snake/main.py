from turtle import Screen
import time
from snake import Snake
from food import Food
from scoreBoard import ScoreBoard

screen = Screen()
screen.setup(600, 600)
screen.bgcolor('black')
screen.title('Snake Game')
screen.tracer(0)

snake = Snake()
food = Food()
scoreBoard = ScoreBoard()

screen.listen()
screen.onkeypress(snake.moveUp, "w")
screen.onkeypress(snake.moveRight, "d")
screen.onkeypress(snake.moveDown, "s")
screen.onkeypress(snake.moveLeft, "a")

gameOn = True

while gameOn :
  screen.update()
  time.sleep(0.2)
  snake.move()
  
  # Detect collision with food
  if snake.head.distance(food) < 15 :
    food.refresh()
    snake.growSnake()
    scoreBoard.increaseScore()

  # Detect collision with wall
  if (
    snake.head.xcor() > 290
    or snake.head.xcor() < -290
    or snake.head.ycor() > 290
    or snake.head.ycor() < -290
  ) :
    scoreBoard.writeGameOver()
    gameOn = False

  # Detect collision with tail
  for seg in snake.snake[1:] :
    if snake.head.distance(seg) < 10 :
      scoreBoard.writeGameOver()
      gameOn = False



screen.exitonclick()