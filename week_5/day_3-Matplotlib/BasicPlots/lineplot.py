import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(0, 10, 100)
y = np.sin(x)

fig, ax = plt.subplots() # create the figure and the axes
ax.plot(x, y) # plot the axes
plt.show() # and sow the plot
