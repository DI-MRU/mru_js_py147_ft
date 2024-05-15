import matplotlib.pyplot as plt
import numpy as np

# fig, ax = plt.subplots()  # Create a figure containing a single axes
# ax.plot([1, 2, 3, 4], [1, 4, 2, 3])

listOfPoints = np.array([(1, 2), (1.5, 3), (2, 1), (2.5, 4), (3, 1), (3.5, 3)])

# iterate list
for point in listOfPoints:
    plt.plot(point[0], point[1], 'ro')

plt.show()
