var_1 = "Jessie"

def print_var(variable):
    print(f"The variable is: {variable}")

print_var(var_1)

class Person(object):
    def __init__(self, first_name, role, gibberish, score=50):
        self.first_name = first_name
        self.role = role
        self.gibberish = gibberish
        self.score = score
        print(f"Hello {self.first_name}")

    def speak_gibberish(self):
        print(f"{self.first_name}({self.role}): {self.gibberish}")

    def print_score(self, punctuation="."):
        print(f"The score of {self.first_name} is {self.score}{punctuation}")

roupeesh = Person("Roupeesh", "Student", "sldifysidfusdfusodnif", 80)
vincent = Person("Vincent", "Instructor", "ghsdgosidhgkgj")
vashist = Person("Vashist", "Student", "34645645")
jessie = Person("Jessie", "Student", "457354745", 80)

print(roupeesh)
print(vincent)
print(vashist)
print(jessie)

roupeesh.speak_gibberish()
vincent.speak_gibberish()
vashist.speak_gibberish()
jessie.speak_gibberish()

vashist.speak_gibberish()
vincent.speak_gibberish()
roupeesh.speak_gibberish()
jessie.speak_gibberish()

vincent.print_score("!")
jessie.print_score(punctuation="???")

print(vashist.score)

class Dog():
    # Initializer / Instance Attributes
    def __init__(self, name_of_the_dog):
        print("A new dog has been initialized !")
        print("His name is", name_of_the_dog)
        self.name = name_of_the_dog

    def bark(self):
        print("{} barks ! WAF".format(self.name))   

    def rename(self, new_name):
        self.name = new_name

shelter_dog = Dog("Rex")
shelter_dog.bark()
print(shelter_dog)

shelter_dog.rename("Bob")
shelter_dog.bark()
print(shelter_dog)