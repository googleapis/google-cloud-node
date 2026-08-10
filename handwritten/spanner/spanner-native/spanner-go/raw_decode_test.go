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
	"testing"

	spannerpb "cloud.google.com/go/spanner/apiv1/spannerpb"
	vtstructpb "github.com/planetscale/vtprotobuf/types/known/structpb"
	"google.golang.org/protobuf/proto"
	"google.golang.org/protobuf/types/known/structpb"
)

func TestDecodePartialResultSetRawPreservesEnvelopeAndValueWire(t *testing.T) {
	want := &spannerpb.PartialResultSet{
		Metadata: &spannerpb.ResultSetMetadata{
			RowType: &spannerpb.StructType{Fields: []*spannerpb.StructType_Field{
				{Name: "string_col", Type: &spannerpb.Type{Code: spannerpb.TypeCode_STRING}},
				{Name: "number_col", Type: &spannerpb.Type{Code: spannerpb.TypeCode_FLOAT64}},
			}},
		},
		Values: []*structpb.Value{
			structpb.NewStringValue("raw-value"),
			structpb.NewNumberValue(12.5),
		},
		ChunkedValue: true,
		ResumeToken:  []byte("resume-token"),
	}
	wire, err := proto.Marshal(want)
	if err != nil {
		t.Fatal(err)
	}

	raw, err := decodePartialResultSetRaw(wire)
	if err != nil {
		t.Fatal(err)
	}
	for i := range wire {
		wire[i] = 0xff
	}
	if !proto.Equal(raw.metadata, want.Metadata) {
		t.Fatalf("metadata = %v, want %v", raw.metadata, want.Metadata)
	}
	if !raw.chunkedValue {
		t.Fatal("chunkedValue = false, want true")
	}
	if !bytes.Equal(raw.resumeToken, want.ResumeToken) {
		t.Fatalf("resumeToken = %q, want %q", raw.resumeToken, want.ResumeToken)
	}

	var got []*structpb.Value
	if err := raw.forEachValue(func(valueWire []byte) error {
		value := new(structpb.Value)
		if err := (*vtstructpb.Value)(value).UnmarshalVT(valueWire); err != nil {
			return err
		}
		got = append(got, value)
		return nil
	}); err != nil {
		t.Fatal(err)
	}
	if len(got) != len(want.Values) {
		t.Fatalf("value count = %d, want %d", len(got), len(want.Values))
	}
	for i := range got {
		if !proto.Equal(got[i], want.Values[i]) {
			t.Errorf("value %d = %v, want %v", i, got[i], want.Values[i])
		}
	}
}

func TestMergeRawProtoValuesMatchesChunkedStringSemantics(t *testing.T) {
	head, err := proto.Marshal(structpb.NewStringValue("chunked-"))
	if err != nil {
		t.Fatal(err)
	}
	tail, err := proto.Marshal(structpb.NewStringValue("value"))
	if err != nil {
		t.Fatal(err)
	}
	mergedWire, err := mergeRawProtoValues(head, tail)
	if err != nil {
		t.Fatal(err)
	}
	merged := new(structpb.Value)
	if err := (*vtstructpb.Value)(merged).UnmarshalVT(mergedWire); err != nil {
		t.Fatal(err)
	}
	if got, want := merged.GetStringValue(), "chunked-value"; got != want {
		t.Fatalf("merged value = %q, want %q", got, want)
	}
}

func TestRawVTCodecTransfersPartialResultSetWithoutMaterializingValues(t *testing.T) {
	wire, err := proto.Marshal(&spannerpb.PartialResultSet{
		Values: []*structpb.Value{structpb.NewStringValue("wire-only")},
	})
	if err != nil {
		t.Fatal(err)
	}
	codec := new(rawVTCodec)
	destination := new(spannerpb.PartialResultSet)
	if err := codec.Unmarshal(wire, destination); err != nil {
		t.Fatal(err)
	}
	if len(destination.Values) != 0 {
		t.Fatalf("materialized Value count = %d, want 0", len(destination.Values))
	}
	raw, ok := codec.take()
	if !ok {
		t.Fatal("codec did not transfer raw PartialResultSet")
	}
	if raw.valueCount != 1 {
		t.Fatalf("raw value count = %d, want 1", raw.valueCount)
	}
	if _, ok := codec.take(); ok {
		t.Fatal("codec retained raw message after ownership transfer")
	}
}
