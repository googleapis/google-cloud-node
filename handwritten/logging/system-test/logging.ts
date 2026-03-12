/*!
 * Copyright 2015 Google Inc. All Rights Reserved.
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

import {BigQuery} from '@google-cloud/bigquery';
import {PubSub} from '@google-cloud/pubsub';
import {Storage} from '@google-cloud/storage';
import * as assert from 'assert';
import {describe, it} from 'mocha';
import {HOST_ADDRESS} from 'gcp-metadata';
import * as nock from 'nock';
import {Duplex} from 'stream';
import {v4} from 'uuid';
import {after, before} from 'mocha';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const http2spy = require('http2spy');
import {Logging, Sink, Log, Entry, TailEntriesResponse} from '../src';
import * as http from 'http';
import * as instrumentation from '../src/utils/instrumentation';
import {trace} from '@opentelemetry/api';
import {Resource} from '@opentelemetry/resources';
import {SEMRESATTRS_SERVICE_NAME} from '@opentelemetry/semantic-conventions';
import {TraceExporter} from '@google-cloud/opentelemetry-cloud-trace-exporter';
import {NodeSDK} from '@opentelemetry/sdk-node';
nock(HOST_ADDRESS)
  .get(() => true)
  .replyWithError({code: 'ENOTFOUND'})
  .persist();

describe('Logging', () => {
  const bigQuery = new BigQuery();
  const pubsub = new PubSub();
  const storage = new Storage();
  const logging = new Logging();

  const TESTS_PREFIX = 'nodejs-logging-system-test';
  const WRITE_CONSISTENCY_DELAY_MS = 5000;

  // Create the possible destinations for sinks that we will create.
  const bucket = storage.bucket(generateName());
  const dataset = bigQuery.dataset(generateName().replace(/-/g, '_'));
  const topic = pubsub.topic(generateName());

  let PROJECT_ID: string;
  before(async () => {
    const serviceAccount = (await logging.auth.getCredentials()).client_email;
    PROJECT_ID = await logging.auth.getProjectId();
    await bucket.create();
    await bucket.iam.setPolicy({
      bindings: [
        {
          role: 'roles/storage.admin',
          members: [`serviceAccount:${serviceAccount}`],
        },
      ],
    });
    await dataset.create();
    await topic.create();
  });

  after(async () => {
    const oneHourAgo = new Date();
    oneHourAgo.setHours(oneHourAgo.getHours() - 1);

    const twoDaysAgo = new Date();
    twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

    await Promise.all([
      deleteSinks(),
      deleteBuckets(),
      deleteDatasets(),
      deleteTopics(),
    ]);

    // Only delete log buckets that are at least 2 days old
    // Fixes: https://github.com/googleapis/nodejs-logging/issues/953
    async function deleteBuckets() {
      const [buckets] = await storage.getBuckets({prefix: TESTS_PREFIX});
      const bucketsToDelete = buckets.filter((bucket: any) => {
        if (bucket.metadata.timeCreated) {
          return new Date(bucket.metadata.timeCreated) < twoDaysAgo;
        } else {
          return undefined;
        }
      });

      for (const bucket of bucketsToDelete) {
        await bucket.deleteFiles();
        await bucket.delete();
      }
    }

    async function deleteDatasets() {
      await getAndDelete(bigQuery.getDatasets.bind(bigQuery));
    }

    async function deleteTopics() {
      await getAndDelete(pubsub.getTopics.bind(pubsub));
    }

    async function deleteSinks() {
      await getAndDelete(logging.getSinks.bind(logging));
    }

    async function getAndDelete(method: Function) {
      const [objects] = await method();
      return Promise.all(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (objects as any[])
          .filter(o => {
            const name = o.name || o.id;
            if (!name.startsWith(TESTS_PREFIX)) {
              return false;
            }
            return getDateFromGeneratedName(name) < oneHourAgo;
          })
          .map(o => {
            const name = o.name || o.id;
            try {
              o.delete();
            } catch (err) {
              console.warn(`failed to delete "${name}": ${err}`);
            }
          }),
      );
    }
  });

  describe('sinks', () => {
    it('should create a sink with a Bucket destination', async () => {
      const sink = logging.sink(generateName());
      const [, apiResponse] = await sink.create({
        destination: bucket,
      });
      const destination = 'storage.googleapis.com/' + bucket.name;
      assert.strictEqual(apiResponse.destination, destination);
    });

    it('should create a sink with a Dataset destination', async () => {
      const sink = logging.sink(generateName());
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [_, apiResponse] = await sink.create({destination: dataset});

      const destination = `bigquery.googleapis.com/datasets/${dataset.id}`;

      // The projectId may have been replaced depending on how the system
      // tests are being run, so let's not care about that.
      apiResponse.destination = apiResponse.destination!.replace(
        /projects\/[^/]*\//,
        '',
      );
      assert.strictEqual(apiResponse.destination, destination);
    });

    it('should create a sink with a Topic destination', async () => {
      const sink = logging.sink(generateName());
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [_, apiResponse] = await sink.create({destination: topic});
      const destination = 'pubsub.googleapis.com/' + topic.name;

      // The projectId may have been replaced depending on how the system
      // tests are being run, so let's not care about that.
      assert.strictEqual(
        apiResponse.destination!.replace(/projects\/[^/]*\//, ''),
        destination.replace(/projects\/[^/]*\//, ''),
      );
    });

    describe('metadata', () => {
      const sink = logging.sink(generateName());
      const FILTER = 'severity = ALERT';

      before(async () => {
        await sink.create({destination: topic});
      });

      it('should set metadata', async () => {
        const metadata = {filter: FILTER};
        const [apiResponse] = await sink.setMetadata(metadata);
        assert.strictEqual(apiResponse.filter, FILTER);
      });

      it('should set a filter', async () => {
        const [apiResponse] = await sink.setFilter(FILTER);
        assert.strictEqual(apiResponse.filter, FILTER);
      });
    });

    describe('metadata with uniqueWriterIdentity', () => {
      it('should set metadata if uniqueWriterIdentity was true', async () => {
        const sink = logging.sink(generateName());
        const FILTER = 'severity = ALERT';
        await sink.create({
          destination: topic,
          uniqueWriterIdentity: true,
        });
        const metadata = {
          filter: FILTER,
          uniqueWriterIdentity: true,
        };
        const [apiResponse] = await sink.setMetadata(metadata);
        assert.strictEqual(apiResponse.filter, FILTER);
        // Sink must be deleted within this test before any logs are generated
        // to avoid topic_permission_denied emails.
        await sink.delete();
      });

      it('should set uniqueWriterIdentity from false to true', async () => {
        const sink = logging.sink(generateName());
        const FILTER = 'severity = ALERT';
        await sink.create({
          destination: topic,
        });
        const metadata = {
          filter: FILTER,
          uniqueWriterIdentity: true,
        };
        const [apiResponse] = await sink.setMetadata(metadata);
        assert.strictEqual(apiResponse.filter, FILTER);
        // Sink must be deleted within this test before any logs are generated
        // to avoid topic_permission_denied emails.
        await sink.delete();
      });
    });

    describe('listing sinks', () => {
      const sink = logging.sink(generateName());

      before(async () => {
        await sink.create({destination: topic});
      });

      it('should list sinks', async () => {
        const [sinks] = await logging.getSinks();
        assert(sinks.length > 0);
      });

      it('should list sinks as a stream', done => {
        const logstream: Duplex = logging
          .getSinksStream({pageSize: 1})
          .on('error', done)
          .once('data', () => {
            logstream.end();
            done();
          });
      });

      it('should get metadata', done => {
        logging
          .getSinksStream({pageSize: 1})
          .on('error', done)
          .once('data', (sink: Sink) => {
            sink.getMetadata((err, metadata) => {
              assert.ifError(err);
              assert.strictEqual(typeof metadata, 'object');
              done();
            });
          });
      });
    });
  });

  describe('logs', () => {
    function getTestLog(loggingInstance = null) {
      const log = (loggingInstance || logging).log(generateName());

      const logEntries = [
        // string data
        log.entry('log entry 1'),

        // object data
        log.entry({delegate: 'my_username'}),

        // various data types
        log.entry({
          nonValue: null,
          boolValue: true,
          arrayValue: [1, 2, 3],
        }),

        // nested object data
        log.entry({
          nested: {
            delegate: 'my_username',
          },
        }),
      ];

      return {log, logEntries};
    }

    function getEntriesFromLog(
      log: Log,
      config: {numExpectedMessages: number},
      callback: (err: Error | null, entries?: Entry[]) => void,
    ) {
      let numAttempts = 0;

      const numExpectedMessages = config.numExpectedMessages;

      setTimeout(pollForMessages, WRITE_CONSISTENCY_DELAY_MS);

      function pollForMessages() {
        numAttempts++;

        const time = new Date();
        time.setHours(time.getHours() - 1);

        log.getEntries(
          {autoPaginate: false, filter: `timestamp > "${time.toISOString()}"`},
          (err, entries) => {
            if (err) {
              callback(err);
              return;
            }

            if (entries!.length < numExpectedMessages && numAttempts < 8) {
              setTimeout(pollForMessages, WRITE_CONSISTENCY_DELAY_MS);
              return;
            }

            callback(null, entries);
          },
        );
      }
    }

    const options = {
      resource: {
        type: 'gce_instance',
        labels: {
          zone: 'global',
          instance_id: '3',
        },
      },
    };

    describe('listing logs', () => {
      before(async () => {
        const {log, logEntries} = getTestLog();
        await log.write(logEntries, options);
      });

      it('should list logs', async () => {
        const [logs] = await logging.getLogs();
        assert(logs.length > 0);
      });

      it('should list logs as a stream', done => {
        const stream: Duplex = logging
          .getLogsStream({pageSize: 1})
          .on('error', done)
          .once('data', () => {
            stream.end();
            done();
          });
      });
    });

    it('should list log entries', done => {
      const {log, logEntries} = getTestLog();

      log.write(logEntries, options, err => {
        assert.ifError(err);

        getEntriesFromLog(
          log,
          {numExpectedMessages: logEntries.length},
          (err, entries) => {
            assert.ifError(err);
            // Instrumentation log entry is added automatically, so we should discount it
            assert.strictEqual(entries!.length - 1, logEntries.length);
            let entry: Entry | undefined;
            entries!.forEach(ent => {
              if (
                ent &&
                ent.data?.[instrumentation.DIAGNOSTIC_INFO_KEY]?.[
                  instrumentation.INSTRUMENTATION_SOURCE_KEY
                ]
              ) {
                entry = ent;
              }
            });
            assert.ok(entry);
            assert.equal(
              entry.data?.[instrumentation.DIAGNOSTIC_INFO_KEY]?.[
                instrumentation.INSTRUMENTATION_SOURCE_KEY
              ]?.[0]?.['name'],
              instrumentation.NODEJS_LIBRARY_NAME_PREFIX,
            );
            done();
          },
        );
      });
    });

    it('should list log entries as a stream', done => {
      const {log, logEntries} = getTestLog();

      log.write(logEntries, options, err => {
        assert.ifError(err);

        const logstream: Duplex = logging
          .getEntriesStream({
            autoPaginate: false,
            pageSize: 1,
          })
          .on('error', done)
          .once('data', () => logstream.end())
          .on('end', done);
      });
    });

    it('should tail log entries as a stream', done => {
      const {log, logEntries} = getTestLog();

      const logInterval = setInterval(() => {
        log.write(logEntries, options, err => {
          assert.ifError(err);
        });
      }, 10000);

      const stream = logging
        .tailEntries({
          filter: 'textPayload:"log entry 1"',
        })
        .on('error', done)
        .once('data', (resp: TailEntriesResponse) => {
          assert.strictEqual(
            resp.entries.length,
            1,
            `Expected 1 tailed entry; Got ${resp.entries.length}.`,
          );
          clearInterval(logInterval);
          stream.end();
        })
        .on('end', done);
    });

    describe('log-specific entries', () => {
      let logExpected: Log;
      let logEntriesExpected: Entry[];

      before(done => {
        const {log, logEntries} = getTestLog();
        logExpected = log;
        logEntriesExpected = logEntries;
        log.write(logEntries, options, done);
      });

      it('should list log entries', done => {
        getEntriesFromLog(
          logExpected,
          {numExpectedMessages: logEntriesExpected.length},
          (err, entries) => {
            assert.ifError(err);
            assert.strictEqual(entries!.length, logEntriesExpected.length);
            done();
          },
        );
      });

      it('should list log entries as a stream', done => {
        const logstream = logExpected
          .getEntriesStream({
            autoPaginate: false,
            pageSize: 1,
          })
          .on('error', done)
          .once('data', () => {
            logstream.end();
            done();
          });
      });

      it('should tail log entries as a stream', done => {
        const logInterval = setInterval(() => {
          logExpected.write(logEntriesExpected, options, err => {
            assert.ifError(err);
          });
        }, 10000);

        const stream = logExpected
          .tailEntries()
          .on('error', done)
          .once('data', () => {
            clearInterval(logInterval);
            stream.end();
          })
          .on('end', done);
      });
    });

    it('should write a single entry to a log', done => {
      const {log, logEntries} = getTestLog();
      log.write(logEntries[0], options, done);
    });

    it('should write a single entry to a log as a Promise', async () => {
      const {log, logEntries} = getTestLog();
      await log.write(logEntries[1], options);
    });

    it('should write multiple entries to a log', done => {
      const {log, logEntries} = getTestLog();

      log.write(logEntries, options, err => {
        assert.ifError(err);

        getEntriesFromLog(
          log,
          {numExpectedMessages: logEntries.length},
          (err, entries) => {
            assert.ifError(err);

            assert.deepStrictEqual(entries!.map(x => x.data).reverse(), [
              'log entry 1',
              {delegate: 'my_username'},
              {
                nonValue: null,
                boolValue: true,
                arrayValue: [1, 2, 3],
              },
              {
                nested: {
                  delegate: 'my_username',
                },
              },
            ]);

            done();
          },
        );
      });
    });

    it('should preserve order of entries', done => {
      const {log} = getTestLog();

      const entry1 = log.entry('1');

      setTimeout(() => {
        const entry2 = log.entry('2');
        const entry3 = log.entry({timestamp: entry2.metadata.timestamp}, '3');

        // Re-arrange to confirm the timestamp is sent and honored.
        log.write([entry2, entry3, entry1], options, err => {
          assert.ifError(err);

          getEntriesFromLog(log, {numExpectedMessages: 3}, (err, entries) => {
            assert.ifError(err);
            assert.deepStrictEqual(
              entries!.map(x => x.data),
              ['3', '2', '1'],
            );
            done();
          });
        });
      }, 1000);
    });

    it('should preserve order for sequential write calls', done => {
      const {log} = getTestLog();
      const messages = ['1', '2', '3', '4', '5'];

      (async () => {
        for (const message of messages) {
          await log.write(log.entry(message), options);
        }

        getEntriesFromLog(
          log,
          {numExpectedMessages: messages.length},
          (err, entries) => {
            assert.ifError(err);
            assert.deepStrictEqual(
              entries!.reverse().map(x => x.data),
              messages,
            );
            done();
          },
        );
      })();
    });

    it('should write an entry with primitive values', done => {
      const {log} = getTestLog();

      const logEntry = log.entry({
        when: new Date(),
        matchUser: /username: (.+)/,
        matchUserError: new Error('No user found.'),
        shouldNotBeSaved: undefined,
      });

      log.write(logEntry, options, err => {
        assert.ifError(err);

        getEntriesFromLog(log, {numExpectedMessages: 1}, (err, entries) => {
          assert.ifError(err);

          const entry = entries![0];

          assert.deepStrictEqual(entry.data, {
            when: logEntry.data.when.toString(),
            matchUser: logEntry.data.matchUser.toString(),
            matchUserError: logEntry.data.matchUserError.toString(),
          });

          done();
        });
      });
    });

    it('should write a log with metadata', done => {
      const {log} = getTestLog();

      const metadata = Object.assign({}, options, {
        severity: 'DEBUG',
      });

      const data = {
        embeddedData: true,
      };

      const logEntry = log.entry(metadata, data);

      log.write(logEntry, err => {
        assert.ifError(err);

        getEntriesFromLog(log, {numExpectedMessages: 1}, (err, entries) => {
          assert.ifError(err);

          const entry = entries![0];
          assert.strictEqual(entry.metadata.severity, metadata.severity);
          assert.deepStrictEqual(entry.data, data);
          done();
        });
      });
    });

    it('should write a structured httpRequest log with no message', done => {
      const {log} = getTestLog();
      const metadata = {
        httpRequest: {status: 200},
      };
      const logEntry = log.entry(metadata);

      log.write(logEntry, err => {
        assert.ifError(err);
        getEntriesFromLog(log, {numExpectedMessages: 1}, (err, entries) => {
          assert.ifError(err);
          const entry = entries![0];
          assert.strictEqual(
            entry.metadata.httpRequest?.status,
            metadata.httpRequest.status,
          );
          assert.deepStrictEqual(entry.data, {});
          done();
        });
      });
    });

    it('should write a request log with x-cloud-trace-context header', done => {
      const {log} = getTestLog();
      const URL = 'http://www.google.com';
      // Use the response of a http request as the incomingmessage request obj.
      http.get(URL, res => {
        res.url = URL;
        res.headers = {
          'x-cloud-trace-context': '1/2;o=1',
        };
        const metadata = {httpRequest: res};
        const logEntry = log.entry(metadata, 'some log message');
        log.write(logEntry, err => {
          assert.ifError(err);
          getEntriesFromLog(log, {numExpectedMessages: 1}, (err, entries) => {
            assert.ifError(err);
            const entry = entries![0];
            assert.strictEqual(entry.data, 'some log message');
            assert.strictEqual(entry.metadata.httpRequest?.requestUrl, URL);
            assert.strictEqual(entry.metadata.httpRequest?.protocol, 'http:');
            assert.strictEqual(
              entry.metadata.trace,
              `projects/${PROJECT_ID}/traces/1`,
            );
            assert.strictEqual(entry.metadata.spanId, '2');
            assert.strictEqual(entry.metadata.traceSampled, true);
            done();
          });
        });
      });
    });

    it('should write a http request log with traceparent header', done => {
      const {log} = getTestLog();
      const URL = 'http://www.google.com';
      // Use the response of a http request as the incomingmessage request obj.
      http.get(URL, res => {
        res.url = URL;
        res.headers = {
          traceparent:
            '00-0af7651916cd43dd8448eb211c80319c-b7ad6b7169203331-01',
        };
        const metadata = {httpRequest: res};
        const logEntry = log.entry(metadata, 'some log message');
        log.write(logEntry, err => {
          assert.ifError(err);
          getEntriesFromLog(log, {numExpectedMessages: 1}, (err, entries) => {
            assert.ifError(err);
            const entry = entries![0];
            assert.strictEqual(entry.data, 'some log message');
            assert.strictEqual(entry.metadata.httpRequest?.requestUrl, URL);
            assert.strictEqual(entry.metadata.httpRequest?.protocol, 'http:');
            assert.strictEqual(
              entry.metadata.trace,
              `projects/${PROJECT_ID}/traces/0af7651916cd43dd8448eb211c80319c`,
            );
            assert.strictEqual(entry.metadata.spanId, 'b7ad6b7169203331');
            assert.strictEqual(entry.metadata.traceSampled, true);
            done();
          });
        });
      });
    });

    describe('logs with open telemetry context', () => {
      let sdk: NodeSDK;
      before(() => {
        // initialize the SDK and register with the OpenTelemetry API
        // this enables the API to record telemetry
        sdk = new NodeSDK({
          resource: new Resource({
            [SEMRESATTRS_SERVICE_NAME]: TESTS_PREFIX,
          }),
          // Add cloud trace exporter as SDK trace exporter
          traceExporter: new TraceExporter(),
        });
        sdk.start();
      });

      after(() => {
        sdk.shutdown();
      });

      it('should not overwrite user defined trace and spans with OpenTelemetry context', done => {
        trace.getTracer(TESTS_PREFIX).startActiveSpan('foo', span => {
          const {log} = getTestLog();
          const spanTestMessage = 'span test log message';
          const metadata = {
            trace: '1',
            spanId: '1',
            traceSampled: false,
          };
          const logEntry = log.entry(metadata, spanTestMessage);
          log.write(logEntry, err => {
            assert.ifError(err);
            getEntriesFromLog(log, {numExpectedMessages: 1}, (err, entries) => {
              assert.ifError(err);
              const entry = entries![0];
              assert.strictEqual(entry.data, spanTestMessage);
              assert.strictEqual(entry.metadata.trace, metadata.trace);
              assert.strictEqual(entry.metadata.spanId, metadata.spanId);
              assert.strictEqual(
                entry.metadata.traceSampled,
                metadata.traceSampled,
              );
            });
          });
          span.end();
        });
        done();
      });

      it('should write a log with trace and spans from OpenTelemetry context', done => {
        trace.getTracer(TESTS_PREFIX).startActiveSpan('foo', span => {
          const traceId = span.spanContext().traceId;
          const spanId = span.spanContext().spanId;
          const traceSampled = (span.spanContext().traceFlags & 1) !== 0;
          const {log} = getTestLog();
          const spanTestMessage = 'span test log message';
          const logEntry = log.entry(spanTestMessage);
          log.write(logEntry, err => {
            assert.ifError(err);
            getEntriesFromLog(log, {numExpectedMessages: 1}, (err, entries) => {
              assert.ifError(err);
              const entry = entries![0];
              assert.strictEqual(entry.data, spanTestMessage);
              assert.strictEqual(
                entry.metadata.trace,
                `projects/${PROJECT_ID}/traces/${traceId}`,
              );
              assert.strictEqual(entry.metadata.spanId, spanId);
              assert.strictEqual(entry.metadata.traceSampled, traceSampled);
            });
          });
          span.end();
        });
        done();
      });

      it('should write a log with OpenTelemetry trace and spans and ignore http requests traceparent header', done => {
        const {log} = getTestLog();
        const URL = 'http://www.google.com';
        trace.getTracer(TESTS_PREFIX).startActiveSpan('foo', span => {
          // Use the response of a http request as the incomingmessage request obj.
          http.get(URL, res => {
            res.url = URL;
            res.headers = {
              traceparent:
                '00-0af7651916cd43dd8448eb211c80319c-b7ad6b7169203331-01',
            };
            const metadata = {httpRequest: res};
            const logEntry = log.entry(metadata, 'some log message');

            const traceId = span.spanContext().traceId;
            const spanId = span.spanContext().spanId;
            const traceSampled = (span.spanContext().traceFlags & 1) !== 0;

            log.write(logEntry, err => {
              assert.ifError(err);
              getEntriesFromLog(
                log,
                {numExpectedMessages: 1},
                (err, entries) => {
                  assert.ifError(err);
                  const entry = entries![0];
                  assert.strictEqual(entry.data, 'some log message');
                  assert.strictEqual(
                    entry.metadata.httpRequest?.requestUrl,
                    URL,
                  );
                  assert.strictEqual(
                    entry.metadata.httpRequest?.protocol,
                    'http:',
                  );
                  assert.strictEqual(
                    entry.metadata.trace,
                    `projects/${PROJECT_ID}/traces/${traceId}`,
                  );
                  assert.strictEqual(entry.metadata.spanId, spanId);
                  assert.strictEqual(entry.metadata.traceSampled, traceSampled);
                },
              );
            });
          });
          span.end();
        });
        done();
      });

      it('should write a log with OpenTelemetry trace and spans and ignore http requests x-cloud-trace-context header', done => {
        const {log} = getTestLog();
        const URL = 'http://www.google.com';
        trace.getTracer(TESTS_PREFIX).startActiveSpan('foo', span => {
          // Use the response of a http request as the incomingmessage request obj.
          http.get(URL, res => {
            res.url = URL;
            res.headers = {
              'x-cloud-trace-context': '1/2;o=1',
            };
            const metadata = {httpRequest: res};
            const logEntry = log.entry(metadata, 'some log message');
            const traceId = span.spanContext().traceId;
            const spanId = span.spanContext().spanId;
            const traceSampled = (span.spanContext().traceFlags & 1) !== 0;
            log.write(logEntry, err => {
              assert.ifError(err);
              getEntriesFromLog(
                log,
                {numExpectedMessages: 1},
                (err, entries) => {
                  assert.ifError(err);
                  const entry = entries![0];
                  assert.strictEqual(entry.data, 'some log message');
                  assert.strictEqual(
                    entry.metadata.httpRequest?.requestUrl,
                    URL,
                  );
                  assert.strictEqual(
                    entry.metadata.httpRequest?.protocol,
                    'http:',
                  );
                  assert.strictEqual(
                    entry.metadata.trace,
                    `projects/${PROJECT_ID}/traces/${traceId}`,
                  );
                  assert.strictEqual(entry.metadata.spanId, spanId);
                  assert.strictEqual(entry.metadata.traceSampled, traceSampled);
                },
              );
            });
          });
          span.end();
        });
        done();
      });
    });

    it('should set the default resource', done => {
      const {log} = getTestLog();
      const text = 'entry-text';
      const entry = log.entry(text);
      log.write(entry, err => {
        assert.ifError(err);
        getEntriesFromLog(log, {numExpectedMessages: 1}, (err, entries) => {
          assert.ifError(err);
          const entry = entries![0];

          assert.strictEqual(entry.data, text);
          assert.deepStrictEqual(entry.metadata.resource, {
            type: 'global',
            labels: {
              project_id: PROJECT_ID,
            },
          });

          done();
        });
      });
    });

    it('should write a log with camelcase resource label keys', done => {
      const {log, logEntries} = getTestLog();
      log.write(
        logEntries,
        {
          resource: {
            type: 'gce_instance',
            labels: {
              zone: 'global',
              instanceId: '3',
            },
          },
        },
        done,
      );
    });

    it('should write to a log with alert helper', done => {
      const {log, logEntries} = getTestLog();
      log.alert(logEntries, options, done);
    });

    it('should write to a log with critical helper', done => {
      const {log, logEntries} = getTestLog();
      log.critical(logEntries, options, done);
    });

    it('should write to a log with debug helper', done => {
      const {log, logEntries} = getTestLog();
      log.debug(logEntries, options, done);
    });

    it('should write to a log with emergency helper', done => {
      const {log, logEntries} = getTestLog();
      log.emergency(logEntries, options, done);
    });

    it('should write to a log with error helper', done => {
      const {log, logEntries} = getTestLog();
      log.error(logEntries, options, done);
    });

    it('should write to a log with info helper', done => {
      const {log, logEntries} = getTestLog();
      log.info(logEntries, options, done);
    });

    it('should write to a log with notice helper', done => {
      const {log, logEntries} = getTestLog();
      log.notice(logEntries, options, done);
    });

    it('should write to a log with warning helper', done => {
      const {log, logEntries} = getTestLog();
      log.warning(logEntries, options, done);
    });

    it('should populate x-goog-api-client header', async () => {
      const gax = http2spy.require(require.resolve('google-gax'));
      const {Logging} = require('../src');
      const {log, logEntries} = getTestLog(new Logging({}, gax));
      await log.write(logEntries[0], options);
      assert.ok(
        /gax\/[0-9]+\.[\w.-]+ gapic\/[0-9]+\.[\w.-]+ gl-node\/[0-9]+\.[\w.-]+ grpc\/[0-9]+\.[\w.-]+ gccl\/[0-9]+\.[\w.-]+/.test(
          http2spy.requests[0]['x-goog-api-client'][0],
        ),
      );
    });
  });

  function generateName() {
    return `${TESTS_PREFIX}-${Date.now()}-${v4().split('-').pop()}`;
  }

  // Parse the time the resource was created using the resource id
  // Format 1: ${TESTS_PREFIX}-${date}-${uuid}
  // Format 2: ${TESTS_PREFIX}_${date}_${uuid}
  function getDateFromGeneratedName(name: string) {
    const timeCreated = name.substr(TESTS_PREFIX.length + 1).split(/-|_/g)[0];
    return new Date(Number(timeCreated));
  }
});
