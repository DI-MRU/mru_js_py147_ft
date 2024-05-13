# Joins in SQL

## Introduction

In SQL, a `JOIN` clause is used to combine rows from two or more tables, based on a related column between them. It is used to combine rows from two or more tables based on a related column between them.

## Types of Joins

There are different types of joins in SQL:

1. INNER JOIN
2. LEFT JOIN (or LEFT OUTER JOIN)
3. RIGHT JOIN (or RIGHT OUTER JOIN)
4. FULL JOIN (or FULL OUTER JOIN)

Example using employees and departments tables:

| id  | name | department_id |
| --- | ---- | ------------- |
| 1   | A    | 1             |
| 2   | B    | 2             |
| 3   | C    | 1             |
| 4   | D    | 3             |
| 5   | E    | 2             |

| id  | name        |
| --- | ----------- |
| 1   | HR          |
| 2   | Engineering |
| 3   | Marketing   |

### INNER JOIN

- Returns records that have matching values in both tables.
- The result is the intersection of the two tables.

```sql
SELECT employees.name, departments.name
FROM employees
INNER JOIN departments
ON employees.department_id = departments.id;
```

| employees.name | departments.name |
| -------------- | ---------------- |
| A              | HR               |
