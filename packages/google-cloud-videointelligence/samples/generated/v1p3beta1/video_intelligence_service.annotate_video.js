// Copyright 2021 Google LLC
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

function main(features) {
  // [START videointelligence_v1p3beta1_generated_VideoIntelligenceService_AnnotateVideo_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Input video location. Currently, only
   *  Cloud Storage (https://cloud.google.com/storage/) URIs are
   *  supported. URIs must be specified in the following format:
   *  `gs://bucket-id/object-id` (other URI formats return
   *  google.rpc.Code.INVALID_ARGUMENT google.rpc.Code.INVALID_ARGUMENT). For
   *  more information, see Request
   *  URIs (https://cloud.google.com/storage/docs/request-endpoints). To identify
   *  multiple videos, a video URI may include wildcards in the `object-id`.
   *  Supported wildcards: '*' to match 0 or more characters;
   *  '?' to match 1 character. If unset, the input video should be embedded
   *  in the request as `input_content`. If set, `input_content` must be unset.
   */
  // const inputUri = 'abc123'
  /**
   *  The video data bytes.
   *  If unset, the input video(s) should be specified via the `input_uri`.
   *  If set, `input_uri` must be unset.
   */
  // const inputContent = 'Buffer.from('string')'
  /**
   *  Required. Requested video annotation features.
   */
  // const features = 1234
  /**
   *  Additional video context and/or feature-specific parameters.
   */
  // const videoContext = {}
  /**
   *  Optional. Location where the output (in JSON format) should be stored.
   *  Currently, only Cloud Storage (https://cloud.google.com/storage/)
   *  URIs are supported. These must be specified in the following format:
   *  `gs://bucket-id/object-id` (other URI formats return
   *  google.rpc.Code.INVALID_ARGUMENT google.rpc.Code.INVALID_ARGUMENT). For
   *  more information, see Request
   *  URIs (https://cloud.google.com/storage/docs/request-endpoints).
   */
  // const outputUri = 'abc123'
  /**
   *  Optional. Cloud region where annotation should take place. Supported cloud
   *  regions are: `us-east1`, `us-west1`, `europe-west1`, `asia-east1`. If no
   *  region is specified, the region will be determined based on video file
   *  location.
   */
  // const locationId = 'abc123'

  // Imports the Videointelligence library
  const {VideoIntelligenceServiceClient} =
    require('@google-cloud/video-intelligence').v1p3beta1;

  // Instantiates a client
  const videointelligenceClient = new VideoIntelligenceServiceClient();

  async function callAnnotateVideo() {
    // Construct request
    const request = {
      features,
    };

    // Run request
    const [operation] = await videointelligenceClient.annotateVideo(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callAnnotateVideo();
  // [END videointelligence_v1p3beta1_generated_VideoIntelligenceService_AnnotateVideo_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
