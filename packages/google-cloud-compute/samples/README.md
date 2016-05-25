<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# Google Compute Engine Node.js Samples

[Compute Engine][compute_docs] lets you create and run virtual machines on
Google infrastructure.

[compute_docs]: https://cloud.google.com/compute/docs/

## Table of Contents

* [Setup](#setup)
* [Samples](#samples)
  * [Sending mail with Sendgrid](#sending-mail-with-sendgrid)
  * [Sending mail with Mailjet](#sending-mail-with-mailjet)
  * [Listing instances (recommended)](#listing-instances-recommended)
  * [Listing instances](#listing-instances)

## Setup

1. Read [Prerequisites][prereq] and [How to run a sample][run] first.
1. Install dependencies:

        npm install

[prereq]: ../README.md#prerequisities
[run]: ../README.md#how-to-run-a-sample

## Samples

### Sending mail with Sendgrid

View the [documentation][sendgrid_1] or the [source code][sendgrid_2].

__Run the sample:__

1. Set the `SENDGRID_API_KEY` environment variable:

        export SENDGRID_API_KEY=<your-sendgrid-api-key>

1. Start the server:

        node sendgrid

1. Open http://localhost:8080 in your browser

[sendgrid_1]: sendgrid.js
[sendgrid_2]: https://cloud.google.com/compute/docs/tutorials/sending-mail/using-sendgrid

### Sending mail with Mailjet

View the [documentation][mailjet_1] or the [source code][mailjet_2].

__Run the sample:__

1. Set the `MAILJET_API_KEY` environment variable:

        export MAILJET_API_KEY=<your-mailjet-api-key>

1. Set the `MAILJET_API_SECRET` environment variable:

        export MAILJET_API_SECRET=<your-mailjet-api-secret>

1. Start the server:

        node mailjet

1. Open http://localhost:8080 in your browser

[mailjet_1]: mailjet.js
[mailjet_2]: https://cloud.google.com/compute/docs/tutorials/sending-mail/using-mailjet

### Listing instances (recommended)

View the [documentation][vms_1] or the [source code][vms_2].

__Run the sample:__

    node vms

[vms_1]: vms.js
[vms_2]: https://cloud.google.com/compute/docs/tutorials/nodejs-guide

### Listing instances

View the [documentation][vms_api_1] or the [source code][vms_api_2].

__Run the sample:__

    node vms_api

[vms_api_1]: vms_api.js
[vms_api_2]: https://cloud.google.com/compute/docs/tutorials/nodejs-guide
