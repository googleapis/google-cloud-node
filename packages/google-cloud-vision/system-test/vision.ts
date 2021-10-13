// Copyright 2015 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as assert from 'assert';
import {describe, it, before, after} from 'mocha';
import * as fs from 'fs';
import * as path from 'path';
import {Storage} from '@google-cloud/storage';
import * as uuid from 'uuid';
import * as prototypes from '../protos/protos';
import * as vision from '../src';

describe('Vision', () => {
  const IMAGES = Object.freeze({
    document: path.join(
      __dirname,
      '..',
      '..',
      'system-test',
      'data/document.jpg'
    ),
    logo: path.join(__dirname, '..', '..', 'system-test', 'data/logo.jpg'),
    rushmore: path.join(
      __dirname,
      '..',
      '..',
      'system-test',
      'data/rushmore.jpg'
    ),
    text: path.join(__dirname, '..', '..', 'system-test', 'data/text.png'),
    malformed: __filename,
  });

  const TESTS_PREFIX = 'gcloud-vision-test';

  const storage = new Storage();
  const client = new vision.v1.ImageAnnotatorClient();
  const bucket = storage.bucket(generateName());

  before(done => {
    bucket.create((err: {}) => {
      if (err) {
        done(err);
        return;
      }

      bucket.upload(IMAGES.logo, done);
    });
  });

  after(async () => {
    const [buckets] = await storage.getBuckets({prefix: TESTS_PREFIX});
    await Promise.all(
      buckets.map(async bucket => {
        await bucket.deleteFiles();
        await bucket.delete();
      })
    );
  });

  it('should detect from a URL', function () {
    this.retries(3);
    const url =
      'https://lh3.googleusercontent.com/d_S5gxu_S1P6NR1gXeMthZeBzkrQMHdI5uvXrpn3nfJuXpCjlqhLQKH_hbOxTHxFhp5WugVOEcl4WDrv9rmKBDOMExhKU5KmmLFQVg';
    return client
      .logoDetection(url)
      .then(
        (
          responses: [prototypes.google.cloud.vision.v1.IAnnotateImageResponse]
        ) => {
          const response = responses[0];
          assert.strictEqual(
            response.logoAnnotations![0].description!.toLowerCase(),
            'google'
          );
        }
      );
  });

  it('should detect from a filename', () => {
    return client
      .logoDetection(IMAGES.logo)
      .then(
        (
          responses: [prototypes.google.cloud.vision.v1.IAnnotateImageResponse]
        ) => {
          const response = responses[0];
          assert.ok(
            /google/.test(
              response.logoAnnotations![0].description!.toLowerCase()
            )
          );
        }
      );
  });

  it('should detect from a Buffer', () => {
    const buffer = fs.readFileSync(IMAGES.logo);
    return client
      .logoDetection(buffer)
      .then(
        (
          responses: [prototypes.google.cloud.vision.v1.IAnnotateImageResponse]
        ) => {
          const response = responses[0];
          assert.ok(
            /google/.test(
              response.logoAnnotations![0].description!.toLowerCase()
            )
          );
        }
      );
  });

  describe('single image', () => {
    const TYPES = [
      {type: 'FACE_DETECTION'},
      {type: 'LABEL_DETECTION'},
      {type: 'SAFE_SEARCH_DETECTION'},
    ];
    it('should perform multiple detections', () => {
      return client
        .annotateImage({
          features: TYPES,
          image: {source: {filename: IMAGES.rushmore}},
        })
        .then(
          (
            responses: [
              prototypes.google.cloud.vision.v1.IAnnotateImageResponse
            ]
          ) => {
            const response = responses[0];
            assert(response.labelAnnotations!.length >= 1);
            assert(response.safeSearchAnnotation !== null);
          }
        );
    });
  });

  function generateName() {
    return TESTS_PREFIX + uuid.v1();
  }
});
