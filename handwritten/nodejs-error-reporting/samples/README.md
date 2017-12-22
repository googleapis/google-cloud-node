<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# Stackdriver Error Reporting: Node.js Samples

[![Build](https://storage.googleapis.com/.svg)]()

[Stackdriver Error Reporting](https://cloud.google.com/error-reporting/docs/) aggregates and displays errors produced in your running cloud services.

## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Examples](#examples)

## Before you begin

Before running the samples, make sure you've followed the steps in the
[Before you begin section](../README.md#before-you-begin) of the client
library's README.

## Samples

### Examples

View the [source code][snippets_0_code].

__Usage:__ `node snippets.js --help`

```
Commands:
  setup-implicit  Reports a simple error using implicit credentials.
  setup-explicit  Reports a simple error using explicit credentials.
  manual          Manually reports errors.
  express         Starts and Express service with integrated error reporting.

Options:
  --version  Show version number                                                                               [boolean]
  --help     Show help                                                                                         [boolean]

Examples:
  node snippets.js setup-implicit  Reports a simple error using implicit credentials.
  node snippets.js setup-explicit  Reports a simple error using explicit credentials.
  node snippets.js manual          Manually report some errors.
  node snippets.js express         Starts and Express service with integrated error reporting.

For more information, see https://cloud.google.com/error-reporting/docs
```

[snippets_0_docs]: https://cloud.google.com/error-reporting/docs
[snippets_0_code]: snippets.js
