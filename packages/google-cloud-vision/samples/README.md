<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# Google Cloud Vision API Node.js Samples

The [Cloud Vision API][vision_docs] allows developers to easily integrate vision
detection features within applications, including image labeling, face and
landmark detection, optical character recognition (OCR), and tagging of explicit
content.

[vision_docs]: https://cloud.google.com/vision/docs/

## Table of Contents

* [Setup](#setup)
* [Samples](#samples)
  * [Detection snippets](#detection-snippets)
  * [Face detection](#face-detection)
  * [Label detection](#label-detection)
  * [Landmark detection](#landmark-detection)
  * [Text detection](#text-detection)

## Setup

1. Read [Prerequisites][prereq] and [How to run a sample][run] first.
1. Install dependencies:

        npm install

[prereq]: ../README.md#prerequisities
[run]: ../README.md#how-to-run-a-sample

## Samples

### Detection snippets

View the [documentation][detect_docs] or the [source code][detect_code].

__Usage:__ `node detect.js --help`

```
Commands:
  faces <fileName>                     Detects faces in a local image file.
  faces-gcs <bucket> <fileName>        Detects faces in an image in Google Cloud Storage.
  labels <fileName>                    Detects labels in a local image file.
  labels-gcs <bucket> <fileName>       Detects labels in an image in Google Cloud Storage.
  landmarks <fileName>                 Detects landmarks in a local image file.
  landmarks-gcs <bucket> <fileName>    Detects landmarks in an image in Google Cloud Storage.
  text <fileName>                      Detects text in a local image file.
  text-gcs <bucket> <fileName>         Detects text in an image in Google Cloud Storage.
  logos <fileName>                     Detects logos in a local image file.
  logos-gcs <bucket> <fileName>        Detects logos in an image in Google Cloud Storage.
  properties <fileName>                Detects image properties in a local image file.
  properties-gcs <bucket> <fileName>   Detects image properties in an image in Google Cloud Storage.
  safe-search <fileName>               Detects safe search properties in a local image file.
  safe-search-gcs <bucket> <fileName>  Detects safe search properties in an image in Google Cloud Storage.

Options:
  --help  Show help                                                                                            [boolean]

Examples:
  node detect.js faces ./resources/face_no_surprise.jpg
  node detect.js faces-gcs my-bucket your-image.jpg
  node detect.js labels ./resources/wakeupcat.jpg
  node detect.js labels-gcs my-bucket your-image.jpg
  node detect.js landmarks ./resources/landmark.jpg
  node detect.js landmarks-gcs my-bucket your-image.jpg
  node detect.js text ./resources/wakeupcat.jpg
  node detect.js text-gcs my-bucket your-image.jpg
  node detect.js logos ./resources/logos.png
  node detect.js logos-gcs my-bucket your-image.jpg.png
  node detect.js properties ./resources/landmark.jpg
  node detect.js properties-gcs my-bucket your-image.jpg
  node detect.js safe-search ./resources/wakeupcat.jpg
  node detect.js safe-search-gcs my-bucket your-image.jpg

For more information, see https://cloud.google.com/vision/docs
```

[detect_docs]: https://cloud.google.com/vision/docs
[detect_code]: detect.js

### Face detection

View the [documentation][face_docs] or the [source code][face_code].

This sample uses [node-canvas](https://github.com/Automattic/node-canvas) to
draw an output image. node-canvas depends on Cairo, which may require separate
installation. See the node-canvas [installation section][canvas-install] for
details.

[canvas-install]: https://github.com/Automattic/node-canvas#installation

__Run the sample:__

Usage: `node faceDetection <path-to-image-file>`

Example:

    node faceDetection "./resources/face.png"

[face_docs]: https://cloud.google.com/vision/docs/face-tutorial
[face_code]: faceDetection.js

### Label detection

View the [documentation][label_docs] or the [source code][label_code].

__Run the sample:__

Usage: `node labelDetection <path-to-image-file>`

Example:

    node labelDetection "./resources/wakeupcat.jpg"

[label_docs]: https://cloud.google.com/vision/docs/label-tutorial
[label_code]: labelDetection.js

### Landmark detection

View the [documentation][landmark_docs] or the [source code][landmark_code].

__Run the sample:__

Usage: `node landmarkDetection <image-uri>`

Example:

    node landmarkDetection "https://cloud-samples-tests.storage.googleapis.com/vision/water.jpg"

[landmark_docs]: https://cloud.google.com/vision/docs/landmark-tutorial
[landmark_code]: landmarkDetection.js

### Text detection sample

View the [source code][text_code].

__Run the sample:__

Usage: `node textDetection <command> [args]...`

Analyze images:

    node textDetection analyze "./resources/"

Look up words:

    node textDetection lookup the sunbeams in

[text_code]: textDetection.js
