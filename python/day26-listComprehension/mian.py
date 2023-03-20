numbers = [1,2,3]
newList = [n+1 for n in numbers]
print(newList)

doubled = [n*2 for n in range(1,5)]
print(doubled)

names = ['alex', 'beth', 'caroline', 'dave', 'elanor', 'freddie']

newNames = [name.upper() for name in names if len(name) >= 5]
print (newNames)