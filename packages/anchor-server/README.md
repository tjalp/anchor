# anchor-backend


# API documentation
(ps dit is outdated, zie code in api folder voor betere api info)
# posts
link: `(ip):(port)/api/v1/posts`

If there's an error in any of these, the response should be
```json
{
  "status": "failed",
  "error": "error information (string)",
}
```

# get posts
GET request to `(ip):(port)/api/v1/posts`
You can add a query for the title, example:
`(ip):(port)/api/v1/posts?title=Test`

Returns:
```json
{
  "posts": [
    {
    "_id": "post ID",
    "author": "author name",
    "title": "post title",
    "content": "post content",
    "date": "post date"
    }
  ],
  "page": 0,
  "filters": {
    "title": "post title filter"
  },
  "entries_per_page": 20,
  "total_results": 1
}
```

# Update post
PUT request to `(ip):(port)/api/v1/posts`
JSON body arguments:
```json
{
  "post_id": "(mongoDB post ID)",
  "title": "new title",
  "content": "new content"
}
```
title and content are optional
Returns:
```json
{
  "status": "success",
  "response": "(mongoDB respone object)"
}
```
See https://mongodb.github.io/node-mongodb-native/4.9/interfaces/UpdateResult.html to see what the mongoDB update respone is



# Create post
POST request to `(ip):(port)/api/v1/posts`
JSON body arguments:
```json
{
  "title": "post title",
  "content": "post content",
  "author": "post author name"
}
```
Returns:
```json
{
  "status": "success",
  "response": "(mongoDB insertOne respone object)"
}
```
See https://mongodb.github.io/node-mongodb-native/4.9/interfaces/InsertOneResult.html



# Delete post
DELETE request to `(ip):(port)/api/v1/posts`
```json
{
  "post_id": "post ID"
}
```
Returns:
```json
{
  "status": "success",
  "response": "(mongoDB deleteOne response object)"
}
```
See https://mongodb.github.io/node-mongodb-native/4.9/interfaces/DeleteResult.html

# Get post by ID
GET request to `(ip):(port)/api/v1/posts/id/(id)`
Returns
```json
{
  {
	"status": "success",
	"post": {
		"_id": "631ed6d882f8a62225664e63",
		"author": "Mathijs",
		"title": "Hallo",
		"content": "Hallo wereld!",
		"date": "2022-09-12T06:51:04.693Z"
	}
}
```
