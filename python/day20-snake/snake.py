from turtle import Turtle

UP = 90
DOWN = 270
LEFT = 180
RIGHT = 0

class Snake :
  def __init__(self) :
    self.snake = []
    self.createSnake()
    self.heading = 0
    self.head = self.snake[0]

  def moveUp(self):
    if(self.heading != DOWN) :
      self.heading = UP

  def moveRight(self):
    if self.heading != LEFT :
      self.heading = RIGHT

  def moveDown(self):
    if self.heading != UP :
      self.heading = DOWN

  def moveLeft(self):
    if self.heading != RIGHT :
      self.heading = LEFT

  def createSnake(self) :
    for i in range(3) :
      self.addSegment((-20 * i, 0))

  def addSegment(self, pos):
      seg = Turtle()
      seg.color('white')
      seg.shape('square')
      seg.penup()
      seg.goto(pos)
      self.snake.append(seg)
  
  def move(self):
    for i in range(len(self.snake)-1, 0, -1) :
      self.snake[i].goto(self.snake[i-1].pos())
    self.head.setheading(self.heading)
    self.head.forward(20)

  def growSnake(self):
    self.addSegment(self.snake[-1].pos())