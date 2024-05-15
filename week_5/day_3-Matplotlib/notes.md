# Venv

## How to use Venv for new files

1. Create a new directory for your project
2. Open the terminal and navigate to the directory
3. Run the command `python3 -m venv venv`
4. Activate the virtual environment by running `source venv/bin/activate`
5. Install the required packages using `pip install package_name`
6. Run your python file using `python file_name.py`
7. Deactivate the virtual environment by running `deactivate`

## How to use Venv for existing files

1. Open the terminal and navigate to the directory of your project e.g. day_3-Matplotlib
2. Run the command `source venv/bin/activate`
3. Run your python file using `python file_name.py`
4. Deactivate the virtual environment by running `deactivate`

## Use requirements.text for this venv

1. Run the command `pip freeze > requirements.txt` (no need to freeze it again if you have already done it)
2. To install the packages from the requirements.txt file, run the command `pip install -r requirements.txt`
