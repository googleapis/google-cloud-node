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

import {describe, it, afterEach} from 'mocha';
import * as path from 'path';
import * as is from 'is';
import * as sinon from 'sinon';
import * as prototypes from '../protos/protos';
import * as assert from 'assert';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const vision = require('../src');

describe('Vision helper methods', () => {
  const CREDENTIALS = {
    credentials: {client_email: 'bogus', private_key: 'bogus'},
    projectId: 'bogus',
  };

  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.restore();
  });

  describe('annotateImage', () => {
    it('calls batchAnnotateImages correctly', () => {
      const client = new vision.v1.ImageAnnotatorClient(CREDENTIALS);
      const batchAnnotate = sandbox.stub(client, 'batchAnnotateImages');
      batchAnnotate.callsArgWith(2, undefined, {
        responses: [
          {
            logoAnnotations: [{description: 'Google'}],
          },
        ],
      });

      // Ensure that the annotateImage method arrifies the request and
      // passes it through to the batch annotation method.
      const request = {
        image: {content: Buffer.from('bogus==')},
        features: {type: ['LOGO_DETECTION']},
      };

      return client
        .annotateImage(request)
        .then(
          (r: [prototypes.google.cloud.vision.v1.IAnnotateImageResponse]) => {
            const response = r[0];
            // Ensure that we got the slice of the response that we expected.
            assert.deepStrictEqual(response, {
              logoAnnotations: [{description: 'Google'}],
            });

            // Inspect the calls to batchAnnotateImages and ensure they matched
            // the expected signature.
            assert(batchAnnotate.callCount === 1);
            assert(batchAnnotate.calledWith({requests: [request]}));
          }
        );
    });

    it('understands buffers in a request object', () => {
      const client = new vision.v1.ImageAnnotatorClient(CREDENTIALS);

      // Stub out the batch annotation method.
      const batchAnnotate = sandbox.stub(client, 'batchAnnotateImages');
      batchAnnotate.callsArgWith(2, undefined, {
        responses: [
          {
            logoAnnotations: [{description: 'Google'}],
          },
        ],
      });

      // Ensure that the annotateImage method arrifies the request and
      // passes it through to the batch annotation method.
      const request = {
        image: Buffer.from('fakeImage'),
        features: {type: ['LOGO_DETECTION']},
      };
      return client
        .annotateImage(request)
        .then(
          (r: [prototypes.google.cloud.vision.v1.IAnnotateImageResponse]) => {
            const response = r[0];

            // Ensure that we got the slice of the response that we expected.
            assert.deepStrictEqual(response, {
              logoAnnotations: [{description: 'Google'}],
            });

            // Inspect the calls to batchAnnotateImages and ensure they matched
            // the expected signature.
            assert(batchAnnotate.callCount === 1);
            assert.deepStrictEqual(request, {
              image: {content: 'ZmFrZUltYWdl'},
              features: {type: ['LOGO_DETECTION']},
            });
            assert(batchAnnotate.calledWith({requests: [request]}));
          }
        );
    });

    it('understands filenames', () => {
      const client = new vision.v1.ImageAnnotatorClient(CREDENTIALS);

      // Stub out the batch annotation method as before.
      const batchAnnotate = sandbox.stub(client, 'batchAnnotateImages');
      batchAnnotate.callsArgWith(2, undefined, {
        responses: [
          {
            logoAnnotations: [{description: 'Google'}],
          },
        ],
      });

      // Ensure that the annotateImage method arrifies the request and
      // passes it through to the batch annotation method.
      const imagePath = path.join(
        __dirname,
        '..',
        '..',
        'test',
        'fixtures',
        'image.jpg'
      );
      const request = {
        image: {source: {filename: imagePath}},
        features: {type: ['LOGO_DETECTION']},
      };
      return client
        .annotateImage(request)
        .then(
          (r: [prototypes.google.cloud.vision.v1.IAnnotateImageResponse]) => {
            const response = r[0];

            // Ensure that we got the slice of the response that we expected.
            assert.deepStrictEqual(response, {
              logoAnnotations: [{description: 'Google'}],
            });

            // Inspect the calls to batchAnnotateImages and ensure they matched
            // the expected signature.
            assert(batchAnnotate.callCount === 1);
            assert.deepStrictEqual(request, {
              image: {content: ''},
              features: {type: ['LOGO_DETECTION']},
            });
            assert(batchAnnotate.calledWith({requests: [request]}));
          }
        );
    });

    it('propagates the error if a file is not found', () => {
      const client = new vision.v1.ImageAnnotatorClient(CREDENTIALS);
      // Ensure that the annotateImage method arrifies the request and
      // passes it through to the batch annotation method.
      const request = {
        image: {source: {filename: 'image.jpg'}},
        features: {type: ['LOGO_DETECTION']},
      };
      return client.annotateImage(request).catch((err: string) => {
        assert(
          err.toString().match(/Error: ENOENT: no such file or directory/)
        );
      });
    });

    it('retains call options sent', () => {
      const client = new vision.v1.ImageAnnotatorClient(CREDENTIALS);
      const batchAnnotate = sandbox.stub(client, 'batchAnnotateImages');
      batchAnnotate.callsArgWith(2, undefined, {
        responses: [
          {
            logoAnnotations: [{description: 'Google'}],
          },
        ],
      });

      // Ensure that the annotateImage method arrifies the request and
      // passes it through to the batch annotation method.
      const request = {
        image: {content: Buffer.from('bogus==')},
        features: {type: ['LOGO_DETECTION']},
      };
      return client
        .annotateImage(request, {foo: 'bar'})
        .then(
          (r: [prototypes.google.cloud.vision.v1.IAnnotateImageResponse]) => {
            const response = r[0];

            // Ensure that we got the slice of the response that we expected.
            assert.deepStrictEqual(response, {
              logoAnnotations: [{description: 'Google'}],
            });

            // Inspect the calls to batchAnnotateImages and ensure they matched
            // the expected signature.
            assert(batchAnnotate.callCount === 1);
            assert(
              batchAnnotate.calledWith({requests: [request]}, {foo: 'bar'})
            );
          }
        );
    });

    it('fires a callback if provided', done => {
      const client = new vision.v1.ImageAnnotatorClient(CREDENTIALS);
      const batchAnnotate = sandbox.stub(client, 'batchAnnotateImages');
      batchAnnotate.callsArgWith(2, undefined, {
        responses: [
          {
            logoAnnotations: [{description: 'Google'}],
          },
        ],
      });

      // Ensure that the annotateImage method does *not* pass the callback
      // on to batchAnnotateImages, but rather handles it itself.
      const request = {
        image: {content: Buffer.from('bogus==')},
        features: {type: ['LOGO_DETECTION']},
      };
      client.annotateImage(request, (err: {}, response: {}) => {
        // Establish that we got the expected response.
        assert(is.undefined(err));
        assert.deepStrictEqual(response, {
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
      const client = new vision.v1.ImageAnnotatorClient(CREDENTIALS);
      const batchAnnotate = sandbox.stub(client, 'batchAnnotateImages');
      batchAnnotate.callsArgWith(2, {message: 'Bad things!'});

      // Ensure that the annotateImage method does *not* pass the callback
      // on to batchAnnotateImages, but rather handles it itself.
      const request = {
        image: {content: Buffer.from('bogus==')},
        features: {type: ['LOGO_DETECTION']},
      };
      return client.annotateImage(request).catch((err: {}) => {
        // Establish that we got the expected response.
        assert.deepStrictEqual(err, {message: 'Bad things!'});

        // Inspect the calls to batchAnnotate and ensure that they match
        // what we expected.
        assert(batchAnnotate.callCount === 1);
        assert(batchAnnotate.calledWith({requests: [request]}, undefined));
      });
    });

    it('requires an image and throws without one', () => {
      const client = new vision.v1.ImageAnnotatorClient(CREDENTIALS);
      const request = {};
      return client.annotateImage(request).catch((err: string) => {
        assert(err.toString().match(/Error: No image present./));
      });
    });
  });

  describe('single-feature methods', () => {
    it('call `annotateImage` with the correct feature', () => {
      const client = new vision.v1.ImageAnnotatorClient(CREDENTIALS);
      const annotate = sandbox.spy(client, 'annotateImage');
      const batchAnnotate = sandbox.stub(client, 'batchAnnotateImages');
      batchAnnotate.callsArgWith(2, undefined, {
        responses: [
          {
            logoAnnotations: [{description: 'Google'}],
          },
        ],
      });

      // Ensure that the annotateImage method does *not* pass the callback
      // on to batchAnnotateImages, but rather handles it itself.
      const imageRequest = {image: {content: Buffer.from('bogus==')}};
      return client
        .logoDetection(Object.assign({}, imageRequest))
        .then(
          (r: [prototypes.google.cloud.vision.v1.IAnnotateImageResponse]) => {
            const response = r[0];

            // Ensure that we got the slice of the response that we expected.
            assert.deepStrictEqual(response, {
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
          }
        );
    });

    it('accept a URL as a string', () => {
      const client = new vision.v1.ImageAnnotatorClient(CREDENTIALS);

      // Stub out the batch annotation method.
      const batchAnnotate = sandbox.stub(client, 'batchAnnotateImages');
      batchAnnotate.callsArgWith(2, undefined, {
        responses: [
          {
            logoAnnotations: [{description: 'Google'}],
          },
        ],
      });

      // Call a request to a single-feature method using a URL.
      return client
        .logoDetection('https://goo.gl/logo.png')
        .then(
          (r: [prototypes.google.cloud.vision.v1.IAnnotateImageResponse]) => {
            const response = r[0];

            // Ensure we got the slice of the response that we expected.
            assert.deepStrictEqual(response, {
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
          }
        );
    });

    it('accept a filename as a string', () => {
      const client = new vision.v1.ImageAnnotatorClient(CREDENTIALS);

      // Stub out the batch annotation method.
      const annotate = sandbox.stub(client, 'annotateImage');
      annotate.callsArgWith(2, undefined, {
        logoAnnotations: [{description: 'Google'}],
      });

      // Call a request to a single-feature method using a URL.
      return client.logoDetection('/path/to/logo.png').then((response: {}) => {
        // Ensure we got the slice of the response that we expected.
        assert.deepStrictEqual(response, [
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
      const client = new vision.v1.ImageAnnotatorClient(CREDENTIALS);

      // Stub out the batch annotation method.
      const batchAnnotate = sandbox.stub(client, 'batchAnnotateImages');
      batchAnnotate.callsArgWith(2, undefined, {
        responses: [
          {
            logoAnnotations: [{description: 'Google'}],
          },
        ],
      });

      // Ensure that the annotateImage method arrifies the request and
      // passes it through to the batch annotation method.
      return client
        .logoDetection(Buffer.from('fakeImage'))
        .then(
          (r: [prototypes.google.cloud.vision.v1.IAnnotateImageResponse]) => {
            const response = r[0];

            // Ensure that we got the slice of the response that we expected.
            assert.deepStrictEqual(response, {
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
          }
        );
    });

    it('handle being sent call options', () => {
      const client = new vision.v1.ImageAnnotatorClient(CREDENTIALS);
      const opts = {foo: 'bar'};

      // Stub out the batchAnnotateImages method as usual.
      const batchAnnotate = sandbox.stub(client, 'batchAnnotateImages');
      batchAnnotate.callsArgWith(2, undefined, {
        responses: [
          {
            logoAnnotations: [{description: 'Google'}],
          },
        ],
      });

      // Perform the request. Send `opts` as an explicit second argument
      // to ensure that sending call options works appropriately.
      return client
        .logoDetection(Buffer.from('fakeImage'), opts)
        .then(
          (r: [prototypes.google.cloud.vision.v1.IAnnotateImageResponse]) => {
            const response = r[0];
            assert.deepStrictEqual(response, {
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
          }
        );
    });

    it('throw an exception if conflicting features are given', () => {
      const client = new vision.v1.ImageAnnotatorClient(CREDENTIALS);
      const imageRequest = {
        image: {content: Buffer.from('bogus==')},
        features: [{type: 0}],
      };
      client.logoDetection(imageRequest).catch((err: string) => {
        assert(err.toString().match(/Setting explicit/));
      });
    });

    it('creates and promisify methods that are available in certain versions', () => {
      const client = new vision.v1p3beta1.ImageAnnotatorClient(CREDENTIALS);
      const request = {
        image: {
          source: {
            imageUri: 'https://cloud.google.com/vision/docs/images/bicycle.jpg',
          },
        },
      };
      const batchAnnotate = sandbox.stub(client, 'batchAnnotateImages');
      batchAnnotate.callsArgWith(2, undefined, {
        responses: [
          {
            localizedObjectAnnotations: [{dummy: 'response'}],
          },
        ],
      });

      client
        .productSearch(request)
        .then(
          (r: [prototypes.google.cloud.vision.v1.IAnnotateImageResponse]) => {
            const response = r[0];

            assert.deepStrictEqual(response, {
              localizedObjectAnnotations: [{dummy: 'response'}],
            });

            assert(batchAnnotate.callCount === 1);
            assert(batchAnnotate.calledWith({requests: [request]}));
          }
        )
        .catch(assert.ifError);
    });
    it('throws an error if trying to invoke a method not available in current version', () => {
      // Use v1p1beta1 version of client.
      const client = new vision.v1p1beta1.ImageAnnotatorClient(CREDENTIALS);
      if (typeof client['objectLocalization'] === 'function') {
        assert.fail('objectLocalization does not exist in v1p1beta1');
      }
    });
  });
});
