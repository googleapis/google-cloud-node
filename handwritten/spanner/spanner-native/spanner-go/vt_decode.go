// Copyright 2026 Google LLC
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

package main

import (
	"fmt"

	spannerpb "cloud.google.com/go/spanner/apiv1/spannerpb"
	"google.golang.org/grpc/encoding"
	"google.golang.org/protobuf/proto"
)

var _ encoding.Codec = vtSafeCodec{}

// vtSafeCodec preserves the standard protobuf wire content type while routing
// PartialResultSet decoding through generated vtprotobuf code. UnmarshalVT
// copies strings and byte slices, so decoded values never alias gRPC's receive
// buffer while rows cross the C and N-API boundaries.
//
// gRPC v1.63 uses encoding.Codec rather than CodecV2. The []byte handed to
// Unmarshal is owned by gRPC; safe VT decoding requires no retained-buffer
// machinery.
type vtSafeCodec struct{}

func (vtSafeCodec) Marshal(v any) ([]byte, error) {
	msg, ok := v.(proto.Message)
	if !ok {
		return nil, fmt.Errorf("spanner vt codec: cannot marshal %T", v)
	}
	return proto.Marshal(msg)
}

func (vtSafeCodec) Unmarshal(data []byte, v any) error {
	if msg, ok := v.(*spannerpb.PartialResultSet); ok {
		proto.Reset(msg)
		return msg.UnmarshalVT(data)
	}
	msg, ok := v.(proto.Message)
	if !ok {
		return fmt.Errorf("spanner vt codec: cannot unmarshal into %T", v)
	}
	return proto.Unmarshal(data, msg)
}

func (vtSafeCodec) Name() string { return "proto" }
