<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# Google Cloud Video Intelligence API: Node.js Samples

[![Open in Cloud Shell][shell_img]][shell_link]

The [Cloud Video Intelligence API](https://cloud.google.com/video-intelligence) allows developers to use Google video analysis technology as part of their applications.

## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Video Intelligence](#video-intelligence)

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
  analyze.js faces <gcsUri>          Analyzes faces in a video stored in Google Cloud Storage using the Cloud Video
                                     Intelligence API.
  analyze.js shots <gcsUri>          Analyzes shot angles in a video stored in Google Cloud Storage using the Cloud
                                     Video Intelligence API.
  analyze.js labels-gcs <gcsUri>     Labels objects in a video stored in Google Cloud Storage using the Cloud Video
                                     Intelligence API.
  analyze.js labels-file <filePath>  Labels objects in a video stored locally using the Cloud Video Intelligence API.
  analyze.js safe-search <gcsUri>    Detects explicit content in a video stored in Google Cloud Storage.

Options:
  --version  Show version number                                                                               [boolean]
  --help     Show help                                                                                         [boolean]

Examples:
  node analyze.js faces gs://demomaker/larry_sergey_ice_bucket_short.mp4
  node analyze.js shots gs://demomaker/sushi.mp4
  node analyze.js labels-gcs gs://demomaker/tomatoes.mp4
  node analyze.js labels-file cat.mp4
  node analyze.js safe-search gs://demomaker/tomatoes.mp4

For more information, see https://cloud.google.com/video-intelligence/docs
```

[video_0_docs]: https://cloud.google.com/video-intelligence/docs
[video_0_code]: analyze.js

[shell_img]: //gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-intelligence&page=editor&open_in_editor=samples/README.md
