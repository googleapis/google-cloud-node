# @google-cloud/spanner ([Beta][versioning])
> Cloud Spanner Client Library for Node.js

*Looking for more Google APIs than just Cloud Spanner? You might want to check out [`google-cloud`][google-cloud].*

- [API Documentation][gcloud-spanner-docs]
- [Official Documentation][cloud-spanner-docs]


```sh
$ npm install --save @google-cloud/spanner
```
```js
var spanner = require('@google-cloud/spanner')({
  projectId: 'grape-spaceship-123',
  keyFilename: '/path/to/keyfile.json'
});

var instance = spanner.instance('my-instance');
var database = instance.database('my-database');

// Create a table.
var schema = `
  CREATE TABLE Singers (
    SingerId INT64 NOT NULL,
    FirstName STRING(1024),
    LastName STRING(1024),
    SingerInfo BYTES(MAX),
  ) PRIMARY KEY(SingerId)
`;

database.createTable(schema, function(err, table, operation) {
  if (err) {
    // Error handling omitted.
  }

  operation
    .on('error', function(err) {})
    .on('complete', function() {
      // Table created successfully.
    });
});

// Insert data into the table.
var table = database.table('Singers');

table.insert({
  SingerId: 10,
  FirstName: 'Eddie',
  LastName: 'Wilson'
}, function(err) {
  if (!err) {
    // Row inserted successfully.
  }
});

// Run a query as a readable object stream.
database.runStream('SELECT * FROM Singers')
  .on('error', function(err) {})
  .on('data', function(row) {
    // row.toJSON() = {
    //   SingerId: 10,
    //   FirstName: 'Eddie',
    //   LastName: 'Wilson'
    // }
  }
  })
  .on('end', function() {
    // All results retrieved.
  });
```


## Authentication

It's incredibly easy to get authenticated and start using Google's APIs. You can set your credentials on a global basis as well as on a per-API basis. See each individual API section below to see how you can auth on a per-API-basis. This is useful if you want to use different accounts for different Cloud services.

### On Google Cloud Platform

If you are running this client on Google Cloud Platform, we handle authentication for you with no configuration. You just need to make sure that when you [set up the GCE instance][gce-how-to], you add the correct scopes for the APIs you want to access.

``` js
var spanner = require('@google-cloud/spanner')();
// ...you're good to go!
```

### Elsewhere

If you are not running this client on Google Cloud Platform, you need a Google Developers service account. To create a service account:

1. Visit the [Google Developers Console][dev-console].
2. Create a new project or click on an existing project.
3. Navigate to  **APIs & auth** > **APIs section** and turn on the following APIs (you may need to enable billing in order to use these services):
  * Cloud Spanner API
4. Navigate to **APIs & auth** >  **Credentials** and then:
  * If you want to use a new service account key, click on **Create credentials** and select **Service account key**. After the account key is created, you will be prompted to download the JSON key file that the library uses to authenticate your requests.
  * If you want to generate a new service account key for an existing service account, click on **Generate new JSON key** and download the JSON key file.

``` js
var projectId = process.env.GCLOUD_PROJECT; // E.g. 'grape-spaceship-123'

var spanner = require('@google-cloud/spanner')({
  projectId: projectId,

  // The path to your key file:
  keyFilename: '/path/to/keyfile.json'

  // Or the contents of the key file:
  credentials: require('./path/to/keyfile.json')
});

// ...you're good to go!
```


[versioning]: https://github.com/GoogleCloudPlatform/google-cloud-node#versioning
[google-cloud]: https://github.com/GoogleCloudPlatform/google-cloud-node/
[gce-how-to]: https://cloud.google.com/compute/docs/authentication#using
[dev-console]: https://console.developers.google.com/project
[gcloud-spanner-docs]: https://googlecloudplatform.github.io/google-cloud-node/#/docs/spanner
[cloud-spanner-docs]: https://cloud.google.com/spanner
