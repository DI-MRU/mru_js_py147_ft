# Types of relationships in database

1. One to One
2. One to Many
3. Many to Many

generate a table with cars as an example:

| id  | car_name | owner_id |
| --- | -------- | -------- |
| 1   | car1     | 1        |
| 2   | car2     | 1        |
| 3   | car3     | 2        |
| 4   | car4     | 3        |
| 5   | car5     | 3        |

## One to One

- One car has one owner
- One owner has one car

## One to Many

- One owner has many cars
- One car has one owner

## Many to Many

- One owner has many cars
- One car has many owners

Hierchical relationships can be represented as a tree structure.

# Hierchical relationships

Example using a table with employees:

| id  | name | manager_id |
| --- | ---- | ---------- |
| 1   | A    | NULL       |
| 2   | B    | 1          |
| 3   | C    | 1          |
| 4   | D    | 2          |
| 5   | E    | 2          |
| 6   | F    | 3          |

- A is the top manager
- B and C are direct reports of A
- D and E are direct reports of B
