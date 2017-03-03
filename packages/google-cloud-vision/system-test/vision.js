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
var http = require('http');
var is = require('is');
var multiline = require('multiline');
var normalizeNewline = require('normalize-newline');
var path = require('path');
var Storage = require('@google-cloud/storage');
var uuid = require('node-uuid');

var env = require('../../../system-test/env.js');
var Vision = require('../');

describe('Vision', function() {
  var IMAGES = {
    logo: path.join(__dirname, 'data/logo.jpg'),
    rushmore: path.join(__dirname, 'data/rushmore.jpg'),
    text: path.join(__dirname, 'data/text.png'),
    malformed: path.join(__dirname, 'data/index.yaml')
  };

  var TESTS_PREFIX = 'gcloud-vision-test';

  var storage = new Storage(env);
  var vision = new Vision(env);

  var bucket = storage.bucket(generateName());
  var file = bucket.file('logo.jpg');

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

  it('should detect from a URL', function(done) {
    var server = http.createServer(function(req, res) {
      fs.readFile(IMAGES.logo, function(err, resp) {
        assert.ifError(err);
        res.end(resp);
      });
    });

    server.listen(8800, function(err) {
      assert.ifError(err);

      var url = 'http://localhost:8800/logo.png';

      vision.detect(url, ['logos'], function(err, logos) {
        assert.ifError(err);

        assert.deepEqual(logos, ['Google']);

        done();
      });
    });
  });

  it('should detect from a File', function(done) {
    vision.detect(file, ['logos'], function(err, logos) {
      assert.ifError(err);

      assert.deepEqual(logos, ['Google']);

      done();
    });
  });

  it('should detect from a Buffer', function(done) {
    var buffer = fs.readFileSync(IMAGES.logo);
    vision.detect(buffer, ['logos'], function(err, logos) {
      assert.ifError(err);

      assert.deepEqual(logos, ['Google']);

      done();
    });
  });

  describe('single image', function() {
    var TYPES = ['faces', 'labels', 'safeSearch'];

    it('should perform a single detection', function(done) {
      vision.detect(IMAGES.rushmore, TYPES[0], function(err, detections) {
        assert.ifError(err);

        assert(is.array(detections));

        done();
      });
    });

    it('should perform multiple detections', function(done) {
      vision.detect(IMAGES.rushmore, TYPES, function(err, detections) {
        assert.ifError(err);

        assert(is.array(detections.faces));
        assert(is.array(detections.labels));
        assert(is.object(detections.safeSearch));

        done();
      });
    });

    it('should return errors', function(done) {
      vision.detect(IMAGES.malformed, TYPES, function(err, detections) {
        assert.strictEqual(err.name, 'PartialFailureError');
        assert(is.array(err.errors));
        assert.strictEqual(err.errors.length, 1);

        assert.deepEqual(detections, []);
        done();
      });
    });
  });

  describe('multiple images', function() {
    var TYPES = ['faces', 'labels', 'safeSearch'];

    it('should perform a single detection', function(done) {
      var images = [IMAGES.logo, IMAGES.rushmore];

      vision.detect(images, TYPES[0], function(err, detections) {
        assert.ifError(err);

        var image1detections = detections[0];
        var image2detections = detections[1];

        assert(is.array(image1detections));
        assert(is.array(image2detections));

        done();
      });
    });

    it('should perform multiple detections', function(done) {
      var images = [IMAGES.logo, IMAGES.rushmore];

      vision.detect(images, TYPES, function(err, detections) {
        assert.ifError(err);

        var image1detections = detections[0];
        var image2detections = detections[1];

        assert(is.array(image1detections.faces));
        assert(is.array(image1detections.labels));
        assert(is.object(image1detections.safeSearch));

        assert(is.array(image2detections.faces));
        assert(is.array(image2detections.labels));
        assert(is.object(image2detections.safeSearch));

        done();
      });
    });

    it('should return errors', function(done) {
      var images = [IMAGES.logo, IMAGES.malformed];

      vision.detect(images, TYPES, function(err, detections) {
        assert.strictEqual(err.name, 'PartialFailureError');
        assert(is.array(err.errors));
        assert.strictEqual(err.errors.length, 1);

        var image2errors = err.errors[0];
        assert.deepEqual(image2errors, {
          image: IMAGES.malformed,
          errors: [
            {
              code: 400,
              message:
                'image-annotator::Bad image data.: Image processing error!',
              type: 'faces'
            },
            {
              code: 400,
              message:
                'image-annotator::Bad image data.: Image processing error!',
              type: 'labels'
            },
            {
              code: 500,
              message: 'image-annotator::error(12): Image processing error!',
              type: 'safeSearch'
            }
          ]
        });

        var image1detections = detections[0];
        assert(is.array(image1detections.faces));
        assert(is.array(image1detections.labels));
        assert(is.object(image1detections.safeSearch));

        var image2detections = detections[1];
        assert.deepEqual(image2detections, {});

        done();
      });
    });
  });

  describe('faces', function() {
    it('should detect faces from an image', function(done) {
      vision.detectFaces(IMAGES.rushmore, function(err, faces) {
        assert.ifError(err);

        assert.strictEqual(faces.length, 1);

        done();
      });
    });

    it('should detect faces from multiple images', function(done) {
      vision.detectFaces([
        IMAGES.logo,
        IMAGES.rushmore
      ], function(err, faces) {
        assert.ifError(err);

        assert.strictEqual(faces.length, 2);
        assert.strictEqual(faces[0].length, 0);
        assert.strictEqual(faces[1].length, 1);

        done();
      });
    });
  });

  describe('labels', function() {
    it('should detect labels', function(done) {
      vision.detectLabels(IMAGES.rushmore, function(err, labels) {
        assert.ifError(err);

        assert(labels.length > -1);

        done();
      });
    });

    it('should detect labels from multiple images', function(done) {
      vision.detectLabels([
        IMAGES.logo,
        IMAGES.rushmore
      ], function(err, labels) {
        assert.ifError(err);

        assert.strictEqual(labels.length, 2);

        assert(labels[0].length > -1);
        assert(labels[1].length > -1);

        done();
      });
    });

    it('should support verbose mode', function(done) {
      var options = {
        verbose: true
      };

      vision.detectLabels(IMAGES.rushmore, options, function(err, labels) {
        assert.ifError(err);

        assert(is.defined(labels[0].mid));

        done();
      });
    });
  });

  describe('landmarks', function() {
    it('should detect landmarks from an image', function(done) {
      vision.detectLandmarks(IMAGES.rushmore, function(err, landmarks) {
        assert.ifError(err);

        assert.deepEqual(landmarks, ['Mount Rushmore']);

        done();
      });
    });

    it('should detect landmarks from multiple images', function(done) {
      vision.detectLandmarks([
        IMAGES.logo,
        IMAGES.rushmore
      ], function(err, landmarks) {
        assert.ifError(err);

        assert.strictEqual(landmarks.length, 2);

        assert.deepEqual(landmarks[0], []);
        assert.deepEqual(landmarks[1], ['Mount Rushmore']);

        done();
      });
    });

    it('should support verbose mode', function(done) {
      var opts = {
        verbose: true
      };

      vision.detectLandmarks(IMAGES.rushmore, opts, function(err, landmarks) {
        assert.ifError(err);

        assert(is.defined(landmarks[0].mid));

        done();
      });
    });
  });

  describe('logos', function() {
    it('should detect logos from an image', function(done) {
      vision.detectLogos(IMAGES.logo, function(err, logos) {
        assert.ifError(err);

        assert.deepEqual(logos, ['Google']);

        done();
      });
    });

    it('should detect logos from multiple images', function(done) {
      vision.detectLogos([
        IMAGES.rushmore,
        IMAGES.logo
      ], function(err, logos) {
        assert.ifError(err);

        assert.strictEqual(logos.length, 2);

        assert.deepEqual(logos[0], []);
        assert.deepEqual(logos[1], ['Google']);

        done();
      });
    });

    it('should support verbose mode', function(done) {
      var options = {
        verbose: true
      };

      vision.detectLogos(IMAGES.logo, options, function(err, logos) {
        assert.ifError(err);

        assert(is.defined(logos[0].mid));

        done();
      });
    });
  });

  describe('properties', function() {
    it('should detect image properties', function(done) {
      vision.detectProperties(IMAGES.rushmore, function(err, properties) {
        assert.ifError(err);

        assert.deepEqual(properties.colors, [
          '3b3027',
          '727d81',
          '3f3022',
          '838e92',
          '482b17',
          '5f4e3d',
          '261c14',
          'b29a7f',
          '51473e',
          '2c1e12'
        ]);

        done();
      });
    });

    it('should detect image properties from multiple images', function(done) {
      vision.detectProperties([
        IMAGES.logo,
        IMAGES.rushmore
      ], function(err, properties) {
        assert.ifError(err);

        assert.strictEqual(properties.length, 2);
        assert(is.array(properties[0].colors));
        assert(is.array(properties[1].colors));

        done();
      });
    });

    it('should support verbose mode', function(done) {
      var options = {
        verbose: true
      };

      vision.detectProperties(IMAGES.rushmore, options, function(err, props) {
        assert.ifError(err);

        assert(is.object(props.colors[0]));

        done();
      });
    });
  });

  describe('SafeSearch', function() {
    it('should detect SafeSearch', function(done) {
      vision.detectSafeSearch(IMAGES.rushmore, function(err, safesearch) {
        assert.ifError(err);

        assert.deepEqual(safesearch, {
          adult: false,
          medical: false,
          spoof: false,
          violence: false
        });

        done();
      });
    });

    it('should detect SafeSearch from multiple images', function(done) {
      vision.detectSafeSearch([
        IMAGES.logo,
        IMAGES.rushmore
      ], function(err, safesearches) {
        assert.ifError(err);

        assert.strictEqual(safesearches.length, 2);
        assert.deepEqual(safesearches[0], {
          adult: false,
          medical: false,
          spoof: false,
          violence: false
        });
        assert.deepEqual(safesearches[1], {
          adult: false,
          medical: false,
          spoof: false,
          violence: false
        });

        done();
      });
    });

    it('should support verbose mode', function(done) {
      var options = {
        verbose: true
      };

      vision.detectSafeSearch(IMAGES.rushmore, options, function(err, ss) {
        assert.ifError(err);

        assert(!is.boolean(ss.adult));

        done();
      });
    });
  });

  describe('text', function() {
    var expectedResults = [
      normalizeNewline(multiline.stripIndent(function() {/*
        Cloud Client Library for Node js an idiomatic, intuitive, and
        natural way for Node.js developers to integrate with Cloud
        Platform services, like Cloud Datastore and Cloud Storage.

      */}))
    ];

    expectedResults = expectedResults.concat(
      expectedResults[0]
        .replace(/\n/g, ' ')
        .trim()
        .split(' ')
    );

    it('should detect text', function(done) {
      vision.detectText(IMAGES.text, function(err, text) {
        assert.ifError(err);

        assert.deepEqual(text, expectedResults);

        done();
      });
    });

    it('should detect text from multiple images', function(done) {
      vision.detectText([
        IMAGES.rushmore,
        IMAGES.text
      ], function(err, texts) {
        assert.ifError(err);

        assert.strictEqual(texts.length, 2);

        assert.deepEqual(texts[0], []);
        assert.deepEqual(texts[1], expectedResults);

        done();
      });
    });

    it('should support verbose mode', function(done) {
      var options = {
        verbose: true
      };

      vision.detectText(IMAGES.text, options, function(err, text) {
        assert.ifError(err);

        assert(is.defined(text[0].bounds));

        done();
      });
    });
  });

  function generateName() {
    return TESTS_PREFIX + uuid.v1();
  }
});
