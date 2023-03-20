import pandas
import turtle
IMAGE = 'day25-CSV/us-states-game-start/blank_states_img.gif'
CSVPATH = 'day25-CSV/us-states-game-start/50_states.csv'
OUTPATH = 'day25-CSV/us-states-game-start/states_to_learn.csv'

screen = turtle.Screen()
screen.title('Guess the states')
screen.addshape(IMAGE)
turtle.shape(IMAGE)

data = pandas.read_csv(CSVPATH)
all_states = data.state.to_list() 

answered = []
while len(answered) < 50 :
  answer_state = screen.textinput(title=f"Guess the State. {len(answered)}/50", prompt="Guess your next state").title()
  if answer_state == 'Exit':
    missingStates = []
    for state in all_states:
      if state not in answered:
        missingStates.append(state)
    newData = pandas.DataFrame(missingStates)
    newData.to_csv(OUTPATH)

    break
  if answer_state in all_states and answer_state not in answered:
    answered.append(answer_state)
    t = turtle.Turtle()
    t.hideturtle()
    t.penup()
    state_data = data[data.state == answer_state]
    t.goto(int(state_data.x), int(state_data.y))
    t.write(answer_state)  

screen.exitonclick()