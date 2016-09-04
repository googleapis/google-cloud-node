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
  * [IAM](#iam)

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
  create <topicName>             Creates a new topic.
  list                           Lists topics.
  publish <topicName> <message>  Publish a message to the specified topic.
  delete <topicName>             Deletes the specified topic.

Options:
  --help  Show help                                                                                            [boolean]

Examples:
  node topics create greetings                             Creates a new topic named "greetings".
  node topics list                                         Lists all topics.
  node topics publish greetings '{"data":"Hello world!"}'  Publishes a message to "greetings".
  node topics delete greetings                             Deletes a topic named "greetings".

For more information, see https://cloud.google.com/pubsub/docs
```

[topics_docs]: https://cloud.google.com/pubsub/publisher
[topics_code]: topics.js

### Subscriptions

View the [documentation][subscriptions_docs] or the [source code][subscriptions_code].

__Usage:__ `node subscriptions --help`

```
Commands:
  create <topicName> <subscriptionName>  Creates a new subscription.
  list [topicName]                       Lists subscriptions, optionally filtering by a topic.
  get <subscriptionName>                 Gets the metadata the metadata for the specified subscription.
  pull <subscriptionName>                Pulls messages for the specified subscription.
  delete <subscriptionName>              Deletes the specified subscription.

Options:
  --help  Show help                                                                                            [boolean]

Examples:
  node subscriptions create greetings greetings-worker-1  Creates a subscription named "greetings-worker-1" to a topic
                                                          named "greetings".
  node subscriptions delete greetings-worker-1            Deletes a subscription named "greetings-worker-1".
  node subscriptions pull greetings-worker-1              Pulls messages for a subscription named "greetings-worker-1".
  node subscriptions list                                 Lists all subscriptions.
  node subscriptions list greetings                       Lists subscriptions for a topic named "greetings".

For more information, see https://cloud.google.com/pubsub/docs
```

[subscriptions_docs]: https://cloud.google.com/pubsub/subscriber
[subscriptions_code]: subscriptions.js

### IAM

View the [documentation][iam_docs] or the [source code][iam_code].

__Usage:__ `node iam --help`

```
Usage: node iam RESOURCE COMMAND [ARGS...]

Resources:

  topics
  subscriptions

Commands:

  get NAME
  set NAME
  test NAME

Examples:

  node iam topics get my-topic
  node iam topics set my-topic
  node iam topics test my-topic
  node iam subscriptions get my-subscription
  node iam subscriptions set my-subscription
  node iam subscriptions test my-subscription
```

[iam_docs]: https://cloud.google.com/pubsub/access_control
[iam_code]: iam.js
