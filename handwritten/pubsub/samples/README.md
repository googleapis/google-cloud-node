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
  create <name>              Create a new topic.
  list                       List topics.
  publish <topic> <message>  Publish a message to the specified topic.
  delete <name>              Delete the specified topic.

Options:
  --help  Show help                                                    [boolean]

Examples:
  node topics create my-topic               Create a new topic named "my-topic".
  node topics list                          List topics.
  node topics publish my-topic              Publish a message to "my-topic".
  '{"data":"Hello world!"}'
  node topics delete my-topic               Delete a topic named "my-topic".

For more information, see https://cloud.google.com/pubsub/docs
```

[topics_docs]: https://cloud.google.com/pubsub/publisher
[topics_code]: topics.js

### Subscriptions

View the [documentation][subscriptions_docs] or the [source code][subscriptions_code].

__Usage:__ `node subscriptions --help`

```
Commands:
  create <topic> <name>  Create a new subscription.
  list [topic]           List subscriptions.
  pull <subscription>    Pull messages from the specified subscription.
  delete <subscription>  Delete the specified subscription.

Options:
  --help  Show help                                                                        [boolean]

Examples:
  node subscriptions create my-topic my-subscription  Create a new subscription.
  node subscriptions delete my-subscription           Delete a subscription.
  node subscriptions pull my-subscription             Pull messages from "my-subscription".
  node subscriptions list                             List all subscriptions.
  node subscriptions list my-topic                    List subscriptions to topic "my-topic".

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
