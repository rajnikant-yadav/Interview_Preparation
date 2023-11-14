# NoSQL Databases
## Definition:
NoSQL databases are a category of database systems designed to handle and store unstructured or semi-structured data. "NoSQL" stands for "not only SQL."<b>

## Why use it?
NoSQL databases are used when dealing with data without a fixed structure, providing flexibility for large amounts of data and users.<b>

## Key Characteristics:
- **Schema-less or Schema-flexible:** NoSQL databases often do not require a fixed schema, allowing for flexibility in data representation.<b>
- **Horizontal Scalability:** Designed to scale horizontally by adding more servers or nodes to handle increased load.<b>

## MongoDB Key Features:
#### Document-Oriented:
MongoDB stores data in flexible, JSON-like documents, suitable for representing real-world entities.<b>
#### JSON-Like Documents:
Data in MongoDB is stored in BSON (Binary JSON) format, which aligns well with the structure of many programming languages.<b>
#### Dynamic Schema:
MongoDB employs a dynamic schema, allowing documents in the same collection to have different fields, providing adaptability.<b>
#### Scalability:
Designed to scale horizontally by sharding data across multiple servers or nodes.<b>
#### Indexing:
Supports the creation of indexes on fields to improve query performance.<b>
#### Aggregation Framework:
Provides a powerful Aggregation Framework for data transformation and analysis within the database itself.<b>
#### Geospatial Indexing:
Built-in support for geospatial indexing, making it suitable for location-based applications.<b>
#### Sharding:
Sharding in MongoDB is a technique used for horizontal scaling, distributing data across multiple servers (shards) to improve performance and handle large amounts of data. Let's break down how sharding works in MongoDB:<b>

## Key Concepts of Sharding:
#### Data Distribution:
In sharding, data is divided into smaller chunks called shards. Each shard represents a subset of the overall data. This division is typically done based on a shard key, which is a chosen attribute of the data.<b>

#### Shard Key:
The shard key is a field or a combination of fields chosen to determine how data is distributed across shards. It's crucial to choose a shard key that evenly distributes data and aligns with your application's query patterns.
Shard Server (Node):<b>

#### Shard Servers (Nodes):
Each shard is a separate MongoDB server or node. These shard servers collectively form a sharded cluster. Shards are responsible for storing a portion of the data.<b>
#### Sharded Collection:
A sharded collection is a MongoDB collection that is split across multiple shards. Each shard is responsible for a subset of the collection's data.<b>

## Sharding Process:
#### Enable Sharding for a Database:
To enable sharding for a database, you use the shardCollection command. This command tells MongoDB which collection to shard and on which key.<b>

```mongodb
sh.shardCollection("mydb.mycollection", { shardKey: 1 });
Determine Shard Key:
```
Choosing an appropriate shard key is critical. It influences how data is distributed across shards. It's often chosen based on query patterns and data distribution characteristics.
Data Distribution:

MongoDB automatically divides the data in the sharded collection into chunks based on the shard key. Each chunk represents a range of values of the shard key.

### Query Routing:
When a query is made to the database, the system uses the shard key to determine which shard or shards need to be involved in fulfilling the query. This is akin to knowing which bookshelf(s) to check for a specific genre of book

### Balancing the Load:
Sharding helps distribute the workload across multiple servers, preventing any single server from becoming a bottleneck. It's like making sure no bookshelf is overloaded while others remain empty.

### Scalability:
Sharding provides a scalable solution as you can add more shards (bookshelves) and servers to the system as your data and user load increase. It's akin to adding more bookshelves to accommodate a growing library.


## Indexing in MongoDB:
MongoDB supports various types of indexes to improve query performance and facilitate efficient data retrieval. Here are some common types of indexes in MongoDB:

### Single Field Index:
This is the most basic type of index and involves creating an index on a single field. It helps speed up queries that involve filtering or sorting based on that specific field.

db.collection.createIndex({ fieldName: 1 });
Here, 1 indicates an ascending index, and -1 would be for a descending index.

### Compound Index:
A compound index involves creating an index on multiple fields. This is useful when queries involve more than one field in the filter or sort conditions.

db.collection.createIndex({ field1: 1, field2: -1 });
This index can be beneficial for queries that filter or sort based on both field1 and field2.


### Text Index:
Text indexes are specifically designed for text search queries. They are used to perform full-text searches on string content within the collection.

db.collection.createIndex({ textField: "text" });


### Geospatial Index:
Geospatial indexes support queries that involve geographical data. This type of index is used when dealing with location-based queries like finding nearby points.

db.collection.createIndex({ locationField: "2dsphere" });

### Wildcard Index:
Wildcard indexes support queries with wildcard characters. These indexes can be used for pattern matching queries.

db.collection.createIndex({ textField: "text" });

### Hashed Index:
Hashed indexes are suitable for equality queries on fields. They are used when you want to distribute data uniformly across the collection.

db.collection.createIndex({ hashedField: "hashed" });
Hashed indexes are efficient for equality queries but not suitable for range queries.

### Unique Index:
A unique index ensures that no two documents in the collection have the same values for the indexed field or fields.

db.collection.createIndex({ uniqueField: 1 }, { unique: true });
In this example, unique: true enforces uniqueness on the uniqueField.

### TTL (Time-To-Live) Index:
A TTL index automatically deletes documents from a collection after a certain period. This is useful for expiring data, such as session documents.

db.collection.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 });
In this example, documents will be automatically deleted after one hour (3600 seconds) based on the createdAt field.

These are some of the key types of indexes in MongoDB. Choosing the appropriate index type depends on the nature of your queries and the data in your collection. It's often beneficial to carefully plan and analyze query patterns to create indexes that optimize performance.