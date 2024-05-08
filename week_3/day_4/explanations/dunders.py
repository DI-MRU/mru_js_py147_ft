class Person:
    def __init__(self, name, lastName):
        self.name = name
        self.lastName = lastName

    def __repr__(self):
        return f"{self.__class__.__name__} : {self.name} {self.lastName}"

    def __add__(self, other):
        return Person(f"{self.name} {other.name}", f"{self.lastName} {other.lastName}")


father = Person("John", "Doe")
mother = Person("Jane", "Doe")

child = father + mother
