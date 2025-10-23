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
  GRPCCall,
  NextPageRequestType,
  SimpleCallbackFunction,
  UnaryCall,
  RequestType,
} from '../apitypes';
import {APICallback} from '../apitypes';
import {OngoingCall, OngoingCallPromise} from '../call';
import {CallOptions} from '../gax';
import {GoogleError} from '../googleError';
import {PageDescriptor} from './pageDescriptor';
import {ResourceCollector} from './resourceCollector';
import {warn} from '.././warnings';

export class PagedApiCaller implements APICaller {
  pageDescriptor: PageDescriptor;
  /**
   * Creates an API caller that returns a stream to performs page-streaming.
   *
   * @private
   * @constructor
   * @param {PageDescriptor} pageDescriptor - indicates the structure
   *   of page streaming to be performed.
   */
  constructor(pageDescriptor: PageDescriptor) {
    this.pageDescriptor = pageDescriptor;
  }

  /**
   * This function translates between regular gRPC calls (that accepts a request and returns a response,
   * and does not know anything about pages and page tokens) and the users' callback (that expects
   * to see resources from one page, a request to get the next page, and the raw response from the server).
   *
   * It generates a function that can be passed as a callback function to a gRPC call, will understand
   * pagination-specific fields in the response, and call the users' callback after having those fields
   * parsed.
   *
   * @param request Request object. It needs to be passed to all subsequent next page requests
   * (the main content of the request object stays unchanged, only the next page token changes)
   * @param callback The user's callback that expects the page content, next page request, and raw response.
   */
  private generateParseResponseCallback(
    request: NextPageRequestType,
    callback: APICallback,
  ): APICallback {
    const resourceFieldName = this.pageDescriptor.resourceField;
    const responsePageTokenFieldName =
      this.pageDescriptor.responsePageTokenField;
    const requestPageTokenFieldName = this.pageDescriptor.requestPageTokenField;
    return (err: Error | null, response: NextPageRequestType | undefined) => {
      if (err) {
        callback(err);
        return;
      }
      if (!request) {
        callback(
          new GoogleError('Undefined request in pagination method callback.'),
        );
        return;
      }
      if (!response) {
        callback(
          new GoogleError('Undefined response in pagination method callback.'),
        );
        return;
      }
      const resources = response[resourceFieldName] || [];
      const pageToken = response[responsePageTokenFieldName];
      let nextPageRequest = null;
      if (pageToken) {
        nextPageRequest = Object.assign({}, request);
        nextPageRequest[requestPageTokenFieldName] = pageToken;
      }
      callback(err, resources, nextPageRequest, response);
    };
  }

  /**
   * Adds a special ability to understand pagination-specific fields to the existing gRPC call.
   * The original gRPC call just calls callback(err, result).
   * The wrapped one will call callback(err, resources, nextPageRequest, rawResponse) instead.
   *
   * @param func gRPC call (normally, a service stub call). The gRPC call is expected to accept four parameters:
   * request, metadata, call options, and callback.
   */
  wrap(func: GRPCCall): GRPCCall {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    return function wrappedCall(argument, metadata, options, callback) {
      return (func as UnaryCall)(
        argument,
        metadata,
        options,
        self.generateParseResponseCallback(argument, callback),
      );
    };
  }

  /**
   * Makes it possible to use both callback-based and promise-based calls.
   * Returns an OngoingCall or OngoingCallPromise object.
   * Regardless of which one is returned, it always has a `.callback` to call.
   *
   * @param settings Call settings. Can only be used to replace Promise with another promise implementation.
   * @param [callback] Callback to be called, if any.
   */
  init(callback?: APICallback) {
    if (callback) {
      return new OngoingCall(callback);
    }
    return new OngoingCallPromise();
  }

  /**
   * Implements auto-pagination logic.
   *
   * @param apiCall A function that performs gRPC request and calls its callback with a response or an error.
   * It's supposed to be a gRPC service stub function wrapped into several layers of wrappers that make it
   * accept just two parameters: (request, callback).
   * @param request A request object that came from the user.
   * @param settings Call settings. We are interested in `maxResults` and `autoPaginate` (they are optional).
   * @param ongoingCall An instance of OngoingCall or OngoingCallPromise that can be used for call cancellation,
   * and is used to return results to the user.
   */
  call(
    apiCall: SimpleCallbackFunction,
    request: RequestType,
    settings: CallOptions,
    ongoingCall: OngoingCall,
  ) {
    request = Object.assign({}, request);

    if (!settings.autoPaginate) {
      // they don't want auto-pagination this time - okay, just call once
      ongoingCall.call(apiCall, request);
      return;
    }
    if (request.pageSize && settings.autoPaginate) {
      warn(
        'autoPaginate true',
        'Providing a pageSize without setting autoPaginate to false will still return all results. See https://github.com/googleapis/gax-nodejs/blob/main/client-libraries.md#auto-pagination for more information on how to configure manual paging',
        'AutopaginateTrueWarning',
      );
    }

    const maxResults = settings.maxResults || -1;

    const resourceCollector = new ResourceCollector(apiCall, maxResults);
    resourceCollector.processAllPages(request).then(
      resources => ongoingCall.callback(null, resources),
      err => ongoingCall.callback(err),
    );
  }

  fail(ongoingCall: OngoingCallPromise, err: GoogleError): void {
    ongoingCall.callback!(err);
  }

  result(ongoingCall: OngoingCallPromise) {
    return ongoingCall.promise;
  }
}
