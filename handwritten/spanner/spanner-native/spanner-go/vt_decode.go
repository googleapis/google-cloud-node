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
	"google.golang.org/grpc/mem"
	"google.golang.org/protobuf/proto"
)

var _ encoding.CodecV2 = vtSafeCodec{}

type vtMarshaler interface {
	MarshalVT() ([]byte, error)
}

type vtUnmarshaler interface {
	UnmarshalVT([]byte) error
}

// vtSafeCodec preserves the standard protobuf wire content type while routing
// PartialResultSet decoding through generated vtprotobuf code. UnmarshalVT
// copies strings and byte slices, so decoded values never alias gRPC's receive
// buffer while rows cross the C and N-API boundaries.
type vtSafeCodec struct{}

func (vtSafeCodec) Marshal(v any) (mem.BufferSlice, error) {
	if msg, ok := v.(vtMarshaler); ok {
		buf, err := msg.MarshalVT()
		if err != nil {
			return nil, err
		}
		return mem.BufferSlice{mem.SliceBuffer(buf)}, nil
	}
	msg, ok := v.(proto.Message)
	if !ok {
		return nil, fmt.Errorf("spanner vt codec: cannot marshal %T", v)
	}
	buf, err := proto.Marshal(msg)
	if err != nil {
		return nil, err
	}
	return mem.BufferSlice{mem.SliceBuffer(buf)}, nil
}

func (vtSafeCodec) Unmarshal(data mem.BufferSlice, v any) error {
	buf := data.MaterializeToBuffer(mem.DefaultBufferPool())
	defer buf.Free()
	wire := buf.ReadOnlyData()

	switch msg := v.(type) {
	case *spannerpb.PartialResultSet:
		proto.Reset(msg)
		return msg.UnmarshalVT(wire)
	case vtUnmarshaler:
		if pm, ok := v.(proto.Message); ok {
			proto.Reset(pm)
		}
		return msg.UnmarshalVT(wire)
	case proto.Message:
		return proto.Unmarshal(wire, msg)
	default:
		return fmt.Errorf("spanner vt codec: cannot unmarshal into %T", v)
	}
}

func (vtSafeCodec) Name() string { return "" }
