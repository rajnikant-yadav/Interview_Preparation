# ElasticSearch APIs
## Index APIs 
#### Create Index API:
Creates a new index with specified settings and mappings.
PUT /new_index
```javascript
PUT /my_index
{
  "settings": {
    "number_of_shards": 1
  },
  "mappings": {
    "properties": {
      "user": {
        "type": "text"
      },
      "age": {
        "type": "integer"
      }
    }
  }
}
// This example creates a new index named my_index with one shard, and defines two fields (user and age) with their respective data types.
```
<br>

#### Delete Index API:
Deletes an existing index.
DELETE /index_name
```javascript
DELETE /my_index
// This example deletes the index named my_index. Be careful, as this operation is irreversible.
```
<br>

#### Index Aliases API:
Manages aliases for indices.
POST /_aliases
```javascript
POST /_aliases
{
  "actions": [
    {
      "add": {
        "index": "my_index",
        "alias": "my_data"
      }
    }
  ]
}
// This example adds an alias named my_data to the index my_index. Aliases are useful for renaming indices or associating multiple indices with a single alias.
```
<br>

#### Get Index Settings API:
Retrieves the settings of an index.
GET /index_name/_settings
```javascript
GET /my_index/_settings
// This example retrieves the settings of the index named my_index.
```
<br>

#### Update Index Settings API:
Updates the settings of an index.
PUT /index_name/_settings
```javascript
PUT /my_index/_settings
{
  "settings": {
    "number_of_replicas": 2
  }
}

// This example updates the number of replicas for the index named my_index to 2.
```
<br>

#### Get Mapping API:
Retrieves the mapping of an index.
GET /index_name/_mapping
```javascript
GET /my_index/_mapping

// This example retrieves the mapping of the index named my_index. The mapping defines the fields and their data types in the index.
```
<br>

#### Put Mapping API:
Creates or updates the mapping of an index.
PUT /index_name/_mapping
```javascript
PUT /my_index/_mapping
{
  "properties": {
    "email": {
      "type": "keyword"
    }
  }
}
// This example adds a new field (email) with a data type of keyword to the mapping of the index named my_index.
```
These are some of the main Index APIs in Elasticsearch. They allow you to create and manage indices, aliases, and mappings, as well as retrieve and update index settings. Adjust the index name, settings, mappings, and other parameters based on your specific use case.

<br>

## Document APIs
#### Index API:
Creates a new document or updates an existing document.
PUT /index_name/_doc/document_id
```javascript
PUT /my_index/_doc/1
{
  "user": "john_doe",
  "age": 28,
  "city": "New York"
}

// This example creates a document with an ID of 1 in the index named my_index
```
<br>

#### Get API:
Retrieves a document by its ID.
GET /index_name/_doc/document_id
```javascript
GET /my_index/_doc/1

// This example retrieves the document with ID 1 from the index named my_index
```
<br>

#### Delete API:
Deletes a document by its ID.
DELETE /index_name/_doc/document_id
```javascript
DELETE /my_index/_doc/1
// This example deletes the document with ID 1 from the index named my_index.
```
<br>

#### Update API:
Updates a document by merging the provided JSON with the existing document.
POST /index_name/_doc/document_id/_update
```javascript
POST /my_index/_doc/1/_update
{
  "doc": {
    "age": 29
  }
}
//This example updates the age field of the document with ID 1 in the index named my_index.
```
<br>

#### Bulk API:
Performs multiple index, delete, or update operations in a single request.
POST /index_name/_bulk
```javascript
POST /my_index/_bulk
{ "index": { "_id": "1" }}
{ "user": "john_doe", "age": 28, "city": "New York" }
{ "delete": { "_id": "2" }}
{ "update": { "_id": "3" }}
{ "doc": { "age": 30 }}

// This example indexes a new document, deletes a document, and updates a document in the index named my_index within a single bulk request.
// These are some of the fundamental Document APIs in Elasticsearch. They allow you to interact with the documents in your index, whether it's for indexing, retrieving, updating, or deleting data. Adjust the index name, document ID, and document content based on your specific use case.
```
<br>

## Search APIs
#### Search API
Performs a search query against one or more indices.
GET /index_name/_search
```javascript
GET /my_index/_search
{
  "query": {
    "match": {
      "user": "john"
    }
  }
}
// This example searches for documents in the index named my_index where the user field contains the term "john".
```
#### Count API:
Returns the number of documents that match a query.
GET /index_name/_count
```javascript
GET /my_index/_count
{
  "query": {
    "range": {
      "age": {
        "gte": 25
      }
    }
  }
}
// This example counts the number of documents in the index named my_index where the age field is greater than or equal to 25.
```
<br>

#### Multi-Search API:
Executes multiple search requests within a single HTTP request.
POST /_msearch
```javascript
POST /_msearch
{ }
{ "query": { "match": { "user": "john" }}}
{ }
{ "query": { "match": { "user": "jane" }}}
This example performs two separate search requests in a single multi-search request. The response contains results for each query.
```
<br>

#### Search Shards API:
Returns information about the indices and shards that a search request is executed against.
GET /index_name/_search_shards
```javascript
GET /my_index/_search_shards
{
  "routing": "john"
}
This example retrieves information about the shards involved in the search for documents containing the routing value "john" in the index named my_index.
```
<br>

#### Search Template API:
Allows you to use Mustache templates to define scripts for search requests.
POST /_scripts/search_template
```javascript
POST /_scripts/search_template
{
  "script": {
    "lang": "mustache",
    "source": {
      "query": {
        "match": {
          "user": "{{query_string}}"
        }
      }
    }
  }
}
// This example creates a search template script that uses Mustache syntax to generate a query. The {{query_string}} is a placeholder for the actual query.
```

These are some of the main Search APIs in Elasticsearch. They allow you to perform various types of searches, count documents, execute multiple searches in a single request, and obtain information about the shards involved in a search. Adjust the index name, query conditions, and other parameters based on your specific use case.

## Cluster APIs
#### Cluster Health API:
Returns the health of the cluster.
GET /_cluster/health
```javascript
GET /_cluster/health
// This example retrieves the overall health of the cluster, including the status (green, yellow, or red), the number of active and initializing shards, and more.
```
<br>

#### Cluster State API:
Returns the state of the cluster.
GET /_cluster/state
```javascript
GET /_cluster/state

// This example retrieves the current state of the entire cluster, including information about nodes, indices, and shard allocation.
```
<br>

#### Cluster Stats API:
Returns high-level cluster statistics.
GET /_cluster/stats
```javascript
GET /_cluster/stats

// This example retrieves various statistics about the cluster, such as the number of nodes, indices, and shards, as well as memory and disk usage.
```
<br>

#### Nodes Info API:
Returns information about nodes in the cluster.
GET /_nodes
```javascript
GET /_nodes

// This example retrieves information about all nodes in the cluster, including details about their roles, transport addresses, and more.
```
<br>

#### Nodes Stats API:
Returns statistics about nodes in the cluster.
GET /_nodes/stats
```javascript
GET /_nodes/stats

// This example retrieves detailed statistics about all nodes in the cluster, including information about indices, JVM, filesystem, and more.
```
<br>

#### Pending Tasks API:
Returns the number of cluster-level changes that are currently being executed or waiting to be executed.
GET /_cluster/pending_tasks
```javascript
GET /_cluster/pending_tasks

// This example retrieves information about tasks that are currently pending or being executed at the cluster level.
```
<br>

#### Cluster Allocation Explain API:
Provides explanations for shard allocations in the cluster.
GET /_cluster/allocation/explain
```javascript
GET /_cluster/allocation/explain
{
  "index": "my_index",
  "shard": 0,
  "primary": true
}

This example retrieves an explanation for the allocation of a specific shard in the cluster, indicating why it is assigned to a particular node.
```
These are some of the main Cluster APIs in Elasticsearch. They allow you to monitor the health and status of the entire cluster, obtain statistics about nodes, and investigate cluster-level changes and allocations. Adjust the parameters based on your specific use case.

<br>

## Other APIs
Snapshot: Creates a snapshot of an Elasticsearch index.<br>
Restore: Restores a snapshot of an Elasticsearch index.<br>
Reindex: Copies documents from one Elasticsearch index to another.<br>
Percolate: Checks if a document matches a search query, without returning the document itself.<br>
Scroll: Allows you to iterate over a large number of search results without having to load all of the results into memory at once.
<br>
These are just a few of the many APIs that are available in Elasticsearch. For more information, please see the Elasticsearch documentation: https://www.elastic.co/guide/en/elasticsearch/reference/current/docs.html.