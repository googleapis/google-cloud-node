# Contributing

1. **Please sign one of the contributor license agreements below.**
2. Fork the repo, develop and test your code changes.
3. Add your (or your organization's) name to the AUTHORS and CONTRIBUTORS files.
4. Send a pull request.

## Testing

### Unit Tests

To run the unit tests, simply run:

``` sh
$ npm test
```

### Regression Tests

To run the regression tests, first create and configure a project in the Google Developers Console following the [instructions on how to run gcloud-node][elsewhere]. After that, set the following environment variables:

- **GCLOUD_TESTS_PROJECT_ID**: Developers Console project's ID (e.g. bamboo-shift-455)
- **GCLOUD_TESTS_BUCKET_NAME**: The name of the bucket to use for the Cloud Storage API tests
- **GCLOUD_TESTS_KEY**: The path to the JSON key file.

Install the [gcloud command-line tool][gcloudcli] to your machine and use it to create the indexes used in the datastore regression tests with indexes found in `regression/data/index/yaml`:

From the project's root directory:

``` sh
# Install the app component
$ gcloud components update app

# Set the default project in your env
$ gcloud config set project $GCLOUD_TESTS_PROJECT_ID

# Authenticate the gcloud tool with your account
$ gcloud auth login

# Create the indexes
$ gcloud preview datastore create-indexes regression/data/
```

You may now run the regression tests:

``` sh
$ npm run regression-test
```

### Test Coverage

Generate the coverage report:

``` sh
$ npm run cover
```

The test coverage report will be available in `coverage/`.

## Contributor License Agreements

Before we can accept your pull requests you'll need to sign a Contributor License Agreement (CLA):

- **If you are an individual writing original source code** and **you own the intellectual property**, then you'll need to sign an [individual CLA][indvcla].
- **If you work for a company that wants to allow you to contribute your work**, then you'll need to sign a [corporate CLA][corpcla].

You can sign these electronically (just scroll to the bottom). After that, we'll be able to accept your pull requests.

[elsewhere]: README.md#elsewhere
[gcloudcli]: https://developers.google.com/cloud/sdk/gcloud/
[indvcla]: https://developers.google.com/open-source/cla/individual
[corpcla]: https://developers.google.com/open-source/cla/corporate
[commitdoc]: https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#
