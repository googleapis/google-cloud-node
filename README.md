# Google Cloud Node.js Client

Node idiomatic client for Google Cloud services. Work in progress... Watch the repo for notifications.

![Travis Build Status](https://travis-ci.org/GoogleCloudPlatform/gcloud-node.svg)
[![Coverage Status](https://img.shields.io/coveralls/GoogleCloudPlatform/gcloud-node.svg)](https://coveralls.io/r/GoogleCloudPlatform/gcloud-node?branch=master)

This client supports the following Google Cloud services:

* [Google Cloud Datastore](https://developers.google.com/datastore/)
* [Google Cloud Storage](https://cloud.google.com/products/cloud-storage/)
* [Google Cloud Pub/Sub](https://developers.google.com/pubsub/)
* Planned but not yet started: [Google Compute Engine](https://developers.google.com/compute), and [Google BigQuery](https://developers.google.com/bigquery/)

## Quickstart

~~~~
npm install gcloud
~~~~

### On Google Compute Engine

If you are running this client on Google Compute Engine, you can skip to the developer's guide. We handle authorisation for you with no configuration.

### Elsewhere

If you are not running this client on Google Compute Engine, you need a Google Developers service account. To create a service account:

* Visit the [Google Developers Console](https://console.developers.google.com/project).
* Create a new project or click on an existing project.
* Enable billing if you haven't already.
* On the "APIs & auth" tab, click APIs section and turn on the following. You may need to enable billing in order to use these services.
    * Google Cloud Datastore API
    * Google Cloud Storage
    * Google Cloud Storage JSON API
    * Google Cloud Pub/Sub
* Once API access is enabled, switch back to "APIs & auth" section on the navigation panel and switch to "Credentials" page.
* Click on "Create new client ID" to create a new **service account**. Once the account is created, click on "Generate new JSON key" to download
your private key.

The downloaded file contains credentials you'll need for authorization.
* You'll the following for auth configuration:
    * Developers Console project's ID (e.g. bamboo-shift-455)
    * The path to the JSON key file.

## Developer's Guide

* [Google Cloud Datastore](#google-cloud-datastore)
    * [Configuration](#configuration)
    * [Entities and Keys](#entities-and-keys)
    * [Getting, Saving and Deleting Entities](#getting-saving-and-deleting-entities)
    * [Querying](#querying)
    * [Allocating IDs](#allocating-ids-id-generation)
    * [Transactions](#transactions)
* [Google Cloud Storage](#google-cloud-storage)
    * [Configuration](#configuration-1)
    * [Listing Files](#listing-files)
    * [Stat Files](#stat-files)
    * [Read file contents](#read-file-contents)
    * [Write file contents and metadata](#write-file-contents-and-metadata)
    * [Copy files](#copy-files)
    * [Remove files](#remove-files)
* [Google Cloud Pub/Sub](#google-cloud-pubsub-experimental)
    * [Configuration](#configuration-2)
    * [Topics and Subscriptions](#topics-and-subscriptions)
    * [Publishing a message](#publishing-a-message)
    * [Listening for messages](#listening-for-messages)

### Google Cloud Datastore

[Google Cloud Datastore](https://developers.google.com/datastore/) is a fully managed, schemaless database for storing non-relational data. Cloud Datastore automatically scales with your users and supports ACID transactions, high availability of reads and writes, strong consistency for reads and ancestor queries, and eventual consistency for all other queries.

#### Configuration

If you're running this client on Google Compute Engine, you need to construct a dataset with your Compute Engine enabled project's ID (e.g. bamboo-shift-454). Project ID is listed on the [Google Developers Console](https://console.developers.google.com/project).

~~~~ js
var gcloud = require('gcloud'),
    datastore = gcloud.datastore,
    ds = new datastore.Dataset({ projectId: YOUR_PROJECT_ID });
~~~~

Elsewhere, initiate with project ID and private key downloaded from Developer's Console.

~~~~ js
var gcloud = require('gcloud'),
    ds = new gcloud.datastore.Dataset({
        projectId: YOUR_PROJECT_ID,
        keyFilename: '/path/to/the/key.json'
    });
~~~~

#### Entities and Keys

TODO

#### Getting, Saving and Deleting Entities

Get operations require a valid key to retrieve the key identified entity from Datastore. Skip to the "Querying" section if you'd like to learn more about querying against Datastore.

~~~~ js
ds.get(ds.key('Company', 123), function(err, entity) {});

// alternatively, you can retrieve multiple entities at once.
ds.get([
    ds.key('Company', 123),
    ds.key('Product', 'Computer')
], function(err, entities) {});
~~~~

You can insert arbitrary objects by providing an incomplete key during saving. If the key is not incomplete, the existing entity is updated or inserted with the provided key.

To learn more about keys and incomplete keys, skip to the Keys section.

~~~~ js
ds.save({
    key: ds.key('Company', null), data: {/*...*/}
}, function(err, key) {
    // First arg is an incomplete key for Company kind.
    // console.log(key) will output ['Company', 599900452312].
});
// alternatively, you can save multiple entities at once.
ds.save([
    { key: ds.key('Company', 123), data: {/*...*/} },
    { key: ds.key('Product', 'Computer'), data: {/*...*/} }
], function(err, keys) {
    // if the first key was incomplete, keys[0] will return the generated key.
});
~~~~

Deletion requires the key of the entity to be deleted.

~~~~ js
ds.delete(['Company', 599900452312], function(err) {});

// alternatively, you can delete multiple entities of different
// kinds at once.
ds.delete([
    ds.key('Company', 599900452312),
    ds.key('Company', 599900452315),
    ds.key('Office', 'mtv'),
    ds.key('Company', 123, 'Employee', 'jbd')
], function(err) {});
~~~~

#### Querying

Datastore allows you to query entities by kind, filter them by property filters and sort them by a property name. Projection and pagination are
also supported.

~~~~ js
// retrieves 5 companies
var q = ds.createQuery('Company').limit(5);
ds.runQuery(q, function(err, entities, nextQuery) {
    // nextQuery is not null if there are more results.
    if (nextQuery) {
        ds.runQuery(nextQuery, callback);
    }
});
~~~~

##### Filtering

Datastore allows querying on properties. Supported comparison operators are
`=`, `<`, `>`, `<=`, `>=`. Not equal and `IN` operators are currently not
supported.

~~~~ js
// lists all companies named Google and
// have less than 400 employees.
var q = ds.createQuery('Company')
    .filter('name =', 'Google')
    .filter('size <', 400);
~~~~

To filter by key, use `__key__` for the property name. Filtering on keys
stored as properties is not currently supported.

~~~~ js
var q = ds.createQuery('Company')
    .filter('__key__ =', ds.key('Company', 'Google'))
~~~~

In order to filter by ancestors, use `hasAncestor` helper.

~~~ js
var q = ds.createQuery('Child')
    .hasAncestor(ds.key('Parent', 123));
~~~

##### Sorting

You can sort the results by a property name ascendingly or descendingly.

~~~~ js
// sorts by size ascendingly. (default)
var q = ds.createQuery('Company').order('size');

// sorts by size descendingly.
var q = ds.createQuery('Company').order('-size');
~~~~

##### Selection (or Projection)

You may prefer to retrieve only a few of the properties of the entities.

~~~~ js
// retrieves names and sizes of all companies.
var q = ds.createQuery('Company').select(['name', 'size']);
~~~~

##### Pagination

Pagination allows you to set an offset, limit and starting cursor to a query.

~~~~ js
var q = ds.createQuery('Company')
    .start(cursorToken) // continue to retrieve results from the given cursor.
    .offset(100) // start from the 101th result after start cursor.
    .limit(10);  // return only 10 results
~~~~

#### Allocating IDs (ID generation)

You can generate IDs without creating entities. The following call will create
100 new IDs from the Company kind which exists under the dataset's namespace. If
no namespace was provided when the dataset was created, the default namespace
will be used.

~~~~ js
ds.allocateIds(ds.key('Company', null), 100, function(err, keys) {

});
~~~~

#### Transactions

Datastore has support for transactions. Transactions allow you to perform
multiple operations and commiting your changes atomically.

`transaction` is a utility method to work with transactions.

~~~~ js
ds.transaction(function(transaction, done) {
    // call datastore methods as usual
    // when you're done, call done
    transaction.get(key, function(err, entity) {
        if (err) {
            transaction.rollback(done);
            return;
        }
        // do any other operations with entity.
        done();
    });
}, function(err) {
    // err exists if error during transaction
    // creation or auto-commit.
});
~~~~

* transaction.get([key], callback);
* transaction.save([{ key: '', data: {} }], callback);
* transaction.delete([key], callback);
* transaction.rollback(callback);
* transaction.commit(callback);

### Google Cloud Storage

Google Cloud Storage allows you to store data on Google infrastructure. Read [Google Cloud Storage API docs](https://developers.google.com/storage/) for more information.

You need to create a Google Cloud Storage bucket to use this client library. Follow the steps on [Google Cloud Storage docs](https://developers.google.com/storage/) to create a bucket.

#### Configuration

If you're running this client on Google Compute Engine, you need to initiate a bucket object with your bucket's name.

~~~~ js
var gcloud = require('gcloud'),
    bucket = new gcloud.storage.Bucket({ bucketName: YOUR_BUCKET_NAME });
~~~~

Elsewhere, initiate with bucket's name and private key downloaded from Developer's Console.

~~~~ js
var gcloud = require('gcloud'),
    bucket = new gcloud.storage.Bucket({
        bucketName: YOUR_BUCKET_NAME,
        keyFilename: '/path/to/the/key.json'
    });
~~~~

#### Listing Files

~~~~ js
bucket.list(function(err, files, nextQuery) {
    // nextQuery is not null if there are more results.
    if (nextQuery) {
        bucket.list(nextQuery, callback);
    }
});
~~~~

You can also provide a query. The following call will limit the number of
results to 5.

~~~~ js
bucket.list({ maxResults: 5 }, function(err, files, nextQuery) {});
~~~~

#### Stat Files

You can retrieve file metadata by stating the file.

~~~~ js
bucket.stat(filename, function(err, metadata) {});
~~~~

#### Read File Contents

Buckets provive a read stream to the file contents. You can pipe it to a write
stream, or listening 'data' events to read a file's contents. The following
example will create a readable stream to the file identified by filename,
and write the file contents to `/path/to/file`.

~~~~ js
// Pipe a bucket file's contents to a writable stream. In this case, a local
// file "local-file-path" will be created.
bucket.createReadStream('remote-file-name')
    .pipe(fs.createWriteStream('local-file-path'))
    .on('error', function(err) {})
    .on('finish', function() {});
~~~~

#### Write File Contents and Metadata

A bucket object allows you to write a readable stream, a file and a buffer
as file contents.

~~~~ js
// Uploads file.pdf.
fs.createReadStream('file.pdf')
    .pipe(bucket.createWriteStream('MyPDFFile', {/* optional metadata. */}))
    .on('error', function(err) {})
    .on('complete', function(fileObject) {});
~~~~

You can also call `bucket.write` to send String or Buffer objects, along with
metadata.

~~~~ js
var data;

// The message can be any string or Buffer.
data = 'Hello World';
bucket.write('HelloMessageFile', data, function(err, fileObject) {});

// To pass along metadata, embed the body of your message in a `data` property.
data = {
  data: 'Hello World',
  metadata: {
    // ...
  }
};
bucket.write('HelloMessageFile', data, function(err, fileObject) {});
~~~~

#### Copy Files

You can copy an existing file. If no bucket name is provided for the destination
file, the current bucket name will be used.

~~~~ js
bucket.copy('HelloMessageFile', {
    bucket: 'other-bucket',
    name: 'NewHelloMessageFileName'
}, function(err) {});
~~~~

#### Remove Files

~~~~ js
bucket.remove('HelloMessageFile', function(err) {});
~~~~

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

~~~~ js
var gcloud = require('gcloud'),
    conn = new gcloud.pubsub.Connection({ projectId: YOUR_PROJECT_ID });
~~~~

Elsewhere, construct with project ID, service account's email
and private key downloaded from Developer's Console.

~~~~ js
var gcloud = require('gcloud'),
    conn = new gcloud.pubsub.Connection({
        projectId: YOUR_PROJECT_ID,
        keyFilename: '/path/to/the/key.json'
    });
~~~~

#### Topics and Subscriptions

List, get, create and delete topics.

~~~ js
// lists topics.
conn.listTopics({ maxResults: 5 }, function(err, topics, nextQuery) {
    // if more results, nextQuery will be non-null.
});

// retrieves an existing topic by name.
conn.getTopic('topic1', function(err, topic) {
    // deletes this topic.
    topic.del(callback);
});

// creates a new topic named topic2.
conn.createTopic('topic2', callback);
~~~

List, get, create and delete subscriptions.

~~~ js
var query = {
    maxResults: 5,
    filterByTopicName: 'topic1'
};
// list 5 subscriptions that are subscribed to topic1.
conn.listSubscriptions(query, function(err, subs, nextQuery) {
    // if there are more results, nextQuery will be non-null.
});

// get subscription named sub1
conn.getSubscription('sub1', function(err, sub) {
    // delete this subscription.
    sub.del(callback);
});

// create a new subsription named sub2, listens to topic1.
conn.createSubscription({
    topic: 'topic1',
    name: 'sub2',
    ackDeadlineSeconds: 60
}, callback);
~~~

#### Publishing a message

You need to retrieve or create a topic to publish a message.
You can either publish simple string messages or a raw Pub/Sub
message object.

~~~ js
conn.getTopic('topic1', function(err, topic) {
    // publishes "hello world" to to topic1 subscribers.
    topic.publish('hello world', callback);
    topic.publishMessage({
        data: 'Some text here...',
        label: [
            { key: 'priority', numValue: 0 },
            { key: 'foo', stringValue: 'bar' }
        ]
    }, callback);
});
~~~

#### Listening for messages

You can either pull messages one by one via a subscription, or
let the client to open a long-lived request to poll them.

~~~ js
// allow client to poll messages from sub1
// autoAck automatically acknowledges the messages. by default, false.
var sub = conn.subscribe('sub1', { autoAck: true });
sub.on('ready', function() {
    console.log('listening messages...');
});
sub.on('message', function(msg) {
    console.log('message retrieved:', msg);
});
sub.on('error', function(err) {
    console.log('error occured:', err);
});
sub.close(); // closes the connection, stops listening for messages.
~~~

## Contributing

See [CONTRIBUTING](CONTRIBUTING.md).
