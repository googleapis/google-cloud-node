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

import {Duplex} from 'stream';

import {CancellablePromise} from './call';
import {CallOptions} from './gax';
import {GoogleError} from './googleError';
import {Operation} from './longRunningCalls/longrunning';

// gRPC functions return object with `.cancel()` method that can be used for
// canceling the ongoing call.
export interface GRPCCallResult {
  cancel(): void;
}

// All GAX calls take RequestType and return ResultTuple, which can contain up
// to three elements. The first element is always a response (post-processed for
// special types of call such as pagination or long-running), the second
// parameter is defined for paginated calls and stores the next page request
// object, the third parameter stores raw (unprocessed) response object in cases
// when it might be useful for users.
export interface RequestType {
  [index: string]:
    | string
    | number
    | RequestType
    | Array<string | number | RequestType>;
}
export type ResponseType = {} | null;
export type NextPageRequestType = {
  [index: string]: string | number | {};
} | null;
export type RawResponseType = Operation | {} | null;
export type ResultTuple = [
  ResponseType | [ResponseType],
  NextPageRequestType | undefined,
  RawResponseType | undefined,
];

export interface SimpleCallbackFunction {
  (request: RequestType, callback: APICallback): GRPCCallResult;
}

export type APICallback = (
  err: GoogleError | null,
  response?: ResponseType,
  next?: NextPageRequestType,
  rawResponse?: RawResponseType,
) => void;

// The following five types mimic various gRPC calls (regular UnaryCall and
// various streaming calls).
export type UnaryCall = (
  argument: {},
  metadata: {},
  options: {},
  callback: APICallback,
) => GRPCCallResult;
export type ServerStreamingCall = (
  argument: {},
  metadata: {},
  options: {},
) => Duplex & GRPCCallResult;
export type ClientStreamingCall = (
  metadata: {},
  options: {},
  callback?: APICallback,
) => Duplex & GRPCCallResult;
export type BiDiStreamingCall = (
  metadata: {},
  options: {},
) => Duplex & GRPCCallResult;
export type GRPCCall =
  | UnaryCall
  | ServerStreamingCall
  | ClientStreamingCall
  | BiDiStreamingCall;

// GAX wraps gRPC calls so that the wrapper functions return either a
// cancellable promise, or a stream (also cancellable!)
export type CancellableStream = Duplex & GRPCCallResult;
export type GaxCallResult = CancellablePromise<ResultTuple> | CancellableStream;
export interface GaxCallPromise {
  (
    argument: {},
    callOptions?: CallOptions,
    callback?: APICallback,
  ): CancellablePromise<ResultTuple>;
}
export interface GaxCallStream {
  (
    argument: {},
    callOptions?: CallOptions,
    callback?: APICallback,
  ): CancellableStream;
}
export interface GaxCall {
  (
    argument: {},
    callOptions?: CallOptions,
    callback?: APICallback,
  ): GaxCallResult;
}
export interface GRPCCallOtherArgs {
  options?: {deadline?: Date};
  headers?: {};
  metadataBuilder: (abTests?: {}, headers?: {}) => {};
}
