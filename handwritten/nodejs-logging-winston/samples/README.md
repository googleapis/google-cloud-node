<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# Stackdriver Logging Node.js samples

[Stackdriver Logging][logging_docs] allows you to store, search, analyze,
monitor, and alert on log data and events from Google Cloud Platform and Amazon
Web Services.

[logging_docs]: https://cloud.google.com/logging/docs/

## Table of Contents

* [Setup](#setup)
* [Samples](#samples)
  * [Reading logs](#reading-logs)
  * [Writing logs](#writing-logs)
  * [Exporting logs](#exporting-logs)
  * [Error Reporting on Compute Engine](#error-reporting-on-compute-engine)
  * [Logging to Google Cloud with Winston](https://github.com/GoogleCloudPlatform/winston-gae)

## Setup

1. Read [Prerequisites][prereq] and [How to run a sample][run] first.
1. Install dependencies:

        npm install

[prereq]: ../README.md#prerequisities
[run]: ../README.md#how-to-run-a-sample

## Samples

### Reading logs

View the [documentation][read_1] or the [source code][read_2].

__Run the sample:__

    node list

[read_1]: list.js
[read_2]: https://cloud.google.com/logging/docs/api/tasks/authorization

### Writing logs

View the [documentation][write_1] or the [source code][write_2].

__Run the sample:__

    node write

[write_1]: write.js
[write_2]: https://cloud.google.com/logging/docs/api/tasks/creating-logs

### Exporting logs

View the [documentation][export_1] or the [source code][export_2].

__Run the sample:__

    node export

[export_1]: export.js
[export_2]: https://cloud.google.com/logging/docs/api/tasks/exporting-logs

### Error Reporting on Compute Engine

View the [documentation][error_1] or the [source code][error_2].

[error_1]: fluent.js
[error_2]: https://cloud.google.com/error-reporting/docs/setup/compute-engine
