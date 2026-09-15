// Copyright 2026 Google LLC
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

// Suppressions justification:
// 1. no-explicit-any: Required for handling dynamic gRPC/Protobuf wire payloads.
// 2. no-namespace: Required for declaring ambient protobuf namespace exports.
// 3. ban-ts-comment: Required for @ts-ignore before import.meta across dual ESM/CJS targets.
/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-namespace, @typescript-eslint/ban-ts-comment */
import * as path from 'path';
import { grpc as gaxGrpc } from 'google-gax';
import * as protoLoader from '@grpc/proto-loader';
import { createRequire } from 'module';
import { Metadata, Server, ServerCredentials } from '@grpc/grpc-js';
import pkg from '@google-cloud/spanner/build/protos/protos.js';
import type { google as gNamespace } from '@google-cloud/spanner/build/protos/protos.js';

const { google } = pkg as any;
const spannerProto = google.spanner.v1;
const TimestampProto = google.protobuf.Timestamp;
const RetryInfoProto = google.rpc.RetryInfo;
const StatusProto = google.rpc.Status;
const AnyProto = google.protobuf.Any;

declare namespace protobuf {
  export type ResultSet = gNamespace.spanner.v1.ResultSet;
  export type PartialResultSet = gNamespace.spanner.v1.PartialResultSet;
  export type Session = gNamespace.spanner.v1.Session;
  export type Transaction = gNamespace.spanner.v1.Transaction;
  export type ITransactionOptions = gNamespace.spanner.v1.ITransactionOptions;
  export type ResultSetMetadata = gNamespace.spanner.v1.ResultSetMetadata;
}

type Timestamp = gNamespace.protobuf.Timestamp;
type ResultSet = gNamespace.spanner.v1.ResultSet;
type Status = gNamespace.rpc.Status;
const QueryMode = spannerProto.ExecuteSqlRequest.QueryMode;
type ReadRequest = gNamespace.spanner.v1.ReadRequest;
type ServiceError = gaxGrpc.ServiceError;

const customRequire =
  // @ts-ignore
  typeof require !== 'undefined' ? require : createRequire(import.meta.url);

const PROTO_PATH = customRequire.resolve(
  '@google-cloud/spanner/build/protos/google/spanner/v1/spanner.proto'
);
const IMPORT_PATH = path.resolve(path.dirname(PROTO_PATH), '../../..');
const GAX_PROTO_DIR = path.join(
  path.dirname(customRequire.resolve('google-gax')),
  '..',
  'protos'
);

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: false,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
  includeDirs: [IMPORT_PATH, GAX_PROTO_DIR],
});
const protoDescriptor = gaxGrpc.loadPackageDefinition(packageDefinition) as any;
const spannerProtoDescriptor = protoDescriptor['google']['spanner']['v1'];
const RETRY_INFO_BIN = 'google.rpc.retryinfo-bin';
const RETRY_INFO_TYPE = 'type.googleapis.com/google.rpc.retryinfo';

export enum ReadRequestResultType {
  ERROR,
  RESULT_SET,
}

export enum StatementResultType {
  ERROR,
  RESULT_SET,
  UPDATE_COUNT,
}

type ResultSetUnion = protobuf.ResultSet | protobuf.PartialResultSet[];

export class ReadRequestResult {
  private readonly _type: ReadRequestResultType;

  get type(): ReadRequestResultType {
    return this._type;
  }

  private readonly _error: Error | null;

  get error(): Error {
    if (this._error) {
      return this._error;
    }
    throw new Error('The ReadRequestResult does not contain an Error');
  }

  private readonly _resultSet: ResultSetUnion | null;

  get resultSet(): ResultSetUnion {
    if (this._resultSet) {
      return this._resultSet;
    }
    throw new Error('The ReadRequestResult does not contain a ResultSet');
  }

  private constructor(
    type: ReadRequestResultType,
    error: Error | null,
    resultSet: protobuf.ResultSet | protobuf.PartialResultSet[] | null
  ) {
    this._type = type;
    this._error = error;
    this._resultSet = resultSet;
  }

  static error(error: Error): ReadRequestResult {
    return new ReadRequestResult(ReadRequestResultType.ERROR, error, null);
  }

  static resultSet(
    resultSet: protobuf.ResultSet | protobuf.PartialResultSet[]
  ): ReadRequestResult {
    return new ReadRequestResult(
      ReadRequestResultType.RESULT_SET,
      null,
      resultSet
    );
  }
}

export class StatementResult {
  private readonly _type: StatementResultType;
  get type(): StatementResultType {
    return this._type;
  }
  private readonly _error: Error | null;
  get error(): Error {
    if (this._error) {
      return this._error;
    }
    throw new Error('The StatementResult does not contain an Error');
  }
  private readonly _resultSet: ResultSetUnion | null;
  get resultSet(): ResultSetUnion {
    if (this._resultSet) {
      return this._resultSet;
    }
    throw new Error('The StatementResult does not contain a ResultSet');
  }
  private readonly _updateCount: number | null;
  get updateCount(): number {
    if (this._updateCount !== null) {
      return this._updateCount;
    }
    throw new Error('The StatementResult does not contain an UpdateCount');
  }

  private constructor(
    type: StatementResultType,
    error: Error | null,
    resultSet: protobuf.ResultSet | protobuf.PartialResultSet[] | null,
    updateCount: number | null
  ) {
    this._type = type;
    this._error = error;
    this._resultSet = resultSet;
    this._updateCount = updateCount;
  }

  static error(error: Error): StatementResult {
    return new StatementResult(StatementResultType.ERROR, error, null, null);
  }

  static resultSet(
    resultSet: protobuf.ResultSet | protobuf.PartialResultSet[]
  ): StatementResult {
    return new StatementResult(
      StatementResultType.RESULT_SET,
      null,
      resultSet,
      null
    );
  }

  static updateCount(updateCount: number, error?: Error): StatementResult {
    return new StatementResult(
      StatementResultType.UPDATE_COUNT,
      error || null,
      null,
      updateCount
    );
  }
}

export interface MockError extends ServiceError {
  streamIndex?: number;
}

export class SimulatedExecutionTime {
  private readonly _minimumExecutionTime?: number;
  get minimumExecutionTime(): number | undefined {
    return this._minimumExecutionTime;
  }
  private readonly _randomExecutionTime?: number;
  get randomExecutionTime(): number | undefined {
    return this._randomExecutionTime;
  }
  private readonly _errors?: ServiceError[];
  get errors(): MockError[] | undefined {
    return this._errors;
  }
  private readonly _keepError?: boolean;

  private constructor(input: {
    minimumExecutionTime?: number;
    randomExecutionTime?: number;
    errors?: ServiceError[];
    keepError?: boolean;
  }) {
    this._minimumExecutionTime = input.minimumExecutionTime;
    this._randomExecutionTime = input.randomExecutionTime;
    this._errors = input.errors;
    this._keepError = input.keepError;
  }

  static ofError(error: MockError): SimulatedExecutionTime {
    return new SimulatedExecutionTime({ errors: [error] });
  }

  static ofErrors(errors: MockError[]): SimulatedExecutionTime {
    return new SimulatedExecutionTime({ errors });
  }

  static ofMinAndRandomExecTime(minExecTime: number, randomExecTime: number) {
    return new SimulatedExecutionTime({
      minimumExecutionTime: minExecTime,
      randomExecutionTime: randomExecTime,
    });
  }

  async simulateExecutionTime() {
    if (!(this.randomExecutionTime || this.minimumExecutionTime)) {
      return;
    }
    const rnd = this.randomExecutionTime
      ? Math.random() * this.randomExecutionTime
      : 0;
    const total =
      (this.minimumExecutionTime ? this.minimumExecutionTime : 0) + rnd;
    await MockSpanner.sleep(total);
  }
}

export function createUnimplementedError(msg: string): ServiceError {
  const error = new Error(msg);
  return Object.assign(error, {
    code: gaxGrpc.status.UNIMPLEMENTED,
  }) as ServiceError;
}

interface Request {}

export class MockSpanner {
  private requests: Request[] = [];
  private metadata: Metadata[] = [];
  private frozen = 0;
  private sessionCounter = 0;
  private sessions: Map<string, protobuf.Session> = new Map();
  private mutationOnly: boolean;
  private transactionSeqNum: Map<string, number> = new Map();
  private transactionCounters: Map<string, number> = new Map();
  private transactions: Map<string, protobuf.Transaction> = new Map();
  private transactionOptions: Map<
    string,
    protobuf.ITransactionOptions | null | undefined
  > = new Map();
  private abortedTransactions: Set<string> = new Set();
  private statementResults: Map<string, StatementResult> = new Map();
  private readRequestResults: Map<string, ReadRequestResult> = new Map();
  private executionTimes: Map<string, SimulatedExecutionTime> = new Map();
  private server?: Server;
  private port = 0;

  private constructor() {
    this.putStatementResult = this.putStatementResult.bind(this);
    this.putReadRequestResult = this.putReadRequestResult.bind(this);
    this.batchCreateSessions = this.batchCreateSessions.bind(this);
    this.createSession = this.createSession.bind(this);
    this.deleteSession = this.deleteSession.bind(this);
    this.getSession = this.getSession.bind(this);
    this.listSessions = this.listSessions.bind(this);

    this.beginTransaction = this.beginTransaction.bind(this);
    this.commit = this.commit.bind(this);
    this.rollback = this.rollback.bind(this);

    this.executeBatchDml = this.executeBatchDml.bind(this);
    this.executeStreamingSql = this.executeStreamingSql.bind(this);
    this.partitionQuery = this.partitionQuery.bind(this);

    this.read = this.read.bind(this);
    this.streamingRead = this.streamingRead.bind(this);
    this.partitionRead = this.partitionRead.bind(this);
    this.batchWrite = this.batchWrite.bind(this);
    this.mutationOnly = false;
  }

  static create(): MockSpanner {
    return new MockSpanner();
  }

  async listen(address = '127.0.0.1:0'): Promise<number> {
    this.server = new Server();
    createMockSpanner(this.server, this);
    return new Promise((resolve, reject) => {
      this.server!.bindAsync(
        address,
        ServerCredentials.createInsecure(),
        (err, boundPort) => {
          if (err) return reject(err);
          this.port = boundPort;
          resolve(this.port);
        }
      );
    });
  }

  getPort(): number {
    return this.port;
  }

  close() {
    this.server?.forceShutdown();
  }

  resetRequests(): void {
    this.requests = [];
    this.metadata = [];
  }

  getRequests(): Request[] {
    return this.requests;
  }

  getMetadata(): Metadata[] {
    return this.metadata;
  }

  putReadRequestResult(query: ReadRequest, result: ReadRequestResult) {
    const keySet = JSON.stringify(
      query.keySet ?? {},
      Object.keys(query.keySet ?? {}).sort()
    );
    const key = `${query.table}|${keySet}`;
    this.readRequestResults.set(key, result);
  }

  putStatementResult(sql: string, result: StatementResult) {
    this.statementResults.set(sql.trim(), result);
  }

  removeExecutionTime(fn: (...args: any[]) => any) {
    this.executionTimes.delete(fn.name);
  }

  setExecutionTime(fn: (...args: any[]) => any, time: SimulatedExecutionTime) {
    this.executionTimes.set(fn.name, time);
  }

  removeExecutionTimes() {
    this.executionTimes.clear();
  }

  abortTransaction(transaction: any): void {
    const formattedId = `${transaction.session?.formattedName_ ?? transaction.session}/transactions/${transaction.id}`;
    if (this.transactions.has(formattedId) || !transaction.id) {
      this.transactions.delete(formattedId);
      this.transactionOptions.delete(formattedId);
      this.abortedTransactions.add(formattedId);
    } else {
      throw new Error(`Transaction ${formattedId} does not exist`);
    }
  }

  freeze() {
    this.frozen++;
  }

  unfreeze() {
    if (this.frozen === 0) {
      throw new Error('This mock server is already unfrozen');
    }
    this.frozen--;
  }

  private newSession(
    database: string,
    multiplexed?: boolean
  ): protobuf.Session {
    const id = this.sessionCounter++;
    const name = `${database}/sessions/${id}`;
    const session = spannerProto.Session.create({
      name,
      multiplexed: multiplexed,
      createTime: now(),
    });
    this.sessions.set(name, session);
    return session;
  }

  private static createSessionNotFoundError(name: string): ServiceError {
    const error = new Error(`Session not found: ${name}`);
    return Object.assign(error, {
      code: gaxGrpc.status.NOT_FOUND,
    }) as ServiceError;
  }

  private static createTransactionNotFoundError(name: string): ServiceError {
    const error = new Error(`Transaction not found: ${name}`);
    return Object.assign(error, {
      code: gaxGrpc.status.NOT_FOUND,
    }) as ServiceError;
  }

  private static createTransactionAbortedError(name: string): ServiceError {
    const error = Object.assign(new Error(`Transaction aborted: ${name}`), {
      code: gaxGrpc.status.ABORTED,
    });
    return Object.assign(error, {
      metadata: this.createMinimalRetryDelayMetadata(),
    }) as ServiceError;
  }

  static createMinimalRetryDelayMetadata(): Metadata {
    const metadata = new Metadata();
    const retry = RetryInfoProto.encode({
      retryDelay: {
        seconds: 0,
        nanos: 1,
      },
    });
    metadata.add(RETRY_INFO_BIN, Buffer.from(retry.finish()));
    return metadata;
  }

  static sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  private async simulateExecutionTime(functionName: string): Promise<void> {
    while (this.frozen > 0) {
      await MockSpanner.sleep(10);
    }
    const execTime = this.executionTimes.get(functionName);
    if (execTime) {
      await execTime.simulateExecutionTime();
    }
    if (
      execTime &&
      execTime.errors &&
      execTime.errors.length &&
      !execTime.errors[0].streamIndex
    ) {
      throw execTime.errors.shift();
    }
  }

  private shiftStreamError(
    functionName: string,
    index: number
  ): MockError | undefined {
    const execTime = this.executionTimes.get(functionName);
    if (execTime && execTime.errors && execTime.errors.length) {
      if (execTime.errors[0].streamIndex === index) {
        return execTime.errors.shift();
      }
    }
    return undefined;
  }

  private pushRequest(request: Request, metadata: Metadata): void {
    this.requests.push(request);
    this.metadata.push(metadata);
  }

  batchCreateSessions(call: any, callback: any) {
    this.pushRequest(call.request!, call.metadata);
    this.simulateExecutionTime(this.batchCreateSessions.name)
      .then(() => {
        const sessions = new Array<protobuf.Session>();
        for (let i = 0; i < call.request!.sessionCount; i++) {
          sessions.push(this.newSession(call.request!.database));
        }
        callback(
          null,
          spannerProto.BatchCreateSessionsResponse.create({ session: sessions })
        );
      })
      .catch((err) => {
        callback(err);
      });
  }

  createSession(call: any, callback: any) {
    this.pushRequest(call.request!, call.metadata);
    this.simulateExecutionTime(this.createSession.name)
      .then(() => {
        callback(
          null,
          this.newSession(
            call.request!.database,
            call.request!.session?.multiplexed ?? false
          )
        );
      })
      .catch((err) => {
        callback(err);
      });
  }

  getSession(call: any, callback: any) {
    this.pushRequest(call.request!, call.metadata);
    this.simulateExecutionTime(this.getSession.name)
      .then(() => {
        const session = this.sessions.get(call.request!.name);
        if (session) {
          callback(null, session);
        } else {
          callback(MockSpanner.createSessionNotFoundError(call.request!.name));
        }
      })
      .catch((err) => {
        callback(err);
      });
  }

  listSessions(call: any, callback: any) {
    this.pushRequest(call.request!, call.metadata);
    this.simulateExecutionTime(this.listSessions.name)
      .then(() => {
        callback(
          null,
          spannerProto.ListSessionsResponse.create({
            sessions: Array.from(this.sessions.values()).filter((session) => {
              return session.name.startsWith(call.request!.database);
            }),
          })
        );
      })
      .catch((err) => {
        callback(err);
      });
  }

  deleteSession(call: any, callback: any) {
    this.pushRequest(call.request!, call.metadata);
    if (this.sessions.delete(call.request!.name)) {
      callback(null, google.protobuf.Empty.create());
    } else {
      callback(MockSpanner.createSessionNotFoundError(call.request!.name));
    }
  }

  executeSql(call: any, callback: any) {
    this.pushRequest(call.request!, call.metadata);
    const sql = call.request.sql?.trim();
    let res = this.statementResults.get(sql);
    if (!res && sql?.toLowerCase().includes('database_dialect')) {
      res = StatementResult.resultSet(createDialectResultSet());
    }
    if (!res) {
      return callback(
        createUnimplementedError(`No result registered for query: ${sql}`)
      );
    }
    if (res.type === StatementResultType.RESULT_SET) {
      callback(null, res.resultSet);
    } else if (res.type === StatementResultType.ERROR) {
      callback(res.error);
    }
  }

  executeStreamingSql(call: any) {
    this.pushRequest(call.request!, call.metadata);
    this.simulateExecutionTime(this.executeStreamingSql.name)
      .then(() => {
        let transactionKey;
        if (call.request!.transaction) {
          const fullTransactionId = `${call.request!.session}/transactions/${
            call.request!.transaction.id
          }`;
          transactionKey = fullTransactionId;
          if (this.abortedTransactions.has(fullTransactionId)) {
            call.sendMetadata(new Metadata());
            call.emit(
              'error',
              MockSpanner.createTransactionAbortedError(`${fullTransactionId}`)
            );
            call.end();
            return;
          }
        }
        let res = this.statementResults.get(call.request!.sql?.trim());
        if (
          !res &&
          call.request!.sql?.toLowerCase().includes('database_dialect')
        ) {
          res = StatementResult.resultSet(createDialectResultSet());
        }
        const session = this.sessions.get(call.request!.session);
        let txn: any = null;
        if (res) {
          if (call.request!.transaction?.begin) {
            const resultTxn = this._updateTransaction(
              call.request!.session,
              call.request!.transaction.begin
            );
            if (resultTxn instanceof Error) {
              call.sendMetadata(new Metadata());
              call.emit('error', resultTxn);
              call.end();
              return;
            }
            txn = resultTxn;
            transactionKey = `${call.request!.session}/transactions/${txn.id.toString()}`;
            if (res.type === StatementResultType.RESULT_SET) {
              (res.resultSet as protobuf.ResultSet).metadata!.transaction = txn;
            }
          }

          const currentSeqNum =
            this.transactionSeqNum.get(transactionKey!) || 0;
          const nextSeqNum = currentSeqNum + 1;
          this.transactionSeqNum.set(transactionKey!, nextSeqNum);

          const precommitToken = session?.multiplexed
            ? spannerProto.MultiplexedSessionPrecommitToken.create({
                precommitToken: Buffer.from('mock-precommit-token'),
                seqNum: nextSeqNum,
              })
            : null;
          let partialResultSets: any[];
          let resumeIndex: number;
          let streamErr: MockError | undefined;
          switch (res.type) {
            case StatementResultType.RESULT_SET:
              if ((res.resultSet as any).precommitToken !== undefined) {
                (res.resultSet as protobuf.ResultSet).precommitToken =
                  precommitToken;
              }
              if (Array.isArray(res.resultSet)) {
                partialResultSets = res.resultSet;
              } else {
                partialResultSets = MockSpanner.toPartialResultSets(
                  res.resultSet as any,
                  call.request!.queryMode
                );
              }
              resumeIndex =
                call.request!.resumeToken.length === 0
                  ? 0
                  : Number.parseInt(call.request!.resumeToken.toString(), 10) +
                    1;
              for (
                let index = resumeIndex;
                index < partialResultSets.length;
                index++
              ) {
                streamErr = this.shiftStreamError(
                  this.executeStreamingSql.name,
                  index
                );
                if (streamErr) {
                  call.sendMetadata(new Metadata());
                  call.emit('error', streamErr);
                  break;
                }
                call.write(partialResultSets[index]);
              }
              break;
            case StatementResultType.UPDATE_COUNT: {
              const metadata = new spannerProto.ResultSetMetadata({
                rowType: new spannerProto.StructType({}),
              });
              if (txn) {
                metadata.transaction = txn;
              }
              call.write(
                MockSpanner.emptyPartialResultSet(
                  precommitToken,
                  Buffer.from('1'.padStart(8, '0')),
                  metadata
                )
              );
              streamErr = this.shiftStreamError(
                this.executeStreamingSql.name,
                1
              );
              if (streamErr) {
                call.sendMetadata(new Metadata());
                call.emit('error', streamErr);
                break;
              }
              call.write(
                MockSpanner.toPartialResultSet(precommitToken, res.updateCount)
              );
              break;
            }
            case StatementResultType.ERROR:
              call.sendMetadata(new Metadata());
              call.emit('error', res.error);
              break;
            default:
              call.emit(
                'error',
                new Error(`Unknown StatementResult type: ${res.type}`)
              );
          }
        } else {
          call.emit(
            'error',
            new Error(`There is no result registered for ${call.request!.sql}`)
          );
        }
        call.end();
      })
      .catch((err) => {
        call.sendMetadata(new Metadata());
        call.emit('error', err);
        call.end();
      });
  }

  private static toPartialResultSets(
    resultSet: protobuf.ResultSet,
    queryMode: any,
    rowsPerPartialResultSet = 1
  ): protobuf.PartialResultSet[] {
    const res: protobuf.PartialResultSet[] = [];
    let first = true;
    for (let i = 0; i < resultSet.rows.length; i += rowsPerPartialResultSet) {
      const token = i.toString().padStart(8, '0');
      const partial = spannerProto.PartialResultSet.create({
        resumeToken: Buffer.from(token),
        values: [],
        precommitToken: resultSet.precommitToken,
      });
      for (
        let row = i;
        row < Math.min(i + rowsPerPartialResultSet, resultSet.rows.length);
        row++
      ) {
        partial.values.push(...resultSet.rows[row].values!);
      }
      if (first) {
        partial.metadata = resultSet.metadata;
        first = false;
      }
      res.push(partial);
    }
    if (
      queryMode === QueryMode.PROFILE ||
      queryMode === 'PROFILE' ||
      resultSet.stats
    ) {
      res[res.length - 1].stats = resultSet.stats || {
        queryStats: { fields: {} },
        queryPlan: { planNodes: [] },
      };
    }
    return res;
  }

  private static emptyPartialResultSet(
    precommitToken: any,
    resumeToken: Uint8Array,
    metadata?: protobuf.ResultSetMetadata
  ): protobuf.PartialResultSet {
    return spannerProto.PartialResultSet.create({
      resumeToken,
      precommitToken: precommitToken,
      metadata,
    });
  }

  private static toPartialResultSet(
    precommitToken: any,
    rowCount: number
  ): protobuf.PartialResultSet {
    const stats = {
      rowCountExact: rowCount,
      rowCount: 'rowCountExact',
    };
    return spannerProto.PartialResultSet.create({
      stats,
      precommitToken: precommitToken,
    });
  }

  private static toResultSet(rowCount: number): protobuf.ResultSet {
    const stats = {
      rowCountExact: rowCount,
      rowCount: 'rowCountExact',
    };
    return spannerProto.ResultSet.create({
      stats,
    });
  }

  executeBatchDml(call: any, callback: any) {
    this.pushRequest(call.request!, call.metadata);
    this.simulateExecutionTime(this.executeBatchDml.name)
      .then(() => {
        if (call.request!.transaction) {
          const fullTransactionId = `${call.request!.session}/transactions/${
            call.request!.transaction.id
          }`;
          if (this.abortedTransactions.has(fullTransactionId)) {
            callback(
              MockSpanner.createTransactionAbortedError(`${fullTransactionId}`)
            );
            return;
          }
        }
        const results: ResultSet[] = [];
        let statementStatus = StatusProto.create({ code: gaxGrpc.status.OK });
        for (
          let i = 0;
          i < call.request!.statements.length &&
          statementStatus.code === gaxGrpc.status.OK;
          i++
        ) {
          const streamErr = this.shiftStreamError(this.executeBatchDml.name, i);
          if (streamErr) {
            statementStatus = StatusProto.create({
              code: streamErr.code,
              message: streamErr.message,
            });
            if (streamErr.metadata && streamErr.metadata.get(RETRY_INFO_BIN)) {
              const retryInfo = streamErr.metadata.get(
                RETRY_INFO_BIN
              )[0] as any;
              statementStatus.details = [
                AnyProto.create({
                  type_url: RETRY_INFO_TYPE,
                  value: retryInfo,
                }),
              ];
            }
            continue;
          }
          const statement = call.request!.statements[i];
          const res = this.statementResults.get(statement.sql?.trim());
          if (res) {
            switch (res.type) {
              case StatementResultType.RESULT_SET:
                callback(new Error('Wrong result type for batch DML'));
                break;
              case StatementResultType.UPDATE_COUNT: {
                const resultSet = MockSpanner.toResultSet(res.updateCount);
                if (call.request!.transaction?.begin && i === 0) {
                  const transaction = this._updateTransaction(
                    call.request!.session,
                    call.request?.transaction!.begin
                  );
                  if (transaction instanceof Error) {
                    callback(transaction);
                    break;
                  }
                  resultSet.metadata = spannerProto.ResultSetMetadata.create({
                    transaction,
                  });
                }
                results.push(resultSet);
                break;
              }
              case StatementResultType.ERROR:
                if ((res.error as any).code) {
                  const serviceError = res.error as any;
                  statementStatus = {
                    code: serviceError.code,
                    message: serviceError.message,
                  } as Status;
                } else {
                  statementStatus = {
                    code: gaxGrpc.status.INTERNAL,
                    message: res.error.message,
                  } as Status;
                }
                break;
              default:
                callback(
                  new Error(`Unknown StatementResult type: ${res.type}`)
                );
            }
          } else {
            callback(
              new Error(`There is no result registered for ${statement.sql}`)
            );
          }
        }
        callback(
          null,
          spannerProto.ExecuteBatchDmlResponse.create({
            resultSets: results,
            status: statementStatus,
          })
        );
      })
      .catch((err) => {
        callback(err);
      });
  }

  read(call: any, callback: any) {
    this.pushRequest(call.request!, call.metadata);
    callback(createUnimplementedError('Read is not yet implemented'));
  }

  streamingRead(call: any) {
    this.pushRequest(call.request!, call.metadata);

    this.simulateExecutionTime(this.streamingRead.name)
      .then(() => {
        let transactionKey;
        if (call.request!.transaction) {
          const fullTransactionId = `${call.request!.session}/transactions/${
            call.request!.transaction.id
          }`;
          transactionKey = fullTransactionId;
          if (this.abortedTransactions.has(fullTransactionId)) {
            call.sendMetadata(new Metadata());
            call.emit(
              'error',
              MockSpanner.createTransactionAbortedError(`${fullTransactionId}`)
            );
            call.end();
            return;
          }
        }
        const keySet = JSON.stringify(
          call.request!.keySet ?? {},
          Object.keys(call.request!.keySet ?? {}).sort()
        );
        const key = `${call.request!.table}|${keySet}`;
        const res = this.readRequestResults.get(key);
        const session = this.sessions.get(call.request!.session);
        if (res) {
          if (call.request!.transaction?.begin) {
            const txn = this._updateTransaction(
              call.request!.session,
              call.request!.transaction.begin
            );
            if (txn instanceof Error) {
              call.sendMetadata(new Metadata());
              call.emit('error', txn);
              call.end();
              return;
            }
            transactionKey = `${call.request!.session}/transactions/${txn.id.toString()}`;
            if (res.type === ReadRequestResultType.RESULT_SET) {
              call.sendMetadata(new Metadata());
              (res.resultSet as protobuf.ResultSet).metadata!.transaction = txn;
            }
          }

          const currentSeqNum =
            this.transactionSeqNum.get(transactionKey!) || 0;
          const nextSeqNum = currentSeqNum + 1;
          this.transactionSeqNum.set(transactionKey!, nextSeqNum);
          const precommitToken = session?.multiplexed
            ? spannerProto.MultiplexedSessionPrecommitToken.create({
                precommitToken: Buffer.from('mock-precommit-token'),
                seqNum: nextSeqNum,
              })
            : null;
          let partialResultSets: any[];
          let resumeIndex: number;
          switch (res.type) {
            case ReadRequestResultType.RESULT_SET:
              if ((res.resultSet as any).precommitToken !== undefined) {
                (res.resultSet as protobuf.ResultSet).precommitToken =
                  precommitToken;
              }
              if (Array.isArray(res.resultSet)) {
                partialResultSets = res.resultSet;
              } else {
                partialResultSets = MockSpanner.toPartialResultSets(
                  res.resultSet as any,
                  'NORMAL'
                );
              }
              resumeIndex =
                call.request!.resumeToken.length === 0
                  ? 0
                  : parseInt(
                      Buffer.from(call.request!.resumeToken).toString(),
                      10
                    ) + 1;
              for (
                let index = resumeIndex;
                index < partialResultSets.length;
                index++
              ) {
                const streamErr = this.shiftStreamError(
                  this.streamingRead.name,
                  index
                );
                if (streamErr) {
                  call.sendMetadata(new Metadata());
                  call.emit('error', streamErr);
                  break;
                }
                call.write(partialResultSets[index]);
              }
              break;
            case ReadRequestResultType.ERROR:
              call.sendMetadata(new Metadata());
              call.emit('error', res.error);
              break;
            default:
              call.emit(
                'error',
                new Error(`Unknown ReadRequestResult type: ${res.type}`)
              );
          }
        } else {
          call.emit(
            'error',
            new Error(
              `There is no result registered for ${call.request!.table}`
            )
          );
        }
        call.end();
      })
      .catch((err) => {
        call.sendMetadata(new Metadata());
        call.emit('error', err);
        call.end();
      });
  }

  beginTransaction(call: any, callback: any) {
    this.pushRequest(call.request!, call.metadata);
    this.simulateExecutionTime(this.beginTransaction.name)
      .then(() => {
        this.mutationOnly = call.request.mutationKey ? true : false;
        const res = this._updateTransaction(
          call.request!.session,
          call.request!.options
        );
        if (res instanceof Error) {
          callback(res);
        } else {
          callback(null, res);
        }
      })
      .catch((err) => {
        callback(err);
      });
  }

  commit(call: any, callback: any) {
    this.pushRequest(call.request!, call.metadata);
    this.simulateExecutionTime(this.commit.name)
      .then(() => {
        const fullTransactionId = `${call.request!.session}/transactions/${
          call.request!.transactionId
        }`;
        if (this.abortedTransactions.has(fullTransactionId)) {
          callback(
            MockSpanner.createTransactionAbortedError(`${fullTransactionId}`)
          );
          return;
        }
        const session = this.sessions.get(call.request!.session);
        if (session) {
          if (call.request!.transactionId) {
            const buffer = Buffer.from(call.request!.transactionId as string);
            const transactionId = buffer.toString();
            const fullTransactionId =
              session.name + '/transactions/' + transactionId;
            const transaction = this.transactions.get(fullTransactionId);
            if (transaction) {
              const transactionKey = `${call.request.session}/transactions/${call.request.transactionId}`;
              this.transactionSeqNum.delete(transactionKey);
              this.transactions.delete(fullTransactionId);
              this.transactionOptions.delete(fullTransactionId);
              callback(
                null,
                spannerProto.CommitResponse.create({
                  commitTimestamp: now(),
                })
              );
            } else {
              callback(
                MockSpanner.createTransactionNotFoundError(fullTransactionId)
              );
            }
          } else if (call.request!.singleUseTransaction) {
            callback(
              null,
              spannerProto.CommitResponse.create({
                commitTimestamp: now(),
              })
            );
          }
        } else {
          callback(
            MockSpanner.createSessionNotFoundError(call.request!.session)
          );
        }
      })
      .catch((err) => {
        callback(err);
      });
  }

  rollback(call: any, callback: any) {
    this.pushRequest(call.request!, call.metadata);
    const session = this.sessions.get(call.request!.session);
    if (session) {
      const buffer = Buffer.from(call.request!.transactionId as string);
      const transactionId = buffer.toString();
      const fullTransactionId = session.name + '/transactions/' + transactionId;
      const transaction = this.transactions.get(fullTransactionId);
      if (transaction) {
        const transactionKey = `${call.request.session}/transactions/${call.request.transactionId}`;
        this.transactionSeqNum.delete(transactionKey);
        this.transactions.delete(fullTransactionId);
        this.transactionOptions.delete(fullTransactionId);
        callback(null, google.protobuf.Empty.create());
      } else {
        callback(MockSpanner.createTransactionNotFoundError(fullTransactionId));
      }
    } else {
      callback(MockSpanner.createSessionNotFoundError(call.request!.session));
    }
  }

  partitionQuery(call: any, callback: any) {
    this.pushRequest(call.request!, call.metadata);
    this.simulateExecutionTime(this.partitionQuery.name)
      .then(() => {
        const response = spannerProto.PartitionResponse.create({
          partitions: [{ partitionToken: Buffer.from('mock-token') }],
        });
        callback(null, response);
      })
      .catch((err) => callback(err));
  }

  partitionRead(call: any, callback: any) {
    this.pushRequest(call.request!, call.metadata);
    this.simulateExecutionTime(this.partitionRead.name)
      .then(() => {
        const response = spannerProto.PartitionResponse.create({
          partitions: [{ partitionToken: Buffer.from('mock-token') }],
        });
        callback(null, response);
      })
      .catch((err) => callback(err));
  }

  batchWrite(call: any) {
    this.pushRequest(call.request, call.metadata);
    this.simulateExecutionTime(this.batchWrite.name)
      .then(() => {
        const response = spannerProto.BatchWriteResponse.create({
          commitTimestamp: now(),
        });
        call.write(response);
        call.end();
      })
      .catch((err) => call.destroy(err));
  }

  private _updateTransaction(
    sessionName: string,
    options: protobuf.ITransactionOptions | null | undefined
  ): protobuf.Transaction | ServiceError {
    const session = this.sessions.get(sessionName);
    if (!session) {
      return MockSpanner.createSessionNotFoundError(sessionName);
    }
    let counter = this.transactionCounters.get(session.name);
    if (!counter) {
      counter = 0;
    }
    const id = ++counter;
    this.transactionCounters.set(session.name, counter);
    const transactionId = id.toString().padStart(12, '0');
    const fullTransactionId = session.name + '/transactions/' + transactionId;
    const readTimestamp = options && options.readOnly ? now() : undefined;
    let precommitToken;
    if (this.mutationOnly && session.multiplexed && options?.readWrite) {
      const currentSeqNum = this.transactionSeqNum.get(fullTransactionId) || 0;
      const nextSeqNum = currentSeqNum + 1;
      this.transactionSeqNum.set(fullTransactionId, nextSeqNum);
      precommitToken = {
        precommitToken: Buffer.from('mock-precommit-token'),
        seqNum: nextSeqNum,
      };
    }
    const transaction = spannerProto.Transaction.create({
      id: Buffer.from(transactionId),
      readTimestamp,
      precommitToken,
    });
    this.transactions.set(fullTransactionId, transaction);
    this.transactionOptions.set(fullTransactionId, options);
    return transaction;
  }
}

export function createMockSpanner(
  server: Server,
  mockInstance?: MockSpanner
): MockSpanner {
  const mock = mockInstance ?? MockSpanner.create();
  server.addService(spannerProtoDescriptor.Spanner.service, {
    batchCreateSessions: (mock as any).batchCreateSessions,
    createSession: (mock as any).createSession,
    getSession: (mock as any).getSession,
    listSessions: (mock as any).listSessions,
    deleteSession: (mock as any).deleteSession,
    executeSql: (mock as any).executeSql,
    executeStreamingSql: (mock as any).executeStreamingSql,
    executeBatchDml: (mock as any).executeBatchDml,
    read: (mock as any).read,
    streamingRead: (mock as any).streamingRead,
    beginTransaction: (mock as any).beginTransaction,
    commit: (mock as any).commit,
    rollback: (mock as any).rollback,
    partitionQuery: (mock as any).partitionQuery,
    partitionRead: (mock as any).partitionRead,
    batchWrite: (mock as any).batchWrite,
  });
  return mock;
}

export function createReadRequestResultSet(): protobuf.ResultSet {
  const fields = [
    spannerProto.StructType.Field.create({
      name: 'ID',
      type: spannerProto.Type.create({ code: spannerProto.TypeCode.STRING }),
    }),
    spannerProto.StructType.Field.create({
      name: 'VALUE',
      type: spannerProto.Type.create({ code: spannerProto.TypeCode.STRING }),
    }),
  ];
  const metadata = new spannerProto.ResultSetMetadata({
    rowType: new spannerProto.StructType({ fields }),
  });

  return spannerProto.ResultSet.create({
    metadata,
    rows: [
      { values: [{ stringValue: 'a' }, { stringValue: 'Alpha' }] },
      { values: [{ stringValue: 'b' }, { stringValue: 'Beta' }] },
      { values: [{ stringValue: 'c' }, { stringValue: 'Gamma' }] },
    ],
  });
}

export function createSimpleResultSet(): protobuf.ResultSet {
  const fields = [
    spannerProto.StructType.Field.create({
      name: 'NUM',
      type: spannerProto.Type.create({ code: spannerProto.TypeCode.INT64 }),
    }),
    spannerProto.StructType.Field.create({
      name: 'NAME',
      type: spannerProto.Type.create({ code: spannerProto.TypeCode.STRING }),
    }),
  ];
  const metadata = new spannerProto.ResultSetMetadata({
    rowType: new spannerProto.StructType({
      fields,
    }),
  });
  return spannerProto.ResultSet.create({
    metadata,
    rows: [
      { values: [{ stringValue: '1' }, { stringValue: 'One' }] },
      { values: [{ stringValue: '2' }, { stringValue: 'Two' }] },
      { values: [{ stringValue: '3' }, { stringValue: 'Three' }] },
    ],
  });
}

export const NUM_ROWS_LARGE_RESULT_SET = 100;

export function createLargeResultSet(): protobuf.ResultSet {
  const fields = [
    spannerProto.StructType.Field.create({
      name: 'NUM',
      type: spannerProto.Type.create({ code: spannerProto.TypeCode.INT64 }),
    }),
    spannerProto.StructType.Field.create({
      name: 'NAME',
      type: spannerProto.Type.create({ code: spannerProto.TypeCode.STRING }),
    }),
  ];
  const metadata = new spannerProto.ResultSetMetadata({
    rowType: new spannerProto.StructType({
      fields,
    }),
  });
  const rows: any[] = [];
  for (let num = 1; num <= NUM_ROWS_LARGE_RESULT_SET; num++) {
    rows.push({
      values: [
        { stringValue: `${num}` },
        { stringValue: generateRandomString(100) },
      ],
    });
  }
  return spannerProto.ResultSet.create({
    metadata,
    rows,
  });
}

export function createSelect1ResultSet(): protobuf.ResultSet {
  const fields = [
    spannerProto.StructType.Field.create({
      name: '',
      type: spannerProto.Type.create({ code: spannerProto.TypeCode.INT64 }),
    }),
  ];
  const metadata = new spannerProto.ResultSetMetadata({
    rowType: new spannerProto.StructType({
      fields,
    }),
  });
  return spannerProto.ResultSet.create({
    metadata,
    rows: [{ values: [{ stringValue: '1' }] }],
  });
}

export function createSelect1ResultSetWithStats(): protobuf.ResultSet {
  const fields = [
    spannerProto.StructType.Field.create({
      name: '',
      type: spannerProto.Type.create({ code: spannerProto.TypeCode.INT64 }),
    }),
  ];
  const metadata = new spannerProto.ResultSetMetadata({
    rowType: new spannerProto.StructType({
      fields,
    }),
  });
  return spannerProto.ResultSet.create({
    metadata,
    rows: [{ values: [{ stringValue: '1' }] }],
    stats: spannerProto.ResultSetStats.create({
      queryStats: {
        fields: {
          elapsed_time: { stringValue: '1ms' },
        },
      },
    }),
  });
}

export function createDialectResultSet(): protobuf.ResultSet {
  const fields = [
    spannerProto.StructType.Field.create({
      name: 'option_value',
      type: spannerProto.Type.create({ code: spannerProto.TypeCode.STRING }),
    }),
  ];
  const metadata = new spannerProto.ResultSetMetadata({
    rowType: new spannerProto.StructType({
      fields,
    }),
  });
  return spannerProto.ResultSet.create({
    metadata,
    rows: [{ values: [{ stringValue: 'GOOGLE_STANDARD_SQL' }] }],
  });
}

export function createResultSetWithAllDataTypes(): protobuf.ResultSet {
  const fields = [
    spannerProto.StructType.Field.create({
      name: 'COLBOOL',
      type: spannerProto.Type.create({ code: spannerProto.TypeCode.BOOL }),
    }),
    spannerProto.StructType.Field.create({
      name: 'COLINT64',
      type: spannerProto.Type.create({ code: spannerProto.TypeCode.INT64 }),
    }),
    spannerProto.StructType.Field.create({
      name: 'COLFLOAT64',
      type: spannerProto.Type.create({ code: spannerProto.TypeCode.FLOAT64 }),
    }),
    spannerProto.StructType.Field.create({
      name: 'COLNUMERIC',
      type: spannerProto.Type.create({ code: spannerProto.TypeCode.NUMERIC }),
    }),
    spannerProto.StructType.Field.create({
      name: 'COLSTRING',
      type: spannerProto.Type.create({ code: spannerProto.TypeCode.STRING }),
    }),
    spannerProto.StructType.Field.create({
      name: 'COLBYTES',
      type: spannerProto.Type.create({ code: spannerProto.TypeCode.BYTES }),
    }),
    spannerProto.StructType.Field.create({
      name: 'COLJSON',
      type: spannerProto.Type.create({ code: spannerProto.TypeCode.JSON }),
    }),
    spannerProto.StructType.Field.create({
      name: 'COLDATE',
      type: spannerProto.Type.create({ code: spannerProto.TypeCode.DATE }),
    }),
    spannerProto.StructType.Field.create({
      name: 'COLTIMESTAMP',
      type: spannerProto.Type.create({ code: spannerProto.TypeCode.TIMESTAMP }),
    }),
  ];
  const metadata = new spannerProto.ResultSetMetadata({
    rowType: new spannerProto.StructType({
      fields,
    }),
  });
  return spannerProto.ResultSet.create({
    metadata,
    rows: [
      {
        values: [
          { boolValue: true },
          { stringValue: '1' },
          { numberValue: 3.14 },
          { stringValue: '6.626' },
          { stringValue: 'One' },
          { stringValue: Buffer.from('test').toString('base64') },
          { stringValue: '{"result":true, "count":42}' },
          { stringValue: '2021-05-11' },
          { stringValue: '2021-05-11T16:46:04.872Z' },
        ],
      },
    ],
  });
}

function generateRandomString(length: number) {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function now(): Timestamp {
  const n = Date.now();
  return TimestampProto.create({
    seconds: n / 1000,
    nanos: (n % 1000) * 1e6,
  });
}
