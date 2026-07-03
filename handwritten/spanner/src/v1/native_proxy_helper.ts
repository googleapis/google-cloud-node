import { Readable, finished, PassThrough } from 'stream';
import { codec, Json } from '../codec';
import { google } from '../../protos/protos';

const path = require('path');

// 1. SUBHAM'S PROTOTYPE SETUP
export const useRustPoc2 = process.env.USE_RUST_POC2 === 'true';
let rustPoc2CoreHandle: any = null;
let executeStreamingSqlNative: any = null;

if (useRustPoc2) {
  const addonPath = path.resolve(__dirname, '../../../native_subham/index.js');
  const nativeBinding = require(addonPath);
  const channels = parseInt(process.env.SPANNER_NUM_CHANNELS || '4', 10);
  rustPoc2CoreHandle = new nativeBinding.CoreClientHandle(channels);
  executeStreamingSqlNative = nativeBinding.executeStreamingSqlNative;
  console.log('[NativeProxyHelper] Initialized rustPoc2 CoreClientHandle with channels:', channels);
}

export function getRustCoreHandle() {
  return rustPoc2CoreHandle;
}

export function getExecuteStreamingSqlNative() {
  return executeStreamingSqlNative;
}

export function serializeHeadersSubham(metadata: any): string[][] {
  const headers: string[][] = [];
  if (metadata) {
    const map = metadata.getMap ? metadata.getMap() : metadata;
    for (const [key, value] of Object.entries(map)) {
      if (value !== undefined && value !== null) {
        if (Array.isArray(value)) {
          for (const val of value) {
            headers.push([key, String(val)]);
          }
        } else {
          headers.push([key, String(value)]);
        }
      }
    }
  }
  return headers;
}

export class RustRowStream extends Readable {
  private _fields?: google.spanner.v1.StructType.Field[];
  private _json: boolean;
  private _jsonOptions?: any;
  private _columnsMetadata?: any;

  constructor(options: { json?: boolean; jsonOptions?: any; columnsMetadata?: any } = {}) {
    super({ objectMode: true });
    this._json = !!options.json;
    this._jsonOptions = options.jsonOptions;
    this._columnsMetadata = options.columnsMetadata;
  }

  _read() {}

  setMetadata(fields: any[]) {
    this._fields = fields;
    this.emit('response', { metadata: { rowType: { fields } } });
  }

  pushBatch(batch: any[][]) {
    if (!this._fields) {
      this.destroy(new Error('Received rows before metadata fields schema'));
      return;
    }
    for (const rawRow of batch) {
      const fields = rawRow.map((value, index) => {
        const { name, type } = this._fields![index];
        const columnMetadata = this._columnsMetadata?.[name];
        return {
          name,
          value: codec.decode(
            value,
            type as any,
            columnMetadata,
          ),
        };
      });

      Object.defineProperty(fields, 'toJSON', {
        value: (options?: any): Json => {
          return codec.convertFieldsToJson(fields, options);
        },
      });

      if (this._json) {
        this.push((fields as any).toJSON(this._jsonOptions));
      } else {
        this.push(fields);
      }
    }
  }
}

export class ProxyRowStream extends Readable {
  private _fields?: google.spanner.v1.StructType.Field[];
  private _json: boolean;
  private _jsonOptions?: any;
  private _columnsMetadata?: any;
  private _decoders?: Array<(val: any) => any>;

  constructor(options: { json?: boolean; jsonOptions?: any; columnsMetadata?: any } = {}) {
    super({ objectMode: true });
    this._json = !!options.json;
    this._jsonOptions = options.jsonOptions;
    this._columnsMetadata = options.columnsMetadata;
  }

  _read() {}

  setMetadata(fields: any[]) {
    this._fields = fields;
    this.emit('response', { metadata: { rowType: { fields } } });
    this._decoders = this._fields.map(({name, type}) => {
      const columnMetadata =
        this._columnsMetadata &&
        name !== null &&
        name !== undefined &&
        Object.prototype.hasOwnProperty.call(this._columnsMetadata, name)
          ? (this._columnsMetadata as any)[name]
          : undefined;
      return codec.getDecoder(
        type as google.spanner.v1.Type,
        columnMetadata,
        this._json ? this._jsonOptions || {} : undefined,
      );
    });
  }

  pushBatch(batch: any[][]) {
    if (!this._fields || !this._decoders) {
      this.destroy(new Error('Received rows before metadata fields schema'));
      return;
    }
    for (const rawRow of batch) {
      const fields = rawRow.map((value: any, index: number) => {
        const { name } = this._fields![index];
        const decodedValue = this._decoders![index](value);
        return {
          name,
          value: decodedValue,
        };
      });

      Object.defineProperty(fields, 'toJSON', {
        value: (options?: any): Json => {
          return codec.convertFieldsToJson(fields, options);
        },
      });

      if (this._json) {
        this.push((fields as any).toJSON(this._jsonOptions));
      } else {
        this.push(fields);
      }
    }
  }
}

// 2. gRPC PROXY PROTOTYPE SETUP
export const useNativeProxy = process.env.USE_NATIVE_PROXY === 'true';
export const useNativeV8 = process.env.SPANNER_NATIVE_V8 === 'true';

let NativeGrpcProxy: any = null;
let executeStreamingSqlProxyNative: any = null;

if (useNativeProxy) {
  const addonPath = process.env.USE_GO_PROXY === 'true'
    ? '../../../native-go/native.node'
    : '../../../native/native.node';
  const loaded = require(path.resolve(__dirname, addonPath));
  NativeGrpcProxy = loaded.NativeGrpcProxy;
  executeStreamingSqlProxyNative = loaded.executeStreamingSqlProxyNative;
}

export function getExecuteStreamingSqlProxyNative() {
  return executeStreamingSqlProxyNative;
}

// Active streams registry for callback demultiplexing
export const activeStreams = new Map<number, (err: any, events: Array<{ typeFlag: number; payload: any }> | null) => void>();
export let nextStreamId = 1;
export function incrementNextStreamId() {
  return nextStreamId++;
}

export let nativeProxyInstance: any = null;
export function getNativeProxyInstance() {
  return nativeProxyInstance;
}

export let executeStreamingSqlSerializer: any = null;
export function getExecuteStreamingSqlSerializer() {
  return executeStreamingSqlSerializer;
}

// Global dispatcher to route callbacks based on streamId
export function globalStreamDispatcher(napiErr: any, streamId: number, realErr: any, events: any[] | null) {
  const err = napiErr || realErr;
  const cb = activeStreams.get(streamId);
  if (cb) {
    cb(err, events);
  }
}

export function serializeHeaders(metadata: any): string[] {
  const headers: string[] = [];
  if (metadata) {
    const map = metadata.getMap ? metadata.getMap() : metadata;
    for (const [key, value] of Object.entries(map)) {
      if (value !== undefined && value !== null) {
        if (Array.isArray(value)) {
          for (const val of value) {
            headers.push(key, String(val));
          }
        } else {
          headers.push(key, String(value));
        }
      }
    }
  }
  return headers;
}

function toArrayBuffer(buffer: Buffer): ArrayBuffer {
  return (buffer.buffer as ArrayBuffer).slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
}

let globalRoundRobinChannelHint = 0;
export function getNextRoundRobinChannelHint(): number {
  return globalRoundRobinChannelHint++;
}

export function enrichNativeError(err: any): any {
  if (err && typeof err.message === 'string') {
    const msg = err.message.toUpperCase();
    if (msg.includes('ABORTED')) {
      err.code = 10; // grpc.status.ABORTED
    } else if (msg.includes('CANCELLED')) {
      err.code = 1; // grpc.status.CANCELLED
    } else if (msg.includes('UNKNOWN')) {
      err.code = 2; // grpc.status.UNKNOWN
    } else if (msg.includes('INVALID_ARGUMENT')) {
      err.code = 3; // grpc.status.INVALID_ARGUMENT
    } else if (msg.includes('DEADLINE_EXCEEDED')) {
      err.code = 4; // grpc.status.DEADLINE_EXCEEDED
    } else if (msg.includes('NOT_FOUND')) {
      err.code = 5; // grpc.status.NOT_FOUND
    } else if (msg.includes('ALREADY_EXISTS')) {
      err.code = 6; // grpc.status.ALREADY_EXISTS
    } else if (msg.includes('PERMISSION_DENIED')) {
      err.code = 7; // grpc.status.PERMISSION_DENIED
    } else if (msg.includes('RESOURCE_EXHAUSTED')) {
      err.code = 8; // grpc.status.RESOURCE_EXHAUSTED
    } else if (msg.includes('FAILED_PRECONDITION')) {
      err.code = 9; // grpc.status.FAILED_PRECONDITION
    } else if (msg.includes('OUT_OF_RANGE')) {
      err.code = 11; // grpc.status.OUT_OF_RANGE
    } else if (msg.includes('UNIMPLEMENTED')) {
      err.code = 12; // grpc.status.UNIMPLEMENTED
    } else if (msg.includes('INTERNAL')) {
      err.code = 13; // grpc.status.INTERNAL
    } else if (msg.includes('UNAVAILABLE')) {
      err.code = 14; // grpc.status.UNAVAILABLE
    } else if (msg.includes('DATA_LOSS')) {
      err.code = 15; // grpc.status.DATA_LOSS
    } else if (msg.includes('UNAUTHENTICATED')) {
      err.code = 16; // grpc.status.UNAUTHENTICATED
    }
  }
  return err;
}

export function wrapStubWithNativeProxy(stub: any, service: any, endpoint: string) {
  if (!useNativeProxy) {
    return stub;
  }
  let url = endpoint;
  if (!url.includes('://')) {
    const isLocal = url.startsWith('localhost:') || url.startsWith('127.0.0.1:') || url.includes('localhost') || url.includes('127.0.0.1');
    const scheme = isLocal ? 'http' : 'https';
    const portSuffix = url.includes(':') ? '' : ':443';
    url = `${scheme}://${url}${portSuffix}`;
  }
  console.log('[NativeProxyHelper] Initializing NativeGrpcProxy for url:', url);
  const nativeProxy = new NativeGrpcProxy(url, globalStreamDispatcher);
  nativeProxyInstance = nativeProxy;
  executeStreamingSqlSerializer = service.ExecuteStreamingSql.requestSerialize;
  console.log('[NativeProxyHelper] NativeGrpcProxy initialized successfully');
  
  return new Proxy(stub, {
    get(target, propKey: string | symbol) {
      if (typeof propKey !== 'string') {
        return target[propKey];
      }
      const protoMethodName = propKey.charAt(0).toUpperCase() + propKey.slice(1);
      const methodDef = service[protoMethodName];
      if (!methodDef) {
        return target[propKey];
      }
      
      if (methodDef.responseStream) {
        return (request: any, metadata: any, options: any) => {
          const channelHint = options?.channelHint !== undefined
            ? options.channelHint
            : getNextRoundRobinChannelHint();
 
          const outStream = new Readable({
            objectMode: true,
            read() {}
          });
          
          const serialized = methodDef.requestSerialize(request);
          const requestBytes = process.env.USE_GO_PROXY === 'true' ? toArrayBuffer(serialized) : serialized;
          const headers = serializeHeaders(metadata);
          // The headers object populated by Node already includes the google-cloud-resource-prefix metadata
          
          const streamId = nextStreamId++;
          
          activeStreams.set(streamId, (err: any, events: any) => {
            if (err) {
              outStream.destroy(enrichNativeError(err));
              return;
            }
            if (events) {
              for (const event of events) {
                const { typeFlag, payload } = event;
                if (payload === null || (payload instanceof ArrayBuffer && payload.byteLength === 0) || (Buffer.isBuffer(payload) && payload.length === 0)) {
                  outStream.push(null);
                  return;
                }
                if (typeFlag === 4) {
                  outStream.push({ typeFlag, payload });
                } else {
                  outStream.push({ typeFlag, payload: Buffer.from(payload) });
                }
              }
            }
          });

          finished(outStream, () => {
            activeStreams.delete(streamId);
          });
          
          nativeProxy.makeStreamingCall(methodDef.path, requestBytes, headers, channelHint, streamId);
          
          return outStream;
        };
      }
      
      // Unary method
      return (request: any, metadata: any, options: any, callback: any) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        if (typeof metadata === 'function') {
          callback = metadata;
          metadata = undefined;
          options = {};
        }
 
        const channelHint = options?.channelHint !== undefined
          ? options.channelHint
          : getNextRoundRobinChannelHint();
        
        const serialized = methodDef.requestSerialize(request);
        const requestBytes = process.env.USE_GO_PROXY === 'true' ? toArrayBuffer(serialized) : serialized;
        const headers = serializeHeaders(metadata);
        // The headers object populated by Node already includes the google-cloud-resource-prefix metadata
        
        const promise = nativeProxy.makeUnaryCall(methodDef.path, requestBytes, headers, channelHint)
          .then((responseBytes: any) => {
            return methodDef.responseDeserialize(Buffer.from(responseBytes));
          })
          .catch((err: any) => {
            throw enrichNativeError(err);
          });
 
        if (typeof callback === 'function') {
          promise.then(
            res => callback(null, res),
            err => callback(err)
          );
          return;
        }
 
        return promise.then(res => [res, request, null]);
      };
    }
  });
}

