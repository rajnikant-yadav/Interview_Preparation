## Creating a Database

There are two main ways to create a database in MongoDB:

Using the use command: The use command is the simplest way to create a database. It will automatically create the database if it does not already exist. For example, to create a database called myDatabase, we would use the following command:
use myDatabase

Inserting data: When we insert data into a collection, MongoDB will automatically create the database if it does not already exist. For example, to insert a document into a collection called myCollection in a database called myDatabase, 

We would use the following command:
db.myCollection.insertOne({ name: "John Doe", age: 30 })

## Delete Database 
db.dropDatabase() is used to Delete Database.

## Creating a Collection:

To create a collection, we don't need to explicitly create it; MongoDB will create the collection when we first insert data into it. Here's an example:

// Switch to the desired database (replace 'mydatabase' with your database name)
use mydatabase

// Insert a document into a collection (replace 'mycollection' with your collection name)
db.mycollection.insertOne({ name: "John Doe", age: 30 })
If a collection does not exist, MongoDB creates the collection when you first store data for that collection.

**MongoDB provides the db.createCollection() method to explicitly create a collection with various options, such as setting the maximum size or the documentation validation rules.**

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

**If we wants to restrict the insertion of fields other than "name" and "age" in our MongoDB collection, we need to adjust our validator accordingly. Here's an updated version of our validator to achieve this:**

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

## In MongoDB, there are several ways to insert data into a collection. Here are the main methods
### Insert a Single Document:
Use insertOne to insert a single document into the collection.
Example: 
db.mycollection.insertOne({ name: "John Doe", age: 30 })

### Insert Multiple Documents:
Use insertMany to insert multiple documents into the collection.
Example:
db.mycollection.insertMany([
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 }
])

### Insert or Update a Single Document:
Insert or Update a Single Document:
Use updateOne with the upsert option to insert or update a single document.
Example:
db.mycollection.updateOne(
  { name: "John Doe" },
  { $set: { age: 31 } },
  { upsert: true }
)

## Insert or Update Multiple Documents:
Use updateMany with the upsert option to insert or update multiple documents.
Example:
db.mycollection.updateMany(
  { status: "A" },
  { $set: { status: "B" } },
  { upsert: true }
)

## Insert with Custom _id:
You can specify a custom _id value when inserting a document.
Example:
db.mycollection.insertOne({ _id: 123, name: "Custom ID", age: 40 })

## Specify a write concern to control the acknowledgment of the write operation.
Example:
db.mycollection.insertOne({ name: "Eve", age: 28 }, { writeConcern: { w: "majority" } })

## Bulk Write Operations:
Bulk write operations in MongoDB allow you to perform multiple write operations (e.g., inserts, updates, deletes) in a single request. This can improve performance by reducing the number of round-trips between the application and the database.

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






























## Querying a Collection:

Once you have data in a collection, you can query it using the find method. For example:
// Switch to the desired database (if you're not already in the correct database)
use mydatabase

// Find all documents in the collection (replace 'mycollection' with your collection name)
db.mycollection.find()

