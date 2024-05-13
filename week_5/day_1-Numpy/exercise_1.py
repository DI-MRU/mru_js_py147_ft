# 1. Creating NumPy arrays : Create a 1D NumPy array with the numbers from 10 to 20 (inclusive), and print it.
# 2. Array properties: For the array you created, print its number of dimensions (ndim), shape (shape), number of elements (size), and data type (dtype).
# 3. Working with different data types: Now, create a new NumPy array with the same numbers, but this time, make sure the numbers are of float type. Verify by printing the dtype of the new array. Then convert this float array into an array of integers using the astype function, and print the new dtype.
# 4. Array operations: Double each element of the integer array you created (i.e., each element of the array should be multiplied by 2). Print the resulting array.
#
# Note : Use NumPy functions to perform these exercises. It will make your code more efficient and easy to read.

import numpy as np
import random

python_list = list(range(10, 21))
# python_list = [x for x in range(10, 1001)]
array_1d = np.array(python_list)
print(array_1d)
print(array_1d.ndim)
print(array_1d.shape)
print(array_1d.size)
print(array_1d.dtype)

python_list = [random.random() for x in range(10, 16)]
array_1d = np.array(python_list)
print(array_1d)
print(array_1d.ndim)
print(array_1d.shape)
print(array_1d.size)
print(array_1d.dtype)

# Multiply by 100 and keep integers only
array_1d = array_1d * 100
array_1d = (array_1d * 100).astype("int64")
print(array_1d)
print(array_1d.ndim)
print(array_1d.shape)
print(array_1d.size)
print(array_1d.dtype)


# Multiply by 100 and keep integers only
array_1d = (array_1d).astype("float64")
print(array_1d)
print(array_1d.ndim)
print(array_1d.shape)
print(array_1d.size)
print(array_1d.dtype)