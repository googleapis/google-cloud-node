/**
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
var deepStrictEqual = require('deep-strict-equal');
var extend = require('extend');
var fs = require('fs');
var GrpcService = require('@google-cloud/common').GrpcService;
var nodeutil = require('util');
var prop = require('propprop');
var proxyquire = require('proxyquire');
var Service = require('@google-cloud/common').Service;
var tmp = require('tmp');
var util = require('@google-cloud/common').util;

var promisified = false;
var fakeUtil = extend({}, util, {
  promisifyAll: function(Class) {
    if (Class.name === 'Vision') {
      promisified = true;
    }
  }
});

function FakeService() {
  this.calledWith_ = arguments;
  Service.apply(this, arguments);
}

nodeutil.inherits(FakeService, Service);

var requestOverride = null;
var fakeRequest = function() {
  return (requestOverride || util.noop).apply(this, arguments);
};

describe('Vision', function() {
  var IMAGE = './image.jpg';
  var PROJECT_ID = 'project-id';

  var Vision;
  var VisionCached;
  var vision;

  before(function() {
    Vision = proxyquire('../', {
      request: fakeRequest,
      '@google-cloud/common': {
        Service: FakeService,
        util: fakeUtil
      }
    });

    VisionCached = extend({}, Vision);
  });

  beforeEach(function() {
    requestOverride = null;

    extend(Vision, VisionCached);

    vision = new Vision({
      projectId: PROJECT_ID
    });
  });

  describe('instantiation', function() {
    it('should normalize the arguments', function() {
      var normalizeArguments = fakeUtil.normalizeArguments;
      var normalizeArgumentsCalled = false;
      var fakeOptions = { projectId: PROJECT_ID };
      var fakeContext = {};

      fakeUtil.normalizeArguments = function(context, options) {
        normalizeArgumentsCalled = true;
        assert.strictEqual(context, fakeContext);
        assert.strictEqual(options, fakeOptions);
        return options;
      };

      Vision.call(fakeContext, fakeOptions);
      assert(normalizeArgumentsCalled);

      fakeUtil.normalizeArguments = normalizeArguments;
    });

    it('should inherit from Service', function() {
      assert(vision instanceof Service);

      var calledWith = vision.calledWith_[0];

      var baseUrl = 'https://vision.googleapis.com/v1';
      assert.strictEqual(calledWith.baseUrl, baseUrl);
      assert.strictEqual(calledWith.projectIdRequired, false);
      assert.deepEqual(calledWith.scopes, [
        'https://www.googleapis.com/auth/cloud-platform'
      ]);
      assert.deepEqual(calledWith.packageJson, require('../package.json'));
    });

    it('should promisify all the things', function() {
      assert(promisified);
    });
  });

  describe('constants', function() {
    it('should define constants', function() {
      assert.strictEqual(Vision.likelihood.VERY_UNLIKELY, 0);
      assert.strictEqual(Vision.likelihood.UNLIKELY, 1);
      assert.strictEqual(Vision.likelihood.POSSIBLE, 2);
      assert.strictEqual(Vision.likelihood.LIKELY, 3);
      assert.strictEqual(Vision.likelihood.VERY_LIKELY, 4);
    });
  });

  describe('annotate', function() {
    var REQ = {};

    it('should arrify request objects', function(done) {
      vision.request = function(reqOpts) {
        assert.strictEqual(reqOpts.json.requests[0], REQ);
        done();
      };

      vision.annotate(REQ, assert.ifError);
    });

    it('should make the correct API request', function(done) {
      var requests = [REQ, REQ];

      vision.request = function(reqOpts) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, 'images:annotate');
        assert.strictEqual(reqOpts.json.requests, requests);

        done();
      };

      vision.annotate(requests, assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = {};

      beforeEach(function() {
        vision.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', function(done) {
        vision.annotate(REQ, function(err, annotations, resp) {
          assert.strictEqual(err, error);
          assert.strictEqual(annotations, null);
          assert.strictEqual(resp, apiResponse);
          done();
        });
      });
    });

    describe('success', function() {
      var apiResponse = {
        responses: []
      };

      beforeEach(function() {
        vision.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should execute callback with annotations & API resp', function(done) {
        vision.annotate(REQ, function(err, annotations, resp) {
          assert.ifError(err);

          assert.strictEqual(annotations, apiResponse.responses);
          assert.strictEqual(resp, apiResponse);

          done();
        });
      });
    });
  });

  describe('detect', function() {
    var findImages_;
    var formatFaceAnnotation_;
    var formatImagePropertiesAnnotation_;
    var formatEntityAnnotation_;
    var formatSafeSearchAnnotation_;

    var TYPES = [
      'face',
      'label'
    ];

    var IMAGES = [
      {
        content: 'aGk='
      }
    ];

    var MULTIPLE_IMAGES = [
      IMAGES[0],
      IMAGES[0]
    ];

    before(function() {
      findImages_ = Vision.findImages_;
      formatFaceAnnotation_ = Vision.formatFaceAnnotation_;
      formatImagePropertiesAnnotation_ =
        Vision.formatImagePropertiesAnnotation_;
      formatEntityAnnotation_ = Vision.formatEntityAnnotation_;
      formatSafeSearchAnnotation_ = Vision.formatSafeSearchAnnotation_;
    });

    beforeEach(function() {
      Vision.findImages_ = function(images, callback) {
        callback(null, IMAGES);
      };
    });

    after(function() {
      Vision.findImages_ = findImages_;
      Vision.formatFaceAnnotation_ = formatFaceAnnotation_;
      Vision.formatImagePropertiesAnnotation_ =
        formatImagePropertiesAnnotation_;
      Vision.formatEntityAnnotation_ = formatEntityAnnotation_;
      Vision.formatSafeSearchAnnotation_ = formatSafeSearchAnnotation_;
    });

    it('should find the images', function(done) {
      Vision.findImages_ = function(images) {
        assert.strictEqual(images, IMAGE);
        done();
      };

      vision.detect(IMAGE, TYPES, assert.ifError);
    });

    it('should return an error from findImages_', function(done) {
      var error = new Error('Error.');

      Vision.findImages_ = function(images, callback) {
        assert.strictEqual(images, IMAGE);
        callback(error);
      };

      vision.detect(IMAGE, TYPES, function(err) {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should throw an error if a type does not exist', function() {
      var type = 'not-real-type';

      assert.throws(function() {
        vision.detect(IMAGE, type, assert.ifError);
      }, /Requested detection feature not found: not-real-type/);
    });

    it('should format the correct config', function(done) {
      var typeShortNameToFullName = {
        face: 'FACE_DETECTION',
        faces: 'FACE_DETECTION',

        label: 'LABEL_DETECTION',
        labels: 'LABEL_DETECTION',

        landmark: 'LANDMARK_DETECTION',
        landmarks: 'LANDMARK_DETECTION',

        logo: 'LOGO_DETECTION',
        logos: 'LOGO_DETECTION',

        properties: 'IMAGE_PROPERTIES',

        safeSearch: 'SAFE_SEARCH_DETECTION',

        text: 'TEXT_DETECTION'
      };

      var shortNames = Object.keys(typeShortNameToFullName);

      function checkConfig(shortName, callback) {
        vision.annotate = function(config) {
          assert.deepEqual(config, [
            {
              image: IMAGES[0],
              features: {
                type: typeShortNameToFullName[shortName]
              }
            }
          ]);

          callback();
        };

        vision.detect(IMAGE, shortName, assert.ifError);
      }

      async.each(shortNames, checkConfig, done);
    });

    it('should allow setting imageContext', function(done) {
      var imageContext = {
        latLongRect: {
          minLatLng: {
            latitude: 37.420901,
            longitude: -122.081293
          },
          maxLatLng: {
            latitude: 37.423228,
            longitude: -122.086347
          }
        }
      };

      vision.annotate = function(config) {
        assert.deepEqual(config, [
          {
            image: IMAGES[0],
            features: {
              type: 'LABEL_DETECTION'
            },
            imageContext: imageContext
          }
        ]);

        done();
      };

      vision.detect(IMAGE, {
        types: ['label'],
        imageContext: imageContext
      }, assert.ifError);
    });

    it('should allow setting maxResults', function(done) {
      var maxResults = 10;

      vision.annotate = function(config) {
        assert.deepEqual(config, [
          {
            image: IMAGES[0],
            features: {
              type: 'FACE_DETECTION',
              maxResults: 10
            }
          }
        ]);

        done();
      };

      vision.detect(IMAGE, {
        types: ['face'],
        maxResults: maxResults
      }, assert.ifError);
    });

    it('should return empty detections when none were found', function(done) {
      vision.annotate = function(config, callback) {
        callback(null, [
          {},
          {}
        ]);
      };

      vision.detect(IMAGE, TYPES, function(err, detections) {
        assert.ifError(err);
        assert.deepEqual(detections, {
          faces: [],
          labels: []
        });
        done();
      });
    });

    it('should return the correct detections', function(done) {
      var annotations = [
        {
          faceAnnotations: {}
        },
        {
          imagePropertiesAnnotation: {}
        },
        {
          labelAnnotations: {}
        },
        {
          landmarkAnnotations: {}
        },
        {
          logoAnnotations: {}
        },
        {
          safeSearchAnnotation: {}
        },
        {
          textAnnotations: {}
        }
      ];

      var faceAnnotation = {};
      var imagePropertiesAnnotation = {};
      var entityAnnotation = {};
      var safeSearchAnnotation = {};

      Vision.formatFaceAnnotation_ = function() {
        return faceAnnotation;
      };

      Vision.formatImagePropertiesAnnotation_ = function() {
        return imagePropertiesAnnotation;
      };

      Vision.formatEntityAnnotation_ = function() {
        return entityAnnotation;
      };

      Vision.formatSafeSearchAnnotation_ = function() {
        return safeSearchAnnotation;
      };

      vision.annotate = function(config, callback) {
        callback(null, annotations);
      };

      var expected = {
        faces: faceAnnotation,
        properties: imagePropertiesAnnotation,
        labels: entityAnnotation,
        landmarks: entityAnnotation,
        logos: entityAnnotation,
        safeSearch: safeSearchAnnotation,
        text: entityAnnotation
      };

      var types = Object.keys(expected);

      vision.detect(IMAGE, types, function(err, detections) {
        assert.ifError(err);

        assert(deepStrictEqual(detections, expected));

        done();
      });
    });

    it('should return an empty array for empty responses', function(done) {
      var annotations = [
        {}, // empty `faceAnnotations`
        {
          imagePropertiesAnnotation: {}
        }
      ];

      vision.annotate = function(config, callback) {
        callback(null, annotations);
      };

      var expected = {
        faces: [],
        properties: {}
      };

      var types = Object.keys(expected);

      vision.detect(IMAGE, types, function(err, detections) {
        assert.ifError(err);

        assert(deepStrictEqual(detections, expected));

        done();
      });
    });

    it('should return partial failure errors', function(done) {
      var error1 = {};
      var error2 = {};

      var annotations = [
        { error: error1 },
        { error: error2 }
      ];

      var types = ['faces', 'properties'];

      Vision.formatError_ = function(err) {
        err.formatted = true;
        return err;
      };

      vision.annotate = function(config, callback) {
        callback(null, annotations);
      };

      vision.detect(IMAGE, types, function(err, detections) {
        assert.strictEqual(err.name, 'PartialFailureError');

        assert.deepEqual(err.errors, [
          {
            image: IMAGE,
            errors: [
              extend(error1, {
                type: types[0],
                formatted: true
              }),
              extend(error2, {
                type: types[1],
                formatted: true
              })
            ]
          }
        ]);

        assert.deepEqual(detections, {});

        done();
      });
    });

    it('should return partial failure errors for multi images', function(done) {
      var error1 = {};
      var error2 = {};
      var error3 = {};
      var error4 = {};

      var annotations = [
        { error: error1 },
        { error: error2 },
        { error: error3 },
        { error: error4 }
      ];

      var images = ['./image.jpg', './image-2.jpg'];
      var types = ['faces', 'properties'];

      Vision.findImages_ = function(images, callback) {
        callback(null, MULTIPLE_IMAGES);
      };

      Vision.formatError_ = function(err) {
        err.formatted = true;
        return err;
      };

      vision.annotate = function(config, callback) {
        callback(null, annotations);
      };

      vision.detect(images, types, function(err, detections) {
        assert.strictEqual(err.name, 'PartialFailureError');

        assert.deepEqual(err.errors, [
          {
            image: images[0],
            errors: [
              extend(error1, {
                type: types[0],
                formatted: true
              }),
              extend(error2, {
                type: types[1],
                formatted: true
              })
            ]
          },
          {
            image: images[1],
            errors: [
              extend(error3, {
                type: types[0],
                formatted: true
              }),
              extend(error4, {
                type: types[1],
                formatted: true
              })
            ]
          }
        ]);

        assert.deepEqual(detections, [{}, {}]);

        done();
      });
    });

    it('should return only the detection wanted', function(done) {
      vision.annotate = function(config, callback) {
        callback(null, [{}]);
      };

      vision.detect(IMAGE, ['face'], function(err, detection) {
        assert.ifError(err);

        assert.deepEqual(detection, []);

        done();
      });
    });

    it('should return the correct detections for multiple img', function(done) {
      var anno = { a: 'b', c: 'd' };

      var annotations = [
        // Image 1 annotations:
        {
          faceAnnotations: anno
        },
        {
          imagePropertiesAnnotation: anno
        },
        {
          labelAnnotations: anno
        },
        {
          landmarkAnnotations: anno
        },
        {
          logoAnnotations: anno
        },
        {
          safeSearchAnnotation: anno
        },
        {
          textAnnotations: anno
        },

        // Image 2 annotations:
        {
          faceAnnotations: anno
        },
        {
          imagePropertiesAnnotation: anno
        },
        {
          labelAnnotations: anno
        },
        {
          landmarkAnnotations: anno
        },
        {
          logoAnnotations: anno
        },
        {
          safeSearchAnnotation: anno
        },
        {
          textAnnotations: anno
        }
      ];

      var faceAnnotation = {};
      var imagePropertiesAnnotation = {};
      var entityAnnotation = {};
      var safeSearchAnnotation = {};

      Vision.formatFaceAnnotation_ = function(anno_) {
        assert.strictEqual(anno_, anno);
        return faceAnnotation;
      };

      Vision.formatImagePropertiesAnnotation_ = function(anno_) {
        assert.strictEqual(anno_, anno);
        return imagePropertiesAnnotation;
      };

      Vision.formatEntityAnnotation_ = function(anno_) {
        assert.strictEqual(anno_, anno);
        return entityAnnotation;
      };

      Vision.formatSafeSearchAnnotation_ = function(anno_) {
        assert.strictEqual(anno_, anno);
        return safeSearchAnnotation;
      };

      Vision.findImages_ = function(images, callback) {
        callback(null, IMAGES.concat(IMAGES));
      };

      vision.annotate = function(config, callback) {
        callback(null, annotations);
      };

      var expected = [
        {
          faces: faceAnnotation,
          properties: imagePropertiesAnnotation,
          labels: entityAnnotation,
          landmarks: entityAnnotation,
          logos: entityAnnotation,
          safeSearch: safeSearchAnnotation,
          text: entityAnnotation
        },
        {
          faces: faceAnnotation,
          properties: imagePropertiesAnnotation,
          labels: entityAnnotation,
          landmarks: entityAnnotation,
          logos: entityAnnotation,
          safeSearch: safeSearchAnnotation,
          text: entityAnnotation
        }
      ];

      var types = Object.keys(expected[0]);

      vision.detect([IMAGE, IMAGE], types, function(err, detections) {
        assert.ifError(err);
        assert(deepStrictEqual(detections, expected));
        done();
      });
    });

    it('should return an error from annotate()', function(done) {
      var error = new Error('Error.');
      var apiResponse = {};

      vision.annotate = function(config, callback) {
        callback(error, null, apiResponse);
      };

      vision.detect(IMAGE, TYPES, function(err, annotations, resp) {
        assert.strictEqual(err, error);
        assert.strictEqual(annotations, null);
        assert.strictEqual(resp, apiResponse);
        done();
      });
    });

    it('should return the apiResponse from annotate()', function(done) {
      var apiResponse = {
        responses: [
          {
            faceAnnotations: {}
          }
        ]
      };

      var originalApiResponse = extend(true, {}, apiResponse);

      Vision.formatFaceAnnotation_ = function() {
        return {};
      };

      vision.annotate = function(config, callback) {
        callback(null, apiResponse.responses, apiResponse);
      };

      vision.detect(IMAGE, TYPES, function(err, annotations, resp) {
        assert.ifError(err);

        // assert.strictEqual(resp, apiResponse);
        assert.deepEqual(resp, originalApiResponse);

        done();
      });
    });
  });

  describe('detectFaces', function() {
    it('should accept a callback only', function(done) {
      vision.detect = testWithoutOptions('faces');

      vision.detectFaces(IMAGE, done);
    });

    it('should accept options', function(done) {
      var options = {
        a: 'b',
        c: 'd'
      };

      vision.detect = testWithOptions('faces', options);

      vision.detectFaces(IMAGE, options, done);
    });
  });

  describe('detectLabels', function() {
    it('should accept a callback only', function(done) {
      vision.detect = testWithoutOptions('labels');

      vision.detectLabels(IMAGE, done);
    });

    it('should accept options', function(done) {
      var options = {
        a: 'b',
        c: 'd'
      };

      vision.detect = testWithOptions('labels', options);

      vision.detectLabels(IMAGE, options, done);
    });
  });

  describe('detectLandmarks', function() {
    it('should accept a callback only', function(done) {
      vision.detect = testWithoutOptions('landmarks');

      vision.detectLandmarks(IMAGE, done);
    });

    it('should accept options', function(done) {
      var options = {
        a: 'b',
        c: 'd'
      };

      vision.detect = testWithOptions('landmarks', options);

      vision.detectLandmarks(IMAGE, options, done);
    });
  });

  describe('detectLogos', function() {
    it('should accept a callback only', function(done) {
      vision.detect = testWithoutOptions('logos');

      vision.detectLogos(IMAGE, done);
    });

    it('should accept options', function(done) {
      var options = {
        a: 'b',
        c: 'd'
      };

      vision.detect = testWithOptions('logos', options);

      vision.detectLogos(IMAGE, options, done);
    });
  });

  describe('detectProperties', function() {
    it('should accept a callback only', function(done) {
      vision.detect = testWithoutOptions('properties');

      vision.detectProperties(IMAGE, done);
    });

    it('should accept options', function(done) {
      var options = {
        a: 'b',
        c: 'd'
      };

      vision.detect = testWithOptions('properties', options);

      vision.detectProperties(IMAGE, options, done);
    });
  });

  describe('detectSafeSearch', function() {
    it('should accept a callback only', function(done) {
      vision.detect = testWithoutOptions('safeSearch');

      vision.detectSafeSearch(IMAGE, done);
    });

    it('should accept options', function(done) {
      var options = {
        a: 'b',
        c: 'd'
      };

      vision.detect = testWithOptions('safeSearch', options);

      vision.detectSafeSearch(IMAGE, options, done);
    });
  });

  describe('detectText', function() {
    it('should accept a callback only', function(done) {
      vision.detect = testWithoutOptions('text');

      vision.detectText(IMAGE, done);
    });

    it('should accept options', function(done) {
      var options = {
        a: 'b',
        c: 'd'
      };

      vision.detect = testWithOptions('text', options);

      vision.detectText(IMAGE, options, done);
    });
  });

  describe('convertToBoolean_', function() {
    it('should return booleans', function() {
      var baseLikelihood = Vision.likelihood.LIKELY;

      assert.strictEqual(
        Vision.convertToBoolean_(baseLikelihood, 'VERY_UNLIKELY'),
        false
      );

      assert.strictEqual(
        Vision.convertToBoolean_(baseLikelihood, 'UNLIKELY'),
        false
      );

      assert.strictEqual(
        Vision.convertToBoolean_(baseLikelihood, 'POSSIBLE'),
        false
      );

      assert.strictEqual(
        Vision.convertToBoolean_(baseLikelihood, 'LIKELY'),
        true
      );

      assert.strictEqual(
        Vision.convertToBoolean_(baseLikelihood, 'VERY_LIKELY'),
        true
      );
    });
  });

  describe('findImages_', function() {
    it('should convert a File object', function(done) {
      var file = {
        name: 'file-name',
        bucket: {
          name: 'bucket-name'
        }
      };

      var isCustomType = util.isCustomType;

      fakeUtil.isCustomType = function(unknown, type) {
        fakeUtil.isCustomType = isCustomType;
        assert.strictEqual(unknown, file);
        assert.strictEqual(type, 'storage/file');
        return true;
      };

      Vision.findImages_(file, function(err, images) {
        assert.ifError(err);

        assert.deepEqual(images, [
          {
            source: {
              gcsImageUri: 'gs://' + file.bucket.name + '/' + file.name
            }
          }
        ]);

        done();
      });
    });

    it('should get a file from a URL', function(done) {
      var imageUri = 'http://www.google.com/logo.png';
      var body = 'body';

      requestOverride = function(reqOpts, callback) {
        assert.strictEqual(reqOpts.method, 'GET');
        assert.strictEqual(reqOpts.uri, imageUri);
        assert.strictEqual(reqOpts.encoding, 'base64');

        callback(null, {}, body);
      };

      Vision.findImages_(imageUri, function(err, images) {
        assert.ifError(err);
        assert.deepEqual(images, [
          {
            content: body
          }
        ]);
        done();
      });
    });

    it('should return an error from reading a URL', function(done) {
      var imageUri = 'http://www.google.com/logo.png';

      var error = new Error('Error.');

      requestOverride = function(reqOpts, callback) {
        callback(error);
      };

      Vision.findImages_(imageUri, function(err) {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should read from a file path', function(done) {
      tmp.setGracefulCleanup();

      tmp.file(function tempFileCreated_(err, tmpFilePath) {
        assert.ifError(err);

        var contents = 'abcdef';

        function writeFile(callback) {
          fs.writeFile(tmpFilePath, contents, callback);
        }

        function convertFile(callback) {
          Vision.findImages_(tmpFilePath, callback);
        }

        async.waterfall([writeFile, convertFile], function(err, images) {
          assert.ifError(err);

          assert.deepEqual(images, [
            {
              content: new Buffer(contents).toString('base64')
            }
          ]);

          done();
        });
      });
    });


    it('should get content from a buffer', function(done) {
      var base64String = 'aGVsbG8gd29ybGQ=';
      var buffer = new Buffer(base64String, 'base64');

      Vision.findImages_(buffer, function(err, images) {
        assert.ifError(err);
        assert.deepEqual(images, [
          {
            content: base64String
          }
        ]);
        done();
      });
    });

    it('should return an error when file cannot be found', function(done) {
      Vision.findImages_('./not-real-file.png', function(err) {
        assert.strictEqual(err.code, 'ENOENT');
        done();
      });
    });
  });

  describe('formatEntityAnnotation_', function() {
    var entityAnnotation = {
      description: 'description',
      mid: 'mid',
      score: 0.4,
      boundingPoly: {
        vertices: {}
      },
      confidence: 0.2,
      locations: [
        {
          latLng: []
        }
      ],
      properties: {}
    };

    describe('verbose: false', function() {
      it('should just return the description', function() {
        var formatted = Vision.formatEntityAnnotation_(entityAnnotation, {});

        assert.strictEqual(formatted, entityAnnotation.description);
      });
    });

    describe('verbose: true', function() {
      var opts = {
        verbose: true
      };

      it('should format the entity annotation', function() {
        var formatted = Vision.formatEntityAnnotation_(entityAnnotation, opts);

        assert.deepEqual(formatted, {
          desc: entityAnnotation.description,
          mid: entityAnnotation.mid,
          score: entityAnnotation.score * 100,
          bounds: entityAnnotation.boundingPoly.vertices,
          confidence: entityAnnotation.confidence * 100,
          locations: entityAnnotation.locations.map(prop('latLng')),
          properties: entityAnnotation.properties
        });
      });
    });
  });

  describe('formatError_', function() {
    var error = {
      code: 1,
      message: 'Oh no!'
    };

    it('should format an error', function() {
      var err = Vision.formatError_(error);

      assert.deepEqual(err, {
        code: GrpcService.GRPC_ERROR_CODE_TO_HTTP[1].code,
        message: error.message
      });
    });
  });

  describe('formatFaceAnnotation_', function() {
    var faceAnnotation;

    before(function() {
      faceAnnotation = {
        panAngle: {},
        rollAngle: {},
        tiltAngle: {},

        boundingPoly: {
          vertices: {}
        },
        fdBoundingPoly: {
          vertices: {}
        },

        landmarkingConfidence: 0.2,

        landmarks: [
          {
            type: 'CHIN_GNATHION',
            position: {}
          },
          {
            type: 'CHIN_LEFT_GONION',
            position: {}
          },
          {
            type: 'CHIN_RIGHT_GONION',
            position: {}
          },
          {
            type: 'LEFT_EAR_TRAGION',
            position: {}
          },
          {
            type: 'RIGHT_EAR_TRAGION',
            position: {}
          },
          {
            type: 'LEFT_OF_LEFT_EYEBROW',
            position: {}
          },
          {
            type: 'RIGHT_OF_LEFT_EYEBROW',
            position: {}
          },
          {
            type: 'LEFT_EYEBROW_UPPER_MIDPOINT',
            position: {}
          },
          {
            type: 'LEFT_OF_RIGHT_EYEBROW',
            position: {}
          },
          {
            type: 'RIGHT_OF_RIGHT_EYEBROW',
            position: {}
          },
          {
            type: 'RIGHT_EYEBROW_UPPER_MIDPOINT',
            position: {}
          },
          {
            type: 'LEFT_EYE_BOTTOM_BOUNDARY',
            position: {}
          },
          {
            type: 'LEFT_EYE',
            position: {}
          },
          {
            type: 'LEFT_EYE_LEFT_CORNER',
            position: {}
          },
          {
            type: 'LEFT_EYE_PUPIL',
            position: {}
          },
          {
            type: 'LEFT_EYE_RIGHT_CORNER',
            position: {}
          },
          {
            type: 'LEFT_EYE_TOP_BOUNDARY',
            position: {}
          },
          {
            type: 'RIGHT_EYE_BOTTOM_BOUNDARY',
            position: {}
          },
          {
            type: 'RIGHT_EYE',
            position: {}
          },
          {
            type: 'RIGHT_EYE_LEFT_CORNER',
            position: {}
          },
          {
            type: 'RIGHT_EYE_PUPIL',
            position: {}
          },
          {
            type: 'RIGHT_EYE_RIGHT_CORNER',
            position: {}
          },
          {
            type: 'RIGHT_EYE_TOP_BOUNDARY',
            position: {}
          },
          {
            type: 'FOREHEAD_GLABELLA',
            position: {}
          },
          {
            type: 'LOWER_LIP',
            position: {}
          },
          {
            type: 'UPPER_LIP',
            position: {}
          },
          {
            type: 'MOUTH_CENTER',
            position: {}
          },
          {
            type: 'MOUTH_LEFT',
            position: {}
          },
          {
            type: 'MOUTH_RIGHT',
            position: {}
          },
          {
            type: 'NOSE_BOTTOM_CENTER',
            position: {}
          },
          {
            type: 'NOSE_BOTTOM_LEFT',
            position: {}
          },
          {
            type: 'NOSE_BOTTOM_RIGHT',
            position: {}
          },
          {
            type: 'NOSE_TIP',
            position: {}
          },
          {
            type: 'MIDPOINT_BETWEEN_EYES',
            position: {}
          }
        ],

        detectionConfidence: 0.2,
        blurredLikelihood: 'LIKELY',
        underExposedLikelihood: 'LIKELY',
        joyLikelihood: 'LIKELY',
        headwearLikelihood: 'LIKELY',
        angerLikelihood: 'LIKELY',
        sorrowLikelihood: 'LIKELY',
        surpriseLikelihood: 'LIKELY',

        nonExistentLikelihood: 'LIKELY'
      };
    });

    function findLandmark(type) {
      var landmarks = faceAnnotation.landmarks;

      return landmarks.filter(function(landmark) {
        return landmark.type === type;
      })[0].position;
    }

    it('should format the annotation', function() {
      var expected = {
        angles: {
          pan: faceAnnotation.panAngle,
          roll: faceAnnotation.rollAngle,
          tilt: faceAnnotation.tiltAngle
        },

        bounds: {
          head: faceAnnotation.boundingPoly.vertices,
          face: faceAnnotation.fdBoundingPoly.vertices
        },

        features: {
          confidence: faceAnnotation.landmarkingConfidence * 100,
          chin: {
            center: findLandmark('CHIN_GNATHION'),
            left: findLandmark('CHIN_LEFT_GONION'),
            right: findLandmark('CHIN_RIGHT_GONION')
          },
          ears: {
            left: findLandmark('LEFT_EAR_TRAGION'),
            right: findLandmark('RIGHT_EAR_TRAGION'),
          },
          eyebrows: {
            left: {
              left: findLandmark('LEFT_OF_LEFT_EYEBROW'),
              right: findLandmark('RIGHT_OF_LEFT_EYEBROW'),
              top: findLandmark('LEFT_EYEBROW_UPPER_MIDPOINT')
            },
            right: {
              left: findLandmark('LEFT_OF_RIGHT_EYEBROW'),
              right: findLandmark('RIGHT_OF_RIGHT_EYEBROW'),
              top: findLandmark('RIGHT_EYEBROW_UPPER_MIDPOINT')
            }
          },
          eyes: {
            left: {
              bottom: findLandmark('LEFT_EYE_BOTTOM_BOUNDARY'),
              center: findLandmark('LEFT_EYE'),
              left: findLandmark('LEFT_EYE_LEFT_CORNER'),
              pupil: findLandmark('LEFT_EYE_PUPIL'),
              right: findLandmark('LEFT_EYE_RIGHT_CORNER'),
              top: findLandmark('LEFT_EYE_TOP_BOUNDARY')
            },
            right: {
              bottom: findLandmark('RIGHT_EYE_BOTTOM_BOUNDARY'),
              center: findLandmark('RIGHT_EYE'),
              left: findLandmark('RIGHT_EYE_LEFT_CORNER'),
              pupil: findLandmark('RIGHT_EYE_PUPIL'),
              right: findLandmark('RIGHT_EYE_RIGHT_CORNER'),
              top: findLandmark('RIGHT_EYE_TOP_BOUNDARY')
            }
          },
          forehead: findLandmark('FOREHEAD_GLABELLA'),
          lips: {
            bottom: findLandmark('LOWER_LIP'),
            top: findLandmark('UPPER_LIP')
          },
          mouth: {
            center: findLandmark('MOUTH_CENTER'),
            left: findLandmark('MOUTH_LEFT'),
            right: findLandmark('MOUTH_RIGHT')
          },
          nose: {
            bottom: {
              center: findLandmark('NOSE_BOTTOM_CENTER'),
              left: findLandmark('NOSE_BOTTOM_LEFT'),
              right: findLandmark('NOSE_BOTTOM_RIGHT')
            },
            tip: findLandmark('NOSE_TIP'),
            top: findLandmark('MIDPOINT_BETWEEN_EYES')
          }
        },

        confidence: faceAnnotation.detectionConfidence * 100,

        anger: true,
        blurred: true,
        headwear: true,
        joy: true,
        sorrow: true,
        surprise: true,
        underExposed: true,

        // Checks that *any* property that ends in `Likelihood` is shortened.
        nonExistent: true
      };

      var formatted = Vision.formatFaceAnnotation_(faceAnnotation);

      assert(deepStrictEqual(formatted, expected));
    });
  });

  describe('formatImagePropertiesAnnotation_', function() {
    var imgAnnotation = {
      dominantColors: {
        colors: [
          {
            color: {
              red: 255,
              green: 255,
              blue: 255
            },
            pixelFraction: 0.8,
            score: 0.2
          }
        ]
      }
    };

    describe('verbose: false', function() {
      var opts = {};

      it('should format the annotation', function() {
        var fmtd = Vision.formatImagePropertiesAnnotation_(imgAnnotation, opts);

        assert.deepEqual(fmtd, {
          colors: ['ffffff']
        });
      });
    });

    describe('verbose: true', function() {
      var opts = {
        verbose: true
      };

      it('should format the annotation', function() {
        var fmtd = Vision.formatImagePropertiesAnnotation_(imgAnnotation, opts);

        assert.deepEqual(fmtd, {
          colors: [
            {
              red: 255,
              green: 255,
              blue: 255,
              hex: 'ffffff',
              coverage: 80,
              score: 20
            }
          ]
        });
      });
    });
  });

  describe('formatSafeSearchAnnotation_', function() {
    var safeSearchAnno;

    before(function() {
      safeSearchAnno = {
        adult: 'LIKELY',
        medical: 'LIKELY',
        spoof: 'LIKELY',
        violence: 'LIKELY'
      };
    });

    describe('verbose: false', function() {
      var opts = {};

      it('should convert values to a boolean', function() {
        var fmtd = Vision.formatSafeSearchAnnotation_(safeSearchAnno, opts);

        assert.deepEqual(fmtd, {
          adult: true,
          medical: true,
          spoof: true,
          violence: true
        });
      });
    });

    describe('verbose: true', function() {
      var opts = {
        verbose: true
      };

      it('should return raw response', function() {
        var fmtd = Vision.formatSafeSearchAnnotation_(safeSearchAnno, opts);

        assert.strictEqual(fmtd, safeSearchAnno);
      });
    });
  });

  function testWithoutOptions(type) {
    return function(images, options, callback) {
      assert.strictEqual(images, IMAGE);
      assert.deepEqual(options, {
        types: [type]
      });
      callback(); // done()
    };
  }

  function testWithOptions(type, options) {
    return function(images, options_, callback) {
      assert.strictEqual(images, IMAGE);
      assert.notStrictEqual(options_, options);
      assert.deepEqual(options_, extend({}, options, {
        types: [type]
      }));
      callback(); // done()
    };
  }
});
