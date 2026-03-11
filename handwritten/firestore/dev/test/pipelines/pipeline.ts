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
import {Timestamp, Pipelines, Firestore} from '../../src';
import IExecutePipelineRequest = google.firestore.v1.IExecutePipelineRequest;
import IExecutePipelineResponse = google.firestore.v1.IExecutePipelineResponse;
import Pipeline = Pipelines.Pipeline;
import field = Pipelines.field;
import sum = Pipelines.sum;
import descending = Pipelines.descending;
import IValue = google.firestore.v1.IValue;

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
});

describe('stage option serialization', () => {
  // Default rawOptions
  const rawOptions: Record<string, unknown> = {
    foo: 'bar1',
  };
  // Default expected serialized options
  const expectedSerializedOptions: Record<string, IValue> = {
    foo: {
      stringValue: 'bar1',
    },
  };

  const testDefinitions: Array<{
    name: string;
    pipeline: (firestore: Firestore) => Pipeline;
    stageIndex?: number;
    expectedOptions?: Record<string, IValue>;
  }> = [
    {
      name: 'collection stage',
      pipeline: firestore =>
        firestore.pipeline().collection({
          collection: 'foo',
          rawOptions,
          forceIndex: 'foo-index',
        }),
      expectedOptions: {
        ...expectedSerializedOptions,
        force_index: {
          stringValue: 'foo-index',
        },
      },
    },
    {
      name: 'collection group stage',
      pipeline: firestore =>
        firestore.pipeline().collectionGroup({
          collectionId: 'foo',
          rawOptions,
          forceIndex: 'bar-index',
        }),
      expectedOptions: {
        ...expectedSerializedOptions,
        force_index: {
          stringValue: 'bar-index',
        },
      },
    },
    {
      name: 'documents stage',
      pipeline: firestore =>
        firestore.pipeline().documents({
          docs: ['foo/bar'],
          rawOptions,
        }),
    },
    {
      name: 'database stage',
      pipeline: firestore =>
        firestore.pipeline().database({
          rawOptions,
        }),
    },
    {
      name: 'distinct stage',
      pipeline: firestore =>
        firestore
          .pipeline()
          .database()
          .distinct({
            groups: ['foo'],
            rawOptions,
          }),
      stageIndex: 1,
    },
    {
      name: 'findNearest stage',
      pipeline: firestore =>
        firestore
          .pipeline()
          .database()
          .findNearest({
            field: 'foo',
            vectorValue: [0],
            distanceMeasure: 'euclidean',
            rawOptions,
          }),
      stageIndex: 1,
    },
    {
      name: 'select stage',
      pipeline: firestore =>
        firestore
          .pipeline()
          .database()
          .select({
            selections: ['foo'],
            rawOptions,
          }),
      stageIndex: 1,
    },
    {
      name: 'unnest stage',
      pipeline: firestore =>
        firestore
          .pipeline()
          .database()
          .unnest({
            selectable: field('foo'),
            rawOptions,
          }),
      stageIndex: 1,
    },
    {
      name: 'addFields stage',
      pipeline: firestore =>
        firestore
          .pipeline()
          .database()
          .addFields({
            fields: [field('foo')],
            rawOptions,
          }),
      stageIndex: 1,
    },
    {
      name: 'aggregate stage',
      pipeline: firestore =>
        firestore
          .pipeline()
          .database()
          .aggregate({
            accumulators: [sum('foo').as('fooSum')],
            rawOptions,
          }),
      stageIndex: 1,
    },
    {
      name: 'limit stage',
      pipeline: firestore =>
        firestore.pipeline().database().limit({
          limit: 1,
          rawOptions,
        }),
      stageIndex: 1,
    },
    {
      name: 'offset stage',
      pipeline: firestore =>
        firestore.pipeline().database().offset({
          offset: 1,
          rawOptions,
        }),
      stageIndex: 1,
    },
    {
      name: 'removeFields stage',
      pipeline: firestore =>
        firestore
          .pipeline()
          .database()
          .removeFields({
            fields: ['foo'],
            rawOptions,
          }),
      stageIndex: 1,
    },
    {
      name: 'replaceWith stage',
      pipeline: firestore =>
        firestore.pipeline().database().replaceWith({
          map: 'foo',
          rawOptions,
        }),
      stageIndex: 1,
    },
    {
      name: 'sample stage',
      pipeline: firestore =>
        firestore.pipeline().database().sample({
          documents: 100,
          rawOptions,
        }),
      stageIndex: 1,
    },
    {
      name: 'sample stage',
      pipeline: firestore =>
        firestore
          .pipeline()
          .database()
          .sort({
            orderings: [descending('foo')],
            rawOptions,
          }),
      stageIndex: 1,
    },
    {
      name: 'union stage',
      pipeline: firestore =>
        firestore.pipeline().database().union({
          other: firestore.pipeline().database(),
          rawOptions,
        }),
      stageIndex: 1,
    },
    {
      name: 'where stage',
      pipeline: firestore =>
        firestore
          .pipeline()
          .database()
          .where({
            condition: field('foo').equal(1),
            rawOptions,
          }),
      stageIndex: 1,
    },
  ];

  testDefinitions.forEach(testDefinition => {
    it(testDefinition.name, async () => {
      const spy = sinon.fake.returns(stream());
      const firestore = await createInstance({
        executePipeline: spy,
      });

      await testDefinition.pipeline(firestore).execute();

      const expectedOptions = testDefinition.expectedOptions
        ? testDefinition.expectedOptions
        : expectedSerializedOptions;

      expect(
        spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]['structuredPipeline'][
          'pipeline'
        ]['stages'][testDefinition.stageIndex ?? 0]['options'],
      ).to.deep.equal(expectedOptions);
    });
  });
});
