## What is data
Data is information, facts, or details that are collected, stored, and can be processed. It can be anything from numbers, text, images, or even sounds. In the context of databases, data is the raw material that gets organized and managed.<br>

**There are various ways to store data, and the choice often depends on the type of data, requirements, and the use case. Here are several common methods:** <br>

#### Flat Files:
Simplest form of data storage.
Data is stored in plain text files, often with a CSV (Comma-Separated Values) format.

#### Relational Databases:
Structured storage using tables with rows and columns.
Examples include MySQL, PostgreSQL, SQL Server, and Oracle.

#### NoSQL Databases:
Suitable for unstructured or semi-structured data.
Types include document-oriented (MongoDB), key-value stores (Redis), and wide-column stores (Cassandra).

#### Graph Databases:
Designed for data with complex relationships.
Stores data in nodes and edges, ideal for social networks and hierarchical data.

#### Cloud-Based Storage:
Data storage services provided by cloud platforms (e.g., AWS S3, Azure Blob Storage).
Scalable and accessible from anywhere.

#### File Systems:
Basic storage on computer file systems (e.g., NTFS, ext4).
Suitable for general-purpose file storage.

#### XML and JSON Files:
Common formats for semi-structured data.
Used in web development and data interchange.

Choosing the right storage method depends on factors such as the nature of the data, the volume of data, performance requirements, and the specific needs of the application or system.

**Before the rise of Database Management Systems (DBMS), data used to be stored in more straightforward ways directly on a computer's file system. Here are some common methods:** <br><br>
Flat Files:
Data stored in text files, often CSV or TSV.

Text Files:
Simple data stored in text format.

Hierarchical File Systems:
Data organized in directories and files.

Spreadsheet Files:
Data stored in spreadsheet files (e.g., Excel).

Custom File Formats:
Application-specific file formats.

Serialized Objects:
Objects stored as binary files.

Document-oriented Storage:
Data stored in documents (text, PDFs, etc.).

It's important to note that while these methods are straightforward, they lack the sophisticated features and capabilities provided by modern DBMS, such as efficient querying, indexing, data integrity enforcement, and support for concurrent access. DBMS simplifies data management, enhances data security, and provides a structured way to interact with and retrieve data.

## File System vs Database
#### File System:
What is it: Think of it like a digital file cabinet for your computer. It stores files and folders.
Use Case: Good for basic storage. You have files (like documents or pictures) organized into folders.
Example: Imagine you have folders for pictures, documents, and music on your computer. Each file is a separate piece of information.<br>
#### Database:
What is it: Think of it like a smart, organized system for storing and managing lots of related information.
Use Case: Ideal when you have lots of data that's connected and needs to be organized efficiently. Offers advanced features like searching, sorting, and linking data.
Example: If you have a business and you want to store information about customers, products, and orders, a database allows you to link this information intelligently. For instance, you can quickly find all orders from a specific customer.<br>

### Why Database over File:
Efficiency: Databases make it faster and easier to find, organize, and manage large amounts of connected data.
Structured Relationships: Databases can establish relationships between different pieces of data, making it more powerful for certain types of applications.
Security and Integrity: Databases provide better security features and ensure data integrity, preventing mistakes and unauthorized access.<br>

### When to Use File System:
For simpler needs where data organization isn't complex.
When the volume of data is relatively small.<br>

### When to Use Database:
For complex data with many relationships.
When data needs to be organized, retrieved, and manipulated efficiently.
In applications where data integrity and security are crucial.
Example:

File System: You might use a file system to store personal photos, with folders for different events.
Database: In a library, a database would be used to manage books, borrowers, and due dates, allowing easy tracking and retrieval of information.

In summary, file systems are like basic digital filing cabinets, while databases are more like organized, intelligent systems tailored for handling interconnected and extensive data efficiently. We use databases when data becomes more complex and needs advanced organization and management.<br>


## DBMS
A Database Management System (DBMS) is a software application that helps users create, manage, and access data stored in a database. It acts as an intermediary between the users and the database, ensuring that data is organized, consistent, and secure. In simple terms, it's like a digital filing cabinet that helps you store, organize, and retrieve information efficiently. <br>

## RDBMS
RDBMS stands for Relational Database Management System. It is a type of database management system (DBMS) that stores data in tables with rows and columns. Tables are related to each other through primary keys and foreign keys, which allow for efficient data retrieval and manipulation. RDBMSs are the most widely used type of DBMS due to their simplicity, flexibility, and ability to handle large amounts of data.


RDBMS stands for Relational Database Management System. It is a type of database management system (DBMS) that stores data in tables with rows and columns. Tables are related to each other through primary keys and foreign keys, which allow for efficient data retrieval and manipulation. RDBMSs are the most widely used type of DBMS due to their simplicity, flexibility, and ability to handle large amounts of data.<br>

## Here are some of the key features of RDBMSs:
**Data is stored in tables:** Tables are the basic building blocks of RDBMSs. Each table has a unique name and consists of rows and columns. Rows represent individual records, while columns represent the attributes or fields of those records.<br>

**Data is organized with relationships:** RDBMSs use primary keys and foreign keys to establish relationships between tables. Primary keys uniquely identify each record in a table, while foreign keys link records in one table to related records in another table.<br>

**Data is manipulated using SQL:** Structured Query Language (SQL) is the standard language for interacting with RDBMSs. SQL allows users to insert, update, delete, and retrieve data from tables.<br>

**Data integrity is maintained:** RDBMSs employ various techniques to ensure data integrity, such as data validation rules, data normalization, and ACID (Atomicity, Consistency, Isolation, Durability) properties.<br>

**Data security is enforced:** RDBMSs provide mechanisms to protect data from unauthorized access, modification, or destruction. These mechanisms include user authentication, access control lists, and encryption.<br>

### Here are some examples of popular RDBMSs:

MySQL: An open-source RDBMS that is widely used for web applications and e-commerce platforms.

PostgreSQL: An open-source RDBMS known for its advanced features and strong performance.

Microsoft SQL Server: A commercial RDBMS that is popular in enterprise environments.

Oracle Database: A commercial RDBMS that is known for its scalability and reliability.

RDBMSs are a powerful tool for managing and organizing large amounts of data. They are widely used in various industries, including finance, healthcare, retail, and government.

## DATABASE 
 A database is an organized collection of data, typically stored electronically in a computer system. It's like a digital filing cabinet where you can store, organize, and retrieve information in a structured and efficient manner. Imagine a library with books arranged by author, genre, or publication date. A database operates similarly, allowing you to organize and access information based on specific criteria.<br>


 ## DBMS Architecture
DBMS architecture refers to the structure of a database management system (DBMS) and how it interacts with users and applications. DBMS architecture depends upon how users are connected to the database to get their request done. Database architecture can be seen as a single tier or multi-tier.  1-tier architecture,  2-tier architecture and 3-tier architecture.<br>

#### Single-tier architecture:
All components of the DBMS reside on a single server (database, database server, application logic)
Simple to set up and manage
Cost-effective
Fast performance for small databases
Not scalable for large databases
Can be a security risk if the server is compromised
Can be difficult to maintain as the database grows <br>

#### Two-tier architecture:
Separates the DBMS into two layers: client layer and database layer
Client layer contains the user interface and application logic
Database layer contains the database and database server
More scalable than single-tier architecture
More secure than single-tier architecture
More complex to set up and manage than single-tier architecture <br>
 
#### Three-tier architecture:
Adds an application layer between the client layer and the database layer
Application layer contains the business logic of the application
Client layer contains the user interface
Database layer contains the database and database server
Most scalable and secure type of DBMS architecture
Most complex to set up and manage <br>

#### When to use each architecture:
Single-tier architecture: small databases, development and testing purposes
Two-tier architecture: medium-sized databases, applications with moderate traffic loads
Three-tier architecture: large databases, applications with high traffic loads, applications that require a high level of security <br>

## ACID Properties in DBMS
ACID properties in DBMS stand for Atomicity, Consistency, Isolation, and Durability. These four properties are essential for ensuring the reliability and correctness of database transactions.<br>

#### Atomicity:
Atomicity ensures that a transaction is treated as a single, indivisible unit. Either all of the operations within the transaction are completed successfully, or none of them are. If any part of the transaction fails, the entire transaction is rolled back to its original state.<br>

#### Consistency: 
Consistency ensures that the database remains in a valid state before and after a transaction. This means that the database constraints must be maintained, and the data must be accurate and up-to-date.<br>

#### Isolation:
Isolation ensures that concurrent transactions do not interfere with each other, maintaining data integrity. This means that each transaction should be able to execute as if it were the only transaction running against the database.<br>

#### Durability: 
Durability ensures that once a transaction is committed, its changes are permanent even in the event of a system failure. This means that the database must be able to recover from a failure and restore the data to its state as of the last committed transaction.<br>
ACID properties are implemented in DBMS using a variety of techniques, such as locking, logging, and checkpointing. DBMS also typically provide a variety of features to help developers write ACID-compliant transactions, such as transaction statements and savepoints.

## ER (Entity Relationship) Diagram in DBMS
An Entity-Relationship (ER) diagram is a graphical representation of the entities and their relationships in a database. It is a way to visualize the structure of a database and how the different entities are related to each other.

ER diagrams are used by database designers to plan and design databases. They are also used by developers to understand the structure of a database and to write code to interact with it.<br>

#### Here are the three basic components of an ER diagram

**Entities:** Entities are the main objects in a database. They represent real-world objects, such as people, places, or things. Entities are represented by rectangles in an ER diagram. <br>

**Attributes:** Attributes are the properties of entities. They describe the characteristics of an entity. Attributes are represented by ovals in an ER diagram.<br>

**Relationships:** Relationships describe how entities are related to each other. There are three main types of relationships:
One-to-one: A one-to-one relationship means that one entity can be related to at most one other entity. For example, a person can be married to at most one other person.

One-to-many: A one-to-many relationship means that one entity can be related to many other entities. For example, a person can have many children.

Many-to-many: A many-to-many relationship means that many entities can be related to many other entities. For example, a student can take many courses, and a course can have many students.
Relationships are represented by lines in an ER diagram. The type of relationship is indicated by the cardinality of the relationship. The cardinality of a relationship is the number of entities that can be related to each other. For example, a one-to-one relationship has a cardinality of 1:1, a one-to-many relationship has a cardinality of 1:N, and a many-to-many relationship has a cardinality of M:N.


## KYES IN DBMS 
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
<br>

#### Foreign Key:
A foreign key is a field in one table that refers to the primary key in another table. It establishes a link between the two tables. The foreign key in one table is used to refer to the primary key in another table, creating a relationship between them.<br>
```sql
CREATE TABLE Courses (
    CourseID INT PRIMARY KEY,
    Title VARCHAR(100),
    Instructor VARCHAR(50)
);

CREATE TABLE Enrollments (
    EnrollmentID INT PRIMARY KEY,
    StudentID INT,
    CourseID INT,
    FOREIGN KEY (StudentID) REFERENCES Students(StudentID),
    FOREIGN KEY (CourseID) REFERENCES Courses(CourseID)
);
```
<br>

#### Unique Key:
Similar to a primary key, a unique key ensures that the values in a column or a group of columns are unique across the table. However, unlike the primary key, a table can have multiple unique keys.<br>
```sql
CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    EmployeeCode VARCHAR(20) UNIQUE,
    Name VARCHAR(50),
    Department VARCHAR(50)
);
```
<br>

#### Candidate Key:
A candidate key is a set of one or more fields that can uniquely identify a record in a table. From these candidate keys, one is chosen to be the primary key. The other candidate keys, if any, become unique keys.<br>
```sql
CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    Email VARCHAR(50) UNIQUE,
    Phone VARCHAR(20) UNIQUE,
    Name VARCHAR(50)
);
```
<br>

#### Composite Key:
A composite key is a combination of two or more columns in a table that together uniquely identify each row. While each individual column may not be unique, their combination is.<br>
```sql
CREATE TABLE Orders (
    OrderID INT,
    ProductID INT,
    PRIMARY KEY (OrderID, ProductID),
    Quantity INT
);
```
<br>

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
<br>

## JOIN IN RDBMS
In Relational Database Management Systems (RDBMS), a JOIN operation is used to combine rows from two or more tables based on a related column between them. This operation allows you to retrieve data that spans multiple tables, enabling you to see relationships and associations between different pieces of information. There are several types of JOIN operations, including INNER JOIN, LEFT JOIN (or LEFT OUTER JOIN), RIGHT JOIN (or RIGHT OUTER JOIN), and FULL JOIN (or FULL OUTER JOIN).<br>

**Here's a brief explanation of each type of JOIN:**

#### INNER JOIN:
Retrieves rows from both tables where there is a match based on the specified condition.
```sql
SELECT * FROM Table1
INNER JOIN Table2 ON Table1.column = Table2.column;
```
<br>

### LEFT JOIN (or LEFT OUTER JOIN):
Retrieves all rows from the left table and the matched rows from the right table. If there is no match, NULL values are returned for columns from the right table.<br>
```sql
SELECT * FROM Table1
LEFT JOIN Table2 ON Table1.column = Table2.column;
```
<br>

### RIGHT JOIN (or RIGHT OUTER JOIN):
Retrieves all rows from the right table and the matched rows from the left table. If there is no match, NULL values are returned for columns from the left table.
```sql
SELECT * FROM Table1
RIGHT JOIN Table2 ON Table1.column = Table2.column;
```
<br>

### FULL JOIN (or FULL OUTER JOIN):
Retrieves all rows when there is a match in either the left or right table. If there is no match, NULL values are returned for columns from the table without a match.
```sql
SELECT * FROM Table1
FULL JOIN Table2 ON Table1.column = Table2.column;

-- These JOIN operations are powerful tools for querying data from multiple tables in a relational database. The choice of which JOIN to use depends on the specific requirements of your query and the relationships between the tables involved. The "ON" clause specifies the condition for the match between the tables.
```



## Aggregation
In relational database management systems (RDBMS), aggregation refers to the process of combining multiple data values into a single summary value. It is a powerful technique for analyzing and summarizing data, allowing you to extract meaningful insights from large datasets.<br>

### Here's a brief explanation of some common aggregate functions:
#### COUNT:
```sql
Counts the number of rows in a group.
SELECT COUNT(column_name) FROM table_name WHERE condition;
```
<br>

#### SUM:
```sql
Calculates the sum of values in a numeric column for a group.
SELECT SUM(column_name) FROM table_name WHERE condition GROUP BY grouping_column;
```
<br>

#### AVG:
```sql
Calculates the average (mean) of values in a numeric column for a group.
SELECT AVG(column_name) FROM table_name WHERE condition GROUP BY grouping_column;
```
#### MIN:
```sql
Retrieves the minimum value in a column for a group.
SELECT MIN(column_name) FROM table_name WHERE condition GROUP BY grouping_column;
```
<br>

### MAX:
```sql
Retrieves the maximum value in a column for a group.
SELECT MAX(column_name) FROM table_name WHERE condition GROUP BY grouping_column;
The GROUP BY clause is often used with aggregate functions to group the results based on one or more columns. This allows you to perform calculations on subsets of data within the table.
```
<br>

**Here's a simple example using the COUNT function:**
```sql
SELECT department, COUNT(employee_id) AS employee_count
FROM employees
GROUP BY department;
This query counts the number of employees in each department. The result will show the department names and the corresponding count of employees in each department.

Aggregation is a powerful feature in SQL that allows you to summarize and analyze data in meaningful ways, providing insights into the characteristics of your data.
```
<br>

## Normalization in RDBMS
In relational database management systems (RDBMS), normalization is a process of organizing data in a database to reduce redundancy and improve data integrity. It involves structuring a database in accordance with a series of so-called normal forms to ensure that data is stored efficiently and consistently.

There are several normal forms, and each level addresses specific types of data redundancy. The most commonly discussed normal forms are First Normal Form (1NF), Second Normal Form (2NF), and Third Normal Form (3NF). Let's briefly discuss each:

#### First Normal Form (1NF):
Ensures that each column in a table contains atomic (indivisible) values. There should be no repeating groups or arrays of data.

#### Second Normal Form (2NF):
Builds on 1NF and eliminates partial dependencies. A table is in 2NF if it is in 1NF and all non-key attributes are fully functionally dependent on the primary key.

#### Third Normal Form (3NF):
Builds on 2NF and eliminates transitive dependencies. A table is in 3NF if it is in 2NF and all attributes are functionally dependent only on the primary key.
