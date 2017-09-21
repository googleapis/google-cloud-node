/**
 * Copyright 2017, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

// [START videointelligence_quickstart]
// Imports the Google Cloud Video Intelligence library
const Video = require('@google-cloud/video-intelligence');

// Instantiates a client
const video = Video();

// The GCS filepath of the video to analyze
const gcsUri = 'gs://nodejs-docs-samples-video/quickstart_short.mp4';

// Construct request
const request = {
  inputUri: gcsUri,
  features: ['LABEL_DETECTION']
};

// Execute request
video.annotateVideo(request)
  .then((results) => {
    const operation = results[0];
    console.log('Waiting for operation to complete... (this may take a few minutes)');
    return operation.promise();
  })
  .then((results) => {
    // Gets annotations for video
    const annotations = results[0].annotationResults[0];

    // Gets labels for video from its annotations
    const labels = annotations.segmentLabelAnnotations;
    labels.forEach((label) => {
      console.log(`Label ${label.entity.description} occurs at:`);
      label.segments.forEach((segment) => {
        segment = segment.segment;
        if (segment.startTimeOffset.seconds === undefined) {
          segment.startTimeOffset.seconds = 0;
        }
        if (segment.startTimeOffset.nanos === undefined) {
          segment.startTimeOffset.nanos = 0;
        }
        if (segment.endTimeOffset.seconds === undefined) {
          segment.endTimeOffset.seconds = 0;
        }
        if (segment.endTimeOffset.nanos === undefined) {
          segment.endTimeOffset.nanos = 0;
        }
        console.log(`\tStart: ${segment.startTimeOffset.seconds}` +
            `.${(segment.startTimeOffset.nanos / 1e6).toFixed(0)}s`);
        console.log(`\tEnd: ${segment.endTimeOffset.seconds}.` +
            `${(segment.endTimeOffset.nanos / 1e6).toFixed(0)}s`);
      });
    });
  })
  .catch((err) => {
    console.error('ERROR:', err);
  });
// [END videointelligence_quickstart]
