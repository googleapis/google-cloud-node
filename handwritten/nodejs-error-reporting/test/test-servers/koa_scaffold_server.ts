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

import {ErrorReporting} from '../../src';
const errorHandler = new ErrorReporting({
  // TODO: Address the fact that this configuration
  //       option is now invalid.
  onUncaughtException: 'report',
} as {});
import koa from 'koa';
const app = (koa as Function)();

app.use(errorHandler.koa);

app.use(function*(this: {throw: Function}, next: {}) {
  // This will set status and message
  this.throw('Error Message', 500);
  yield next;
});

app.use(function*(this: {set: Function}, next: {}) {
  const start = Date.now();
  yield next;
  const ms = Date.now() - start;
  this.set('X-Response-Time', ms + 'ms');
});

// logger

app.use(function*(this: {method: {}; url: {}}, next: {}) {
  const start = Date.now();
  yield next;
  const ms = Date.now() - start;
  // eslint-disable-next-line no-console
  console.log('%s %s - %s', this.method, this.url, ms);
});

// response
app.use(function*(this: {body: string}, next: {}) {
  this.body = 'Hello World';
  yield next;
});

app.listen(3000);
