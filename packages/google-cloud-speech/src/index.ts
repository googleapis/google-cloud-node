// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {ImprovedStreamingClient} from './helpers';
import * as v1p1beta1 from './v1p1beta1';
import * as v1 from './v1';

// The following code is adapted from http://www.typescriptlang.org/docs/handbook/mixins.html
// tslint:disable-next-line no-any
Object.defineProperty(
  v1.SpeechClient.prototype,
  'streamingRecognize',
  Object.getOwnPropertyDescriptor(
    ImprovedStreamingClient.prototype,
    'streamingRecognize'
  )!
);
Object.defineProperty(
  v1p1beta1.SpeechClient.prototype,
  'streamingRecognize',
  Object.getOwnPropertyDescriptor(
    ImprovedStreamingClient.prototype,
    'streamingRecognize'
  )!
);

const SpeechClient = v1.SpeechClient;
type SpeechClient = v1.SpeechClient;
export {v1, v1p1beta1, SpeechClient};
// For compatibility with JavaScript libraries we need to provide this default export:
// tslint:disable-next-line no-default-export
export default {v1, v1p1beta1, SpeechClient};
import * as protos from '../protos/protos';
export {protos};
