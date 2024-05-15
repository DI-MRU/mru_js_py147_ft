# Charts

## Histogram

What is a histogram?

A histogram is a graphical representation of the distribution of numerical data. It is an estimate of the probability distribution of a continuous variable (quantitative variable).

A real life example:

Imagine you have a dataset of the ages of people in a city. You can create a histogram to show how many people are in each age group.

How to create a histogram?

```python

import matplotlib.pyplot as plt

data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

plt.hist(data, bins=5, color='blue', edgecolor='black')

plt.xlabel('Value')
plt.ylabel('Frequency')
plt.title('Histogram')

plt.show()

```
