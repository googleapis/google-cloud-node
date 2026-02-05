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

import * as assert from 'assert';
import {describe, it, before, beforeEach, afterEach} from 'mocha';
import * as sinon from 'sinon';
import * as proxyquire from 'proxyquire';
import * as pfy from '@google-cloud/promisify';
import {EventEmitter} from 'events';
import {JobOptions} from '../src/job';
import {ServiceObject, ServiceObjectConfig, util} from '@google-cloud/common';

let promisified = false;

const fakePfy = Object.assign({}, pfy, {
  promisifyAll: (c: Function) => {
    if (c.name === 'Model') {
      promisified = true;
    }
    pfy.promisifyAll(c);
  },
});

class FakeServiceObject extends ServiceObject {
  _calledWith: IArguments;
  constructor(config: ServiceObjectConfig) {
    super(config);
    // eslint-disable-next-line prefer-rest-params
    this._calledWith = arguments;
  }
}

let isCustomTypeOverride: Function | null;
const fakeUtil = Object.assign({}, util, {
  isCustomType: (...args: Array<{}>) => {
    return (isCustomTypeOverride || util.isCustomType)(...args);
  },
  noop: () => {},
});

const sandbox = sinon.createSandbox();

describe('BigQuery/Model', () => {
  const MODEL_ID = 'my_model';

  const DATASET = {
    id: 'dataset-id',
    projectId: 'project-id',
    createTable: util.noop,
    bigQuery: {
      job: (id: string) => {
        return {id};
      },
      apiEndpoint: 'bigquery.googleapis.com',
      request: util.noop,
    },
  };

  before(() => {
    Model = proxyquire('../src/model.js', {
      '@google-cloud/common': {
        ServiceObject: FakeServiceObject,
        util: fakeUtil,
      },
      '@google-cloud/promisify': fakePfy,
    }).Model;
  });

  beforeEach(() => {
    isCustomTypeOverride = null;
    model = new Model(DATASET, MODEL_ID);
    model.bigQuery.request = util.noop;
    model.bigQuery.createJob = util.noop;
  });

  afterEach(() => sandbox.restore());

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let model: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let Model: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  describe('instantiation', () => {
    it('should promisify all the things', () => {
      assert(promisified);
    });

    it('should inherit from ServiceObject', () => {
      assert(model instanceof FakeServiceObject);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const [config] = (model as any)._calledWith;
      assert.strictEqual(config.parent, DATASET);
      assert.strictEqual(config.baseUrl, '/models');
      assert.strictEqual(config.id, MODEL_ID);
      assert.deepStrictEqual(config.methods, {
        delete: true,
        exists: true,
        get: true,
        getMetadata: true,
        setMetadata: true,
      });
    });
  });

  describe('createExtractJob', () => {
    const URI = 'gs://bucket-name/model-export';

    const FILE = {
      name: 'model-export',
      bucket: {
        name: 'bucket-name',
      },
    };

    beforeEach(() => {
      isCustomTypeOverride = () => {
        return false;
      };

      model.bigQuery.job = sinon.stub();
      model.bigQuery.createJob = sinon.stub();
    });

    it('should call createJob correctly', done => {
      model.bigQuery.createJob = (reqOpts: JobOptions) => {
        assert.deepStrictEqual(reqOpts.configuration!.extract!.sourceModel, {
          datasetId: model.dataset.id,
          projectId: model.dataset.projectId,
          modelId: model.id,
        });

        done();
      };

      model.createExtractJob(URI, assert.ifError);
    });

    it('should accept just a destination and a callback', done => {
      model.bigQuery.createJob = (reqOpts: JobOptions, callback: Function) => {
        callback(null, {jobReference: {jobId: 'job-id'}});
      };

      model.createExtractJob(URI, done);
    });

    describe('formats', () => {
      it('should accept ML_TF_SAVED_MODEL', done => {
        model.bigQuery.createJob = (reqOpts: JobOptions) => {
          const extract = reqOpts.configuration!.extract!;
          assert.strictEqual(extract.destinationFormat, 'ML_TF_SAVED_MODEL');
          done();
        };

        model.createExtractJob(
          URI,
          {format: 'ml_tf_saved_model'},
          assert.ifError,
        );
      });

      it('ML_XGBOOST_BOOSTER', done => {
        model.bigQuery.createJob = (reqOpts: JobOptions) => {
          const extract = reqOpts.configuration!.extract!;
          assert.strictEqual(extract.destinationFormat, 'ML_XGBOOST_BOOSTER');
          done();
        };

        model.createExtractJob(
          URI,
          {format: 'ml_xgboost_booster'},
          assert.ifError,
        );
      });

      it('should parse out full gs:// urls from files', done => {
        isCustomTypeOverride = () => {
          return true;
        };

        model.bigQuery.createJob = (reqOpts: JobOptions) => {
          assert.deepStrictEqual(
            reqOpts.configuration!.extract!.destinationUris,
            ['gs://' + FILE.bucket.name + '/' + FILE.name],
          );
          done();
        };

        model.createExtractJob(FILE, assert.ifError);
      });

      it('should check if a destination is a File', done => {
        isCustomTypeOverride = (dest: {}, type: string) => {
          assert.strictEqual(dest, FILE);
          assert.strictEqual(type, 'storage/file');
          setImmediate(done);
          return true;
        };

        model.createExtractJob(FILE, assert.ifError);
      });

      it('should throw if a destination is not a string or a File', () => {
        isCustomTypeOverride = () => {
          return false;
        };

        assert.throws(() => {
          model.createExtractJob({}, util.noop);
        }, /Destination must be a string or a File object/);

        assert.throws(() => {
          model.createExtractJob([FILE, {}], util.noop);
        }, /Destination must be a string or a File object/);
      });

      it('should throw if a provided format is not recognized', () => {
        assert.throws(() => {
          model.createExtractJob(
            URI,
            {format: 'interpretive_dance'},
            util.noop,
          );
        }, /Destination format not recognized/);
      });

      it('should accept a job prefix', done => {
        const fakeJobPrefix = 'abc-';
        const options = {
          jobPrefix: fakeJobPrefix,
        };

        model.bigQuery.createJob = (
          reqOpts: JobOptions,
          callback: Function,
        ) => {
          assert.strictEqual(reqOpts.jobPrefix, fakeJobPrefix);
          assert.strictEqual(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (reqOpts.configuration!.extract as any).jobPrefix,
            undefined,
          );
          callback(); // the done fn
        };

        model.createExtractJob(URI, options, done);
      });

      it('should accept a reservation id', done => {
        const options = {
          reservation: 'reservation/1',
        };

        model.bigQuery.createJob = (
          reqOpts: JobOptions,
          callback: Function,
        ) => {
          assert.strictEqual(
            reqOpts.configuration?.reservation,
            'reservation/1',
          );
          callback(); // the done fn
        };

        model.createExtractJob(URI, options, done);
      });

      it('should accept a job id', done => {
        const jobId = 'job-id';
        const options = {jobId};

        model.bigQuery.createJob = (
          reqOpts: JobOptions,
          callback: Function,
        ) => {
          assert.strictEqual(reqOpts.jobId, jobId);
          assert.strictEqual(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (reqOpts.configuration!.extract as any).jobId,
            undefined,
          );
          callback(); // the done fn
        };

        model.createExtractJob(URI, options, done);
      });

      it('should pass the callback to createJob', done => {
        model.bigQuery.createJob = (
          reqOpts: JobOptions,
          callback: Function,
        ) => {
          assert.strictEqual(done, callback);
          callback(); // the done fn
        };

        model.createExtractJob(URI, {}, done);
      });

      it('should optionally accept options', done => {
        model.bigQuery.createJob = (
          reqOpts: JobOptions,
          callback: Function,
        ) => {
          assert.strictEqual(done, callback);
          callback(); // the done fn
        };

        model.createExtractJob(URI, done);
      });
    });
  });

  describe('extract', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let fakeJob: any;

    beforeEach(() => {
      fakeJob = new EventEmitter();
      model.createExtractJob = (
        destination: {},
        metadata: {},
        callback: Function,
      ) => {
        callback(null, fakeJob);
      };
    });

    it('should pass the arguments to createExtractJob', done => {
      const fakeDestination = {};
      const fakeMetadata = {};

      model.createExtractJob = (destination: {}, metadata: {}) => {
        assert.strictEqual(destination, fakeDestination);
        assert.strictEqual(metadata, fakeMetadata);
        done();
      };

      model.extract(fakeDestination, fakeMetadata, assert.ifError);
    });

    it('should optionally accept metadata', done => {
      model.createExtractJob = (destination: {}, metadata: {}) => {
        assert.deepStrictEqual(metadata, {});
        done();
      };

      model.extract({}, assert.ifError);
    });

    it('should return any createExtractJob errors', done => {
      const error = new Error('err');
      const response = {};

      model.createExtractJob = (
        destination: {},
        metadata: {},
        callback: Function,
      ) => {
        callback(error, null, response);
      };

      model.extract({}, (err: Error, resp: {}) => {
        assert.strictEqual(err, error);
        assert.strictEqual(resp, response);
        done();
      });
    });

    it('should return any job errors', done => {
      const error = new Error('err');

      model.extract({}, (err: Error) => {
        assert.strictEqual(err, error);
        done();
      });

      fakeJob.emit('error', error);
    });

    it('should return the metadata on complete', done => {
      const metadata = {};

      model.extract({}, (err: Error, resp: {}) => {
        assert.ifError(err);
        assert.strictEqual(resp, metadata);
        done();
      });

      fakeJob.emit('complete', metadata);
    });
  });
});
