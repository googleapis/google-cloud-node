# Google Cloud Node.js Client

Node idiomatic client for Google Cloud services. Work in progress... Watch the repo for notifications.

![Travis Build Status](https://travis-ci.org/GoogleCloudPlatform/gcloud-node.svg)

This client supports the following Google Cloud services:

* [Google Cloud Datastore](https://developers.google.com/datastore/) (externalised Megastore, also allows access to the collections of your existing AppEngine apps)
* [Google Cloud Storage](https://cloud.google.com/products/cloud-storage/)
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
* Once API access is enabled, switch back to "APIs & auth" section on the navigation panel and switch to "Credentials" page.
* Click on "Create new client ID" to create a new **service account**. Once the account is created, a p12 file will be auto downloaded. You need to run the following command to convert this file to a pem file.

~~~~ sh
openssl pkcs12 -in <key.p12> -nocerts -passin pass:notasecret -nodes -out <key.pem>
~~~~

The pem file is the private key you'll need for authorization.
* You'll the following for auth configuration:
	* Developers Console project's ID (e.g. bamboo-shift-455)
	* Service account's email address (e.g. xxx@developer.gserviceaccount.com)
	* The path to the pem file.

## Developer's Guide

* [Google Cloud Datastore](#google-cloud-datastore)
	* [Configuration](#configuration)
	* [Entities and Keys](#entities-and-keys)
	* [Getting, Saving and Deleting Entities](#getting-saving-and-deleting-entities)
	* [Querying](#querying)
	* [Allocating IDs](#allocating-ids-id-generation)
	* [Transactions](#transactions)
* [Google Cloud Storage](#google-cloud-storage)

### Google Cloud Datastore

Google Cloud Datastore is a NoSQL database with the
convenience of a traditional RDBMS in terms of strong
consistency guarantees and high availability. It's also known
as Megastore. Its performance characteristics are explained
in detail on [Megastore: Providing Scalable, Highly Available Storage for Interactive Services](http://www.cidrdb.org/cidr2011/Papers/CIDR11_Paper32.pdf).

#### Configuration

If you're running this client on Google Compute Engine, you need to construct a dataset with your Compute Engine enabled project's ID (e.g. bamboo-shift-454). Project ID is listed on the [Google Developers Console](https://console.developers.google.com/project).

~~~~ js
var gcloud = require('gcloud'),
    ds = new gcloud.datastore.Dataset({ projectId: YOUR_PROJECT_ID });
~~~~

Elsewhere, initiate with project ID, service account's email and private key downloaded from Developer's Console.

~~~~ js
var gcloud = require('gcloud'),
    ds = new gcloud.datastore.Dataset({
    	projectId: YOUR_PROJECT_ID,
    	email: 'xxx@developer.gserviceaccount.com',
    	pemFilePath: '/path/to/the/pem/private/key.pem'
    });
~~~~

#### Entities and Keys

TODO

#### Getting, Saving and Deleting Entities

Get operations require a valid key to retrieve the key identified entity from Datastore. Skip to the "Querying" section if you'd like to learn more about querying against Datastore.

~~~~ js
ds.get(['Company', 123], function(err, obj) {

});
// alternatively, you can retrieve multiple entities at once.
ds.getAll([key1, key2, ...], function(err, objs) {

});
~~~~

You can insert arbitrary objects by providing an incomplete key during saving. If the key is not incomplete, the existing entity is updated or inserted with the provided key.

To learn more about keys and incomplete keys, skip to the Keys section.

~~~~ js
ds.save(['Company', null], obj, function(err, key) {
	// First arg is an incomplete key for Company kind.
	// console.log(key) will output ['Company', 599900452312].
});
// alternatively, you can save multiple entities at once.
ds.saveAll([key1, key2, key3], [obj1, obj2, obj3], function(err, keys) {
	// if key1 was incomplete, keys[0] will return the generated key.
});
~~~~

Deletion requires the key of the entity to be deleted.

~~~~ js
ds.del(['Company', 599900452312], function(err) {

});
// alternatively, you can delete multiple entities of different
// kinds at once.
ds.delAll([
	['Company', 599900452312],
	['Company', 599900452315],
    ['Office', 'mtv'],
	['Company', 123, 'Employee', 'jbd']], function(err) {

});
~~~~

#### Querying

Datastore allows you to query entities by kind, filter them by property filters and sort them by a property name. Projection and pagination are
also supported.

~~~~ js
// retrieves 5 companies
var q = ds.createQuery('Company').limit(5);
ds.runQuery(q, function(err, keys, objs, nextQuery) {
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

##### Sorting

You can sort the results by a property name ascendingly or descendingly.

~~~~ js
// sorts by size ascendingly.
var q = ds.createQuery('Company').sort('+size');

// sorts by size descendingly.
var q = ds.createQuery('Company').sort('-size');
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
    .offset(100) // start from 100th result
    .limit(10)   // return only 10 results
    .start(cursorToken); // continue to retrieve results from the given cursor.
~~~~

#### Allocating IDs (ID generation)

You can generate IDs without creating entities. The following call will create
100 new IDs from the Company kind which exists under the default namespace.

~~~~ js
ds.allocateIds(['Company', null], 100, function(err, keys) {

});
~~~~

You may prefer to create IDs from a non-default namespace by providing
an incomplete key with a namespace. Similar to the previous example, the
call below will create 100 new IDs, but from the Company kind that exists
under the "ns-test" namespace.

~~~~ js
ds.allocateIds(['ns-test', 'Company', null], 100, function(err, keys) {

});
~~~~

#### Transactions

Datastore has support for transactions. Transactions allow you to perform
multiple operations and commiting your changes atomically.

`runInTransaction` is a utility method to work with transactions.

~~~~ js
ds.runInTransaction(function(t, done) {
    // perform actions via t.
    t.get(key, function(err, obj) {
        if (err) {
            t.rollback(done);
            return;
        }
        // do any other operation with obj.
        // when you're done, call done.
        done();
    });
}, function(err) {
    // err exists if error during transaction
    // creation or auto-commit.
});
~~~~

The transaction will be auto committed if it's not rollbacked or
commited when done is called. Transactions support the following
CRUD and transaction related operations.

* t.get(key, callback)
* t.getAll(keys, callback)
* t.save(key, obj, callback)
* t.saveAll(keys, objs, callback)
* t.del(key, callback)
* t.delAll(keys, callback)
* t.rollback(callback)
* t.commit(callback)

### Google Cloud Storage

Google Cloud Storage allows you to store data on Google infrastructure. Read [Google Cloud Storage API docs](https://developers.google.com/storage/) for more information.

You need to create a Google Cloud Storage bucket to use this client library. Follow the steps on [Google Cloud Storage docs](https://developers.google.com/storage/) to create a bucket.

#### Configuration

If you're running this client on Google Compute Engine, you need to initiate a bucket object with your bucket's name.

~~~~ js
var gcloud = require('gcloud'),
    bucket = new gcloud.storage.Bucket({ bucketName: YOUR_BUCKET_NAME });
~~~~

Elsewhere, initiate with bucket's name, service account's email and private key downloaded from Developer's Console.

~~~~ js
var gcloud = require('gcloud'),
    bucket = new gcloud.storage.Bucket({
        projectId: YOUR_PROJECT_ID,
        email: 'xxx@developer.gserviceaccount.com',
        pemFilePath: '/path/to/the/pem/private/key.pem'
    });
~~~~

#### Listing Files

~~~~ js
bucket.list(function(err, files, nextQuery) {
    // if more results, nextQuery will be non-null.
});
~~~~

Or optionally, you can provide a query. The following call will limit the
number of results to 5.

~~~~ js
bucket.list({ maxResults: 5 }, function(err, files, nextQuery) {
    // if more results, nextQuery will be non-null.
});
~~~~

#### Stat Files

You can retrieve file metadata by stating the file.

~~~~ js
bucket.stat(filename, function(err, metadata) {
});
~~~~

#### Read file contents

Buckets provive a read stream to the file contents. You can pipe it to a write
stream, or listening 'data' events to read a file's contents. The following
example will create a readable stream to the file identified by filename,
and write the file contents to `/path/to/file`.

~~~~ js
bucket.createReadStream(filename)
    .pipe(fs.createWriteStream('/path/to/file'))
    .on('error', console.log)
    .on('completed', console.log);
~~~~

#### Write file contents and metadata

A bucket object allows you to write a readable stream, a file and a buffer
as file contents.

~~~~ js
// Uploads file.pdf
bucket.writeFile(
    filename, '/path/to/file.pdf', { contentType: 'application/pdf' }, callback);

// Reads the stream and uploads it as file contents
bucket.writeStream(
    filename, fs.createReadStream('/path/to/file.pdf'), metadata, callback);

// Uploads 'Hello World' as file contents
bucket.writeBuffer(filename, 'Hello World', callback);
~~~~

#### Copy files

You can copy an existing file. If no bucket name provided for the destination
file, current bucket name will be used.

~~~~ js
bucket.copy(filename, { bucket: 'other-bucket', name: 'other-filename' }, callback);
~~~~

#### Remove files

~~~~ js
bucket.remove(filename, callback);
~~~~

## Contributing

Fork the repo, make changes and open a pull request.

* `npm test` to run tests.
* `npm run cover` to see the test coverage report.

Before we can accept any pull requests
we have to jump through a couple of legal hurdles,
primarily a Contributor License Agreement (CLA):

- **If you are an individual writing original source code**
  and you're sure you own the intellectual property,
  then you'll need to sign an [individual CLA](http://code.google.com/legal/individual-cla-v1.0.html).
- **If you work for a company that wants to allow you to contribute your work**,
  then you'll need to sign a [corporate CLA](http://code.google.com/legal/corporate-cla-v1.0.html).

You can sign these electronically (just scroll to the bottom).
After that, we'll be able to accept your pull requests.
