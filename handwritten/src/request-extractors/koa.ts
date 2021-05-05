// Copyright 2016 Google LLC
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

import * as koa from 'koa';

import {RequestInformationContainer} from '../classes/request-information-container';

/**
 * The koaRequestInformationExtractor attempts to extract information from a Koa
 * request/reponse set and marshal it into a RequestInformationContainer
 * instance.
 * @function koaRequestInformationExtractor
 * @param {Object} req - the Koa request object
 * @param {Object} res - the Koa response object
 * @returns {RequestInformationContainer} - returns a request information
 *  container instance that may be in its initial state
 */
export function koaRequestInformationExtractor(
  req: koa.Request,
  res: koa.Response
) {
  const returnObject = new RequestInformationContainer();

  if (
    req?.toString() !== '[object Object]' ||
    res?.toString() !== '[object Object]' ||
    typeof req === 'function' ||
    typeof res === 'function' ||
    Array.isArray(req) ||
    Array.isArray(res) ||
    req.headers?.toString() !== '[object Object]'
  ) {
    return returnObject;
  }

  returnObject
    .setMethod(req.method)
    .setUrl(req.url)
    .setUserAgent(req.headers['user-agent'])
    .setReferrer(req.headers.referrer as string)
    .setStatusCode(res.status)
    .setRemoteAddress(req.ip);

  return returnObject;
}
