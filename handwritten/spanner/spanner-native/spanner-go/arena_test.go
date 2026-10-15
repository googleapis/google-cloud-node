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
	"math"
	"testing"

	"cloud.google.com/go/spanner/sharedcore"
)

func TestBatchArenaRoundTrip(t *testing.T) {
	sb := &sharedcore.StreamBatch{
		Rows: [][]sharedcore.SpannerValue{
			{
				{Kind: sharedcore.KindNull},
				{Kind: sharedcore.KindBool, BoolVal: true},
				{Kind: sharedcore.KindFloat64, Float64Val: math.Pi},
				{Kind: sharedcore.KindFloat32, Float64Val: 1.5},
				{Kind: sharedcore.KindTimestamp, SecVal: 1700000000, NanoVal: 123456789},
				{Kind: sharedcore.KindString, StrVal: "hello-arena"},
				{Kind: sharedcore.KindBytes, BytesVal: []byte{0xde, 0xad, 0xbe, 0xef}},
				{
					Kind: sharedcore.KindArray,
					Children: []sharedcore.SpannerValue{
						{Kind: sharedcore.KindString, StrVal: "elem-0"},
						{Kind: sharedcore.KindNull},
						{Kind: sharedcore.KindString, StrVal: "elem-2"},
					},
				},
				{
					Kind: sharedcore.KindStruct,
					Children: []sharedcore.SpannerValue{
						{Kind: sharedcore.KindString, StrVal: "struct-field-a"},
						{
							Kind: sharedcore.KindArray,
							Children: []sharedcore.SpannerValue{
								{Kind: sharedcore.KindBool, BoolVal: false},
								{Kind: sharedcore.KindBool, BoolVal: true},
							},
						},
					},
				},
			},
		},
	}

	gotRows, totalCells, totalBytes := decodeBatchForTest(sb)
	// 9 top-level + 3 array children + 2 struct children + 2 nested array children = 16 cells
	if totalCells != 16 {
		t.Fatalf("totalCells = %d, want 16", totalCells)
	}
	wantBytes := len("hello-arena") + 4 + len("elem-0") + len("elem-2") + len("struct-field-a")
	if totalBytes != wantBytes {
		t.Fatalf("totalBytes = %d, want %d", totalBytes, wantBytes)
	}
	if len(gotRows) != 1 || len(gotRows[0]) != 9 {
		t.Fatalf("unexpected row dimensions: %d x %d", len(gotRows), len(gotRows[0]))
	}

	r := gotRows[0]
	if r[0].Kind != sharedcore.KindNull {
		t.Errorf("col 0 = %+v, want KindNull", r[0])
	}
	if r[1].Kind != sharedcore.KindBool || !r[1].BoolVal {
		t.Errorf("col 1 = %+v, want true", r[1])
	}
	if r[2].Kind != sharedcore.KindFloat64 || r[2].Float64Val != math.Pi {
		t.Errorf("col 2 = %+v, want Pi", r[2])
	}
	if r[3].Kind != sharedcore.KindFloat32 || r[3].Float64Val != 1.5 {
		t.Errorf("col 3 = %+v, want 1.5", r[3])
	}
	if r[4].Kind != sharedcore.KindTimestamp || r[4].SecVal != 1700000000 || r[4].NanoVal != 123456789 {
		t.Errorf("col 4 = %+v, want (1700000000, 123456789)", r[4])
	}
	if r[5].Kind != sharedcore.KindString || r[5].StrVal != "hello-arena" {
		t.Errorf("col 5 = %+v, want hello-arena", r[5])
	}
	if r[6].Kind != sharedcore.KindBytes || !bytes.Equal(r[6].BytesVal, []byte{0xde, 0xad, 0xbe, 0xef}) {
		t.Errorf("col 6 = %+v, want deadbeef", r[6])
	}
	if r[7].Kind != sharedcore.KindArray || len(r[7].Children) != 3 || r[7].Children[2].StrVal != "elem-2" {
		t.Errorf("col 7 = %+v, want 3-element array", r[7])
	}
	if r[8].Kind != sharedcore.KindStruct || len(r[8].Children) != 2 || len(r[8].Children[1].Children) != 2 {
		t.Errorf("col 8 = %+v, want nested struct+array", r[8])
	}
}

func TestShardedHeaderCacheMultiWorker(t *testing.T) {
	se := &serviceEntry{}
	workerHeaders := []string{
		"x-goog-request-params:session=projects%2Fp%2Finstances%2Fi%2Fdatabases%2Fd%2Fsessions%2Fworker-1\ngoogle-cloud-resource-prefix:projects/p/instances/i/databases/d",
		"x-goog-request-params:session=projects%2Fp%2Finstances%2Fi%2Fdatabases%2Fd%2Fsessions%2Fworker-2\ngoogle-cloud-resource-prefix:projects/p/instances/i/databases/d",
		"x-goog-request-params:session=projects%2Fp%2Finstances%2Fi%2Fdatabases%2Fd%2Fsessions%2Fworker-3\ngoogle-cloud-resource-prefix:projects/p/instances/i/databases/d",
	}

	initial := make([]*cachedHeaderEntry, len(workerHeaders))
	for i, h := range workerHeaders {
		initial[i] = se.resolveHeaders(h)
		if initial[i] == nil || len(initial[i].outgoingMD) == 0 {
			t.Fatalf("resolveHeaders(%d) returned nil or empty outgoingMD", i)
		}
	}

	// Interleave lookups across all 3 workers and verify 100% cache hit (identical pointer).
	for round := 0; round < 100; round++ {
		for i, h := range workerHeaders {
			got := se.resolveHeaders(h)
			if got != initial[i] {
				t.Fatalf("round %d worker %d: expected cached pointer %p, got %p (cache thrashing!)", round, i, initial[i], got)
			}
		}
	}
}

