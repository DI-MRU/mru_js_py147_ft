import matplotlib.pyplot as plt
import numpy as np

fig, ax = plt.subplots()  # Create a figure containing a single axes

x = np.linspace(0, 10, 100)
y = x**2

plt.plot(x, y)
plt.show()
