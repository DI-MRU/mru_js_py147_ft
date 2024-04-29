class Electronic(object): 
    def __init__(self, name, price=50, quality=50):
        self.name = name
        self.price = price
        self.quality = quality
        self.value_index = self.price * self.quality

    def __gt__(self, other):
        if (self.value_index > other.value_index):
            return True
        return False

    def print_information(self):
        print(f"{self.name} costs {self.price} and is of quality {self.quality}")
        print(f"The value index of {self.name} = {self.value_index}")

watch = Electronic("Rolex", 10000000, 100)
second_hand_laptop = Electronic("Apple", 20000, 30)

watch.print_information()
Electronic.print_information(second_hand_laptop)

print(f"{watch.name} is greater than {second_hand_laptop.name}: {watch > second_hand_laptop}")