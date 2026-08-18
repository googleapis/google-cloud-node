// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as assert from 'assert';
import {describe, it} from 'mocha';
import {
  validateSingleSegment,
  validateMultiSegment,
  strictEncodeURIComponent,
  encodeWithSlashes,
  encodeWithoutSlashes,
  extractTemplateParams,
  normalizePathParams,
  validateAndEncodeParams,
} from '../src/transcoding';

describe('transcoding', () => {
  describe('validateSingleSegment', () => {
    it('should throw for "."', () => {
      assert.throws(() => {
        validateSingleSegment('fileId', '.');
      }, /Invalid value \. for fileId/);
    });

    it('should throw for ".."', () => {
      assert.throws(() => {
        validateSingleSegment('fileId', '..');
      }, /Invalid value \.\. for fileId/);
    });

    it('should allow valid single segment names', () => {
      assert.doesNotThrow(() => {
        validateSingleSegment('fileId', 'valid-id');
        validateSingleSegment('fileId', 'file.txt');
        validateSingleSegment('fileId', 'example.com');
      });
    });
  });

  describe('validateMultiSegment', () => {
    it('should throw for ".." segment in multi-segment path', () => {
      assert.throws(() => {
        validateMultiSegment(
          'session',
          'projects/p/locations/l/agents/a/sessions/agents/../subagent',
        );
      }, /Value for session must not contain segments that are exactly \. or \.\./);

      assert.throws(() => {
        validateMultiSegment('name', '..');
      }, /Value for name must not contain segments that are exactly \. or \.\./);

      assert.throws(() => {
        validateMultiSegment('name', 'a/b/..');
      }, /Value for name must not contain segments that are exactly \. or \.\./);
    });

    it('should throw for "." segment in multi-segment path', () => {
      assert.throws(() => {
        validateMultiSegment(
          'session',
          'projects/p/locations/l/agents/a/sessions/agents/./subagent',
        );
      }, /Value for session must not contain segments that are exactly \. or \.\./);

      assert.throws(() => {
        validateMultiSegment('name', '.');
      }, /Value for name must not contain segments that are exactly \. or \.\./);

      assert.throws(() => {
        validateMultiSegment('name', './a/b');
      }, /Value for name must not contain segments that are exactly \. or \.\./);
    });

    it('should allow valid domain-scoped and resource paths with dots', () => {
      assert.doesNotThrow(() => {
        validateMultiSegment(
          'parent',
          'projects/example.com:custom-project/locations/global',
        );
        validateMultiSegment(
          'session',
          'projects/p/locations/l/agents/a/sessions/123.456',
        );
        validateMultiSegment('name', 'a/b/c');
      });
    });

    it('should allow empty/falsy values', () => {
      assert.doesNotThrow(() => {
        validateMultiSegment('name', '');
      });
    });
  });

  describe('strictEncodeURIComponent and encodeWithSlashes', () => {
    it('should preserve unreserved characters', () => {
      const unreserved = 'abc-123_.~XYZ';
      assert.strictEqual(strictEncodeURIComponent(unreserved), unreserved);
      assert.strictEqual(encodeWithSlashes(unreserved), unreserved);
    });

    it("should strictly percent-encode !'()* and slashes", () => {
      assert.strictEqual(strictEncodeURIComponent("!'()*"), '%21%27%28%29%2A');
      assert.strictEqual(encodeWithSlashes('/'), '%2F');
    });

    it('should properly encode Unicode surrogate pairs / emojis', () => {
      assert.strictEqual(strictEncodeURIComponent('😊'), '%F0%9F%98%8A');
      assert.strictEqual(encodeWithSlashes('😊'), '%F0%9F%98%8A');
    });
  });

  describe('encodeWithoutSlashes', () => {
    it('should preserve slashes and unreserved characters', () => {
      assert.strictEqual(
        encodeWithoutSlashes('projects/my-proj_1.0~v2/locations/us-central1'),
        'projects/my-proj_1.0~v2/locations/us-central1',
      );
    });

    it('should percent-encode query, fragment, and special characters', () => {
      const input =
        'projects/p/locations/l/agents/a/sessions/my-session?$httpMethod=DELETE#';
      const expected =
        'projects/p/locations/l/agents/a/sessions/my-session%3F%24httpMethod%3DDELETE%23';
      assert.strictEqual(encodeWithoutSlashes(input), expected);
    });

    it('should percent-encode all reserved characters while preserving slashes', () => {
      const input = "projects/p/locations/l/agents/a/sessions/ !@$&'()*+,;=:%";
      const expected =
        'projects/p/locations/l/agents/a/sessions/%20%21%40%24%26%27%28%29%2A%2B%2C%3B%3D%3A%25';
      assert.strictEqual(encodeWithoutSlashes(input), expected);
    });

    it('should handle Unicode surrogate pairs in paths', () => {
      assert.strictEqual(
        encodeWithoutSlashes('projects/p/sessions/😊'),
        'projects/p/sessions/%F0%9F%98%8A',
      );
    });
  });

  describe('extractTemplateParams', () => {
    it('should identify multi-segment parameters from {+param}', () => {
      const res = extractTemplateParams(
        'https://example.com/v1/{+name}:approve',
      );
      assert.deepStrictEqual(Array.from(res.multiSegmentParams), ['name']);
      assert.deepStrictEqual(Array.from(res.singleSegmentParams), []);
    });

    it('should identify single-segment parameters from {param}', () => {
      const res = extractTemplateParams(
        'https://example.com/drive/v3/files/{fileId}',
      );
      assert.deepStrictEqual(Array.from(res.multiSegmentParams), []);
      assert.deepStrictEqual(Array.from(res.singleSegmentParams), ['fileId']);
    });

    it('should identify mixed templates with multiple parameters', () => {
      const res = extractTemplateParams(
        'https://example.com/v1/{+parent}/databases/{databaseId}/documents/{+documentPath}',
      );
      assert.deepStrictEqual(Array.from(res.multiSegmentParams), [
        'parent',
        'documentPath',
      ]);
      assert.deepStrictEqual(Array.from(res.singleSegmentParams), [
        'databaseId',
      ]);
    });

    it('should handle comma-separated template variables', () => {
      const res = extractTemplateParams(
        'https://example.com/v1/{var1,var2}/{+multi1,multi2}',
      );
      assert.deepStrictEqual(Array.from(res.singleSegmentParams), [
        'var1',
        'var2',
      ]);
      assert.deepStrictEqual(Array.from(res.multiSegmentParams), [
        'multi1',
        'multi2',
      ]);
    });
  });

  describe('normalizePathParams', () => {
    it('should un-alias trailing underscores in pathParams', () => {
      const pathParams = ['resource_', 'project_', 'fileId'];
      normalizePathParams(pathParams);
      assert.deepStrictEqual(pathParams, ['resource', 'project', 'fileId']);
    });

    it('should handle undefined, null, or empty pathParams safely', () => {
      assert.doesNotThrow(() => normalizePathParams(undefined));
      assert.doesNotThrow(() => normalizePathParams([]));
    });
  });

  describe('validateAndEncodeParams', () => {
    it('should validate and encode multi-segment params and validate single-segment params', () => {
      const params: Record<string, any> = {
        parent:
          'projects/p/locations/l/agents/a/sessions/my-session?$httpMethod=DELETE#',
        fileId: 'file-123',
      };
      validateAndEncodeParams(
        ['https://example.com/v1/{+parent}/files/{fileId}'],
        params,
      );
      assert.strictEqual(
        params.parent,
        'projects/p/locations/l/agents/a/sessions/my-session%3F%24httpMethod%3DDELETE%23',
      );
      assert.strictEqual(params.fileId, 'file-123');
    });

    it('should throw on path traversal in multi-segment params', () => {
      const params: Record<string, any> = {
        name: 'projects/p/locations/l/agents/a/sessions/agents/../subagent',
      };
      assert.throws(() => {
        validateAndEncodeParams(['https://example.com/v1/{+name}'], params);
      }, /Value for name must not contain segments that are exactly \. or \.\./);
    });

    it('should throw on path traversal in single-segment params', () => {
      const params: Record<string, any> = {
        fileId: '..',
      };
      assert.throws(() => {
        validateAndEncodeParams(
          ['https://example.com/drive/v3/files/{fileId}'],
          params,
        );
      }, /Invalid value \.\. for fileId/);
    });

    it('should handle array path parameters', () => {
      const params: Record<string, any> = {
        names: ['projects/p/loc/l/a/1?$foo=bar#', 'projects/p/loc/l/a/2'],
      };
      validateAndEncodeParams(['https://example.com/v1/{+names}'], params);
      assert.deepStrictEqual(params.names, [
        'projects/p/loc/l/a/1%3F%24foo%3Dbar%23',
        'projects/p/loc/l/a/2',
      ]);
    });

    it('should handle missing and null params gracefully', () => {
      const params: Record<string, any> = {
        name: null,
        fileId: undefined,
      };
      assert.doesNotThrow(() => {
        validateAndEncodeParams(
          ['https://example.com/v1/{+name}/files/{fileId}'],
          params,
        );
      });
    });
  });
});
