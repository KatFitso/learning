import tkinter

window = tkinter.Tk()
window.minsize(500,300)

input = tkinter.Entry()
input.grid(row=0, column=1)

inputLabel = tkinter.Label(text='Miles')
inputLabel.grid(row=0, column=2)

equalLabel = tkinter.Label(text='is equal to')
equalLabel.grid(row=1, column=0)

outputLabel = tkinter.Label(text='0')
outputLabel.grid(row=1, column=1)

kmLabel = tkinter.Label(text='Km')
kmLabel.grid(row=1, column=3)

def handleClick():
    outputLabel['text'] = int(input.get()) *  1.609

button = tkinter.Button(text='Calculate', command=handleClick)
button.grid(row=2, column=1)


window.mainloop()