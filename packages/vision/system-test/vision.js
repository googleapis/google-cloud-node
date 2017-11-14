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

var assert = require('assert');
var async = require('async');
var fs = require('fs');
var path = require('path');
var Storage = require('@google-cloud/storage');
var uuid = require('node-uuid');

var env = require('../../../system-test/env.js');
var Vision = require('../');

describe('Vision', function() {
  var IMAGES = {
    document: path.join(__dirname, 'data/document.jpg'),
    logo: path.join(__dirname, 'data/logo.jpg'),
    rushmore: path.join(__dirname, 'data/rushmore.jpg'),
    text: path.join(__dirname, 'data/text.png'),
    malformed: __filename
  };

  var TESTS_PREFIX = 'gcloud-vision-test';

  var storage = new Storage(env);
  var vision = new Vision(env);

  var bucket = storage.bucket(generateName());

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
    storage.getBuckets({
      prefix: TESTS_PREFIX
    }, function(err, buckets) {
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
    });
  });

  it('should detect from a URL', () => {
    var url = 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png';
    return vision.logoDetection({
      image: {
        source: {imageUri: url}
      }
    }).then(responses => {
      var response = responses[0];
      assert.deepEqual(response.logoAnnotations[0].description, 'Google');
    });
  });

  it('should detect from a filename', () => {
    return vision.logoDetection({
      image: {
        source: {filename: IMAGES.logo}
      },
    }).then(responses => {
      var response = responses[0];
      assert.deepEqual(response.logoAnnotations[0].description, 'Google');
    });
  });

  it('should detect from a Buffer', () => {
    var buffer = fs.readFileSync(IMAGES.logo);
    return vision.logoDetection({
      image: {
        content: buffer
      }
    }).then(responses => {
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
      return vision.annotateImage({
        features: TYPES,
        image: {source: {filename: IMAGES.rushmore}},
      }).then(responses => {
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
