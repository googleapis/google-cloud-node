// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

function main() {
  // [START proto3_json_serializer_quickstart]
  function quickstart() {
    const assert = require('assert');
    const path = require('path');
    const protobuf = require('protobufjs');
    const serializer = require('proto3-json-serializer');

    // We'll take sample protos from google-proto-files but the code will work with any protos
    const protos = require('google-proto-files');

    // Load some proto file
    const rpcProtos = protos.getProtoPath('rpc');
    const root = protobuf.loadSync([
      path.join(rpcProtos, 'status.proto'),
      path.join(rpcProtos, 'error_details.proto'),
    ]);
    const Status = root.lookupType('google.rpc.Status');

    // If you have a protobuf object that follows proto3 JSON syntax
    // https://developers.google.com/protocol-buffers/docs/proto3#json
    // (this is an example of google.rpc.Status message in JSON)
    const json = {
      code: 3,
      message: 'Test error message',
      details: [
        {
          '@type': 'google.rpc.BadRequest',
          fieldViolations: [
            {
              field: 'field',
              description: 'must not be null',
            },
          ],
        },
      ],
    };

    // You can deserialize it into a protobuf.js object:
    const deserialized = serializer.fromProto3JSON(Status, json);
    console.log(deserialized);

    // And serialize it back
    const serialized = serializer.toProto3JSON(deserialized);
    assert.deepStrictEqual(serialized, json);

    console.log('Quickstart completed');
  }
  // [END proto3_json_serializer_quickstart]

  quickstart();
}

main();
