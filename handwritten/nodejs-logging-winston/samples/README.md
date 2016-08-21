<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# Stackdriver Logging Node.js samples

[Stackdriver Logging][logging_docs] allows you to store, search, analyze,
monitor, and alert on log data and events from Google Cloud Platform and Amazon
Web Services.

[logging_docs]: https://cloud.google.com/logging/docs/

## Table of Contents

* [Setup](#setup)
* [Samples](#samples)
  * [Logs](#logs)
  * [Sinks](#sinks)
  * [Error Reporting on Compute Engine](#error-reporting-on-compute-engine)
  * [Logging to Google Cloud with Winston](https://github.com/GoogleCloudPlatform/winston-gae)

## Setup

1. Read [Prerequisites][prereq] and [How to run a sample][run] first.
1. Install dependencies:

        npm install

[prereq]: ../README.md#prerequisities
[run]: ../README.md#how-to-run-a-sample

## Samples

### Logs

View the [documentation][logs_docs] or the [source code][logs_code].

__Usage:__ `node logs --help`

```
Commands:
  list                             List log entries in the authenticated project.
  write <name> <resource> <entry>  Write a log entry.
  delete <name>                    Delete a Log.

Options:
  --help  Show help                                                                        [boolean]

Examples:
  node logs list                                      List all log entires.
  node logs list -f "severity = ERROR" -s             List up to 2 error entries, sorted by
  "timestamp" -l 2                                    timestamp ascending.
  node logs write my-log                              Write a log entry.
  '{"type":"gae_app","labels":{"module_id":"default"
  }}' '{"message":"Hello World!"}'
  node logs delete my-log                             Delete "my-log".

For more information, see https://cloud.google.com/logging/docs
```

[logs_docs]: https://cloud.google.com/logging/docs
[logs_code]: logs.js

### Sinks

View the [documentation][sinks_docs] or the [source code][sinks_code].

__Usage:__ `node sinks --help`

```
Commands:
  create <name> <destination>  Create a new sink with the given name and destination.
  get <name>                   Get the metadata for the specified sink.
  list                         List all sinks in the authenticated project.
  update <name> <metadata>     Update the metadata for the specified sink.
  delete <name>                Delete the specified sink.

Options:
  --help  Show help                                                                        [boolean]

Examples:
  node sinks create my-sink my-bucket --type bucket   Create a new sink named "my-sink" that exports
                                                      logs to a Cloud Storage bucket.
  node sinks create my-sink my-dataset --type         Create a new sink named "my-sink" that exports
  dataset                                             logs to a BigQuery dataset.
  node sinks create my-sink my-topic --type topic     Create a new sink named "my-sink" that exports
                                                      logs to a Cloud Pub/Sub topic.
  node sinks get my-sink                              Get the metadata for "my-sink".
  node sinks list                                     List all sinks in the authenticated project.
  node sinks update my-sink '{"filter":"severity >    Update the specified sink.
  ALERT"}'
  node sinks delete my-sink                           Delete "my-sink".

For more information, see https://cloud.google.com/logging/docs
```

[sinks_docs]: https://cloud.google.com/logging/docs
[sinks_code]: sinks.js

### Error Reporting on Compute Engine

View the [documentation][error_docs] or the [source code][error_code].

[error_docs]: https://cloud.google.com/error-reporting/docs/setup/compute-engine
[error_code]: fluent.js
