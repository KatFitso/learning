```py
import json

# writing data
with open("data.json", "w") as dataFile
  json.dump(somedata, dataFile, indent=2)

# loading data
with open("data.json", "r") as dataFile
  data = json.load(dataFile) #python dict

# updating data
with open("data.json", "w") as dataFile
  data = json.load(dataFile) #python dict
  data.update(newData)
  json.dump(somedata, dataFile, indent=2)
```
