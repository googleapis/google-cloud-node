# Google Cloud Node.js Client

Node idiomatic client for Google Cloud services. Work in progress... Watch the repo for notifications.

![Travis Build Status](https://travis-ci.org/GoogleCloudPlatform/gcloud-node.svg)

This client supports the following Google Cloud services:

* [Google Cloud Datastore](https://developers.google.com/datastore/) (externalized Megastore, also allows access to the collections of your existing AppEngine apps)
* [Google Cloud Storage](https://cloud.google.com/products/cloud-storage/)
* Planned but not yet started: [Google Compute Engine](https://developers.google.com/compute), and [Google BigQuery](https://developers.google.com/bigquery/)

## Quickstart

~~~~
npm install gcloud
~~~~

### On Google Compute Engine

If you are running this client on Google Compute Engine, you can skip to the developer's guide. We handle authorization for you with no configuration.

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
* Click on "Create new client ID" to create a new **service account**. Once the account is created, a p12 file will be auto downloaded. The downloaded file is the private key you'll need for authorization.
* You'll the following for auth configuration:
	* Developers Console project's ID (e.g. bamboo-shift-455)
	* Service account's email address (e.g. xxx@developer.gserviceaccount.com)
	* The path to the downloaded private key.
	
## Developer's Guide

* [Google Cloud Datastore](#google_cloud_datastore)
* [Google Cloud Storage](#google_cloud_storage)

### Google Cloud Datastore

Google Cloud Datastore is a NoSQL database with the
convenience of a traditional RDBMS in terms of strong
consistency guarantees and high availablity. It's also known
as Megastore. Its performance characteristics are explained
in detail on [Megastore: Providing Scalable, Highly Available Storage for Interactive Services](http://www.cidrdb.org/cidr2011/Papers/CIDR11_Paper32.pdf).

#### Configuration

If you're running this client on Google Compute Engine, you need to construct a dataset with your Compute Engine enabled project's ID (e.g. bamboo-shift-454). Project ID is listed on the [Google Developers Console](https://console.developers.google.com/project).

~~~~ js
var gcloud = require('gcloud'),
    ds = new gcloud.datastore.Dataset({ projectId: YOUR_PROJECT_ID });
~~~~

Else, initiate with project ID, service account's email and private key downloaded from Developer's Console.

~~~~ js
var gcloud = require('gcloud'),
    ds = new gcloud.datastore.Dataset({
    	projectId: YOUR_PROJECT_ID,
    	email: 'xxx@developer.gserviceaccount.com',
    	pemFilePath: '/path/to/the/pem/private/key.pem'
    });
~~~~

#### Creating, Reading, Updating and Deleting

#### Querying

#### Allocating IDs (ID generation)

#### Transactions

#### Keys

### Google Cloud Storage

TODO

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
