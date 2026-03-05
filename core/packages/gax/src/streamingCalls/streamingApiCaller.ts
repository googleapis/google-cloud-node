/**
 * Copyright 2020 Google LLC
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

import {APICaller} from '../apiCaller';
import {
  APICallback,
  BiDiStreamingCall,
  CancellableStream,
  ClientStreamingCall,
  GRPCCall,
  ServerStreamingCall,
  SimpleCallbackFunction,
} from '../apitypes';
import {warn} from '../warnings';

import {StreamDescriptor} from './streamDescriptor';
import {StreamProxy, StreamType} from './streaming';
import {CallSettings} from '../gax';

export class StreamingApiCaller implements APICaller {
  descriptor: StreamDescriptor;

  /**
   * An API caller for methods of gRPC streaming.
   * @private
   * @constructor
   * @param {StreamDescriptor} descriptor - the descriptor of the method structure.
   */
  constructor(descriptor: StreamDescriptor) {
    this.descriptor = descriptor;
  }

  init(callback: APICallback): StreamProxy {
    return new StreamProxy(
      this.descriptor.type,
      callback,
      this.descriptor.rest,
      this.descriptor.gaxStreamingRetries,
    );
  }

  wrap(func: GRPCCall): GRPCCall {
    switch (this.descriptor.type) {
      case StreamType.SERVER_STREAMING:
        return (argument: {}, metadata: {}, options: {}) => {
          return (func as ServerStreamingCall)(argument, metadata, options);
        };
      case StreamType.CLIENT_STREAMING:
        return (
          argument: {},
          metadata: {},
          options: {},
          callback?: APICallback,
        ) => {
          return (func as ClientStreamingCall)(metadata, options, callback);
        };
      case StreamType.BIDI_STREAMING:
        return (argument: {}, metadata: {}, options: {}) => {
          return (func as BiDiStreamingCall)(metadata, options);
        };
      default:
        warn(
          'streaming_wrap_unknown_stream_type',
          `Unknown stream type: ${this.descriptor.type}`,
        );
    }
    return func;
  }

  call(
    apiCall: SimpleCallbackFunction,
    argument: {},
    settings: CallSettings,
    stream: StreamProxy,
  ) {
    stream.setStream(
      apiCall,
      argument,
      settings.retryRequestOptions,
      settings.retry!,
    );
  }

  fail(stream: CancellableStream, err: Error) {
    stream.emit('error', err);
  }

  result(stream: CancellableStream) {
    return stream;
  }
}
