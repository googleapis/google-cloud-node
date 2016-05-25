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

### Face detection

View the [documentation][face_1] or the [source code][face_2].

This sample uses [node-canvas](https://github.com/Automattic/node-canvas) to
draw an output image. node-canvas depends on Cairo, which may require separate
installation. See the node-canvas [installation section][canvas-install] for
details.

[canvas-install]: https://github.com/Automattic/node-canvas#installation

__Run the sample:__

Usage: `node faceDetection <path-to-image-file>`

Example:

    node faceDetection "./resources/face.png"

[face_1]: faceDetection.js
[face_2]: https://cloud.google.com/vision/docs/face-tutorial

### Label detection

View the [documentation][label_1] or the [source code][label_2].

__Run the sample:__

Usage: `node labelDetection <path-to-image-file>`

Example:

    node labelDetection "./resources/wakeupcat.jpg"

[label_1]: labelDetection.js
[label_2]: https://cloud.google.com/vision/docs/label-tutorial

### Landmark detection

View the [documentation][landmark_1] or the [source code][landmark_2].

__Run the sample:__

Usage: `node landmarkDetection <image-uri>`

Example:

    node landmarkDetection "https://cloud-samples-tests.storage.googleapis.com/vision/water.jpg"

[landmark_1]: landmarkDetection.js
[landmark_2]: https://cloud.google.com/vision/docs/landmark-tutorial

### Text detection sample

View the [source code][text_2].

__Run the sample:__

Usage: `node textDetection <command> [args]...`

Analyze images:

    node textDetection analyze "./resources/"

Look up words:

    node textDetection lookup the sunbeams in

[text_1]: textDetection.js
