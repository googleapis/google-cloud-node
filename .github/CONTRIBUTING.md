# Contributing

1. **Please sign one of the contributor license agreements below.**
2. Fork the repo, develop and test your code changes.
3. Add your (or your organization's) name to the AUTHORS and CONTRIBUTORS files.
4. Send a pull request.

## Testing

### Setup

### Unit Tests

First, run `npm install` at the root of the repository. To run the unit tests
(at the root or in one of the sub-packages), simply run:

```sh
$ npm test
```

### System Tests

To run the system tests, first create and configure a project in the Google Developers Console following the [instructions on how to run google-cloud-node][elsewhere]. After that, set the following environment variables:

- **GCLOUD_TESTS_PROJECT_ID**: Developers Console project's ID (e.g. bamboo-shift-455)
- **GCLOUD_TESTS_KEY**: The path to the JSON key file.
- ***GCLOUD_TESTS_API_KEY*** (*optional*): An API key that can be used to test the Translate API.
- ***GCLOUD_TESTS_DNS_DOMAIN*** (*optional*): A domain you own managed by Google Cloud DNS (expected format: `'gcloud-node.com.'`).

Install the [gcloud command-line tool][gcloudcli] to your machine and use it to create the indexes used in the datastore system tests with indexes found in `system-test/data/index/yaml`:

From the project's root directory:

```sh
# Install the app component
$ gcloud components update app

# Set the default project in your env
$ gcloud config set project $GCLOUD_TESTS_PROJECT_ID

# Authenticate the gcloud tool with your account
$ gcloud auth login

# Create the indexes
$ gcloud preview datastore create-indexes system-test/data/index.yaml
```

You may now run the system tests:

```sh
$ npm run system-test
```

### Test Coverage

Generate the coverage report:

```sh
$ npm run cover
```

The test coverage report will be available in `coverage/`.

## Contributor License Agreements

Before we can accept your pull requests you'll need to sign a Contributor License Agreement (CLA):

- **If you are an individual writing original source code** and **you own the intellectual property**, then you'll need to sign an [individual CLA][indvcla].
- **If you work for a company that wants to allow you to contribute your work**, then you'll need to sign a [corporate CLA][corpcla].

You can sign these electronically (just scroll to the bottom). After that, we'll be able to accept your pull requests.

### Publishing

To publish this module, you must be logged in as the user `google-cloud`.

```sh
$ npm logout && npm login
$ npm login
# Follow the prompts to login as `google-cloud`

# If publishing a service module:
#   $ cd packages/bigquery
# Otherwise stay in the root directory

$ npm run publish-module {{version}}
```

  - **version** In the format of `0.2.0`

This will:

  1. Copy the necessary legal files into the working directory so they are included with the release
  1. Publish the module
  1. Create a commit and tag for the new version

The output from the command will remind you to push to master with a command like the following:

```sh
$ git push origin master --follow-tags
```

Log back in as your npm user:

```sh
$ npm logout && npm login
```

[elsewhere]: README.md#elsewhere
[gcloudcli]: https://developers.google.com/cloud/sdk/gcloud/
[indvcla]: https://developers.google.com/open-source/cla/individual
[corpcla]: https://developers.google.com/open-source/cla/corporate
