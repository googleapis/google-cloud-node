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

import {Status} from 'google-gax';
import * as proto from '../../protos/firestore_v1_proto_api';
import {create, document, remove, set, update, updateMask} from './helpers';

import api = proto.google.firestore.v1;

export function createRequest(requests: api.IWrite[]): api.IBatchWriteRequest {
  return {
    writes: requests,
  };
}

export function successResponse(
  updateTimeSeconds: number,
): api.IBatchWriteResponse {
  return {
    writeResults: [
      {
        updateTime: {
          nanos: 0,
          seconds: updateTimeSeconds,
        },
      },
    ],
    status: [{code: Status.OK}],
  };
}

export function failedResponse(
  code = Status.DEADLINE_EXCEEDED,
): api.IBatchWriteResponse {
  return {
    writeResults: [
      {
        updateTime: null,
      },
    ],
    status: [{code}],
  };
}

export function mergeResponses(
  responses: api.IBatchWriteResponse[],
): api.IBatchWriteResponse {
  return {
    writeResults: responses.map(v => v.writeResults![0]),
    status: responses.map(v => v.status![0]),
  };
}

export function setOp(doc: string, value: string): api.IWrite {
  return set({
    document: document(doc, 'foo', value),
  }).writes![0];
}

export function updateOp(doc: string, value: string): api.IWrite {
  return update({
    document: document(doc, 'foo', value),
    mask: updateMask('foo'),
  }).writes![0];
}

export function createOp(doc: string, value: string): api.IWrite {
  return create({
    document: document(doc, 'foo', value),
  }).writes![0];
}

export function deleteOp(doc: string): api.IWrite {
  return remove(doc).writes![0];
}
