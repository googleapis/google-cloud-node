/*!
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const assert = require('assert');
const async = require('async');
const fs = require('fs');
const path = require('path');
const Storage = require('@google-cloud/storage');
const uuid = require('node-uuid');

const vision = require('../');

describe('Vision', function() {
  const IMAGES = Object.freeze({
    document: path.join(__dirname, 'data/document.jpg'),
    logo: path.join(__dirname, 'data/logo.jpg'),
    rushmore: path.join(__dirname, 'data/rushmore.jpg'),
    text: path.join(__dirname, 'data/text.png'),
    malformed: __filename,
  });

  const TESTS_PREFIX = 'gcloud-vision-test';

  let storage = new Storage();
  let client = new vision.v1.ImageAnnotatorClient();

  let bucket = storage.bucket(generateName());

  before(function(done) {
    bucket.create(function(err) {
      if (err) {
        done(err);
        return;
      }

      bucket.upload(IMAGES.logo, done);
    });
  });

  after(function(done) {
    storage.getBuckets(
      {
        prefix: TESTS_PREFIX,
      },
      function(err, buckets) {
        if (err) {
          done(err);
          return;
        }

        function deleteBucket(bucket, callback) {
          bucket.deleteFiles(function(err) {
            if (err) {
              callback(err);
              return;
            }

            bucket.delete(callback);
          });
        }

        async.each(buckets, deleteBucket, done);
      }
    );
  });

  it('should detect from a URL', () => {
    var url = 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png';
    return client.logoDetection(url).then(responses => {
      var response = responses[0];
      assert.deepEqual(response.logoAnnotations[0].description, 'Google');
    });
  });

  it('should detect from a filename', () => {
    return client.logoDetection(IMAGES.logo).then(responses => {
      var response = responses[0];
      assert.deepEqual(response.logoAnnotations[0].description, 'Google');
    });
  });

  it('should detect from a Buffer', () => {
    var buffer = fs.readFileSync(IMAGES.logo);
    return client.logoDetection(buffer).then(responses => {
      var response = responses[0];
      assert.deepEqual(response.logoAnnotations[0].description, 'Google');
    });
  });

  describe('single image', () => {
    var TYPES = [
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
        .then(responses => {
          var response = responses[0];
          assert(response.faceAnnotations.length >= 1);
          assert(response.labelAnnotations.length >= 1);
          assert(response.safeSearchAnnotation !== null);
        });
    });
  });

  function generateName() {
    return TESTS_PREFIX + uuid.v1();
  }
});
