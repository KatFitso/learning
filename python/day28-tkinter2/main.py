from tkinter import *

# ---------------------------- CONSTANTS ------------------------------- #
PINK = "#e2979c"
RED = "#e7305b"
GREEN = "#9bdeac"
YELLOW = "#f7f5dd"
FONT_NAME = "Courier"
WORK_MIN = 25
SHORT_BREAK_MIN = 5
LONG_BREAK_MIN = 20
CHECK_MARK="✓"
reps = 0
marks = ''
timer = None

# ---------------------------- TIMER RESET ------------------------------- # 
def resetTimer():
    global timer
    window.after_cancel(timer)
    canvas.itemconfig(timerText, text=f"00:00")
# ---------------------------- TIMER MECHANISM ------------------------------- # 

def startTimer ():
    global timer
    if timer:
        resetTimer()
    count_down(60*25)

# ---------------------------- COUNTDOWN MECHANISM ------------------------------- # 

def count_down(count):
    global reps, marks, timer

    minutes = int(count / 60)
    if minutes < 10 :
        minutes = f"0{minutes}"
    seconds = count % 60
    if seconds < 10 :
        seconds = f"0{seconds}"
    canvas.itemconfig(timerText, text=f"{minutes}:{seconds}")
    if count > 0 :
        timer = window.after(1, count_down, count - 1)
    if count == 0 :
        reps += 1
        if reps % 8 == 0:
            reps = 0
            titleLabel.config(text="Long Break", fg=RED)
            timer = window.after(1, count_down, 60*20)
        elif reps % 2 == 0:
            marks += CHECK_MARK
            checkMarks.config(text=marks)
            titleLabel.config(text="Break", fg=PINK)
            timer = window.after(1, count_down, 60*25)
        else :
            titleLabel.config(text="Work", fg=GREEN)
            timer = window.after(1, count_down, 60*5)
        
    

# ---------------------------- UI SETUP ------------------------------- #
window = Tk()
window.title('Pomodoro')
window.config(padx=100, pady=50, bg=YELLOW)

titleLabel = Label(text='Timer', bg=YELLOW, fg=GREEN, font=(FONT_NAME, 30, 'bold'))
titleLabel.grid(column=1, row=0)

canvas = Canvas( width=200, height=224, bg=YELLOW, highlightthickness=0)
tomato = PhotoImage(file='day28-tkinter2/tomato.png')
canvas.create_image(100, 112, image=tomato)
timerText = canvas.create_text(100, 130, text='00:00', fill='white', font=(FONT_NAME, 24, 'bold'))
canvas.grid(column=1, row=1)

startButton = Button(text='Start', highlightthickness=0, command=startTimer)
startButton.grid(column=0, row=2)

resetButton = Button(text='Reset', highlightthickness=0, command=resetTimer)
resetButton.grid(column=2, row=2)

checkMarks = Label(text=marks, fg=GREEN, bg=YELLOW)
checkMarks.grid(column=1, row=3)

window.mainloop() 