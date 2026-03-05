/**
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
import {EchoClient, SequenceServiceClient, protos} from 'showcase-echo-client';
import {ShowcaseServer} from 'showcase-server';
import * as assert from 'assert';
import {promises as fsp} from 'fs';
import * as path from 'path';
import {
  protobuf,
  grpc,
  GoogleError,
  GoogleAuth,
  googleAuthLibrary,
  Status,
  createBackoffSettings,
  createMaxRetriesBackoffSettings,
  RetryOptions,
} from 'google-gax';
import {RequestType} from 'google-gax/build/src/apitypes';
import {Duplex, PassThrough, pipeline} from 'stream';
const pumpify = require('pumpify');
async function testShowcase() {
  const grpcClientOpts = {
    grpc,
    sslCreds: grpc.credentials.createInsecure(),
  };

  const grpcClientOptsWithServerStreamingRetries = {
    grpc,
    sslCreds: grpc.credentials.createInsecure(),
    gaxServerStreamingRetries: true,
  };

  const restClientOpts = {
    fallback: true,
    protocol: 'http',
    port: 7469,
    auth: new GoogleAuth({
      authClient: new googleAuthLibrary.PassThroughClient(),
    }),
  };

  const restClientOptsCompat = {
    fallback: 'rest' as const,
    protocol: 'http',
    port: 7469,
    auth: new GoogleAuth({
      authClient: new googleAuthLibrary.PassThroughClient(),
    }),
  };

  const grpcClient = new EchoClient(grpcClientOpts);
  const grpcClientWithServerStreamingRetries = new EchoClient(
    grpcClientOptsWithServerStreamingRetries,
  );
  const grpcSequenceClientWithServerStreamingRetries =
    new SequenceServiceClient(grpcClientOptsWithServerStreamingRetries);

  const grpcSequenceClientLegacyRetries = new SequenceServiceClient(
    grpcClientOpts,
  );

  const restClient = new EchoClient(restClientOpts);
  const restClientCompat = new EchoClient(restClientOptsCompat);

  // assuming gRPC server is started locally
  await testEchoErrorWithRetries(grpcSequenceClientLegacyRetries);
  await testEchoDeadlineExceededErrorWithRetries(grpcSequenceClientLegacyRetries);
  await testEchoErrorWithRetriesMessage(grpcSequenceClientLegacyRetries);
  await testEchoErrorWithTimeout(grpcSequenceClientLegacyRetries);
  await testEcho(grpcClient);
  await testEchoError(grpcClient);
  await testExpand(grpcClient);
  await testPagedExpand(grpcClient);
  await testPagedExpandAsync(grpcClient);
  await testPagedExpandAutopaginateOff(grpcClient);
  await testCollect(grpcClient);
  await testChat(grpcClient);
  await testWait(grpcClient);

  await testEcho(restClient);
  await testExpand(restClient); // REGAPIC supports server streaming
  await testPagedExpand(restClient);
  await testPagedExpandAsync(restClient);
  await testPagedExpandAutopaginateOff(restClient);
  await testCollectThrows(restClient); // REGAPIC does not support client streaming
  await testChatThrows(restClient); // REGAPIC does not support bidi streaming
  await testWait(restClient);

  await testEcho(restClientCompat);
  await testExpand(restClientCompat); // REGAPIC supports server streaming
  await testPagedExpand(restClientCompat);
  await testPagedExpandAsync(restClientCompat);
  await testPagedExpandAutopaginateOff(restClientCompat);
  await testCollectThrows(restClientCompat); // REGAPIC does not support client streaming
  await testChatThrows(restClientCompat); // REGAPIC does not support bidi streaming
  await testWait(restClientCompat);

  // Testing with gaxServerStreamingRetries being true
  await testServerStreamingRetryOptions(
    grpcSequenceClientWithServerStreamingRetries,
  );

  await testServerStreamingRetriesWithShouldRetryFn(
    grpcSequenceClientWithServerStreamingRetries,
  );
  await testServerStreamingRetrieswithRetryOptions(
    grpcSequenceClientWithServerStreamingRetries,
  );

  await testServerStreamingRetrieswithRetryRequestOptions(
    grpcSequenceClientWithServerStreamingRetries,
  );

  await testServerStreamingRetrieswithRetryRequestOptionsResumptionStrategy(
    grpcSequenceClientWithServerStreamingRetries,
  );

  await testServerStreamingThrowsClassifiedTransientErrorNote(
    grpcSequenceClientWithServerStreamingRetries,
  );

  await testServerStreamingRetriesAndThrowsClassifiedTransientErrorNote(
    grpcSequenceClientWithServerStreamingRetries,
  );

  await testServerStreamingThrowsCannotSetTotalTimeoutMillisMaxRetries(
    grpcSequenceClientWithServerStreamingRetries,
  );

  await testShouldFailOnThirdError(
    grpcSequenceClientWithServerStreamingRetries,
  );

  await testShouldTimeoutWithNewRetries(
    grpcSequenceClientWithServerStreamingRetries,
  );

  await testErrorMaxRetries0(grpcSequenceClientWithServerStreamingRetries);

  await testServerStreamingRetriesImmediatelywithRetryOptions(
    grpcSequenceClientWithServerStreamingRetries,
  );

  await testResetRetriesToZero(grpcSequenceClientWithServerStreamingRetries);

  // ensure legacy tests pass with streaming retries client
  await testEcho(grpcClientWithServerStreamingRetries);
  await testEchoError(grpcClientWithServerStreamingRetries);
  await testExpand(grpcClientWithServerStreamingRetries);
  await testPagedExpand(grpcClientWithServerStreamingRetries);
  await testPagedExpandAsync(grpcClientWithServerStreamingRetries);
  await testPagedExpandAutopaginateOff(grpcClientWithServerStreamingRetries);
  await testCollect(grpcClientWithServerStreamingRetries);
  await testChat(grpcClientWithServerStreamingRetries);
  await testWait(grpcClientWithServerStreamingRetries);

  /* Series of tests that validate behavior of gax behavior with stream pipelines */

  /* NO BUFFERING YES GAX NATIVE RETRIES
  This section has pipelines of streams but no data buffering
  and tests them against gax clients that DO utilize gax native retries
  some scenarios may not actually involve retrying */
  await testStreamingErrorAfterDataNoBufferNoRetry(
    grpcSequenceClientWithServerStreamingRetries,
  );

  // the next few tests explicitly use the pumpify library
  // which does not throw an error if a stream in the pipeline is destroyed
  // but does sever the connection. This library is being used because at least one of
  // our client libraries uses it

  await testImmediateStreamingErrorNoBufferPumpify(
    grpcSequenceClientWithServerStreamingRetries,
  );

  await testStreamingPipelineSucceedsAfterDataNoBufferNoRetryPumpify(
    grpcSequenceClientWithServerStreamingRetries,
  );

  await testStreamingPipelineErrorAfterDataNoBufferNoRetryPumpify(
    grpcSequenceClientWithServerStreamingRetries,
  );

  await testImmediateStreamingErrorNoBufferYesRetryRequestRetryPumpify(
    grpcSequenceClientWithServerStreamingRetries,
  );

  await testImmediateStreamingErrorThenSucceedsNoBufferYesRetryPumpify(
    grpcSequenceClientWithServerStreamingRetries,
  );

  await testStreamingPipelineErrorAfterDataNoBufferYesRetryPumpify(
    grpcSequenceClientWithServerStreamingRetries,
  );

  // this series of tests uses the node native "pipeline" instead of pumpify
  // which unlike pumpify, WILL error if any stream in the pipeline is destroye

  await testImmediateStreamingErrorNoBufferPipeline(
    grpcSequenceClientWithServerStreamingRetries,
  );

  await testStreamingPipelineSucceedsAfterDataNoBufferNoRetryPipeline(
    grpcSequenceClientWithServerStreamingRetries,
  );

  await testStreamingPipelineErrorAfterDataNoBufferNoRetryPipeline(
    grpcSequenceClientWithServerStreamingRetries,
  );

  await testImmediateStreamingErrorNoBufferYesRetryRequestRetryPipeline(
    grpcSequenceClientWithServerStreamingRetries,
  );

  await testImmediateStreamingErrorThenSucceedsNoBufferYesRetryPipeline(
    grpcSequenceClientWithServerStreamingRetries,
  );

  await testStreamingPipelineErrorAfterDataNoBufferYesRetryPipeline(
    grpcSequenceClientWithServerStreamingRetries,
  );
}

function createStreamingSequenceRequestFactory(
  statusCodeList: Status[],
  delayList: number[],
  failIndexs: number[],
  content: string,
) {
  const request =
    new protos.google.showcase.v1beta1.CreateStreamingSequenceRequest();
  const streamingSequence =
    new protos.google.showcase.v1beta1.StreamingSequence();

  for (let i = 0; i < statusCodeList.length; i++) {
    const delay = new protos.google.protobuf.Duration();
    delay.seconds = delayList[i];

    const status = new protos.google.rpc.Status();
    status.code = statusCodeList[i];
    status.message = statusCodeList[i].toString();

    const response =
      new protos.google.showcase.v1beta1.StreamingSequence.Response();
    response.delay = delay;
    response.status = status;
    response.responseIndex = failIndexs[i];

    streamingSequence.responses.push(response);
    streamingSequence.content = content;
  }

  request.streamingSequence = streamingSequence;

  return request;
}

function createSequenceRequestFactory(
  statusCodeList: Status[],
  delayList: number[],
) {
  const request = new protos.google.showcase.v1beta1.CreateSequenceRequest();
  const sequence = new protos.google.showcase.v1beta1.Sequence();

  for (let i = 0; i < statusCodeList.length; i++) {
    const delay = new protos.google.protobuf.Duration();
    delay.seconds = delayList[i];

    const status = new protos.google.rpc.Status();
    status.code = statusCodeList[i];
    status.message = statusCodeList[i].toString();

    const response = new protos.google.showcase.v1beta1.Sequence.Response();
    response.delay = delay;
    response.status = status;

    sequence.responses.push(response);
  }

  request.sequence = sequence;

  return request;
}

async function testEcho(client: EchoClient) {
  const request = {
    content: 'test',
  };
  const timer = setTimeout(() => {
    throw new Error('End-to-end testEcho method fails with timeout');
  }, 12000);
  const [response] = await client.echo(request);
  clearTimeout(timer);
  assert.deepStrictEqual(request.content, response.content);
}

async function testEchoError(client: EchoClient) {
  const fixtureName = path.resolve(
    __dirname,
    '..',
    '..',
    '..',
    'fixtures',
    'multipleErrors.json',
  );
  const protosPath = path.resolve(
    __dirname,
    '..',
    '..',
    '..',
    '..',
    'build',
    'protos',
    'google',
    'rpc',
  );

  const data = await fsp.readFile(fixtureName, 'utf8');
  const root = protobuf.loadSync(path.join(protosPath, 'error_details.proto'));
  const objs = JSON.parse(data);
  const details = [];
  const expectedDetails = [];
  let errorInfo: {domain: string; reason: string; metadata: [string, string]};
  for (const obj of objs) {
    const MessageType = root.lookupType(obj.type);
    const buffer = MessageType.encode(obj.value).finish();
    details.push({
      type_url: 'type.googleapis.com/' + obj.type,
      value: buffer,
    });
    expectedDetails.push(obj.value);
    if (obj.type === 'google.rpc.ErrorInfo') {
      errorInfo = obj.value;
    }
  }
  const request = {
    error: {
      code: 3,
      message: 'Test error',
      details: details,
    },
  };
  const timer = setTimeout(() => {
    throw new Error('End-to-end testEchoError method fails with timeout');
  }, 12000);
  await assert.rejects(() => client.echo(request), Error);
  try {
    await client.echo(request);
  } catch (err) {
    clearTimeout(timer);
    assert.strictEqual(
      JSON.stringify((err as GoogleError).statusDetails),
      JSON.stringify(expectedDetails),
    );
    assert.ok(errorInfo!);
    assert.strictEqual((err as GoogleError).domain, errorInfo!.domain);
    assert.strictEqual((err as GoogleError).reason, errorInfo!.reason);
    assert.strictEqual(
      JSON.stringify((err as GoogleError).errorInfoMetadata),
      JSON.stringify(errorInfo!.metadata),
    );
  }
}

async function testEchoErrorWithRetries(client: SequenceServiceClient) {
  const backoffSettings = createBackoffSettings(
    100,
    1.2,
    1000,
    null,
    1.5,
    3000, // Set maxRpcTimeoutMillis high enough so that maxRetries happens before DEADLINE_EXCEEDED
    null,
  );
  const retryOptions = new RetryOptions([14, 4], backoffSettings);
  backoffSettings.maxRetries = 2;

  const settings = {
    retry: retryOptions,
  };

  client.initialize();

  const request = createSequenceRequestFactory(
    [
      Status.UNAVAILABLE, // Error code 14
      Status.UNAVAILABLE,
      Status.UNAVAILABLE,
      Status.UNAVAILABLE,
    ],
    [0.1, 0.1, 0.1, 0.1],
  );

  const response = await client.createSequence(request);
  const sequence = response[0];

  const attemptRequest =
    new protos.google.showcase.v1beta1.AttemptSequenceRequest();
  attemptRequest.name = sequence.name!;

  try {
    await client.attemptSequence(attemptRequest, settings);
  } catch (err) {
    assert.strictEqual(JSON.stringify((err as GoogleError).code), '4');
    assert.match(
      JSON.stringify((err as GoogleError).message),
      /Exceeded maximum number of retries retrying error Error: 14 UNAVAILABLE: 14 before any response was received/,
    );
    assert.strictEqual((err as GoogleError).message, 'Exceeded maximum number of retries retrying error Error: 14 UNAVAILABLE: 14 before any response was received : Previous errors : [{message: 14 UNAVAILABLE: 14, code: 14, details: , note: },{message: 14 UNAVAILABLE: 14, code: 14, details: , note: }]');
  }
}

async function testEchoDeadlineExceededErrorWithRetries(client: SequenceServiceClient) {
  const backoffSettings = createBackoffSettings(
      100,
      1.2,
      1000,
      null,
      1.5,
      3000, // Set maxRpcTimeoutMillis high enough so that maxRetries happens before DEADLINE_EXCEEDED
      null,
  );
  const retryOptions = new RetryOptions([14, 4], backoffSettings);
  backoffSettings.maxRetries = 2;

  const settings = {
    retry: retryOptions,
  };

  client.initialize();

  const request = createSequenceRequestFactory(
      [
        Status.DEADLINE_EXCEEDED, // Error code 4
        Status.UNAVAILABLE, // Error code 14
        Status.UNAVAILABLE,
        Status.UNAVAILABLE,
      ],
      [0.01, 0.01, 0.01, 0.01],
  );

  const response = await client.createSequence(request);
  const sequence = response[0];

  const attemptRequest =
      new protos.google.showcase.v1beta1.AttemptSequenceRequest();
  attemptRequest.name = sequence.name!;

  try {
    await client.attemptSequence(attemptRequest, settings);
  } catch (err) {
    assert.strictEqual((err as GoogleError).message, 'Exceeded maximum number of retries retrying error Error: 14 UNAVAILABLE: 14 before any response was received : Previous errors : [{message: 4 DEADLINE_EXCEEDED: 4, code: 4, details: , note: },{message: 14 UNAVAILABLE: 14, code: 14, details: , note: }]');
    assert.strictEqual((err as GoogleError).code, 4);
  }
}

async function testEchoErrorWithRetriesMessage(client: SequenceServiceClient) {
  const backoffSettings = createBackoffSettings(
      100,
      1.2,
      1000,
      null,
      1.5,
      3000, // Set maxRpcTimeoutMillis high enough so that maxRetries happens before DEADLINE_EXCEEDED
      null,
  );
  const retryOptions = new RetryOptions([14, 4], backoffSettings);
  backoffSettings.maxRetries = 2;

  const settings = {
    retry: retryOptions,
  };

  client.initialize();

  const request = createSequenceRequestFactory(
      [
        Status.UNAVAILABLE, // Error code 14
        Status.UNAVAILABLE,
        Status.UNAVAILABLE,
        Status.UNAVAILABLE,
      ],
      [0.1, 0.1, 0.1, 0.1],
  );

  const response = await client.createSequence(request);
  const sequence = response[0];

  const attemptRequest =
      new protos.google.showcase.v1beta1.AttemptSequenceRequest();
  attemptRequest.name = sequence.name!;

  try {
    await client.attemptSequence(attemptRequest, settings);
  } catch (err) {
    assert.strictEqual(JSON.stringify((err as GoogleError).code), '4');
    const expectedMessage = 'Exceeded maximum number of retries retrying error Error: 14 UNAVAILABLE: 14 before any response was received : Previous errors : [{message: 14 UNAVAILABLE: 14, code: 14, details: , note: },{message: 14 UNAVAILABLE: 14, code: 14, details: , note: }]'
    assert.strictEqual((err as GoogleError).message, expectedMessage);
  }
}

async function testEchoErrorWithTimeout(client: SequenceServiceClient) {
  const backoffSettings = createBackoffSettings(
    100,
    1.2,
    1000,
    null,
    1.5,
    3000,
    1,
  );
  const retryOptions = new RetryOptions([14, 4], backoffSettings);

  const settings = {
    retry: retryOptions,
  };

  client.initialize();

  const request = createSequenceRequestFactory(
    [
      Status.UNAVAILABLE, // Error code 14
      Status.UNAVAILABLE,
      Status.UNAVAILABLE,
      Status.UNAVAILABLE,
    ],
    [0.1, 0.1, 0.1, 0.1],
  );

  const response = await client.createSequence(request);
  const sequence = response[0];

  const attemptRequest =
    new protos.google.showcase.v1beta1.AttemptSequenceRequest();
  attemptRequest.name = sequence.name!;

  try {
    await client.attemptSequence(attemptRequest, settings);
  } catch (err) {
    assert.strictEqual(JSON.stringify((err as GoogleError).code), '4');
    assert.match(
      JSON.stringify((err as GoogleError).message),
      /Total timeout of API google.showcase.v1beta1.SequenceService exceeded 1 milliseconds retrying error Error: 14 UNAVAILABLE: 14 {2}before any response was received./,
    );
  }
}

async function testExpand(client: EchoClient) {
  const words = ['nobody', 'ever', 'reads', 'test', 'input'];
  const request = {
    content: words.join(' '),
  };
  const stream = client.expand(request);
  const result: string[] = [];

  stream.on('data', (response: {content: string}) => {
    result.push(response.content);
  });
  stream.on('end', () => {
    assert.deepStrictEqual(words, result);
  });
  stream.on('error', error => {
    throw new Error('testExpand error' + error.message);
  });
}

async function testPagedExpand(client: EchoClient) {
  const words = ['nobody', 'ever', 'reads', 'test', 'input'];
  const request = {
    content: words.join(' '),
    pageSize: 2,
  };
  const timer = setTimeout(() => {
    throw new Error('End-to-end testPagedExpand method fails with timeout');
  }, 12000);
  const [response] = await client.pagedExpand(request);
  clearTimeout(timer);
  const result = response.map(r => r.content);
  assert.deepStrictEqual(words, result);
}

async function testPagedExpandAsync(client: EchoClient) {
  const words = ['nobody', 'ever', 'reads', 'test', 'input'];
  const request = {
    content: words.join(' '),
    pageSize: 2,
  };
  const response = [];
  const iterable = client.pagedExpandAsync(request);
  const timer = setTimeout(() => {
    throw new Error(
      'End-to-end testPagedExpandAsync method fails with timeout',
    );
  }, 12000);
  for await (const resource of iterable) {
    response.push(resource.content);
  }
  clearTimeout(timer);
  assert.deepStrictEqual(words, response);
}

async function testPagedExpandAutopaginateOff(client: EchoClient) {
  const words = ['nobody', 'ever', 'reads', 'test', 'input'];
  const request = {
    content: words.join(' '),
    pageSize: 2,
  };
  const timer = setTimeout(() => {
    throw new Error('End-to-end testPagedExpand method fails with timeout');
  }, 12000);
  const [resultArray, nextPageRequest] = await client.pagedExpand(request, {
    autoPaginate: false,
  });
  clearTimeout(timer);
  const result = resultArray.map(r => r.content);
  assert.deepStrictEqual(words.slice(0, 2), result);
  // manually paginate
  const [response2] = await client.pagedExpand(nextPageRequest!, {
    autoPaginate: false,
  });

  clearTimeout(timer);
  const result2 = response2.map(r => r.content);
  assert.deepStrictEqual(words.slice(2, 4), result2);
}

async function testCollect(client: EchoClient) {
  const words = ['nobody', 'ever', 'reads', 'test', 'input'];
  const promise = new Promise<string>((resolve, reject) => {
    try {
      const stream = client.collect((err, result) => {
        if (err || !result) {
          reject(err);
        } else {
          resolve(result.content ?? '');
        }
      });
      for (const word of words) {
        const request = {content: word};
        stream.write(request);
      }
      stream.on('data', (result: {content: String}) => {
        assert.deepStrictEqual(result.content, words.join(' '));
      });
      stream.end();
    } catch (err) {
      reject(err);
    }
  });
  const result = await promise;
  assert.strictEqual(result, words.join(' '));
}

async function testCollectThrows(client: EchoClient) {
  const words = ['nobody', 'ever', 'reads', 'test', 'input'];
  const promise = new Promise<string>((resolve, reject) => {
    try {
      const stream = client.collect((err, result) => {
        if (err || !result) {
          reject(err);
        } else {
          resolve(result.content ?? '');
        }
      });
      for (const word of words) {
        const request = {content: word};
        stream.write(request);
      }
      stream.on('data', (result: {content: String}) => {
        assert.deepStrictEqual(result.content, words.join(' '));
      });
      stream.end();
    } catch (err) {
      reject(err);
    }
  });
  // We expect the promise to be rejected
  promise.then(
    () => {
      assert(false);
    },
    (err: Error) => {
      assert.match(err.message, /currently does not support/);
    },
  );
}

async function testChat(client: EchoClient) {
  const words = [
    'nobody',
    'ever',
    'reads',
    'test',
    'input',
    'especially',
    'this',
    'one',
  ];
  const promise = new Promise((resolve, reject) => {
    try {
      const result: string[] = [];
      const stream = client.chat();
      stream.on('data', (response: {content: string}) => {
        result.push(response.content);
      });
      stream.on('end', () => {
        resolve(result);
      });
      stream.on('error', reject);
      for (const word of words) {
        stream.write({content: word});
      }
      stream.end();
    } catch (err) {
      reject(err);
    }
  });
  const result = await promise;
  assert.deepStrictEqual(result, words);
}

async function testChatThrows(client: EchoClient) {
  const words = [
    'nobody',
    'ever',
    'reads',
    'test',
    'input',
    'especially',
    'this',
    'one',
  ];
  const promise = new Promise((resolve, reject) => {
    try {
      const result: string[] = [];
      const stream = client.chat();
      stream.on('data', (response: {content: string}) => {
        result.push(response.content);
      });
      stream.on('end', () => {
        resolve(result);
      });
      stream.on('error', reject);
      for (const word of words) {
        stream.write({content: word});
      }
      stream.end();
    } catch (err) {
      reject(err);
    }
  });
  // We expect the promise to be rejected
  promise.then(
    () => {
      assert(false);
    },
    (err: Error) => {
      assert.match(err.message, /currently does not support/);
    },
  );
}

async function testWait(client: EchoClient) {
  const request = {
    ttl: {
      seconds: 5,
      nanos: 0,
    },
    success: {
      content: 'done',
    },
  };
  const [operation] = await client.wait(request);
  const [response] = await operation.promise();
  assert.deepStrictEqual(response.content, request.success.content);
}

// a successful streaming call that has retry options passed but does not retry
async function testServerStreamingRetryOptions(client: SequenceServiceClient) {
  const finalData: string[] = [];
  const backoffSettings = createBackoffSettings(
    100,
    1.2,
    1000,
    null,
    1.5,
    3000,
    10000,
  );

  const retryOptions = new RetryOptions([], backoffSettings);

  const settings = {
    retry: retryOptions,
  };

  client.initialize();

  const request = createStreamingSequenceRequestFactory(
    [Status.OK],
    [0.1],
    [11],
    'This is testing the brand new and shiny StreamingSequence server 3',
  );

  const response = await client.createStreamingSequence(request);
  const sequence = response[0];
  // wrap in a promise to ensure we wait to stop server
  await new Promise<void>((resolve, reject) => {
    const attemptRequest =
      new protos.google.showcase.v1beta1.AttemptStreamingSequenceRequest();
    attemptRequest.name = sequence.name!;

    const attemptStream = client.attemptStreamingSequence(
      attemptRequest,
      settings,
    );
    attemptStream.on('data', (response: {content: string}) => {
      finalData.push(response.content);
    });
    attemptStream.on('error', error => {
      attemptStream.destroy();
      reject('testServerStreamingRetryOptions problem' + error);
    });
    attemptStream.on('end', () => {
      attemptStream.end();
      resolve();
    });
  }).then(() => {
    assert.equal(
      finalData.join(' '),
      'This is testing the brand new and shiny StreamingSequence server 3',
    );
  });
}

// a streaming call that retries two times and finishes successfully
async function testServerStreamingRetrieswithRetryOptions(
  client: SequenceServiceClient,
) {
  const finalData: string[] = [];
  const backoffSettings = createBackoffSettings(
    100,
    1.2,
    1000,
    null,
    1.5,
    3000,
    10000,
  );

  const retryOptions = new RetryOptions([14, 4], backoffSettings);

  const settings = {
    retry: retryOptions,
  };

  client.initialize();

  const request = createStreamingSequenceRequestFactory(
    [Status.UNAVAILABLE, Status.DEADLINE_EXCEEDED, Status.OK],
    [0.1, 0.1, 0.1],
    [1, 2, 11],
    'This is testing the brand new and shiny StreamingSequence server 3',
  );

  const response = await client.createStreamingSequence(request);
  // wrap in a promise to ensure we wait to stop server
  await new Promise<void>((resolve, reject) => {
    const sequence = response[0];

    const attemptRequest =
      new protos.google.showcase.v1beta1.AttemptStreamingSequenceRequest();
    attemptRequest.name = sequence.name!;

    const attemptStream = client.attemptStreamingSequence(
      attemptRequest,
      settings,
    );
    attemptStream.on('data', (response: {content: string}) => {
      finalData.push(response.content);
    });
    attemptStream.on('error', () => {
      reject('testServerStreamingRetrieswithRetryOptions problem');
    });
    attemptStream.on('end', () => {
      attemptStream.end();
      resolve();
    });
  }).then(() => {
    assert.equal(
      finalData.join(' '),
      'This This is This is testing the brand new and shiny StreamingSequence server 3',
    );
  });
}

// a streaming call that retries twice using shouldRetryFn and finally succeeds
async function testServerStreamingRetriesWithShouldRetryFn(
  client: SequenceServiceClient,
) {
  const finalData: string[] = [];
  const shouldRetryFn = function checkRetry(error: GoogleError) {
    return [14, 4].includes(error!.code!);
  };

  const backoffSettings = createBackoffSettings(
    100,
    1.2,
    1000,
    null,
    1.5,
    3000,
    10000,
  );

  const retryOptions = new RetryOptions([], backoffSettings, shouldRetryFn);

  const settings = {
    retry: retryOptions,
  };

  client.initialize();

  const request = createStreamingSequenceRequestFactory(
    [Status.UNAVAILABLE, Status.DEADLINE_EXCEEDED, Status.OK],
    [0.1, 0.1, 0.1],
    [1, 2, 11],
    'This is testing the brand new and shiny StreamingSequence server 3',
  );

  const response = await client.createStreamingSequence(request);
  // wrap in a promise to ensure we wait to stop server
  await new Promise<void>((resolve, reject) => {
    const sequence = response[0];
    const attemptRequest =
      new protos.google.showcase.v1beta1.AttemptStreamingSequenceRequest();
    attemptRequest.name = sequence.name!;

    const attemptStream = client.attemptStreamingSequence(
      attemptRequest,
      settings,
    );
    attemptStream.on('data', (response: {content: string}) => {
      finalData.push(response.content);
    });
    attemptStream.on('error', (error: Error) => {
      reject('testServerStreamingRetriesWithShouldRetryFn problem' + error);
    });
    attemptStream.on('end', () => {
      attemptStream.end();
      resolve();
    });
  }).then(() => {
    assert.equal(
      finalData.join(' '),
      'This This is This is testing the brand new and shiny StreamingSequence server 3',
    );
  });
}

// streaming call that retries twice using RetryRequestOptions instead of RetryOptions
async function testServerStreamingRetrieswithRetryRequestOptions(
  client: SequenceServiceClient,
) {
  const finalData: string[] = [];
  const retryRequestOptions = {
    objectMode: true,
    retries: 2,
    maxRetryDelay: 70,
    retryDelayMultiplier: 3,
    totalTimeout: 650,
    noResponseRetries: 3,
    currentRetryAttempt: 0,
    shouldRetryFn: function checkRetry(error: GoogleError) {
      return [14, 4].includes(error!.code!);
    },
  };

  const settings = {
    retryRequestOptions: retryRequestOptions,
  };

  client.initialize();

  const request = createStreamingSequenceRequestFactory(
    [Status.UNAVAILABLE, Status.DEADLINE_EXCEEDED, Status.OK],
    [0.1, 0.1, 0.1],
    [1, 2, 11],
    'This is testing the brand new and shiny StreamingSequence server 3',
  );

  const response = await client.createStreamingSequence(request);
  // wrap in a promise to ensure we wait to stop server
  await new Promise<void>((resolve, reject) => {
    const sequence = response[0];

    const attemptRequest =
      new protos.google.showcase.v1beta1.AttemptStreamingSequenceRequest();
    attemptRequest.name = sequence.name!;

    const attemptStream = client.attemptStreamingSequence(
      attemptRequest,
      settings,
    );
    attemptStream.on('data', (response: {content: string}) => {
      finalData.push(response.content);
    });
    attemptStream.on('error', () => {
      reject('testServerStreamingRetrieswithRetryRequestOptions problem');
    });
    attemptStream.on('end', () => {
      attemptStream.end();
      resolve();
    });
  }).then(() => {
    assert.equal(
      finalData.join(' '),
      'This This is This is testing the brand new and shiny StreamingSequence server 3',
    );
  });
}

// When the stream recieves data then the retry count should be set to 0
async function testResetRetriesToZero(client: SequenceServiceClient) {
  const finalData: string[] = [];
  const shouldRetryFn = (error: GoogleError) => {
    return [4, 5, 6, 7].includes(error!.code!);
  };
  const backoffSettings = createBackoffSettings(
    10000,
    2.5,
    1000,
    null,
    1.5,
    3000,
    null,
  );
  // intentionally set maxRetries to a value less than
  // the number of errors in the sequence
  backoffSettings.maxRetries = 2;
  const getResumptionRequestFn = (request: RequestType) => {
    return request;
  };

  const retryOptions = new RetryOptions(
    [],
    backoffSettings,
    shouldRetryFn,
    getResumptionRequestFn,
  );

  const settings = {
    retry: retryOptions,
  };

  client.initialize();

  const request = createStreamingSequenceRequestFactory(
    [
      Status.DEADLINE_EXCEEDED,
      Status.NOT_FOUND,
      Status.ALREADY_EXISTS,
      Status.PERMISSION_DENIED,
      Status.OK,
    ],
    [0.1, 0.1, 0.1, 0.1, 0.1],
    [1, 2, 3, 4, 5],
    'This is testing the brand new and shiny StreamingSequence server 3',
  );
  const response = await client.createStreamingSequence(request);
  // wrap in a promise to ensure we wait to stop server
  await new Promise<void>((resolve, reject) => {
    const sequence = response[0];

    const attemptRequest =
      new protos.google.showcase.v1beta1.AttemptStreamingSequenceRequest();
    attemptRequest.name = sequence.name!;

    const attemptStream = client.attemptStreamingSequence(
      attemptRequest,
      settings,
    );
    attemptStream.on('data', (response: {content: string}) => {
      finalData.push(response.content);
    });
    attemptStream.on('error', () => {
      reject('testResetRetriesToZero should not receive an error event');
    });
    attemptStream.on('end', () => {
      attemptStream.end();
      resolve();
    });
    attemptStream.on('close', () => {
      reject('testResetRetriesToZero closed on an error');
    });
  }).then(() => {
    assert.deepStrictEqual(
      finalData.join(' '),
      'This This is This is testing This is testing the This is testing the brand',
    );
  });
}

// When maxRetries are set to 2 then on the third error from the server gax
// should throw an error that says the retry count has been exceeded.
async function testShouldFailOnThirdError(client: SequenceServiceClient) {
  const backoffSettings = createBackoffSettings(
    100,
    1.2,
    1000,
    null,
    1.5,
    3000,
    null,
  );
  const allowedCodes = [4, 5, 6];
  const retryOptions = new RetryOptions(allowedCodes, backoffSettings);
  backoffSettings.maxRetries = 2;

  const settings = {
    retry: retryOptions,
  };

  client.initialize();

  const request = createStreamingSequenceRequestFactory(
    [
      Status.DEADLINE_EXCEEDED, // Error code 4
      Status.NOT_FOUND, // Error code 5
      Status.ALREADY_EXISTS, // Error code 6
      Status.OK,
    ],
    [0.1, 0.1, 0.1, 0.1],
    [0, 0, 0, 1],
    'This is testing the brand new and shiny StreamingSequence server 3',
  );
  const response = await client.createStreamingSequence(request);
  await new Promise<void>((resolve, reject) => {
    const sequence = response[0];

    const attemptRequest =
      new protos.google.showcase.v1beta1.AttemptStreamingSequenceRequest();
    attemptRequest.name = sequence.name!;

    const attemptStream = client.attemptStreamingSequence(
      attemptRequest,
      settings,
    );
    attemptStream.on('data', () => {
      reject('The stream should not receive any data');
    });
    attemptStream.on('error', (error: GoogleError) => {
      assert.strictEqual(error.code, 4);
      assert.strictEqual(
        error.message,
        'Exceeded maximum number of retries retrying error Error: 6 ALREADY_EXISTS: 6 before any response was received',
      );
    });
    attemptStream.on('end', () => {
      reject('testShouldFailOnThirdError finished before it received an error');
    });
    attemptStream.on('close', () => {
      attemptStream.end();
      resolve();
    });
  });
}

// When we set a low timeout we should throw and error that says
// the timeout has been exceeded
async function testShouldTimeoutWithNewRetries(client: SequenceServiceClient) {
  const backoffSettings = createBackoffSettings(
    100,
    1.2,
    1000,
    null,
    1.5,
    3000,
    2, // silly low timeout
  );
  const allowedCodes = [4, 5, 6];
  const retryOptions = new RetryOptions(allowedCodes, backoffSettings);

  const settings = {
    retry: retryOptions,
  };

  client.initialize();

  const request = createStreamingSequenceRequestFactory(
    [
      Status.ALREADY_EXISTS, // Error code 6
      Status.NOT_FOUND, // Error code 5
      Status.DEADLINE_EXCEEDED, // Error code 4
      Status.OK,
    ],
    [0.1, 0.1, 0.1, 0.1],
    [0, 0, 0, 1],
    'This is testing the brand new and shiny StreamingSequence server 3',
  );
  const response = await client.createStreamingSequence(request);
  await new Promise<void>((resolve, reject) => {
    const sequence = response[0];

    const attemptRequest =
      new protos.google.showcase.v1beta1.AttemptStreamingSequenceRequest();
    attemptRequest.name = sequence.name!;

    const attemptStream = client.attemptStreamingSequence(
      attemptRequest,
      settings,
    );
    attemptStream.on('data', () => {
      reject('The stream should not receive any data');
    });
    attemptStream.on('error', (error: GoogleError) => {
      assert.strictEqual(error.code, 4);
      try {
        assert.strictEqual(
          error.message,
          'Total timeout of API exceeded 2 milliseconds retrying error Error: 6 ALREADY_EXISTS: 6  before any response was received.',
        );
      } catch (AssertionError) {
        assert.strictEqual(
          error.message,
          'Total timeout of API exceeded 2 milliseconds retrying error Error: 5 NOT_FOUND: 5  before any response was received.',
        );
      }
    });
    attemptStream.on('end', () => {
      reject(
        'testShouldTimeoutWithNewRetries finished before it received an error',
      );
    });
    attemptStream.on('close', () => {
      attemptStream.end();
      resolve();
    });
  });
}

// streaming call that retries twice with RetryRequestOptions and resumes from where it left off
async function testServerStreamingRetrieswithRetryRequestOptionsResumptionStrategy(
  client: SequenceServiceClient,
) {
  const finalData: string[] = [];
  const shouldRetryFn = (error: GoogleError) => {
    return [4, 14].includes(error!.code!);
  };
  const backoffSettings = createBackoffSettings(
    10000,
    2.5,
    1000,
    null,
    1.5,
    3000,
    600000,
  );
  const getResumptionRequestFn = (request: RequestType) => {
    const newRequest =
      new protos.google.showcase.v1beta1.AttemptStreamingSequenceRequest() as unknown as RequestType;
    newRequest.name = request.name;
    newRequest.lastFailIndex = 5;
    return newRequest as unknown as RequestType;
  };

  const retryOptions = new RetryOptions(
    [],
    backoffSettings,
    shouldRetryFn,
    getResumptionRequestFn,
  );

  const settings = {
    retry: retryOptions,
  };

  client.initialize();

  const request = createStreamingSequenceRequestFactory(
    [Status.UNAVAILABLE, Status.DEADLINE_EXCEEDED, Status.OK],
    [0.1, 0.1, 0.1],
    [1, 2, 11],
    'This is testing the brand new and shiny StreamingSequence server 3',
  );
  const response = await client.createStreamingSequence(request);
  // wrap in a promise to ensure we wait to stop server
  await new Promise<void>((resolve, reject) => {
    const sequence = response[0];

    const attemptRequest =
      new protos.google.showcase.v1beta1.AttemptStreamingSequenceRequest();
    attemptRequest.name = sequence.name!;

    const attemptStream = client.attemptStreamingSequence(
      attemptRequest,
      settings,
    );
    attemptStream.on('data', (response: {content: string}) => {
      finalData.push(response.content);
    });
    attemptStream.on('error', () => {
      reject(
        'testServerStreamingRetrieswithRetryRequestOptionsResumptionStrategy problem',
      );
    });
    attemptStream.on('end', () => {
      attemptStream.end();
      resolve();
    });
  }).then(() => {
    assert.deepStrictEqual(
      finalData.join(' '),
      'This new and new and shiny StreamingSequence server 3',
    );
  });
}

// fails on the first error in the sequence
async function testServerStreamingThrowsClassifiedTransientErrorNote(
  client: SequenceServiceClient,
) {
  const finalData: string[] = [];
  const backoffSettings = createBackoffSettings(
    100,
    1.2,
    1000,
    null,
    1.5,
    3000,
    10000,
  );
  const allowedCodes = [4];
  const retryOptions = new RetryOptions(allowedCodes, backoffSettings);

  const settings = {
    retry: retryOptions,
  };

  client.initialize();

  const request = createStreamingSequenceRequestFactory(
    [Status.UNAVAILABLE, Status.DEADLINE_EXCEEDED, Status.OK],
    [0.1, 0.1, 0.1],
    [1, 2, 11],
    'This is testing the brand new and shiny StreamingSequence server 3',
  );

  const response = await client.createStreamingSequence(request);
  // wrap in a promise to ensure we wait to stop server
  await new Promise<void>((resolve, reject) => {
    const sequence = response[0];

    const attemptRequest =
      new protos.google.showcase.v1beta1.AttemptStreamingSequenceRequest();
    attemptRequest.name = sequence.name!;

    const attemptStream = client.attemptStreamingSequence(
      attemptRequest,
      settings,
    );
    attemptStream.on('data', (data: {content: string}) => {
      finalData.push(data.content);
    });
    attemptStream.on('error', (e: GoogleError) => {
      assert.strictEqual(e.code, 14);
      assert.match(e.note!, /not classified as transient/);
      finalData.join(' ');
    });
    attemptStream.on('close', () => {
      attemptStream.end();
      resolve();
    });
    attemptStream.on('end', () => {
      reject(
        'testServerStreamingThrowsClassifiedTransientErrorNote ended cleanly without an error',
      );
    });
  }).then(() => {
    assert.equal(finalData, 'This');
  });
}

// retries once and fails on the second error in the sequence
async function testServerStreamingRetriesAndThrowsClassifiedTransientErrorNote(
  client: SequenceServiceClient,
) {
  const backoffSettings = createBackoffSettings(
    100,
    1.2,
    1000,
    null,
    1.5,
    3000,
    10000,
  );
  const allowedCodes = [14];
  const retryOptions = new RetryOptions(allowedCodes, backoffSettings);

  const settings = {
    retry: retryOptions,
  };

  client.initialize();

  const request = createStreamingSequenceRequestFactory(
    [Status.UNAVAILABLE, Status.DEADLINE_EXCEEDED, Status.OK],
    [0.1, 0.1, 0.1],
    [1, 2, 11],
    'This is testing the brand new and shiny StreamingSequence server 3',
  );

  const response = await client.createStreamingSequence(request);
  // wrap in a promise to ensure we wait to stop server
  await new Promise<void>((resolve, reject) => {
    const sequence = response[0];

    const attemptRequest =
      new protos.google.showcase.v1beta1.AttemptStreamingSequenceRequest();
    attemptRequest.name = sequence.name!;

    const attemptStream = client.attemptStreamingSequence(
      attemptRequest,
      settings,
    );
    attemptStream.on('error', (e: GoogleError) => {
      assert.strictEqual(e.code, 4);
      assert.match(e.note!, /not classified as transient/);
    });
    attemptStream.on('close', () => {
      attemptStream.end();
      resolve();
    });
    attemptStream.on('end', () => {
      reject(
        'testServerStreamingRetriesAndThrowsClassifiedTransientErrorNote ended cleanly without throwing an error',
      );
    });
  });
}

async function testServerStreamingThrowsCannotSetTotalTimeoutMillisMaxRetries(
  client: SequenceServiceClient,
) {
  const backoffSettings = createBackoffSettings(
    100,
    1.2,
    1000,
    null,
    1.5,
    3000,
    10000,
  );
  const allowedCodes = [14];
  backoffSettings.maxRetries = 1;
  const retryOptions = new RetryOptions(allowedCodes, backoffSettings);

  const settings = {
    retry: retryOptions,
  };

  client.initialize();

  const request = createStreamingSequenceRequestFactory(
    [Status.UNAVAILABLE, Status.OK],
    [0.1, 0.1],
    [1, 11],
    'This is testing the brand new and shiny StreamingSequence server 3',
  );

  const response = await client.createStreamingSequence(request);
  // wrap in a promise to ensure we wait to stop server
  await new Promise<void>((resolve, reject) => {
    const sequence = response[0];

    const attemptRequest =
      new protos.google.showcase.v1beta1.AttemptStreamingSequenceRequest();
    attemptRequest.name = sequence.name!;

    const attemptStream = client.attemptStreamingSequence(
      attemptRequest,
      settings,
    );
    attemptStream.on('error', (e: GoogleError) => {
      assert.strictEqual(e.code, 3);
      assert.match(
        e.message,
        /Cannot set both totalTimeoutMillis and maxRetries/,
      );
    });
    attemptStream.on('close', () => {
      attemptStream.end();
      resolve();
    });
    attemptStream.on('end', () => {
      reject(
        'testServerStreamingThrowsCannotSetTotalTimeoutMillisMaxRetries ended cleanly without an error',
      );
    });
  });
}

// The test should not retry when the max retries are set to 0
// and the emitted error should bubble up to the user when it does not retry.
async function testErrorMaxRetries0(client: SequenceServiceClient) {
  const shouldRetryFn = (error: GoogleError) => {
    return [4].includes(error!.code!);
  };
  const backoffSettings = createMaxRetriesBackoffSettings(
    10000,
    2.5,
    1000,
    0,
    1.5,
    3000,
    0,
  );
  const getResumptionRequestFn = (request: RequestType) => {
    return request;
  };

  const retryOptions = new RetryOptions(
    [],
    backoffSettings,
    shouldRetryFn,
    getResumptionRequestFn,
  );

  const settings = {
    retry: retryOptions,
  };

  client.initialize();

  const request = createStreamingSequenceRequestFactory(
    [Status.DEADLINE_EXCEEDED, Status.OK],
    [0.1, 0.1],
    [0, 1],
    'This is testing the brand new and shiny StreamingSequence server 3',
  );
  const response = await client.createStreamingSequence(request);
  // wrap in a promise to ensure we wait to stop server
  await new Promise<void>((resolve, reject) => {
    const sequence = response[0];

    const attemptRequest =
      new protos.google.showcase.v1beta1.AttemptStreamingSequenceRequest();
    attemptRequest.name = sequence.name!;
    const attemptStream = client.attemptStreamingSequence(
      attemptRequest,
      settings,
    );
    attemptStream.on('data', () => {
      reject('The stream should not receive any data');
    });
    attemptStream.on('error', (error: GoogleError) => {
      assert.strictEqual(error.code, 4);
      assert.strictEqual(error.note, 'Max retries is set to zero.');
    });
    attemptStream.on('end', () => {
      reject('testErrorMaxRetries0 should not end before it receives an error');
    });
    attemptStream.on('close', () => {
      attemptStream.end();
      resolve();
    });
  });
}

// a streaming call that retries two times and finishes successfully
async function testServerStreamingRetriesImmediatelywithRetryOptions(
  client: SequenceServiceClient,
) {
  const finalData: string[] = [];
  const backoffSettings = createBackoffSettings(
    100,
    1.2,
    1000,
    null,
    1.5,
    3000,
    10000,
  );

  // allow the two codes we are going to send as errors
  const retryOptions = new RetryOptions([14, 4], backoffSettings);

  const settings = {
    retry: retryOptions,
  };

  client.initialize();

  // errors immediately, then again after sending "This is"
  const request = createStreamingSequenceRequestFactory(
    [Status.UNAVAILABLE, Status.DEADLINE_EXCEEDED, Status.OK],
    [0.1, 0.1, 0.1],
    [0, 2, 11],
    'This is testing the brand new and shiny StreamingSequence server 3',
  );

  const response = await client.createStreamingSequence(request);
  // wrap in a promise to ensure we wait to stop server
  await new Promise<void>((resolve, reject) => {
    const sequence = response[0];

    const attemptRequest =
      new protos.google.showcase.v1beta1.AttemptStreamingSequenceRequest();
    attemptRequest.name = sequence.name!;

    const attemptStream = client.attemptStreamingSequence(
      attemptRequest,
      settings,
    );
    attemptStream.on('data', (response: {content: string}) => {
      finalData.push(response.content);
    });
    attemptStream.on('error', () => {
      reject(
        'testServerStreamingRetriesImmediatelywithRetryOptions stream had an error',
      );
    });
    attemptStream.on('end', () => {
      attemptStream.end();
      resolve();
    });
  }).then(() => {
    assert.equal(
      finalData.join(' '),
      'This is This is testing the brand new and shiny StreamingSequence server 3',
    );
  });
}
// sequence that fails on the first error in the sequence
// tests streams connected by pumpify
async function testImmediateStreamingErrorNoBufferPumpify(
  client: SequenceServiceClient,
) {
  const backoffSettings = createBackoffSettings(
    100,
    1.2,
    1000,
    null,
    1.5,
    3000,
    10000,
  );
  const allowedCodes = [4];
  const retryOptions = new RetryOptions(allowedCodes, backoffSettings);

  const settings = {
    retry: retryOptions,
  };

  client.initialize();

  const request = createStreamingSequenceRequestFactory(
    [Status.UNAVAILABLE, Status.DEADLINE_EXCEEDED, Status.OK],
    [0.1, 0.1, 0.1],
    [0, 2, 11], //error before any data is sent
    'This is testing the brand new and shiny StreamingSequence server 3',
  );

  const response = await client.createStreamingSequence(request);
  // wrap in a promise to ensure we wait to stop server
  await new Promise<void>((resolve, reject) => {
    const sequence = response[0];

    const attemptRequest =
      new protos.google.showcase.v1beta1.AttemptStreamingSequenceRequest();
    attemptRequest.name = sequence.name!;

    const attemptStream = client.attemptStreamingSequence(
      attemptRequest,
      settings,
    );
    const secondStream = new PassThrough({objectMode: true});
    const thirdStream = new PassThrough({objectMode: true});

    const togetherStream = pumpify.obj([
      attemptStream,
      secondStream,
      thirdStream,
    ]);
    attemptStream.on('data', () => {
      reject('testImmediateStreamingErrorNoBufferPumpify error attemptStream');
    });

    togetherStream.on('data', () => {
      reject('testImmediateStreamingErrorNoBufferPumpify error togetherStream');
    });

    // when using pipeline it is expected that togetherStream would log before thirdStream because they're basically invoking the same thing
    // imagine togetherStream is three physical pipes put together - what comes out of the third section of pipe is the same
    // as what comes out of the whole thing and arrives at the same time

    // when using pumpify, only first stream and final stream will be logged
    togetherStream.on('error', (e: GoogleError) => {
      assert.strictEqual(e.code, 14);
    });

    attemptStream.on('error', (e: GoogleError) => {
      assert.strictEqual(e.code, 14);
    });

    attemptStream.on('end', () => {
      reject('testImmediateStreamingErrorNoBufferPumpify ended without error');
    });

    togetherStream.on('end', () => {
      reject('testImmediateStreamingErrorNoBufferPumpify ended without error');
    });
    togetherStream.on('close', () => {
      // streams should already be cleaned up
      // but end them anyway for posterity
      attemptStream.end();
      secondStream.end();
      thirdStream.end();
      togetherStream.end();
      resolve();
    });
  });
}

// sequence that fails on the first error in the sequence
// tests streams connected by pipeline
async function testImmediateStreamingErrorNoBufferPipeline(
  client: SequenceServiceClient,
) {
  const backoffSettings = createBackoffSettings(
    100,
    1.2,
    1000,
    null,
    1.5,
    3000,
    10000,
  );
  const allowedCodes = [4];
  const retryOptions = new RetryOptions(allowedCodes, backoffSettings);

  const settings = {
    retry: retryOptions,
  };

  client.initialize();

  const request = createStreamingSequenceRequestFactory(
    [Status.UNAVAILABLE, Status.DEADLINE_EXCEEDED, Status.OK],
    [0.1, 0.1, 0.1],
    [0, 2, 11], //error before any data is sent
    'This is testing the brand new and shiny StreamingSequence server 3',
  );
  const results: string[] = [];

  const response = await client.createStreamingSequence(request);
  // wrap in a promise to ensure we wait to stop server
  await new Promise<void>((resolve, reject) => {
    const sequence = response[0];

    const attemptRequest =
      new protos.google.showcase.v1beta1.AttemptStreamingSequenceRequest();
    attemptRequest.name = sequence.name!;

    const attemptStream = client.attemptStreamingSequence(
      attemptRequest,
      settings,
    );
    const secondStream = new PassThrough({objectMode: true});
    const thirdStream = new PassThrough({objectMode: true});

    const togetherStream = pipeline(
      [attemptStream, secondStream, thirdStream],
      err => {
        if (!err) {
          reject(
            'testImmediateStreamingErrorNoBufferPipeline suceeded, expected error',
          );
        }
      },
    );
    attemptStream.on('data', () => {
      reject(
        'testImmediateStreamingErrorNoBufferPipeline received data, should have errored',
      );
    });

    togetherStream.on('error', (e: GoogleError) => {
      results.push('togetherStream');
      assert.strictEqual(e.code, 14);
    });
    secondStream.on('error', (e: GoogleError) => {
      results.push('secondStream');
      assert.strictEqual(e.code, 14);
    });
    thirdStream.on('error', (e: GoogleError) => {
      results.push('thirdStream'); // this won't happen
      assert.strictEqual(e.code, 14);
    });
    attemptStream.on('error', (e: GoogleError) => {
      results.push('attemptStream');
      assert.strictEqual(e.code, 14);
    });
    togetherStream.on('end', () => {
      reject('testImmediateStreamingErrorNoBufferPipeline ended without error');
    });
    togetherStream.on('close', () => {
      // these should be cleaned up already but
      // it doesn't hurt to call end
      attemptStream.end();
      secondStream.end();
      thirdStream.end();
      togetherStream.end();
      resolve();
    });
  }).then(() => {
    // when using pipeline it is expected that togetherStream would log before thirdStream because they're basically invoking the same thing
    // imagine togetherStream is three physical pipes put together - what comes out of the third section of pipe is the same
    // as what comes out of the whole thing and arrives at the same time
    assert.deepStrictEqual(results, [
      'attemptStream',
      'secondStream',
      'togetherStream',
      'thirdStream',
    ]);
  });
}

// sequence that throws a retriable error code before receiving data
// then succeeds
async function testImmediateStreamingErrorThenSucceedsNoBufferYesRetryPumpify(
  client: SequenceServiceClient,
) {
  const backoffSettings = createBackoffSettings(
    100,
    1.2,
    1000,
    null,
    1.5,
    3000,
    10000,
  );
  const allowedCodes = [14];
  const retryOptions = new RetryOptions(allowedCodes, backoffSettings); // default resumption strategy starts from beginning which is fine in this case

  const settings = {
    retry: retryOptions,
  };

  client.initialize();
  const baseArray = Array.from(Array(100).keys());
  let testString = '';

  for (let i = 0; i < baseArray.length; i++) {
    testString = testString.concat(baseArray[i].toString() + ' ');
  }

  const request = createStreamingSequenceRequestFactory(
    [Status.UNAVAILABLE, Status.OK],
    [0.1, 0.1],
    [0, 100], // throw a retryable error code immediately
    testString,
  );

  const response = await client.createStreamingSequence(request);
  const results: string[] = [];
  const results2: string[] = [];
  // wrap in a promise to ensure we wait to stop server
  await new Promise<void>((resolve, reject) => {
    const sequence = response[0];

    const attemptRequest =
      new protos.google.showcase.v1beta1.AttemptStreamingSequenceRequest();
    attemptRequest.name = sequence.name!;

    const attemptStream = client.attemptStreamingSequence(
      attemptRequest,
      settings,
    );
    const secondStream = new PassThrough({objectMode: true});
    const thirdStream = new PassThrough({objectMode: true});

    const togetherStream = pumpify.obj([
      attemptStream,
      secondStream,
      thirdStream,
    ]);

    attemptStream.on('data', (data: {content: string}) => {
      results.push(data.content);
    });

    togetherStream.on('data', (data: {content: string}) => {
      results2.push(data.content);
    });

    togetherStream.on('error', (e: GoogleError) => {
      reject(
        'testImmediateStreamingErrorThenSucceedsNoBufferYesRetryPumpify error ' +
          e,
      );
    });

    togetherStream.on('close', () => {
      reject(
        'testImmediateStreamingErrorThenSucceedsNoBufferYesRetryPumpify closed on an error',
      );
    });
    togetherStream.on('end', () => {
      attemptStream.end();
      secondStream.end();
      thirdStream.end();
      togetherStream.end();
      resolve();
    });
  }).then(() => {
    assert.strictEqual(results.length, 100);
    assert.strictEqual(results2.length, 100);
  });
}

// sequence that throws a retriable error code before receiving data
// then succeeds
async function testImmediateStreamingErrorThenSucceedsNoBufferYesRetryPipeline(
  client: SequenceServiceClient,
) {
  const backoffSettings = createBackoffSettings(
    100,
    1.2,
    1000,
    null,
    1.5,
    3000,
    10000,
  );
  const allowedCodes = [14];
  const retryOptions = new RetryOptions(allowedCodes, backoffSettings); // default resumption strategy starts from beginning which is fine in this case

  const settings = {
    retry: retryOptions,
  };

  client.initialize();
  const baseArray = Array.from(Array(100).keys());
  let testString = '';

  for (let i = 0; i < baseArray.length; i++) {
    testString = testString.concat(baseArray[i].toString() + ' ');
  }

  const request = createStreamingSequenceRequestFactory(
    [Status.UNAVAILABLE, Status.OK],
    [0.1, 0.1],
    [0, 100], // throw a retryable error code immediately
    testString,
  );

  const response = await client.createStreamingSequence(request);
  const results: String[] = [];
  const results2: String[] = [];
  // wrap in a promise to ensure we wait to stop server
  await new Promise<void>((resolve, reject) => {
    const sequence = response[0];

    const attemptRequest =
      new protos.google.showcase.v1beta1.AttemptStreamingSequenceRequest();
    attemptRequest.name = sequence.name!;

    const attemptStream = client.attemptStreamingSequence(
      attemptRequest,
      settings,
    );
    const secondStream = new PassThrough({objectMode: true});
    const thirdStream = new PassThrough({objectMode: true});

    const togetherStream = pipeline(
      [attemptStream, secondStream, thirdStream],
      err => {
        if (err) {
          reject(
            'testImmediateStreamingErrorThenSucceedsNoBufferYesRetryPipeline failed' +
              err,
          );
        } else {
          assert.strictEqual(results.length, 100);
        }
      },
    );
    attemptStream.on('data', (data: {content: string}) => {
      results.push(data.content);
    });

    togetherStream.on('data', (data: {content: string}) => {
      results2.push(data.content);
    });

    togetherStream.on('error', (e: GoogleError) => {
      reject(
        'testImmediateStreamingErrorThenSucceedsNoBufferYesRetryPipeline error ' +
          e.message,
      );
    });

    togetherStream.on('end', () => {
      attemptStream.end();
      secondStream.end();
      thirdStream.end();
      togetherStream.end();
      resolve();
    });
    // we only check for attemptStream.on("close") which would indicate
    // closing on an error. togetherStream.on("close") is handled
    // by the pipeline constructor earlier in the test
    attemptStream.on('close', () => {
      reject(
        'testImmediateStreamingErrorThenSucceedsNoBufferYesRetryPipeline closed on error',
      );
    });
  }).then(() => {
    assert.strictEqual(results.length, 100);
    assert.strictEqual(results2.length, 100);
  });
}
// sequence that errors immediately, retries, then succeeds
async function testImmediateStreamingErrorNoBufferYesRetryRequestRetryPipeline(
  client: SequenceServiceClient,
) {
  const retryRequestOptions = {
    objectMode: true,
    shouldRetryFn: () => {
      return true;
    },
  }; //always retry

  const settings = {
    retryRequestOptions: retryRequestOptions,
  };

  client.initialize();
  const baseArray = Array.from(Array(100).keys());
  let testString = '';

  for (let i = 0; i < baseArray.length; i++) {
    testString = testString.concat(baseArray[i].toString() + ' ');
  }

  const request = createStreamingSequenceRequestFactory(
    [Status.UNAVAILABLE, Status.OK],
    [0.1, 0.1],
    [0, 100], //error before any data is sent but retry
    testString,
  );

  const response = await client.createStreamingSequence(request);
  const results: String[] = [];
  const results2: String[] = [];
  // wrap in a promise to ensure we wait to stop server
  await new Promise<void>((resolve, reject) => {
    const sequence = response[0];

    const attemptRequest =
      new protos.google.showcase.v1beta1.AttemptStreamingSequenceRequest();
    attemptRequest.name = sequence.name!;

    const attemptStream = client.attemptStreamingSequence(
      attemptRequest,
      settings,
    );
    const secondStream = new PassThrough({objectMode: true});
    const thirdStream = new PassThrough({objectMode: true});

    const togetherStream = pipeline(
      [attemptStream, secondStream, thirdStream],
      err => {
        if (err) {
          reject(
            'testStreamingPipelineSucceedsAfterDataNoBufferNoRetryPipeline error' +
              err,
          );
        } else {
          assert.strictEqual(results.length, 100);
        }
      },
    );

    attemptStream.on('data', (data: {content: string}) => {
      results.push(data.content);
    });

    togetherStream.on('data', (data: {content: string}) => {
      results2.push(data.content);
    });
    togetherStream.on('error', (e: GoogleError) => {
      reject(
        'testStreamingPipelineSucceedsAfterDataNoBufferNoRetryPipeline error' +
          e,
      );
    });

    attemptStream.on('error', (e: GoogleError) => {
      reject(
        'testStreamingPipelineSucceedsAfterDataNoBufferNoRetryPipeline error' +
          e,
      );
    });
    // we only check for attemptStream.on("close") which would indicate
    // closing on an error. togetherStream.on("close") is handled
    // by the pipeline constructor earlier in the test
    attemptStream.on('close', (e: GoogleError) => {
      reject(
        'testImmediateStreamingErrorNobufferYesRetryRequestRetryPipeline closed on error and should not have ' +
          e,
      );
    });
    togetherStream.on('end', () => {
      attemptStream.end();
      secondStream.end();
      thirdStream.end();
      togetherStream.end();
      resolve();
    });
  }).then(() => {
    assert.strictEqual(results.length, 100);
    assert.strictEqual(results2.length, 100);
  });
}
// sequence that errors immediately, retries, then succeeds
async function testImmediateStreamingErrorNoBufferYesRetryRequestRetryPumpify(
  client: SequenceServiceClient,
) {
  const retryRequestOptions = {
    objectMode: true,
    shouldRetryFn: () => {
      return true;
    },
  }; //always retry

  const settings = {
    retryRequestOptions: retryRequestOptions,
  };

  client.initialize();
  const baseArray = Array.from(Array(100).keys());
  let testString = '';

  for (let i = 0; i < baseArray.length; i++) {
    testString = testString.concat(baseArray[i].toString() + ' ');
  }

  const request = createStreamingSequenceRequestFactory(
    [Status.UNAVAILABLE, Status.OK],
    [0.1, 0.1],
    [0, 100], //error before any data is sent but retry
    testString,
  );

  const response = await client.createStreamingSequence(request);
  const results: string[] = [];
  const results2: string[] = [];
  // wrap in a promise to ensure we wait to stop server
  await new Promise<void>((resolve, reject) => {
    const sequence = response[0];

    const attemptRequest =
      new protos.google.showcase.v1beta1.AttemptStreamingSequenceRequest();
    attemptRequest.name = sequence.name!;

    const attemptStream = client.attemptStreamingSequence(
      attemptRequest,
      settings,
    );
    const secondStream = new PassThrough({objectMode: true});
    const thirdStream = new PassThrough({objectMode: true});
    const togetherStream = pumpify.obj([
      attemptStream,
      secondStream,
      thirdStream,
    ]);

    attemptStream.on('data', (data: {content: string}) => {
      results.push(data.content);
    });

    togetherStream.on('data', (data: {content: string}) => {
      results2.push(data.content);
    });
    togetherStream.on('error', (e: GoogleError) => {
      reject(
        'testImmediateStreamingErrorNoBufferYesRetryRequestRetryPumpify ' + e,
      );
    });

    attemptStream.on('error', (e: GoogleError) => {
      reject(
        'testImmediateStreamingErrorNoBufferYesRetryRequestRetryPumpify ' + e,
      );
    });
    togetherStream.on('close', () => {
      reject(
        'testImmediateStreamingErrorNoBufferYesRetryRequestRetryPumpify closed on error',
      );
    });
    togetherStream.on('end', () => {
      attemptStream.end();
      secondStream.end();
      thirdStream.end();
      togetherStream.end();
      resolve();
    });
  }).then(() => {
    assert.strictEqual(results.length, 100);
    assert.strictEqual(results2.length, 100);
  });
}

// sequence that errors after 85 items are sent and retries
async function testStreamingPipelineErrorAfterDataNoBufferYesRetryPumpify(
  client: SequenceServiceClient,
) {
  const backoffSettings = createBackoffSettings(
    100,
    1.2,
    1000,
    null,
    1.5,
    3000,
    10000,
  );
  const allowedCodes = [14];
  const getResumptionRequestFn = (request: RequestType) => {
    const newRequest =
      new protos.google.showcase.v1beta1.AttemptStreamingSequenceRequest() as unknown as RequestType;
    newRequest.name = request.name;
    newRequest.lastFailIndex = results.length; // we will have gotten 85 items, so start at the next index (which is 85)
    return newRequest as unknown as RequestType;
  };
  const retryOptions = new RetryOptions(
    allowedCodes,
    backoffSettings,
    undefined,
    getResumptionRequestFn,
  );

  const settings = {
    retry: retryOptions,
  };

  client.initialize();
  const baseArray = Array.from(Array(100).keys());
  let testString = '';

  for (let i = 0; i < baseArray.length; i++) {
    testString = testString.concat(baseArray[i].toString() + ' ');
  }

  const request = createStreamingSequenceRequestFactory(
    [Status.UNAVAILABLE, Status.OK],
    [0.1, 0.1, 0.1],
    [85, 100], //error after the 85th item
    testString,
  );

  const response = await client.createStreamingSequence(request);
  const results: string[] = [];
  const results2: string[] = [];
  // wrap in a promise to ensure we wait to stop server
  await new Promise<void>((resolve, reject) => {
    const sequence = response[0];

    const attemptRequest =
      new protos.google.showcase.v1beta1.AttemptStreamingSequenceRequest();
    attemptRequest.name = sequence.name!;

    const attemptStream = client.attemptStreamingSequence(
      attemptRequest,
      settings,
    );
    const secondStream = new PassThrough({objectMode: true});
    const thirdStream = new PassThrough({objectMode: true});

    const togetherStream: Duplex = pumpify.obj([
      attemptStream,
      secondStream,
      thirdStream,
    ]);

    attemptStream.on('data', (data: {content: string}) => {
      results.push(data.content);
    });

    attemptStream.on('end', () => {
      assert.strictEqual(results.length, 100);
    });

    togetherStream.on('data', (data: {content: string}) => {
      results2.push(data.content);
    });

    attemptStream.on('error', (e: GoogleError) => {
      assert.strictEqual(e.code, 14);
    });

    togetherStream.on('end', () => {
      resolve();
    });

    togetherStream.on('error', (e: GoogleError) => {
      reject('testStreamingPipelineErrorAfterDataNoBufferYesRetryPumpify' + e);
    });

    togetherStream.on('close', () => {
      reject(
        'testStreamingPipelineErrorAfterDataNoBufferYesRetryPumpify errored before all data was sent',
      );
    });
  }).then(() => {
    assert.strictEqual(results.length, 100);
    assert.strictEqual(results2.length, 100);
  });
}
// sequence that errors after 85 items are sent and retries
async function testStreamingPipelineErrorAfterDataNoBufferYesRetryPipeline(
  client: SequenceServiceClient,
) {
  const backoffSettings = createBackoffSettings(
    100,
    1.2,
    1000,
    null,
    1.5,
    3000,
    10000,
  );
  const allowedCodes = [14];
  const results: string[] = [];
  const results2: string[] = [];
  const getResumptionRequestFn = (request: RequestType) => {
    const newRequest =
      new protos.google.showcase.v1beta1.AttemptStreamingSequenceRequest() as unknown as RequestType;
    newRequest.name = request.name;
    newRequest.lastFailIndex = results.length; // we will have gotten 85 items, so start at the next index (which is 85)
    return newRequest as unknown as RequestType;
  };
  const retryOptions = new RetryOptions(
    allowedCodes,
    backoffSettings,
    undefined,
    getResumptionRequestFn,
  );

  const settings = {
    retry: retryOptions,
  };

  client.initialize();
  const baseArray = Array.from(Array(100).keys());
  let testString = '';

  for (let i = 0; i < baseArray.length; i++) {
    testString = testString.concat(baseArray[i].toString() + ' ');
  }

  const request = createStreamingSequenceRequestFactory(
    [Status.UNAVAILABLE, Status.OK],
    [0.1, 0.1, 0.1],
    [85, 100], //error after the 85th item
    testString,
  );

  const response = await client.createStreamingSequence(request);

  // wrap in a promise to ensure we wait to stop server
  await new Promise<void>((resolve, reject) => {
    const sequence = response[0];

    const attemptRequest =
      new protos.google.showcase.v1beta1.AttemptStreamingSequenceRequest();
    attemptRequest.name = sequence.name!;

    const attemptStream = client.attemptStreamingSequence(
      attemptRequest,
      settings,
    );
    const secondStream = new PassThrough({objectMode: true});
    const thirdStream = new PassThrough({objectMode: true});

    const togetherStream = pipeline(
      [attemptStream, secondStream, thirdStream],
      err => {
        if (err) {
          reject(
            'testStreamingPipelineErrorAfterDataNoBufferYesRetryPipeline errored ' +
              err,
          );
        } else {
          resolve();
        }
      },
    );

    attemptStream.on('data', (data: {content: string}) => {
      results.push(data.content);
    });

    attemptStream.on('end', () => {
      assert.strictEqual(results.length, 100);
    });

    togetherStream.on('data', (data: {content: string}) => {
      results2.push(data.content);
    });

    attemptStream.on('error', (e: GoogleError) => {
      assert.strictEqual(e.code, 14);
    });

    togetherStream.on('end', () => {
      resolve();
    });

    togetherStream.on('error', (e: GoogleError) => {
      reject('testStreamingPipelineErrorAfterDataNoBufferYesRetryPipeline' + e);
    });
    // we only check for attemptStream.on("close") which would indicate
    // closing on an error. togetherStream.on("close") is handled
    // by the pipeline constructor earlier in the test
    attemptStream.on('close', () => {
      reject(
        'testStreamingPipelineErrorAfterDataNoBufferYesRetryPipeline errored before all data was sent',
      );
    });
  }).then(() => {
    assert.strictEqual(results.length, 100);
    assert.strictEqual(results2.length, 100);
  });
}

// successful sequence with no errors
async function testStreamingPipelineSucceedsAfterDataNoBufferNoRetryPumpify(
  client: SequenceServiceClient,
) {
  const backoffSettings = createBackoffSettings(
    100,
    1.2,
    1000,
    null,
    1.5,
    3000,
    10000,
  );
  const allowedCodes = [4];
  const retryOptions = new RetryOptions(allowedCodes, backoffSettings);

  const settings = {
    retry: retryOptions,
  };

  client.initialize();
  const baseArray = Array.from(Array(100).keys());
  let testString = '';

  for (let i = 0; i < baseArray.length; i++) {
    testString = testString.concat(baseArray[i].toString() + ' ');
  }

  const request = createStreamingSequenceRequestFactory(
    [Status.OK],
    [0.1],
    [100], //succeed at the end
    testString,
  );

  const response = await client.createStreamingSequence(request);
  const results: string[] = [];
  const results2: string[] = [];
  // wrap in a promise to ensure we wait to stop server
  await new Promise<void>((resolve, reject) => {
    const sequence = response[0];

    const attemptRequest =
      new protos.google.showcase.v1beta1.AttemptStreamingSequenceRequest();
    attemptRequest.name = sequence.name!;

    const attemptStream = client.attemptStreamingSequence(
      attemptRequest,
      settings,
    );

    const secondStream = new PassThrough({objectMode: true});
    const thirdStream = new PassThrough({objectMode: true});

    const togetherStream = pumpify.obj([
      attemptStream,
      secondStream,
      thirdStream,
    ]);
    attemptStream.on('data', (data: {content: string}) => {
      results.push(data.content);
    });

    attemptStream.on('end', () => {
      assert.strictEqual(results.length, 100);
    });

    attemptStream.on('error', (e: GoogleError) => {
      reject(
        'testStreamingPipelineSucceedsAfterDataNoBufferNoRetryPumpify attemptStream error' +
          e,
      );
    });
    togetherStream.on('data', (data: {content: string}) => {
      results2.push(data.content);
    });
    togetherStream.on('error', (e: GoogleError) => {
      reject(
        'testStreamingPipelineSucceedsAfterDataNoBufferNoRetryPumpify togetherStream error ' +
          e,
      );
    });
    togetherStream.on('end', () => {
      attemptStream.end();
      secondStream.end();
      thirdStream.end();
      togetherStream.end();
      resolve();
    });
  }).then(() => {
    assert.strictEqual(results.length, 100);
    assert.strictEqual(results2.length, 100);
  });
}
// successful sequence with no errors
async function testStreamingPipelineSucceedsAfterDataNoBufferNoRetryPipeline(
  client: SequenceServiceClient,
) {
  const backoffSettings = createBackoffSettings(
    100,
    1.2,
    1000,
    null,
    1.5,
    3000,
    10000,
  );
  const allowedCodes = [4];
  const retryOptions = new RetryOptions(allowedCodes, backoffSettings);

  const settings = {
    retry: retryOptions,
  };

  client.initialize();
  const baseArray = Array.from(Array(100).keys());
  let testString = '';

  for (let i = 0; i < baseArray.length; i++) {
    testString = testString.concat(baseArray[i].toString() + ' ');
  }

  const request = createStreamingSequenceRequestFactory(
    [Status.OK],
    [0.1],
    [100], //succeed at the end
    testString,
  );

  const response = await client.createStreamingSequence(request);
  const results: string[] = [];
  const results2: string[] = [];
  await new Promise<void>((resolve, reject) => {
    const sequence = response[0];

    const attemptRequest =
      new protos.google.showcase.v1beta1.AttemptStreamingSequenceRequest();
    attemptRequest.name = sequence.name!;

    const attemptStream = client.attemptStreamingSequence(
      attemptRequest,
      settings,
    );

    const secondStream = new PassThrough({objectMode: true});
    const thirdStream = new PassThrough({objectMode: true});

    const togetherStream = pipeline(
      [attemptStream, secondStream, thirdStream],
      err => {
        // if an error happens on any stream in the pipeline this will be called
        if (err) {
          reject(
            'testStreamingPipelineSucceedsAfterDataNoBufferNoRetryPipeline error',
          );
        } else {
          // this handles the error free closure of the stream
          resolve();
        }
      },
    );
    attemptStream.on('data', (data: {content: string}) => {
      results.push(data.content);
    });

    attemptStream.on('end', () => {
      assert.strictEqual(results.length, 100);
    });

    togetherStream.on('data', (data: {content: string}) => {
      results2.push(data.content);
    });

    togetherStream.on('end', () => {
      attemptStream.end();
      secondStream.end();
      thirdStream.end();
      togetherStream.end();
      resolve();
    });

    // we only check for attemptStream.on("close") which would indicate
    // closing on an error. togetherStream.on("close") is handled
    // by the pipeline constructor earlier in the test
    attemptStream.on('close', () => {
      reject(
        'testStreamingPipelineSucceedsAfterDataNoBufferNoRetryPipeline closed on error',
      );
    });
  }).then(() => {
    assert.strictEqual(results.length, 100);
    assert.strictEqual(results2.length, 100);
  });
}

// sequence that fails after receiving 85 items
async function testStreamingPipelineErrorAfterDataNoBufferNoRetryPumpify(
  client: SequenceServiceClient,
) {
  const backoffSettings = createBackoffSettings(
    100,
    1.2,
    1000,
    null,
    1.5,
    3000,
    10000,
  );
  const allowedCodes = [4]; // not the code we're going to error on
  const retryOptions = new RetryOptions(allowedCodes, backoffSettings);

  const settings = {
    retry: retryOptions,
  };

  client.initialize();
  const baseString = 'zero one two three four five six seven eight nine ';
  let testString = '';

  const repeats = 100;
  for (let i = 0; i < repeats; i++) {
    testString = testString.concat(baseString);
  }

  const request = createStreamingSequenceRequestFactory(
    [Status.UNAVAILABLE, Status.DEADLINE_EXCEEDED, Status.OK],
    [0.1, 0.1, 0.1],
    [85, 99, 100], //error at the 85th
    testString,
  );

  const response = await client.createStreamingSequence(request);
  const results: string[] = [];
  const results2: string[] = [];
  // wrap in a promise to ensure we wait to stop server
  await new Promise<void>((resolve, reject) => {
    const sequence = response[0];

    const attemptRequest =
      new protos.google.showcase.v1beta1.AttemptStreamingSequenceRequest();
    attemptRequest.name = sequence.name!;

    const attemptStream = client.attemptStreamingSequence(
      attemptRequest,
      settings,
    );

    const secondStream = new PassThrough({objectMode: true});
    const thirdStream = new PassThrough({objectMode: true});

    const togetherStream = pumpify.obj([
      attemptStream,
      secondStream,
      thirdStream,
    ]);
    attemptStream.on('data', (data: {content: string}) => {
      results.push(data.content);
    });

    attemptStream.on('error', (e: GoogleError) => {
      assert.strictEqual(results.length, 85);
      assert.strictEqual(e.code, 14);
    });
    togetherStream.on('data', (data: {content: string}) => {
      results2.push(data.content);
    });
    togetherStream.on('error', (e: GoogleError) => {
      assert.strictEqual(e.code, 14);
    });
    togetherStream.on('end', () => {
      reject(
        'testStreamingPipelineErrorAfterDataNoBufferNoRetryPumpify ended cleanly but should have errored',
      );
    });
    togetherStream.on('close', () => {
      attemptStream.end();
      secondStream.end();
      thirdStream.end();
      togetherStream.end();
      resolve();
    });
  }).then(() => {
    assert.strictEqual(results2.length, 85);
    assert.strictEqual(results.length, 85);
  });
}
// sequence that fails after receiving 85 items
async function testStreamingPipelineErrorAfterDataNoBufferNoRetryPipeline(
  client: SequenceServiceClient,
) {
  const backoffSettings = createBackoffSettings(
    100,
    1.2,
    1000,
    null,
    1.5,
    3000,
    10000,
  );
  const allowedCodes = [4]; // not the code we're going to error on
  const retryOptions = new RetryOptions(allowedCodes, backoffSettings);

  const settings = {
    retry: retryOptions,
  };

  client.initialize();
  const baseString = 'zero one two three four five six seven eight nine ';
  let testString = '';

  const repeats = 100;
  for (let i = 0; i < repeats; i++) {
    testString = testString.concat(baseString);
  }

  const request = createStreamingSequenceRequestFactory(
    [Status.UNAVAILABLE, Status.DEADLINE_EXCEEDED, Status.OK],
    [0.1, 0.1, 0.1],
    [85, 99, 100], //error at the 85th
    testString,
  );

  const response = await client.createStreamingSequence(request);
  const results: string[] = [];
  const results2: string[] = [];
  // wrap in a promise to ensure we wait to stop server
  await new Promise<void>((resolve, reject) => {
    const sequence = response[0];

    const attemptRequest =
      new protos.google.showcase.v1beta1.AttemptStreamingSequenceRequest();
    attemptRequest.name = sequence.name!;

    const attemptStream = client.attemptStreamingSequence(
      attemptRequest,
      settings,
    );

    const secondStream = new PassThrough({objectMode: true});
    const thirdStream = new PassThrough({objectMode: true});

    const togetherStream = pipeline(
      [attemptStream, secondStream, thirdStream],
      err => {
        // else case is handled by togetherStream.on("close") below
        if (!err) {
          reject(
            'testImmediateStreamingErrorNoBufferPipeline suceeded, expected error',
          );
        }
      },
    );
    attemptStream.on('data', (data: {content: string}) => {
      results.push(data.content);
    });

    attemptStream.on('error', (e: GoogleError) => {
      assert.strictEqual(results.length, 85);
      assert.strictEqual(e.code, 14);
    });
    togetherStream.on('data', (data: {content: string}) => {
      results2.push(data.content);
    });
    togetherStream.on('error', (e: GoogleError) => {
      assert.strictEqual(e.code, 14);
    });
    togetherStream.on('close', () => {
      attemptStream.end();
      secondStream.end();
      thirdStream.end();
      togetherStream.end();
      resolve();
    });
  }).then(() => {
    assert.strictEqual(results2.length, 85);
    assert.strictEqual(results.length, 85);
  });
}
async function testStreamingErrorAfterDataNoBufferNoRetry(
  client: SequenceServiceClient,
) {
  const backoffSettings = createBackoffSettings(
    100,
    1.2,
    1000,
    null,
    1.5,
    3000,
    10000,
  );
  const allowedCodes = [4];
  const retryOptions = new RetryOptions(allowedCodes, backoffSettings);

  const settings = {
    retry: retryOptions,
  };

  client.initialize();
  const baseString = 'zero one two three four five six seven eight nine ';
  let testString = '';

  const repeats = 100;
  for (let i = 0; i < repeats; i++) {
    testString = testString.concat(baseString);
  }

  const request = createStreamingSequenceRequestFactory(
    [Status.UNAVAILABLE, Status.DEADLINE_EXCEEDED, Status.OK],
    [0.5, 0.1, 0.1],
    [85, 155, 99],
    testString,
  );

  const response = await client.createStreamingSequence(request);
  const results = [];

  // wrap in a promise to ensure we wait to stop server
  await new Promise<void>((resolve, reject) => {
    const sequence = response[0];

    const attemptRequest =
      new protos.google.showcase.v1beta1.AttemptStreamingSequenceRequest();
    attemptRequest.name = sequence.name!;

    const attemptStream = client.attemptStreamingSequence(
      attemptRequest,
      settings,
    );

    attemptStream.on('data', data => {
      results.push(data);
    });

    attemptStream.on('error', (e: GoogleError) => {
      assert.strictEqual(e.code, 14);
      resolve();
    });
    attemptStream.on('end', () => {
      reject(
        'testStreamingErroAfterDataNoBufferNoRetry finished successfully but should have errored',
      );
    });
    attemptStream.on('close', () => {
      resolve();
    });
  }).then(() => {
    assert.strictEqual(results.length, 85); // we chose to throw an error after the 85th result
  });
}

async function main() {
  const showcaseServer = new ShowcaseServer();
  try {
    await showcaseServer.start();
    await testShowcase();
  } finally {
    showcaseServer.stop();
  }
}

main();
