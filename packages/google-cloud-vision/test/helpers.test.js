/*!
 * Copyright 2017 Google Inc. All Rights Reserved.
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
const fs = require('fs');
const is = require('is');
const sinon = require('sinon');

const vision = require('../');

describe('Vision helper methods', () => {
  const CREDENTIALS = Object.freeze({
    credentials: {client_email: 'bogus', private_key: 'bogus'},
    projectId: 'bogus',
  });

  let sandbox = sinon.sandbox.create();

  afterEach(() => {
    sandbox.restore();
  });

  describe('annotateImage', () => {
    it('calls batchAnnotateImages correctly', () => {
      let client = new vision.v1.ImageAnnotatorClient(CREDENTIALS);
      let batchAnnotate = sandbox.stub(client, 'batchAnnotateImages');
      batchAnnotate.callsArgWith(2, undefined, {
        responses: [
          {
            logoAnnotations: [{description: 'Google'}],
          },
        ],
      });

      // Ensure that the annotateImage method arrifies the request and
      // passes it through to the batch annotation method.
      let request = {
        image: {content: Buffer.from('bogus==')},
        features: {type: ['LOGO_DETECTION']},
      };
      return client.annotateImage(request).then(r => {
        let response = r[0];

        // Ensure that we got the slice of the response that we expected.
        assert.deepEqual(response, {
          logoAnnotations: [{description: 'Google'}],
        });

        // Inspect the calls to batchAnnotateImages and ensure they matched
        // the expected signature.
        assert(batchAnnotate.callCount === 1);
        assert(batchAnnotate.calledWith({requests: [request]}));
      });
    });

    it('understands buffers in a request object', () => {
      let client = new vision.v1.ImageAnnotatorClient(CREDENTIALS);

      // Stub out the batch annotation method.
      let batchAnnotate = sandbox.stub(client, 'batchAnnotateImages');
      batchAnnotate.callsArgWith(2, undefined, {
        responses: [
          {
            logoAnnotations: [{description: 'Google'}],
          },
        ],
      });

      // Ensure that the annotateImage method arrifies the request and
      // passes it through to the batch annotation method.
      let request = {
        image: Buffer.from('fakeImage'),
        features: {type: ['LOGO_DETECTION']},
      };
      return client.annotateImage(request).then(r => {
        let response = r[0];

        // Ensure that we got the slice of the response that we expected.
        assert.deepEqual(response, {
          logoAnnotations: [{description: 'Google'}],
        });

        // Inspect the calls to batchAnnotateImages and ensure they matched
        // the expected signature.
        assert(batchAnnotate.callCount === 1);
        assert.deepEqual(request, {
          image: {content: 'ZmFrZUltYWdl'},
          features: {type: ['LOGO_DETECTION']},
        });
        assert(batchAnnotate.calledWith({requests: [request]}));
      });
    });

    it('understands filenames', () => {
      let client = new vision.v1.ImageAnnotatorClient(CREDENTIALS);

      // Stub out `fs.readFile` and return a bogus image object.
      // This allows us to test filename detection.
      let readFile = sandbox.stub(fs, 'readFile');
      readFile
        .withArgs('image.jpg')
        .callsArgWith(1, null, Buffer.from('fakeImage'));
      readFile.callThrough();

      // Stub out the batch annotation method as before.
      let batchAnnotate = sandbox.stub(client, 'batchAnnotateImages');
      batchAnnotate.callsArgWith(2, undefined, {
        responses: [
          {
            logoAnnotations: [{description: 'Google'}],
          },
        ],
      });

      // Ensure that the annotateImage method arrifies the request and
      // passes it through to the batch annotation method.
      let request = {
        image: {source: {filename: 'image.jpg'}},
        features: {type: ['LOGO_DETECTION']},
      };
      return client.annotateImage(request).then(r => {
        let response = r[0];

        // Ensure that we got the slice of the response that we expected.
        assert.deepEqual(response, {
          logoAnnotations: [{description: 'Google'}],
        });

        // Inspect the calls to `readFile` to ensure that they matched
        // the expected signature.
        assert(readFile.callCount === 1);
        assert(readFile.calledWith('image.jpg'));

        // Inspect the calls to batchAnnotateImages and ensure they matched
        // the expected signature.
        assert(batchAnnotate.callCount === 1);
        assert.deepEqual(request, {
          image: {content: 'ZmFrZUltYWdl'},
          features: {type: ['LOGO_DETECTION']},
        });
        assert(batchAnnotate.calledWith({requests: [request]}));
      });
    });

    it('propagates the error if a file is not found', () => {
      let client = new vision.v1.ImageAnnotatorClient(CREDENTIALS);

      // Stub out `fs.readFile` and return a bogus image object.
      // This allows us to test filename detection.
      let readFile = sandbox.stub(fs, 'readFile');
      readFile.withArgs('image.jpg').callsArgWith(1, {error: 404});
      readFile.callThrough();

      // Ensure that the annotateImage method arrifies the request and
      // passes it through to the batch annotation method.
      let request = {
        image: {source: {filename: 'image.jpg'}},
        features: {type: ['LOGO_DETECTION']},
      };
      return client
        .annotateImage(request)
        .then(assert.fail)
        .catch(err => {
          assert.deepEqual(err, {error: 404});
        });
    });

    it('retains call options sent', () => {
      let client = new vision.v1.ImageAnnotatorClient(CREDENTIALS);
      let batchAnnotate = sandbox.stub(client, 'batchAnnotateImages');
      batchAnnotate.callsArgWith(2, undefined, {
        responses: [
          {
            logoAnnotations: [{description: 'Google'}],
          },
        ],
      });

      // Ensure that the annotateImage method arrifies the request and
      // passes it through to the batch annotation method.
      var request = {
        image: {content: Buffer.from('bogus==')},
        features: {type: ['LOGO_DETECTION']},
      };
      return client.annotateImage(request, {foo: 'bar'}).then(r => {
        let response = r[0];

        // Ensure that we got the slice of the response that we expected.
        assert.deepEqual(response, {
          logoAnnotations: [{description: 'Google'}],
        });

        // Inspect the calls to batchAnnotateImages and ensure they matched
        // the expected signature.
        assert(batchAnnotate.callCount === 1);
        assert(batchAnnotate.calledWith({requests: [request]}, {foo: 'bar'}));
      });
    });

    it('fires a callback if provided', done => {
      let client = new vision.v1.ImageAnnotatorClient(CREDENTIALS);
      let batchAnnotate = sandbox.stub(client, 'batchAnnotateImages');
      batchAnnotate.callsArgWith(2, undefined, {
        responses: [
          {
            logoAnnotations: [{description: 'Google'}],
          },
        ],
      });

      // Ensure that the annotateImage method does *not* pass the callback
      // on to batchAnnotateImages, but rather handles it itself.
      let request = {
        image: {content: Buffer.from('bogus==')},
        features: {type: ['LOGO_DETECTION']},
      };
      client.annotateImage(request, function(err, response) {
        // Establish that we got the expected response.
        assert(is.undefined(err));
        assert.deepEqual(response, {
          logoAnnotations: [{description: 'Google'}],
        });

        // Inspect the calls to batchAnnotate and ensure that they match
        // what we expected.
        assert(batchAnnotate.callCount === 1);
        assert(batchAnnotate.calledWith({requests: [request]}, undefined));
        done();
      });
    });

    it('fires the callback on error', () => {
      let client = new vision.v1.ImageAnnotatorClient(CREDENTIALS);
      let batchAnnotate = sandbox.stub(client, 'batchAnnotateImages');
      batchAnnotate.callsArgWith(2, {message: 'Bad things!'});

      // Ensure that the annotateImage method does *not* pass the callback
      // on to batchAnnotateImages, but rather handles it itself.
      let request = {
        image: {content: Buffer.from('bogus==')},
        features: {type: ['LOGO_DETECTION']},
      };
      return client.annotateImage(request).catch(err => {
        // Establish that we got the expected response.
        assert.deepEqual(err, {message: 'Bad things!'});

        // Inspect the calls to batchAnnotate and ensure that they match
        // what we expected.
        assert(batchAnnotate.callCount === 1);
        assert(batchAnnotate.calledWith({requests: [request]}, undefined));
      });
    });

    it('requires an image and throws without one', () => {
      let client = new vision.v1.ImageAnnotatorClient(CREDENTIALS);
      let request = {};
      return client
        .annotateImage(request)
        .then(assert.fail)
        .catch(err => {
          assert(err.message === 'No image present.');
        });
    });
  });

  describe('single-feature methods', () => {
    it('call `annotateImage` with the correct feature', () => {
      let client = new vision.v1.ImageAnnotatorClient(CREDENTIALS);
      let annotate = sandbox.spy(client, 'annotateImage');
      let batchAnnotate = sandbox.stub(client, 'batchAnnotateImages');
      batchAnnotate.callsArgWith(2, undefined, {
        responses: [
          {
            logoAnnotations: [{description: 'Google'}],
          },
        ],
      });

      // Ensure that the annotateImage method does *not* pass the callback
      // on to batchAnnotateImages, but rather handles it itself.
      let imageRequest = {image: {content: Buffer.from('bogus==')}};
      return client.logoDetection(Object.assign({}, imageRequest)).then(r => {
        let response = r[0];

        // Ensure that we got the slice of the response that we expected.
        assert.deepEqual(response, {
          logoAnnotations: [{description: 'Google'}],
        });

        // Inspect the calls to annotateImage and batchAnnotateImages and
        // ensure they matched the expected signature.
        assert(annotate.callCount === 1);
        assert(
          annotate.calledWith({
            features: [{type: 3}],
            image: imageRequest.image,
          })
        );
        assert(batchAnnotate.callCount === 1);
        assert(
          batchAnnotate.calledWith({
            requests: [{image: imageRequest.image, features: [{type: 3}]}],
          })
        );
      });
    });

    it('accept a URL as a string', () => {
      let client = new vision.v1.ImageAnnotatorClient(CREDENTIALS);

      // Stub out the batch annotation method.
      let batchAnnotate = sandbox.stub(client, 'batchAnnotateImages');
      batchAnnotate.callsArgWith(2, undefined, {
        responses: [
          {
            logoAnnotations: [{description: 'Google'}],
          },
        ],
      });

      // Call a request to a single-feature method using a URL.
      return client.logoDetection('https://goo.gl/logo.png').then(r => {
        let response = r[0];

        // Ensure we got the slice of the response that we expected.
        assert.deepEqual(response, {
          logoAnnotations: [{description: 'Google'}],
        });

        // Inspect the calls to batchAnnotateImages and ensure they matched
        // the expected signature.
        assert(batchAnnotate.callCount === 1);
        assert(
          batchAnnotate.calledWith({
            requests: [
              {
                image: {source: {imageUri: 'https://goo.gl/logo.png'}},
                features: [{type: 3}],
              },
            ],
          })
        );
      });
    });

    it('accept a filename as a string', () => {
      let client = new vision.v1.ImageAnnotatorClient(CREDENTIALS);

      // Stub out the batch annotation method.
      let annotate = sandbox.stub(client, 'annotateImage');
      annotate.callsArgWith(2, undefined, {
        logoAnnotations: [{description: 'Google'}],
      });

      // Call a request to a single-feature method using a URL.
      return client.logoDetection('/path/to/logo.png').then(response => {
        // Ensure we got the slice of the response that we expected.
        assert.deepEqual(response, [
          {
            logoAnnotations: [{description: 'Google'}],
          },
        ]);

        // Inspect the calls to annotateImages and ensure they matched
        // the expected signature.
        assert(annotate.callCount === 1);
        assert(
          annotate.calledWith({
            image: {source: {filename: '/path/to/logo.png'}},
            features: [{type: 3}],
          })
        );
      });
    });

    it('understand a buffer sent directly', () => {
      let client = new vision.v1.ImageAnnotatorClient(CREDENTIALS);

      // Stub out the batch annotation method.
      let batchAnnotate = sandbox.stub(client, 'batchAnnotateImages');
      batchAnnotate.callsArgWith(2, undefined, {
        responses: [
          {
            logoAnnotations: [{description: 'Google'}],
          },
        ],
      });

      // Ensure that the annotateImage method arrifies the request and
      // passes it through to the batch annotation method.
      return client.logoDetection(Buffer.from('fakeImage')).then(r => {
        let response = r[0];

        // Ensure that we got the slice of the response that we expected.
        assert.deepEqual(response, {
          logoAnnotations: [{description: 'Google'}],
        });

        // Inspect the calls to batchAnnotateImages and ensure they matched
        // the expected signature.
        assert(batchAnnotate.callCount === 1);
        assert(
          batchAnnotate.calledWith({
            requests: [
              {
                image: {content: 'ZmFrZUltYWdl'},
                features: [{type: 3}],
              },
            ],
          })
        );
      });
    });

    it('handle being sent call options', () => {
      let client = new vision.v1.ImageAnnotatorClient(CREDENTIALS);
      let opts = {foo: 'bar'};

      // Stub out the batchAnnotateImages method as usual.
      let batchAnnotate = sandbox.stub(client, 'batchAnnotateImages');
      batchAnnotate.callsArgWith(2, undefined, {
        responses: [
          {
            logoAnnotations: [{description: 'Google'}],
          },
        ],
      });

      // Perform the request. Send `opts` as an explicit second argument
      // to ensure that sending call options works appropriately.
      return client.logoDetection(Buffer.from('fakeImage'), opts).then(r => {
        let response = r[0];
        assert.deepEqual(response, {
          logoAnnotations: [{description: 'Google'}],
        });

        // Inspect the calls to batchAnnotateImages and ensure they matched
        // the expected signature.
        assert(batchAnnotate.callCount === 1);
        assert(
          batchAnnotate.calledWith({
            requests: [
              {
                image: {content: 'ZmFrZUltYWdl'},
                features: [{type: 3}],
              },
            ],
          })
        );
      });
    });

    it('throw an exception if conflicting features are given', () => {
      let client = new vision.v1.ImageAnnotatorClient(CREDENTIALS);
      let imageRequest = {
        image: {content: Buffer.from('bogus==')},
        features: [{type: 0}],
      };
      client
        .logoDetection(imageRequest)
        .then(assert.fail)
        .catch(ex => {
          assert(ex.message.indexOf('Setting explicit') > -1);
        });
    });

    it('creates and promisify methods that are available in certain versions', () => {
      const client = new vision.v1p3beta1.ImageAnnotatorClient();
      let request = {
        image: {
          source: {
            imageUri: 'https://cloud.google.com/vision/docs/images/bicycle.jpg',
          },
        },
      };
      let batchAnnotate = sandbox.stub(client, 'batchAnnotateImages');
      batchAnnotate.callsArgWith(2, undefined, {
        responses: [
          {
            localizedObjectAnnotations: [{dummy: 'response'}],
          },
        ],
      });

      client
        .productSearch(request)
        .then(r => {
          let response = r[0];

          assert.deepEqual(response, {
            localizedObjectAnnotations: [{dummy: 'response'}],
          });

          assert(batchAnnotate.callCount === 1);
          assert(batchAnnotate.calledWith({requests: [request]}));
        })
        .catch(assert.ifError);
    });

    it('throws an error if trying to invoke a method not available in current version', () => {
      // Use v1 version of client.
      const client = new vision.v1.ImageAnnotatorClient(CREDENTIALS);

      assert.throws(() => {
        // Object localization is only available for v1p3beta1.
        client.objectLocalization({});
      }, 'TypeError: client.objectLocalization is not a function');
    });
  });
});
