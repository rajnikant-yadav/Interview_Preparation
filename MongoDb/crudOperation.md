## Creating a Database
#### There are two main ways to create a database in MongoDB:
**Using the use command:** The use command is the simplest way to create a database. It will automatically create the database if it does not already exist. For example, to create a database called myDatabase, we would use the following<br> 

```sql
command:
use myDatabase
```

<br>

## Delete Database 
```sql
db.dropDatabase() is used to Delete Database.
``` 
<br>

## Creating a Collection:
To create a collection, we don't need to explicitly create it; MongoDB will create the collection when we first insert data into it. Here's an example:
```sql
// Switch to the desired database (replace 'mydatabase' with your database name)
use mydatabase

// Insert a document into a collection (replace 'mycollection' with your collection name)
db.mycollection.insertOne({ name: "John Doe", age: 30 })
If a collection does not exist, MongoDB creates the collection when you first store data for that collection.
``` 
<br>

**MongoDB provides the db.createCollection() method to explicitly create a collection with various options, such as setting the maximum size or the documentation validation rules.**<br>
```sql
db.createCollection("student", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "age"],
      properties: {
        name: { bsonType: "string", description: "Must be a String and is required" },
        age: { bsonType: "int", description: "Must be an Integer and is required" }
      }
    }
  }
})
```
<br>

**If we wants to restrict the insertion of fields other than "name" and "age" in our MongoDB collection, we need to adjust our validator accordingly. Here's an updated version of our validator to achieve this:**<br>
```sql
db.createCollection("student", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "age"],
      properties: {
        name: { bsonType: "string", description: "Must be a String and is required" },
        age: { bsonType: "int", description: "Must be an Integer and is required" }
      },
      additionalProperties: false // This line restricts additional properties
    }
  }
});
```

## To delete a collection in MongoDB, you can use the drop method. Here's the query:
```sql
db.mycollection.drop()
```
<br>

## Querying a Collection:
Once you have data in a collection, you can query it using the find method. For example:
// Switch to the desired database (if you're not already in the correct database)
```sql
use mydatabase

// Find all documents in the collection (replace 'mycollection' with your collection name)
db.mycollection.find()
```
## In MongoDB, there are several ways to insert data into a collection. Here are the main methods
#### Insert a Single Document:
```sql
Use insertOne to insert a single document into the collection.
Example: 
db.mycollection.insertOne({ name: "John Doe", age: 30 })
```
#### Insert Multiple Documents:
Use insertMany to insert multiple documents into the collection.
```sql
Example:
db.mycollection.insertMany([
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 }
])
```
#### Insert or Update a Single Document:
Insert or Update a Single Document:
Use updateOne with the upsert option to insert or update a single document.
```sql
Example:
db.mycollection.updateOne(
  { name: "John Doe" },
  { $set: { age: 31 } },
  { upsert: true }
)
```
#### Insert or Update Multiple Documents:
Use updateMany with the upsert option to insert or update multiple documents.
```sql
Example:
db.mycollection.updateMany(
  { status: "A" },
  { $set: { status: "B" } },
  { upsert: true }
)
```
#### Insert with Custom _id:
You can specify a custom _id value when inserting a document.
```sql
Example:
db.mycollection.insertOne({ _id: 123, name: "Custom ID", age: 40 })
```
#### Specify a write concern to control the acknowledgment of the write operation.
```sql
Example:
db.mycollection.insertOne({ name: "Eve", age: 28 }, { writeConcern: { w: "majority" } })
```
#### Bulk Write Operations:
Bulk write operations in MongoDB allow you to perform multiple write operations (e.g., inserts, updates, deletes) in a single request. This can improve performance by reducing the number of round-trips between the application and the database.<br>
```sql
// Specify the bulk write operations
const bulkOperations = [
  // Insert operation
  { insertOne: { document: { name: "Alice", age: 25 } } },

  // Update operation
  { updateOne: { filter: { name: "John Doe" }, update: { $set: { age: 31 } } } },

  // Delete operation
  { deleteOne: { filter: { name: "Charlie" } } }
];

// Execute the bulk write operations
db.mycollection.bulkWrite(bulkOperations)
```
<b>

## MongoDB provides a variety of ways to fetch data from a collection. Here are some common methods
#### Find All Documents:
Use find to retrieve all documents in a collection.
```sql
Example:
db.mycollection.find()
```
#### Find Documents Matching a Query:
Use find with a query object to retrieve documents that match specific criteria.
```sql
Example:
db.mycollection.find({ age: 30 })

To fetch all documents from the users collection where the age is greater than 25, you would use the following statement:
db.users.find({ age: { $gt: 25 } });
```

#### Find One Document:
Use findOne to retrieve a single document that matches the specified criteria.
```sql
Example:
db.mycollection.findOne({ name: "John Doe" })
```
#### Limit the Number of Results:
Use limit to restrict the number of documents returned.
```Example:
db.mycollection.find().limit(5)
```
#### Skip Documents:
The skip method in MongoDB is used to skip a specified number of documents and then retrieve the remaining documents. It is often combined with other query operators like find to implement pagination or to skip a certain number of records at the beginning of a result set.  Additionally, if you want to skip from the end of the result set, you can use the sort method to reverse the order of documents before applying skip and limit.
```sql
db.mycollection.find().skip(10)   // skip first 10 document in a collection

Suppose you have a collection named mycollection with the following documents:
[
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 40 },
  { name: "Eve", age: 45 }
]
// Skip the first two documents and retrieve the rest
db.mycollection.find().skip(2)
In this example, the result will be:
[
  { name: "Charlie", age: 35 },
  { name: "David", age: 40 },
  { name: "Eve", age: 45 }
]
```
#### Sort Documents:
The sort method in MongoDB is used to order the results of a query based on a specific field. You can specify the field by which you want to sort and the order in which you want the results to be arranged—either in ascending order (1) or descending order (-1)<br>

#### Projection (Include/Exclude Fields):
Use projection to include or exclude specific fields from the result.
```sql
Example:
db.mycollection.find({}, { name: 1, age: 1, _id: 0 }) // Include name and age, exclude _id
```
#### Count Documents:
Use count to get the count of documents that match a query.
```sql
Example:
db.mycollection.find({ age: { $gte: 25 } }).count()
```

## Aggregation Pipeline:
In MongoDB, an aggregation pipeline is a series of operations that process and transform data from a collection. Each operation in the pipeline is called a stage, and the output of one stage is passed as the input to the next stage. Aggregation pipelines are powerful tools for performing complex data analysis and manipulation.<br>

**Benefits of using Aggregation Pipelines:**
Modular and reusable: Aggregation pipelines can be broken down into smaller, reusable stages, making them easier to understand and maintain.
Perform complex operations: Aggregation pipelines can perform a wide range of operations, including filtering, sorting, grouping, and calculating values.
Efficient: Aggregation pipelines are optimized for performance, making them well-suited for large datasets.<br>
**Common Aggregation Pipeline Stages:**
```sql
$match: Filters documents based on specified criteria.
$project: Selects or transforms fields in a document.
$unwind: Splits an array field into multiple documents.
$group: Groups documents together based on specified criteria and performs calculations on the grouped documents.
$sort: Sorts documents based on specified fields.
$out: Writes the results of the pipeline to a collection or file.
Examples of Aggregation Pipeline Usage:

Calculate the average price of products:
db.products.aggregate([
  { $match: { price: { $gt: 0 } } },
  { $group: { _id: null, avgPrice: { $avg: "$price" } } }
])
Find the most popular products:
db.products.aggregate([
  { $unwind: "$categories" },
  { $group: { _id: "$categories", count: { $count: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 10 }
])
Generate a report on customer orders:
db.orders.aggregate([
  { $match: { status: "completed" } },
  { $unwind: "$items" },
  { $group: {
    _id: "$customerID",
    totalSpent: { $sum: "$items.price" },
    averageOrderValue: { $avg: "$items.price" },
    numberOfOrders: { $count: 1 }
  } }
])
Aggregation pipelines are a powerful and versatile tool for working with data in MongoDB. By understanding the different stages and how to combine them, you can perform complex data analysis and manipulation with ease.
```
<br>

### Distinct Values:
Use distinct to get unique values for a specific field.
```sql
Example
db.mycollection.distinct("name")
```
<br>

##  MongoDB provides various methods for updating documents in a collection. Here are some common ways
#### 1. Update a Single Document:
```sql
Method: updateOne
Updates a single document that matches the specified filter.
db.mycollection.updateOne({ name: "John Doe" }, { $set: { age: 31 } })
```
#### 2. Update Multiple Documents:
```sql
Method: updateMany
Updates all documents that match the specified filter
db.mycollection.updateMany({ status: "A" }, { $set: { status: "B" } })
```
#### 3. Replace a Document:
```sql 
Method: replaceOne
Replaces a single document with the provided document.
db.mycollection.replaceOne({ name: "John Doe" }, { name: "Jane Doe", age: 32 })
```
#### 4. Increment a Field:
```sql
Method: $inc with updateOne
Increments the value of the age field by 1 for a specific document.
db.mycollection.updateOne({ name: "Alice" }, { $inc: { age: 1 } })
```
#### 5. Set a Field Only If Not Present:
```sql
Method: $setOnInsert with update
Sets the age field and the created_at field only if the document doesn't exist (upsert).
db.mycollection.update(
  { name: "New User" },
  { $set: { age: 25 }, $setOnInsert: { created_at: new Date() } },
  { upsert: true }
)
```

#### 6. Conditional Updates:
```sql
Method: $set with update and a condition
Sets the status field to "Young" for documents where the age is less than 30.
db.mycollection.update(
  { name: "Bob", age: { $lt: 30 } },
  { $set: { status: "Young" } }
)
```

#### 7. Update with Aggregation Pipeline:
```sql
Method: update with aggregation pipeline
Updates documents using an aggregation pipeline for more complex transformations.
db.mycollection.update(
  { status: "A" },
  [
    { $set: { newField: { $add: ["$field1", "$field2"] } } }
  ]
)
```

#### 1. Find and Update a Single Document:
```sql
Method: findOneAndUpdate
db.mycollection.findOneAndUpdate(
  { name: "John Doe" },
  { $set: { age: 31 } },
  { returnDocument: "after" } // Optionally return the updated document
)
Finds a document based on the filter criteria and updates it atomically.
```
<br>

## MongoDB provides several methods for deleting documents. Here are the main ways to delete documents

#### 1. Delete a Single Document:
```sql
Method: deleteOne
Deletes a single document in the collection that matches the specified filter criteria.
db.mycollection.deleteOne({ name: "John Doe" })
```

#### 2. Delete Multiple Documents:
```sql
Deletes all documents in the collection that match the specified filter criteria.
db.mycollection.deleteMany({ status: "inactive" })
```
#### 3. Delete a Document by Its _id:
```sql
Deletes a document by its _id. Ensure you use the correct ObjectId for the document you want to delete.
db.mycollection.deleteOne({ _id: ObjectId("document_id_here") })
```

#### 4. Delete Documents Based on a Condition:
```sql
Deletes all documents where the age is greater than or equal to 40.
db.mycollection.deleteMany({ age: { $gte: 40 } })
```
#### 5. Delete Documents Using Aggregation Pipeline:
```sql
Method: aggregate with $out
db.mycollection.aggregate([
  { $match: { status: "inactive" } },
  { $out: "mycollection" }
])
```