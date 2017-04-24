<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# Google Cloud DNS Node.js Samples

Publish your domain names using Google's infrastructure for production-quality,
high-volume DNS services. Google's global network of anycast name servers
provide reliable, low-latency authoritative name lookups for your domains from
anywhere in the world. Read more about [Google Cloud DNS][dns_docs].

[dns_docs]: https://cloud.google.com/dns/docs

## Table of Contents

* [Setup](#setup)
* [Samples](#samples)
  * [Zones](#zones)
* [Running the tests](#running-the-tests)

## Setup

1.  Read [Prerequisites][prereq] and [How to run a sample][run] first.
1.  Install dependencies:

    With `npm`:

        npm install

    With `yarn`:

        yarn install

[prereq]: ../README.md#prerequisities
[run]: ../README.md#how-to-run-a-sample

## Samples

### Zones

View the [documentation][zones_docs] or the [source code][zones_code].

__Usage:__ `node zones --help`

```
Commands:
  list  Lists all zones in the current project.

Options:
  --help  Show help                                                                                            [boolean]

Examples:
  node zones.js list  Lists all zones in the current project.

For more information, see https://cloud.google.com/dns/docs
```

[zones_docs]: https://cloud.google.com/dns/docs
[zones_code]: zones.js

## Running the tests

1.  Set the `GCLOUD_PROJECT` and `GOOGLE_APPLICATION_CREDENTIALS` environment
    variables.

1.  Run the tests:

    With `npm`:

        npm test

    With `yarn`:

        yarn test
