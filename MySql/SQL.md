# SQL
SQL, or Structured Query Language, is a programming language used for managing and manipulating relational databases. It provides a standardized way to interact with databases, allowing users to create, retrieve, update, and delete data. SQL is used by database management systems (DBMS) to perform various operations on databases

## To create a database in SQL, you use the CREATE DATABASE statement. Here's a basic example:
```sql
CREATE DATABASE YourDatabaseName;
```
## To list all databases, use the following query:
```sql
SHOW DATABASES;
```
## To switch or select a database, use the following query:
```sql
USE DATABASENAME;
```
## To check current database name use the following query:
```sql
SELECT DATABASE();
```
## To list all tables in a database, use the following query:
```sql
SHOW TABLES;
```

## Create a new table in the database
```sql
CREATE TABLE my_table (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);
```
## To check the schema of a table in MySQL, you can use the DESCRIBE statement or the SHOW COLUMNS statement.
```bash
DESCRIBE your_table_name;

OR
SHOW COLUMNS FROM your_table_name;

```

## Insert a new row into the table
```sql
INSERT INTO my_table (name, email) VALUES ('John Doe', 'john.doe@example.com');
```

## Show data from the table
```sql
SELECT * FROM my_table;

SELECT columnName FROM my_table;
SELECT name FROM my_table
```

## Update a row in the table
```sql
UPDATE my_table SET name = 'Jane Doe' WHERE id = 1;
```

## Delete a row from the table
```sql
DELETE FROM my_table WHERE id = 2;
```

## Query the table for all rows where the name is equal to 'John Doe'
```sql
SELECT * FROM my_table WHERE name = 'John Doe';
```

## Create a view that shows the name and email address of all customers who have placed an order in the last month
```sql
CREATE VIEW recent_customers AS
SELECT name, email FROM customers WHERE order_date >= CURRENT_DATE - INTERVAL 1 MONTH;
```

## Grant permission to a user to select data from the recent_customers view
```sql
GRANT SELECT ON recent_customers TO user1;
```

## SQL is divided into five subsets:
**Data Definition Language (DDL):** DDL is used to create, alter, and drop database objects, such as databases, tables, and views.<br>
**Data Manipulation Language (DML):** DML is used to insert, update, delete, and query data in tables.<br>
**Data Control Language (DCL):** DCL is used to grant and revoke permissions on database objects.<br>
**Transaction Control Language (TCL):** TCL is used to manage transactions, such as starting, committing, and rolling back transactions.
**Data Query Language (DQL):** DQL is used to query data from tables. DQL is the most commonly used subset of SQL, and it is often referred to as simply "SQL".
## Data Definition Language (DDL):
DDL is used to define the structure of a database. This includes creating, altering, and deleting tables, columns, and other database objects. DDL is typically used by database administrators and application developers.
```sql
-- Creating a new table
CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    BirthDate DATE,
    DepartmentID INT,
    FOREIGN KEY (DepartmentID) REFERENCES Departments(DepartmentID)
);

-- Modifying an existing table (adding a new column)
ALTER TABLE Employees
ADD Email VARCHAR(100);

-- Creating an index on a table
CREATE INDEX idx_LastName
ON Employees(LastName);

-- Creating a view
CREATE VIEW EmployeeView AS
SELECT EmployeeID, FirstName, LastName, DepartmentName
FROM Employees
JOIN Departments ON Employees.DepartmentID = Departments.DepartmentID;

-- Deleting a table
DROP TABLE Employees;

```

## Data Manipulation Language (DML):
DML is used to manipulate data in a database. This includes inserting, updating, and deleting data. DML is typically used by application developers and end users.<br>
```sql
-- SELECT: Retrieving data from a table.
-- Selecting all columns from the Employees table
SELECT * FROM Employees;

-- Selecting specific columns
SELECT FirstName, LastName, DepartmentID
FROM Employees
WHERE DepartmentID = 1;


-- INSERT: Adding new records to a table.
-- Inserting a new employee into the Employees table
INSERT INTO Employees (EmployeeID, FirstName, LastName, BirthDate, DepartmentID)
VALUES (1, 'John', 'Doe', '1990-01-15', 1);
UPDATE: Modifying existing records in a table.


-- Updating the department for a specific employee
UPDATE Employees
SET DepartmentID = 2
WHERE EmployeeID = 1;
DELETE: Removing records from a table.


-- Deleting an employee from the Employees table
DELETE FROM Employees
WHERE EmployeeID = 1;
These examples demonstrate the basic functionality of DML statements:
```


## Data Control Language (DCL):
 DCL is used to control access to data in a database. This includes granting and revoking permissions to users and roles. DCL is typically used by database administrators.
```sql
-- GRANT: This statement is used to provide specific privileges to a user or a group of users.

-- Grant SELECT privilege on the Employees table to a user
GRANT SELECT ON Employees TO username;
In this example, the GRANT statement gives the user specified by "username" the privilege to execute SELECT queries on the "Employees" table.

-- REVOKE: This statement is used to revoke previously granted privileges from a user or a group of users.


-- Revoke INSERT privilege on the Employees table from a user
REVOKE INSERT ON Employees FROM username;
-- This example revokes the privilege to execute INSERT queries on the "Employees" table from the user specified by "username."
```

## Transaction Control Language (TCL):
TCL is used to manage transactions in a database. This includes starting, committing, and rolling back transactions. TCL is typically used by application developers. 
```sql
-- COMMIT: This statement is used to permanently save the changes made during the current transaction.

-- Begin a transaction
BEGIN TRANSACTION;

-- Update data
UPDATE Employees
SET Salary = Salary * 1.1
WHERE DepartmentID = 1;

-- Commit the transaction to save the changes
COMMIT;
-- In this example, the BEGIN TRANSACTION statement starts a new transaction. The UPDATE statement modifies data within that transaction, and the COMMIT statement makes those changes permanent.

-- ROLLBACK: This statement is used to undo the changes made during the current transaction.


-- Begin a transaction
BEGIN TRANSACTION;

-- Attempt to update data
UPDATE Employees
SET Salary = Salary * 1.1
WHERE DepartmentID = 1;

-- Something went wrong, so rollback the transaction to undo the changes
ROLLBACK;
-- In this example, if there's an issue during the transaction (e.g., an error occurs), the ROLLBACK statement is used to undo any changes made during that transaction.
```


## INNER JOIN 
In MySQL, an INNER JOIN is used to combine rows from two or more tables based on a related column between them. The result set includes only the rows where there is a match between the specified columns in the joined tables. Here's the basic syntax for an INNER JOIN:
```sql
Syntax
SELECT column_name(s)
FROM TableA
INNER JOIN TableB
ON TableA.col_name = TableB.col_name

create table students(student_id INT NOT NULL PRIMARY KEY, student_name VARCHAR(255) NOT NULL);
INSERT INTO students (student_id, student_name) VALUES     (1, 'Alice'),     (2, 'Bob'),     (3, 'Charlie');

create table course(course_id  INT NOT NULL PRIMARY KEY, course_name VARCHAR(255) NOT NULL);
INSERT INTO course (course_id, course_name) VALUES     (101, 'Math'),     (102, 'English'),     (103, 'Science');

mysql> SELECT *FROM students;
+------------+--------------+
| student_id | student_name |
+------------+--------------+
|          1 | Alice        |
|          2 | Bob          |
|          3 | Charlie      |
+------------+--------------+
3 rows in set (0.00 sec)

mysql> SELECT *FROM courses;
+-----------+-------------+
| course_id | course_name |
+-----------+-------------+
|       101 | Math        |
|       102 | English     |
|       103 | Science     |
+-----------+-------------+
3 rows in set (0.00 sec)

mysql> SELECT * FROM students AS s INNER JOIN courses AS c ON s.student_id = c.course_id;
Empty set (0.00 sec)

mysql> UPDATE students SET student_id = 101 WHERE student_id = 1;
Query OK, 1 row affected (0.01 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> SELECT *FROM students;
+------------+--------------+
| student_id | student_name |
+------------+--------------+
|          2 | Bob          |
|          3 | Charlie      |
|        101 | Alice        |
+------------+--------------+
3 rows in set (0.00 sec)

mysql> SELECT * FROM students AS s INNER JOIN courses AS c ON s.student_id = c.course_id;
+------------+--------------+-----------+-------------+
| student_id | student_name | course_id | course_name |
+------------+--------------+-----------+-------------+
|        101 | Alice        |       101 | Math        |
+------------+--------------+-----------+-------------+
1 row in set (0.00 sec)

```
## LEFT JOIN 
In MySQL, a LEFT JOIN is used to retrieve all records from the left table (TableA) and the matched records from the right table (TableB). If there is no match, NULL values are returned for columns from the right table. Here's the basic syntax for a LEFT JOIN:
```sql
Syntax
SELECT column_name(s)
FROM TableA
LEFT JOIN TableB
ON TableA.col_name = TableB.col_name;

mysql> SELECT * FROM students AS s
    -> LEFT JOIN courses AS c ON s.student_id = c.course_id;
+------------+--------------+-----------+-------------+
| student_id | student_name | course_id | course_name |
+------------+--------------+-----------+-------------+
|          2 | Bob          |      NULL | NULL        |
|          3 | Charlie      |      NULL | NULL        |
|        101 | Alice        |       101 | Math        |
+------------+--------------+-----------+-------------+
3 rows in set (0.01 sec)

```
## RIGHT JOIN 
In MySQL, a RIGHT JOIN is used to retrieve all records from the right table (TableB) and the matched records from the left table (TableA). If there is no match, NULL values are returned for columns from the left table. Here's the basic syntax for a RIGHT JOIN:
```sql
Syntax
SELECT column_name(s)
FROM TableA
LEFT JOIN TableB
ON TableA.col_name = TableB.col_name;

mysql> SELECT * FROM students AS s RIGHT JOIN courses AS c ON s.student_id = c.course_id;
+------------+--------------+-----------+-------------+
| student_id | student_name | course_id | course_name |
+------------+--------------+-----------+-------------+
|        101 | Alice        |       101 | Math        |
|       NULL | NULL         |       102 | English     |
|       NULL | NULL         |       103 | Science     |
+------------+--------------+-----------+-------------+
3 rows in set (0.00 sec)

```
## FULL OUTER JOIN
In MySQL, a FULL OUTER JOIN retrieves all records from both tables (TableA and TableB). If there is no match, NULL values are returned for columns from the table where there is no match. Here's the basic syntax for a FULL OUTER JOIN:
```sql
Syntax
SELECT column_name(s)
FROM TableA
LEFT JOIN TableB
ON TableA.col_name = TableB.col_name;
-- Performing a FULL OUTER JOIN

-- Simulating FULL OUTER JOIN
mysql> SELECT * FROM students AS s FULL OUTER JOIN courses AS c ON s.student_id = c.course_id;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'FULL OUTER JOIN courses AS c ON s.student_id = c.course_id' at line 1

MySQL doesn't directly support the FULL OUTER JOIN syntax.

To simulate a FULL OUTER JOIN in MySQL, you can use a combination of LEFT JOIN and RIGHT JOIN with the UNION operator. Here's the corrected example:

mysql> SELECT * FROM students AS s
    -> LEFT JOIN courses AS c ON s.student_id = c.course_id
    -> UNION
    -> SELECT * FROM students AS s
    -> RIGHT JOIN courses AS c ON s.student_id = c.course_id;
+------------+--------------+-----------+-------------+
| student_id | student_name | course_id | course_name |
+------------+--------------+-----------+-------------+
|          2 | Bob          |      NULL | NULL        |
|          3 | Charlie      |      NULL | NULL        |
|        101 | Alice        |       101 | Math        |
|       NULL | NULL         |       102 | English     |
|       NULL | NULL         |       103 | Science     |
+------------+--------------+-----------+-------------+
5 rows in set (0.00 sec)


```

