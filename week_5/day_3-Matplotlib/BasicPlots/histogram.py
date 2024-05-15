import matplotlib.pyplot as plt
import numpy as np

data = np.random.randn(1000)

fig, ax = plt.subplots()
ax.hist(data, bins=50)
plt.show()

# save the figure
fig.savefig('my_figure.png')
