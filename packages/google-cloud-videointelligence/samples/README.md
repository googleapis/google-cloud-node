<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# Google Cloud Video Intelligence API Node.js Samples

The [Cloud Video Intellience API][video_docs] allows developers to easily
integrate video analysis within applications, including video labeling, face
detection, and shot change detection.

[video_docs]: https://cloud.google.com/video-intelligence/docs/

## Table of Contents

* [Setup](#setup)
* [Samples](#samples)
  * [Analyze](#analyze)
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

### Analyze

View the [documentation][analyze_docs] or the [source code][analyze_code].

__Usage:__ `node analyze.js --help`

```
Commands:
  faces <gcsUri>   Analyzes faces in a video using the Cloud Video Intelligence API.
  shots <gcsUri>   Analyzes shot angles in a video using the Cloud Video Intelligence API.
  labels <gcsUri>  Labels objects in a video using the Cloud Video Intelligence API.

Options:
  --help  Show help                                                                                            [boolean]

Examples:
  node analyze.js faces gs://my-bucket/my-video.mp4
  node analyze.js shots gs://my-bucket/my-video.mp4
  node analyze.js labels gs://my-bucket/my-video.mp4

For more information, see https://cloud.google.com/video-intelligence/docs
```

[analyze_docs]: https://cloud.google.com/video-intelligence/docs
[analyze_code]: analyze.js

## Running the tests

1.  Set the `GCLOUD_PROJECT` and `GOOGLE_APPLICATION_CREDENTIALS` environment
    variables.

1.  Run the tests:

    With `npm`:

        npm test

    With `yarn`:

        yarn test
