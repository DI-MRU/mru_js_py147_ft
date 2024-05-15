import matplotlib.pyplot as plt
import numpy as np

fig, ax = plt.subplots()
ax.plot([1, 2, 3, 4], [1, 4, 2, 3], label='blue line')
ax.plot([1, 2, 3, 4], [3, 2, 1, 4], label='red line')
ax.legend(title='Legend', loc='lower right', shadow=True)

plt.show()
