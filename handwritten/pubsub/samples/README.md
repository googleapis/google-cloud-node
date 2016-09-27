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

__Usage:__ `node topics --help`

```
Commands:
  list                           Lists all topics in the current project.
  create <topicName>             Creates a new topic.
  delete <topicName>             Deletes the a topic.
  publish <topicName> <message>  Publishes a message.
  getPolicy <topicName>          Gets the IAM policy for a topic.
  setPolicy <topicName>          Sets the IAM policy for a topic.
  testPermissions <topicName>    Tests the permissions for a topic.

Options:
  --help  Show help                                                                                            [boolean]

Examples:
  node topics.js list                                          Lists all topics in the current project.
  node topics.js create greetings                              Creates a new topic named "greetings".
  node topics.js delete greetings                              Deletes a topic named "greetings".
  node topics.js publish greetings "Hello, world!"             Publishes a simple message.
  node topics.js publish greetings '{"data":"Hello, world!"}'  Publishes a JSON message.
  node topics.js getPolicy greetings                           Gets the IAM policy for a topic named "greetings".
  node topics.js setPolicy greetings                           Sets the IAM policy for a topic named "greetings".
  node topics.js testPermissions greetings                     Tests the permissions for a topic named "greetings".

For more information, see https://cloud.google.com/pubsub/docs
```

[topics_docs]: https://cloud.google.com/pubsub/publisher
[topics_code]: topics.js

### Subscriptions

View the [documentation][subscriptions_docs] or the [source code][subscriptions_code].

__Usage:__ `node subscriptions --help`

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
  --help  Show help                                                                                            [boolean]

Examples:
  node subscriptions.js list                                    Lists all subscriptions in the current project.
  node subscriptions.js list greetings                          Lists all subscriptions for a topic named "greetings".
  node subscriptions.js create greetings greetings-worker-1     Creates a subscription named "greetings-worker-1" to a
                                                                topic named "greetings".
  node subscriptions.js create-push greetings                   Creates a push subscription named "greetings-worker-1"
  greetings-worker-1                                            to a topic named "greetings".
  node subscriptions.js get greetings-worker-1                  Gets the metadata for a subscription named
                                                                "greetings-worker-1".
  node subscriptions.js delete greetings-worker-1               Deletes a subscription named "greetings-worker-1".
  node subscriptions.js pull greetings-worker-1                 Pulls messages for a subscription named
                                                                "greetings-worker-1".
  node subscriptions.js get-policy greetings-worker-1           Gets the IAM policy for a subscription named
                                                                "greetings-worker-1".
  node subscriptions.js set-policy greetings-worker-1           Sets the IAM policy for a subscription named
                                                                "greetings-worker-1".
  node subscriptions.js test-permissions greetings-worker-1     Tests the permissions for a subscription named
                                                                "greetings-worker-1".

For more information, see https://cloud.google.com/pubsub/docs
```

[subscriptions_docs]: https://cloud.google.com/pubsub/subscriber
[subscriptions_code]: subscriptions.js
