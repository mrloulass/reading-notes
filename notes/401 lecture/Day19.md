# Code 401 - Advanced Software Development

## 401 Reading Notes: Class 19: AWS: Events

### SNS (Simple Notification Service)

- Function via a `topic`: this would be and event in socket.io
- Broadcast message to a large number of clients (any client machine that is a subscriber)

### SQS (Simple Queue Service)

- Our message management system, much like our MessageQueue` class
  - can be configured using FiFo ordering, or 'standard' any client can get messages in any order.
- Benefit: gaurantees delivery of messages
- Con: message are read by a single consumer, not all clients.

### Code Review

- Push to Repo 
- Code get's added to an s3 bucket
- And then set

### Warm Up

Hambuger menu

  - React Bootstrap 


### Type Demo

- go to AWS console

- AWS SNS
 - create topic


- Lambda
  - create new function (new Handler)
    - node
    - create subsritpton
      - Protocal (AWS Lambda)
      - endpoint (pick the one with Handler name)


1. Create an SNS topic
  - Create a new Lambda function that can handle and SNS evnet
2. Add your newly created Lambda function as a subscriber to the SNS topic.

3. Publish an SNS message from node;

  - Ensure that your user has `FullSQSPermissions` policy attached to the IAM role assigned to your AWS user.

  - Use the following code to publish an event:

```javascript

const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2' });

const sns = new AWS.SNS();

const topic = 'YOUR AWS SNS TOPIC ARN';

const payload = {
  Message: 'Hello from node',
  TopicArn: topic,
}

sns.publish(payload).promise()
  .then(data => {
    console.log(data);
  })
  .catch(console.error);

  ```

4. Check your Lambda function logs to make sure your event was picked up.



