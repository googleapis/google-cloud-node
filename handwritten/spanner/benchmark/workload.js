/*!
 * Copyright 2017 Google Inc. All Rights Reserved.
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

'use strict';

const crypto = require('crypto');
const PQueue = require('p-queue');
const random = require('lodash.random');
const timeSpan = require('time-span');

const OPERATIONS = [
  'readproportion',
  'updateproportion',
  'scanproportion',
  'insertproportion',
];

class Workload {
  constructor(database, options) {
    this.database = database;
    this.options = options;

    this.queue = new PQueue();
    this.weights = [];
    this.totalWeight = 0;
    this.operations = [];
    this.latencies = {};
    this.opCounts = {};
    this.totalOpCount = 0;

    for (const operation of OPERATIONS) {
      const weight = parseFloat(this.options.get(operation));

      if (weight <= 0) {
        continue;
      }

      const shortOpName = operation.replace('proportion', '');

      this.operations.push(shortOpName);
      this.latencies[shortOpName] = [];
      this.totalWeight += weight;
      this.weights.push(this.totalWeight);
    }
  }

  getRandomKey() {
    return this.keys[random(this.keys.length - 1)];
  }

  loadKeys() {
    return this.database
      .run(`SELECT u.id FROM ${this.options.get('table')} u`)
      .then(data => data[0].map(row => row[0].value))
      .then(keys => (this.keys = keys));
  }

  run() {
    const operationCount = parseInt(this.options.get('operationcount'));
    const end = timeSpan();

    for (let i = 0; i < operationCount; i++) {
      const randomWeight = Math.random() * this.totalWeight;

      for (let j = 0; j < this.weights.length; j++) {
        const weight = this.weights[j];
        const operation = this.operations[j];

        if (randomWeight <= weight) {
          this.queue.add(() => this.runOperation(operation));
          break;
        }
      }
    }

    return this.queue.onIdle().then(() => (this.duration = end()));
  }

  runOperation(operation) {
    if (typeof this[operation] !== 'function') {
      throw new Error(`unsupported operation: ${operation.type}`);
    }

    const end = timeSpan();

    return this[operation]().then(() => this.latencies[operation].push(end()));
  }

  read() {
    const tableName = this.options.get('table');
    const id = this.getRandomKey();
    const query = `SELECT u.* FROM ${tableName} u WHERE u.id="${id}"`;

    return this.database.run(query, {readOnly: true});
  }

  update() {
    const tableName = this.options.get('table');
    const id = this.getRandomKey();
    const field = `field${random(9)}`;
    const value = crypto.randomBytes(100).toString('hex');

    return this.database.runTransactionAsync(transaction => {
      transaction.update(tableName, {id, [field]: value});
      return transaction.commit();
    });
  }
}

module.exports = Workload;
