// Copyright 2021 Google LLC
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
import {describe, it, beforeEach, afterEach} from 'mocha';
import * as sinon from 'sinon';
import {google} from '../protos/protos';
import {PubSub} from '../src/pubsub';
import {ISchema, Schema, SchemaTypes, SchemaViews} from '../src/schema';
import {SchemaServiceClient} from '../src/v1';

const sandbox = sinon.createSandbox();

describe('Schema', () => {
  let pubsub: PubSub;
  let schema: Schema;
  let schemaClient: SchemaServiceClient;
  const projectId = 'testProject';
  const projectName = `projects/${projectId}`;
  const schemaId = 'testSchema';
  const schemaName = `projects/${projectId}/schemas/${schemaId}`;
  const ischema: ISchema = {
    name: schemaName,
    type: SchemaTypes.Avro,
    definition: 'foo',
  };
  const encoding = google.pubsub.v1.Encoding.JSON;

  beforeEach(async () => {
    pubsub = new PubSub({
      projectId: 'testProject',
    });
    sandbox.stub(pubsub, 'getClientConfig').callsFake(async () => {
      pubsub.projectId = projectId;
      pubsub.name = projectName;
      return {};
    });

    // These depend on the create-on-first-call structure in PubSub.
    // If that changes, this will also need to be updated.
    schemaClient = await pubsub.getSchemaClient();
    schema = pubsub.schema(schemaName);
  });

  afterEach(async () => {
    // Sadly I think it's not worthwhile to get this full pipeline
    // to work for unit tests - the plan is to test the autoclose in
    // the system tests.
    //
    // await pubsub.close();
    // Private member access:
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // assert.strictEqual((schemaClient as any)._terminated, true);

    sandbox.reset();
  });

  it('properly sets its id', () => {
    assert.strictEqual(schema.id, schemaId);
  });

  it('properly sets its name', async () => {
    const name = await schema.getName();
    assert.strictEqual(name, schemaName);
  });

  it('calls PubSub.createSchema() when create() is called', async () => {
    let called = false;
    sandbox
      .stub(pubsub, 'createSchema')
      .callsFake(async (name, type, def, gaxOpts) => {
        assert.strictEqual(name, schemaName);
        assert.strictEqual(type, SchemaTypes.Avro);
        assert.strictEqual(def, 'definition');
        assert.ok(gaxOpts);
        called = true;
        return new Schema(pubsub, name);
      });

    await schema.create(SchemaTypes.Avro, 'definition', {});
    assert.ok(called);
  });

  it('calls getSchema() on the client when get() is called', async () => {
    let called = false;
    sandbox
      .stub(schemaClient, 'getSchema')
      .callsFake(async (params, gaxOpts) => {
        const name = await schema.getName();
        assert.strictEqual(params.name, name);
        assert.strictEqual(params.view, 'FULL');
        assert.deepStrictEqual(gaxOpts, {});
        called = true;
        return [ischema];
      });

    const result = await schema.get(SchemaViews.Full, {});
    assert.ok(called);
    assert.strictEqual(result.name, schemaName);
    assert.strictEqual(result.type, SchemaTypes.Avro);
    assert.strictEqual(result.definition, 'foo');
  });

  it('defaults to FULL when get() is called', async () => {
    let called = false;
    sandbox.stub(schemaClient, 'getSchema').callsFake(async params => {
      assert.strictEqual(params.view, 'FULL');
      called = true;
      return [ischema];
    });

    await schema.get();
    assert.ok(called);
  });

  it('calls deleteSchema() on the client when delete() is called', async () => {
    let called = false;
    sandbox
      .stub(schemaClient, 'deleteSchema')
      .callsFake(async (params, gaxOpts) => {
        assert.strictEqual(params.name, schemaName);
        assert.ok(gaxOpts);
        called = true;
      });

    await schema.delete({});
    assert.ok(called);
  });

  it('calls validateMessage() on the client when validateMessage() is called on the wrapper', async () => {
    let called = false;
    sandbox
      .stub(schemaClient, 'validateMessage')
      .callsFake(async (params, gaxOpts) => {
        const name = await schema.getName();
        assert.strictEqual(params.parent, pubsub.name);
        assert.strictEqual(params.name, name);
        assert.strictEqual(params.schema, undefined);
        assert.strictEqual(params.message, 'foo');
        assert.strictEqual(params.encoding, encoding);
        assert.ok(gaxOpts);
        called = true;
      });

    await schema.validateMessage('foo', encoding, {});
    assert.ok(called);
  });

  it('resolves a missing project ID', async () => {
    pubsub = new PubSub();
    schema = pubsub.schema(schemaId);
    assert.strictEqual(pubsub.isIdResolved, false);
    assert.strictEqual(schema.name_, undefined);
    sandbox.stub(pubsub, 'getClientConfig').callsFake(async () => {
      pubsub.projectId = projectId;
      pubsub.name = projectName;
      return {};
    });
    const name = await schema.getName();
    assert.strictEqual(pubsub.isIdResolved, true);
    assert.strictEqual(name, schemaName);
  });

  it('loads metadata from a received message', () => {
    const testAttrs = {
      googclient_schemaencoding: 'JSON',
      googclient_schemarevisionid: 'revision',
      googclient_schemaname: 'foobar',
    };
    const metadata = Schema.metadataFromMessage(testAttrs);
    assert.deepStrictEqual(metadata, {
      name: 'foobar',
      revision: 'revision',
      encoding: 'JSON',
    });
  });
});
