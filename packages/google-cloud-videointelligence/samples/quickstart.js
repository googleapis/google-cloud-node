// Copyright 2017 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';
async function main() {
  // [START video_quickstart]
  // Imports the Google Cloud Video Intelligence library
  const videoIntelligence = require('@google-cloud/video-intelligence');

  // Creates a client
  const client = new videoIntelligence.VideoIntelligenceServiceClient();

  // The GCS uri of the video to analyze
  const gcsUri = 'gs://cloud-samples-data/video/cat.mp4';

  // Construct request
  const request = {
    inputUri: gcsUri,
    features: ['LABEL_DETECTION'],
  };

  // Execute request
  const [operation] = await client.annotateVideo(request);

  console.log(
    'Waiting for operation to complete... (this may take a few minutes)'
  );

  const [operationResult] = await operation.promise();

  // Gets annotations for video
  const annotations = operationResult.annotationResults[0];

  // Gets labels for video from its annotations
  const labels = annotations.segmentLabelAnnotations;
  labels.forEach(label => {
    console.log(`Label ${label.entity.description} occurs at:`);
    label.segments.forEach(segment => {
      segment = segment.segment;
      console.log(
        `\tStart: ${segment.startTimeOffset.seconds}` +
          `.${(segment.startTimeOffset.nanos / 1e6).toFixed(0)}s`
      );
      console.log(
        `\tEnd: ${segment.endTimeOffset.seconds}.` +
          `${(segment.endTimeOffset.nanos / 1e6).toFixed(0)}s`
      );
    });
  });
  // [END video_quickstart]
}

main().catch(console.error);
