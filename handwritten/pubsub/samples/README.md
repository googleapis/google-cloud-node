<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# Google Cloud Pub/Sub Node.js Samples

[Cloud Pub/Sub][pubsub_docs] is a fully-managed real-time messaging service that
allows you to send and receive messages between independent applications.

[pubsub_docs]: https://cloud.google.com/pubsub/docs/

## Table of Contents

* [Setup](#setup)
* [Samples](#samples)
  * [Topics](#topics)
  * [Subscriptions](#subscriptions)

## Setup

1. Read [Prerequisites][prereq] and [How to run a sample][run] first.
1. Install dependencies:

        npm install

[prereq]: ../README.md#prerequisities
[run]: ../README.md#how-to-run-a-sample

## Samples

### Topics

View the [documentation][topics_docs] or the [source code][topics_code].

__Usage:__ `node topics.js --help`

```
Commands:
  list                                   Lists all topics in the current project.
  create <topicName>                     Creates a new topic.
  delete <topicName>                     Deletes a topic.
  publish <topicName> <message>          Publishes a message to a topic.
  publish-ordered <topicName> <message>  Publishes an ordered message to a topic.
  get-policy <topicName>                 Gets the IAM policy for a topic.
  set-policy <topicName>                 Sets the IAM policy for a topic.
  test-permissions <topicName>           Tests the permissions for a topic.

Options:
  --help  Show help                                                    [boolean]

Examples:
  node topics.js list
  node topics.js create my-topic
  node topics.js delete my-topic
  node topics.js publish my-topic "Hello, world!"
  node topics.js publish my-topic '{"data":"Hello, world!"}'
  node topics.js get-policy greetings
  node topics.js set-policy greetings
  node topics.js test-permissions greetings

For more information, see https://cloud.google.com/pubsub/docs
```

[topics_docs]: https://cloud.google.com/pubsub/publisher
[topics_code]: topics.js

### Subscriptions

View the [documentation][subscriptions_docs] or the [source code][subscriptions_code].

__Usage:__ `node subscriptions.js --help`

```
Commands:
  list [topicName]                            Lists all subscriptions in the current project, optionally filtering by a
                                              topic.
  create <topicName> <subscriptionName>       Creates a new subscription.
  create-push <topicName> <subscriptionName>  Creates a new push subscription.
  delete <subscriptionName>                   Deletes a subscription.
  get <subscriptionName>                      Gets the metadata for a subscription.
  pull <subscriptionName>                     Pulls messages for a subscription.
  get-policy <subscriptionName>               Gets the IAM policy for a subscription.
  set-policy <subscriptionName>               Sets the IAM policy for a subscription.
  test-permissions <subscriptionName>         Tests the permissions for a subscription.

Options:
  --help  Show help                                                    [boolean]

Examples:
  node subscriptions.js list
  node subscriptions.js list my-topic
  node subscriptions.js create my-topic worker-1
  node subscriptions.js create-push my-topic worker-1
  node subscriptions.js get worker-1
  node subscriptions.js delete worker-1
  node subscriptions.js pull worker-1
  node subscriptions.js get-policy worker-1
  node subscriptions.js set-policy worker-1
  node subscriptions.js test-permissions worker-1

For more information, see https://cloud.google.com/pubsub/docs
```

[subscriptions_docs]: https://cloud.google.com/pubsub/subscriber
[subscriptions_code]: subscriptions.js
