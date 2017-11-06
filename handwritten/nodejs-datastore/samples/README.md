<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# Google Cloud Datastore Node.js Samples

[![Build](https://storage.googleapis.com/cloud-docs-samples-badges/GoogleCloudPlatform/nodejs-docs-samples/nodejs-docs-samples-datastore.svg)]()

[Cloud Datastore](https://cloud.google.com/datastore/docs) is a NoSQL document database built for automatic scaling, high performance, and ease of application development. While the Cloud Datastore interface has many of the same features as traditional databases, as a NoSQL database it differs from them in the way it describes relationships between data objects.

## Table of Contents

* [Setup](#setup)
* [Samples](#samples)
  * [Tasks](#tasks)
  * [Concepts](#concepts)
  * [Errors and Error Handling](#errors-and-error-handling)
* [Running the tests](#running-the-tests)

## Setup

1.  Read [Prerequisites][prereq] and [How to run a sample][run] first.
1.  Install dependencies:

    With **npm**:

        npm install

    With **yarn**:

        yarn install

[prereq]: ../README.md#prerequisites
[run]: ../README.md#how-to-run-a-sample

## Samples

### Tasks

View the [documentation][tasks_0_docs] or the [source code][tasks_0_code].

__Usage:__ `node tasks.js --help`

```
Commands:
  new <description>  Adds a task with a description <description>.
  done <taskId>      Marks the specified task as done.
  list               Lists all tasks ordered by creation time.
  delete <taskId>    Deletes a task.

Options:
  --version  Show version number                                                                               [boolean]
  --help     Show help                                                                                         [boolean]

Examples:
  node tasks.js new "Buy milk"  Adds a task with description "Buy milk".
  node tasks.js done 12345      Marks task 12345 as Done.
  node tasks.js list            Lists all tasks ordered by creation time
  node tasks.js delete 12345    Deletes task 12345.

For more information, see https://cloud.google.com/datastore/docs
```

[tasks_0_docs]: https://cloud.google.com/datastore/docs/datastore-api-tutorial
[tasks_0_code]: tasks.js

### Concepts

View the [documentation][concepts_1_docs] or the [source code][concepts_1_code].[concepts_1_docs]: https://cloud.google.com/datastore/docs/concepts/entities
[concepts_1_code]: concepts.js

### Errors and Error Handling

View the [documentation][error_2_docs] or the [source code][error_2_code].

__Usage:__ `node error.js`
[error_2_docs]: https://cloud.google.com/datastore/docs/concepts/errors
[error_2_code]: error.js

## Running the tests

1.  Set the **GCLOUD_PROJECT** and **GOOGLE_APPLICATION_CREDENTIALS** environment variables.

1.  Run the tests:

    With **npm**:

        npm test

    With **yarn**:

        yarn test
