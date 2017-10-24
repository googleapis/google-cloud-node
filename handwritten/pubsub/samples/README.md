<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# Google Cloud Pub/Sub Node.js Samples

[![Build](https://storage.googleapis.com/cloud-docs-samples-badges/GoogleCloudPlatform/nodejs-docs-samples/nodejs-docs-samples-pubsub.svg)]()

[Cloud Pub/Sub](https://cloud.google.com/pubsub/docs) is a fully-managed real-time messaging service that allows you to send and receive messages between independent applications.

## Table of Contents

* [Setup](#setup)
* [Samples](#samples)
  * [Topics](#topics)
  * [Subscriptions](#subscriptions)
* [Running the tests](#running-the-tests)

## Setup

1.  Read [Prerequisites][prereq] and [How to run a sample][run] first.
1.  Install dependencies:

    With **npm**:

        npm install

    With **yarn**:

        yarn install

[prereq]: ../README.md#prerequisites
[run]: ../README.md#how-to-run-a-sample

## Samples

### Topics

View the [documentation][topics_0_docs] or the [source code][topics_0_code].

__Usage:__ `node topics.js --help`

```
topics.js <command>

Commands:
  topics.js list                                   Lists all topics in the current project.
  topics.js create <topicName>                     Creates a new topic.
  topics.js delete <topicName>                     Deletes a topic.
  topics.js publish <topicName> <message>          Publishes a message to a topic.
  topics.js publish-batch <topicName> <message>    Publishes messages to a topic using custom batching settings.
  topics.js publish-ordered <topicName> <message>  Publishes an ordered message to a topic.
  topics.js get-policy <topicName>                 Gets the IAM policy for a topic.
  topics.js set-policy <topicName>                 Sets the IAM policy for a topic.
  topics.js test-permissions <topicName>           Tests the permissions for a topic.

Options:
  --version  Show version number                                                                               [boolean]
  --help     Show help                                                                                         [boolean]

Examples:
  node topics.js list
  node topics.js create my-topic
  node topics.js delete my-topic
  node topics.js publish my-topic "Hello, world!"
  node topics.js publish my-topic '{"data":"Hello, world!"}'
  node topics.js publish-ordered my-topic "Hello, world!"
  node topics.js publish-batch my-topic "Hello, world!" -w 1000
  node topics.js get-policy greetings
  node topics.js set-policy greetings
  node topics.js test-permissions greetings

For more information, see https://cloud.google.com/pubsub/docs
```

[topics_0_docs]: https://cloud.google.com/pubsub/publisher
[topics_0_code]: topics.js

### Subscriptions

View the [documentation][subscriptions_1_docs] or the [source code][subscriptions_1_code].

__Usage:__ `node subscriptions.js --help`

```
subscriptions.js <command>

Commands:
  subscriptions.js list [topicName]                             Lists all subscriptions in the current project,
                                                                optionally filtering by a topic.
  subscriptions.js create <topicName> <subscriptionName>        Creates a new subscription.
  subscriptions.js create-flow <topicName> <subscriptionName>   Creates a new subscription with flow-control limits,
                                                                which don't persist between subscriptions.
  subscriptions.js create-push <topicName> <subscriptionName>   Creates a new push subscription.
  subscriptions.js modify-config <topicName>                    Modifies the configuration of an existing push
  <subscriptionName>                                            subscription.
  subscriptions.js delete <subscriptionName>                    Deletes a subscription.
  subscriptions.js get <subscriptionName>                       Gets the metadata for a subscription.
  subscriptions.js listen-messages <subscriptionName>           Listens to messages for a subscription.
  subscriptions.js listen-errors <subscriptionName>             Listens to messages and errors for a subscription.
  subscriptions.js get-policy <subscriptionName>                Gets the IAM policy for a subscription.
  subscriptions.js set-policy <subscriptionName>                Sets the IAM policy for a subscription.
  subscriptions.js test-permissions <subscriptionName>          Tests the permissions for a subscription.

Options:
  --version  Show version number                                                                               [boolean]
  --help     Show help                                                                                         [boolean]

Examples:
  node subscriptions.js list
  node subscriptions.js list my-topic
  node subscriptions.js create my-topic worker-1
  node subscriptions.js create-flow my-topic worker-1 -m 5
  node subscriptions.js create-push my-topic worker-1
  node subscriptions.js modify-config my-topic worker-1
  node subscriptions.js get worker-1
  node subscriptions.js listen-messages my-subscription
  node subscriptions.js listen-errors my-subscription
  node subscriptions.js delete worker-1
  node subscriptions.js pull worker-1
  node subscriptions.js get-policy worker-1
  node subscriptions.js set-policy worker-1
  node subscriptions.js test-permissions worker-1

For more information, see https://cloud.google.com/pubsub/docs
```

[subscriptions_1_docs]: https://cloud.google.com/pubsub/subscriber
[subscriptions_1_code]: subscriptions.js

## Running the tests

1.  Set the **GCLOUD_PROJECT** and **GOOGLE_APPLICATION_CREDENTIALS** environment variables.

1.  Run the tests:

    With **npm**:

        npm test

    With **yarn**:

        yarn test
