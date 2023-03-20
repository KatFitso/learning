student_dict = {
    "student": ["Angela", "James", "Lily"], 
    "score": [56, 76, 98],
    "student_nato": []
}

alphabet = []

with open('day26-listComprehension/nato_phonetic_alphabet.csv') as file:
    alphabet = file.read().split('\n')

alphabet = [each.split(',') for each in alphabet]
alphabet = {letter: nato for (letter, nato) in alphabet if letter != 'letter'}

#Looping through dictionaries:
for name in student_dict["student"]:
    student_dict['student_nato'].append([alphabet[letter.upper()] for letter in name])    
    
print(student_dict)

#TODO 1. Create a dictionary in this format:
{"A": "Alfa", "B": "Bravo"}

#TODO 2. Create a list of the phonetic code words from a word that the user inputs.

