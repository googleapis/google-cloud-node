[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `npm run generate-scaffolding`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# Google Cloud Video Intelligence API: Node.js Samples

[![Open in Cloud Shell][shell_img]][shell_link]

The [Cloud Video Intelligence API](https://cloud.google.com/video-intelligence) allows developers to use Google video analysis technology as part of their applications.

## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Video Intelligence](#video-intelligence)
  * [Video Intelligence Beta](#video-intelligence-beta)

## Before you begin

Before running the samples, make sure you've followed the steps in the
[Before you begin section](../README.md#before-you-begin) of the client
library's README.

## Samples

### Video Intelligence

View the [source code][video_0_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-intelligence&page=editor&open_in_editor=samples/analyze.js,samples/README.md)

__Usage:__ `node analyze.js --help`

```
analyze.js <command>

Commands:
  analyze.js shots <gcsUri>          Analyzes shot angles in a video stored in Google Cloud Storage using the Cloud
                                     Video Intelligence API.
  analyze.js labels-gcs <gcsUri>     Labels objects in a video stored in Google Cloud Storage using the Cloud Video
                                     Intelligence API.
  analyze.js labels-file <filePath>  Labels objects in a video stored locally using the Cloud Video Intelligence API.
  analyze.js safe-search <gcsUri>    Detects explicit content in a video stored in Google Cloud Storage.
  analyze.js transcription <gcsUri>  Extract the video transcription using the Cloud Video Intelligence API.

Options:
  --version  Show version number                                                                               [boolean]
  --help     Show help                                                                                         [boolean]

Examples:
  node analyze.js shots gs://demomaker/sushi.mp4
  node analyze.js labels-gcs gs://demomaker/tomatoes.mp4
  node analyze.js labels-file cat.mp4
  node analyze.js safe-search gs://demomaker/tomatoes.mp4
  node analyze.js transcription gs://demomaker/tomatoes.mp4

For more information, see https://cloud.google.com/video-intelligence/docs
```

[video_0_docs]: https://cloud.google.com/video-intelligence/docs
[video_0_code]: analyze.js

### Video Intelligence Beta

View the [source code][video_1_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-intelligence&page=editor&open_in_editor=samples/analyze.v1p2beta1.js,samples/README.md)

__Usage:__ `node analyze.v1p2beta1.js --help`

```
analyze.v1p2beta1.js <command>

Commands:
  analyze.v1p2beta1.js video-text-gcs <gcsUri>     Analyzes text in a video stored in Google Cloud Storage using the
                                                   Cloud Video Intelligence API.
  analyze.v1p2beta1.js track-objects-gcs <gcsUri>  Analyzes objects in a video stored in Google Cloud Storage using the
                                                   Cloud Video Intelligence API.
  analyze.v1p2beta1.js video-text <path>           Analyzes text in a video stored in a local file using the Cloud Video
                                                   Intelligence API.
  analyze.v1p2beta1.js track-objects <path>        Analyzes objects in a video stored in a local file using the Cloud
                                                   Video Intelligence API.

Options:
  --version  Show version number                                                                               [boolean]
  --help     Show help                                                                                         [boolean]

Examples:
  node analyze.v1p2beta1.js video-text ./resources/googlework_short.mp4
  node analyze.v1p2beta1.js video-text-gcs gs://nodejs-docs-samples/videos/googlework_short.mp4
  node analyze.v1p2beta1.js track-objects ./resources/cat.mp4
  node analyze.v1p2beta1.js track-objects-gcs gs://nodejs-docs-samples/video/cat.mp4

For more information, see https://cloud.google.com/video-intelligence/docs
```

[video_1_docs]: https://cloud.google.com/video-intelligence/docs
[video_1_code]: analyze.v1p2beta1.js

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-intelligence&page=editor&open_in_editor=samples/README.md
