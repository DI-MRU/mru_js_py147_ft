# Normalization in Database

Normalization is a process of organizing the data in the database. It is a systematic approach of decomposing tables to eliminate data redundancy(repetition) and undesirable characteristics like Insertion, Update and Deletion Anomalies. It is a multi-step process that puts data into tabular form by removing duplicated data from the relation tables.

Normalization is used for mainly two purposes:

1. Eliminating redundant(useless) data.
2. Ensuring data dependencies make sense i.e data is logically stored.

Example of a table that is not normalized:

| id  | name | phone_no | address |
| --- | ---- | -------- | ------- |
| 1   | A    | 123456   | XYZ     |
| 2   | B    | 123456   | XYZ     |
| 3   | C    | 123456   | XYZ     |

In the above table, the phone_no and address are repeated for each row. This is a violation of normalization rules.

## Normal Forms

There are several normal forms. The first three normal forms are the most important.

### First Normal Form (1NF)

A table is in 1NF if:

- It contains only atomic values.
- There are no repeating groups.

### Second Normal Form (2NF)

A table is in 2NF if:

- It is in 1NF.
- All non-key attributes are fully functional dependent on the primary key.

### Third Normal Form (3NF)

A table is in 3NF if:

- It is in 2NF.
- There is no transitive functional dependency.

### Boyce-Codd Normal Form (BCNF)

A table is in BCNF if:

- It is in 3NF.
- For every one of its dependencies X -> Y, X must be a super key.
