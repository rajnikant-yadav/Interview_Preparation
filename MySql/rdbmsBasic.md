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
