import numpy as np

# # Create a NumPy array
# array = np.array([1, 2, 3, 4, 5])

# # Perform an operation on the array
# double = array * 2

# print(double)  # Outputs: array([2, 4, 6, 8, 10])

# result = double + 10
# print(result)

# result = result - 5
# print(result)

# result = result / 2
# print(result)

# array_py = [1,2,3,4,5]
# result_py = array_py * 2
# print(result_py)

# # result_py = array_py + 10
# # print(result_py)
# # for i in range(len(array_py)):
# #     array_py[i] += 10
# # print(array_py)
# # result_py = array_py - 5
# # print(result_py)
# # result_py = array_py / 2
# # print(result_py)


# # Create a 1D NumPy array
# array_1d = np.array([1, 2, 3, 4, 5])

# # Check properties of the array
# print(array_1d.ndim)  # Output: 1
# print(array_1d.shape)  # Output: (5,)
# print(array_1d.size)  # Output: 5
# print(array_1d.dtype)  # Output: int64


# # Create a 1D NumPy array
# array_1d = np.array([1, 2, 3, 4, 5, 6, 7])

# # Check properties of the array
# print(array_1d.ndim)  # Output: 1
# print(array_1d.shape)  # Output: (7,)
# print(array_1d.size)  # Output: 7
# print(array_1d.dtype)  # Output: int32

# # Create a 1D NumPy array
# array_1d = np.array([1.5, 2.3, 3, 4.8, 5, 6.2, 7])

# # Check properties of the array
# print(array_1d.ndim)  # Output: 1
# print(array_1d.shape)  # Output: (7,)
# print(array_1d.size)  # Output: 7
# print(array_1d.dtype)  # Output: float64

# # Create a 2D NumPy array
# array_2d = np.array([[1, 2, 3], [4, 5, 6]])

# # Check properties of the array
# print(array_2d.ndim)  # Output: 2
# print(array_2d.shape)  # Output: (2, 3)
# print(array_2d.size)  # Output: 6
# print(array_2d.dtype)  # Output: int32

# # Create a 5D NumPy array
# array_5d = np.array([[[[[1, 2, 3], [4, 5, 6]]]]])

# # [
# #     [
# #         [
# #             [
# #                 [1, 2, 3],
# #                 [4, 5, 6]
# #             ]   
# #         ]
# #     ]
# # ]

# # Check properties of the array
# print(array_5d.ndim)  # Output: 5
# print(array_5d.shape)  # Output: (1, 1, 1, 2, 3)
# print(array_5d.size)  # Output: 6
# print(array_5d.dtype)  # Output: int32

# # Create a 10D NumPy array
# array_10d = np.array([[[[[[[[[[1, 2, 3], [4, 5, 6]], [[5, 6, 3], [4, 7, 6]]]]]]]]]])

# # Check properties of the array
# print(array_10d.ndim)  # Output: 5
# print(array_10d.shape)  # Output: (1, 1, 1, 2, 3)
# print(array_10d.size)  # Output: 6
# print(array_10d.dtype)  # Output: int32
# print(array_10d)

# np_zeros = np.zeros((5, 10))
# print(np_zeros)
# [[0. 0. 0. 0. 0. 0. 0. 0. 0. 0.]
#  [0. 0. 0. 0. 0. 0. 0. 0. 0. 0.]
#  [0. 0. 0. 0. 0. 0. 0. 0. 0. 0.]
#  [0. 0. 0. 0. 0. 0. 0. 0. 0. 0.]
#  [0. 0. 0. 0. 0. 0. 0. 0. 0. 0.]]
# print(np_zeros.dtype)
# float64

# float_array = np_zeros.astype('float64')
# print(float_array.dtype)
# integer_array = float_array.astype('int64')
# print(integer_array)
# print(integer_array.dtype)
# float_array = integer_array.astype('float64')
# print(float_array)
# print(float_array.dtype)

# modified_array = np_zeros
# print(modified_array)
# modified_array = modified_array + 2
# print(modified_array)
# modified_array[1][2] = 5
# print(modified_array)
# modified_array[4][9] = 10 # Change last value to a 10, caution, this is hardcoded for a 5x10 array
# print(modified_array)
# modified_array[-1][-1] = 20 # Change last value to a 20
# print(modified_array)
# print(modified_array.shape)
# # When reshaping, total number of values must remain the same
# transformed_array = modified_array.reshape((10, 5))
# print(transformed_array)
# print(transformed_array.shape)
# transformed_array = modified_array.reshape((2, 25))
# print(transformed_array)
# print(transformed_array.shape)
# transformed_array = modified_array.reshape((2, 5, 5))
# print(transformed_array)
# print(transformed_array.shape)

# Create a 3D array
array_3d = np.array([[[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]], [[13, 14, 15], [16, 17, 18], [19, 20, 21], [22, 23, 24]]])

print(array_3d)
# Output:
# [[[ 1  2  3]
#   [ 4  5  6]
#   [ 7  8  9]
#   [10 11 12]]

#  [[13 14 15]
#   [16 17 18]
#   [19 20 21]
#   [22 23 24]]]

# Access the value 13
print(array_3d[1, 0, 0])


# # Create a 4D array
# array_4d = np.array([[[[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]], [[13, 14, 15], [16, 17, 18], [19, 20, 21], [22, 23, 24]], [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]], [[13, 14, 15], [16, 17, 18], [19, 20, 21], [22, 23, 24]]]])

# print(array_4d)
# # Output:
# # [[[[ 1  2  3]
# #    [ 4  5  6]
# #    [ 7  8  9]
# #    [10 11 12]]

# #   [[13 14 15]
# #    [16 17 18]
# #    [19 20 21]
# #    [22 23 24]]

# #   [[ 1  2  3]
# #    [ 4  5  6]
# #    [ 7  8  9] <-- Find this 8
# #    [10 11 12]]

# #   [[13 14 15]
# #    [16 17 18]
# #    [19 20 21]
# #    [22 23 24]]]]

# # Access the value 8
# print(array_4d[0, 2, 2, 1])


# # Create a Python list with 50 values from 1-50 inclusive
# python_list = []
# for i in range(1, 51):
#     python_list.append(i)
# print(python_list)
# # Create a 5D array: 2x5x1x5x1
# array_5d = np.array(python_list).reshape(2, 5, 1, 5, 1)

# print(array_5d)
# # Output:
# # [[[[[ 1]
# #     [ 2]
# #     [ 3]
# #     [ 4]
# #     [ 5]]]


# #   [[[ 6]
# #     [ 7]
# #     [ 8]
# #     [ 9]
# #     [10]]]


# #   [[[11]
# #     [12]
# #     [13]
# #     [14]
# #     [15]]]


# #   [[[16]
# #     [17]
# #     [18]
# #     [19]
# #     [20]]]


# #   [[[21]
# #     [22]
# #     [23]
# #     [24]
# #     [25]]]]



# #  [[[[26]
# #     [27]
# #     [28]
# #     [29]
# #     [30]]]


# #   [[[31]
# #     [32]
# #     [33]
# #     [34]
# #     [35]]]


# #   [[[36]
# #     [37]
# #     [38]
# #     [39]
# #     [40]]]


# #   [[[41]
# #     [42]
# #     [43]
# #     [44]
# #     [45]]]


# #   [[[46]
# #     [47]
# #     [48]
# #     [49]
# #     [50]]]]]

# print(array_5d.ndim) # Output: 5
# print(array_5d.shape) # Output: (2, 5, 1 ,5 ,1)
# # Access the value 50
# print(array_5d[-1, -1, -1, -1, -1]) # Output: 50
# # Access the value 50
# print(array_5d[1, 4, 0, 4, 0]) # Output: 50
# # Access the value 41
# print(array_5d[1, 3, 0, 0, 0]) # Output: 41
print("--------------------------")
array_2d = array_3d.reshape(6, 4)
print(array_2d)
# Output:
# [[ 1  2  3  4]
#  [ 5  6  7  8]
#  [ 9 10 11 12]
#  [13 14 15 16]
#  [17 18 19 20]
#  [21 22 23 24]]
print(array_2d[:, 0])

# Find the 3rd column of each row
print(array_2d[:, 2])


print("--------------------------")
print(np.arange(20, 50).reshape(3, 5, 2))

print("--------------------------")
print(np.linspace(20, 100, 10))

print("--------------------------")
print(np.linspace(0, 10, 11))

print("--------------------------")
print(np.linspace(0, 10, 6))

print("--------------------------")
identity_matrix = np.eye(10)

print(identity_matrix)
print("--------------------------")
test_matrix = np.arange(0, 200, 10)
test_matrix = test_matrix.reshape(2, 2, 5)
print(test_matrix)
print("-----------MEAN-----------")
print(test_matrix.mean(axis=1, keepdims=True))
print("------------MAX-----------")
print(test_matrix.max())
print("------------MIN-----------")
print(test_matrix.min())

# Define an array
array = np.array([0, 2, 2, 6, 5, 15, 15, 15])

# Use bincount
count = np.bincount(array)

print(count)
# Output: [1 0 2 0 0 1 1 0 0 0 0 0 0 0 0 3]