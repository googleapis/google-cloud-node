<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# Google Cloud Datastore: Node.js Samples

[![Open in Cloud Shell][shell_img]][shell_link]

[Cloud Datastore](https://cloud.google.com/datastore/docs) is a NoSQL document database built for automatic scaling, high performance, and ease of application development. While the Cloud Datastore interface has many of the same features as traditional databases, as a NoSQL database it differs from them in the way it describes relationships between data objects.

## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Tasks](#tasks)
  * [Concepts](#concepts)
  * [Errors and Error Handling](#errors-and-error-handling)

## Before you begin

Before running the samples, make sure you've followed the steps in the
[Before you begin section](../README.md#before-you-begin) of the client
library's README.

## Samples

### Tasks

View the [source code][tasks_0_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-datastore&page=editor&open_in_editor=samples/tasks.js,samples/README.md)

__Usage:__ `node tasks.js --help`

```
tasks.js <command>

Commands:
  tasks.js new <description>  Adds a task with a description <description>.
  tasks.js done <taskId>      Marks the specified task as done.
  tasks.js list               Lists all tasks ordered by creation time.
  tasks.js delete <taskId>    Deletes a task.

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

View the [source code][concepts_1_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-datastore&page=editor&open_in_editor=samples/concepts.js,samples/README.md)[concepts_1_docs]: https://cloud.google.com/datastore/docs/concepts/entities
[concepts_1_code]: concepts.js

### Errors and Error Handling

View the [source code][error_2_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-datastore&page=editor&open_in_editor=samples/error.js,samples/README.md)

__Usage:__ `node error.js`
[error_2_docs]: https://cloud.google.com/datastore/docs/concepts/errors
[error_2_code]: error.js

[shell_img]: http://gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-datastore&page=editor&open_in_editor=samples/README.md
