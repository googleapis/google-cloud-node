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

var curation = require('../src/curation');

describe('vision/curation', function() {
  describe('removeExtraneousAnnotations', function() {
    it('does nothing if no expected types are provided', function() {
      var annotations = [{foo: 'bar'}, {baz: 'bacon'}];
      assert.strictEqual(
        annotations,
        curation.removeExtraneousAnnotations(annotations)
      );
      assert.strictEqual(
        annotations,
        curation.removeExtraneousAnnotations(annotations, [])
      );
    });

    it('preserves expected types', function() {
      var annotations = [
        {
          cropHintsAnnotation: {foo: 'bar'},
          logoAnnotations: [1, 2, 3]
        },
        {
          cropHintsAnnotation: {baz: 'bacon'},
          landmarkAnnotations: [4, 5, 6]
        }
      ];
      var curated = curation.removeExtraneousAnnotations(
        annotations,
        ['crop', 'logo', 'landmark']
      );
      assert.deepEqual(annotations, curated);
    });

    it('removes unexpected types', function() {
      var annotations = [
        {
          cropHintsAnnotation: {foo: 'bar'},
          logoAnnotations: [1, 2, 3]
        },
        {
          cropHintsAnnotation: {baz: 'bacon'},
          landmarkAnnotations: [4, 5, 6]
        }
      ];
      var curated = curation.removeExtraneousAnnotations(
        annotations,
        ['logo', 'landmark']
      );
      assert.deepEqual(curated, [
        {logoAnnotations: [1, 2, 3]},
        {landmarkAnnotations: [4, 5, 6]}
      ]);
    });
  });
});
