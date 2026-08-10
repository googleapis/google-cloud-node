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
	"bytes"
	"fmt"
	"io"

	spannerpb "cloud.google.com/go/spanner/apiv1/spannerpb"
	"github.com/planetscale/vtprotobuf/protohelpers"
	vtstructpb "github.com/planetscale/vtprotobuf/types/known/structpb"
	"google.golang.org/grpc/encoding"
	"google.golang.org/grpc/mem"
	"google.golang.org/protobuf/proto"
	"google.golang.org/protobuf/types/known/structpb"
)

var _ encoding.CodecV2 = (*rawVTCodec)(nil)

// rawVTCodec is created per ExecuteStreamingSql stream. Recv calls are
// serialized by gRPC, so pending needs no synchronization.
type rawVTCodec struct {
	pending    rawPartialResultSet
	hasPending bool
}

func (*rawVTCodec) Marshal(v any) (mem.BufferSlice, error) {
	return (vtSafeCodec{}).Marshal(v)
}

func (c *rawVTCodec) Unmarshal(data mem.BufferSlice, v any) error {
	buf := data.MaterializeToBuffer(mem.DefaultBufferPool())
	defer buf.Free()
	wire := buf.ReadOnlyData()

	switch msg := v.(type) {
	case *spannerpb.PartialResultSet:
		proto.Reset(msg)
		raw, err := decodePartialResultSetRaw(wire)
		if err != nil {
			return err
		}
		c.pending = raw
		c.hasPending = true
		return nil
	case vtUnmarshaler:
		if pm, ok := v.(proto.Message); ok {
			proto.Reset(pm)
		}
		return msg.UnmarshalVT(wire)
	case proto.Message:
		return proto.Unmarshal(wire, msg)
	default:
		return fmt.Errorf("spanner raw vt codec: cannot unmarshal into %T", v)
	}
}

func (*rawVTCodec) Name() string { return "" }

func (c *rawVTCodec) take() (rawPartialResultSet, bool) {
	if !c.hasPending {
		return rawPartialResultSet{}, false
	}
	raw := c.pending
	c.pending = rawPartialResultSet{}
	c.hasPending = false
	return raw, true
}

// rawPartialResultSet owns one copied gRPC message. Column values remain wire
// slices into data; only the small result-set envelope is decoded.
type rawPartialResultSet struct {
	data         []byte
	metadata     *spannerpb.ResultSetMetadata
	chunkedValue bool
	resumeToken  []byte
	valueCount   int
}

// decodePartialResultSetRaw copies the borrowed encoding.Codec input once,
// then decodes only fields needed by stream assembly. gRPC v1.63 does not
// expose ref-counted receive buffers through encoding.Codec, so retaining its
// input without this copy would violate the codec lifetime contract.
func decodePartialResultSetRaw(data []byte) (rawPartialResultSet, error) {
	raw := rawPartialResultSet{data: bytes.Clone(data)}
	if err := raw.scan(func([]byte) error {
		raw.valueCount++
		return nil
	}); err != nil {
		return rawPartialResultSet{}, err
	}
	return raw, nil
}

func (r *rawPartialResultSet) scan(onValue func([]byte) error) error {
	for index := 0; index < len(r.data); {
		fieldStart := index
		wire, err := consumeRawVarint(r.data, &index)
		if err != nil {
			return err
		}
		fieldNumber := int32(wire >> 3)
		wireType := int(wire & 7)
		if fieldNumber <= 0 {
			return fmt.Errorf("proto: PartialResultSet: illegal tag %d", fieldNumber)
		}

		switch fieldNumber {
		case 1: // metadata
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Metadata", wireType)
			}
			field, err := consumeRawBytes(r.data, &index)
			if err != nil {
				return err
			}
			if r.metadata == nil {
				r.metadata = new(spannerpb.ResultSetMetadata)
			}
			if err := r.metadata.UnmarshalVT(field); err != nil {
				return err
			}
		case 2: // values
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Values", wireType)
			}
			field, err := consumeRawBytes(r.data, &index)
			if err != nil {
				return err
			}
			if onValue != nil {
				if err := onValue(field); err != nil {
					return err
				}
			}
		case 3: // chunked_value
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field ChunkedValue", wireType)
			}
			value, err := consumeRawVarint(r.data, &index)
			if err != nil {
				return err
			}
			r.chunkedValue = value != 0
		case 4: // resume_token
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ResumeToken", wireType)
			}
			field, err := consumeRawBytes(r.data, &index)
			if err != nil {
				return err
			}
			r.resumeToken = field
		default:
			skipped, err := protohelpers.Skip(r.data[fieldStart:])
			if err != nil {
				return err
			}
			if skipped < 0 || fieldStart+skipped < 0 {
				return protohelpers.ErrInvalidLength
			}
			if fieldStart+skipped > len(r.data) {
				return io.ErrUnexpectedEOF
			}
			index = fieldStart + skipped
		}
	}
	return nil
}

func (r *rawPartialResultSet) forEachValue(fn func([]byte) error) error {
	if fn == nil {
		return nil
	}
	// Envelope fields were decoded by decodePartialResultSetRaw. Avoid decoding
	// metadata again while walking value fields.
	for index := 0; index < len(r.data); {
		fieldStart := index
		wire, err := consumeRawVarint(r.data, &index)
		if err != nil {
			return err
		}
		fieldNumber := int32(wire >> 3)
		wireType := int(wire & 7)
		if fieldNumber == 2 {
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Values", wireType)
			}
			field, err := consumeRawBytes(r.data, &index)
			if err != nil {
				return err
			}
			if err := fn(field); err != nil {
				return err
			}
			continue
		}
		skipped, err := protohelpers.Skip(r.data[fieldStart:])
		if err != nil {
			return err
		}
		if skipped < 0 || fieldStart+skipped < 0 {
			return protohelpers.ErrInvalidLength
		}
		if fieldStart+skipped > len(r.data) {
			return io.ErrUnexpectedEOF
		}
		index = fieldStart + skipped
	}
	return nil
}

func consumeRawVarint(data []byte, index *int) (uint64, error) {
	var value uint64
	for shift := uint(0); ; shift += 7 {
		if shift >= 64 {
			return 0, protohelpers.ErrIntOverflow
		}
		if *index >= len(data) {
			return 0, io.ErrUnexpectedEOF
		}
		b := data[*index]
		*index++
		value |= uint64(b&0x7f) << shift
		if b < 0x80 {
			return value, nil
		}
	}
}

func consumeRawBytes(data []byte, index *int) ([]byte, error) {
	length, err := consumeRawVarint(data, index)
	if err != nil {
		return nil, err
	}
	if length > uint64(len(data)-*index) {
		return nil, io.ErrUnexpectedEOF
	}
	postIndex := *index + int(length)
	field := data[*index:postIndex]
	*index = postIndex
	return field, nil
}

// mergeRawProtoValues handles the rare chunked-value path. Ordinary cells
// never materialize structpb.Value. A chunked cell is safely VT-decoded,
// merged with existing semantics, and re-encoded as one raw wire value.
func mergeRawProtoValues(headWire, tailWire []byte) ([]byte, error) {
	head := new(structpb.Value)
	if err := (*vtstructpb.Value)(head).UnmarshalVT(headWire); err != nil {
		return nil, err
	}
	tail := new(structpb.Value)
	if err := (*vtstructpb.Value)(tail).UnmarshalVT(tailWire); err != nil {
		return nil, err
	}
	return proto.Marshal(mergeProtoValues(head, tail))
}
