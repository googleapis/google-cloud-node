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

import {createInstance, stream} from '../util/helpers';
import {google} from '../../protos/firestore_v1_proto_api';
import {Firestore, Timestamp} from '../../src';
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

    expect(pipelineSnapshot.results.length).toBe(0);

    expect(pipelineSnapshot.executionTime.toProto()).toEqual(
      executeTime.toProto(),
    );
  });

  it('serializes the pipeline', async () => {
    const spy = vi.fn().mockReturnValue(stream());
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
    expect(spy.mock.calls[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]).toEqual(
      executePipelineRequest,
    );
  });

  it('serializes the pipeline options', async () => {
    const spy = vi.fn().mockReturnValue(stream());
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
    expect(spy.mock.calls[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]).toEqual(
      executePipelineRequest,
    );
  });

  it('serializes the pipeline raw options', async () => {
    const spy = vi.fn().mockReturnValue(stream());
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
    expect(spy.mock.calls[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]).toEqual(
      executePipelineRequest,
    );
  });

  describe('PipelineSource reference validation with uninitialized client', () => {
    it('accepts DocumentReference when Firestore projectId is uninitialized', () => {
      const firestore = new Firestore();
      const docRef = firestore.doc('users/alice');

      expect(() => {
        firestore.pipeline().documents([docRef]);
      }).not.toThrow();

      expect(() => {
        firestore.pipeline().documents({docs: [docRef]});
      }).not.toThrow();
    });

    it('accepts mixed string paths and DocumentReferences on uninitialized client', () => {
      const firestore = new Firestore();
      const docRef = firestore.doc('users/alice');

      expect(() => {
        firestore.pipeline().documents(['users/bob', docRef]);
      }).not.toThrow();
    });

    it('accepts CollectionReference when Firestore projectId is uninitialized', () => {
      const firestore = new Firestore();
      const colRef = firestore.collection('users');

      expect(() => {
        firestore.pipeline().collection(colRef);
      }).not.toThrow();

      expect(() => {
        firestore.pipeline().collection({collection: colRef});
      }).not.toThrow();
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
      }).toThrow(/Invalid DocumentReference.*database name/);
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
      }).toThrow(/Invalid CollectionReference.*database name/);
    });
  });
});
