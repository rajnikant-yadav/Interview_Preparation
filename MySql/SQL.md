# SQL
SQL, or Structured Query Language, is a programming language used for managing and manipulating relational databases. It provides a standardized way to interact with databases, allowing users to create, retrieve, update, and delete data. SQL is used by database management systems (DBMS) to perform various operations on databases

#### To create a database in SQL, you use the CREATE DATABASE statement. Here's a basic example:
```sql
CREATE DATABASE YourDatabaseName;
```
#### To list all databases, use the following query:
```sql
SHOW DATABASES;
```
#### To switch or select a database, use the following query:
```sql
USE DATABASENAME;
```
#### To check current database name use the following query:
```sql
SELECT DATABASE();
```
#### To list all tables in a database, use the following query:
```sql
SHOW TABLES;
```

#### Create a new table in the database
```sql
CREATE TABLE my_table (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);
```

#### Insert a new row into the table
```sql
INSERT INTO my_table (name, email) VALUES ('John Doe', 'john.doe@example.com');
```

#### Show data from the table
```sql
SELECT * FROM my_table;
```

#### Update a row in the table
```sql
UPDATE my_table SET name = 'Jane Doe' WHERE id = 1;
```

#### Delete a row from the table
```sql
DELETE FROM my_table WHERE id = 2;
```

#### Query the table for all rows where the name is equal to 'John Doe'
```sql
SELECT * FROM my_table WHERE name = 'John Doe';
```

#### Create a view that shows the name and email address of all customers who have placed an order in the last month
```sql
CREATE VIEW recent_customers AS
SELECT name, email FROM customers WHERE order_date >= CURRENT_DATE - INTERVAL 1 MONTH;
```

#### Grant permission to a user to select data from the recent_customers view
```sql
GRANT SELECT ON recent_customers TO user1;
```

## SQL is divided into five subsets:
**Data Definition Language (DDL):** DDL is used to create, alter, and drop database objects, such as databases, tables, and views.<br>
**Data Manipulation Language (DML):** DML is used to insert, update, delete, and query data in tables.<br>
**Data Control Language (DCL):** DCL is used to grant and revoke permissions on database objects.<br>
**Transaction Control Language (TCL):** TCL is used to manage transactions, such as starting, committing, and rolling back transactions.
**Data Query Language (DQL):** DQL is used to query data from tables. DQL is the most commonly used subset of SQL, and it is often referred to as simply "SQL".
