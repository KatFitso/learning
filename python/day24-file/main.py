OUTPUTPATH = 'day24-file/output/'
NAMEPATH = 'day24-file/names.txt'
LETTERPATH = 'day24-file/letterTemplate.txt'

names = []
template = ''

with open(NAMEPATH) as file:
    names = file.read().split('\n') 
    
with open(LETTERPATH) as file:
    template = file.read()
print(names)

for name in names:
    with open(OUTPUTPATH+f"letter_for_{name}.txt", 'w') as file :
        file.write(template.replace('[name]', name))