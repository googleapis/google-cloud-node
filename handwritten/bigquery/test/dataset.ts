// Copyright 2014 Google LLC
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
  ServiceObject,
  ServiceObjectConfig,
  util,
} from '@google-cloud/common';
import * as pfy from '@google-cloud/promisify';
import * as assert from 'assert';
import {describe, it, before, beforeEach} from 'mocha';
import * as extend from 'extend';
import * as proxyquire from 'proxyquire';

import * as _root from '../src';
import {toArray} from '../src/util';
import {DatasetOptions} from '../src/dataset';
import {FormattedMetadata, TableOptions} from '../src/table';

interface CalledWithDataset extends ServiceObject {
  calledWith_: Array<{
    parent: {};
    baseUrl: string;
    id: string;
    methods: string[];
  }>;
}

let promisified = false;
const fakePfy = Object.assign({}, pfy, {
  promisifyAll: (c: Function, options: pfy.PromisifyAllOptions) => {
    if (c.name !== 'Dataset') {
      return;
    }
    promisified = true;
    assert.deepStrictEqual(options.exclude, ['model', 'routine', 'table']);
  },
});

let extended = false;
const fakePaginator = {
  paginator: {
    extend: (c: Function, methods: string[]) => {
      if (c.name !== 'Dataset') {
        return;
      }
      methods = toArray(methods);
      assert.strictEqual(c.name, 'Dataset');
      assert.deepStrictEqual(methods, [
        'getModels',
        'getRoutines',
        'getTables',
      ]);
      extended = true;
    },
    streamify: (methodName: string) => {
      return methodName;
    },
  },
};

class FakeServiceObject extends ServiceObject {
  calledWith_: IArguments;
  constructor(config: ServiceObjectConfig) {
    super(config);
    // eslint-disable-next-line prefer-rest-params
    this.calledWith_ = arguments;
  }
}

describe('BigQuery/Dataset', () => {
  const BIGQUERY = {
    projectId: 'my-project',
    createDataset: util.noop,
  } as {} as _root.BigQuery;
  const DATASET_ID = 'kittens';
  const LOCATION = 'asia-northeast1';
  const ANOTHER_PROJECT_ID = 'another-test-project';

  // tslint:disable-next-line variable-name
  let Dataset: typeof _root.Dataset;
  // tslint:disable-next-line variable-name
  let Table: typeof _root.Table;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let ds: any;

  before(() => {
    Dataset = proxyquire('../src/dataset', {
      '@google-cloud/common': {
        ServiceObject: FakeServiceObject,
      },
      '@google-cloud/paginator': fakePaginator,
      '@google-cloud/promisify': fakePfy,
    }).Dataset;
    Table = require('../src/table').Table;
  });

  beforeEach(() => {
    ds = new Dataset(BIGQUERY, DATASET_ID);
  });

  describe('instantiation', () => {
    it('should extend the correct methods', () => {
      assert(extended); // See `fakePaginator.extend`
    });

    it('should streamify the correct methods', () => {
      assert.strictEqual(ds.getTablesStream, 'getTables');
      assert.strictEqual(ds.getModelsStream, 'getModels');
    });

    it('should promisify all the things', () => {
      assert(promisified);
    });

    it('should inherit from ServiceObject', () => {
      assert(ds instanceof ServiceObject);

      const calledWith = (ds as CalledWithDataset).calledWith_[0];

      assert.strictEqual(calledWith.parent, BIGQUERY);
      assert.strictEqual(calledWith.baseUrl, '/datasets');
      assert.strictEqual(calledWith.id, DATASET_ID);
      assert.deepStrictEqual(calledWith.methods, {
        create: true,
        exists: true,
        get: true,
        getMetadata: true,
        setMetadata: true,
      });
    });

    it('should capture user provided location', () => {
      const options = {location: LOCATION};
      const ds = new Dataset(BIGQUERY, DATASET_ID, options);

      assert.strictEqual(ds.location, LOCATION);
    });

    it('should set the client projectId by default', () => {
      const ds = new Dataset(BIGQUERY, DATASET_ID);

      assert.strictEqual(ds.projectId, BIGQUERY.projectId);
    });

    it('should capture user provided projectId', () => {
      const projectIdOverride = 'octavia';
      const options = {projectId: projectIdOverride};
      const ds = new Dataset(BIGQUERY, DATASET_ID, options);

      assert.strictEqual(ds.projectId, projectIdOverride);
    });

    describe('createMethod', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let bq: any;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let ds: any;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let config: any;

      beforeEach(() => {
        bq = extend(true, {}, BIGQUERY);
        ds = new Dataset(bq, DATASET_ID);
        config = ds.calledWith_[0];
      });

      it('should call through to BigQuery#createDataset', done => {
        const OPTIONS = {
          projectId: BIGQUERY.projectId,
        };

        bq.createDataset = (id: string, options: {}, callback: Function) => {
          assert.strictEqual(id, DATASET_ID);
          assert.deepStrictEqual(options, OPTIONS);
          callback(); // the done fn
        };

        config.createMethod(DATASET_ID, OPTIONS, done);
      });

      it('should optionally accept options', done => {
        bq.createDataset = (id: string, options: {}, callback: Function) => {
          callback(); // the done fn
        };

        config.createMethod(DATASET_ID, done);
      });

      it('should pass the location', done => {
        bq.createDataset = (
          id: string,
          options: DatasetOptions,
          callback: Function,
        ) => {
          assert.strictEqual(options.location, LOCATION);
          callback(); // the done fn
        };

        ds.location = LOCATION;
        config.createMethod(DATASET_ID, done);
      });

      it('should pass the projectId', done => {
        bq.createDataset = (
          id: string,
          options: DatasetOptions,
          callback: Function,
        ) => {
          assert.strictEqual(options.projectId, 'project-id');
          callback(); // the done fn
        };

        ds.projectId = 'project-id';
        config.createMethod(DATASET_ID, done);
      });
    });

    describe('projectId override interceptor', () => {
      const projectIdOverride = 'DuBois';

      it('should use projectId override uri', () => {
        ds = new Dataset(BIGQUERY, DATASET_ID, {projectId: projectIdOverride});
        const interceptor = ds.interceptors.pop();
        const fakeReqOpts = {
          method: 'PATCH',
          json: {
            etag: '',
          },
          uri: `/projects/${ds.bigQuery.projectId}/`,
        };

        const reqOpts = interceptor.request(fakeReqOpts);
        assert.deepStrictEqual(reqOpts.uri, `/projects/${projectIdOverride}/`);
      });
    });

    describe('etag interceptor', () => {
      const FAKE_ETAG = 'abc';

      it('should apply the If-Match header', () => {
        const interceptor = ds.interceptors.pop();

        const fakeReqOpts = {
          method: 'PATCH',
          json: {
            etag: FAKE_ETAG,
          },
          uri: `/projects/${BIGQUERY.projectId}/`,
        };

        const reqOpts = interceptor.request(fakeReqOpts);
        assert.deepStrictEqual(reqOpts.headers, {'If-Match': FAKE_ETAG});
      });

      it('should respect already existing headers', () => {
        const interceptor = ds.interceptors.pop();

        const fakeReqOpts = {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          json: {
            etag: FAKE_ETAG,
          },
          uri: `/projects/${BIGQUERY.projectId}/`,
        };

        const expectedHeaders = Object.assign({}, fakeReqOpts.headers, {
          'If-Match': FAKE_ETAG,
        });

        const reqOpts = interceptor.request(fakeReqOpts);
        assert.deepStrictEqual(reqOpts.headers, expectedHeaders);
      });

      it('should not apply the header if method is not patch', () => {
        const interceptor = ds.interceptors.pop();

        const fakeReqOpts = {
          method: 'POST',
          json: {
            etag: FAKE_ETAG,
          },
          uri: `/projects/${BIGQUERY.projectId}/`,
        };

        const reqOpts = interceptor.request(fakeReqOpts);
        assert.deepStrictEqual(reqOpts.headers, undefined);
      });
    });
  });

  describe('createQueryJob', () => {
    const FAKE_QUERY = 'SELECT * FROM `table`';

    it('should extend the options', done => {
      const fakeOptions = {
        query: FAKE_QUERY,
        a: {b: 'c'},
      };

      const expectedOptions = extend(
        true,
        {
          location: LOCATION,
        },
        fakeOptions,
        {
          defaultDataset: {
            datasetId: ds.id,
          },
        },
      );

      ds.bigQuery.createQueryJob = (options: {}, callback: Function) => {
        assert.deepStrictEqual(options, expectedOptions);
        assert.notStrictEqual(fakeOptions, options);
        callback(); // the done fn
      };

      ds.location = LOCATION;
      ds.createQueryJob(fakeOptions, done);
    });

    it('should accept a query string', done => {
      ds.bigQuery.createQueryJob = (
        options: _root.Query,
        callback: Function,
      ) => {
        assert.strictEqual(options.query, FAKE_QUERY);
        callback(); // the done fn
      };

      ds.createQueryJob(FAKE_QUERY, done);
    });
  });

  describe('createQueryStream', () => {
    const options = {
      a: 'b',
      c: 'd',
    };

    it('should call through to bigQuery', done => {
      ds.bigQuery.createQueryStream = () => {
        done();
      };

      ds.createQueryStream();
    });

    it('should return the result of the call to bq.query', done => {
      ds.bigQuery.createQueryStream = () => {
        return {
          done,
        };
      };

      ds.createQueryStream().done();
    });

    it('should accept a string', done => {
      const query = 'SELECT * FROM allthedata';

      ds.bigQuery.createQueryStream = (opts: _root.Query) => {
        assert.strictEqual(opts.query, query);
        done();
      };

      ds.createQueryStream(query);
    });

    it('should pass along options', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ds.bigQuery.createQueryStream = (opts: any) => {
        assert.strictEqual(opts.a, options.a);
        assert.strictEqual(opts.c, options.c);
        done();
      };

      ds.createQueryStream(options);
    });

    it('should extend options with defaultDataset', done => {
      ds.bigQuery.createQueryStream = (opts: _root.Query) => {
        assert.deepStrictEqual(opts.defaultDataset, {datasetId: ds.id});
        done();
      };

      ds.createQueryStream(options);
    });

    it('should extend options with the location', done => {
      ds.bigQuery.createQueryStream = (opts: _root.Query) => {
        assert.strictEqual(opts.location, LOCATION);
        done();
      };

      ds.location = LOCATION;
      ds.createQueryStream();
    });

    it('should not modify original options object', done => {
      ds.bigQuery.createQueryStream = () => {
        assert.deepStrictEqual(options, {a: 'b', c: 'd'});
        done();
      };

      ds.createQueryStream();
    });
  });

  describe('createTable', () => {
    const SCHEMA_OBJECT = {
      fields: [
        {name: 'id', type: 'INTEGER'},
        {name: 'breed', type: 'STRING'},
        {name: 'name', type: 'STRING'},
        {name: 'dob', type: 'TIMESTAMP'},
        {name: 'around', type: 'BOOLEAN'},
      ],
    };
    const SCHEMA_STRING = 'id:integer,breed,name,dob:timestamp,around:boolean';
    const TABLE_ID = 'kittens';

    const API_RESPONSE = {
      tableReference: {
        tableId: TABLE_ID,
        projectId: BIGQUERY.projectId,
      },
    };

    it('should create a table', done => {
      const options = {
        schema: SCHEMA_OBJECT,
      };

      ds.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/tables');

        const body = reqOpts.json;
        assert.deepStrictEqual(body.schema, SCHEMA_OBJECT);
        assert.strictEqual(body.tableReference.datasetId, DATASET_ID);
        assert.strictEqual(body.tableReference.projectId, ds.projectId);
        assert.strictEqual(body.tableReference.tableId, TABLE_ID);

        done();
      };

      ds.createTable(TABLE_ID, options, assert.ifError);
    });

    it('should create a table on a different project', done => {
      const options = {
        schema: SCHEMA_OBJECT,
      };
      const anotherDs = new Dataset(BIGQUERY, DATASET_ID, {
        projectId: ANOTHER_PROJECT_ID,
      }) as any;
      anotherDs.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/tables');

        const body = reqOpts.json;
        assert.deepStrictEqual(body.schema, SCHEMA_OBJECT);
        assert.strictEqual(body.tableReference.datasetId, DATASET_ID);
        assert.strictEqual(body.tableReference.projectId, ANOTHER_PROJECT_ID);
        assert.strictEqual(body.tableReference.tableId, TABLE_ID);

        done();
      };

      // Under the hood dataset.createTable is called
      const table = anotherDs.table(TABLE_ID);
      table.create(options, assert.ifError);
    });

    it('should not require options', done => {
      ds.request = (reqOpts: DecorateRequestOptions, callback: Function) => {
        callback(null, API_RESPONSE);
      };

      ds.createTable(TABLE_ID, done);
    });

    it('should format the metadata', done => {
      const formatMetadata_ = Table.formatMetadata_;
      const formatted = {};
      const fakeOptions = {};

      Table.formatMetadata_ = options => {
        assert.strictEqual(options, fakeOptions);
        return formatted as {} as FormattedMetadata;
      };

      ds.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(reqOpts.json, formatted);

        Table.formatMetadata_ = formatMetadata_;
        done();
      };

      ds.createTable(TABLE_ID, fakeOptions, assert.ifError);
    });

    it('should create a schema object from a string', done => {
      ds.request = (reqOpts: DecorateRequestOptions) => {
        assert.deepStrictEqual(reqOpts.json.schema, SCHEMA_OBJECT);
        done();
      };

      ds.createTable(TABLE_ID, {schema: SCHEMA_STRING}, assert.ifError);
    });

    it('should wrap an array schema', done => {
      ds.request = (reqOpts: DecorateRequestOptions) => {
        assert.deepStrictEqual(
          reqOpts.json.schema.fields,
          SCHEMA_OBJECT.fields,
        );
        done();
      };

      ds.createTable(
        TABLE_ID,
        {
          schema: SCHEMA_OBJECT.fields,
        },
        assert.ifError,
      );
    });

    it('should assign record type to nested schemas', done => {
      const nestedField = {
        id: 'nested',
        fields: [{id: 'nested_name', type: 'STRING'}],
      };

      ds.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(reqOpts.json.schema.fields[1].type, 'RECORD');
        done();
      };

      ds.createTable(
        TABLE_ID,
        {
          schema: {
            fields: [{id: 'name', type: 'STRING'}, nestedField],
          },
        },
        assert.ifError,
      );
    });

    it('should return an error to the callback', done => {
      const error = new Error('Error.');

      ds.request = (reqOpts: DecorateRequestOptions, callback: Function) => {
        callback(error);
      };

      ds.createTable(TABLE_ID, {schema: SCHEMA_OBJECT}, (err: Error) => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should return a Table object', done => {
      ds.request = (reqOpts: DecorateRequestOptions, callback: Function) => {
        callback(null, API_RESPONSE);
      };

      ds.createTable(
        TABLE_ID,
        {schema: SCHEMA_OBJECT},
        (err: Error, table: _root.Table) => {
          assert.ifError(err);
          assert(table instanceof Table);
          done();
        },
      );
    });

    it('should pass the location to the Table', done => {
      const response = Object.assign({location: LOCATION}, API_RESPONSE);

      ds.request = (reqOpts: DecorateRequestOptions, callback: Function) => {
        callback(null, response);
      };

      ds.table = (id: string, options: TableOptions) => {
        assert.strictEqual(options.location, LOCATION);
        setImmediate(done);
        return {};
      };

      ds.createTable(TABLE_ID, {schema: SCHEMA_OBJECT}, assert.ifError);
    });

    it('should pass the projectId to the Table', done => {
      const response = Object.assign({location: LOCATION}, API_RESPONSE);

      ds.request = (reqOpts: DecorateRequestOptions, callback: Function) => {
        callback(null, response);
      };

      ds.table = (id: string, options: TableOptions) => {
        assert.strictEqual(options.location, LOCATION);
        setImmediate(done);
        return {};
      };

      ds.createTable(TABLE_ID, {schema: SCHEMA_OBJECT}, assert.ifError);
    });

    it('should return an apiResponse', done => {
      const opts = {id: TABLE_ID, schema: SCHEMA_OBJECT};

      ds.request = (reqOpts: DecorateRequestOptions, callback: Function) => {
        callback(null, API_RESPONSE);
      };

      ds.createTable(
        TABLE_ID,
        opts,
        (err: Error, table: _root.Table, apiResponse: {}) => {
          assert.ifError(err);
          assert.strictEqual(apiResponse, API_RESPONSE);
          done();
        },
      );
    });

    it('should assign metadata to the Table object', done => {
      const apiResponse = Object.assign(
        {
          a: 'b',
          c: 'd',
        },
        API_RESPONSE,
      );

      ds.request = (reqOpts: DecorateRequestOptions, callback: Function) => {
        callback(null, apiResponse);
      };

      ds.createTable(
        TABLE_ID,
        {schema: SCHEMA_OBJECT},
        (err: Error, table: _root.Table) => {
          assert.ifError(err);
          assert.strictEqual(table.metadata, apiResponse);
          done();
        },
      );
    });
  });

  describe('delete', () => {
    it('should delete the dataset via the api', done => {
      ds.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(reqOpts.method, 'DELETE');
        assert.strictEqual(reqOpts.uri, '');
        assert.deepStrictEqual(reqOpts.qs, {deleteContents: false});
        done();
      };

      ds.delete(assert.ifError);
    });

    it('should allow a force delete', done => {
      ds.request = (reqOpts: DecorateRequestOptions) => {
        assert.deepStrictEqual(reqOpts.qs, {deleteContents: true});
        done();
      };

      ds.delete({force: true}, assert.ifError);
    });

    it('should execute callback when done', done => {
      ds.request = (reqOpts: DecorateRequestOptions, callback: Function) => {
        callback();
      };

      ds.delete(done);
    });

    it('should pass error to callback', done => {
      const error = new Error('Error.');

      ds.request = (reqOpts: DecorateRequestOptions, callback: Function) => {
        callback(error);
      };

      ds.delete((err: Error) => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should pass apiResponse to callback', done => {
      const apiResponse = {};

      ds.request = (reqOpts: DecorateRequestOptions, callback: Function) => {
        callback(null, apiResponse);
      };

      ds.delete((err: Error, apiResponse_: {}) => {
        assert.strictEqual(apiResponse_, apiResponse);
        done();
      });
    });
  });

  describe('getModels', () => {
    it('should get models from the api', done => {
      ds.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(reqOpts.uri, '/models');
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      ds.getModels(assert.ifError);
    });

    it('should accept a query', done => {
      const query = {
        maxResults: 8,
        pageToken: 'token',
      };

      ds.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(reqOpts.qs, query);
        done();
      };

      ds.getModels(query, assert.ifError);
    });

    it('should default the query value to an empty object', done => {
      ds.request = (reqOpts: DecorateRequestOptions) => {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      ds.getModels(assert.ifError);
    });

    it('should return error to callback', done => {
      const error = new Error('Error.');

      ds.request = (reqOpts: DecorateRequestOptions, callback: Function) => {
        callback(error);
      };

      ds.getModels((err: Error) => {
        assert.strictEqual(err, error);
        done();
      });
    });

    describe('success', () => {
      const modelId = 'modelName';
      const apiResponse = {
        models: [
          {
            a: 'b',
            c: 'd',
            modelReference: {modelId},
          },
        ],
      };

      beforeEach(() => {
        ds.request = (reqOpts: DecorateRequestOptions, callback: Function) => {
          callback(null, apiResponse);
        };
      });

      it('should return Model & apiResponse', done => {
        ds.getModels(
          (
            err: Error,
            models: _root.Model[],
            nextQuery: {},
            apiResponse_: {},
          ) => {
            assert.ifError(err);

            const model = models[0];

            assert(model instanceof _root.Model);
            assert.strictEqual(model.id, modelId);
            assert.strictEqual(apiResponse_, apiResponse);
            done();
          },
        );
      });

      it('should assign metadata to the Model objects', done => {
        ds.getModels((err: Error, models: _root.Model[]) => {
          assert.ifError(err);
          assert.strictEqual(models[0].metadata, apiResponse.models[0]);
          done();
        });
      });

      it('should return token if more results exist', done => {
        const pageToken = 'token';

        const query = {
          maxResults: 5,
        };

        const expectedNextQuery = {
          maxResults: 5,
          pageToken,
        };

        ds.request = (reqOpts: DecorateRequestOptions, callback: Function) => {
          callback(null, {nextPageToken: pageToken});
        };

        ds.getModels(
          query,
          (err: Error, tables: _root.Model[], nextQuery: {}) => {
            assert.ifError(err);
            assert.deepStrictEqual(nextQuery, expectedNextQuery);
            done();
          },
        );
      });
    });
  });

  describe('getTables', () => {
    it('should get tables from the api', done => {
      ds.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(reqOpts.uri, '/tables');
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      ds.getTables(assert.ifError);
    });

    it('should accept a query', done => {
      const query = {
        maxResults: 8,
        pageToken: 'token',
      };

      ds.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(reqOpts.qs, query);
        done();
      };

      ds.getTables(query, assert.ifError);
    });

    it('should default the query value to an empty object', done => {
      ds.request = (reqOpts: DecorateRequestOptions) => {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      ds.getTables(assert.ifError);
    });

    it('should return error to callback', done => {
      const error = new Error('Error.');

      ds.request = (reqOpts: DecorateRequestOptions, callback: Function) => {
        callback(error);
      };

      ds.getTables((err: Error) => {
        assert.strictEqual(err, error);
        done();
      });
    });

    describe('success', () => {
      const tableId = 'tableName';
      const apiResponse = {
        tables: [
          {
            a: 'b',
            c: 'd',
            tableReference: {tableId},
            location: LOCATION,
          },
        ],
      };

      beforeEach(() => {
        ds.request = (reqOpts: DecorateRequestOptions, callback: Function) => {
          callback(null, apiResponse);
        };
      });

      it('should return Table & apiResponse', done => {
        ds.getTables(
          (
            err: Error,
            tables: _root.Table[],
            nextQuery: {},
            apiResponse_: {},
          ) => {
            assert.ifError(err);

            const table = tables[0];

            assert(table instanceof Table);
            assert.strictEqual(table.id, tableId);
            assert.strictEqual(table.location, LOCATION);
            assert.strictEqual(apiResponse_, apiResponse);
            done();
          },
        );
      });

      it('should assign metadata to the Table objects', done => {
        ds.getTables((err: Error, tables: _root.Table[]) => {
          assert.ifError(err);
          assert.strictEqual(tables[0].metadata, apiResponse.tables[0]);
          done();
        });
      });

      it('should return token if more results exist', done => {
        const pageToken = 'token';

        const query = {
          maxResults: 5,
        };

        const expectedNextQuery = {
          maxResults: 5,
          pageToken,
        };

        ds.request = (reqOpts: DecorateRequestOptions, callback: Function) => {
          callback(null, {nextPageToken: pageToken});
        };

        ds.getTables(
          query,
          (err: Error, tables: _root.Table[], nextQuery: {}) => {
            assert.ifError(err);
            assert.deepStrictEqual(nextQuery, expectedNextQuery);
            done();
          },
        );
      });
    });
  });

  describe('model', () => {
    it('should throw an error if the id is missing', () => {
      const expectedErr = /A model ID is required\./;
      assert.throws(() => ds.model(), expectedErr);
    });

    it('should return a Model object', () => {
      const modelId = 'modelId';
      const model = ds.model(modelId);
      assert(model instanceof _root.Model);
      assert.strictEqual(model.id, modelId);
    });
  });

  describe('query', () => {
    const options = {
      a: 'b',
      c: 'd',
    };

    it('should call through to bigQuery', done => {
      ds.bigQuery.query = () => {
        done();
      };

      ds.query();
    });

    it('should accept a string', done => {
      const query = 'SELECT * FROM allthedata';

      ds.bigQuery.query = (opts: _root.Query) => {
        assert.strictEqual(opts.query, query);
        done();
      };

      ds.query(query);
    });

    it('should pass along options', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ds.bigQuery.query = (opts: any) => {
        assert.strictEqual(opts.a, options.a);
        assert.strictEqual(opts.c, options.c);
        done();
      };

      ds.query(options);
    });

    it('should extend options with defaultDataset', done => {
      ds.bigQuery.query = (opts: _root.Query) => {
        assert.deepStrictEqual(opts.defaultDataset, {datasetId: ds.id});
        done();
      };

      ds.query(options);
    });

    it('should extend options with the location', done => {
      ds.bigQuery.query = (opts: _root.Query) => {
        assert.strictEqual(opts.location, LOCATION);
        done();
      };

      ds.location = LOCATION;
      ds.query();
    });

    it('should not modify original options object', done => {
      ds.bigQuery.query = () => {
        assert.deepStrictEqual(options, {a: 'b', c: 'd'});
        done();
      };

      ds.query();
    });

    it('should pass callback', done => {
      const callback = util.noop;

      ds.bigQuery.query = (opts: _root.Query, cb: Function) => {
        assert.strictEqual(cb, callback);
        done();
      };

      ds.query(options, callback);
    });
  });

  describe('table', () => {
    it('should throw an error if the id is missing', () => {
      const expectedErr = /A table ID is required\./;
      assert.throws(() => ds.table(), expectedErr);
    });

    it('should return a Table object', () => {
      const tableId = 'tableId';
      const table = ds.table(tableId);
      assert(table instanceof Table);
      assert.strictEqual(table.id, tableId);
    });

    it('should inherit the dataset location', () => {
      ds.location = LOCATION;
      const table = ds.table('tableId');

      assert.strictEqual(table.location, LOCATION);
    });

    it('should pass along the location if provided', () => {
      ds.location = LOCATION;

      const location = 'US';
      const table = ds.table('tableId', {location});

      assert.strictEqual(table.location, location);
    });
  });
});
