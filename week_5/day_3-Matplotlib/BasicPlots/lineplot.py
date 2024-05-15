import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(0, 10, 100)
y = np.sin(x)

fig, ax = plt.subplots() # create the figure and the axes

# add some colours
ax.plot(x, y, color='red', linestyle='--', marker='o', label='red line') # plot the axes
plt.show() # and sow the plot
