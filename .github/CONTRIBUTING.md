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
- ***GCLOUD_TESTS_PROJECT_NUMBER*** (*optional*): Developers Console project number (e.g. 1046198160504).
- **GCLOUD_TESTS_KEY**: The path to the JSON key file.
- ***GCLOUD_TESTS_API_KEY*** (*optional*): An API key.
- ***GCLOUD_TESTS_DNS_DOMAIN*** (*optional*): A domain you own managed by Cloud DNS (expected format: `'gcloud-node.com.'`).

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

## Publishing

To publish this module, you must be logged in as the user `google-cloud`.

```sh
$ npm logout
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

Be sure to log back in as your npm user:

```sh
$ npm logout
$ npm login
```
### Release Notes

If you're thinking "this library needs a schwifty, CI-driven, changelog-generator supertool", hold the phone. It's important to make our library as human as possible. So, please, take a few minutes and pretend that you're the user. What would you want to see?

  1. [Draft a new release](https://github.com/GoogleCloudPlatform/google-cloud-node/releases/new)
  1. Use the following template as a starting point. Remove sections that aren't relevant. Feel free to make improvements.

  - **Tag version** Match to the release version.
  - **Release title**
    - `google-cloud` releases: `v0.39.0`
    - `@google-cloud/module` releases: `@google-cloud/module @ v0.2.0`

<pre>
#### Updating

```sh
$ npm install NPM_MODULE_NAME
```

- [Documentation](https://googlecloudplatform.github.io/google-cloud-node/#/docs/SERVICE_NAME/NEW_VERSION/SERVICE_NAME)
- [Report an issue](https://github.com/GoogleCloudPlatform/google-cloud-node/issues)

### :warning: Breaking Changes
#### We use promises now!
Issue: #ISSUE_NUMBER
PR: #PR_NUMBER

Take a few sentences (minimum) to talk to the user. Remember that this change might require a lot of their time, so make sure to explain why it's worth it.

##### Before
```js
bucket.getFiles(function(err, files) {
  if (err) {
    // An API error occurred.
  }

  // `files` is an array of `File` objects.
});
```

##### After
```js
bucket.getFiles()
  .then(function(files) {
    // `files` is an array of `File` objects.
  }, function(err) {
    // An API error occurred.
  });
```

#### Features

- (#ISSUE_NUMBER, #PR_NUMBER): Describe the new state of the code, i.e. "vision.annotate() now accepts Buffers."

#### Fixes

- (#ISSUE_NUMBER, #PR_NUMBER): Describe the new state of the code, i.e. "vision.detect() properly handles multiple images."
</pre>

Checklist:

  - [ ] I checked that all links work
  - [ ] I removed any sections that weren't relevant (e.g., if there weren't any "Fixes" in this release, remove the heading entirely)
  - [ ] I made sure all breaking changes are noted
  - [x] Never stop saying "schwifty"

### Updating Documentation

All of the documentation is powered by JSDoc, we parse it into JSON and feed it to an [application](https://github.com/GoogleCloudPlatform/gcloud-common/tree/master/site) built in Angular. Hopefully our CI builds and updates the documentation for each successful merge to master, but if for whatever reason a manual update is required please refer to the following steps.

We can build the documentation using the `npm run prepare-ghpages` command. This command optionally accepts two parameters.

* module - The name of the module to build (e.g. `google-cloud`).
* version - The target version of the module. (e.g. `0.43.0`) Defaults to master.

If both parameters are omitted, we will build the master docs for all modules.

```sh
$ npm run prepare-ghpages google-cloud 0.43.0
```

Now it's time to push the docs! If you wish to preview locally you can optionally run an http server in the `gh-pages` folder.

```sh
$ cd gh-pages
$ http-server . # Run the server to look for any visual errors
$ git push origin gh-pages
$ cd ..
```
Finally the last thing to do is cleanup the submodule we created to copy over the JSON.

```sh
$ npm run remove-ghpages
```

[elsewhere]: ../README.md#elsewhere
[gcloudcli]: https://developers.google.com/cloud/sdk/gcloud/
[indvcla]: https://developers.google.com/open-source/cla/individual
[corpcla]: https://developers.google.com/open-source/cla/corporate
