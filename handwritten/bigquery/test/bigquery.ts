// Copyright 2019 Google LLC
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

import {
  DecorateRequestOptions,
  Service,
  ServiceConfig,
  ServiceOptions,
  util,
} from '@google-cloud/common';
import * as pfy from '@google-cloud/promisify';
import * as assert from 'assert';
import {describe, it, after, afterEach, before, beforeEach} from 'mocha';
import * as Big from 'big.js';
import * as extend from 'extend';
import * as proxyquire from 'proxyquire';
import * as sinon from 'sinon';
import * as crypto from 'crypto';

import {toArray} from '../src/util';
import {
  BigQueryInt,
  BigQueryDate,
  IntegerTypeCastValue,
  IntegerTypeCastOptions,
  Dataset,
  Job,
  PROTOCOL_REGEX,
  Table,
  JobOptions,
  TableField,
  Query,
  QueryResultsOptions,
} from '../src';
import {SinonStub} from 'sinon';
import {PreciseDate} from '@google-cloud/precise-date';

const fakeCrypto = extend(true, {}, crypto);

class FakeApiError {
  calledWith_: Array<{}>;
  constructor(...args: Array<{}>) {
    this.calledWith_ = args;
  }
}

interface InputObject {
  year?: number;
  month?: number;
  day?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
  fractional?: number;
}

interface CalledWithService extends Service {
  calledWith_: Array<{
    baseUrl: string;
    scopes: string[];
    packageJson: {};
  }>;
}

let promisified = false;
const fakePfy = Object.assign({}, pfy, {
  promisifyAll: (c: Function, options: pfy.PromisifyAllOptions) => {
    if (c.name !== 'BigQuery') {
      return;
    }
    promisified = true;
    assert.deepStrictEqual(options.exclude, [
      'dataset',
      'date',
      'datetime',
      'geography',
      'int',
      'job',
      'time',
      'timestamp',
      'range',
    ]);
  },
});
const fakeUtil = Object.assign({}, util, {
  ApiError: FakeApiError,
});
const originalFakeUtil = extend(true, {}, fakeUtil);

class FakeDataset {
  calledWith_: Array<{}>;
  constructor(...args: Array<{}>) {
    this.calledWith_ = args;
  }
}

class FakeTable extends Table {
  constructor(a: Dataset, b: string) {
    super(a, b);
  }
}

class FakeJob {
  calledWith_: Array<{}>;
  constructor(...args: Array<{}>) {
    this.calledWith_ = args;
  }
}

let extended = false;
const fakePaginator = {
  paginator: {
    extend: (c: Function, methods: string[]) => {
      if (c.name !== 'BigQuery') {
        return;
      }
      methods = toArray(methods);
      assert.strictEqual(c.name, 'BigQuery');
      assert.deepStrictEqual(methods, ['getDatasets', 'getJobs']);
      extended = true;
    },
    streamify: (methodName: string) => {
      return methodName;
    },
  },
};

class FakeService extends Service {
  calledWith_: IArguments;
  constructor(config: ServiceConfig, options: ServiceOptions) {
    super(config, options);
    // eslint-disable-next-line prefer-rest-params
    this.calledWith_ = arguments;
  }
}

const sandbox = sinon.createSandbox();
afterEach(() => sandbox.restore());

describe('BigQuery', () => {
  const JOB_ID = 'JOB_ID';
  const PROJECT_ID = 'test-project';
  const ANOTHER_PROJECT_ID = 'another-test-project';
  const LOCATION = 'asia-northeast1';

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let BigQueryCached: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let BigQuery: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let bq: any;

  const BIGQUERY_EMULATOR_HOST = process.env.BIGQUERY_EMULATOR_HOST;

  before(() => {
    delete process.env.BIGQUERY_EMULATOR_HOST;
    BigQuery = proxyquire('../src/bigquery', {
      crypto: fakeCrypto,
      './dataset': {
        Dataset: FakeDataset,
      },
      './job': {
        Job: FakeJob,
      },
      './table': {
        Table: FakeTable,
      },
      '@google-cloud/common': {
        Service: FakeService,
        util: fakeUtil,
      },
      '@google-cloud/paginator': fakePaginator,
      '@google-cloud/promisify': fakePfy,
    }).BigQuery;
    BigQueryCached = Object.assign({}, BigQuery);
  });

  beforeEach(() => {
    Object.assign(fakeUtil, originalFakeUtil);
    BigQuery = Object.assign(BigQuery, BigQueryCached);
    bq = new BigQuery({
      projectId: PROJECT_ID,
      defaultJobCreationMode: 'JOB_CREATION_OPTIONAL',
    });
  });

  after(() => {
    if (BIGQUERY_EMULATOR_HOST) {
      process.env.BIGQUERY_EMULATOR_HOST = BIGQUERY_EMULATOR_HOST;
    }
  });

  describe('instantiation', () => {
    it('should extend the correct methods', () => {
      assert(extended); // See `fakePaginator.extend`
    });

    it('should streamify the correct methods', () => {
      assert.strictEqual(bq.getDatasetsStream, 'getDatasets');
      assert.strictEqual(bq.getJobsStream, 'getJobs');
      assert.strictEqual(bq.createQueryStream, 'queryAsStream_');
    });

    it('should promisify all the things', () => {
      assert(promisified);
    });

    it('should inherit from Service', () => {
      assert(bq instanceof Service);

      const calledWith = (bq as CalledWithService).calledWith_[0];

      const baseUrl = 'https://bigquery.googleapis.com/bigquery/v2';
      assert.strictEqual(calledWith.baseUrl, baseUrl);
      assert.deepStrictEqual(calledWith.scopes, [
        'https://www.googleapis.com/auth/bigquery',
      ]);
      assert.deepStrictEqual(
        calledWith.packageJson,
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        require('../../package.json'),
      );
    });

    it('should allow overriding the apiEndpoint', () => {
      const apiEndpoint = 'https://not.real.local';
      bq = new BigQuery({
        apiEndpoint,
      });
      const calledWith = bq.calledWith_[0];
      assert.strictEqual(calledWith.baseUrl, `${apiEndpoint}/bigquery/v2`);
      assert.strictEqual(calledWith.apiEndpoint, `${apiEndpoint}`);
    });

    it('should prepend apiEndpoint with default protocol', () => {
      const protocollessApiEndpoint = 'some.fake.endpoint';
      bq = new BigQuery({
        apiEndpoint: protocollessApiEndpoint,
      });
      const calledWith = bq.calledWith_[0];
      assert.strictEqual(
        calledWith.baseUrl,
        `https://${protocollessApiEndpoint}/bigquery/v2`,
      );
      assert.strictEqual(
        calledWith.apiEndpoint,
        `https://${protocollessApiEndpoint}`,
      );
    });

    it('should strip trailing slash from apiEndpoint', () => {
      const apiEndpoint = 'https://some.fake.endpoint/';
      bq = new BigQuery({
        apiEndpoint: apiEndpoint,
      });
      const calledWith = bq.calledWith_[0];
      assert.strictEqual(calledWith.baseUrl, `${apiEndpoint}bigquery/v2`);
      assert.strictEqual(calledWith.apiEndpoint, 'https://some.fake.endpoint');
    });

    it('should allow overriding TPC universe', () => {
      const universeDomain = 'fake-tpc-env.example.com/';
      bq = new BigQuery({
        universeDomain: universeDomain,
      });
      const calledWith = bq.calledWith_[0];
      assert.strictEqual(
        calledWith.baseUrl,
        'https://bigquery.fake-tpc-env.example.com/bigquery/v2',
      );
      assert.strictEqual(
        calledWith.apiEndpoint,
        'https://bigquery.fake-tpc-env.example.com',
      );
    });

    it('should capture any user specified location', () => {
      const bq = new BigQuery({
        projectId: PROJECT_ID,
        location: LOCATION,
      });
      assert.strictEqual(bq.location, LOCATION);
    });

    it('should pass scopes from options', () => {
      const bq = new BigQuery({
        scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      });

      const expectedScopes = [
        'https://www.googleapis.com/auth/bigquery',
        'https://www.googleapis.com/auth/drive.readonly',
      ];

      const calledWith = bq.calledWith_[0];
      assert.deepStrictEqual(calledWith.scopes, expectedScopes);
    });

    it('should pass autoRetry from options', () => {
      const retry = false;
      const bq = new BigQuery({
        autoRetry: retry,
      });

      const calledWith = bq.calledWith_[0];
      assert.deepStrictEqual(calledWith.autoRetry, retry);
    });

    it('should pass maxRetries from options', () => {
      const retryVal = 1;
      const bq = new BigQuery({
        maxRetries: retryVal,
      });

      const calledWith = bq.calledWith_[0];
      assert.deepStrictEqual(calledWith.maxRetries, retryVal);
    });

    it('should pass retryOptions from options', () => {
      const retryOptions = {
        autoRetry: true,
        maxRetries: 3,
      };
      const bq = new BigQuery({
        retryOptions: retryOptions,
      });

      const calledWith = bq.calledWith_[0];
      assert.deepStrictEqual(calledWith.retryOptions, retryOptions);
    });

    it('should not modify options argument', () => {
      const options = {
        projectId: PROJECT_ID,
      };
      const expectedCalledWith = Object.assign({}, options, {
        apiEndpoint: 'https://bigquery.googleapis.com',
      });
      const bigquery = new BigQuery(options);
      const calledWith = bigquery.calledWith_[1];
      assert.notStrictEqual(calledWith, options);
      assert.notDeepStrictEqual(calledWith, options);
      assert.deepStrictEqual(calledWith, expectedCalledWith);
    });

    describe('BIGQUERY_EMULATOR_HOST', () => {
      const EMULATOR_HOST = 'https://internal.benchmark.com/path';

      before(() => {
        process.env.BIGQUERY_EMULATOR_HOST = EMULATOR_HOST;
      });

      after(() => {
        delete process.env.BIGQUERY_EMULATOR_HOST;
      });

      it('should set baseUrl to env var STORAGE_EMULATOR_HOST', () => {
        bq = new BigQuery({
          projectId: PROJECT_ID,
        });

        const calledWith = bq.calledWith_[0];
        assert.strictEqual(calledWith.baseUrl, EMULATOR_HOST);
        assert.strictEqual(
          calledWith.apiEndpoint,
          'https://internal.benchmark.com/path',
        );
      });

      it('should be overriden by apiEndpoint', () => {
        bq = new BigQuery({
          projectId: PROJECT_ID,
          apiEndpoint: 'https://some.api.com',
        });

        const calledWith = bq.calledWith_[0];
        assert.strictEqual(calledWith.baseUrl, EMULATOR_HOST);
        assert.strictEqual(calledWith.apiEndpoint, 'https://some.api.com');
      });

      it('should prepend default protocol and strip trailing slash', () => {
        const EMULATOR_HOST = 'internal.benchmark.com/path/';
        process.env.BIGQUERY_EMULATOR_HOST = EMULATOR_HOST;

        bq = new BigQuery({
          projectId: PROJECT_ID,
        });

        const calledWith = bq.calledWith_[0];
        assert.strictEqual(calledWith.baseUrl, EMULATOR_HOST);
        assert.strictEqual(
          calledWith.apiEndpoint,
          'https://internal.benchmark.com/path',
        );
      });
    });

    describe('prettyPrint request interceptor', () => {
      let requestInterceptor: Function;

      beforeEach(() => {
        requestInterceptor = bq.interceptors.pop().request;
      });

      it('should disable prettyPrint', () => {
        assert.deepStrictEqual(requestInterceptor({}), {
          qs: {prettyPrint: false},
        });
      });

      it('should clone json', () => {
        const reqOpts = {qs: {a: 'b'}};
        const expectedReqOpts = {qs: {a: 'b', prettyPrint: false}};
        assert.deepStrictEqual(requestInterceptor(reqOpts), expectedReqOpts);
        assert.notDeepStrictEqual(reqOpts, expectedReqOpts);
      });
    });
  });

  describe('mergeSchemaWithRows_', () => {
    const SCHEMA_OBJECT = {
      fields: [
        {name: 'id', type: 'INTEGER'},
        {name: 'name', type: 'STRING'},
        {name: 'dob', type: 'TIMESTAMP'},
        {name: 'has_claws', type: 'BOOLEAN'},
        {name: 'has_fangs', type: 'BOOL'},
        {name: 'hair_count', type: 'FLOAT'},
        {name: 'teeth_count', type: 'FLOAT64'},
        {name: 'numeric_col', type: 'NUMERIC'},
        {name: 'bignumeric_col', type: 'BIGNUMERIC'},
      ],
    } as {fields: TableField[]};

    beforeEach(() => {
      sandbox.stub(BigQuery, 'date').callsFake(input => {
        return {
          type: 'fakeDate',
          input,
        };
      });

      sandbox.stub(BigQuery, 'datetime').callsFake(input => {
        return {
          type: 'fakeDatetime',
          input,
        };
      });

      sandbox.stub(BigQuery, 'time').callsFake(input => {
        return {
          type: 'fakeTime',
          input,
        };
      });

      sandbox.stub(BigQuery, 'timestamp').callsFake(input => {
        return {
          type: 'fakeTimestamp',
          input,
        };
      });

      sandbox.stub(BigQuery, 'geography').callsFake(input => {
        return {
          type: 'fakeGeography',
          input,
        };
      });

      sandbox.stub(BigQuery, 'range').callsFake((input, elementType) => {
        return {
          type: 'fakeRange',
          input,
          elementType,
        };
      });
    });

    it('should merge the schema and flatten the rows', () => {
      const now = new Date();
      const buffer = Buffer.from('test');

      const rows = [
        {
          raw: {
            f: [
              {v: '3'},
              {v: 'Milo'},
              {v: now.valueOf() * 1000}, // int64 microseconds
              {v: 'false'},
              {v: 'true'},
              {v: '5.222330009847'},
              {v: '30.2232138'},
              {v: '3.14'},
              {v: '9.9876543210123456789'},
              {
                v: [
                  {
                    v: '10',
                  },
                ],
              },
              {
                v: [
                  {
                    v: '2',
                  },
                ],
              },
              {v: null},
              {v: buffer.toString('base64')},
              {
                v: [
                  {
                    v: {
                      f: [
                        {
                          v: {
                            f: [
                              {
                                v: 'nested_value',
                              },
                            ],
                          },
                        },
                      ],
                    },
                  },
                ],
              },
              {v: 'date-input'},
              {v: 'datetime-input'},
              {v: 'time-input'},
              {v: 'geography-input'},
              {v: '[2020-10-01 12:00:00+08, 2020-12-31 12:00:00+08)'},
            ],
          },
          expected: {
            id: 3,
            name: 'Milo',
            dob: {
              input: new PreciseDate(BigInt(now.valueOf()) * BigInt(1_000_000)),
              type: 'fakeTimestamp',
            },
            has_claws: false,
            has_fangs: true,
            hair_count: 5.222330009847,
            teeth_count: 30.2232138,
            numeric_col: new Big(3.14),
            bignumeric_col: new Big('9.9876543210123456789'),
            arr: [10],
            arr2: [2],
            nullable: null,
            buffer,
            objects: [
              {
                nested_object: {
                  nested_property: 'nested_value',
                },
              },
            ],
            date: {
              input: 'date-input',
              type: 'fakeDate',
            },
            datetime: {
              input: 'datetime-input',
              type: 'fakeDatetime',
            },
            time: {
              input: 'time-input',
              type: 'fakeTime',
            },
            geography: {
              input: 'geography-input',
              type: 'fakeGeography',
            },
            range: {
              type: 'fakeRange',
              input: {
                end: {
                  input: '2020-12-31 12:00:00+08',
                  type: 'fakeDatetime',
                },
                start: {
                  input: '2020-10-01 12:00:00+08',
                  type: 'fakeDatetime',
                },
              },
              elementType: 'DATETIME',
            },
          },
        },
      ];

      const schemaObject = extend(true, SCHEMA_OBJECT, {});

      schemaObject.fields.push({
        name: 'arr',
        type: 'INTEGER',
        mode: 'REPEATED',
      });

      schemaObject.fields.push({
        name: 'arr2',
        type: 'INT64',
        mode: 'REPEATED',
      });

      schemaObject.fields.push({
        name: 'nullable',
        type: 'STRING',
        mode: 'NULLABLE',
      });

      schemaObject.fields.push({
        name: 'buffer',
        type: 'BYTES',
      });

      schemaObject.fields.push({
        name: 'objects',
        type: 'RECORD',
        mode: 'REPEATED',
        fields: [
          {
            name: 'nested_object',
            type: 'RECORD',
            fields: [
              {
                name: 'nested_property',
                type: 'STRING',
              },
            ],
          },
        ],
      });

      schemaObject.fields.push({
        name: 'date',
        type: 'DATE',
      });

      schemaObject.fields.push({
        name: 'datetime',
        type: 'DATETIME',
      });

      schemaObject.fields.push({
        name: 'time',
        type: 'TIME',
      });

      schemaObject.fields.push({
        name: 'geography',
        type: 'GEOGRAPHY',
      });

      schemaObject.fields.push({
        name: 'range',
        type: 'RANGE',
        rangeElementType: {
          type: 'DATETIME',
        },
      });

      const rawRows = rows.map(x => x.raw);
      const mergedRows = BigQuery.mergeSchemaWithRows_(schemaObject, rawRows, {
        wrapIntegers: false,
      });

      mergedRows.forEach((mergedRow: {}, index: number) => {
        assert.deepStrictEqual(mergedRow, rows[index].expected);
      });
    });

    it('should parse uint64 timestamps with nanosecond precision', () => {
      const SCHEMA_OBJECT = {
        fields: [{name: 'ts', type: 'TIMESTAMP'}],
      } as {fields: TableField[]};

      sandbox.restore(); // restore BigQuery.timestamp call

      const rows = {
        raw: [
          {f: [{v: '-604800000000'}]}, // negative value
          {f: [{v: '0'}]}, // 0 value
          {f: [{v: '1000000'}]}, // 1 sec after epoch
          {f: [{v: '1712609904434123'}]}, // recent time
        ],
        expectedParsed: [
          {ts: BigQuery.timestamp('1969-12-25T00:00:00.000Z')},
          {ts: BigQuery.timestamp('1970-01-01T00:00:00Z')},
          {ts: BigQuery.timestamp('1970-01-01T00:00:01Z')},
          {ts: BigQuery.timestamp('2024-04-08T20:58:24.434123Z')},
        ],
      };

      const mergedRows = BigQuery.mergeSchemaWithRows_(
        SCHEMA_OBJECT,
        rows.raw,
        {},
      );
      mergedRows.forEach((mergedRow: {}, i: number) => {
        assert.deepStrictEqual(mergedRow, rows.expectedParsed[i]);
      });
    });

    it('should wrap integers with option', () => {
      const wrapIntegersBoolean = true;
      const wrapIntegersObject = {};
      const fakeInt = new BigQueryInt(100);

      const SCHEMA_OBJECT = {
        fields: [{name: 'fave_number', type: 'INTEGER'}],
      } as {fields: TableField[]};

      const rows = {
        raw: {
          f: [{v: 100}],
        },
        expectedBool: {
          fave_number: fakeInt,
        },
        expectedObj: {
          fave_number: fakeInt.valueOf(),
        },
      };

      sandbox.stub(BigQuery, 'int').returns(fakeInt);

      let mergedRows = BigQuery.mergeSchemaWithRows_(SCHEMA_OBJECT, rows.raw, {
        wrapIntegers: wrapIntegersBoolean,
      });
      mergedRows.forEach((mergedRow: {}) => {
        assert.deepStrictEqual(mergedRow, rows.expectedBool);
      });

      mergedRows = BigQuery.mergeSchemaWithRows_(SCHEMA_OBJECT, rows.raw, {
        wrapIntegers: wrapIntegersObject,
      });
      mergedRows.forEach((mergedRow: {}) => {
        assert.deepStrictEqual(mergedRow, rows.expectedObj);
      });
    });

    it('should parse json with option', () => {
      const jsonValue = {name: 'John Doe'};

      const SCHEMA_OBJECT = {
        fields: [{name: 'json_field', type: 'JSON'}],
      } as {fields: TableField[]};

      const rows = {
        raw: {
          f: [{v: JSON.stringify(jsonValue)}],
        },
        expectedParsed: {
          json_field: jsonValue,
        },
        expectedRaw: {
          json_field: JSON.stringify(jsonValue),
        },
      };

      let mergedRows = BigQuery.mergeSchemaWithRows_(SCHEMA_OBJECT, rows.raw, {
        parseJSON: false,
      });
      mergedRows.forEach((mergedRow: {}) => {
        assert.deepStrictEqual(mergedRow, rows.expectedRaw);
      });

      mergedRows = BigQuery.mergeSchemaWithRows_(SCHEMA_OBJECT, rows.raw, {
        parseJSON: true,
      });
      mergedRows.forEach((mergedRow: {}) => {
        assert.deepStrictEqual(mergedRow, rows.expectedParsed);
      });
    });
  });

  describe('date', () => {
    const INPUT_STRING = '2017-1-1';
    const INPUT_OBJ = {
      year: 2017,
      month: 1,
      day: 1,
    };

    // tslint:disable-next-line ban
    it.skip('should expose static and instance constructors', () => {
      const staticD = BigQuery.date();
      assert(staticD instanceof BigQueryDate);
      assert(staticD instanceof bq.date);

      const instanceD = bq.date();
      assert(instanceD instanceof BigQueryDate);
      assert(instanceD instanceof bq.date);
    });

    it('should have the correct constructor name', () => {
      const date = bq.date(INPUT_STRING);
      assert.strictEqual(date.constructor.name, 'BigQueryDate');
    });

    it('should accept a string', () => {
      const date = bq.date(INPUT_STRING);
      assert.strictEqual(date.value, INPUT_STRING);
    });

    it('should accept an object', () => {
      const date = bq.date(INPUT_OBJ);
      assert.strictEqual(date.value, INPUT_STRING);
    });
  });

  describe('datetime', () => {
    const INPUT_STRING = '2017-1-1T14:2:38.883388Z';

    const INPUT_OBJ = {
      year: 2017,
      month: 1,
      day: 1,
      hours: 14,
      minutes: 2,
      seconds: 38,
      fractional: 883388,
    };

    const EXPECTED_VALUE = '2017-1-1 14:2:38.883388';

    // tslint:disable-next-line ban
    it.skip('should expose static and instance constructors', () => {
      const staticDt = BigQuery.datetime(INPUT_OBJ);
      assert(staticDt instanceof BigQuery.datetime);
      assert(staticDt instanceof bq.datetime);

      const instanceDt = bq.datetime(INPUT_OBJ);
      assert(instanceDt instanceof BigQuery.datetime);
      assert(instanceDt instanceof bq.datetime);
    });

    it('should have the correct constructor name', () => {
      const datetime = bq.datetime(INPUT_STRING);
      assert.strictEqual(datetime.constructor.name, 'BigQueryDatetime');
    });

    it('should accept an object', () => {
      const datetime = bq.datetime(INPUT_OBJ);
      assert.strictEqual(datetime.value, EXPECTED_VALUE);
    });

    it('should not include time if hours not provided', () => {
      const datetime = bq.datetime({
        year: 2016,
        month: 1,
        day: 1,
      });

      assert.strictEqual(datetime.value, '2016-1-1');
    });

    it('should accept a string', () => {
      const datetime = bq.datetime(INPUT_STRING);
      assert.strictEqual(datetime.value, EXPECTED_VALUE);
    });
  });

  describe('time', () => {
    const INPUT_STRING = '14:2:38.883388';
    const INPUT_OBJ = {
      hours: 14,
      minutes: 2,
      seconds: 38,
      fractional: 883388,
    };

    // tslint:disable-next-line ban
    it.skip('should expose static and instance constructors', () => {
      const staticT = BigQuery.time();
      assert(staticT instanceof BigQuery.time);
      assert(staticT instanceof bq.time);

      const instanceT = bq.time();
      assert(instanceT instanceof BigQuery.time);
      assert(instanceT instanceof bq.time);
    });

    it('should have the correct constructor name', () => {
      const time = bq.time(INPUT_STRING);
      assert.strictEqual(time.constructor.name, 'BigQueryTime');
    });

    it('should accept a string', () => {
      const time = bq.time(INPUT_STRING);
      assert.strictEqual(time.value, INPUT_STRING);
    });

    it('should accept an object', () => {
      const time = bq.time(INPUT_OBJ);
      assert.strictEqual(time.value, INPUT_STRING);
    });

    it('should default minutes and seconds to 0', () => {
      const time = bq.time({
        hours: 14,
      });
      assert.strictEqual(time.value, '14:0:0');
    });

    it('should not include fractional digits if not provided', () => {
      const input = Object.assign({}, INPUT_OBJ) as InputObject;
      delete input.fractional;

      const time = bq.time(input);
      assert.strictEqual(time.value, '14:2:38');
    });
  });

  describe('timestamp', () => {
    const INPUT_STRING = '2016-12-06T12:00:00.000Z';
    const INPUT_STRING_MICROS = '2016-12-06T12:00:00.123456Z';
    const INPUT_DATE = new Date(INPUT_STRING);
    const INPUT_PRECISE_DATE = new PreciseDate(INPUT_STRING_MICROS);
    const EXPECTED_VALUE = INPUT_DATE.toJSON();
    const EXPECTED_VALUE_MICROS = INPUT_PRECISE_DATE.toISOString();

    // tslint:disable-next-line ban
    it.skip('should expose static and instance constructors', () => {
      const staticT = BigQuery.timestamp(INPUT_DATE);
      assert(staticT instanceof BigQuery.timestamp);
      assert(staticT instanceof bq.timestamp);

      const instanceT = bq.timestamp(INPUT_DATE);
      assert(instanceT instanceof BigQuery.timestamp);
      assert(instanceT instanceof bq.timestamp);
    });

    it('should have the correct constructor name', () => {
      const timestamp = bq.timestamp(INPUT_STRING);
      assert.strictEqual(timestamp.constructor.name, 'BigQueryTimestamp');
    });

    it('should accept a NaN', () => {
      const timestamp = bq.timestamp(NaN);
      assert.strictEqual(timestamp.value, null);
    });

    it('should accept a string', () => {
      const timestamp = bq.timestamp(INPUT_STRING);
      assert.strictEqual(timestamp.value, EXPECTED_VALUE);
    });

    it('should accept a string with microseconds', () => {
      const timestamp = bq.timestamp(INPUT_STRING_MICROS);
      assert.strictEqual(timestamp.value, EXPECTED_VALUE_MICROS);
    });

    it('should accept a float number', () => {
      const d = new Date();
      const f = d.valueOf() / 1000; // float seconds
      let timestamp = bq.timestamp(f);
      assert.strictEqual(timestamp.value, d.toJSON());

      timestamp = bq.timestamp(f.toString());
      assert.strictEqual(timestamp.value, d.toJSON());
    });

    it('should accept a Date object', () => {
      const timestamp = bq.timestamp(INPUT_DATE);
      assert.strictEqual(timestamp.value, EXPECTED_VALUE);
    });

    it('should accept a PreciseDate object', () => {
      const timestamp = bq.timestamp(INPUT_PRECISE_DATE);
      assert.strictEqual(timestamp.value, EXPECTED_VALUE_MICROS);
    });
  });

  describe('range', () => {
    const INPUT_DATE_RANGE = '[2020-01-01, 2020-12-31)';
    const INPUT_DATETIME_RANGE = '[2020-01-01 12:00:00, 2020-12-31 12:00:00)';
    const INPUT_TIMESTAMP_RANGE =
      '[2020-10-01 12:00:00+08, 2020-12-31 12:00:00+08)';

    it('should have the correct constructor name', () => {
      const range = bq.range(INPUT_DATE_RANGE, 'DATE');
      assert.strictEqual(range.constructor.name, 'BigQueryRange');
    });

    it('should accept a string literal', () => {
      const dateRange = bq.range(INPUT_DATE_RANGE, 'DATE');
      assert.strictEqual(dateRange.apiValue, '[2020-01-01, 2020-12-31)');
      assert.strictEqual(
        dateRange.literalValue,
        'RANGE<DATE> [2020-01-01, 2020-12-31)',
      );
      assert.deepStrictEqual(dateRange.value, {
        start: '2020-01-01',
        end: '2020-12-31',
      });

      const datetimeRange = bq.range(INPUT_DATETIME_RANGE, 'DATETIME');
      assert.strictEqual(
        datetimeRange.apiValue,
        '[2020-01-01 12:00:00, 2020-12-31 12:00:00)',
      );
      assert.strictEqual(
        datetimeRange.literalValue,
        'RANGE<DATETIME> [2020-01-01 12:00:00, 2020-12-31 12:00:00)',
      );
      assert.deepStrictEqual(datetimeRange.value, {
        start: '2020-01-01 12:00:00',
        end: '2020-12-31 12:00:00',
      });

      const timestampRange = bq.range(INPUT_TIMESTAMP_RANGE, 'TIMESTAMP');
      assert.strictEqual(
        timestampRange.apiValue,
        '[2020-10-01T04:00:00.000Z, 2020-12-31T04:00:00.000Z)',
      );
      assert.strictEqual(
        timestampRange.literalValue,
        'RANGE<TIMESTAMP> [2020-10-01T04:00:00.000Z, 2020-12-31T04:00:00.000Z)',
      );
      assert.deepStrictEqual(timestampRange.value, {
        start: '2020-10-01T04:00:00.000Z',
        end: '2020-12-31T04:00:00.000Z',
      });
    });

    it('should accept a BigQueryDate|BigQueryDatetime|BigQueryTimestamp objects', () => {
      const dateRange = bq.range({
        start: bq.date('2020-01-01'),
        end: bq.date('2020-12-31'),
      });
      assert.strictEqual(dateRange.apiValue, INPUT_DATE_RANGE);
      assert.strictEqual(
        dateRange.literalValue,
        `RANGE<DATE> ${INPUT_DATE_RANGE}`,
      );
      assert.strictEqual(dateRange.elementType, 'DATE');
      assert.deepStrictEqual(dateRange.value, {
        start: '2020-01-01',
        end: '2020-12-31',
      });

      const datetimeRange = bq.range({
        start: bq.datetime('2020-01-01 12:00:00'),
        end: bq.datetime('2020-12-31 12:00:00'),
      });
      assert.strictEqual(datetimeRange.apiValue, INPUT_DATETIME_RANGE);
      assert.strictEqual(
        datetimeRange.literalValue,
        `RANGE<DATETIME> ${INPUT_DATETIME_RANGE}`,
      );
      assert.strictEqual(datetimeRange.elementType, 'DATETIME');
      assert.deepStrictEqual(datetimeRange.value, {
        start: '2020-01-01 12:00:00',
        end: '2020-12-31 12:00:00',
      });

      const timestampRange = bq.range({
        start: bq.timestamp('2020-10-01 12:00:00+08'),
        end: bq.timestamp('2020-12-31 12:00:00+08'),
      });
      assert.strictEqual(
        timestampRange.apiValue,
        '[2020-10-01T04:00:00.000Z, 2020-12-31T04:00:00.000Z)',
      );
      assert.strictEqual(
        timestampRange.literalValue,
        'RANGE<TIMESTAMP> [2020-10-01T04:00:00.000Z, 2020-12-31T04:00:00.000Z)',
      );
      assert.strictEqual(timestampRange.elementType, 'TIMESTAMP');
      assert.deepStrictEqual(timestampRange.value, {
        start: '2020-10-01T04:00:00.000Z',
        end: '2020-12-31T04:00:00.000Z',
      });
    });

    it('should accept a start/end as string with element type', () => {
      const dateRange = bq.range(
        {
          start: '2020-01-01',
          end: '2020-12-31',
        },
        'DATE',
      );
      assert.strictEqual(dateRange.apiValue, INPUT_DATE_RANGE);
      assert.strictEqual(
        dateRange.literalValue,
        `RANGE<DATE> ${INPUT_DATE_RANGE}`,
      );
      assert.strictEqual(dateRange.elementType, 'DATE');

      const datetimeRange = bq.range(
        {
          start: '2020-01-01 12:00:00',
          end: '2020-12-31 12:00:00',
        },
        'DATETIME',
      );
      assert.strictEqual(datetimeRange.apiValue, INPUT_DATETIME_RANGE);
      assert.strictEqual(
        datetimeRange.literalValue,
        `RANGE<DATETIME> ${INPUT_DATETIME_RANGE}`,
      );
      assert.strictEqual(datetimeRange.elementType, 'DATETIME');

      const timestampRange = bq.range(
        {
          start: '2020-10-01 12:00:00+08',
          end: '2020-12-31 12:00:00+08',
        },
        'TIMESTAMP',
      );
      assert.strictEqual(
        timestampRange.apiValue,
        '[2020-10-01T04:00:00.000Z, 2020-12-31T04:00:00.000Z)',
      );
      assert.strictEqual(
        timestampRange.literalValue,
        'RANGE<TIMESTAMP> [2020-10-01T04:00:00.000Z, 2020-12-31T04:00:00.000Z)',
      );
      assert.strictEqual(timestampRange.elementType, 'TIMESTAMP');
    });

    it('should accept a Range with start and/or end missing', () => {
      const dateRange = bq.range(
        {
          start: '2020-01-01',
        },
        'DATE',
      );
      assert.strictEqual(
        dateRange.literalValue,
        'RANGE<DATE> [2020-01-01, UNBOUNDED)',
      );

      const datetimeRange = bq.range(
        {
          end: '2020-12-31 12:00:00',
        },
        'DATETIME',
      );
      assert.strictEqual(
        datetimeRange.literalValue,
        'RANGE<DATETIME> [UNBOUNDED, 2020-12-31 12:00:00)',
      );

      const timestampRange = bq.range({}, 'TIMESTAMP');
      assert.strictEqual(
        timestampRange.literalValue,
        'RANGE<TIMESTAMP> [UNBOUNDED, UNBOUNDED)',
      );
    });
  });

  describe('geography', () => {
    const INPUT_STRING = 'POINT(1 2)';

    it('should have the correct constructor name', () => {
      const geography = BigQuery.geography(INPUT_STRING);
      assert.strictEqual(geography.constructor.name, 'Geography');
    });

    it('should accept a string', () => {
      const geography = BigQuery.geography(INPUT_STRING);
      assert.strictEqual(geography.value, INPUT_STRING);
    });

    it('should call through to the static method', () => {
      const fakeGeography = {value: 'foo'};

      sandbox
        .stub(BigQuery, 'geography')
        .withArgs(INPUT_STRING)
        .returns(fakeGeography);

      const geography = bq.geography(INPUT_STRING);
      assert.strictEqual(geography, fakeGeography);
    });
  });

  describe('int', () => {
    const INPUT_STRING = '100';

    it('should call through to the static method', () => {
      const fakeInt = new BigQueryInt(INPUT_STRING);

      sandbox.stub(BigQuery, 'int').withArgs(INPUT_STRING).returns(fakeInt);

      const int = bq.int(INPUT_STRING);
      assert.strictEqual(int, fakeInt);
    });

    it('should have the correct constructor name', () => {
      const int = BigQuery.int(INPUT_STRING);
      assert.strictEqual(int.constructor.name, 'BigQueryInt');
    });
  });

  describe('BigQueryInt', () => {
    it('should store the stringified value', () => {
      const INPUT_NUM = 100;
      const int = new BigQueryInt(INPUT_NUM);
      assert.strictEqual(int.value, INPUT_NUM.toString());
    });

    describe('valueOf', () => {
      let valueObject: IntegerTypeCastValue;

      beforeEach(() => {
        valueObject = {
          integerValue: 8,
        };
      });

      describe('integerTypeCastFunction is not provided', () => {
        const expectedError = (opts: {
          integerValue: string | number;
          schemaFieldName?: string;
        }) => {
          return new Error(
            'We attempted to return all of the numeric values, but ' +
              (opts.schemaFieldName ? opts.schemaFieldName + ' ' : '') +
              'value ' +
              opts.integerValue +
              " is out of bounds of 'Number.MAX_SAFE_INTEGER'.\n" +
              "To prevent this error, please consider passing 'options.wrapIntegers' as\n" +
              '{\n' +
              '  integerTypeCastFunction: provide <your_custom_function>\n' +
              '  fields: optionally specify field name(s) to be custom casted\n' +
              '}\n',
          );
        };

        it('should throw if integerTypeCastOptions is provided but integerTypeCastFunction is not', () => {
          assert.throws(
            () =>
              new BigQueryInt(
                valueObject,
                {} as IntegerTypeCastOptions,
              ).valueOf(),
            /integerTypeCastFunction is not a function or was not provided\./,
          );
        });

        it('should throw if integer value is outside of bounds passing objects', () => {
          const largeIntegerValue = (Number.MAX_SAFE_INTEGER + 1).toString();
          const smallIntegerValue = (Number.MIN_SAFE_INTEGER - 1).toString();

          const valueObject = {
            integerValue: largeIntegerValue,
            schemaFieldName: 'field',
          };

          const valueObject2 = {
            integerValue: smallIntegerValue,
            schemaFieldName: 'field',
          };

          assert.throws(() => {
            new BigQueryInt(valueObject).valueOf();
          }, expectedError(valueObject));

          assert.throws(() => {
            new BigQueryInt(valueObject2).valueOf();
          }, expectedError(valueObject2));
        });

        it('should throw if integer value is outside of bounds passing strings or Numbers', () => {
          const largeIntegerValue = Number.MAX_SAFE_INTEGER + 1;
          const smallIntegerValue = Number.MIN_SAFE_INTEGER - 1;

          // should throw when Number is passed
          assert.throws(
            () => {
              new BigQueryInt(largeIntegerValue).valueOf();
            },
            expectedError({integerValue: largeIntegerValue}),
          );

          // should throw when string is passed
          assert.throws(
            () => {
              new BigQueryInt(smallIntegerValue.toString()).valueOf();
            },
            expectedError({integerValue: smallIntegerValue}),
          );
        });

        it('should not auto throw on initialization', () => {
          const largeIntegerValue = Number.MAX_SAFE_INTEGER + 1;

          const valueObject = {
            integerValue: largeIntegerValue,
          };

          assert.doesNotThrow(
            () => {
              new BigQueryInt(valueObject);
            },
            new RegExp(`Integer value ${largeIntegerValue} is out of bounds.`),
          );
        });

        describe('integerTypeCastFunction is provided', () => {
          it('should throw if integerTypeCastFunction is not a function', () => {
            assert.throws(
              () =>
                new BigQueryInt(valueObject, {
                  integerTypeCastFunction: {} as Function,
                }).valueOf(),
              /integerTypeCastFunction is not a function or was not provided\./,
            );
          });

          it('should custom-cast value when integerTypeCastFunction is provided', () => {
            const stub = sinon.stub();

            new BigQueryInt(valueObject, {
              integerTypeCastFunction: stub,
            }).valueOf();
            assert.ok(stub.calledOnce);
          });

          it('should custom-cast value if in `fields` specified by user', () => {
            const stub = sinon.stub();

            Object.assign(valueObject, {
              schemaFieldName: 'funField',
            });

            new BigQueryInt(valueObject, {
              integerTypeCastFunction: stub,
              fields: 'funField',
            }).valueOf();
            assert.ok(stub.calledOnce);
          });

          it('should not custom-cast value if not in `fields` specified by user', () => {
            const stub = sinon.stub();

            Object.assign(valueObject, {
              schemaFieldName: 'funField',
            });

            new BigQueryInt(valueObject, {
              integerTypeCastFunction: stub,
              fields: 'unFunField',
            }).valueOf();
            assert.ok(stub.notCalled);
          });

          it('should catch integerTypeCastFunction error and throw', () => {
            const error = new Error('My bad!');
            const stub = sinon.stub().throws(error);
            assert.throws(
              () =>
                new BigQueryInt(valueObject, {
                  integerTypeCastFunction: stub,
                }).valueOf(),
              /integerTypeCastFunction threw an error:/,
            );
          });
        });
      });

      describe('toJSON', () => {
        it('should return correct JSON', () => {
          const expected = {type: 'BigQueryInt', value: '8'};
          const JSON = new BigQueryInt(valueObject).toJSON();
          assert.deepStrictEqual(JSON, expected);
        });
      });
    });
  });

  describe('getTypeDescriptorFromValue_', () => {
    it('should return correct types', () => {
      assert.strictEqual(
        BigQuery.getTypeDescriptorFromValue_(bq.date()).type,
        'DATE',
      );
      assert.strictEqual(
        BigQuery.getTypeDescriptorFromValue_(bq.datetime('')).type,
        'DATETIME',
      );
      assert.strictEqual(
        BigQuery.getTypeDescriptorFromValue_(bq.time()).type,
        'TIME',
      );
      assert.strictEqual(
        BigQuery.getTypeDescriptorFromValue_(bq.timestamp(0)).type,
        'TIMESTAMP',
      );
      assert.strictEqual(
        BigQuery.getTypeDescriptorFromValue_(Buffer.alloc(2)).type,
        'BYTES',
      );
      assert.strictEqual(
        BigQuery.getTypeDescriptorFromValue_(true).type,
        'BOOL',
      );
      assert.strictEqual(BigQuery.getTypeDescriptorFromValue_(8).type, 'INT64');
      assert.strictEqual(
        BigQuery.getTypeDescriptorFromValue_(8.1).type,
        'FLOAT64',
      );
      assert.strictEqual(
        BigQuery.getTypeDescriptorFromValue_('hi').type,
        'STRING',
      );
      assert.strictEqual(
        BigQuery.getTypeDescriptorFromValue_(new Big('1.1')).type,
        'NUMERIC',
      );
      assert.strictEqual(
        BigQuery.getTypeDescriptorFromValue_(
          new Big('1999.9876543210123456789'),
        ).type,
        'BIGNUMERIC',
      );
      assert.strictEqual(
        BigQuery.getTypeDescriptorFromValue_(bq.int('100')).type,
        'INT64',
      );
      assert.strictEqual(
        BigQuery.getTypeDescriptorFromValue_(bq.geography('POINT (1 1')).type,
        'GEOGRAPHY',
      );
      assert.strictEqual(
        BigQuery.getTypeDescriptorFromValue_(
          bq.range(
            '[2020-10-01 12:00:00+08, 2020-12-31 12:00:00+08)',
            'TIMESTAMP',
          ),
        ).type,
        'RANGE',
      );
    });

    it('should return correct type for an array', () => {
      const type = BigQuery.getTypeDescriptorFromValue_([1]);

      assert.deepStrictEqual(type, {
        type: 'ARRAY',
        arrayType: {
          type: 'INT64',
        },
      });
    });

    it('should return correct type for a struct', () => {
      const type = BigQuery.getTypeDescriptorFromValue_({prop: 1});

      assert.deepStrictEqual(type, {
        type: 'STRUCT',
        structTypes: [
          {
            name: 'prop',
            type: {
              type: 'INT64',
            },
          },
        ],
      });
    });

    it('should throw if a type cannot be detected', () => {
      const expectedError = new RegExp(
        [
          'This value could not be translated to a BigQuery data type.',
          undefined,
        ].join('\n'),
      );

      assert.throws(() => {
        BigQuery.getTypeDescriptorFromValue_(undefined);
      }, expectedError);
    });

    it('should throw with an empty array', () => {
      assert.throws(() => {
        BigQuery.getTypeDescriptorFromValue_([]);
      }, /Parameter types must be provided for empty arrays via the 'types' field in query options./);
    });

    it('should throw with a null value', () => {
      const expectedError = new RegExp(
        "Parameter types must be provided for null values via the 'types' field in query options.",
      );

      assert.throws(() => {
        BigQuery.getTypeDescriptorFromValue_(null);
      }, expectedError);
    });
  });

  describe('getTypeDescriptorFromProvidedType_', () => {
    it('should return correct type for an array', () => {
      const type = BigQuery.getTypeDescriptorFromProvidedType_(['INT64']);

      assert.deepStrictEqual(type, {
        type: 'ARRAY',
        arrayType: {
          type: 'INT64',
        },
      });
    });

    it('should return correct type for a struct', () => {
      const type = BigQuery.getTypeDescriptorFromProvidedType_({prop: 'INT64'});

      assert.deepStrictEqual(type, {
        type: 'STRUCT',
        structTypes: [
          {
            name: 'prop',
            type: {
              type: 'INT64',
            },
          },
        ],
      });
    });

    it('should throw for invalid provided type', () => {
      const INVALID_TYPE = 'invalid';

      assert.throws(() => {
        BigQuery.getTypeDescriptorFromProvidedType_(INVALID_TYPE);
      }, /Invalid type provided:/);
    });
  });

  describe('valueToQueryParameter_', () => {
    it('should get the type', done => {
      const value = {};

      sandbox
        .stub(BigQuery, 'getTypeDescriptorFromValue_')
        .callsFake(value_ => {
          assert.strictEqual(value_, value);
          setImmediate(done);
          return {
            type: '',
          };
        });

      const queryParameter = BigQuery.valueToQueryParameter_(value);
      assert.strictEqual(queryParameter.parameterValue.value, value);
    });

    it('should get the provided type', done => {
      const value = {};
      const providedType = 'STRUCT';

      sandbox
        .stub(BigQuery, 'getTypeDescriptorFromProvidedType_')
        .callsFake(providedType_ => {
          assert.strictEqual(providedType_, providedType);
          setImmediate(done);
          return {
            type: '',
          };
        });

      const queryParameter = BigQuery.valueToQueryParameter_(
        value,
        providedType,
      );

      assert.strictEqual(queryParameter.parameterValue.value, value);
    });

    it('should format a Date', () => {
      const date = new Date();
      const expectedValue = date.toJSON().replace(/(.*)T(.*)Z$/, '$1 $2');

      sandbox.stub(BigQuery, 'timestamp').callsFake(value => {
        assert.strictEqual(value, date);
        return {
          value: expectedValue,
        };
      });

      sandbox.stub(BigQuery, 'getTypeDescriptorFromValue_').returns({
        type: 'TIMESTAMP',
      });

      const queryParameter = BigQuery.valueToQueryParameter_(date);
      assert.strictEqual(queryParameter.parameterValue.value, expectedValue);
    });

    it('should locate the value on DATETIME objects', () => {
      const datetime = {
        value: 'value',
      };

      sandbox.stub(BigQuery, 'getTypeDescriptorFromValue_').returns({
        type: 'DATETIME',
      });

      const queryParameter = BigQuery.valueToQueryParameter_(datetime);
      assert.strictEqual(queryParameter.parameterValue.value, datetime.value);
    });

    it('should locate the value on nested DATETIME objects', () => {
      const datetimes = [
        {
          value: 'value',
        },
      ];

      sandbox.stub(BigQuery, 'getTypeDescriptorFromValue_').returns({
        type: 'ARRAY',
        arrayType: {type: 'DATETIME'},
      });

      const {parameterValue} = BigQuery.valueToQueryParameter_(datetimes);
      assert.deepStrictEqual(parameterValue.arrayValues, datetimes);
    });

    it('should locate the value on TIME objects', () => {
      const time = {
        value: 'value',
      };

      sandbox.stub(BigQuery, 'getTypeDescriptorFromValue_').returns({
        type: 'TIME',
      });

      const queryParameter = BigQuery.valueToQueryParameter_(time);
      assert.strictEqual(queryParameter.parameterValue.value, time.value);
    });

    it('should locate the value on nested TIME objects', () => {
      const times = [
        {
          value: 'value',
        },
      ];

      sandbox.stub(BigQuery, 'getTypeDescriptorFromValue_').returns({
        type: 'ARRAY',
        arrayType: {type: 'TIME'},
      });

      const {parameterValue} = BigQuery.valueToQueryParameter_(times);
      assert.deepStrictEqual(parameterValue.arrayValues, times);
    });

    it('should locate the value on BigQueryInt objects', () => {
      const int = new BigQueryInt(100);

      sandbox.stub(BigQuery, 'getTypeDescriptorFromValue_').returns({
        type: 'INT64',
      });

      const queryParameter = BigQuery.valueToQueryParameter_(int);
      assert.strictEqual(queryParameter.parameterValue.value, int.value);
    });

    it('should locate the value on nested BigQueryInt objects', () => {
      const ints = [new BigQueryInt('100')];
      const expected = [{value: '100'}];

      sandbox.stub(BigQuery, 'getTypeDescriptorFromValue_').returns({
        type: 'ARRAY',
        arrayType: {type: 'INT64'},
      });

      const {parameterValue} = BigQuery.valueToQueryParameter_(ints);
      assert.deepStrictEqual(parameterValue.arrayValues, expected);
    });

    it('should format an array', () => {
      const array = [1];

      sandbox.stub(BigQuery, 'getTypeDescriptorFromValue_').returns({
        type: 'ARRAY',
        arrayType: {type: 'INT64'},
      });

      const queryParameter = BigQuery.valueToQueryParameter_(array);
      const arrayValues = queryParameter.parameterValue.arrayValues;
      assert.deepStrictEqual(arrayValues, [
        {
          value: array[0],
        },
      ]);
    });

    it('should format an array with provided type', () => {
      const array = [[1]];
      const providedType = [['INT64']];

      sandbox.stub(BigQuery, 'getTypeDescriptorFromProvidedType_').returns({
        type: 'ARRAY',
        arrayType: {
          type: 'ARRAY',
          arrayType: {type: 'INT64'},
        },
      });

      const queryParameter = BigQuery.valueToQueryParameter_(
        array,
        providedType,
      );
      const arrayValues = queryParameter.parameterValue.arrayValues;
      assert.deepStrictEqual(arrayValues, [
        {
          arrayValues: [
            {
              value: array[0][0],
            },
          ],
        },
      ]);
    });

    it('should format a struct', () => {
      const struct = {
        key: 'value',
      };

      const expectedParameterValue = {};

      sandbox.stub(BigQuery, 'getTypeDescriptorFromValue_').callsFake(() => {
        sandbox.stub(BigQuery, 'valueToQueryParameter_').callsFake(value => {
          assert.strictEqual(value, struct.key);
          return {
            parameterValue: expectedParameterValue,
          };
        });

        return {
          type: 'STRUCT',
        };
      });

      const queryParameter = BigQuery.valueToQueryParameter_(struct);
      const structValues = queryParameter.parameterValue.structValues;

      assert.strictEqual(structValues.key, expectedParameterValue);
    });

    it('should format a struct with provided type', () => {
      const struct = {a: 1};
      const providedType = {a: 'INT64'};

      const getTypeStub = sandbox.stub(
        BigQuery,
        'getTypeDescriptorFromProvidedType_',
      );
      getTypeStub.onFirstCall().returns({
        type: 'STRUCT',
        structTypes: [
          {
            name: 'a',
            type: {
              type: 'INT64',
            },
          },
        ],
      });
      getTypeStub.onSecondCall().returns({type: 'INT64'});

      const queryParameter = BigQuery.valueToQueryParameter_(
        struct,
        providedType,
      );
      const structValues = queryParameter.parameterValue.structValues;
      assert.deepStrictEqual(structValues, {
        a: {
          value: 1,
        },
      });
    });

    it('should format an array of structs', () => {
      const structs = [{name: 'Stephen'}];
      const expectedParam = {
        parameterType: {
          type: 'ARRAY',
          arrayType: {
            type: 'STRUCT',
            structTypes: [{name: 'name', type: {type: 'STRING'}}],
          },
        },
        parameterValue: {
          arrayValues: [
            {
              structValues: {
                name: {value: 'Stephen'},
              },
            },
          ],
        },
      };

      const param = BigQuery.valueToQueryParameter_(structs);
      assert.deepStrictEqual(param, expectedParam);
    });

    it('should format JSON types', () => {
      const typeName = 'JSON';
      const value = {
        foo: 'bar',
      };
      const strValue = JSON.stringify(value);
      assert.deepStrictEqual(BigQuery.valueToQueryParameter_(value, typeName), {
        parameterType: {
          type: typeName,
        },
        parameterValue: {
          value: strValue,
        },
      });
      assert.deepStrictEqual(
        BigQuery.valueToQueryParameter_(strValue, typeName),
        {
          parameterType: {
            type: typeName,
          },
          parameterValue: {
            value: strValue,
          },
        },
      );
    });

    it('should format all other types', () => {
      const typeName = 'ANY-TYPE';
      sandbox.stub(BigQuery, 'getTypeDescriptorFromValue_').returns({
        type: typeName,
      });
      assert.deepStrictEqual(BigQuery.valueToQueryParameter_(8), {
        parameterType: {
          type: typeName,
        },
        parameterValue: {
          value: 8,
        },
      });
    });

    describe('_getValue', () => {
      it('should return currect value', () => {
        const value = 'VALUE';
        const type = 'TYPE';

        sandbox.stub(BigQuery, '_isCustomType').returns(false);
        assert.strictEqual(BigQuery._getValue(value, type), value);
      });

      it('should return value of custom type', () => {
        const geography = bq.geography('POINT (1 1)');

        sandbox.stub(BigQuery, '_isCustomType').returns(true);
        assert.strictEqual(
          BigQuery._getValue(geography, geography.type),
          geography.value,
        );
      });

      it('should handle null values', () => {
        const value = null;
        const type = 'TYPE';

        assert.strictEqual(BigQuery._getValue(value, type), value);
      });
    });

    describe('_isCustomType', () => {
      it('should identify custom types', () => {
        const time = {type: 'TIME'};
        const date = {type: 'DATE'};
        const geo = {type: 'GEOGRAPHY'};
        const range = {type: 'RANGE'};

        assert.strictEqual(BigQuery._isCustomType(time), true);
        assert.strictEqual(BigQuery._isCustomType(date), true);
        assert.strictEqual(BigQuery._isCustomType(geo), true);
        assert.strictEqual(BigQuery._isCustomType(range), true);
      });
    });
  });

  describe('createDataset', () => {
    const DATASET_ID = 'kittens';

    it('should create a dataset', done => {
      bq.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/datasets');
        assert.deepStrictEqual(reqOpts.json.datasetReference, {
          datasetId: DATASET_ID,
        });

        done();
      };

      bq.createDataset(DATASET_ID, assert.ifError);
    });

    it('should create a dataset on a different project', done => {
      bq.makeAuthenticatedRequest = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.projectId, ANOTHER_PROJECT_ID);
        assert.strictEqual(
          reqOpts.uri,
          `https://bigquery.googleapis.com/bigquery/v2/projects/${ANOTHER_PROJECT_ID}/datasets`,
        );
        assert.deepStrictEqual(reqOpts.json.datasetReference, {
          datasetId: DATASET_ID,
        });

        done();
      };

      bq.createDataset(
        DATASET_ID,
        {
          projectId: ANOTHER_PROJECT_ID,
        },
        assert.ifError,
      );
    });

    it('should send the location if available', done => {
      const bq = new BigQuery({
        projectId: PROJECT_ID,
        location: LOCATION,
      });

      bq.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(reqOpts.json.location, LOCATION);
        done();
      };

      bq.createDataset(DATASET_ID, assert.ifError);
    });

    it('should not modify the original options object', done => {
      const options = {
        a: 'b',
        c: 'd',
      };

      const originalOptions = Object.assign({}, options);

      bq.request = (reqOpts: DecorateRequestOptions) => {
        assert.notStrictEqual(reqOpts.json, options);
        assert.deepStrictEqual(options, originalOptions);
        done();
      };

      bq.createDataset(DATASET_ID, options, assert.ifError);
    });

    it('should return an error to the callback', done => {
      const error = new Error('Error.');

      bq.request = (reqOpts: DecorateRequestOptions, callback: Function) => {
        callback(error);
      };

      bq.createDataset(DATASET_ID, (err: Error) => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should return a Dataset object', done => {
      bq.request = (reqOpts: DecorateRequestOptions, callback: Function) => {
        callback(null, {});
      };

      bq.createDataset(DATASET_ID, (err: Error, dataset: Dataset) => {
        assert.ifError(err);
        assert(dataset instanceof FakeDataset);
        done();
      });
    });

    it('should return an apiResponse', done => {
      const resp = {success: true};

      bq.request = (reqOpts: DecorateRequestOptions, callback: Function) => {
        callback(null, resp);
      };

      bq.createDataset(
        DATASET_ID,
        (err: Error, dataset: Dataset, apiResponse: {}) => {
          assert.ifError(err);
          assert.deepStrictEqual(apiResponse, resp);
          done();
        },
      );
    });

    it('should assign metadata to the Dataset object', done => {
      const metadata = {a: 'b', c: 'd'};

      bq.request = (reqOpts: DecorateRequestOptions, callback: Function) => {
        callback(null, metadata);
      };

      bq.createDataset(DATASET_ID, (err: Error, dataset: Dataset) => {
        assert.ifError(err);
        assert.deepStrictEqual(dataset.metadata, metadata);
        done();
      });
    });
  });

  describe('createJob', () => {
    const RESPONSE = {
      status: {
        state: 'RUNNING',
      },
      jobReference: {
        location: LOCATION,
      },
    };

    let fakeJobId: string;

    beforeEach(() => {
      fakeJobId = crypto.randomUUID();

      fakeCrypto.randomUUID = _ => {
        return fakeJobId as crypto.UUID;
      };
    });

    it('should make the correct request', done => {
      const fakeOptions = {
        a: 'b',
      };

      const expectedOptions = Object.assign({}, fakeOptions, {
        jobReference: {
          projectId: bq.projectId,
          jobId: fakeJobId,
          location: undefined,
        },
      });

      bq.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/jobs');
        assert.deepStrictEqual(reqOpts.json, expectedOptions);
        assert.notStrictEqual(reqOpts.json, fakeOptions);
        done();
      };

      bq.createJob(fakeOptions, assert.ifError);
    });

    it('should accept a job prefix', done => {
      const jobPrefix = 'abc-';
      const expectedJobId = jobPrefix + fakeJobId;
      const options = {
        jobPrefix,
      };

      bq.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(reqOpts.json.jobReference.jobId, expectedJobId);
        assert.strictEqual(reqOpts.json.jobPrefix, undefined);
        done();
      };

      bq.createJob(options, assert.ifError);
    });

    it('should accept a location', done => {
      const options = {
        location: LOCATION,
      };

      bq.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(reqOpts.json.jobReference.location, LOCATION);
        assert.strictEqual(reqOpts.json.location, undefined);
        done();
      };

      bq.createJob(options, assert.ifError);
    });

    it('should accept a job id', done => {
      const jobId = 'job-id';
      const options = {jobId};

      bq.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(reqOpts.json.jobReference.jobId, jobId);
        assert.strictEqual(reqOpts.json.jobId, undefined);
        done();
      };

      bq.createJob(options, assert.ifError);
    });

    it('should use the user defined location if available', done => {
      const bq = new BigQuery({
        projectId: PROJECT_ID,
        location: LOCATION,
      });

      bq.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(reqOpts.json.jobReference.location, LOCATION);
        done();
      };

      bq.createJob({}, assert.ifError);
    });

    it('should return a non-409 request error', done => {
      const response = {};
      const error = new Error('err.');

      bq.request = (reqOpts: DecorateRequestOptions, callback: Function) => {
        callback(error, response);
      };

      bq.createJob({}, (err: Error, job: Job, resp: {}) => {
        assert.strictEqual(err, error);
        assert.strictEqual(job, null);
        assert.strictEqual(resp, response);
        done();
      });
    });

    it('should refresh metadata when API returns 409', done => {
      bq.job = () => {
        return {
          getMetadata: async () => [RESPONSE],
        };
      };

      bq.request = (reqOpts: DecorateRequestOptions, callback: Function) => {
        const error = new util.ApiError('Error.');
        error.code = 409;
        callback(error);
      };

      bq.createJob({}, (err: Error, job: Job, resp: {}) => {
        assert.ifError(err);
        assert.strictEqual(resp, RESPONSE);
        done();
      });
    });

    it('should return 409 if the user provided the job ID', done => {
      const error = new util.ApiError('Error.');
      error.code = 409;

      bq.request = (reqOpts: DecorateRequestOptions, callback: Function) => {
        callback(error);
      };

      bq.createJob({jobId: 'job-id'}, (err: Error) => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should return 409 if dryRun is true', done => {
      const error = new util.ApiError('Error.');
      error.code = 409;

      bq.request = (reqOpts: DecorateRequestOptions, callback: Function) => {
        callback(error);
      };

      bq.createJob({configuration: {dryRun: true}}, (err: Error) => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should return any status errors', done => {
      const errors = [{reason: 'notFound'}];
      const response = extend(true, {}, RESPONSE, {
        status: {errors},
      });

      bq.request = (reqOpts: DecorateRequestOptions, callback: Function) => {
        callback(null, response);
      };

      bq.createJob({}, (err: FakeApiError) => {
        assert(err instanceof FakeApiError);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const errorOpts: any = err.calledWith_[0];
        assert.deepStrictEqual(errorOpts.errors, errors);
        assert.strictEqual(errorOpts.response, response);
        done();
      });
    });

    it('should return a job object', done => {
      const fakeJob = {};

      bq.job = (jobId: string, options: JobOptions) => {
        assert.strictEqual(jobId, fakeJobId);
        assert.strictEqual(options.location, LOCATION);
        return fakeJob;
      };

      bq.request = (reqOpts: DecorateRequestOptions, callback: Function) => {
        callback(null, RESPONSE);
      };

      bq.createJob({location: LOCATION}, (err: Error, job: Job, resp: {}) => {
        assert.ifError(err);
        assert.strictEqual(job, fakeJob);
        assert.strictEqual(job.metadata, RESPONSE);
        assert.strictEqual(resp, RESPONSE);
        done();
      });
    });

    it('should update the job location in the official API format', done => {
      const fakeJob: {location?: string} = {};

      bq.job = () => {
        return fakeJob;
      };

      bq.request = (reqOpts: DecorateRequestOptions, callback: Function) => {
        callback(null, RESPONSE);
      };

      bq.createJob({}, (err: Error) => {
        assert.ifError(err);
        assert.strictEqual(fakeJob.location, LOCATION);
        done();
      });
    });
  });

  describe('createQueryJob', () => {
    const QUERY_STRING = 'SELECT * FROM [dataset.table]';

    it('should throw if neither a query or a pageToken is provided', () => {
      assert.throws(() => {
        bq.createQueryJob();
      }, /SQL query string is required/);

      assert.throws(() => {
        bq.createQueryJob({noQuery: 'here'});
      }, /SQL query string is required/);

      assert.doesNotThrow(() => {
        bq.createQueryJob({pageToken: 'NEXT_PAGE_TOKEN'}, util.noop);
      });
    });

    describe('with destination', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let dataset: any;
      const TABLE_ID = 'table-id';

      beforeEach(() => {
        dataset = {
          bigQuery: bq,
          id: 'dataset-id',
          createTable: util.noop,
        };
      });

      it('should throw if a destination is not a table', () => {
        assert.throws(() => {
          bq.createQueryJob({
            query: 'query',
            destination: 'not a table',
          });
        }, /Destination must be a Table/);
      });

      it('should assign destination table to request body', done => {
        bq.request = (reqOpts: DecorateRequestOptions) => {
          assert.deepStrictEqual(
            reqOpts.json.configuration.query.destinationTable,
            {
              datasetId: dataset.id,
              projectId: dataset.projectId,
              tableId: TABLE_ID,
            },
          );

          done();
        };

        bq.createQueryJob({
          query: 'query',
          destination: new FakeTable(dataset, TABLE_ID),
        });
      });

      it('should delete `destination` prop from request body', done => {
        bq.request = (reqOpts: DecorateRequestOptions) => {
          const body = reqOpts.json;
          assert.strictEqual(body.configuration.query.destination, undefined);
          done();
        };

        bq.createQueryJob({
          query: 'query',
          destination: new FakeTable(dataset, TABLE_ID),
        });
      });
    });

    describe('SQL parameters', () => {
      const NAMED_PARAMS = {
        key: 'value',
      };

      const POSITIONAL_PARAMS = ['value'];

      const NAMED_TYPES = {key: 'STRING'};

      const POSITIONAL_TYPES = ['STRING'];

      it('should delete the params option', done => {
        bq.createJob = (reqOpts: JobOptions) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          assert.strictEqual((reqOpts as any).params, undefined);
          done();
        };

        bq.createQueryJob(
          {
            query: QUERY_STRING,
            params: NAMED_PARAMS,
          },
          assert.ifError,
        );
      });

      it('should not modify queryParameters if params is not informed', done => {
        bq.createJob = (reqOpts: JobOptions) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          assert.strictEqual((reqOpts as any).params, undefined);
          assert.deepStrictEqual(
            reqOpts.configuration?.query?.queryParameters,
            NAMED_PARAMS,
          );
          done();
        };

        bq.createQueryJob(
          {
            query: QUERY_STRING,
            queryParameters: NAMED_PARAMS,
          },
          assert.ifError,
        );
      });

      describe('named', () => {
        it('should set the correct parameter mode', done => {
          bq.createJob = (reqOpts: JobOptions) => {
            const query = reqOpts.configuration!.query!;
            assert.strictEqual(query.parameterMode, 'named');
            done();
          };

          bq.createQueryJob(
            {
              query: QUERY_STRING,
              params: NAMED_PARAMS,
            },
            assert.ifError,
          );
        });

        it('should set the correct query parameters', done => {
          const queryParameter = {};

          sandbox.replace(BigQuery, 'valueToQueryParameter_', (value: {}) => {
            assert.strictEqual(value, NAMED_PARAMS.key);
            return queryParameter;
          });

          bq.createJob = (reqOpts: JobOptions) => {
            const query = reqOpts.configuration!.query!;
            assert.strictEqual(query.queryParameters![0], queryParameter);
            assert.strictEqual(query.queryParameters![0].name, 'key');
            done();
          };

          bq.createQueryJob(
            {
              query: QUERY_STRING,
              params: NAMED_PARAMS,
            },
            assert.ifError,
          );
        });

        it('should allow for optional parameter types', () => {
          const queryParameter = {};

          sandbox.replace(
            BigQuery,
            'valueToQueryParameter_',
            (value: {}, providedType: string) => {
              assert.strictEqual(value, NAMED_PARAMS.key);
              assert.strictEqual(providedType, NAMED_TYPES.key);
              return queryParameter;
            },
          );
          bq.createJob = (reqOpts: JobOptions) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            assert.strictEqual((reqOpts as any).params, undefined);
          };

          bq.createQueryJob(
            {
              query: QUERY_STRING,
              params: NAMED_PARAMS,
              types: NAMED_TYPES,
            },
            assert.ifError,
          );
        });

        it('should allow for providing only some parameter types', () => {
          const queryParameter = {};

          sandbox.replace(BigQuery, 'valueToQueryParameter_', (value: {}) => {
            assert.strictEqual(value, NAMED_PARAMS.key);
            return queryParameter;
          });

          bq.createJob = (reqOpts: JobOptions) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            assert.strictEqual((reqOpts as any).params, undefined);
          };

          bq.createQueryJob(
            {
              query: QUERY_STRING,
              params: NAMED_PARAMS,
              types: {},
            },
            assert.ifError,
          );
        });

        it('should throw for invalid type structure provided', () => {
          assert.throws(() => {
            bq.createQueryJob({
              query: QUERY_STRING,
              params: NAMED_PARAMS,
              types: POSITIONAL_TYPES,
            });
          }, /Provided types must match the value type passed to `params`/);
        });
      });

      describe('positional', () => {
        it('should set the correct parameter mode', done => {
          const queryParameter = {};

          sandbox.replace(BigQuery, 'valueToQueryParameter_', (value: {}) => {
            return queryParameter;
          });

          bq.createJob = (reqOpts: JobOptions) => {
            const query = reqOpts.configuration!.query!;
            assert.strictEqual(query.parameterMode, 'positional');
            done();
          };

          bq.createQueryJob(
            {
              query: QUERY_STRING,
              params: POSITIONAL_PARAMS,
            },
            assert.ifError,
          );
        });

        it('should set the correct query parameters', done => {
          const queryParameter = {};

          sandbox.replace(BigQuery, 'valueToQueryParameter_', (value: {}) => {
            assert.strictEqual(value, POSITIONAL_PARAMS[0]);
            return queryParameter;
          });

          bq.createJob = (reqOpts: JobOptions) => {
            const query = reqOpts.configuration!.query!;
            assert.strictEqual(query.queryParameters![0], queryParameter);
            done();
          };

          bq.createQueryJob(
            {
              query: QUERY_STRING,
              params: POSITIONAL_PARAMS,
            },
            assert.ifError,
          );
        });

        it('should convert value and type to query parameter', done => {
          const fakeQueryParameter = {fake: 'query parameter'};

          bq.createJob = (reqOpts: JobOptions) => {
            const queryParameters =
              reqOpts.configuration!.query!.queryParameters;
            assert.deepStrictEqual(queryParameters, [fakeQueryParameter]);
            done();
          };

          sandbox
            .stub(BigQuery, 'valueToQueryParameter_')
            .callsFake((value, type) => {
              assert.strictEqual(value, POSITIONAL_PARAMS[0]);
              assert.strictEqual(type, POSITIONAL_TYPES[0]);
              return fakeQueryParameter;
            });

          bq.createQueryJob({
            query: QUERY_STRING,
            params: POSITIONAL_PARAMS,
            types: POSITIONAL_TYPES,
          });
        });

        it('should allow for optional parameter types', () => {
          bq.createJob = (reqOpts: JobOptions) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            assert.strictEqual((reqOpts as any).params, undefined);
          };

          bq.createQueryJob(
            {
              query: QUERY_STRING,
              params: POSITIONAL_PARAMS,
              types: POSITIONAL_TYPES,
            },
            assert.ifError,
          );
        });

        it('should throw for invalid type structure provided for positional params', () => {
          assert.throws(() => {
            bq.createQueryJob({
              query: QUERY_STRING,
              params: POSITIONAL_PARAMS,
              types: NAMED_TYPES,
            });
          }, /Provided types must match the value type passed to `params`/);
        });

        it('should throw for incorrect number of types provided for positional params', () => {
          const ADDITIONAL_TYPES = ['string', 'string'];
          assert.throws(() => {
            bq.createQueryJob({
              query: QUERY_STRING,
              params: POSITIONAL_PARAMS,
              types: ADDITIONAL_TYPES,
            });
          }, /Incorrect number of parameter types provided./);
        });
      });
    });

    it('should accept the dryRun options', done => {
      const options = {
        query: QUERY_STRING,
        dryRun: true,
      };

      bq.createJob = (reqOpts: JobOptions) => {
        assert.strictEqual(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (reqOpts.configuration!.query as any).dryRun,
          undefined,
        );
        assert.strictEqual(reqOpts.configuration!.dryRun, options.dryRun);
        done();
      };

      bq.createQueryJob(options, assert.ifError);
    });

    it('should accept the label options', done => {
      const options = {
        query: QUERY_STRING,
        labels: {foo: 'bar'},
      };

      bq.createJob = (reqOpts: JobOptions) => {
        assert.strictEqual(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (reqOpts.configuration!.query as any).labels,
          undefined,
        );
        assert.deepStrictEqual(reqOpts.configuration!.labels, options.labels);
        done();
      };

      bq.createQueryJob(options, assert.ifError);
    });

    it('should accept a job prefix', done => {
      const options = {
        query: QUERY_STRING,
        jobPrefix: 'hi',
      };

      bq.createJob = (reqOpts: JobOptions) => {
        assert.strictEqual(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (reqOpts.configuration!.query as any).jobPrefix,
          undefined,
        );
        assert.strictEqual(reqOpts.jobPrefix, options.jobPrefix);
        done();
      };

      bq.createQueryJob(options, assert.ifError);
    });

    it('should accept a reservation id', done => {
      const options = {
        query: QUERY_STRING,
        reservation: 'reservation/1',
      };

      bq.createJob = (reqOpts: JobOptions) => {
        assert.strictEqual(reqOpts.configuration?.reservation, 'reservation/1');
        done();
      };

      bq.createQueryJob(options, assert.ifError);
    });

    it('should accept a location', done => {
      const options = {
        query: QUERY_STRING,
        location: LOCATION,
      };

      bq.createJob = (reqOpts: JobOptions) => {
        assert.strictEqual(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (reqOpts.configuration!.query as any).location,
          undefined,
        );
        assert.strictEqual(reqOpts.location, LOCATION);
        done();
      };

      bq.createQueryJob(options, assert.ifError);
    });

    it('should accept a job id', done => {
      const options = {
        query: QUERY_STRING,
        jobId: 'jobId',
      };

      bq.createJob = (reqOpts: JobOptions) => {
        assert.strictEqual(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (reqOpts.configuration!.query as any).jobId,
          undefined,
        );
        assert.strictEqual(reqOpts.jobId, options.jobId);
        done();
      };

      bq.createQueryJob(options, assert.ifError);
    });

    it('should accept the jobTimeoutMs options', done => {
      const options = {
        query: QUERY_STRING,
        jobTimeoutMs: 1000,
      };

      bq.createJob = (reqOpts: JobOptions) => {
        assert.strictEqual(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (reqOpts.configuration!.query as any).jobTimeoutMs,
          undefined,
        );
        assert.strictEqual(
          reqOpts.configuration!.jobTimeoutMs,
          `${options.jobTimeoutMs}`,
        );
        done();
      };

      bq.createQueryJob(options, assert.ifError);
    });

    it('should pass the callback to createJob', done => {
      bq.createJob = (reqOpts: DecorateRequestOptions, callback: Function) => {
        callback(); // the done fn
      };

      bq.createQueryJob(QUERY_STRING, done);
    });
  });

  describe('dataset', () => {
    const DATASET_ID = 'dataset-id';

    it('should throw an error if the id is missing', () => {
      const expectedErr = /A dataset ID is required\./;
      assert.throws(() => bq.dataset(), expectedErr);
    });

    it('returns a Dataset instance', () => {
      const ds = bq.dataset(DATASET_ID);
      assert(ds instanceof FakeDataset);
    });

    it('should scope the correct dataset', () => {
      const ds = bq.dataset(DATASET_ID);
      const args = ds.calledWith_;

      assert.strictEqual(args[0], bq);
      assert.strictEqual(args[1], DATASET_ID);
    });

    it('should accept dataset metadata', () => {
      const options = {location: 'US'};
      const ds = bq.dataset(DATASET_ID, options);
      const args = ds.calledWith_;

      assert.strictEqual(args[2], options);
    });

    it('should pass the location if available', () => {
      const bq = new BigQuery({
        projectId: PROJECT_ID,
        location: LOCATION,
      });

      const options = {a: 'b'};
      const expectedOptions = Object.assign({location: LOCATION}, options);

      const ds = bq.dataset(DATASET_ID, options);
      const args = ds.calledWith_;

      assert.deepStrictEqual(args[2], expectedOptions);
      assert.notStrictEqual(args[2], options);
    });
  });

  describe('getDatasets', () => {
    it('should get datasets from the api', done => {
      bq.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(reqOpts.uri, '/datasets');
        assert.deepStrictEqual(reqOpts.qs, {});

        done();
      };

      bq.getDatasets(assert.ifError);
    });

    it('should accept query', done => {
      const queryObject = {all: true, maxResults: 8, pageToken: 'token'};

      bq.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(reqOpts.qs, queryObject);
        done();
      };

      bq.getDatasets(queryObject, assert.ifError);
    });

    it('should default the query to an empty object', done => {
      bq.request = (reqOpts: DecorateRequestOptions) => {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };
      bq.getDatasets(assert.ifError);
    });

    it('should return error to callback', done => {
      const error = new Error('Error.');

      bq.request = (reqOpts: DecorateRequestOptions, callback: Function) => {
        callback(error);
      };

      bq.getDatasets((err: Error) => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should return Dataset objects', done => {
      const datasetId = 'datasetName';

      bq.request = (reqOpts: DecorateRequestOptions, callback: Function) => {
        callback(null, {
          datasets: [
            {
              datasetReference: {datasetId},
              location: LOCATION,
            },
          ],
        });
      };

      bq.getDatasets((err: Error, datasets: FakeDataset[]) => {
        assert.ifError(err);

        const dataset = datasets[0];
        const args = dataset.calledWith_;

        assert(dataset instanceof FakeDataset);
        assert.strictEqual(args[0], bq);
        assert.strictEqual(args[1], datasetId);
        assert.deepStrictEqual(args[2], {location: LOCATION});
        done();
      });
    });

    it('should return Dataset objects', done => {
      const resp = {success: true};

      bq.request = (reqOpts: DecorateRequestOptions, callback: Function) => {
        callback(null, resp);
      };

      bq.getDatasets(
        (err: Error, datasets: {}, nextQuery: {}, apiResponse: {}) => {
          assert.ifError(err);
          assert.strictEqual(apiResponse, resp);
          done();
        },
      );
    });

    it('should assign metadata to the Dataset objects', done => {
      const datasetObjects = [
        {
          a: 'b',
          c: 'd',
          datasetReference: {
            datasetId: 'datasetName',
          },
        },
      ];

      bq.request = (reqOpts: DecorateRequestOptions, callback: Function) => {
        callback(null, {datasets: datasetObjects});
      };

      bq.getDatasets((err: Error, datasets: Dataset[]) => {
        assert.ifError(err);
        assert.strictEqual(datasets[0].metadata, datasetObjects[0]);
        done();
      });
    });

    it('should return token if more results exist', done => {
      const token = 'token';

      bq.request = (reqOpts: DecorateRequestOptions, callback: Function) => {
        callback(null, {nextPageToken: token});
      };

      bq.getDatasets((err: Error, datasets: Dataset[], nextQuery: {}) => {
        assert.deepStrictEqual(nextQuery, {
          pageToken: token,
        });
        done();
      });
    });

    it('should fetch datasets from a different project', done => {
      const queryObject = {projectId: ANOTHER_PROJECT_ID};

      bq.makeAuthenticatedRequest = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(
          reqOpts.uri,
          `https://bigquery.googleapis.com/bigquery/v2/projects/${ANOTHER_PROJECT_ID}/datasets`,
        );
        done();
      };

      bq.getDatasets(queryObject, assert.ifError);
    });
  });

  describe('getJobs', () => {
    it('should get jobs from the api', done => {
      bq.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(reqOpts.uri, '/jobs');
        assert.deepStrictEqual(reqOpts.qs, {});
        assert.deepStrictEqual(reqOpts.useQuerystring, true);
        done();
      };

      bq.getJobs(assert.ifError);
    });

    it('should accept query', done => {
      const queryObject = {
        allUsers: true,
        maxResults: 8,
        pageToken: 'token',
        projection: 'full',
        stateFilter: 'done',
      };

      bq.request = (reqOpts: DecorateRequestOptions) => {
        assert.deepStrictEqual(reqOpts.qs, queryObject);
        done();
      };

      bq.getJobs(queryObject, assert.ifError);
    });

    it('should default the query to an object', done => {
      bq.request = (reqOpts: DecorateRequestOptions) => {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };
      bq.getJobs(assert.ifError);
    });

    it('should return error to callback', done => {
      const error = new Error('Error.');

      bq.request = (reqOpts: DecorateRequestOptions, callback: Function) => {
        callback(error);
      };

      bq.getJobs((err: Error) => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should return Job objects', done => {
      bq.request = (reqOpts: DecorateRequestOptions, callback: Function) => {
        callback(null, {
          jobs: [
            {
              id: JOB_ID,
              jobReference: {
                jobId: JOB_ID,
                location: LOCATION,
              },
            },
          ],
        });
      };

      bq.getJobs((err: Error, jobs: FakeJob[]) => {
        assert.ifError(err);

        const job = jobs[0];
        const args = job.calledWith_;

        assert(job instanceof FakeJob);
        assert.strictEqual(args[0], bq);
        assert.strictEqual(args[1], JOB_ID);
        assert.deepStrictEqual(args[2], {location: LOCATION});
        done();
      });
    });

    it('should return apiResponse', done => {
      const resp = {
        jobs: [
          {
            id: JOB_ID,
            jobReference: {
              jobId: JOB_ID,
            },
          },
        ],
      };

      bq.request = (reqOpts: DecorateRequestOptions, callback: Function) => {
        callback(null, resp);
      };

      bq.getJobs((err: Error, jobs: Job[], nextQuery: {}, apiResponse: {}) => {
        assert.ifError(err);
        assert.strictEqual(resp, apiResponse);
        done();
      });
    });

    it('should assign metadata to the Job objects', done => {
      const jobObjects = [
        {
          a: 'b',
          c: 'd',
          id: JOB_ID,
          jobReference: {
            jobId: JOB_ID,
          },
        },
      ];

      bq.request = (reqOpts: DecorateRequestOptions, callback: Function) => {
        callback(null, {jobs: jobObjects});
      };

      bq.getJobs((err: Error, jobs: Job[]) => {
        assert.ifError(err);
        assert.strictEqual(jobs[0].metadata, jobObjects[0]);
        done();
      });
    });

    it('should return token if more results exist', done => {
      const token = 'token';

      bq.request = (reqOpts: DecorateRequestOptions, callback: Function) => {
        callback(null, {nextPageToken: token});
      };

      bq.getJobs((err: Error, jobs: Job[], nextQuery: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(nextQuery, {
          pageToken: token,
        });
        done();
      });
    });
  });

  describe('job', () => {
    it('should return a Job instance', () => {
      const job = bq.job(JOB_ID);
      assert(job instanceof FakeJob);
    });

    it('should scope the correct job', () => {
      const job = bq.job(JOB_ID);
      const args = job.calledWith_;

      assert.strictEqual(args[0], bq);
      assert.strictEqual(args[1], JOB_ID);
    });

    it('should pass the options object', () => {
      const options = {a: 'b'};
      const job = bq.job(JOB_ID, options);

      assert.strictEqual(job.calledWith_[2], options);
    });

    it('should pass in the user specified location', () => {
      const bq = new BigQuery({
        projectId: PROJECT_ID,
        location: LOCATION,
      });

      const options = {a: 'b'};
      const expectedOptions = Object.assign({location: LOCATION}, options);

      const job = bq.job(JOB_ID, options);
      const args = job.calledWith_;

      assert.deepStrictEqual(args[2], expectedOptions);
      assert.notStrictEqual(args[2], options);
    });
  });

  describe('query', () => {
    const FAKE_ROWS = [{}, {}, {}];
    const FAKE_RESPONSE = {};
    const QUERY_STRING = 'SELECT * FROM [dataset.table]';

    it('should return any errors from createQueryJob', done => {
      const error = new Error('err');

      bq.createQueryJob = (query: {}, callback: Function) => {
        callback(error, null, FAKE_RESPONSE);
      };

      bq.buildQueryRequest_ = (query: {}, options: {}) => {
        return undefined;
      };

      bq.query(QUERY_STRING, (err: Error, rows: {}, resp: {}) => {
        assert.strictEqual(err, error);
        assert.strictEqual(rows, null);
        assert.strictEqual(resp, FAKE_RESPONSE);
        done();
      });
    });

    it('should return any errors from jobs.query', done => {
      const error = new Error('err');

      bq.runJobsQuery = (query: {}, callback: Function) => {
        callback(error, FAKE_RESPONSE, {});
      };

      bq.query(QUERY_STRING, (err: Error, rows: {}, resp: {}) => {
        assert.strictEqual(err, error);
        assert.strictEqual(rows, null);
        assert.strictEqual(resp, FAKE_RESPONSE);
        done();
      });
    });

    it('should return throw error when jobs.query times out', done => {
      const fakeJob = {};

      bq.runJobsQuery = (query: {}, callback: Function) => {
        callback(null, fakeJob, {
          queryId: crypto.randomUUID(),
          jobComplete: false,
        });
      };

      bq.query(
        QUERY_STRING,
        {timeoutMs: 1000},
        (err: Error, rows: {}, resp: {}) => {
          assert.strictEqual(
            err.message,
            'The query did not complete before 1000ms',
          );
          assert.strictEqual(rows, null);
          assert.strictEqual(resp, fakeJob);
          done();
        },
      );
    });

    it('should exit early if dryRun is set', done => {
      const options = {
        query: QUERY_STRING,
        dryRun: true,
      };

      bq.createQueryJob = (query: {}, callback: Function) => {
        assert.strictEqual(query, options);
        callback(null, null, FAKE_RESPONSE);
      };

      bq.buildQueryRequest_ = (query: {}, options: {}) => {
        return undefined;
      };

      bq.query(options, (err: Error, rows: {}, resp: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(rows, []);
        assert.strictEqual(resp, FAKE_RESPONSE);
        done();
      });
    });

    it('should call job#getQueryResults', done => {
      const fakeJob = {
        getQueryResults: (options: {}, callback: Function) => {
          callback(null, FAKE_ROWS, FAKE_RESPONSE);
        },
      };

      bq.createQueryJob = (query: {}, callback: Function) => {
        callback(null, fakeJob, FAKE_RESPONSE);
      };

      bq.buildQueryRequest_ = (query: {}, options: {}) => {
        return undefined;
      };

      bq.query(QUERY_STRING, (err: Error, rows: {}, resp: {}) => {
        assert.ifError(err);
        assert.strictEqual(rows, FAKE_ROWS);
        assert.strictEqual(resp, FAKE_RESPONSE);
        done();
      });
    });

    it('should call job#getQueryResults with cached rows and response from jobs.query', done => {
      const fakeJob = {
        getQueryResults: (options: QueryResultsOptions, callback: Function) => {
          callback(null, options._cachedRows, null, options._cachedResponse);
        },
      };

      const fakeResponse = {
        jobComplete: true,
        schema: {
          fields: [{name: 'value', type: 'INT64'}],
        },
        rows: [{f: [{v: 1}]}, {f: [{v: 2}]}, {f: [{v: 3}]}],
      };

      bq.runJobsQuery = (query: {}, callback: Function) => {
        callback(null, fakeJob, fakeResponse);
      };

      bq.query(QUERY_STRING, (err: Error, rows: {}, query: {}, resp: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(rows, [
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 3,
          },
        ]);
        assert.strictEqual(resp, fakeResponse);
        done();
      });
    });

    it('should call job#getQueryResults with query options', done => {
      let queryResultsOpts = {};
      const fakeJob = {
        getQueryResults: (options: {}, callback: Function) => {
          queryResultsOpts = options;
          callback(null, FAKE_ROWS, FAKE_RESPONSE);
        },
      };

      bq.createQueryJob = (query: {}, callback: Function) => {
        callback(null, fakeJob, FAKE_RESPONSE);
      };

      bq.buildQueryRequest_ = (query: {}, options: {}) => {
        return undefined;
      };

      const query = {
        query: QUERY_STRING,
        wrapIntegers: true,
        parseJSON: true,
      };
      bq.query(query, (err: Error, rows: {}, resp: {}) => {
        assert.ifError(err);
        assert.deepEqual(queryResultsOpts, {
          job: fakeJob,
          wrapIntegers: true,
          parseJSON: true,
        });
        assert.strictEqual(rows, FAKE_ROWS);
        assert.strictEqual(resp, FAKE_RESPONSE);
        done();
      });
    });

    it('should assign Job on the options', done => {
      const fakeJob = {
        getQueryResults: (options: {}) => {
          assert.deepStrictEqual(options, {job: fakeJob});
          done();
        },
      };

      bq.createQueryJob = (query: {}, callback: Function) => {
        callback(null, fakeJob, FAKE_RESPONSE);
      };

      bq.buildQueryRequest_ = (query: {}, opts: {}) => {
        return undefined;
      };

      bq.query(QUERY_STRING, assert.ifError);
    });

    it('should optionally accept options', done => {
      const fakeOptions = {};
      const fakeJob = {
        getQueryResults: (options: {}) => {
          assert.notStrictEqual(options, fakeOptions);
          assert.deepStrictEqual(options, {job: fakeJob});
          done();
        },
      };

      bq.createQueryJob = (query: {}, callback: Function) => {
        callback(null, fakeJob, FAKE_RESPONSE);
      };

      bq.buildQueryRequest_ = (query: {}, opts: {}) => {
        return undefined;
      };

      bq.query(QUERY_STRING, fakeOptions, assert.ifError);
    });

    it('should accept a reservation id', done => {
      const query: Query = {
        query: QUERY_STRING,
        reservation: 'reservation/1',
      };
      const fakeJob = {
        getQueryResults: (options: {}) => {
          done();
        },
      };

      bq.createJob = (reqOpts: JobOptions, callback: Function) => {
        assert(reqOpts.configuration?.reservation, 'reservation/1');
        callback(null, fakeJob, FAKE_RESPONSE);
      };

      bq.buildQueryRequest_ = (query: {}, opts: {}) => {
        return undefined;
      };

      bq.query(query, assert.ifError);
    });
  });

  describe('buildQueryRequest_', () => {
    const DATASET_ID = 'dataset-id';
    const TABLE_ID = 'table-id';
    const QUERY_STRING = 'SELECT * FROM [dataset.table]';

    it('should create a QueryRequest from a Query interface', () => {
      const q: Query = {
        query: QUERY_STRING,
        maxResults: 10,
        defaultDataset: {
          projectId: PROJECT_ID,
          datasetId: DATASET_ID,
        },
        priority: 'INTERACTIVE',
        params: {
          key: 'value',
        },
        maximumBytesBilled: '1024',
        labels: {
          key: 'value',
        },
        jobCreationMode: 'JOB_CREATION_REQUIRED',
      };
      const req = bq.buildQueryRequest_(q, {});
      for (const key in req) {
        if (req[key] === undefined) {
          delete req[key];
        }
      }
      const expectedReq = {
        query: QUERY_STRING,
        useLegacySql: false,
        requestId: req.requestId,
        maxResults: 10,
        defaultDataset: {
          projectId: PROJECT_ID,
          datasetId: DATASET_ID,
        },
        parameterMode: 'named',
        queryParameters: [
          {
            name: 'key',
            parameterType: {
              type: 'STRING',
            },
            parameterValue: {
              value: 'value',
            },
          },
        ],
        maximumBytesBilled: '1024',
        labels: {
          key: 'value',
        },
        jobCreationMode: 'JOB_CREATION_REQUIRED',
        formatOptions: {
          useInt64Timestamp: true,
        },
      };
      assert.deepStrictEqual(req, expectedReq);
    });

    it('should create a QueryRequest from a SQL string', () => {
      const req = bq.buildQueryRequest_(QUERY_STRING, {});
      for (const key in req) {
        if (req[key] === undefined) {
          delete req[key];
        }
      }
      const expectedReq = {
        query: QUERY_STRING,
        useLegacySql: false,
        requestId: req.requestId,
        jobCreationMode: 'JOB_CREATION_OPTIONAL',
        formatOptions: {
          useInt64Timestamp: true,
        },
      };
      assert.deepStrictEqual(req, expectedReq);
    });

    it('should not create a QueryRequest when config is not accepted by jobs.query', () => {
      const dataset: any = {
        bigQuery: bq,
        id: 'dataset-id',
        createTable: util.noop,
      };
      const table = new FakeTable(dataset, TABLE_ID);
      const testCases: Query[] = [
        {
          query: QUERY_STRING,
          dryRun: true,
        },
        {
          query: QUERY_STRING,
          destination: table,
        },
        {
          query: QUERY_STRING,
          clustering: {
            fields: ['date'],
          },
        },
        {
          query: QUERY_STRING,
          clustering: {},
        },
        {
          query: QUERY_STRING,
          timePartitioning: {},
        },
        {
          query: QUERY_STRING,
          rangePartitioning: {},
        },
        {
          query: QUERY_STRING,
          jobId: 'fixed-job-id',
        },
        {
          query: QUERY_STRING,
          createDisposition: 'CREATED_IF_NEEDED',
          writeDisposition: 'WRITE_APPEND',
        },
        {
          query: QUERY_STRING,
          schemaUpdateOptions: ['update'],
        },
      ];

      for (const index in testCases) {
        const testCase = testCases[index];
        const req = bq.buildQueryRequest_(testCase, {});
        assert.equal(req, undefined);
      }
    });
  });

  describe('queryAsStream_', () => {
    let queryStub: SinonStub;
    const defaultOpts = {
      location: undefined,
      maxResults: undefined,
      pageToken: undefined,
      wrapIntegers: undefined,
      parseJSON: undefined,
      autoPaginate: false,
    };

    beforeEach(() => {
      queryStub = sandbox.stub(bq, 'query').callsArgAsync(2);
    });

    it('should call query correctly with a string', done => {
      const query = 'SELECT';
      bq.queryAsStream_(query, done);
      assert(
        queryStub.calledOnceWithExactly(query, defaultOpts, sinon.match.func),
      );
    });

    it('should call query correctly with a Query object', done => {
      const query = {query: 'SELECT', wrapIntegers: true, parseJSON: true};
      bq.queryAsStream_(query, done);
      const opts = {
        ...defaultOpts,
        wrapIntegers: true,
        parseJSON: true,
      };
      assert(queryStub.calledOnceWithExactly(query, opts, sinon.match.func));
    });

    it('should query as job if supplied', done => {
      const cbStub = sinon.stub().callsArgAsync(1);
      const query = {
        job: {
          getQueryResults: cbStub,
        },
      };
      bq.queryAsStream_(query, done);
      assert(cbStub.calledOnceWithExactly(query, sinon.match.func));
      assert(queryStub.notCalled);
    });

    it('should pass wrapIntegers if supplied', done => {
      const wrapIntegers = {
        integerValue: 100,
      };
      const query = {
        query: 'SELECT',
        wrapIntegers,
      };

      bq.queryAsStream_(query, done);

      const opts = {
        ...defaultOpts,
        wrapIntegers,
      };

      assert(queryStub.calledOnceWithExactly(query, opts, sinon.match.func));
    });

    it('should pass parseJSON if supplied', done => {
      const parseJSON = true;
      const query = {
        query: 'SELECT',
        parseJSON,
      };

      bq.queryAsStream_(query, done);

      const opts = {
        ...defaultOpts,
        parseJSON,
      };

      assert(queryStub.calledOnceWithExactly(query, opts, sinon.match.func));
    });
  });

  describe('#sanitizeEndpoint', () => {
    const USER_DEFINED_SHORT_API_ENDPOINT = 'myapi.com:8080';
    const USER_DEFINED_PROTOCOL = 'myproto';
    const USER_DEFINED_FULL_API_ENDPOINT = `${USER_DEFINED_PROTOCOL}://myapi.com:8080`;

    it('should default protocol to https', () => {
      const endpoint = BigQuery.sanitizeEndpoint(
        USER_DEFINED_SHORT_API_ENDPOINT,
      );
      assert.strictEqual(endpoint.match(PROTOCOL_REGEX)![1], 'https');
    });

    it('should not override protocol', () => {
      const endpoint = BigQuery.sanitizeEndpoint(
        USER_DEFINED_FULL_API_ENDPOINT,
      );
      assert.strictEqual(
        endpoint.match(PROTOCOL_REGEX)![1],
        USER_DEFINED_PROTOCOL,
      );
    });

    it('should remove trailing slashes from URL', () => {
      const endpointsWithTrailingSlashes = [
        `${USER_DEFINED_FULL_API_ENDPOINT}/`,
        `${USER_DEFINED_FULL_API_ENDPOINT}//`,
      ];
      for (const endpointWithTrailingSlashes of endpointsWithTrailingSlashes) {
        const endpoint = BigQuery.sanitizeEndpoint(endpointWithTrailingSlashes);
        assert.strictEqual(endpoint.endsWith('/'), false);
      }
    });
  });
});
