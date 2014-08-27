# Google Cloud Node.js Client
> Node idiomatic client for Google Cloud services.

[![NPM Version](https://img.shields.io/npm/v/gcloud.svg)](https://www.npmjs.org/package/gcloud)
![Travis Build Status](https://travis-ci.org/GoogleCloudPlatform/gcloud-node.svg)
[![Coverage Status](https://img.shields.io/coveralls/GoogleCloudPlatform/gcloud-node.svg)](https://coveralls.io/r/GoogleCloudPlatform/gcloud-node?branch=master)

This client supports the following Google Cloud services:

* [Google Cloud Datastore](https://developers.google.com/datastore/)
* [Google Cloud Storage](https://cloud.google.com/products/cloud-storage/)
* [Google Cloud Pub/Sub (experimental)](https://developers.google.com/pubsub/)

Planned, but not yet available:

* [Google Compute Engine](https://developers.google.com/compute)
* [Google BigQuery](https://developers.google.com/bigquery/)

## Quickstart

```sh
$ npm install gcloud
```

### On Google Compute Engine

If you are running this client on Google Compute Engine, you can skip to the developer's guide. We handle authorisation for you with no configuration.

### Elsewhere

If you are not running this client on Google Compute Engine, you need a Google Developers service account. To create a service account:

1. Visit the [Google Developers Console](https://console.developers.google.com/project).
2. Create a new project or click on an existing project.
3. Enable billing if you haven't already.
4. On the "APIs & auth" tab, click APIs section and turn on the following. You may need to enable billing in order to use these services.
   * Google Cloud Datastore API
   * Google Cloud Storage
   * Google Cloud Storage JSON API
   * Google Cloud Pub/Sub
5. Once API access is enabled, switch back to "APIs & auth" section on the navigation panel and switch to "Credentials" page.
6. Click on "Create new client ID" to create a new **service account**. Once the account is created, click on "Generate new JSON key" to download your private key. The downloaded file contains credentials you'll need for authorization.

You'll need the following for auth configuration:

1. Your Developers Console project's ID (e.g. bamboo-shift-455).
2. The path to the JSON key file.

### Google Cloud Datastore

[Google Cloud Datastore](https://developers.google.com/datastore/) is a fully managed, schemaless database for storing non-relational data. Cloud Datastore automatically scales with your users and supports ACID transactions, high availability of reads and writes, strong consistency for reads and ancestor queries, and eventual consistency for all other queries.

See [the API documentation](https://googlecloudplatform.github.io/module-datastore.html) for how to interact with the Datastore.

### Google Cloud Storage

Google Cloud Storage allows you to store data on Google infrastructure. Read [Google Cloud Storage API docs](https://developers.google.com/storage/) for more information.

You need to create a Google Cloud Storage bucket to use this client library. Follow the steps on [Google Cloud Storage docs](https://developers.google.com/storage/) to create a bucket.

See [the API documentation](https://googlecloudplatform.github.io/module-storage.html) for how to connect to the Storage API.

### Google Cloud Pub/Sub (experimental)

Google Cloud Pub/Sub is a reliable, many-to-many, asynchronous messaging
service from Google Cloud Platform. A detailed overview is available on
[Pub/Sub docs](https://developers.google.com/pubsub/overview).

Note: Google Cloud Pub/Sub API is available as a Limited Preview and the
client library we provide is currently experimental. The API and/or the
client might be changed in backward-incompatible ways.
This API is not subject to any SLA or deprecation policy. Request to be
whitelisted to use it by filling the [Limited Preview application form](https://docs.google.com/a/google.com/forms/d/1IQY4LAbISLa86uxRv2dKAzkeWOyNZda_tUn7xgVYeoE/viewform).

#### Configuration

If you're running this client on Google Compute Engine, you need to construct
a pubsub Connection with your Google Developers Console project ID.

```js
var gcloud = require('gcloud');
var conn = new gcloud.pubsub.Connection({
    projectId: YOUR_PROJECT_ID
});
```

Elsewhere, construct with a project ID, service account's email, and private key downloaded from Developer's Console.

```js
var gcloud = require('gcloud');
var conn = new gcloud.pubsub.Connection({
    projectId: YOUR_PROJECT_ID,
    keyFilename: '/path/to/the/key.json'
});
```

#### Topics and Subscriptions

List, get, create and delete topics.

```js
// Lists topics.
conn.listTopics({
    maxResults: 5
}, function(err, topics, nextQuery) {
    // If there are more results, nextQuery will be non-null.
});

// Retrieve an existing topic by name.
conn.getTopic('topic1', function(err, topic) {
    // Delete this topic.
    topic.del(callback);
});

// Creates a new topic named topic2.
conn.createTopic('topic2', callback);
```

List, get, create and delete subscriptions.

```js
var query = {
    maxResults: 5,
    filterByTopicName: 'topic1'
};

// List 5 subscriptions that are subscribed to topic1.
conn.listSubscriptions(query, function(err, subs, nextQuery) {
    // if there are more results, nextQuery will be non-null.
});

// Get a subscription named sub1.
conn.getSubscription('sub1', function(err, sub) {
    // delete this subscription.
    sub.del(callback);
});

// Create a new subsription named sub2 which listens to topic1.
conn.createSubscription({
    topic: 'topic1',
    name: 'sub2',
    ackDeadlineSeconds: 60
}, callback);
```

#### Publishing a message

You need to retrieve or create a topic to publish a message. You can either
publish simple string messages or a raw Pub/Sub message object.

```js
conn.getTopic('topic1', function(err, topic) {
    // Publish "hello world" to topic1's subscribers.
    topic.publish('hello world', callback);
    topic.publishMessage({
        data: 'Some text here...',
        label: [
            {
                key: 'priority',
                numValue: 0
            },
            {
                key: 'foo',
                stringValue: 'bar'
            }
        ]
    }, callback);
});
```

#### Listening for messages

You can either pull messages one by one via a subscription, or let the client
open a long-lived request to poll them.

```js
// Allow client to poll messages from sub1.
// `autoAck` automatically acknowledges the messages. (default: false)
var sub = conn.subscribe('sub1', {
    autoAck: true
});

sub.on('ready', function() {
    console.log('Listening for messages...');
});

sub.on('message', function(msg) {
    console.log('Message retrieved:', msg);
});

sub.on('error', function(err) {
    console.log('An error occurred:', err);
});

// Closes the connection and stop listening for messages.
sub.close();
```

## Contributing

See [CONTRIBUTING](CONTRIBUTING.md).
