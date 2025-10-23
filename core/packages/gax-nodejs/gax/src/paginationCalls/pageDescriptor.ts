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

import {PassThrough, Transform} from 'stream';

import {APICaller} from '../apiCaller';
import {
  GaxCall,
  APICallback,
  RequestType,
  ResultTuple,
  NextPageRequestType,
  RawResponseType,
} from '../apitypes';
import {Descriptor} from '../descriptor';
import {CallSettings} from '../gax';
import {NormalApiCaller} from '../normalCalls/normalApiCaller';
import {warn} from '.././warnings';

import {PagedApiCaller} from './pagedApiCaller';

const maxAttemptsEmptyResponse = 10;

export interface ResponseType {
  [index: string]: string;
}
/**
 * A descriptor for methods that support pagination.
 */
export class PageDescriptor implements Descriptor {
  requestPageTokenField: string;
  responsePageTokenField: string;
  requestPageSizeField?: string;
  resourceField: string;

  constructor(
    requestPageTokenField: string,
    responsePageTokenField: string,
    resourceField: string,
  ) {
    this.requestPageTokenField = requestPageTokenField;
    this.responsePageTokenField = responsePageTokenField;
    this.resourceField = resourceField;
  }

  /**
   * Creates a new object Stream which emits the resource on 'data' event.
   */
  createStream(
    apiCall: GaxCall,
    request: {},
    options: CallSettings,
  ): Transform {
    if (options?.autoPaginate) {
      warn(
        'autoPaginate true',
        'Autopaginate will always be set to false in stream paging methods. See more info at https://github.com/googleapis/gax-nodejs/blob/main/client-libraries.md#auto-pagination for more information on how to configure paging calls',
        'AutopaginateTrueWarning',
      );
    }
    const stream = new PassThrough({objectMode: true});
    options = Object.assign({}, options, {autoPaginate: false});
    const maxResults = 'maxResults' in options ? options.maxResults : -1;
    let pushCount = 0;
    let started = false;
    function callback(
      err: Error | null,
      resources: Array<ResponseType>,
      next: NextPageRequestType,
      apiResp: RawResponseType,
    ) {
      if (err) {
        stream.emit('error', err);
        return;
      }
      // emit full api response with every page.
      stream.emit('response', apiResp);
      for (let i = 0; i < resources.length; ++i) {
        // TODO: rewrite without accessing stream internals
        if (
          (stream as unknown as {_readableState: {ended: boolean}})
            ._readableState.ended
        ) {
          return;
        }
        if (resources[i] === null) {
          continue;
        }
        stream.push(resources[i]);
        pushCount++;
        if (pushCount === maxResults) {
          stream.end();
        }
      }
      // TODO: rewrite without accessing stream internals
      if (
        (stream as unknown as {_readableState: {ended: boolean}})._readableState
          .ended
      ) {
        return;
      }
      if (!next) {
        stream.end();
        return;
      }
      // When pageToken is specified in the original options, it will overwrite
      // the page token field in the next request. Therefore it must be cleared.
      if ('pageToken' in options) {
        delete options.pageToken;
      }
      if (stream.isPaused()) {
        request = next;
        started = false;
      } else {
        setImmediate(apiCall, next, options, callback as APICallback);
      }
    }
    stream.on('resume', async () => {
      if (!started) {
        started = true;
        await apiCall(request, options, callback as unknown as APICallback);
      }
    });
    return stream;
  }

  /**
   * Create an async iterable which can be recursively called for data on-demand.
   */
  asyncIterate(
    apiCall: GaxCall,
    request: RequestType,
    options?: CallSettings,
  ): AsyncIterable<{} | undefined> {
    if (options?.autoPaginate) {
      warn(
        'autoPaginate true',
        'Autopaginate will always be set to false in Async paging methods. See more info at https://github.com/googleapis/gax-nodejs/blob/main/client-libraries.md#auto-pagination for more information on how to configure paging calls',
        'AutopaginateTrueWarning',
      );
    }
    options = Object.assign({}, options, {autoPaginate: false});
    const iterable = this.createIterator(apiCall, request, options);
    return iterable;
  }

  createIterator(
    apiCall: GaxCall,
    request: RequestType,
    options: CallSettings,
  ): AsyncIterable<{} | undefined> {
    const asyncIterable = {
      [Symbol.asyncIterator]() {
        let nextPageRequest: RequestType | null | undefined = request;
        const cache: Array<ResponseType | [string, ResponseType]> = [];
        return {
          async next() {
            if (cache.length > 0) {
              return Promise.resolve({
                done: false,
                value: cache.shift(),
              });
            }
            let attempts = 0;
            while (cache.length === 0 && nextPageRequest) {
              let result: {} | [ResponseType] | null;
              [result, nextPageRequest] = (await apiCall(
                nextPageRequest!,
                options,
              )) as ResultTuple;
              // For pagination response with protobuf map type, use tuple as representation.
              if (result && !Array.isArray(result)) {
                for (const [key, value] of Object.entries(result)) {
                  cache.push([key, value as ResponseType]);
                }
              } else {
                cache.push(...(result as ResponseType[]));
              }
              if (cache.length === 0) {
                ++attempts;
                if (attempts > maxAttemptsEmptyResponse) {
                  break;
                }
              }
            }
            if (cache.length === 0) {
              return Promise.resolve({done: true, value: undefined});
            }
            return Promise.resolve({done: false, value: cache.shift()});
          },
        };
      },
    };
    return asyncIterable;
  }

  getApiCaller(settings: CallSettings): APICaller {
    if (!settings.autoPaginate) {
      return new NormalApiCaller();
    }
    return new PagedApiCaller(this);
  }
}
