# Contributing

Before making any contributions, please sign one of the contributor license agreements below.

Fork the repo, develop and test your code changes.

* `npm test` to run tests.
* `npm run regression-test` to run regression tests.
* `npm run cover` to see the test coverage report.

To run the regression tests, first create and configure a project following the [instructions on how to run gcloud-node]
(README.md#elsewhere).
After that, set the following environment variables:

- **GCLOUD_TESTS_PROJECT_ID**: Developers Console project's ID (e.g. bamboo-shift-455)
- **GCLOUD_TESTS_BUCKET_NAME**: The name of the bucket to use for the Cloud Storage API tests
- **GCLOUD_TESTS_KEY**: The path to the JSON key file.

Lastly, create the indexes used in the datastore regression tests using the [gcloud command-line tool](https://developers.google.com/cloud/sdk/gcloud/) and the indexes that you can find in `regression/data/index/yaml`:

* `gcloud preview datastore create-indexes regression/data/` (from the package root) 

Add your (or your organization's name) to AUTHORS and
CONTRIBUTORS files.

## Contributor License Agreements

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
