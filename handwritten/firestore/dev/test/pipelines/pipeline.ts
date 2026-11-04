/**
 * @license
 * Copyright 2026 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {expect} from 'chai';
import * as sinon from 'sinon';
import {createInstance, stream} from '../util/helpers';
import {google} from '../../protos/firestore_v1_proto_api';
import {Firestore, Pipelines, Timestamp} from '../../src';
import constant = Pipelines.constant;
import field = Pipelines.field;
import IExecutePipelineRequest = google.firestore.v1.IExecutePipelineRequest;
import IExecutePipelineResponse = google.firestore.v1.IExecutePipelineResponse;

const FIRST_CALL = 0;
const EXECUTE_PIPELINE_REQUEST = 0;

describe('execute(Pipeline|PipelineExecuteOptions)', () => {
  it('returns execution time with empty results', async () => {
    const executeTime = Timestamp.now();
    const results: IExecutePipelineResponse[] = [
      {
        executionTime: executeTime.toProto().timestampValue,
        results: [],
      },
    ];

    const firestore = await createInstance({
      executePipeline: () => stream(...results),
    });

    const pipelineSnapshot = await firestore
      .pipeline()
      .collection('foo')
      .execute();

    expect(pipelineSnapshot.results.length).to.equal(0);

    expect(pipelineSnapshot.executionTime.toProto()).to.deep.equal(
      executeTime.toProto(),
    );
  });

  it('serializes the pipeline', async () => {
    const spy = sinon.fake.returns(stream());
    const firestore = await createInstance({
      executePipeline: spy,
    });

    await firestore.pipeline().collection('foo').execute();

    const executePipelineRequest: IExecutePipelineRequest = {
      database: 'projects/test-project/databases/(default)',
      structuredPipeline: {
        options: {},
        pipeline: {
          stages: [
            {
              args: [
                {
                  referenceValue: '/foo',
                },
              ],
              name: 'collection',
              options: {},
            },
          ],
        },
      },
    };
    expect(spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]).to.deep.equal(
      executePipelineRequest,
    );
  });

  it('serializes the pipeline options', async () => {
    const spy = sinon.fake.returns(stream());
    const firestore = await createInstance({
      executePipeline: spy,
    });

    await firestore
      .pipeline()
      .collection('foo')
      .execute({
        indexMode: 'recommended',
        explainOptions: {
          mode: 'analyze',
        },
      });

    const executePipelineRequest: IExecutePipelineRequest = {
      database: 'projects/test-project/databases/(default)',
      structuredPipeline: {
        options: {
          index_mode: {
            stringValue: 'recommended',
          },
          explain_options: {
            mapValue: {
              fields: {
                mode: {
                  stringValue: 'analyze',
                },
              },
            },
          },
        },
        pipeline: {
          stages: [
            {
              args: [
                {
                  referenceValue: '/foo',
                },
              ],
              name: 'collection',
              options: {},
            },
          ],
        },
      },
    };
    expect(spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]).to.deep.equal(
      executePipelineRequest,
    );
  });

  it('serializes the pipeline raw options', async () => {
    const spy = sinon.fake.returns(stream());
    const firestore = await createInstance({
      executePipeline: spy,
    });

    await firestore
      .pipeline()
      .collection('foo')
      .execute({
        rawOptions: {
          foo: 'bar',
        },
      });

    const executePipelineRequest: IExecutePipelineRequest = {
      database: 'projects/test-project/databases/(default)',
      structuredPipeline: {
        options: {
          foo: {
            stringValue: 'bar',
          },
        },
        pipeline: {
          stages: [
            {
              args: [
                {
                  referenceValue: '/foo',
                },
              ],
              name: 'collection',
              options: {},
            },
          ],
        },
      },
    };
    expect(spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]).to.deep.equal(
      executePipelineRequest,
    );
  });

  describe('PipelineSource reference validation with uninitialized client', () => {
    it('accepts DocumentReference when Firestore projectId is uninitialized', () => {
      const firestore = new Firestore();
      const docRef = firestore.doc('users/alice');

      expect(() => {
        firestore.pipeline().documents([docRef]);
      }).not.to.throw();

      expect(() => {
        firestore.pipeline().documents({docs: [docRef]});
      }).not.to.throw();
    });

    it('accepts mixed string paths and DocumentReferences on uninitialized client', () => {
      const firestore = new Firestore();
      const docRef = firestore.doc('users/alice');

      expect(() => {
        firestore.pipeline().documents(['users/bob', docRef]);
      }).not.to.throw();
    });

    it('accepts CollectionReference when Firestore projectId is uninitialized', () => {
      const firestore = new Firestore();
      const colRef = firestore.collection('users');

      expect(() => {
        firestore.pipeline().collection(colRef);
      }).not.to.throw();

      expect(() => {
        firestore.pipeline().collection({collection: colRef});
      }).not.to.throw();
    });

    it('rejects DocumentReference from another database when target is uninitialized', () => {
      const firestore = new Firestore();
      const otherDb = new Firestore({
        databaseId: 'other-db',
        projectId: 'other-proj',
      });
      const otherDocRef = otherDb.doc('users/alice');

      expect(() => {
        firestore.pipeline().documents([otherDocRef]);
      }).to.throw(/Invalid DocumentReference.*database name/);
    });

    it('rejects CollectionReference from another database when target is uninitialized', () => {
      const firestore = new Firestore();
      const otherDb = new Firestore({
        databaseId: 'other-db',
        projectId: 'other-proj',
      });
      const otherColRef = otherDb.collection('users');

      expect(() => {
        firestore.pipeline().collection(otherColRef);
      }).to.throw(/Invalid CollectionReference.*database name/);
    });
  });

  it('serializes atomic execute option', async () => {
    const spy = sinon.fake.returns(stream());
    const firestore = await createInstance({
      executePipeline: spy,
    });

    await firestore.pipeline().collection('foo').execute({
      atomic: true,
    });

    const executePipelineRequest: IExecutePipelineRequest = {
      database: 'projects/test-project/databases/(default)',
      newTransaction: {
        readWrite: {},
      },
      autoCommitTransaction: true,
      structuredPipeline: {
        options: {},
        pipeline: {
          stages: [
            {
              args: [
                {
                  referenceValue: '/foo',
                },
              ],
              name: 'collection',
              options: {},
            },
          ],
        },
      },
    };
    expect(spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]).to.deep.equal(
      executePipelineRequest,
    );
  });

  it('does not serialize atomic when atomic is false', async () => {
    const spy = sinon.fake.returns(stream());
    const firestore = await createInstance({
      executePipeline: spy,
    });

    await firestore.pipeline().collection('foo').execute({
      atomic: false,
    });

    const executePipelineRequest: IExecutePipelineRequest = {
      database: 'projects/test-project/databases/(default)',
      structuredPipeline: {
        options: {},
        pipeline: {
          stages: [
            {
              args: [
                {
                  referenceValue: '/foo',
                },
              ],
              name: 'collection',
              options: {},
            },
          ],
        },
      },
    };
    expect(spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]).to.deep.equal(
      executePipelineRequest,
    );
  });

  it('serializes DML stages (delete, update, insert, upsert, literals)', async () => {
    const spy = sinon.fake.returns(stream());
    const firestore = await createInstance({
      executePipeline: spy,
    });

    await firestore
      .pipeline()
      .literals([{foo: 'bar'}])
      .insert({collection: 'foo', documentIdExpression: 'doc1'})
      .update()
      .upsert({collection: 'bar', additionalFields: []})
      .delete()
      .execute();

    const stages =
      spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]['structuredPipeline'][
        'pipeline'
      ]['stages'];

    expect(stages.length).to.equal(5);
    expect(stages[0].name).to.equal('literals');
    expect(stages[0].args).to.deep.equal([
      {
        mapValue: {
          fields: {
            foo: {stringValue: 'bar'},
          },
        },
      },
    ]);

    expect(stages[1].name).to.equal('insert');
    expect(stages[1].options).to.deep.equal({
      collection: {referenceValue: '/foo'},
      document_id: {fieldReferenceValue: 'doc1'},
    });

    expect(stages[2].name).to.equal('update');
    expect(stages[2].args).to.deep.equal([
      {
        mapValue: {
          fields: {},
        },
      },
    ]);

    expect(stages[3].name).to.equal('upsert');
    expect(stages[3].options).to.deep.equal({
      collection: {referenceValue: '/bar'},
    });

    expect(stages[4].name).to.equal('delete');
  });

  it('serializes insert stage with auto-generated ID (collection only)', async () => {
    const spy = sinon.fake.returns(stream());
    const firestore = await createInstance({
      executePipeline: spy,
    });

    await firestore
      .pipeline()
      .collection('foo')
      .insert({collection: 'users'})
      .execute();

    const stages =
      spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]['structuredPipeline'][
        'pipeline'
      ]['stages'];

    expect(stages[1].name).to.equal('insert');
    expect(stages[1].options).to.deep.equal({
      collection: {referenceValue: '/users'},
    });
    expect(stages[1].args).to.deep.equal([]);
  });

  it('throws on empty collection path in insert and upsert stages', async () => {
    const firestore = await createInstance();

    expect(() =>
      firestore.pipeline().collection('foo').insert({collection: ''}),
    ).to.throw(
      'Function insert() cannot be called with an empty collection path.',
    );
    expect(() =>
      firestore.pipeline().collection('foo').upsert({collection: ''}),
    ).to.throw(
      'Function upsert() cannot be called with an empty collection path.',
    );
  });

  it('serializes literals stage containing expressions and nested maps', async () => {
    const spy = sinon.fake.returns(stream());
    const firestore = await createInstance({
      executePipeline: spy,
    });

    await firestore
      .pipeline()
      .literals([
        {
          base: 10,
          doubled: Pipelines.multiply(constant(10), constant(2)),
          nested: {
            val: constant('hello'),
            sum: Pipelines.add(constant(1), constant(2)),
          },
          arr: [1, Pipelines.add(constant(3), constant(4))],
        },
      ])
      .execute();

    const stages =
      spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]['structuredPipeline'][
        'pipeline'
      ]['stages'];

    // The document itself is a mapValue, but nested objects and arrays are
    // wrapped in map() and array() expressions, because the backend only
    // evaluates expressions in the top-level fields of a literal document.
    expect(stages[0].name).to.equal('literals');
    expect(stages[0].args).to.deep.equal([
      {
        mapValue: {
          fields: {
            base: {integerValue: 10},
            doubled: {
              functionValue: {
                name: 'multiply',
                args: [{integerValue: 10}, {integerValue: 2}],
              },
            },
            nested: {
              functionValue: {
                name: 'map',
                args: [
                  {stringValue: 'val'},
                  {stringValue: 'hello'},
                  {stringValue: 'sum'},
                  {
                    functionValue: {
                      name: 'add',
                      args: [{integerValue: 1}, {integerValue: 2}],
                    },
                  },
                ],
              },
            },
            arr: {
              functionValue: {
                name: 'array',
                args: [
                  {integerValue: 1},
                  {
                    functionValue: {
                      name: 'add',
                      args: [{integerValue: 3}, {integerValue: 4}],
                    },
                  },
                ],
              },
            },
          },
        },
      },
    ]);
  });

  it('omits undefined literal fields when ignoreUndefinedProperties is set', async () => {
    const spy = sinon.fake.returns(stream());
    const firestore = await createInstance(
      {executePipeline: spy},
      {ignoreUndefinedProperties: true},
    );

    await firestore
      .pipeline()
      .literals([{a: 1, b: undefined, nested: {c: undefined, d: 2}}])
      .execute();

    const stages =
      spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]['structuredPipeline'][
        'pipeline'
      ]['stages'];

    expect(stages[0].args).to.deep.equal([
      {
        mapValue: {
          fields: {
            a: {integerValue: 1},
            nested: {
              functionValue: {
                name: 'map',
                args: [{stringValue: 'd'}, {integerValue: 2}],
              },
            },
          },
        },
      },
    ]);
  });

  describe('update stage overloads', () => {
    it('serializes 0-arg update()', async () => {
      const spy = sinon.fake.returns(stream());
      const firestore = await createInstance({
        executePipeline: spy,
      });

      await firestore.pipeline().collection('foo').update().execute();

      const stages =
        spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]['structuredPipeline'][
          'pipeline'
        ]['stages'];

      expect(stages[1].name).to.equal('update');
      expect(stages[1].args).to.deep.equal([
        {
          mapValue: {
            fields: {},
          },
        },
      ]);
    });

    it('serializes single expression update(expr)', async () => {
      const spy = sinon.fake.returns(stream());
      const firestore = await createInstance({
        executePipeline: spy,
      });

      await firestore
        .pipeline()
        .collection('foo')
        .update(constant(true).as('active'))
        .execute();

      const stages =
        spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]['structuredPipeline'][
          'pipeline'
        ]['stages'];

      expect(stages[1].name).to.equal('update');
      expect(stages[1].args).to.deep.equal([
        {
          mapValue: {
            fields: {
              active: {booleanValue: true},
            },
          },
        },
      ]);
    });

    it('serializes multiple variadic expressions update(expr1, expr2)', async () => {
      const spy = sinon.fake.returns(stream());
      const firestore = await createInstance({
        executePipeline: spy,
      });

      await firestore
        .pipeline()
        .collection('foo')
        .update(constant(true).as('active'), constant(1).as('count'))
        .execute();

      const stages =
        spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]['structuredPipeline'][
          'pipeline'
        ]['stages'];

      expect(stages[1].name).to.equal('update');
      expect(stages[1].args).to.deep.equal([
        {
          mapValue: {
            fields: {
              active: {booleanValue: true},
              count: {integerValue: 1},
            },
          },
        },
      ]);
    });

    it('serializes array of expressions update([expr])', async () => {
      const spy = sinon.fake.returns(stream());
      const firestore = await createInstance({
        executePipeline: spy,
      });

      await firestore
        .pipeline()
        .collection('foo')
        .update([constant(true).as('active')])
        .execute();

      const stages =
        spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]['structuredPipeline'][
          'pipeline'
        ]['stages'];

      expect(stages[1].name).to.equal('update');
      expect(stages[1].args).to.deep.equal([
        {
          mapValue: {
            fields: {
              active: {booleanValue: true},
            },
          },
        },
      ]);
    });

    it('serializes options update({transformedFields})', async () => {
      const spy = sinon.fake.returns(stream());
      const firestore = await createInstance({
        executePipeline: spy,
      });

      await firestore
        .pipeline()
        .collection('foo')
        .update({transformedFields: [constant(true).as('active')]})
        .execute();

      const stages =
        spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]['structuredPipeline'][
          'pipeline'
        ]['stages'];

      expect(stages[1].name).to.equal('update');
      expect(stages[1].args).to.deep.equal([
        {
          mapValue: {
            fields: {
              active: {booleanValue: true},
            },
          },
        },
      ]);
    });
  });

  describe('upsert stage overloads', () => {
    it('serializes 0-arg upsert()', async () => {
      const spy = sinon.fake.returns(stream());
      const firestore = await createInstance({
        executePipeline: spy,
      });

      await firestore.pipeline().collection('foo').upsert().execute();

      const stages =
        spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]['structuredPipeline'][
          'pipeline'
        ]['stages'];

      expect(stages[1].name).to.equal('upsert');
      expect(stages[1].args).to.deep.equal([
        {
          mapValue: {
            fields: {},
          },
        },
      ]);
      expect(stages[1].options).to.be.undefined;
    });

    it('serializes options-only upsert(options)', async () => {
      const spy = sinon.fake.returns(stream());
      const firestore = await createInstance({
        executePipeline: spy,
      });

      await firestore
        .pipeline()
        .collection('foo')
        .upsert({
          collection: 'users',
          documentIdExpression: field('id'),
        })
        .execute();

      const stages =
        spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]['structuredPipeline'][
          'pipeline'
        ]['stages'];

      expect(stages[1].name).to.equal('upsert');
      expect(stages[1].args).to.deep.equal([
        {
          mapValue: {
            fields: {},
          },
        },
      ]);
      expect(stages[1].options).to.deep.equal({
        collection: {referenceValue: '/users'},
        document_id: {fieldReferenceValue: 'id'},
      });
    });

    it('serializes single variadic expression upsert(expr)', async () => {
      const spy = sinon.fake.returns(stream());
      const firestore = await createInstance({
        executePipeline: spy,
      });

      await firestore
        .pipeline()
        .collection('foo')
        .upsert(constant(true).as('active'))
        .execute();

      const stages =
        spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]['structuredPipeline'][
          'pipeline'
        ]['stages'];

      expect(stages[1].name).to.equal('upsert');
      expect(stages[1].args).to.deep.equal([
        {
          mapValue: {
            fields: {
              active: {booleanValue: true},
            },
          },
        },
      ]);
      expect(stages[1].options).to.be.undefined;
    });

    it('serializes multiple variadic expressions upsert(expr1, expr2)', async () => {
      const spy = sinon.fake.returns(stream());
      const firestore = await createInstance({
        executePipeline: spy,
      });

      await firestore
        .pipeline()
        .collection('foo')
        .upsert(constant(true).as('active'), constant(1).as('count'))
        .execute();

      const stages =
        spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]['structuredPipeline'][
          'pipeline'
        ]['stages'];

      expect(stages[1].name).to.equal('upsert');
      expect(stages[1].args).to.deep.equal([
        {
          mapValue: {
            fields: {
              active: {booleanValue: true},
              count: {integerValue: 1},
            },
          },
        },
      ]);
      expect(stages[1].options).to.be.undefined;
    });

    it('serializes additionalFields option upsert({additionalFields})', async () => {
      const spy = sinon.fake.returns(stream());
      const firestore = await createInstance({
        executePipeline: spy,
      });

      await firestore
        .pipeline()
        .collection('foo')
        .upsert({additionalFields: [constant(true).as('active')]})
        .execute();

      const stages =
        spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]['structuredPipeline'][
          'pipeline'
        ]['stages'];

      expect(stages[1].name).to.equal('upsert');
      expect(stages[1].args).to.deep.equal([
        {
          mapValue: {
            fields: {
              active: {booleanValue: true},
            },
          },
        },
      ]);
      expect(stages[1].options).to.be.undefined;
    });

    it('serializes additionalFields with other options upsert({additionalFields, collection})', async () => {
      const spy = sinon.fake.returns(stream());
      const firestore = await createInstance({
        executePipeline: spy,
      });

      await firestore
        .pipeline()
        .collection('foo')
        .upsert({
          additionalFields: [constant(true).as('active')],
          collection: 'users',
        })
        .execute();

      const stages =
        spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]['structuredPipeline'][
          'pipeline'
        ]['stages'];

      expect(stages[1].name).to.equal('upsert');
      expect(stages[1].args).to.deep.equal([
        {
          mapValue: {
            fields: {
              active: {booleanValue: true},
            },
          },
        },
      ]);
      expect(stages[1].options).to.deep.equal({
        collection: {referenceValue: '/users'},
      });
    });
  });
});
