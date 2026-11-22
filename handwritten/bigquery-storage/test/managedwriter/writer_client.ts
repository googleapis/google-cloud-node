// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as assert from 'assert';
import {describe, it} from 'mocha';
import {PassThrough} from 'stream';
import {BigQueryWriteClient} from '@google-cloud/bigquery-storage-api';
import {WriterClient} from '../../src/managedwriter/writer_client';
import {StreamConnection} from '../../src/managedwriter/stream_connection';

const streamId = 'projects/p/datasets/d/tables/t/streams/_default';

function newWriterClient(): {
  client: WriterClient;
  streams: PassThrough[];
} {
  const streams: PassThrough[] = [];
  const client = new WriterClient({projectId: 'p'});
  const fakeClient = {
    initialize: async () => {},
    appendRows: () => {
      const stream = new PassThrough({objectMode: true});
      streams.push(stream);
      return stream;
    },
  };
  client.setClient(fakeClient as unknown as BigQueryWriteClient);
  return {client, streams};
}

function trackedConnections(client: WriterClient): StreamConnection[] {
  return (
    client as unknown as {
      _connections: {connectionList: StreamConnection[]};
    }
  )._connections.connectionList;
}

describe('managedwriter.WriterClient connection tracking', () => {
  it('should not keep connections after they are closed', async () => {
    const {client} = newWriterClient();
    for (let i = 0; i < 5; i++) {
      const connection = await client.createStreamConnection({streamId});
      assert.strictEqual(trackedConnections(client).length, 1);
      connection.close();
      assert.strictEqual(trackedConnections(client).length, 0);
    }
    client.close();
  });

  it('should keep tracking a connection after reconnect', async () => {
    const {client} = newWriterClient();
    const connection = await client.createStreamConnection({streamId});
    connection.reconnect();
    assert.deepStrictEqual(trackedConnections(client), [connection]);
    client.close();
    assert.strictEqual(connection.isOpen(), false);
  });

  it('should drop a connection whose stream closed before close()', async () => {
    const {client, streams} = newWriterClient();
    const connection = await client.createStreamConnection({streamId});
    let closeEvents = 0;
    connection.on('close', () => closeEvents++);
    streams[0].destroy();
    await new Promise(resolve => setImmediate(resolve));
    assert.strictEqual(connection.isOpen(), false);
    assert.strictEqual(trackedConnections(client).length, 0);
    connection.close();
    assert.strictEqual(closeEvents, 0);
    assert.strictEqual(trackedConnections(client).length, 0);
    client.close();
  });

  it('should track a closed connection again when write() reopens it', async () => {
    const {client} = newWriterClient();
    const connection = await client.createStreamConnection({streamId});
    connection.close();
    assert.strictEqual(trackedConnections(client).length, 0);
    connection.write({});
    assert.strictEqual(connection.isOpen(), true);
    assert.deepStrictEqual(trackedConnections(client), [connection]);
    client.close();
    assert.strictEqual(connection.isOpen(), false);
  });

  it('should close every open connection on close()', async () => {
    const {client} = newWriterClient();
    const connections: StreamConnection[] = [];
    for (let i = 0; i < 3; i++) {
      connections.push(await client.createStreamConnection({streamId}));
    }
    assert.strictEqual(trackedConnections(client).length, 3);
    client.close();
    assert.strictEqual(trackedConnections(client).length, 0);
    for (const connection of connections) {
      assert.strictEqual(connection.isOpen(), false);
    }
  });
});
