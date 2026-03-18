/*!
 * Copyright 2019 Google LLC.
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

process.env.SAMPLES_DIRECTORY = './test/fixtures';

const {loadSampleCache, handlers} = require('../src');
const {describe, it} = require('mocha');
const assert = require('assert');

describe('jsdoc-region-tag', () => {
  describe('loadSampleCache', () => {
    it('populates a cache with samples found between region tags', () => {
      const cache = loadSampleCache();
      const sample = cache.get('fake_bigquery_quickstart');
      assert(sample.includes('async function createDataset () {'));
    });
  });
  describe('handlers', () => {
    it('does not replace absolute link', () => {
      const doc = {
        doclet: {
          description:
            'My description <a href="https://github.com/foo">foo link</a>',
        },
      };
      handlers.newDoclet(doc);
      assert.strictEqual(
        doc.doclet.description,
        'My description <a href="https://github.com/foo">foo link</a>'
      );
    });
    it('replaces single link in description', () => {
      const doc = {
        doclet: {
          description: 'My description <a href="/foo">foo link</a>',
        },
      };
      handlers.newDoclet(doc);
      assert.strictEqual(
        doc.doclet.description,
        'My description <a href="https://cloud.google.com/foo">foo link</a>'
      );
    });
    it('replaces single link in classdesc', () => {
      const doc = {
        doclet: {
          classdesc: 'My description <a href="/foo">foo link</a>',
        },
      };
      handlers.newDoclet(doc);
      assert.strictEqual(
        doc.doclet.classdesc,
        'My description <a href="https://cloud.google.com/foo">foo link</a>'
      );
    });
    it('replaces multiple links in description', () => {
      const doc = {
        doclet: {
          description:
            'My description <a href="/foo">foo link</a> hello <a href="/bar">bar link</a>',
        },
      };
      handlers.newDoclet(doc);
      assert.strictEqual(
        doc.doclet.description,
        'My description <a href="https://cloud.google.com/foo">foo link</a> hello <a href="https://cloud.google.com/bar">bar link</a>'
      );
    });
  });
});
