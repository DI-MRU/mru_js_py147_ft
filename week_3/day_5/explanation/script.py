count = {}
with open("./file.txt", "r+") as file:
    # Read the file line by line
    words = file.read().split() # Read all the file and return it as a list of strings. Then split each word
    # print(words)
    
    # Read only the 5 first characters of the file
    # first_five = file.readlines()[0:5]
    # print(first_five)
    
    # position_5 = file.readlines()[4] # Read the 5th line of the file
    # print(position_5, end="")
        
    for word in words:
        if word in count:
            count[word] += 1
        else:
            count[word] = 1
    
for word, frequency in count.items(): # Find out how many occurences of the names "Darth", "Luke" and "Lea" are in the file
    print(f"{word}: {frequency}")


import json


with open("./file.json", "r") as file:
    family = json.load(file)
    family["children"][0]["favorite_color"] = "blue"
    family["children"][1]["favorite_color"] = "red"


with open("./file.json", "w") as file:
    json.dump(family, file, indent=4, sort_keys=True)


print(family["children"])

