import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 2 * np.pi, 400)
y = np.sin(x ** 2)
# A figure with 2x2 grid of Axes
fig, axs = plt.subplots(2, 2)
axs[0, 0].plot(x, y)
axs[0, 1].plot(x, y, 'tab:orange')  # The 'tab:orange' specifies the line color
axs[1, 0].plot(x, -y, 'tab:green')  # The 'tab:green' specifies the line color
axs[1, 1].plot(x, -y, 'tab:red')  # The 'tab:red' specifies the line color

for ax in axs.flat:
    ax.set(xlabel='x', ylabel='y')

for ax in axs.flat:
    ax.label_outer()

plt.show()
