# Code 401 - Advanced Software Development

## 401 Reading Notes: Class 18: API Gateway and Dynamo DB

### Warm Up

### Code Review

S3 + Lambda Integration

### API Gateway

It is AWS version of Express: server that does HTTP requests, (dexigned with REST)

  - PUT, POST, DELETE, GET (methods)
    - Map to CRUD method 
  - URL endpoints dictates what resource we are modifying

  ![CRUD / Rest](https://usercontent.one/wp/www.kennethlange.com/wp-content/uploads/2018/10/task_api.png)

How to start:
  - AWS console
    - click API Gateway
      - REST API -> build
        - click NEW API type (API name)
          - type resource name
            - click method (GET)
              - Lambda write a lambda function in the field and click create
              - go add create a Lambda function in Lamdba
                


### Dynamo

Cloud database, that we can configure to respond to AWS products (like API Gateway, or lambda functions)
  - NoSQL based, Document like JSON

How to start:
  - AWS console
    - click DynamoDB
      - Create table
        - type table anem
        - id (p key) (string)
        - click create item
          - need to add items
        go to Lambda
          - configuration
          - roles
          - attach new policy
            - dymnoda (full access)

Go back to Lambda

``` javascript

const dynamoose= require('dynamoose');

const schema = new dynamoose.Schema({
  'id': String,
  'name': String,
  'phone': String,
})

//first argument, yells dynamoose what table to connect to

const friendModel = dynamoose.model('firends', schema);

exports.handler = async (event) => {



}
```
create a repo in git to add dynamoose
copy code

