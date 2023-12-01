# KYES IN DBMS 
In a database management system (DBMS), a key is a unique identifier for a record or tuple in a table. Keys are used to identify, access, and manage data in a database. There are several different types of keys in a DBMS, each with its own specific purpose.<br>

#### Primary Key:
A primary key is a unique identifier for each record in a table. It ensures that each row in a table can be uniquely identified. No two rows can have the same primary key value, and it cannot be null (empty).<br>
```sql
CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    Name VARCHAR(50),
    Age INT
);
```

#### Foreign Key:
A foreign key is a field in one table that refers to the primary key in another table. It establishes a link between the two tables. The foreign key in one table is used to refer to the primary key in another table, creating a relationship between them.<br>
```sql
-- Create Authors Table
CREATE TABLE authors (
    author_id INT PRIMARY KEY,
    author_name VARCHAR(255) NOT NULL
);

-- Create Books Table with a Foreign Key
CREATE TABLE books (
    book_id INT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author_id INT,
    FOREIGN KEY (author_id) REFERENCES authors(author_id)
);

-- Insert Data into Authors Table
INSERT INTO authors (author_id, author_name) VALUES
(1, 'J.K. Rowling'),
(2, 'George Orwell'),
(3, 'Jane Austen');

-- Insert Data into Books Table
INSERT INTO books (book_id, title, author_id) VALUES
(101, 'Harry Potter and the Sorcerer''s Stone', 1),
(102, '1984', 2),
(103, 'Pride and Prejudice', 3);

-- Select all authors
SELECT * FROM authors;

-- Select all books with author information
SELECT books.book_id, books.title, authors.author_name
FROM books
JOIN authors ON books.author_id = authors.author_id;

The result would be:
+-----------+-----------------------------+-------------+
| author_id | author_name                 |             |
+-----------+-----------------------------+-------------+
| 1         | J.K. Rowling                |             |
| 2         | George Orwell               |             |
| 3         | Jane Austen                 |             |
+-----------+-----------------------------+-------------+

+---------+-----------------------------------------+----------------+
| book_id | title                                   | author_name    |
+---------+-----------------------------------------+----------------+
| 101     | Harry Potter and the Sorcerer's Stone   | J.K. Rowling   |
| 102     | 1984                                    | George Orwell  |
| 103     | Pride and Prejudice                     | Jane Austen    |
+---------+-----------------------------------------+----------------+

```

#### Unique Key:
Similar to a primary key, a unique key ensures that the values in a column or a group of columns are unique across the table. However, unlike the primary key, a table can have multiple unique keys.<br>
```sql
CREATE TABLE users (
    user_id INT PRIMARY KEY,
    username VARCHAR(255) UNIQUE,
    email VARCHAR(255) UNIQUE
);

```

#### Candidate Key:
A candidate key is a set of one or more columns in a table that can uniquely identify a record in that table. Each table can have multiple candidate keys, and the primary key is chosen from among them.<br>
```sql
CREATE TABLE candidates (
    candidate_id INT PRIMARY KEY,
    candidate_name VARCHAR(255) NOT NULL,
    candidate_email VARCHAR(255) UNIQUE NOT NULL,
    candidate_phone VARCHAR(15) UNIQUE NOT NULL
);

```

#### Composite Key:
A composite key is a combination of two or more columns in a table that together uniquely identify each row. While each individual column may not be unique, their combination is. 
It's used when a single column is not sufficient to ensure uniqueness.
```sql
CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    Email VARCHAR(50) UNIQUE,
    Phone VARCHAR(20) UNIQUE,
    Name VARCHAR(50)
);
```

#### Super Key:
A super key is a set of one or more fields that can uniquely identify a record in a table. It is a broader term that includes candidate keys and may also contain additional fields.<br>
```sql
CREATE TABLE Orders (
    OrderID INT,
    ProductID INT,
    PRIMARY KEY (OrderID, ProductID),
    Quantity INT
);
```
