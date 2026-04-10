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
import {Timestamp} from '../../src';
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
});
