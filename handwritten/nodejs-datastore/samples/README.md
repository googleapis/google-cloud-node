<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# Google Cloud Datastore Node.js Samples

[Cloud Datastore][datastore_docs] is a NoSQL document database built for
automatic scaling, high performance, and ease of application development.

[datastore_docs]: https://cloud.google.com/datastore/docs/

## Table of Contents

* [Setup](#setup)
* [Samples](#samples)
  * [Getting started with Google Cloud Datastore API](#getting-started-with-google-cloud-datastore-api)
  * [Concepts](#concepts)
  * [Errors and Error Handling](#errors-and-error-handling)

## Setup

1. Read [Prerequisites][prereq] and [How to run a sample][run] first.
1. Install dependencies:

        npm install

[prereq]: ../README.md#prerequisities
[run]: ../README.md#how-to-run-a-sample

## Samples

### Getting started with Google Cloud Datastore API

View the [documentation][tasks_docs] or the [source code][tasks_code].

__Run the sample:__

Usage: `node tasks.js <command> [args]...`

```
Commands:
  new <description>  Adds a task with a description <description>.
  done <taskId>      Marks the specified task as done.
  list               Lists all tasks ordered by creation time.
  delete <taskId>    Deletes a task.

Options:
  --help  Show help                                       [boolean]

Examples:
  node tasks.js new "Buy milk"  Adds a task with description "Buy milk".
  node tasks.js done 12345      Marks task 12345 as Done.
  node tasks.js list            Lists all tasks ordered by creation time
  node tasks.js delete 12345    Deletes task 12345.

For more information, see https://cloud.google.com/datastore/docs
```

[tasks_docs]: https://cloud.google.com/datastore/docs/datastore-api-tutorial
[tasks_code]: tasks.js

### Concepts

View the [documentation][concepts_docs] or the [source code][concepts_code].

[concepts_docs]: https://cloud.google.com/datastore/docs/concepts/entities
[concepts_code]: concepts.js

### Errors and Error Handling

View the [documentation][error_docs] or the [source code][error_code].

__Run the sample:__

    node error

[error_docs]: https://cloud.google.com/datastore/docs/concepts/errors
[error_code]: error.js
