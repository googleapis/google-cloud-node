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
var GrpcService = require('@google-cloud/common-grpc').Service;
var prop = require('propprop');
var proxyquire = require('proxyquire');
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

var fakeV1Override;
function fakeV1() {
  if (fakeV1Override) {
    return fakeV1Override.apply(null, arguments);
  }

  return {
    imageAnnotatorClient: util.noop
  };
}

describe('Vision Deprecated Manual Layer', function() {
  var IMAGE = './image.jpg';
  var PROJECT_ID = 'project-id';

  var Vision;
  var VisionCached;
  var vision;

  var OPTIONS = {
    projectId: PROJECT_ID
  };

  before(function() {
    Vision = proxyquire('../src/manual', {
      '@google-cloud/common': {
        util: fakeUtil
      },
      './v1': fakeV1
    });

    VisionCached = extend({}, Vision);
  });

  beforeEach(function() {
    fakeV1Override = null;

    vision = new Vision(OPTIONS);

    extend(Vision, VisionCached);
  });

  describe('instantiation', function() {
    it('should promisify all the things', function() {
      assert(promisified);
    });

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

    it('should create a gax api client', function() {
      var expectedVisionClient = {};

      fakeV1Override = function(options) {
        var expected = extend({}, OPTIONS, {
          libName: 'gccl',
          libVersion: require('../package.json').version
        });
        assert.deepStrictEqual(options, expected);

        return {
          imageAnnotatorClient: function(options) {
            assert.deepStrictEqual(options, expected);
            return expectedVisionClient;
          }
        };
      };

      var vision = new Vision(OPTIONS);

      assert.deepEqual(vision.api, {
        Vision: expectedVisionClient
      });
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
      vision.api.Vision = {
        batchAnnotateImages: function(reqOpts) {
          assert.deepEqual(reqOpts, {
            requests: [REQ]
          });
          done();
        }
      };

      vision.annotate(REQ, assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = {};

      beforeEach(function() {
        vision.api.Vision = {
          batchAnnotateImages: function(reqOpts, callback) {
            callback(error, apiResponse);
          }
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
        vision.api.Vision = {
          batchAnnotateImages: function(reqOpts, callback) {
            callback(null, apiResponse);
          }
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


    beforeEach(function() {
      Vision.findImages_ = function(images, callback) {
        callback(null, IMAGES);
      };
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
        crop: 'CROP_HINTS',
        crops: 'CROP_HINTS',

        doc: 'DOCUMENT_TEXT_DETECTION',
        document: 'DOCUMENT_TEXT_DETECTION',

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

        similar: 'WEB_DETECTION',

        text: 'TEXT_DETECTION'
      };

      var shortNames = Object.keys(typeShortNameToFullName);

      function checkConfig(shortName, callback) {
        vision.annotate = function(config) {
          assert.deepEqual(config, [
            {
              image: IMAGES[0],
              features: [
                {
                  type: typeShortNameToFullName[shortName]
                }
              ]
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
            features: [
              {
                type: 'LABEL_DETECTION'
              }
            ],
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
            features: [
              {
                type: 'FACE_DETECTION',
                maxResults: 10
              }
            ]
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
          cropHintsAnnotation: { anno: true }
        },
        {
          faceAnnotations: { anno: true }
        },
        {
          fullTextAnnotation: { anno: true }
        },
        {
          imagePropertiesAnnotation: { anno: true }
        },
        {
          labelAnnotations: { anno: true }
        },
        {
          landmarkAnnotations: { anno: true }
        },
        {
          logoAnnotations: { anno: true }
        },
        {
          safeSearchAnnotation: { anno: true }
        },
        {
          textAnnotations: { anno: true }
        },
        {
          webDetection: { anno: true }
        }
      ];

      var cropHintsAnnotation = {};
      var faceAnnotation = {};
      var fullTextAnnotation = {};
      var imagePropertiesAnnotation = {};
      var entityAnnotation = {};
      var safeSearchAnnotation = {};
      var webDetection = {};

      Vision.formatCropHintsAnnotation_ = function() {
        return cropHintsAnnotation;
      };

      Vision.formatFaceAnnotation_ = function() {
        return faceAnnotation;
      };

      Vision.formatFullTextAnnotation_ = function() {
        return fullTextAnnotation;
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

      Vision.formatWebDetection_ = function() {
        return webDetection;
      };

      vision.annotate = function(config, callback) {
        callback(null, annotations);
      };

      var expected = {
        crops: cropHintsAnnotation,
        faces: faceAnnotation,
        document: fullTextAnnotation,
        properties: imagePropertiesAnnotation,
        labels: entityAnnotation,
        landmarks: entityAnnotation,
        logos: entityAnnotation,
        safeSearch: safeSearchAnnotation,
        text: entityAnnotation,
        similar: webDetection
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
      var error1 = { error: true };
      var error2 = { error: true };

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
      var error1 = { error: true };
      var error2 = { error: true };
      var error3 = { error: true };
      var error4 = { error: true };

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

    it('should return the raw annotation for unknown types', function(done) {
      var anno = { a: 'b', c: 'd' };

      var annotations = [
        {
          faceAnnotations: anno
        }
      ];

      Vision.formatFaceAnnotation_ = null;

      vision.annotate = function(config, callback) {
        callback(null, annotations);
      };

      vision.detect(IMAGE, 'faces', function(err, detections) {
        assert.ifError(err);
        assert.strictEqual(detections, anno);
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

  describe('detectCrops', function() {
    it('should accept a callback only', function(done) {
      vision.detect = testWithoutOptions('crops');

      vision.detectCrops(IMAGE, done);
    });

    it('should accept options', function(done) {
      var options = {
        a: 'b',
        c: 'd'
      };

      vision.detect = testWithOptions('crops', options);

      vision.detectCrops(IMAGE, options, done);
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

  describe('detectSimilar', function() {
    it('should accept a callback only', function(done) {
      vision.detect = testWithoutOptions('similar');

      vision.detectSimilar(IMAGE, done);
    });

    it('should accept options', function(done) {
      var options = {
        a: 'b',
        c: 'd'
      };

      vision.detect = testWithOptions('similar', options);

      vision.detectSimilar(IMAGE, options, done);
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

  describe('readDocument', function() {
    it('should accept a callback only', function(done) {
      vision.detect = testWithoutOptions('document');

      vision.readDocument(IMAGE, done);
    });

    it('should accept options', function(done) {
      var options = {
        a: 'b',
        c: 'd'
      };

      vision.detect = testWithOptions('document', options);

      vision.readDocument(IMAGE, options, done);
    });
  });

  describe('findImages_', function() {
    it('should return buffer for snippet sandbox', function(done) {
      global.GCLOUD_SANDBOX_ENV = true;

      Vision.findImages_({}, function(err, images) {
        delete global.GCLOUD_SANDBOX_ENV;
        assert.ifError(err);

        assert.deepEqual(images, [
          {
            content: new Buffer('')
          }
        ]);

        done();
      });
    });

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

    it('should properly format a URL', function(done) {
      var imageUri = 'http://www.google.com/logo.png';

      Vision.findImages_(imageUri, function(err, images) {
        assert.ifError(err);
        assert.deepEqual(images, [
          {
            source: {
              imageUri: imageUri
            }
          }
        ]);
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

  describe('formatCropHintsAnnotation_', function() {
    var VERTICES = [
      { x: 0, y: 0 },
      { x: 0, y: 0 }
    ];

    var CONFIDENCE = 0.3;

    var cropHintsAnnotation = {
      cropHints: [
        {
          boundingPoly: {
            vertices: VERTICES
          },
          confidence: CONFIDENCE
        }
      ]
    };

    describe('verbose: false', function() {
      var opts = {};

      it('should format the annotation', function() {
        var fmtd = Vision.formatCropHintsAnnotation_(cropHintsAnnotation, opts);

        assert.deepEqual(fmtd, [
          VERTICES
        ]);
      });
    });

    describe('verbose: true', function() {
      var opts = { verbose: true };

      it('should format the annotation', function() {
        var fmtd = Vision.formatCropHintsAnnotation_(cropHintsAnnotation, opts);

        assert.deepEqual(fmtd, [
          {
            bounds: VERTICES,
            confidence: CONFIDENCE
          }
        ]);
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
      message: 'Oh no!',
      details: [
        'these should be clipped'
      ]
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
    var faceAnnotation = {
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
        angerLikelihood: 3,
        blurred: true,
        blurredLikelihood: 3,
        headwear: true,
        headwearLikelihood: 3,
        joy: true,
        joyLikelihood: 3,
        sorrow: true,
        sorrowLikelihood: 3,
        surprise: true,
        surpriseLikelihood: 3,
        underExposed: true,
        underExposedLikelihood: 3,

        // Checks that *any* property that ends in `Likelihood` is shortened.
        nonExistent: true,
        nonExistentLikelihood: 3
      };

      var formatted = Vision.formatFaceAnnotation_(faceAnnotation);

      assert(deepStrictEqual(formatted, expected));
    });
  });

  describe('formatFullTextAnnotation_', function() {
    var BLOCK_TYPE = 'block type';

    var LANGUAGE_CODE = 'language code';

    var TEXT = 'F';

    var VERTICES = [
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 }
    ];

    var fullTextAnnotation = {
      text: 'Full text',
      pages: [
        {
          property: {
            detectedLanguages: [
              {
                languageCode: LANGUAGE_CODE
              }
            ]
          },
          width: 50,
          height: 100,
          blocks: [
            {
              blockType: BLOCK_TYPE,
              boundingBox: {
                vertices: VERTICES
              },
              paragraphs: [
                {
                  boundingBox: {
                    vertices: VERTICES
                  },
                  words: [
                    {
                      boundingBox: {
                        vertices: VERTICES
                      },
                      symbols: [
                        {
                          boundingBox: {
                            vertices: VERTICES
                          },
                          text: TEXT
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    };

    describe('verbose: false', function() {
      var opts = {};

      it('should return text property', function() {
        var fmtd = Vision.formatFullTextAnnotation_(fullTextAnnotation, opts);

        assert.strictEqual(fmtd, fullTextAnnotation.text);
      });
    });

    describe('verbose: true', function() {
      var opts = { verbose: true };

      it('should return formatted annotation', function() {
        var fmtd = Vision.formatFullTextAnnotation_(fullTextAnnotation, opts);

        assert.deepEqual(fmtd, [
          {
            languages: [
              LANGUAGE_CODE
            ],
            width: 50,
            height: 100,
            blocks: [
              {
                type: BLOCK_TYPE,
                bounds: VERTICES,
                paragraphs: [
                  {
                    bounds: VERTICES,
                    words: [
                      {
                        bounds: VERTICES,
                        symbols: [
                          {
                            bounds: VERTICES,
                            text: TEXT
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]);
      });

      it('should not require a bounding block box', function() {
        var annoWithoutBounding = extend(true, {}, fullTextAnnotation);
        delete annoWithoutBounding.pages[0].blocks[0].boundingBox;

        var fmtd = Vision.formatFullTextAnnotation_(annoWithoutBounding, opts);

        assert.deepEqual(fmtd[0].blocks[0].bounds, []);
      });
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
    var safeSearchAnno = {
      adult: 'LIKELY',
      medical: 'LIKELY',
      spoof: 'LIKELY',
      violence: 'LIKELY'
    };

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

  describe('formatWebDetection_', function() {
    var webDetection = {
      webEntities: [
        {
          description: 'description'
        },
      ],

      fullMatchingImages: [
        {
          score: 0,
          url: 'http://full-0'
        },
        {
          score: 1,
          url: 'http://full-1'
        }
      ],

      partialMatchingImages: [
        {
          score: 0,
          url: 'http://partial-0'
        },
        {
          score: 1,
          url: 'http://partial-1'
        }
      ],

      pagesWithMatchingImages: [
        {
          score: 0,
          url: 'http://page-0'
        },
        {
          score: 1,
          url: 'http://page-1'
        }
      ]
    };

    describe('verbose: false', function() {
      var opts = {};

      it('should return sorted & combined image urls', function() {
        var fmtd = Vision.formatWebDetection_(webDetection, opts);

        assert.deepEqual(fmtd, [
          'http://full-1',
          'http://full-0',
          'http://partial-1',
          'http://partial-0'
        ]);
      });
    });

    describe('verbose: true', function() {
      var opts = {
        verbose: true
      };

      it('should return entities, pages & individual, sorted urls', function() {
        var fmtd = Vision.formatWebDetection_(webDetection, opts);

        assert.deepEqual(fmtd, {
          entities: webDetection.webEntities.map(prop('description')),
          fullMatches: [
            'http://full-1',
            'http://full-0'
          ],
          partialMatches: [
            'http://partial-1',
            'http://partial-0'
          ],
          pages: [
            'http://page-1',
            'http://page-0'
          ]
        });
      });
    });
  });

  describe('gteLikelihood_', function() {
    it('should return booleans', function() {
      var baseLikelihood = Vision.likelihood.LIKELY;

      assert.strictEqual(
        Vision.gteLikelihood_(baseLikelihood, 'VERY_UNLIKELY'),
        false
      );

      assert.strictEqual(
        Vision.gteLikelihood_(baseLikelihood, 'UNLIKELY'),
        false
      );

      assert.strictEqual(
        Vision.gteLikelihood_(baseLikelihood, 'POSSIBLE'),
        false
      );

      assert.strictEqual(
        Vision.gteLikelihood_(baseLikelihood, 'LIKELY'),
        true
      );

      assert.strictEqual(
        Vision.gteLikelihood_(baseLikelihood, 'VERY_LIKELY'),
        true
      );
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
