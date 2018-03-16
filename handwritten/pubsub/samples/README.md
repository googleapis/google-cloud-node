<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# Google Cloud Pub/Sub: Node.js Samples

[![Open in Cloud Shell][shell_img]][shell_link]

[Cloud Pub/Sub](https://cloud.google.com/pubsub/docs) is a fully-managed real-time messaging service that allows you to send and receive messages between independent applications.

## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Subscriptions](#subscriptions)
  * [Topics](#topics)

## Before you begin

Before running the samples, make sure you've followed the steps in the
[Before you begin section](../README.md#before-you-begin) of the client
library's README.

## Samples

### Subscriptions

View the [source code][subscriptions_0_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-pubsub&page=editor&open_in_editor=samples/subscriptions.js,samples/README.md)

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

[subscriptions_0_docs]: https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/latest/pubsub/subscription
[subscriptions_0_code]: subscriptions.js

### Topics

View the [source code][topics_1_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-pubsub&page=editor&open_in_editor=samples/topics.js,samples/README.md)

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

[topics_1_docs]: https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/latest/pubsub/topic
[topics_1_code]: topics.js

[shell_img]: //gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-pubsub&page=editor&open_in_editor=samples/README.md
