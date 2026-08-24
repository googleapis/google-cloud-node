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
	"os"
	"strings"
	"testing"

	spannerpb "cloud.google.com/go/spanner/apiv1/spannerpb"
	"google.golang.org/grpc/mem"
	"google.golang.org/protobuf/proto"
	"google.golang.org/protobuf/types/known/emptypb"
	"google.golang.org/protobuf/types/known/structpb"
)

func TestUnmarshalVTRealPartialResultSet(t *testing.T) {
	wire, err := os.ReadFile("testdata/partial_result_set_real.bin")
	if err != nil {
		t.Fatal(err)
	}

	want := new(spannerpb.PartialResultSet)
	if err := proto.Unmarshal(wire, want); err != nil {
		t.Fatal(err)
	}
	got := new(spannerpb.PartialResultSet)
	if err := got.UnmarshalVT(wire); err != nil {
		t.Fatal(err)
	}
	if !proto.Equal(got, want) {
		t.Fatalf("real response decoded differently:\nvt: %v\nreflection: %v", got, want)
	}
	if len(got.GetValues()) == 0 {
		t.Fatal("captured real response has no values")
	}

	value := got.GetValues()[len(got.GetValues())-1].GetStringValue()
	for i := range wire {
		wire[i] = 0xff
	}
	if gotValue := got.GetValues()[len(got.GetValues())-1].GetStringValue(); gotValue != value {
		t.Fatalf("safe decode retained receive buffer: got %q, want %q", gotValue, value)
	}
}

func TestVTSafeCodecUsesGeneratedPartialResultSetDecoder(t *testing.T) {
	if _, ok := any(new(spannerpb.PartialResultSet)).(interface {
		UnmarshalVT([]byte) error
	}); !ok {
		t.Fatal("PartialResultSet does not implement generated UnmarshalVT")
	}

	want := strings.Repeat("safe-string-", 200)
	wire, err := proto.Marshal(&spannerpb.PartialResultSet{
		Values: []*structpb.Value{structpb.NewStringValue(want)},
	})
	if err != nil {
		t.Fatal(err)
	}

	got := new(spannerpb.PartialResultSet)
	if err := (vtSafeCodec{}).Unmarshal(mem.BufferSlice{mem.SliceBuffer(wire)}, got); err != nil {
		t.Fatal(err)
	}
	for i := range wire {
		wire[i] = 0xff
	}
	if value := got.GetValues()[0].GetStringValue(); value != want {
		t.Fatalf("decoded string changed with receive buffer: got %q, want %q", value, want)
	}
}

func TestVTSafeCodecReflectionFallback(t *testing.T) {
	codec := vtSafeCodec{}
	want := new(emptypb.Empty)
	wire, err := codec.Marshal(want)
	if err != nil {
		t.Fatal(err)
	}
	got := new(emptypb.Empty)
	if err := codec.Unmarshal(wire, got); err != nil {
		t.Fatal(err)
	}
	if !proto.Equal(got, want) {
		t.Fatalf("fallback round trip = %v, want %v", got, want)
	}
	if name := codec.Name(); name != "" {
		t.Fatalf("codec name = %q, want empty", name)
	}
}

func BenchmarkPartialResultSetDecode(b *testing.B) {
	values := make([]*structpb.Value, 1000)
	for i := range values {
		values[i] = structpb.NewStringValue("benchmark-value")
	}
	wire, err := proto.Marshal(&spannerpb.PartialResultSet{Values: values})
	if err != nil {
		b.Fatal(err)
	}

	b.Run("reflection", func(b *testing.B) {
		b.ReportAllocs()
		for i := 0; i < b.N; i++ {
			msg := new(spannerpb.PartialResultSet)
			if err := proto.Unmarshal(wire, msg); err != nil {
				b.Fatal(err)
			}
		}
	})
	b.Run("vtprotobuf-safe", func(b *testing.B) {
		b.ReportAllocs()
		codec := vtSafeCodec{}
		buffers := mem.BufferSlice{mem.SliceBuffer(wire)}
		for i := 0; i < b.N; i++ {
			msg := new(spannerpb.PartialResultSet)
			if err := codec.Unmarshal(buffers, msg); err != nil {
				b.Fatal(err)
			}
		}
	})
	b.Run("vtprotobuf-raw-values", func(b *testing.B) {
		b.ReportAllocs()
		for i := 0; i < b.N; i++ {
			raw, err := decodePartialResultSetRaw(wire)
			if err != nil {
				b.Fatal(err)
			}
			count := 0
			if err := raw.forEachValue(func([]byte) error {
				count++
				return nil
			}); err != nil {
				b.Fatal(err)
			}
			if count != len(values) {
				b.Fatalf("value count = %d, want %d", count, len(values))
			}
		}
	})
}
