list_of_tuples = []
for i in range(2):
    input_name = input("Enter your name: ")
    input_age = int(input("Enter your age: "))
    input_score = int(input("Enter your score: "))
    list_of_tuples.append((input_name, input_age, input_score))
list_of_tuples.sort(key=lambda x: x[2])
print(list_of_tuples)
