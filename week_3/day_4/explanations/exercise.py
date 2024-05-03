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
file_name = 'week1'
os.makedirs(os.path.join(cwd, file_name))
