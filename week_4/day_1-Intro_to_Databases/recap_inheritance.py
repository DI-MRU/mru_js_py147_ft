students_list = []

student_1 = {
    "name": "Jessie",
    "gender": "Prefer not to say"
}

student_2 = {
    "name": "Triscia",
    "gender": "Gender neutral"
}


students_list.append(student_1)
students_list.append(student_2)

print(students_list)
# for i in range(len(students_list)):
    # print(students_list[i].__dict__)

def say_gender(student):
    print(f"{student["name"]} says gender is {student["gender"]}")

say_gender(student_1)

class Computer():

    def __init__(self, price):
        self.name = "Apple Computer" # public
        self.price = price
        self.__max_price = 900 # private
        self.__max_discount = 50 # private

    def change_price(self, new_price):
        if (new_price > self.__max_price):
            self.price = self.__max_price
        else:
            self.price = new_price

    def display_info(self):
        print(f"{self.name} has price {self.price}")

pc_1 = Computer(200)
print(f"{pc_1.name}")
pc_1.display_info()
pc_1.change_price(5000)
pc_1.display_info()
pc_1.change_price(500)
pc_1.display_info()

class Student(object):
    def __init__(self, name, gender):
        self.name = name
        self.gender = gender

    def say_gender(self):
        print(f"{self.name} says gender is {self.gender}")

    def display_information(self):
        self.say_gender()

student_a = Student("Jessie A", "Prefer not to say")
# student_a.say_gender()
student_a.display_information()

class FullTimeStudent(Student):
    def __init__(self, name, gender):
        super().__init__(name, gender)
        self.course_type = "Full-time"

    def display_information(self, random): # Polymorphism as arguments changed
        super().display_information() # Inheritance, inherited the definition from the class Student
        print(f"{self.name}'s course type is {self.course_type}") # Polymorphism as new info displayed
        print(f"{random}") # Polymorphism as new info displayed

student_b = FullTimeStudent("Jessie B", "Prefer not to say")
# student_b.say_gender()
student_b.display_information("slkdfhjlksdjflsdkj")