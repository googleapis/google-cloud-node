<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# Google Cloud Video Intelligence API Node.js Samples

[![Build](https://storage.googleapis.com/cloud-docs-samples-badges/GoogleCloudPlatform/nodejs-docs-samples/nodejs-docs-samples-videointelligence.svg)]()

The [Cloud Video Intelligence API](https://cloud.google.com/video-intelligence) allows developers to use Google video analysis technology as part of their applications.

## Table of Contents

* [Setup](#setup)
* [Samples](#samples)
  * [Video Intelligence](#video-intelligence)
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

### Video Intelligence

View the [documentation][video_0_docs] or the [source code][video_0_code].

__Usage:__ `node analyze.js --help`

```
Commands:
  faces <gcsUri>        Analyzes faces in a video stored in Google Cloud Storage using the Cloud Video Intelligence API.
  shots <gcsUri>        Analyzes shot angles in a video stored in Google Cloud Storage using the Cloud Video
                        Intelligence API.
  labels-gcs <gcsUri>   Labels objects in a video stored in Google Cloud Storage using the Cloud Video Intelligence API.
  labels-file <gcsUri>  Labels objects in a video stored locally using the Cloud Video Intelligence API.
  safe-search <gcsUri>  Detects explicit content in a video stored in Google Cloud Storage.

Options:
  --help  Show help                                                                                            [boolean]

Examples:
  node analyze.js faces gs://demomaker/larry_sergey_ice_bucket_short.mp4
  node analyze.js shots gs://demomaker/sushi.mp4
  node analyze.js labels-gcs gs://demomaker/tomatoes.mp4
  node analyze.js labels-file resources/cat.mp4
  node analyze.js safe-search gs://demomaker/tomatoes.mp4

For more information, see https://cloud.google.com/video-intelligence/docs
```

[video_0_docs]: https://cloud.google.com/video-intelligence/docs
[video_0_code]: analyze.js

## Running the tests

1.  Set the **GCLOUD_PROJECT** and **GOOGLE_APPLICATION_CREDENTIALS** environment variables.

1.  Run the tests:

    With **npm**:

        npm test

    With **yarn**:

        yarn test
