ith open('./info.txt') as file:
            contents = file.read()
            splitContent = contents.split("\n").split('=')
            print(splitContent)