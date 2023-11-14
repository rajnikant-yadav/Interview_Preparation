# Normalization
In MongoDB, normalization refers to the process of organizing data within a database by reducing redundancy and dependency. The goal of normalization is to eliminate data redundancy and improve data integrity by structuring data in a way that minimizes the potential for anomalies during data modifications.

In relational database terms, normalization typically involves decomposing a table into smaller tables and establishing relationships between them. However, MongoDB is a NoSQL database, and it doesn't enforce a rigid schema like traditional relational databases. MongoDB's flexible schema allows for the storage of documents in a rich, nested format, making it different from the tabular structure of relational databases.

In MongoDB, normalization is often interpreted differently compared to traditional relational databases. Instead of normalizing data into separate tables, it's common to denormalize data by embedding documents or referencing documents within other documents. This approach is influenced by the document-oriented nature of MongoDB.

Here are two common strategies related to normalization in MongoDB:

### 1. Embedding Documents:
Embedding involves nesting one document within another. This is suitable when the nested document is a natural part of the parent document and when the nested data doesn't change frequently.<br>

```javascript
Example:
{
  "_id": 1,
  "name": "John Doe",
  "address": {
    "street": "123 Main St",
    "city": "Cityville",
    "zip": "12345"
  }
}
```

### 2. Referencing Documents:
Referencing involves storing a reference (typically the _id field) to another document instead of embedding it. This is suitable when the referenced document is large, changes frequently, or needs to be shared among multiple parent documents.<br>

```javascript
Example:
// Parent Document
{
  "_id": 1,
  "name": "John Doe",
  "address": ObjectId("address_id_here")
}

// Referenced Document
{
  "_id": ObjectId("address_id_here"),
  "street": "123 Main St",
  "city": "Cityville",
  "zip": "12345"
}
```

