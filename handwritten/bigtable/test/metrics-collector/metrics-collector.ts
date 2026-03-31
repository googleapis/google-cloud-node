// Copyright 2025 Google LLC
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

import {describe} from 'mocha';
import * as assert from 'assert';
import * as fs from 'fs';
import {TestMetricsHandler} from '../../test-common/test-metrics-handler';
import {
  MethodName,
  StreamingState,
} from '../../src/client-side-metrics/client-side-metrics-attributes';
import {grpc} from 'google-gax';
import {expectedRequestsHandled} from '../../test-common/metrics-handler-fixture';
import * as path from 'path'; // Import the 'path' module
import * as gax from 'google-gax';
import * as proxyquire from 'proxyquire';
import {GCPMetricsHandler} from '../../src/client-side-metrics/gcp-metrics-handler';
const protoPath = path.join(
  __dirname,
  '../../protos/google/bigtable/v2/response_params.proto',
);
const root = gax.protobuf.loadSync(protoPath);
const ResponseParams = root.lookupType('ResponseParams');

const projectId = 'my-project';

/**
 * A fake implementation of the Bigtable client for testing purposes.  Provides a
 * metricsTracerFactory and a stubbed projectId method.
 */
class FakeBigtable {
  appProfileId?: string;
  projectId = projectId;
}

/**
 * A fake implementation of a Bigtable instance for testing purposes.  Provides only an ID.
 */
class FakeInstance {
  /**
   * The ID of the fake instance.
   */
  id = 'fakeInstanceId';
}

const logger = {value: ''};
const testHandler = new TestMetricsHandler();
testHandler.projectId = projectId;
testHandler.messages = logger;

describe('Bigtable/MetricsCollector', () => {
  class FakeHRTime {
    startTime = BigInt(0);
    bigint() {
      this.startTime += BigInt(1000000000);
      logger.value += `getDate call returns ${Number(this.startTime / BigInt(1000000))} ms\n`;
      return this.startTime;
    }
  }

  const stubs = {
    'node:process': {
      hrtime: new FakeHRTime(),
    },
    './gcp-metrics-handler': {
      GCPMetricsHandler: testHandler,
    },
  };
  const FakeOperationsMetricsCollector = proxyquire(
    '../../src/client-side-metrics/operation-metrics-collector.js',
    stubs,
  ).OperationMetricsCollector;

  it('should record the right metrics with a typical method call', async () => {
    class FakeTable {
      id = 'fakeTableId';
      instance = new FakeInstance();
      bigtable = new FakeBigtable();

      async fakeMethod(): Promise<void> {
        class FakeUserStream {
          getTotalDurationMs() {
            return 1256;
          }
        }
        const userStream = new FakeUserStream();
        function createMetadata(duration: string) {
          return {
            internalRepr: new Map([
              ['server-timing', [`gfet4t7; dur=${duration}`]],
            ]),
            options: {},
          };
        }
        if (this.bigtable.projectId) {
          const status = {
            metadata: {
              internalRepr: new Map([
                [
                  'x-goog-ext-425905942-bin',
                  [
                    ResponseParams.encode({
                      zoneId: 'us-west1-c',
                      clusterId: 'fake-cluster3',
                    }).finish(),
                  ],
                ],
              ]),
              options: {},
            },
          };
          const metricsCollector = new FakeOperationsMetricsCollector(
            this,
            MethodName.READ_ROWS,
            StreamingState.STREAMING,
            [testHandler as unknown as GCPMetricsHandler],
          );
          // In this method we simulate a series of events that might happen
          // when a user calls one of the Table methods.
          // Here is an example of what might happen in a method call:
          logger.value += '1. The operation starts\n';
          metricsCollector.onOperationStart();
          logger.value += '2. The attempt starts.\n';
          metricsCollector.onAttemptStart();
          logger.value += '3. Client receives status information.\n';
          metricsCollector.onStatusMetadataReceived(status);
          logger.value += '4. Client receives metadata.\n';
          metricsCollector.onMetadataReceived(createMetadata('101'));
          logger.value += '5. Client receives first row.\n';
          metricsCollector.onResponse(this.bigtable.projectId);
          logger.value += '6. User receives first row.\n';
          logger.value += '7. Client receives metadata.\n';
          metricsCollector.onMetadataReceived(createMetadata('102'));
          logger.value += '8. Client receives second row.\n';
          metricsCollector.onResponse(this.bigtable.projectId);
          logger.value += '9. User receives second row.\n';
          logger.value += '10. A transient error occurs.\n';
          metricsCollector.onAttemptComplete(grpc.status.DEADLINE_EXCEEDED);
          logger.value += '11. After a timeout, the second attempt is made.\n';
          metricsCollector.onAttemptStart();
          logger.value += '12. Client receives status information.\n';
          metricsCollector.onStatusMetadataReceived(status);
          logger.value += '13. Client receives metadata.\n';
          metricsCollector.onMetadataReceived(createMetadata('103'));
          logger.value += '14. Client receives third row.\n';
          metricsCollector.onResponse(this.bigtable.projectId);
          logger.value += '15. User receives third row.\n';
          logger.value += '16. Client receives metadata.\n';
          metricsCollector.onMetadataReceived(createMetadata('104'));
          logger.value += '17. Client receives fourth row.\n';
          metricsCollector.onResponse(this.bigtable.projectId);
          logger.value += '18. User receives fourth row.\n';
          logger.value += '19. User reads row 1\n';
          logger.value += '20. Stream ends, operation completes\n';
          metricsCollector.onOperationComplete(
            grpc.status.OK,
            userStream.getTotalDurationMs(),
          );
        }
      }
    }
    const table = new FakeTable();
    await table.fakeMethod();
    const expectedOutput = fs.readFileSync(
      './test/metrics-collector/typical-method-call.txt',
      'utf8',
    );
    // Ensure events occurred in the right order here:
    assert.strictEqual(logger.value, expectedOutput.replace(/\r/g, ''));
    assert.deepStrictEqual(
      testHandler.requestsHandled,
      expectedRequestsHandled,
    );
  });
});
