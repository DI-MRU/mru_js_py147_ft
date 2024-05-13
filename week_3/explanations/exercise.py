import os

# use official documentation or google to learn how to create the directories
# check if the folders first exist
# 5 directories - 5 days - 2 subfolders
# week1
    # day1
        #lesson
        #homework
    # day2
    # day3
# week2
# week3
# week4
# week5

# create a directory called week1
# inside of week 1, create another directory called day1
# inside of day 1, create two directories called lesson and homework

cwd = os.getcwd()
weeks_folders = ['week1', 'week2', 'week3', 'week4', 'week5'] # also use itertools or range to generate this list more dynamically
days_folders = ['day1', 'day2', 'day3', 'day4', 'day5']
values_folders = ['lesson', 'homework']

for week in weeks_folders:
    print(week)
    for day in days_folders:
        print(day)
        for value in values_folders:
            print(value)

# if os.path.exists(os.path.join(cwd, folder_name)) == False:
#     os.makedirs(os.path.join(cwd, folder_name))
