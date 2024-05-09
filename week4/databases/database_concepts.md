# Database Concepts

# Table

A table is a collection of related data held in a structured format within a database. It consists of rows and columns. Each row represents a record and each column represents a field.

Example:

| id  | name | age |
| --- | ---- | --- |
| 1   | A    | 20  |
| 2   | B    | 25  |
| 3   | C    | 30  |

# View

A view is a virtual table that is based on the result of a SELECT query. It is a way to present data from one or more tables in a structured format.

Example:

```sql
CREATE VIEW view_name AS
SELECT id, name
FROM table_name
WHERE age > 20;
```

Usages:

- Simplify complex queries
- Restrict access to certain columns
- Provide a consistent interface to users

# Materialized View

A materialized view is a view that stores the result of a query in a physical table. It is updated periodically to reflect changes in the underlying data.

Example:

```sql
CREATE MATERIALIZED VIEW view_name AS
SELECT id, name
FROM table_name
WHERE age > 20;
```

Usages:

- Improve query performance
- Reduce the load on the database server
- Provide a consistent interface to users

# Stored Procedure

A stored procedure is a set of SQL statements that are stored in the database and can be executed by calling the procedure name.

Example:

```sql

CREATE PROCEDURE get_employee
AS
BEGIN
    SELECT id, name
    FROM employees
    WHERE age > 20;
END;

```

Usages:

- Reuse code
- Improve performance
- Enhance security

Stored Procedure vs View:

- A view is a virtual table that is based on a SELECT query, while a stored procedure is a set of SQL statements that are stored in the database.
- A view is read-only, while a stored procedure can perform read and write operations.

# Function

A function is a set of SQL statements that can be called with parameters and returns a value.

Example:

```sql
CREATE FUNCTION get_employee_name(id INT)
RETURNS VARCHAR(50)
AS
BEGIN
    DECLARE name VARCHAR(50);
    SELECT name INTO name
    FROM employees
    WHERE id = id;
    RETURN name;
END;
```

Usages:

- Reuse code
- Improve performance
- Enhance security

# Transaction

Unit of work or sequences:

1. Begin Transaction
2. Execute SQL statements
3. Commit or Rollback

Example:

```sql
BEGIN TRANSACTION;
UPDATE employees
SET age = age + 1
WHERE id = 1;
COMMIT;
```

Usages:

- Ensure data consistency
- Maintain data integrity
- Handle errors

# Database Locks

Database locks are mechanisms used to control access to data in a database. They prevent multiple users from accessing or modifying the same data at the same time.

Types of locks:

1. Shared Lock (S Lock)
2. Exclusive Lock (X Lock)
3. Update Lock (U Lock)
4. Intent Lock (I Lock)
5. Schema Lock (Sch Lock)

# ORM

Object-Relational Mapping (ORM) is a programming technique that converts data between incompatible type systems in object-oriented programming languages and relational databases.

Example:

```python

class Employee(Base):
    __tablename__ = 'employees'
    id = Column(Integer, primary_key=True)
    name = Column(String)
    age = Column(Integer)

```

Usages:

- Simplify data access
- Reduce development time
- Improve code maintainability
