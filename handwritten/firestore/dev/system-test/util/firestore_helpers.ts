// Copyright 2026 Google LLC
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

import {Settings} from '@google-cloud/firestore';
import {CollectionReference, Firestore, setLogFunction} from '../../src';
import {autoId} from '../../src/util';

const version = require('../../../package.json').version;

export class DeferredPromise<T> {
  resolve: Function;
  reject: Function;
  promise: Promise<T> | null;

  constructor() {
    this.resolve = () => {
      throw new Error('DeferredPromise.resolve has not been initialized');
    };
    this.reject = () => {
      throw new Error('DeferredPromise.reject has not been initialized');
    };
    this.promise = null;
  }
}

const firestoreEnv: {
  [key: string]: string | undefined;
} = {};
for (const key in process.env) {
  if (key.startsWith('FIRESTORE')) {
    firestoreEnv[key] = process.env[key];
  }
}
console.log(
  `Running system tests with environment variables:\n ${JSON.stringify(
    firestoreEnv,
    null,
    2,
  )}`,
);

if (process.env.NODE_ENV === 'DEBUG') {
  setLogFunction(console.log);
}

export function getTestDb(settings: Settings = {}): Firestore {
  const internalSettings: Settings = {};
  if (process.env.FIRESTORE_DATABASE_ID) {
    internalSettings.databaseId = process.env.FIRESTORE_DATABASE_ID;
  } else if (!process.env.FIRESTORE_EMULATOR_HOST) {
    internalSettings.databaseId = 'firestore-standard';
  }

  if (process.env.FIRESTORE_TARGET_BACKEND) {
    switch (process.env.FIRESTORE_TARGET_BACKEND.toUpperCase()) {
      case 'PROD': {
        break;
      }
      case 'QA': {
        internalSettings.host = 'staging-firestore.sandbox.googleapis.com';
        break;
      }
      case 'NIGHTLY': {
        internalSettings.host = 'test-firestore.sandbox.googleapis.com';
        break;
      }
      default: {
        break;
      }
    }
  }

  return new Firestore({
    ...internalSettings,
    ...settings, // caller settings take precedent over internal settings
  });
}

export function getTestRoot(settings: Settings = {}): CollectionReference {
  return getTestDb(settings).collection(`node_${version}_${autoId()}`);
}
