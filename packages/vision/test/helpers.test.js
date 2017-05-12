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

var expect = require('chai').use(require('sinon-chai')).expect;
var sinon = require('sinon');

var Vision = require('../');


describe('Vision helper methods', () => {
  var sandbox = sinon.sandbox.create();

  afterEach(() => {
    sinon.sandbox.restore();
  });

  describe('annotateImage', () => {
    it('calls batchAnnotateImages correctly', () => {
      var vision = Vision.v1();
      var batchAnnotate = sandbox.stub(vision, 'batchAnnotateImages');
      batchAnnotate.callsArgWith(2, undefined, {responses: [{
        logoAnnotations: [{description: 'Google'}],
      }]});

      // Ensure that the annotateImage method arrifies the request and
      // passes it through to the batch annotation method.
      var request = {
        image: {content: new Buffer('bogus==')},
        features: {type: ['LOGO_DETECTION']},
      };
      return vision.annotateImage(request).then(([response]) => {
        // Ensure that we got the slice of the response that we expected.
        expect(response).deep.equal({
          logoAnnotations: [{description: 'Google'}],
        });

        // Inspect the calls to batchAnnotateImages and ensure they matched
        // the expected signature.
        expect(batchAnnotate)
          .callCount(1)
          .calledWith([request]);
      });
    });

    it('retains call options sent', () => {
      var vision = Vision.v1();
      var batchAnnotate = sandbox.stub(vision, 'batchAnnotateImages');
      batchAnnotate.callsArgWith(2, undefined, {responses: [{
        logoAnnotations: [{description: 'Google'}],
      }]});

      // Ensure that the annotateImage method arrifies the request and
      // passes it through to the batch annotation method.
      var request = {
        image: {content: new Buffer('bogus==')},
        features: {type: ['LOGO_DETECTION']},
      };
      return vision.annotateImage(request, {foo: 'bar'}).then(([response]) => {
        // Ensure that we got the slice of the response that we expected.
        expect(response).deep.equal({
          logoAnnotations: [{description: 'Google'}],
        });

        // Inspect the calls to batchAnnotateImages and ensure they matched
        // the expected signature.
        expect(batchAnnotate)
          .callCount(1)
          .calledWith([request], {foo: 'bar'});
      });
    });

    it('fires a callback if provided', done => {
      var vision = Vision.v1();
      var batchAnnotate = sandbox.stub(vision, 'batchAnnotateImages');
      batchAnnotate.callsArgWith(2, undefined, {responses: [{
        logoAnnotations: [{description: 'Google'}],
      }]});

      // Ensure that the annotateImage method does *not* pass the callback
      // on to batchAnnotateImages, but rather handles it itself.
      var request = {
        image: {content: new Buffer('bogus==')},
        features: {type: ['LOGO_DETECTION']},
      };
      vision.annotateImage(request, function(err, response) {
        // Establish that we got the expected response.
        expect(err).undefined;
        expect(response).deep.equal({
          logoAnnotations: [{description: 'Google'}],
        });

        // Inspect the calls to batchAnnotate and ensure that they match
        // what we expected.
        expect(batchAnnotate)
          .callCount(1)
          .calledWith([request], undefined);
        done();
      });
    });

    it('fires the callback on error', () => {
      var vision = Vision.v1();
      var batchAnnotate = sandbox.stub(vision, 'batchAnnotateImages');
      batchAnnotate.callsArgWith(2, {message: 'Bad things!'});

      // Ensure that the annotateImage method does *not* pass the callback
      // on to batchAnnotateImages, but rather handles it itself.
      var request = {
        image: {content: new Buffer('bogus==')},
        features: {type: ['LOGO_DETECTION']},
      };
      return vision.annotateImage(request).catch(err => {
        // Establish that we got the expected response.
        expect(err).deep.equal({message: 'Bad things!'});

        // Inspect the calls to batchAnnotate and ensure that they match
        // what we expected.
        expect(batchAnnotate)
          .callCount(1)
          .calledWith([request], undefined);
      });
    });
  });

  describe('single-feature methods', () => {
    it('calls annotateImage with the correct feature', () => {
      var vision = Vision.v1();
      var annotate = sandbox.spy(vision, 'annotateImage');
      var batchAnnotate = sandbox.stub(vision, 'batchAnnotateImages');
      batchAnnotate.callsArgWith(2, undefined, {responses: [{
        logoAnnotations: [{description: 'Google'}],
      }]});

      // Ensure that the annotateImage method does *not* pass the callback
      // on to batchAnnotateImages, but rather handles it itself.
      var image = {content: new Buffer('bogus==')};
      return vision.logoDetection(image).then(([response]) => {
        // Ensure that we got the slice of the response that we expected.
        expect(response).deep.equal({
          logoAnnotations: [{description: 'Google'}],
        });

        // Inspect the calls to annotateImage and batchAnnotateImages and
        // ensure they matched the expected signature.
        expect(annotate)
          .callCount(1)
          .calledWith({image: image, features: [{type: 3}]});
        expect(batchAnnotate)
          .callCount(1)
          .calledWith([{image: image, features: [{type: 3}]}]);
      });
    });
  });
});
