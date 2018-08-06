/**
 * Copyright 2016 Google Inc. All Rights Reserved.
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
// jscs doesn't understand koa..
// jscs:disable

import {ErrorReporting} from '../../src';
const errorHandler = new ErrorReporting({
  // TODO: Address the fact that this configuration
  //       option is now invalid.
  onUncaughtException: 'report',
} as {});
import * as Koa from 'koa';
const app = new Koa();

app.use(errorHandler.koa);

app.use(async (ctx: {throw: Function}, next: {}) => {
  // This will set status and message
  ctx.throw('Error Message', 500);
  await next;
});

app.use(async (ctx: {set: Function}, next: {}) => {
  const start = Date.now();
  await next;
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', ms + 'ms');
});

// logger

app.use(async (ctx: {method: {}; url: {}}, next: {}) => {
  const start = Date.now();
  await next;
  const ms = Date.now() - start;
  // eslint-disable-next-line no-console
  console.log('%s %s - %s', ctx.method, ctx.url, ms);
});

// response
app.use(async (ctx: {body: string}, next: {}) => {
  ctx.body = 'Hello World';
  await next;
});

app.listen(3000);
