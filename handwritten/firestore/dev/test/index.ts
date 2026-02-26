// Copyright 2017 Google LLC
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

import {describe, it, beforeEach, before, afterEach, after} from 'mocha';
import {expect, use} from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import * as extend from 'extend';
import {GoogleError, GrpcClient, Status} from 'google-gax';

import {google} from '../protos/firestore_v1_proto_api';

import * as Firestore from '../src';
import {DocumentSnapshot, FieldPath, FieldValue} from '../src';
import {setTimeoutHandler} from '../src/backoff';
import {QualifiedResourcePath} from '../src/path';
import {
  ApiOverride,
  createInstance,
  document,
  DOCUMENT_NAME,
  found,
  InvalidApiUsage,
  missing,
  response,
  stream,
  verifyInstance,
} from './util/helpers';

import api = google.firestore.v1;

use(chaiAsPromised);

const {grpc} = new GrpcClient({});

const PROJECT_ID = 'test-project';
const DATABASE_ROOT = `projects/${PROJECT_ID}/databases/(default)`;
const DEFAULT_SETTINGS = {
  projectId: PROJECT_ID,
  sslCreds: grpc.credentials.createInsecure(),
};

// Change the argument to 'console.log' to enable debug output.
Firestore.setLogFunction(null);

const bytesData = Buffer.from('AQI=', 'base64');

const allSupportedTypesProtobufJs = document(
  'documentId',
  'arrayValue',
  {
    arrayValue: {
      values: [
        {
          stringValue: 'foo',
        },
        {
          integerValue: 42,
        },
        {
          stringValue: 'bar',
        },
      ],
    },
  },
  'emptyArray',
  {
    arrayValue: {},
  },
  'dateValue',
  {
    timestampValue: {
      nanos: 123000000,
      seconds: 479978400,
    },
  },
  'timestampValue',
  {
    timestampValue: {
      nanos: 123000000,
      seconds: '479978400',
    },
  },
  'doubleValue',
  {
    doubleValue: 0.1,
  },
  'falseValue',
  {
    booleanValue: false,
  },
  'infinityValue',
  {
    doubleValue: Infinity,
  },
  'integerValue',
  {
    integerValue: 0,
  },
  'negativeInfinityValue',
  {
    doubleValue: -Infinity,
  },
  'nilValue',
  {
    nullValue: 'NULL_VALUE',
  },
  'objectValue',
  {
    mapValue: {
      fields: {
        foo: {
          stringValue: 'bar',
        },
      },
    },
  },
  'vectorValue',
  {
    mapValue: {
      fields: {
        __type__: {
          stringValue: '__vector__',
        },
        value: {
          arrayValue: {
            values: [
              {
                doubleValue: 0.1,
              },
              {
                doubleValue: 0.2,
              },
              {
                doubleValue: 0.3,
              },
            ],
          },
        },
      },
    },
  },
  'emptyObject',
  {
    mapValue: {},
  },
  'pathValue',
  {
    referenceValue: `${DATABASE_ROOT}/documents/collection/document`,
  },
  'stringValue',
  {
    stringValue: 'a',
  },
  'trueValue',
  {
    booleanValue: true,
  },
  'geoPointValue',
  {
    geoPointValue: {
      latitude: 50.1430847,
      longitude: -122.947778,
    },
  },
  'bytesValue',
  {
    bytesValue: Buffer.from('AQI=', 'base64'),
  },
);

const allSupportedTypesJson = {
  name: `${DOCUMENT_NAME}`,
  fields: {
    arrayValue: {
      arrayValue: {
        values: [
          {
            stringValue: 'foo',
          },
          {
            integerValue: 42,
          },
          {
            stringValue: 'bar',
          },
        ],
      },
    },
    emptyArray: {
      arrayValue: {},
    },
    dateValue: {
      timestampValue: '1985-03-18T07:20:00.123000000Z',
    },
    timestampValue: {
      timestampValue: '1985-03-18T07:20:00.123000000Z',
    },
    doubleValue: {
      doubleValue: 0.1,
    },
    falseValue: {
      booleanValue: false,
    },
    infinityValue: {
      doubleValue: Infinity,
    },
    integerValue: {
      integerValue: 0,
    },
    negativeInfinityValue: {
      doubleValue: -Infinity,
    },
    nilValue: {
      nullValue: 'NULL_VALUE',
    },
    objectValue: {
      mapValue: {
        fields: {
          foo: {
            stringValue: 'bar',
          },
        },
      },
    },
    emptyObject: {
      mapValue: {},
    },
    vectorValue: {
      mapValue: {
        fields: {
          __type__: {
            stringValue: '__vector__',
          },
          value: {
            arrayValue: {
              values: [
                {
                  doubleValue: 0.1,
                },
                {
                  doubleValue: 0.2,
                },
                {
                  doubleValue: 0.3,
                },
              ],
            },
          },
        },
      },
    },
    pathValue: {
      referenceValue: `${DATABASE_ROOT}/documents/collection/document`,
    },
    stringValue: {
      stringValue: 'a',
    },
    trueValue: {
      booleanValue: true,
    },
    geoPointValue: {
      geoPointValue: {
        latitude: 50.1430847,
        longitude: -122.947778,
      },
    },
    bytesValue: {
      bytesValue: 'AQI=',
    },
  },
  createTime: {seconds: 1, nanos: 2},
  updateTime: {seconds: 3, nanos: 4},
};

const allSupportedTypesInput = {
  stringValue: 'a',
  trueValue: true,
  falseValue: false,
  integerValue: 0,
  doubleValue: 0.1,
  infinityValue: Infinity,
  negativeInfinityValue: -Infinity,
  objectValue: {foo: 'bar'},
  emptyObject: {},
  vectorValue: FieldValue.vector([0.1, 0.2, 0.3]),
  dateValue: new Date('Mar 18, 1985 08:20:00.123 GMT+0100 (CET)'),
  timestampValue: Firestore.Timestamp.fromDate(
    new Date('Mar 18, 1985 08:20:00.123 GMT+0100 (CET)'),
  ),
  pathValue: new Firestore.DocumentReference(
    {
      formattedName: DATABASE_ROOT,
      _getProjectId: () => ({projectId: PROJECT_ID, databaseId: '(default)'}),
    } as any, // eslint-disable-line @typescript-eslint/no-explicit-any
    new QualifiedResourcePath(
      PROJECT_ID,
      '(default)',
      'collection',
      'document',
    ),
  ),
  arrayValue: ['foo', 42, 'bar'],
  emptyArray: [],
  nilValue: null,
  geoPointValue: new Firestore.GeoPoint(50.1430847, -122.947778),
  bytesValue: Buffer.from([0x1, 0x2]),
};

const allSupportedTypesOutput: {[field: string]: unknown} = {
  stringValue: 'a',
  trueValue: true,
  falseValue: false,
  integerValue: 0,
  doubleValue: 0.1,
  infinityValue: Infinity,
  negativeInfinityValue: -Infinity,
  objectValue: {foo: 'bar'},
  emptyObject: {},
  vectorValue: FieldValue.vector([0.1, 0.2, 0.3]),
  dateValue: Firestore.Timestamp.fromDate(
    new Date('Mar 18, 1985 08:20:00.123 GMT+0100 (CET)'),
  ),
  timestampValue: Firestore.Timestamp.fromDate(
    new Date('Mar 18, 1985 08:20:00.123 GMT+0100 (CET)'),
  ),
  pathValue: new Firestore.DocumentReference(
    {
      formattedName: DATABASE_ROOT,
      _getProjectId: () => ({projectId: PROJECT_ID, databaseId: '(default)'}),
    } as any, // eslint-disable-line @typescript-eslint/no-explicit-any
    new QualifiedResourcePath(
      PROJECT_ID,
      '(default)',
      'collection',
      'document',
    ),
  ),
  arrayValue: ['foo', 42, 'bar'],
  emptyArray: [],
  nilValue: null,
  geoPointValue: new Firestore.GeoPoint(50.1430847, -122.947778),
  bytesValue: Buffer.from([0x1, 0x2]),
};

describe('instantiation', () => {
  it('creates instance', () => {
    const firestore = new Firestore.Firestore(DEFAULT_SETTINGS);
    expect(firestore).to.be.an.instanceOf(Firestore.Firestore);
  });

  it('merges settings', () => {
    const firestore = new Firestore.Firestore(DEFAULT_SETTINGS);
    firestore.settings({foo: 'bar'});

    /* eslint-disable @typescript-eslint/no-explicit-any */
    expect((firestore as any)._settings.projectId).to.equal(PROJECT_ID);
    expect((firestore as any)._settings.databaseId).to.be.undefined;
    expect((firestore as any)._settings.foo).to.equal('bar');
    /* eslint-enable @typescript-eslint/no-explicit-any */
  });

  it('can only call settings() once', () => {
    const firestore = new Firestore.Firestore(DEFAULT_SETTINGS);
    firestore.settings({});

    expect(() => firestore.settings({})).to.throw(
      'Firestore has already been initialized. You can only call settings() once, and only before calling any other methods on a Firestore object.',
    );
  });

  it('cannot change settings after client initialized', async () => {
    const firestore = new Firestore.Firestore(DEFAULT_SETTINGS);
    await firestore.initializeIfNeeded('tag');

    expect(() => firestore.settings({})).to.throw(
      'Firestore has already been initialized. You can only call settings() once, and only before calling any other methods on a Firestore object.',
    );
  });

  it('validates project ID is string', () => {
    expect(() => {
      const settings = {...DEFAULT_SETTINGS, projectId: 1337};
      new Firestore.Firestore(settings as InvalidApiUsage);
    }).to.throw(
      'Value for argument "settings.projectId" is not a valid string.',
    );

    expect(() => {
      new Firestore.Firestore(DEFAULT_SETTINGS).settings({
        projectId: 1337,
      } as InvalidApiUsage);
    }).to.throw(
      'Value for argument "settings.projectId" is not a valid string.',
    );
  });

  it('validates database ID is string', () => {
    expect(() => {
      const settings = {...DEFAULT_SETTINGS, databaseId: 1337};
      new Firestore.Firestore(settings as InvalidApiUsage);
    }).to.throw(
      'Value for argument "settings.databaseId" is not a valid string.',
    );

    expect(() => {
      new Firestore.Firestore(DEFAULT_SETTINGS).settings({
        databaseId: 1337,
      } as InvalidApiUsage);
    }).to.throw(
      'Value for argument "settings.databaseId" is not a valid string.',
    );
  });

  it('validates ssl is a boolean', () => {
    const invalidValues = ['true', 1337];

    for (const value of invalidValues) {
      expect(() => {
        const settings = {...DEFAULT_SETTINGS, ssl: value};
        new Firestore.Firestore(settings as InvalidApiUsage);
      }).to.throw('Value for argument "settings.ssl" is not a valid boolean.');
    }

    new Firestore.Firestore({ssl: true});
  });

  it('validates host is a valid host', () => {
    const invalidValues = [
      'foo://bar',
      'foobar/foobaz',
      'foobar/?foo',
      'foo@foobar',
      'foo:80:81',
    ];
    for (const value of invalidValues) {
      expect(() => {
        new Firestore.Firestore({host: value});
      }).to.throw('Value for argument "settings.host" is not a valid host.');
    }

    const validValues = [
      '127.0.0.1',
      '127.0.0.1:8080',
      '[::1]',
      '[::1]:8080',
      'foo',
      'foo:8080',
    ];
    for (const value of validValues) {
      new Firestore.Firestore({host: value});
    }
  });

  it('validates FIRESTORE_EMULATOR_HOST is a valid host', () => {
    const oldValue = process.env.FIRESTORE_EMULATOR_HOST;

    try {
      const invalidValues = [
        'foo://bar',
        'foobar/foobaz',
        'foobar/?foo',
        'foo@foobar',
        'foo:80:81',
      ];
      for (const value of invalidValues) {
        expect(() => {
          process.env.FIRESTORE_EMULATOR_HOST = value;
          new Firestore.Firestore();
        }).to.throw(
          'Value for argument "FIRESTORE_EMULATOR_HOST" is not a valid host.',
        );
      }

      const validValues = [
        '127.0.0.1',
        '127.0.0.1:8080',
        '[::1]',
        '[::1]:8080',
        'foo',
        'foo:8080',
      ];
      for (const value of validValues) {
        process.env.FIRESTORE_EMULATOR_HOST = value;
        new Firestore.Firestore();
      }
    } finally {
      if (oldValue) {
        process.env.FIRESTORE_EMULATOR_HOST = oldValue;
      } else {
        delete process.env.FIRESTORE_EMULATOR_HOST;
      }
    }
  });

  it('"settings.host" takes precedence without FIRESTORE_EMULATOR_HOST', () => {
    const oldValue = process.env.FIRESTORE_EMULATOR_HOST;

    try {
      delete process.env.FIRESTORE_EMULATOR_HOST;

      let firestore = new Firestore.Firestore({
        apiEndpoint: 'api-host',
      });
      firestore.settings({host: 'new-host:100'});
      expect(firestore._settings.servicePath).to.equal('new-host');

      firestore = new Firestore.Firestore({
        servicePath: 'service-host',
      });
      firestore.settings({host: 'new-host:100'});
      expect(firestore._settings.servicePath).to.equal('new-host');

      firestore = new Firestore.Firestore({
        apiEndpoint: 'api-host',
        servicePath: 'service-host',
      });
      firestore.settings({host: 'new-host:100'});
      expect(firestore._settings.servicePath).to.equal('new-host');
    } finally {
      if (oldValue) {
        process.env.FIRESTORE_EMULATOR_HOST = oldValue;
      } else {
        delete process.env.FIRESTORE_EMULATOR_HOST;
      }
    }
  });

  it('FIRESTORE_EMULATOR_HOST ignores host', () => {
    const oldValue = process.env.FIRESTORE_EMULATOR_HOST;

    try {
      process.env.FIRESTORE_EMULATOR_HOST = 'env-host:8080';
      const firestore = new Firestore.Firestore({
        host: 'localhost:8080',
      });
      expect(firestore._settings.servicePath).to.equal('env-host');
      firestore.settings({host: 'localhost:8080'});
      expect(firestore._settings.servicePath).to.equal('env-host');
    } finally {
      if (oldValue) {
        process.env.FIRESTORE_EMULATOR_HOST = oldValue;
      } else {
        delete process.env.FIRESTORE_EMULATOR_HOST;
      }
    }
  });

  it('FIRESTORE_EMULATOR_HOST ignores servicePath', () => {
    const oldValue = process.env.FIRESTORE_EMULATOR_HOST;

    try {
      process.env.FIRESTORE_EMULATOR_HOST = 'foo';
      const firestore = new Firestore.Firestore({servicePath: 'bar'});
      expect(firestore._settings.servicePath).to.equal('foo');
      firestore.settings({servicePath: 'bar'});
      expect(firestore._settings.servicePath).to.equal('foo');
    } finally {
      if (oldValue) {
        process.env.FIRESTORE_EMULATOR_HOST = oldValue;
      } else {
        delete process.env.FIRESTORE_EMULATOR_HOST;
      }
    }
  });

  it('FIRESTORE_EMULATOR_HOST overrides other endpoint', done => {
    const oldValue = process.env.FIRESTORE_EMULATOR_HOST;

    try {
      process.env.FIRESTORE_EMULATOR_HOST = 'new';
      const firestore = new Firestore.Firestore({servicePath: 'old'});
      firestore['validateAndApplySettings'] = settings => {
        expect(settings.servicePath).to.equal('new');
        done();
      };
      firestore.settings({});
    } finally {
      if (oldValue) {
        process.env.FIRESTORE_EMULATOR_HOST = oldValue;
      } else {
        delete process.env.FIRESTORE_EMULATOR_HOST;
      }
    }
  });

  it('FIRESTORE_EMULATOR_HOST keeps user-provided headers', done => {
    const oldValue = process.env.FIRESTORE_EMULATOR_HOST;

    try {
      process.env.FIRESTORE_EMULATOR_HOST = 'new';
      const firestore = new Firestore.Firestore({customHeaders: {foo: 'bar'}});
      firestore['validateAndApplySettings'] = settings => {
        expect(settings.customHeaders.foo).to.equal('bar');
        done();
      };
      firestore.settings({});
    } finally {
      if (oldValue) {
        process.env.FIRESTORE_EMULATOR_HOST = oldValue;
      } else {
        delete process.env.FIRESTORE_EMULATOR_HOST;
      }
    }
  });

  it('validates maxIdleChannels', () => {
    const invalidValues = [-1, 'foo', 1.3];

    for (const value of invalidValues) {
      expect(() => {
        const settings = {...DEFAULT_SETTINGS, maxIdleChannels: value};
        new Firestore.Firestore(settings as InvalidApiUsage);
      }).to.throw();
    }

    new Firestore.Firestore({maxIdleChannels: 1});
  });

  it('uses project id and database id from constructor', () => {
    const firestore = new Firestore.Firestore({
      projectId: 'foo',
      databaseId: 'bar',
    });

    return expect(firestore.formattedName).to.equal(
      'projects/foo/databases/bar',
    );
  });

  it('uses project id from gapic client', async () => {
    return createInstance(
      {
        getProjectId: () => Promise.resolve('foo'),
      },
      {projectId: undefined},
    ).then(async firestore => {
      await firestore.initializeIfNeeded('tag');
      expect(firestore.projectId).to.equal('foo');
      expect(firestore.formattedName).to.equal(
        'projects/foo/databases/(default)',
      );
    });
  });

  it('uses project ID from settings() and default database ID', () => {
    const firestore = new Firestore.Firestore({
      sslCreds: grpc.credentials.createInsecure(),
    });

    firestore.settings({projectId: PROJECT_ID});

    expect(firestore.formattedName).to.equal(
      `projects/${PROJECT_ID}/databases/(default)`,
    );
  });

  it('uses database ID and database ID from settings()', () => {
    const firestore = new Firestore.Firestore({
      sslCreds: grpc.credentials.createInsecure(),
    });

    firestore.settings({projectId: PROJECT_ID, databaseId: 'bar'});

    expect(firestore.formattedName).to.equal(
      `projects/${PROJECT_ID}/databases/bar`,
    );
  });

  it('handles error from project ID detection', () => {
    return createInstance(
      {
        getProjectId: () => Promise.reject(new Error('Injected Error')),
      },
      {projectId: undefined},
    ).then(firestore => {
      return expect(
        firestore.collection('foo').add({}),
      ).to.eventually.be.rejectedWith('Injected Error');
    });
  });

  it('can instantiate client with ssl:false', async () => {
    const firestore = new Firestore.Firestore({
      ssl: false,
      projectId: 'foo',
    });
    await firestore['_clientPool'].run('tag', /* requiresGrpc= */ false, () =>
      Promise.resolve(),
    );
  });

  describe('preferRest configuration', () => {
    let originalValue: string | undefined;

    beforeEach(() => {
      originalValue = process.env.FIRESTORE_PREFER_REST;
    });

    afterEach(() => {
      if (originalValue === undefined) {
        delete process.env.FIRESTORE_PREFER_REST;
      } else {
        process.env.FIRESTORE_PREFER_REST = originalValue;
      }
    });

    it('preferRest is disabled (falsy) by default', async () => {
      delete process.env.FIRESTORE_PREFER_REST;
      const firestore = new Firestore.Firestore({});
      // Convention with settings is to leave undefined settings as
      // undefined. We could test for undefined here, but converting
      // to boolean and testing for falsy-ness is consistent with the
      // code that consumes settings.
      expect(!!firestore['_settings'].preferRest).to.be.false;
    });

    it('preferRest can be enabled by setting', async () => {
      delete process.env.FIRESTORE_PREFER_REST;
      const firestore = new Firestore.Firestore({
        preferRest: true,
      });
      expect(firestore['_settings'].preferRest).to.be.true;
    });

    it('preferRest can be enabled by environment variable', async () => {
      process.env.FIRESTORE_PREFER_REST = 'true';
      const firestore = new Firestore.Firestore({});
      expect(firestore['_settings'].preferRest).to.be.true;
    });

    it('the preferRest value from settings takes precedent over the environment var - disable', async () => {
      process.env.FIRESTORE_PREFER_REST = 'true';
      const firestore = new Firestore.Firestore({
        preferRest: false,
      });
      expect(firestore['_settings'].preferRest).to.be.false;
    });

    it('the preferRest value from settings takes precedent over the environment var - enable', async () => {
      process.env.FIRESTORE_PREFER_REST = 'false';
      const firestore = new Firestore.Firestore({
        preferRest: true,
      });
      expect(firestore['_settings'].preferRest).to.be.true;
    });
  });

  it('exports all types', () => {
    // Ordering as per firestore.d.ts
    expect(Firestore.Firestore).to.exist;
    expect(Firestore.Firestore.name).to.equal('Firestore');
    expect(Firestore.Timestamp).to.exist;
    expect(Firestore.Timestamp.name).to.equal('Timestamp');
    expect(Firestore.GeoPoint).to.exist;
    expect(Firestore.GeoPoint.name).to.equal('GeoPoint');
    expect(Firestore.Transaction).to.exist;
    expect(Firestore.Transaction.name).to.equal('Transaction');
    expect(Firestore.WriteBatch).to.exist;
    expect(Firestore.WriteBatch.name).to.equal('WriteBatch');
    expect(Firestore.DocumentReference).to.exist;
    expect(Firestore.DocumentReference.name).to.equal('DocumentReference');
    expect(Firestore.WriteResult).to.exist;
    expect(Firestore.WriteResult.name).to.equal('WriteResult');
    expect(Firestore.DocumentSnapshot).to.exist;
    expect(Firestore.DocumentSnapshot.name).to.equal('DocumentSnapshot');
    expect(Firestore.QueryDocumentSnapshot).to.exist;
    expect(Firestore.QueryDocumentSnapshot.name).to.equal(
      'QueryDocumentSnapshot',
    );
    expect(Firestore.Query).to.exist;
    expect(Firestore.Query.name).to.equal('Query');
    expect(Firestore.QuerySnapshot).to.exist;
    expect(Firestore.QuerySnapshot.name).to.equal('QuerySnapshot');
    expect(Firestore.CollectionReference).to.exist;
    expect(Firestore.CollectionReference.name).to.equal('CollectionReference');
    expect(Firestore.FieldValue).to.exist;
    expect(Firestore.FieldValue.name).to.equal('FieldValue');
    expect(Firestore.FieldPath).to.exist;
    expect(Firestore.Firestore.name).to.equal('Firestore');
    expect(
      Firestore.FieldValue.serverTimestamp().isEqual(
        Firestore.FieldValue.delete(),
      ),
    ).to.be.false;
  });
});

describe('serializer', () => {
  it('supports all types', () => {
    const overrides: ApiOverride = {
      commit: request => {
        expect(allSupportedTypesProtobufJs.fields).to.deep.eq(
          request.writes![0].update!.fields,
        );
        return response({
          commitTime: {},
          writeResults: [
            {
              updateTime: {},
            },
          ],
        });
      },
    };

    return createInstance(overrides).then(firestore => {
      return firestore.collection('coll').add(allSupportedTypesInput);
    });
  });
});

describe('snapshot_() method', () => {
  let firestore: Firestore.Firestore;

  function verifyAllSupportedTypes(actualObject: DocumentSnapshot) {
    const expected = extend(true, {}, allSupportedTypesOutput);
    // Deep Equal doesn't support matching instances of DocumentRefs, so we
    // compare them manually and remove them from the resulting object.
    expect(actualObject.get('pathValue').formattedName).to.equal(
      (expected.pathValue as Firestore.DocumentReference).formattedName,
    );
    const data = actualObject.data()!;
    delete data.pathValue;
    delete expected.pathValue;
    expect(data).to.deep.eq(expected);

    // We specifically test the GeoPoint properties to ensure 100% test
    // coverage.
    expect(data.geoPointValue.latitude).to.equal(50.1430847);
    expect(data.geoPointValue.longitude).to.equal(-122.947778);
    expect(
      data.geoPointValue.isEqual(
        new Firestore.GeoPoint(50.1430847, -122.947778),
      ),
    ).to.be.true;
  }

  beforeEach(() => {
    // Unlike most other tests, we don't call `ensureClient` since the
    // `snapshot_` method does not require a GAPIC client.
    firestore = new Firestore.Firestore({
      projectId: PROJECT_ID,
      sslCreds: grpc.credentials.createInsecure(),
    });
  });

  afterEach(() => verifyInstance(firestore));

  it('handles ProtobufJS', () => {
    const doc = firestore.snapshot_(
      document('doc', 'foo', {bytesValue: bytesData}),
      {seconds: 5, nanos: 6},
    );

    expect(doc.exists).to.be.true;
    expect({foo: bytesData}).to.deep.eq(doc.data());
    expect(doc.createTime!.isEqual(new Firestore.Timestamp(1, 2))).to.be.true;
    expect(doc.updateTime!.isEqual(new Firestore.Timestamp(3, 4))).to.be.true;
    expect(doc.readTime.isEqual(new Firestore.Timestamp(5, 6))).to.be.true;
  });

  it('handles Proto3 JSON together with existing types', () => {
    // Google Cloud Functions must be able to call snapshot_() with Proto3 JSON
    // data.
    const doc = firestore.snapshot_(
      {
        name: `${DATABASE_ROOT}/documents/collectionId/doc`,
        fields: {
          a: {bytesValue: 'AQI='},
          b: {timestampValue: '1985-03-18T07:20:00.000Z'},
          c: {
            valueType: 'bytesValue',
            bytesValue: Buffer.from('AQI=', 'base64'),
          },
        },
        createTime: '1970-01-01T00:00:01.002Z',
        updateTime: '1970-01-01T00:00:03.000004Z',
      },
      '1970-01-01T00:00:05.000000006Z',
      'json',
    );

    expect(doc.exists).to.be.true;
    expect(doc.data()).to.deep.eq({
      a: bytesData,
      b: Firestore.Timestamp.fromDate(new Date('1985-03-18T07:20:00.000Z')),
      c: bytesData,
    });
    expect(doc.createTime!.isEqual(new Firestore.Timestamp(1, 2000000))).to.be
      .true;
    expect(doc.updateTime!.isEqual(new Firestore.Timestamp(3, 4000))).to.be
      .true;
    expect(doc.readTime.isEqual(new Firestore.Timestamp(5, 6))).to.be.true;
  });

  it('deserializes all supported types from Protobuf JS', () => {
    const doc = firestore.snapshot_(allSupportedTypesProtobufJs, {
      seconds: 5,
      nanos: 6,
    });

    verifyAllSupportedTypes(doc);
  });

  it('deserializes all supported types from Proto3 JSON', () => {
    const doc = firestore.snapshot_(
      allSupportedTypesJson,
      '1970-01-01T00:00:05.000000006Z',
      'json',
    );
    verifyAllSupportedTypes(doc);
  });

  it('handles invalid Proto3 JSON', () => {
    expect(() => {
      firestore.snapshot_(
        {
          name: `${DATABASE_ROOT}/documents/collectionId/doc`,
          fields: {foo: {}},
          createTime: '1970-01-01T00:00:01.000000002Z',
          updateTime: '1970-01-01T00:00:03.000000004Z',
        },
        '1970-01-01T00:00:05.000000006Z',
        'json',
      );
    }).to.throw("Unable to infer type value from '{}'.");

    expect(() => {
      firestore.snapshot_(
        {
          name: `${DATABASE_ROOT}/documents/collectionId/doc`,
          fields: {foo: {stringValue: 'bar', integerValue: 42}},
          createTime: '1970-01-01T00:00:01.000000002Z',
          updateTime: '1970-01-01T00:00:03.000000004Z',
        },
        '1970-01-01T00:00:05.000000006Z',
        'json',
      );
    }).to.throw(
      'Unable to infer type value from \'{"stringValue":"bar","integerValue":42}\'.',
    );

    expect(() => {
      firestore.snapshot_(
        {
          name: `${DATABASE_ROOT}/documents/collectionId/doc`,
          fields: {foo: {stringValue: 'bar'}},
          createTime: '1970-01-01T00:00:01.NaNZ',
          updateTime: '1970-01-01T00:00:03.000000004Z',
        },
        '1970-01-01T00:00:05.000000006Z',
        'json',
      );
    }).to.throw(
      'Specify a valid ISO 8601 timestamp for "documentOrName.createTime".',
    );
  });

  it('handles missing document ', () => {
    const doc = firestore.snapshot_(
      `${DATABASE_ROOT}/documents/collectionId/doc`,
      '1970-01-01T00:00:05.000000006Z',
      'json',
    );

    expect(doc.exists).to.be.false;
    expect(doc.readTime.isEqual(new Firestore.Timestamp(5, 6))).to.be.true;
  });

  it('handles invalid encoding format ', () => {
    expect(() => {
      firestore.snapshot_(
        `${DATABASE_ROOT}/documents/collectionId/doc`,
        '1970-01-01T00:00:05.000000006Z',
        'ascii' as InvalidApiUsage,
      );
    }).to.throw(
      'Unsupported encoding format. Expected "json" or "protobufJS", but was "ascii".',
    );
  });
});

describe('doc() method', () => {
  let firestore: Firestore.Firestore;

  beforeEach(() => {
    return createInstance().then(firestoreInstance => {
      firestore = firestoreInstance;
    });
  });

  afterEach(() => verifyInstance(firestore));

  it('returns DocumentReference', () => {
    const documentRef = firestore.doc('collectionId/documentId');
    expect(documentRef).to.be.an.instanceOf(Firestore.DocumentReference);
  });

  it('requires document path', () => {
    expect(() => (firestore as InvalidApiUsage).doc()).to.throw(
      'Value for argument "documentPath" is not a valid resource path. Path must be a non-empty string.',
    );
  });

  it("doesn't accept empty components", () => {
    expect(() => firestore.doc('coll//doc')).to.throw(
      'Value for argument "documentPath" is not a valid resource path. Paths must not contain //.',
    );
  });

  it('must point to document', () => {
    expect(() => firestore.doc('collectionId')).to.throw(
      'Value for argument "documentPath" must point to a document, but was "collectionId". Your path does not contain an even number of components.',
    );
  });

  it('exposes properties', () => {
    const documentRef = firestore.doc('collectionId/documentId');
    expect(documentRef.id).to.equal('documentId');
    expect(documentRef.firestore).to.equal(firestore);
  });
});

describe('collection() method', () => {
  let firestore: Firestore.Firestore;

  beforeEach(() => {
    return createInstance().then(firestoreInstance => {
      firestore = firestoreInstance;
    });
  });

  afterEach(() => verifyInstance(firestore));

  it('returns collection', () => {
    const collection = firestore.collection('col1/doc1/col2');
    expect(collection).to.be.an.instanceOf(Firestore.CollectionReference);
  });

  it('requires collection id', () => {
    expect(() => (firestore as InvalidApiUsage).collection()).to.throw(
      'Value for argument "collectionPath" is not a valid resource path. Path must be a non-empty string.',
    );
  });

  it('must point to a collection', () => {
    expect(() => firestore.collection('collectionId/documentId')).to.throw(
      'Value for argument "collectionPath" must point to a collection, but was "collectionId/documentId". Your path does not contain an odd number of components.',
    );
  });

  it('exposes properties', () => {
    const collection = firestore.collection('collectionId');
    expect(collection.id).to.exist;
    expect(collection.doc).to.exist;
    expect(collection.id).to.equal('collectionId');
  });
});

describe('listCollections() method', () => {
  it('returns collections', () => {
    const overrides: ApiOverride = {
      listCollectionIds: request => {
        expect(request).to.deep.eq({
          parent: `projects/${PROJECT_ID}/databases/(default)/documents`,
        });

        return response(['first', 'second']);
      },
    };

    return createInstance(overrides).then(firestore => {
      return firestore.listCollections().then(collections => {
        expect(collections[0].path).to.equal('first');
        expect(collections[1].path).to.equal('second');
      });
    });
  });
});

describe('getAll() method', () => {
  before(() => {
    setTimeoutHandler(setImmediate);
  });

  after(() => setTimeoutHandler(setTimeout));

  function resultEquals(
    result: DocumentSnapshot[],
    ...docs: api.IBatchGetDocumentsResponse[]
  ) {
    expect(result.length).to.equal(docs.length);

    for (let i = 0; i < result.length; ++i) {
      const doc = docs[i];

      if (doc.found) {
        expect(result[i].exists).to.be.true;
        expect(result[i].ref.formattedName).to.equal(doc.found.name);
      } else {
        expect(result[i].exists).to.be.false;
        expect(result[i].ref.formattedName).to.equal(doc.missing);
      }
    }
  }

  it('accepts single document', () => {
    const overrides: ApiOverride = {
      batchGetDocuments: () => {
        return stream(found('documentId'));
      },
    };

    return createInstance(overrides).then(firestore => {
      return firestore
        .getAll(firestore.doc('collectionId/documentId'))
        .then(result => {
          resultEquals(result, found('documentId'));
        });
    });
  });

  it('verifies response', () => {
    const overrides: ApiOverride = {
      batchGetDocuments: () => {
        return stream(found('documentId2'));
      },
    };

    return createInstance(overrides).then(firestore => {
      return firestore
        .getAll(firestore.doc('collectionId/documentId'))
        .then(() => {
          throw new Error('Unexpected success in Promise');
        })
        .catch(err => {
          expect(err.message).to.equal(
            'Did not receive document for "collectionId/documentId".',
          );
        });
    });
  });

  it('handles stream exception during initialization', () => {
    let attempts = 0;

    const overrides: ApiOverride = {
      batchGetDocuments: () => {
        ++attempts;
        return stream(new Error('Expected exception'));
      },
    };

    return createInstance(overrides).then(firestore => {
      return firestore
        .getAll(firestore.doc('collectionId/documentId'))
        .then(() => {
          throw new Error('Unexpected success in Promise');
        })
        .catch(err => {
          expect(attempts).to.equal(5);
          expect(err.message).to.equal('Expected exception');
        });
    });
  });

  it('handles stream exception (before first result)', () => {
    let attempts = 0;

    const overrides: ApiOverride = {
      batchGetDocuments: () => {
        if (attempts < 3) {
          ++attempts;
          throw new Error('Expected error');
        } else {
          return stream(found(document('documentId')));
        }
      },
    };

    return createInstance(overrides).then(firestore => {
      return firestore
        .doc('collectionId/documentId')
        .get()
        .then(() => {
          expect(attempts).to.equal(3);
        });
    });
  });

  it('handles stream exception (with retryable error)', () => {
    let attempts = 0;

    const error = new GoogleError('Expected exception');
    error.code = Status.DEADLINE_EXCEEDED;

    const overrides: ApiOverride = {
      batchGetDocuments: () => {
        ++attempts;
        return stream(found(document(`doc${attempts}`)), error);
      },
    };

    return createInstance(overrides).then(async firestore => {
      const docs = await firestore.getAll(
        firestore.doc('collectionId/doc1'),
        firestore.doc('collectionId/doc2'),
        firestore.doc('collectionId/doc3'),
      );

      expect(attempts).to.equal(3);
      expect(docs.length).to.equal(3);
      expect(docs[0].ref.path).to.equal('collectionId/doc1');
      expect(docs[1].ref.path).to.equal('collectionId/doc2');
      expect(docs[2].ref.path).to.equal('collectionId/doc3');
    });
  });

  it('handles stream exception (with non-retryable error)', () => {
    let attempts = 0;

    const error = new GoogleError('Expected exception');
    error.code = Status.PERMISSION_DENIED;

    const overrides: ApiOverride = {
      batchGetDocuments: () => {
        ++attempts;
        return stream(found(document(`doc${attempts}`)), error);
      },
    };

    return createInstance(overrides).then(async firestore => {
      try {
        await firestore.getAll(
          firestore.doc('collectionId/doc1'),
          firestore.doc('collectionId/doc2'),
          firestore.doc('collectionId/doc3'),
        );
        expect.fail();
      } catch (err) {
        expect(attempts).to.equal(1);
        expect(err.code).to.equal(Status.PERMISSION_DENIED);
      }
    });
  });

  it('retries based on error code', () => {
    const expectedErrorAttempts: {[key: number]: number} = {
      [Status.CANCELLED]: 1,
      [Status.UNKNOWN]: 1,
      [Status.INVALID_ARGUMENT]: 1,
      [Status.DEADLINE_EXCEEDED]: 5,
      [Status.NOT_FOUND]: 1,
      [Status.ALREADY_EXISTS]: 1,
      [Status.PERMISSION_DENIED]: 1,
      [Status.RESOURCE_EXHAUSTED]: 5,
      [Status.FAILED_PRECONDITION]: 1,
      [Status.ABORTED]: 1,
      [Status.OUT_OF_RANGE]: 1,
      [Status.UNIMPLEMENTED]: 1,
      [Status.INTERNAL]: 5,
      [Status.UNAVAILABLE]: 5,
      [Status.DATA_LOSS]: 1,
      [Status.UNAUTHENTICATED]: 1,
    };

    const actualErrorAttempts: {[key: number]: number} = {};

    const overrides: ApiOverride = {
      batchGetDocuments: request => {
        const errorCode = Number(request!.documents![0].split('/').pop());
        actualErrorAttempts[errorCode] =
          (actualErrorAttempts[errorCode] || 0) + 1;
        const error = new GoogleError('Expected exception');
        error.code = errorCode;
        return stream(error);
      },
    };

    return createInstance(overrides).then(async firestore => {
      const coll = firestore.collection('collectionId');

      for (const errorCode of Object.keys(expectedErrorAttempts)) {
        await firestore
          .getAll(coll.doc(`${errorCode}`))
          .then(() => {
            throw new Error('Unexpected success in Promise');
          })
          .catch(err => {
            expect(err.code).to.equal(Number(errorCode));
          });
      }

      expect(actualErrorAttempts).to.deep.eq(expectedErrorAttempts);
    });
  }).timeout(5000);

  it('requires at least one argument', () => {
    return createInstance().then(firestore => {
      expect(() => (firestore as InvalidApiUsage).getAll()).to.throw(
        'Function "Firestore.getAll()" requires at least 1 argument.',
      );
    });
  });

  it('validates document references', () => {
    return createInstance().then(firestore => {
      expect(() => firestore.getAll(null as InvalidApiUsage)).to.throw(
        'Element at index 0 is not a valid DocumentReference.',
      );
    });
  });

  it('returns not found for missing documents', () => {
    const overrides: ApiOverride = {
      batchGetDocuments: () => stream(found('exists'), missing('missing')),
    };

    return createInstance(overrides).then(firestore => {
      return firestore
        .getAll(
          firestore.doc('collectionId/exists'),
          firestore.doc('collectionId/missing'),
        )
        .then(result => {
          resultEquals(result, found('exists'), missing('missing'));
        });
    });
  });

  it('returns results in order', () => {
    const overrides: ApiOverride = {
      batchGetDocuments: () => {
        return stream(
          // Note that these are out of order.
          found('second'),
          found('first'),
          found('fourth'),
          found('third'),
        );
      },
    };

    return createInstance(overrides).then(firestore => {
      return firestore
        .getAll(
          firestore.doc('collectionId/first'),
          firestore.doc('collectionId/second'),
          firestore.doc('collectionId/third'),
          firestore.doc('collectionId/fourth'),
        )
        .then(result => {
          resultEquals(
            result,
            found('first'),
            found('second'),
            found('third'),
            found(document('fourth')),
          );
        });
    });
  });

  it('accepts same document multiple times', () => {
    const overrides: ApiOverride = {
      batchGetDocuments: request => {
        expect(request!.documents!.length).to.equal(2);
        return stream(found('a'), found('b'));
      },
    };

    return createInstance(overrides).then(firestore => {
      return firestore
        .getAll(
          firestore.doc('collectionId/a'),
          firestore.doc('collectionId/a'),
          firestore.doc('collectionId/b'),
          firestore.doc('collectionId/a'),
        )
        .then(result => {
          resultEquals(result, found('a'), found('a'), found('b'), found('a'));
        });
    });
  });

  it('applies field mask', () => {
    const overrides: ApiOverride = {
      batchGetDocuments: request => {
        expect(request!.mask!.fieldPaths).to.have.members([
          'foo.bar',
          '`foo.bar`',
        ]);
        return stream(found('a'));
      },
    };

    return createInstance(overrides).then(firestore => {
      return firestore.getAll(firestore.doc('collectionId/a'), {
        fieldMask: ['foo.bar', new FieldPath('foo.bar')],
      });
    });
  });

  it('validates field mask', () => {
    return createInstance().then(firestore => {
      expect(() =>
        firestore.getAll(firestore.doc('collectionId/a'), {
          fieldMask: null,
        } as InvalidApiUsage),
      ).to.throw(
        'Value for argument "options" is not a valid read option. "fieldMask" is not an array.',
      );

      expect(() =>
        firestore.getAll(firestore.doc('collectionId/a'), {
          fieldMask: ['a', new FieldPath('b'), null],
        } as InvalidApiUsage),
      ).to.throw(
        'Value for argument "options" is not a valid read option. "fieldMask" is not valid: Element at index 2 is not a valid field path. Paths can only be specified as strings or via a FieldPath object.',
      );
    });
  });
});

describe('toJSON', () => {
  it('Serializing Firestore settings redacts credentials', () => {
    const firestore = new Firestore.Firestore({
      projectId: 'myProjectId',
      credentials: {client_email: 'foo@bar', private_key: 'asdf1234'},
    });

    const serializedSettings = JSON.stringify(firestore._settings);

    // Instead of validating the serialized string for redacted credentials,
    // parse the settings and check the credential values.
    const parsedSettings = JSON.parse(serializedSettings);
    expect(parsedSettings.credentials.client_email).to.equal('***');
    expect(parsedSettings.credentials.private_key).to.equal('***');
  });

  it('Serializing Firestore instance', () => {
    const firestore = new Firestore.Firestore({
      projectId: 'myProjectId',
      credentials: {client_email: 'foo@bar', private_key: 'asdf1234'},
    });

    const serializedFirestore = JSON.stringify(firestore);

    // Instead of validating the serialized string,
    // parse the JSON back to an object and check the properties.
    const expectedParsedFirestore = {
      projectId: 'myProjectId',
    };

    const parsedFirestore = JSON.parse(serializedFirestore);
    expect(parsedFirestore).to.deep.equal(expectedParsedFirestore);
  });
});
