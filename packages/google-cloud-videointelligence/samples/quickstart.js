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
const Video = require('@google-cloud/videointelligence').v1beta1();

// Instantiates a client
const video = Video.videoIntelligenceServiceClient({
  projectId: process.env.GCLOUD_PROJECT // Replace with your Google Cloud project ID
});

// The GCS filepath of the video to analyze
const gcsUri = 'gs://demomaker/volleyball_court.mp4';

// Construct request
const request = {
  inputUri: gcsUri,
  features: ['FACE_DETECTION', 'LABEL_DETECTION', 'SHOT_CHANGE_DETECTION']
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

    // Gets faces for video from its annotations
    const faces = annotations.faceAnnotations;
    faces.forEach((face, faceIdx) => {
      console.log('Thumbnail size:', face.thumbnail.length);
      face.segments.forEach((segment, segmentIdx) => {
        console.log(`Face #${faceIdx}, appearance #${segmentIdx}:`);
        if (segment.startTimeOffset === -1 && segment.endTimeOffset === -1) {
          console.log(`\tEntire video`);
        } else {
          console.log(`\tStart: ${segment.startTimeOffset / 1e6}s`);
          console.log(`\tEnd: ${segment.endTimeOffset / 1e6}s`);
        }
      });
    });

    // Gets labels for video from its annotations
    const labels = annotations.labelAnnotations;
    labels.forEach((label) => {
      console.log(`Label ${label.description} occurs at:`);
      label.locations.forEach((location) => {
        if (location.segment.startTimeOffset === -1 && location.segment.endTimeOffset === -1) {
          console.log(`\tEntire video`);
        } else {
          console.log(`\tStart: ${location.segment.startTimeOffset / 1e6}s`);
          console.log(`\tEnd: ${location.segment.endTimeOffset / 1e6}s`);
        }
      });
    });

    // Gets shot changes for video from its annotations
    const shotChanges = annotations.shotAnnotations;
    shotChanges.forEach((shot, shotIdx) => {
      console.log(`Scene ${shotIdx} occurs from:`);
      if (shot.startTimeOffset === -1 && shot.endTimeOffset === -1) {
        console.log(`\tEntire video`);
      } else {
        console.log(`\tStart: ${shot.startTimeOffset / 1e6}s`);
        console.log(`\tEnd: ${shot.endTimeOffset / 1e6}s`);
      }
    });
  })
  .catch((err) => {
    console.error('ERROR:', err);
  });
// [END videointelligence_quickstart]
