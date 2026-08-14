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

/* eslint-disable @typescript-eslint/ban-ts-comment */

import {describe, it} from 'mocha';
import {RequestType} from '../../src/apitypes';
import {
  transcode,
  getField,
  deleteField,
  ParsedOptionsType,
  encodeWithSlashes,
  encodeWithoutSlashes,
  applyPattern,
  flattenObject,
  deepCopyWithoutMatchedFields,
  match,
  buildQueryStringComponents,
  overrideHttpRules,
} from '../../src/transcoding';
import assert from 'assert';
import * as protobuf from 'protobufjs';
import echoProtoJson = require('../fixtures/echo.json');
import {google} from '../../protos/http';

describe('gRPC to HTTP transcoding', () => {
  const parsedOptions: ParsedOptionsType = [
    {
      '(google.api.http)': {
        get: '/v3/{parent=projects/*/locations/*}/supportedLanguages',
        additional_bindings: [
          {
            get: '/v3/{parent=projects/*}/supportedLanguages',
          },
          {
            post: '/v3/{parent=post1/*}/supportedLanguages',
            body: '*',
          },
          {
            post: '/v3/{parent=post2/*}/supportedLanguages',
            body: 'field',
          },
          {
            get: '/v3/{parent=get/*}/{field=*}/supportedLanguages',
          },
          {
            get: '/v3/{parent=projects/*}/{field=fields/*}/{path=**}/supportedLanguages',
          },
          {
            post: '/v3/a/{snake_case_first=*}',
            body: 'snake_case_body',
          },
          {
            post: '/v3/b/{snake_case_second=*}',
            body: '*',
          },
        ],
      },
    },
    {
      '(google.api.method_signature)': 'parent,model,display_language_code',
    },
  ];

  // Main transcode() function
  it('transcode', () => {
    assert.deepStrictEqual(
      transcode({parent: 'projects/project'}, parsedOptions),
      {
        httpMethod: 'get',
        url: '/v3/projects/project/supportedLanguages',
        queryString: '',
        data: '',
      },
    );

    assert.deepStrictEqual(
      transcode({parent: 'projects/project', field: 'value'}, parsedOptions),
      {
        httpMethod: 'get',
        url: '/v3/projects/project/supportedLanguages',
        queryString: 'field=value',
        data: '',
      },
    );

    assert.deepStrictEqual(
      transcode(
        {parent: 'projects/project', field: 'value', a: 42},
        parsedOptions,
      ),
      {
        httpMethod: 'get',
        url: '/v3/projects/project/supportedLanguages',
        queryString: 'field=value&a=42',
        data: '',
      },
    );

    assert.deepStrictEqual(
      transcode(
        {parent: 'post1/project', field: 'value', a: 42},
        parsedOptions,
      ),
      {
        httpMethod: 'post',
        url: '/v3/post1/project/supportedLanguages',
        queryString: '',
        data: {field: 'value', a: 42},
      },
    );

    assert.deepStrictEqual(
      transcode(
        {parent: 'post2/project', field: 'value', a: 42},
        parsedOptions,
      ),
      {
        httpMethod: 'post',
        url: '/v3/post2/project/supportedLanguages',
        queryString: 'a=42',
        data: 'value',
      },
    );

    assert.deepStrictEqual(
      transcode({parent: 'get/project', field: 'value', a: 42}, parsedOptions),
      {
        httpMethod: 'get',
        url: '/v3/get/project/value/supportedLanguages',
        queryString: 'a=42',
        data: '',
      },
    );

    // Checking camel-snake-case conversions
    assert.deepStrictEqual(
      transcode(
        {
          snakeCaseFirst: 'first',
          snakeCaseBody: {snakeCaseField: 42},
          fieldName: 'value',
        },
        parsedOptions,
      ),
      {
        httpMethod: 'post',
        url: '/v3/a/first',
        queryString: 'fieldName=value',
        data: {snakeCaseField: 42},
      },
    );

    assert.deepStrictEqual(
      transcode(
        {
          snakeCaseSecond: 'second',
          snakeCaseBody: {snakeCaseField: 42},
          fieldName: 'value',
        },
        parsedOptions,
      ),
      {
        httpMethod: 'post',
        url: '/v3/b/second',
        queryString: '',
        data: {snakeCaseBody: {snakeCaseField: 42}, fieldName: 'value'},
      },
    );

    assert.strictEqual(
      transcode({unknownField: 'project'}, parsedOptions),
      undefined,
    );
  });

  it('should not change user inputted fields to camel case', () => {
    const request: RequestType = {
      projectId: 'test-project',
      content: 'test-content',
      labels: {'i-am-vm': 'true'},
    };
    const parsedOptions: ParsedOptionsType = [
      {
        '(google.api.http)': {
          post: 'projects/{project_id}',
          body: '*',
        },
      },
    ];
    const transcoded = transcode(request, parsedOptions);
    assert.deepStrictEqual(transcoded?.url, 'projects/test-project');
    assert.deepStrictEqual(transcoded?.data, {
      content: 'test-content',
      labels: {'i-am-vm': 'true'},
    });
  });

  it('transcode should not decapitalize the first capital letter', () => {
    assert.deepStrictEqual(
      transcode(
        {
          parent: 'post1/project',
          IPProtocol: 'tcp',
        },
        parsedOptions,
      ),
      {
        httpMethod: 'post',
        queryString: '',
        url: '/v3/post1/project/supportedLanguages',
        data: {
          IPProtocol: 'tcp',
        },
      },
    );
    assert.deepStrictEqual(
      transcode(
        {
          parent: 'post2/project',
          IPProtocol: 'tcp',
          field: 'value',
        },
        parsedOptions,
      ),
      {
        httpMethod: 'post',
        queryString: 'IPProtocol=tcp',
        url: '/v3/post2/project/supportedLanguages',
        data: 'value',
      },
    );
    assert.deepStrictEqual(
      transcode(
        {
          parent: 'post1/project',
          iPProtocol: 'tcp',
        },
        parsedOptions,
      ),
      {
        httpMethod: 'post',
        queryString: '',
        url: '/v3/post1/project/supportedLanguages',
        data: {
          iPProtocol: 'tcp',
        },
      },
    );
  });

  it('transcode should ignore inherited properties', () => {
    // In this test we emulate protobuf object that has inherited circular
    // references in the prototype. This is supposed to be a pure JS code
    // so some ts-ignores are expected.
    const Request = function () {
      // @ts-ignore
      this.parent = 'projects/a/locations/b';
      // @ts-ignore
      return this;
    };
    Request.prototype.circular = {};
    Request.prototype.circular.field = Request.prototype.circular;
    // @ts-ignore
    const request = new Request();
    assert.deepStrictEqual(transcode(request, parsedOptions), {
      httpMethod: 'get',
      url: '/v3/projects/a/locations/b/supportedLanguages',
      queryString: '',
      data: '',
    });
  });

  // Tests for helper functions

  it('getField', () => {
    assert.strictEqual(
      getField({field: 'stringValue'}, 'field'),
      'stringValue',
    );
    assert.strictEqual(
      getField({field: 'stringValue'}, 'nosuchfield'),
      undefined,
    );
    assert.strictEqual(
      getField({field: 'stringValue'}, 'field.subfield'),
      undefined,
    );
    assert.strictEqual(
      getField({field: {subfield: 'stringValue'}}, 'field.subfield'),
      'stringValue',
    );
    assert.deepStrictEqual(
      getField({field: {subfield: [1, 2, 3]}}, 'field.subfield'),
      [1, 2, 3],
    );
    assert.strictEqual(
      getField({field: {subfield: 'stringValue'}}, 'field'),
      undefined,
    );
    assert.strictEqual(
      getField({field: {subfield: 'stringValue'}}, 'field.nosuchfield'),
      undefined,
    );
    assert.strictEqual(
      getField(
        {field: {subfield: {subsubfield: 'stringValue'}}},
        'field.subfield.subsubfield',
      ),
      'stringValue',
    );
  });

  it('deleteField', () => {
    const request1 = {field: 'stringValue'};
    deleteField(request1, 'field');
    assert.deepStrictEqual(request1, {});

    const request2 = {field: 'stringValue'};
    deleteField(request2, 'nosuchfield');
    assert.deepStrictEqual(request2, {
      field: 'stringValue',
    });

    const request3 = {field: 'stringValue'};
    deleteField(request3, 'field.subfield');
    assert.deepStrictEqual(request3, {
      field: 'stringValue',
    });

    const request4 = {field: {subfield: 'stringValue'}};
    deleteField(request4, 'field.subfield');
    assert.deepStrictEqual(request4, {field: {}});

    const request5 = {field: {subfield: 'stringValue', q: 'w'}, e: 'f'};
    deleteField(request5, 'field.subfield');
    assert.deepStrictEqual(request5, {field: {q: 'w'}, e: 'f'});

    const request6 = {field: {subfield: 'stringValue'}};
    deleteField(request6, 'field.nosuchfield');
    assert.deepStrictEqual(request6, {field: {subfield: 'stringValue'}});

    const request7 = {field: {subfield: {subsubfield: 'stringValue', q: 'w'}}};
    deleteField(request7, 'field.subfield.subsubfield');
    assert.deepStrictEqual(request7, {field: {subfield: {q: 'w'}}});
  });

  it('encodeWithSlashes', () => {
    assert.strictEqual(encodeWithSlashes('abcd'), 'abcd');
    assert.strictEqual(encodeWithSlashes('тест'), '%D1%82%D0%B5%D1%81%D1%82');
    assert.strictEqual(
      encodeWithSlashes(
        '_.~0-9abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ/ ',
      ),
      '_.~0-9abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ%2F%20',
    );
  });

  it('encodeWithoutSlashes', () => {
    assert.strictEqual(encodeWithoutSlashes('abcd'), 'abcd');
    assert.strictEqual(
      encodeWithoutSlashes('тест'),
      '%D1%82%D0%B5%D1%81%D1%82',
    );
    assert.strictEqual(
      encodeWithoutSlashes(
        '_.~0-9abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ/ ',
      ),
      '_.~0-9abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ/%20',
    );
  });

  it('applyPattern', () => {
    assert.strictEqual(applyPattern('*', 'test'), 'test');
    assert.strictEqual(applyPattern('test', 'test'), 'test');
    assert.strictEqual(applyPattern('fail', 'test'), undefined);
    assert.strictEqual(
      applyPattern('projects/*', 'projects/test'),
      'projects/test',
    );
    assert.strictEqual(
      applyPattern('projects/*/locations/*', 'projects/test'),
      undefined,
    );
    assert.strictEqual(applyPattern('locations/*', 'projects/test'), undefined);
    assert.strictEqual(
      applyPattern('projects/*/locations/*', 'projects/test/locations/us'),
      'projects/test/locations/us',
    );
    assert.strictEqual(
      applyPattern('projects/*/locations/*', 'projects/test/locations/us/q/z'),
      undefined,
    );
    assert.strictEqual(
      applyPattern('projects/*/locations/**', 'projects/test/locations/us/q/z'),
      'projects/test/locations/us/q/z',
    );
  });

  it('flattenObject', () => {
    assert.deepStrictEqual(flattenObject({}), {});
    assert.deepStrictEqual(flattenObject({field: 'value'}), {field: 'value'});
    assert.deepStrictEqual(
      flattenObject({field: 'value', nested: {subfield: 'subvalue'}}),
      {field: 'value', 'nested.subfield': 'subvalue'},
    );
  });

  it('match', () => {
    assert.deepStrictEqual(
      match(
        {parent: 'projects/te st', test: 'value'},
        '/v3/{parent=projects/*}/supportedLanguages',
      ),
      {
        matchedFields: ['parent'],
        url: '/v3/projects/te%20st/supportedLanguages',
      },
    );
    assert.deepStrictEqual(
      match(
        {parent: 'projects/te st/locations/location', test: 'value'},
        '/v3/{parent=projects/*}/supportedLanguages',
      ),
      undefined,
    );
    assert.deepStrictEqual(
      match(
        {parent: 'projects/te st/locations/location', test: 'value'},
        '/v3/{parent=projects/*/locations/*}/supportedLanguages',
      ),
      {
        matchedFields: ['parent'],
        url: '/v3/projects/te%20st/locations/location/supportedLanguages',
      },
    );
    assert.deepStrictEqual(
      match(
        {parent: 'projects/te st', test: 'value'},
        '/v3/{parent=projects/*}/{field=*}/supportedLanguages',
      ),
      undefined,
    );
    assert.deepStrictEqual(
      match(
        {parent: 'projects/te st', test: 'value', field: 42},
        '/v3/{parent=projects/*}/{field=*}/supportedLanguages',
      ),
      {
        matchedFields: ['field', 'parent'],
        url: '/v3/projects/te%20st/42/supportedLanguages',
      },
    );
    assert.deepStrictEqual(
      match(
        {
          parent: 'projects/te st',
          test: 'value',
          field: 'fields/field42',
          path: 'a/b,c/d',
        },
        '/v3/{parent=projects/*}/{field=fields/*}/{path=**}/supportedLanguages',
      ),
      {
        matchedFields: ['path', 'field', 'parent'],
        url: '/v3/projects/te%20st/fields/field42/a/b%2Cc/d/supportedLanguages',
      },
    );
    assert.deepStrictEqual(
      match({}, '/v3/{field.subfield}/supportedLanguages'),
      undefined,
    );
    assert.deepStrictEqual(
      match({field: {subfield: 42}}, '/v3/{field.subfield}/supportedLanguages'),
      {
        matchedFields: ['field.subfield'],
        url: '/v3/42/supportedLanguages',
      },
    );
  });

  it('deepCopyWithoutMatchedFields', () => {
    const request = {
      field: {
        subfield: 42,
      },
      value: 'string',
      repeated: [1, 2, {a: 'b'}],
    };
    const copy = deepCopyWithoutMatchedFields(
      request as RequestType,
      new Set(),
    );
    assert.deepStrictEqual(copy, request);
    request.field.subfield = 43;
    request.repeated[0] = -1;
    (request.repeated[2] as RequestType).a = 'c';
    assert.strictEqual((copy.field as RequestType).subfield, 42);
    assert.strictEqual((copy.repeated as RequestType[])[0], 1);
    assert.strictEqual((copy.repeated as RequestType[])[2].a, 'b');
  });

  it('deepCopyWithoutMatchedFields with some fields to skip', () => {
    const request = {
      field: {
        subfield: 42,
        another: 11,
      },
      value: 'string',
      repeated: [1, 2, {a: 'b'}],
    };
    const expected = {
      field: {
        another: 11,
      },
      value: 'string',
      repeated: [1, 2, {a: 'b'}],
    };
    const copy = deepCopyWithoutMatchedFields(
      request as RequestType,
      new Set(['field.subfield']),
    );
    assert.deepStrictEqual(copy, expected);
  });

  it('buildQueryStringComponents', () => {
    assert.deepStrictEqual(buildQueryStringComponents({field: 'value'}), [
      'field=value',
    ]);
    assert.deepStrictEqual(
      buildQueryStringComponents({field: 'value', a: 42}),
      ['field=value', 'a=42'],
    );
    assert.deepStrictEqual(
      buildQueryStringComponents({
        field: 'value',
        repeated: [1, 2, 'z z z'],
        obj: {subfield: 'string', y: 'z'},
      }),
      [
        'field=value',
        'repeated=1',
        'repeated=2',
        'repeated=z%20z%20z',
        'obj.subfield=string',
        'obj.y=z',
      ],
    );
  });
});

describe('override the HTTP rules in protoJson', () => {
  const httpOptionName = '(google.api.http)';

  it('override multiple http rules', () => {
    const httpRules: Array<google.api.IHttpRule> = [
      {
        selector: 'google.showcase.v1beta1.Messaging.GetRoom',
        get: '/v1beta1/{name**}',
      },
      {
        selector: 'google.showcase.v1beta1.Messaging.ListRooms',
        get: '/fake/value',
      },
    ];
    const root = protobuf.Root.fromJSON(echoProtoJson);
    overrideHttpRules(httpRules, root);
    for (const rule of httpRules) {
      const modifiedRpc = root.lookup(rule.selector!) as protobuf.Method;
      assert(modifiedRpc);
      assert(modifiedRpc.parsedOptions);
      for (const item of modifiedRpc!.parsedOptions) {
        if (!(httpOptionName in item)) {
          continue;
        }
        const httpOptions = item[httpOptionName];
        assert.deepStrictEqual(httpOptions.get, rule.get);
      }
    }
  });

  it("override additional bindings for a rpc doesn't has additional bindings", () => {
    const httpRules: Array<google.api.IHttpRule> = [
      {
        selector: 'google.showcase.v1beta1.Messaging.GetRoom',
        get: 'v1beta1/room/{name=**}',
        additional_bindings: [{get: 'v1beta1/room/{name}'}],
      },
    ];
    const root = protobuf.Root.fromJSON(echoProtoJson);
    overrideHttpRules(httpRules, root);
    for (const rule of httpRules) {
      const modifiedRpc = root.lookup(rule.selector!) as protobuf.Method;
      assert(modifiedRpc);
      assert(modifiedRpc.parsedOptions);
      for (const item of modifiedRpc!.parsedOptions) {
        if (!(httpOptionName in item)) {
          continue;
        }
        const httpOptions = item[httpOptionName];
        assert.deepStrictEqual(httpOptions.get, rule.get);
        assert.deepStrictEqual(
          httpOptions.additional_bindings,
          rule.additional_bindings,
        );
      }
    }
  });

  it('append additional bindings for a rpc has additional bindings', () => {
    const httpRules: Array<google.api.IHttpRule> = [
      {
        selector: 'google.showcase.v1beta1.Messaging.GetBlurb',
        get: 'v1beta1/fake/value',
        additional_bindings: [
          {get: 'v1beta1/fake/value'},
        ] as Array<google.api.IHttpRule>,
      },
    ];
    const root = protobuf.Root.fromJSON(echoProtoJson);
    const originRpc = root.lookup(httpRules[0].selector!) as protobuf.Method;
    const originAdditionalBindings = () => {
      for (const item of originRpc!.parsedOptions) {
        if (!(httpOptionName in item)) {
          continue;
        }
        const httpOptions = item[httpOptionName] as google.api.IHttpRule;
        return [httpOptions.additional_bindings];
      }
      return null;
    };
    assert(originAdditionalBindings());
    const expectedAditionalBindings = originAdditionalBindings()!.concat(
      httpRules[0].additional_bindings,
    );
    overrideHttpRules(httpRules, root);
    for (const rule of httpRules) {
      const modifiedRpc = root.lookup(rule.selector!) as protobuf.Method;
      assert(modifiedRpc);
      assert(modifiedRpc.parsedOptions);
      for (const item of modifiedRpc!.parsedOptions) {
        if (!(httpOptionName in item)) {
          continue;
        }
        const httpOptions = item[httpOptionName];
        assert.deepStrictEqual(httpOptions.get, rule.get);
        assert.deepStrictEqual(
          httpOptions.additional_bindings,
          expectedAditionalBindings,
        );
      }
    }
  });

  it("can't override a non-exist rpc", () => {
    const httpRules: Array<google.api.IHttpRule> = [
      {
        selector: 'not.a.valid.rpc',
        get: 'v1/operations/{name=**}',
      },
    ];
    const root = protobuf.Root.fromJSON(echoProtoJson);
    overrideHttpRules(httpRules, root);
    for (const rule of httpRules) {
      const modifiedRpc = root.lookup(rule.selector!) as protobuf.Method;
      assert.equal(modifiedRpc, null);
    }
  });

  it('not support a rpc has no parsedOption', () => {
    const httpRules: Array<google.api.IHttpRule> = [
      {
        selector: 'google.showcase.v1beta1.Messaging.Connect',
        get: 'fake/url',
      },
    ];
    const root = protobuf.Root.fromJSON(echoProtoJson);
    overrideHttpRules(httpRules, root);
    for (const rule of httpRules) {
      const modifiedRpc = root.lookup(rule.selector!) as protobuf.Method;
      assert(modifiedRpc);
      assert.equal(modifiedRpc.parsedOptions, null);
    }
  });
});
