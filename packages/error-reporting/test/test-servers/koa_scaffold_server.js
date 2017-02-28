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
'use strict';

var errorHandler = require('../../index.js')({
  onUncaughtException: 'report'
});
var koa = require('koa');
var app = koa();

app.use(errorHandler.koa);

app.use(function *(next) {
  //This will set status and message
  this.throw('Error Message', 500);
  yield next;
});


app.use(function *(next){
  var start = new Date();
  yield next;
  var ms = new Date() - start;
  this.set('X-Response-Time', ms + 'ms');
});

// logger

app.use(function *(next){
  var start = new Date();
  yield next;
  var ms = new Date() - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

// response
app.use(function *(next){
  this.body = 'Hello World';
  yield next;
});

app.listen(3000);
