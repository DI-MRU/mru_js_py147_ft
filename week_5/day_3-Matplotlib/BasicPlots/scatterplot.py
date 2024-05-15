import numpy as np
import matplotlib.pyplot as plt

# generate random numbers
x = np.random.rand(50)
y = np.random.rand(50)

fig, ax = plt.subplots()
ax.scatter(x, y)
plt.show()
