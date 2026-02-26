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
import {ProtoSerializable, Serializer} from '../src/serializer';
import {google} from '../protos/firestore_v1_proto_api';
import IPipeline = google.firestore.v1.IPipeline;
import {StructuredPipeline} from '../src/pipelines/structured-pipeline';
import {createInstance} from './util/helpers';
import {Firestore} from '../src';

describe('StructuredPipeline', () => {
  let db: Firestore | undefined;
  beforeEach(async () => {
    db = await createInstance();
  });

  afterEach(async () => {
    if (db) {
      await db.terminate();
      db = undefined;
    }
  });

  it('should serialize the pipeline argument', async () => {
    const pipeline: ProtoSerializable<IPipeline> = {
      _toProto: sinon.fake.returns({} as IPipeline),
    };
    const structuredPipeline = new StructuredPipeline(pipeline, {}, {});

    const proto = structuredPipeline._toProto(new Serializer(db!));

    expect(proto).to.deep.equal({
      pipeline: {},
      options: {},
    });

    expect((pipeline._toProto as sinon.SinonSpy).calledOnce).to.be.true;
  });

  it('should support known options', () => {
    const pipeline: ProtoSerializable<IPipeline> = {
      _toProto: sinon.fake.returns({} as IPipeline),
    };
    const structuredPipeline = new StructuredPipeline(
      pipeline,
      {
        indexMode: 'recommended',
        explainOptions: {
          mode: 'explain',
          outputFormat: 'text',
        },
      },
      {},
    );

    const proto = structuredPipeline._toProto(new Serializer(db!));

    expect(proto).deep.equal({
      pipeline: {},
      options: {
        index_mode: {
          stringValue: 'recommended',
        },
        explain_options: {
          mapValue: {
            fields: {
              mode: {
                stringValue: 'explain',
              },
              output_format: {
                stringValue: 'text',
              },
            },
          },
        },
      },
    });

    expect((pipeline._toProto as sinon.SinonSpy).calledOnce).to.be.true;
  });

  it('should support unknown options', () => {
    const pipeline: ProtoSerializable<IPipeline> = {
      _toProto: sinon.fake.returns({} as IPipeline),
    };
    const structuredPipeline = new StructuredPipeline(
      pipeline,
      {},
      {
        foo_bar: 'baz',
      },
    );

    const proto = structuredPipeline._toProto(new Serializer(db!));

    expect(proto).to.deep.equal({
      pipeline: {},
      options: {
        foo_bar: {
          stringValue: 'baz',
        },
      },
    });

    expect((pipeline._toProto as sinon.SinonSpy).calledOnce).to.be.true;
  });

  it('should support unknown nested options', () => {
    const pipeline: ProtoSerializable<IPipeline> = {
      _toProto: sinon.fake.returns({} as IPipeline),
    };
    const structuredPipeline = new StructuredPipeline(
      pipeline,
      {},
      {
        'foo.bar': 'baz',
      },
    );

    const proto = structuredPipeline._toProto(new Serializer(db!));

    expect(proto).to.deep.equal({
      pipeline: {},
      options: {
        foo: {
          mapValue: {
            fields: {
              bar: {stringValue: 'baz'},
            },
          },
        },
      },
    });

    expect((pipeline._toProto as sinon.SinonSpy).calledOnce).to.be.true;
  });

  it('should support options override', () => {
    const pipeline: ProtoSerializable<IPipeline> = {
      _toProto: sinon.fake.returns({} as IPipeline),
    };
    const structuredPipeline = new StructuredPipeline(
      pipeline,
      {
        indexMode: 'recommended',
      },
      {
        index_mode: 'baz',
      },
    );

    const proto = structuredPipeline._toProto(new Serializer(db!));

    expect(proto).to.deep.equal({
      pipeline: {},
      options: {
        index_mode: {
          stringValue: 'baz',
        },
      },
    });

    expect((pipeline._toProto as sinon.SinonSpy).calledOnce).to.be.true;
  });
});
