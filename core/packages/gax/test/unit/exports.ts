/**
 * Copyright 2020 Google LLC
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

import * as index from '../../src/index';
import * as fallback from '../../src/fallback';
import assert from 'assert';
import {describe, it} from 'mocha';

const version = require('../../../package.json').version;

// The following export tests validate the Gax interface that is used by client libraries.
// Removing any of the following exports will break client libraries.
describe('exports', () => {
  describe('index', () => {
    it('exports GrpcClient', () => {
      assert(typeof index.GrpcClient === 'function');
    });
    it('exports createApiCall', () => {
      assert(typeof index.createApiCall === 'function');
    });
    it('exports PathTemplate', () => {
      assert(typeof index.PathTemplate === 'function');
    });
    it('exports PageDescriptor', () => {
      assert(typeof index.PageDescriptor === 'function');
    });
    it('exports StreamDescriptor', () => {
      assert(typeof index.StreamDescriptor === 'function');
    });
    it('exports BundleDescriptor', () => {
      assert(typeof index.BundleDescriptor === 'function');
    });
    it('exports LongrunningDescriptor', () => {
      assert(typeof index.LongrunningDescriptor === 'function');
    });
    it('exports lro', () => {
      assert(typeof index.lro === 'function');
    });
    it('exports version', () => {
      assert(typeof index.version === 'string');
      assert.strictEqual(index.version, version);
    });
    it('exports fallback', () => {
      assert(typeof index.fallback === 'object');
    });
    it('exports protobuf', () => {
      assert(typeof index.protobuf === 'object');
    });
    it('exports protobufMinimal', () => {
      assert(typeof index.protobufMinimal === 'object');
    });
  });

  describe('fallback', () => {
    it('exports GrpcClient', () => {
      assert(typeof fallback.GrpcClient === 'function');
    });
    it('exports createApiCall', () => {
      assert(typeof fallback.createApiCall === 'function');
    });
    it('exports PathTemplate', () => {
      assert(typeof fallback.PathTemplate === 'function');
    });
    it('exports PageDescriptor', () => {
      assert(typeof fallback.PageDescriptor === 'function');
    });
    it('exports StreamDescriptor', () => {
      assert(typeof fallback.StreamDescriptor === 'function');
    });
    it('exports BundleDescriptor', () => {
      assert(typeof fallback.BundleDescriptor === 'function');
    });
    it('exports LongrunningDescriptor', () => {
      assert(typeof fallback.LongrunningDescriptor === 'function');
    });
    it('exports lro', () => {
      assert(typeof fallback.lro === 'function');
    });
    it('exports version', () => {
      assert(typeof fallback.version === 'string');
      assert.strictEqual(fallback.version, version + '-fallback');
    });
    it('exports protobuf', () => {
      assert(typeof fallback.protobuf === 'object');
    });
    it('exports protobufMinimal', () => {
      assert(typeof fallback.protobufMinimal === 'object');
    });
  });
});
