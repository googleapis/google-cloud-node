<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# Google Cloud Video Intelligence API Node.js Samples

The [Cloud Video Intellience API][video_docs] allows developers to easily
integrate video analysis within applications, including video labeling, face
detection, and shot change detection.

[video_docs]: https://cloud.google.com/video-intelligence/docs/

## Table of Contents

* [Setup](#setup)
* [Running](#running)

## Setup

1. Read [Prerequisites][prereq] and [How to run a sample][run] first.
1. Install dependencies:

        npm install

[prereq]: ../README.md#prerequisities
[run]: ../README.md#how-to-run-a-sample

## Running

View the [documentation][analyze_docs] or the [source code][analyze_code].

```
node analyze.js
Commands:
  faces <gcsPath>   Analyzes faces in a video using the Cloud Video Intelligence API.
  shots <gcsPath>   Analyzes shot angles in a video using the Cloud Video Intelligence API.
  labels <gcsPath>  Labels objects in a video using the Cloud Video Intelligence API.

Options:
  --help  Show help                                                                                            [boolean]

Examples:
  node analyze.js faces gs://my-bucket/my-video.mp4
  node analyze.js shots gs://my-bucket/my-video.mp4
  node analyze.js labels gs://my-bucket/my-video.mp4

```

[analyze_docs]: https://cloud.google.com/video-intelligence/docs
[analyze_code]: analyze.js
