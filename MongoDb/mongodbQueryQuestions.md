# Inserting a Document with an Array and Finding Duplicates in MongoDB

## Step 1: Insert a Document with an Array

To insert a document with an array into a MongoDB collection, you can use the following commands in the MongoDB shell:

```javascript
// Insert a single document
db.yourCollection.insertOne({
  "values": [1, 2, 3, 2, 4, 5, 1]
});
```

## Step 2: Find Duplicates within the Array
To find duplicates within the array in MongoDB, you can use the following aggregation query:

```javascript
db.yourCollection.aggregate([
  {
    $unwind: "$values"
  },
  {
    $group: {
      _id: {
        _id: "$_id",
        value: "$values"
      },
      count: { $sum: 1 }
    }
  },
  {
    $match: {
      count: { $gt: 1 }
    }
  },
  {
    $project: {
      _id: "$_id._id",
      value: "$_id.value"
    }
  }
]);
```

## Explanation of the stages:

#### $unwind: 
Deconstructs the "values" array into separate documents, creating a new document for each element in the array.

#### $group: 
Groups the documents by both the document _id and the individual values in the array. The $sum: 1 counts the occurrences of each value.

#### $match: 
Filters out groups where the count is not greater than 1, leaving only the groups with duplicates.

#### $project: 
Shapes the output to display the original document _id and the duplicated value.

This query will return documents indicating the _id of the original document and the duplicated values within the "values" array. Adjust the collection name and field names based on your actual MongoDB schema.