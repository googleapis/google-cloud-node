package main

/*
#include <stdlib.h>
#include <stdint.h>

typedef enum {
    CELL_KIND_NULL = 0,
    CELL_KIND_BOOL = 1,
    CELL_KIND_NUMBER = 2,
    CELL_KIND_STRING = 3,
    CELL_KIND_PROTO_VALUE = 4
} CellKind;

typedef struct {
    uint8_t kind;
    uint8_t bool_val;
    uint16_t type_code;
    uint32_t str_len;
    double number_val;
    const char* str_val;
} CSpannerCell;

typedef struct {
    int format; // 0 = JSON string, 1 = Direct Native Cells
    char* json_rows;
    CSpannerCell* cells;
    int row_count;
    int col_count;
    char* string_arena;
    char* server_timing;
    int attempt_count;
    char* error_msg;
    int error_code;
    int is_last;
    // Serialized google.spanner.v1.ResultSetMetadata. Emitted exactly once per
    // stream (on the first batch) so the Node layer can build column decoders
    // and produce stock-compatible Row objects. Zero per-row cost.
    void* metadata_pb;
    int metadata_len;
} CSpannerBatch;

typedef void (*StreamDataCallback)(void* user_data, CSpannerBatch* batch);

static void bridge_callback(
    StreamDataCallback cb,
    void* user_data,
    CSpannerBatch* batch
) {
    if (cb != NULL) {
        cb(user_data, batch);
    }
}

typedef struct {
    void* resp_pb;
    int resp_len;
    void* tx_pb;
    int tx_len;
    char* error_msg;
    int error_code;
    void* retry_info_pb;
    int retry_info_len;
} CUnaryResponse;

typedef void (*UnaryCallback)(void* user_data, CUnaryResponse* resp);

static void bridge_unary_callback(
    UnaryCallback cb,
    void* user_data,
    CUnaryResponse* resp
) {
    if (cb != NULL) {
        cb(user_data, resp);
    }
}

typedef enum {
    MUTATION_OP_INSERT = 0,
    MUTATION_OP_UPDATE = 1,
    MUTATION_OP_INSERT_OR_UPDATE = 2,
    MUTATION_OP_REPLACE = 3,
    MUTATION_OP_DELETE = 4,
    MUTATION_OP_RAW_PB = 5
} MutationOp;

typedef struct {
    int op;
    const char* table;
    int col_count;
    const char** columns;
    int row_count;
    CSpannerCell* cells;
    const uint8_t* raw_pb;
    int raw_pb_len;
} CSpannerMutation;

typedef struct {
    const char* routing_key;
    const char** meta_keys;
    const char** meta_vals;
    int meta_count;
    const uint8_t* base_req_pb;
    int base_req_len;
    int inline_begin;
    const uint8_t* begin_req_pb;
    int begin_req_len;
    int is_mux_rw;
    int mutation_count;
    CSpannerMutation* mutations;
} CSpannerCommitRequest;

typedef struct {
    const char* sql;
    int param_count;
    const char** param_names;
    CSpannerCell* param_cells;
    const uint8_t** param_types_pb;
    int* param_types_len;
} CSpannerStatement;

typedef struct {
    const char* routing_key;
    const char** meta_keys;
    const char** meta_vals;
    int meta_count;
    const uint8_t* base_req_pb;
    int base_req_len;
    int stmt_count;
    CSpannerStatement* statements;
} CSpannerBatchDmlRequest;
*/
import "C"

import (
	"bytes"
	"fmt"
	"io"
	"os"
	"strings"
	"sync"
	"unsafe"

	spannerpb "cloud.google.com/go/spanner/apiv1/spannerpb"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/metadata"
	"google.golang.org/grpc/status"
	"google.golang.org/protobuf/encoding/protowire"
	"google.golang.org/protobuf/proto"
	"google.golang.org/protobuf/types/known/structpb"
)

type goSchemaCacheEntry struct {
	fieldCount int
	bytes      []byte
}

var (
	clientRegistryMutex sync.RWMutex
	clientRegistry      = make(map[uintptr]*CoreClient)
	nextClientId        uintptr = 1
	logEncodingOnce     sync.Once
	logFirstErrOnce     sync.Once
	schemaBytesCache    sync.Map
)

func registerClient(client *CoreClient) uintptr {
	clientRegistryMutex.Lock()
	defer clientRegistryMutex.Unlock()
	id := nextClientId
	nextClientId++
	clientRegistry[id] = client
	return id
}

func getClient(id uintptr) *CoreClient {
	clientRegistryMutex.RLock()
	defer clientRegistryMutex.RUnlock()
	return clientRegistry[id]
}

func unregisterClient(id uintptr) *CoreClient {
	clientRegistryMutex.Lock()
	defer clientRegistryMutex.Unlock()
	client := clientRegistry[id]
	delete(clientRegistry, id)
	return client
}

//export InitGoCoreClient
func InitGoCoreClient(channelCount C.int, customEndpoint *C.char) C.uintptr_t {
	var ep string
	if customEndpoint != nil {
		ep = C.GoString(customEndpoint)
	}
	client, err := NewCoreClient(int(channelCount), ep)
	if err != nil {
		return 0
	}
	id := registerClient(client)
	return C.uintptr_t(id)
}

//export CloseGoCoreClient
func CloseGoCoreClient(handle C.uintptr_t) {
	client := unregisterClient(uintptr(handle))
	if client != nil {
		client.Close()
	}
}

func isDirectDeserializationEnabled() bool {
	// Defaults to true unless explicitly disabled with SPANNER_GO_DIRECT_DESERIALIZATION=false or 0
	val := os.Getenv("SPANNER_GO_DIRECT_DESERIALIZATION")
	enabled := val != "false" && val != "0"
	logEncodingOnce.Do(func() {
		if enabled {
			fmt.Println("[Spanner-Go] Direct native cells encoding is ACTIVE (bypassing JSON parsing)")
		} else {
			fmt.Println("[Spanner-Go] Legacy JSON parsing is ACTIVE")
		}
	})
	return enabled
}

func writeBatchJson(batch [][]*structpb.Value, rowType []*spannerpb.StructType_Field) *C.char {
	if len(batch) == 0 {
		return nil
	}
	var buf bytes.Buffer
	buf.WriteByte('[')
	for i, row := range batch {
		if i > 0 {
			buf.WriteByte(',')
		}
		buf.WriteByte('[')
		for j, cell := range row {
			if j > 0 {
				buf.WriteByte(',')
			}
			var fieldType *spannerpb.Type
			if j < len(rowType) {
				fieldType = rowType[j].Type
			}
			writeValueJson(&buf, cell, fieldType)
		}
		buf.WriteByte(']')
	}
	buf.WriteByte(']')
	return C.CString(buf.String())
}

func sendBatch(
	cb C.StreamDataCallback,
	userData unsafe.Pointer,
	batch [][]*structpb.Value,
	rowType []*spannerpb.StructType_Field,
	serverTiming string,
	attemptCount int,
	errMsg string,
	errCode int,
	isLast bool,
	metadataBytes []byte,
) {
	cBatch := (*C.CSpannerBatch)(C.malloc(C.size_t(unsafe.Sizeof(C.CSpannerBatch{}))))
	*cBatch = C.CSpannerBatch{}

	if isLast {
		cBatch.is_last = 1
	}
	cBatch.attempt_count = C.int(attemptCount)
	cBatch.error_code = C.int(errCode)

	if errMsg != "" {
		cBatch.error_msg = C.CString(errMsg)
		logFirstErrOnce.Do(func() {
			fmt.Fprintf(os.Stderr, "[Spanner-Go] ERROR: first Spanner RPC failed in Go shared core (code=%d): %s\n", errCode, errMsg)
		})
	}
	if serverTiming != "" {
		cBatch.server_timing = C.CString(serverTiming)
	}

	// Attach the serialized ResultSetMetadata if this is the first batch of the
	// stream. C.CBytes allocates with malloc; the N-API layer frees it.
	if len(metadataBytes) > 0 {
		cBatch.metadata_pb = C.CBytes(metadataBytes)
		cBatch.metadata_len = C.int(len(metadataBytes))
	}

	rowCount := len(batch)
	cBatch.row_count = C.int(rowCount)

	if rowCount > 0 {
		colCount := len(batch[0])
		cBatch.col_count = C.int(colCount)

		if isDirectDeserializationEnabled() {
			cBatch.format = 1 // Native cells

			totalCells := rowCount * colCount
			totalStringBytes := 0

			for _, row := range batch {
				for _, cell := range row {
					if cell != nil {
						if strVal, ok := cell.Kind.(*structpb.Value_StringValue); ok {
							totalStringBytes += len(strVal.StringValue)
						}
					}
				}
			}

			if totalCells > 0 {
				cBatch.cells = (*C.CSpannerCell)(C.malloc(C.size_t(totalCells) * C.size_t(unsafe.Sizeof(C.CSpannerCell{}))))
				cellsSlice := (*[1 << 28]C.CSpannerCell)(unsafe.Pointer(cBatch.cells))[:totalCells:totalCells]

				var arenaBytes []byte
				if totalStringBytes > 0 {
					cBatch.string_arena = (*C.char)(C.malloc(C.size_t(totalStringBytes)))
					arenaBytes = (*[1 << 28]byte)(unsafe.Pointer(cBatch.string_arena))[:totalStringBytes:totalStringBytes]
				}
				arenaOffset := 0

				for r, row := range batch {
					for c, val := range row {
						idx := r*colCount + c
						cell := &cellsSlice[idx]
						if val == nil {
							cell.kind = C.CELL_KIND_NULL
							continue
						}

						switch k := val.Kind.(type) {
						case *structpb.Value_NullValue:
							cell.kind = C.CELL_KIND_NULL
						case *structpb.Value_BoolValue:
							cell.kind = C.CELL_KIND_BOOL
							if k.BoolValue {
								cell.bool_val = 1
							} else {
								cell.bool_val = 0
							}
						case *structpb.Value_NumberValue:
							cell.kind = C.CELL_KIND_NUMBER
							cell.number_val = C.double(k.NumberValue)
						case *structpb.Value_StringValue:
							cell.kind = C.CELL_KIND_STRING
							strLen := len(k.StringValue)
							cell.str_len = C.uint32_t(strLen)
							if strLen > 0 {
								copy(arenaBytes[arenaOffset:arenaOffset+strLen], k.StringValue)
								cell.str_val = (*C.char)(unsafe.Pointer(&arenaBytes[arenaOffset]))
								arenaOffset += strLen
							} else {
								cell.str_val = nil
							}
						default:
							cell.kind = C.CELL_KIND_NULL
						}
					}
				}
			}
		} else {
			// Legacy JSON serialization
			cBatch.format = 0
			cBatch.json_rows = writeBatchJson(batch, rowType)
		}
	}

	C.bridge_callback(cb, userData, cBatch)
}

//export ExecuteStreamingSqlGo
func ExecuteStreamingSqlGo(
	handle C.uintptr_t,
	routingKey *C.char,
	metaKeys **C.char,
	metaVals **C.char,
	metaCount C.int,
	reqBytesPtr *C.char,
	reqLen C.int,
	skipMetadata C.int,
	cb C.StreamDataCallback,
	userData unsafe.Pointer,
) {
	client := getClient(uintptr(handle))
	if client == nil {
		sendBatch(cb, userData, nil, nil, "", 1, "Invalid or closed CoreClient handle", int(codes.InvalidArgument), true, nil)
		return
	}

	// Copy metadata headers
	count := int(metaCount)
	metaMap := make(map[string]string, count)
	if count > 0 && metaKeys != nil && metaVals != nil {
		keysSlice := (*[1 << 28]*C.char)(unsafe.Pointer(metaKeys))[:count:count]
		valsSlice := (*[1 << 28]*C.char)(unsafe.Pointer(metaVals))[:count:count]
		for i := 0; i < count; i++ {
			if keysSlice[i] != nil && valsSlice[i] != nil {
				k := C.GoString(keysSlice[i])
				v := C.GoString(valsSlice[i])
				metaMap[k] = v
			}
		}
	}

	// Copy request bytes
	length := int(reqLen)
	rawBytes := C.GoBytes(unsafe.Pointer(reqBytesPtr), C.int(length))

	// Execute gRPC streaming in a separate goroutine
	go func() {
		var lastResumeToken []byte
		attemptCount := 0

		var rowType []*spannerpb.StructType_Field
		var pendingValue *structpb.Value
		var currentRow []*structpb.Value
		batch := make([][]*structpb.Value, 0, 100)

		// Serialized ResultSetMetadata, handed to Node on the first batch only.
		// takeMetadata() returns it once and then always returns nil, so the
		// per-row streaming path stays untouched.
		var pendingMetadata []byte
		takeMetadata := func() []byte {
			if pendingMetadata == nil {
				return nil
			}
			md := pendingMetadata
			pendingMetadata = nil
			return md
		}

		for {
			attemptCount++

			// 1. Decode ExecuteSqlRequest protobuf bytes
			var req spannerpb.ExecuteSqlRequest
			if err := proto.Unmarshal(rawBytes, &req); err != nil {
				sendBatch(cb, userData, nil, nil, "", attemptCount, fmt.Sprintf("Failed to decode request bytes: %v", err), int(codes.InvalidArgument), true, nil)
				return
			}

			// Attach resume token if retrying
			if len(lastResumeToken) > 0 {
				req.ResumeToken = lastResumeToken
			}

			// 2. Prepare outgoing gRPC context with metadata headers
			md := metadata.New(metaMap)

			// Fetch OAuth2 bearer token from memory cache
			token, err := client.GetToken()
			if err != nil {
				sendBatch(cb, userData, nil, nil, "", attemptCount, fmt.Sprintf("Failed to get GCP auth token: %v", err), int(codes.Unauthenticated), true, nil)
				return
			}
			if token != nil && token.AccessToken != "" {
				md.Set("authorization", "Bearer "+token.AccessToken)
			}

			ctx := metadata.NewOutgoingContext(client.ctx, md)

			// 3. Dispatch streaming SQL request
			stream, err := client.ExecuteStreamingSql(ctx, &req)
			if err != nil {
				st, _ := status.FromError(err)
				if (st.Code() == codes.Unavailable || st.Code() == codes.Internal) && len(lastResumeToken) > 0 {
					continue // Retry loop
				}
				sendBatch(cb, userData, nil, nil, "", attemptCount, st.Message(), int(st.Code()), true, nil)
				return
			}

			// Read server-timing from header if present
			serverTiming := ""
			if headerMD, err := stream.Header(); err == nil {
				if vals := headerMD.Get("server-timing"); len(vals) > 0 {
					serverTiming = vals[0]
				}
			}

			shouldRetry := false

			// 4. Stream consumption loop
			for {
				chunk, err := stream.Recv()
				if err == io.EOF {
					break
				}
				if err != nil {
					st, _ := status.FromError(err)
					if (st.Code() == codes.Unavailable || st.Code() == codes.Internal) && len(lastResumeToken) > 0 {
						shouldRetry = true
						break
					}
					sendBatch(cb, userData, nil, nil, serverTiming, attemptCount, st.Message(), int(st.Code()), true, nil)
					return
				}

				if len(chunk.ResumeToken) > 0 {
					lastResumeToken = chunk.ResumeToken
				}

				if chunk.Metadata != nil {
					if rowType == nil && chunk.Metadata.RowType != nil {
						rowType = chunk.Metadata.RowType.Fields
					}
					if chunk.Metadata.Transaction != nil {
						copyChunkPrecommitTokenToTransaction(chunk, chunk.Metadata.Transaction)
						if mdBytes, mdErr := proto.Marshal(chunk.Metadata); mdErr == nil {
							pendingMetadata = mdBytes
						}
						if chunk.Metadata.RowType != nil {
							fieldCount := len(chunk.Metadata.RowType.Fields)
							if _, loaded := schemaBytesCache.Load(req.Sql); !loaded {
								schemaOnly := &spannerpb.ResultSetMetadata{
									RowType: chunk.Metadata.RowType,
								}
								if soBytes, soErr := proto.Marshal(schemaOnly); soErr == nil {
									schemaBytesCache.Store(req.Sql, goSchemaCacheEntry{
										fieldCount: fieldCount,
										bytes:      soBytes,
									})
								}
							}
						}
					} else if skipMetadata == 0 && chunk.Metadata.RowType != nil && pendingMetadata == nil {
						fieldCount := len(rowType)
						if cachedVal, ok := schemaBytesCache.Load(req.Sql); ok {
							if cached, ok2 := cachedVal.(goSchemaCacheEntry); ok2 && cached.fieldCount == fieldCount {
								pendingMetadata = cached.bytes
							}
						}
						if pendingMetadata == nil {
							schemaOnly := &spannerpb.ResultSetMetadata{
								RowType: chunk.Metadata.RowType,
							}
							if mdBytes, mdErr := proto.Marshal(schemaOnly); mdErr == nil {
								pendingMetadata = mdBytes
								schemaBytesCache.Store(req.Sql, goSchemaCacheEntry{
									fieldCount: fieldCount,
									bytes:      mdBytes,
								})
							}
						}
					}
				}

				numFields := len(rowType)
				vals := chunk.Values

				// Merge pending chunked value from previous chunk if present
				if pendingValue != nil {
					if len(vals) > 0 {
						first := vals[0]
						vals = vals[1:]
						merged := mergeProtoValues(pendingValue, first)
						pendingValue = nil

						currentRow = append(currentRow, merged)

						if numFields > 0 && len(currentRow) == numFields {
							batch = append(batch, currentRow)
							currentRow = make([]*structpb.Value, 0, numFields)
							if len(batch) >= 100 {
								sendBatch(cb, userData, batch, rowType, serverTiming, attemptCount, "", 0, false, takeMetadata())
								batch = make([][]*structpb.Value, 0, 100)
							}
						}
					}
				}

				// If this chunk has a chunked value at the end, pop it
				if chunk.ChunkedValue && len(vals) > 0 {
					pendingValue = vals[len(vals)-1]
					vals = vals[:len(vals)-1]
				}

				for _, val := range vals {
					currentRow = append(currentRow, val)

					if numFields > 0 && len(currentRow) == numFields {
						batch = append(batch, currentRow)
						currentRow = make([]*structpb.Value, 0, numFields)
						if len(batch) >= 100 {
							sendBatch(cb, userData, batch, rowType, serverTiming, attemptCount, "", 0, false, takeMetadata())
							batch = make([][]*structpb.Value, 0, 100)
						}
					}
				}
			}

			if shouldRetry {
				continue
			}

			// Read server-timing from trailers if present
			if trailerMD := stream.Trailer(); trailerMD != nil {
				if vals := trailerMD.Get("server-timing"); len(vals) > 0 {
					serverTiming = vals[0]
				}
			}

			// Flush any pending value / row
			if pendingValue != nil {
				currentRow = append(currentRow, pendingValue)
				pendingValue = nil
			}
			if len(currentRow) > 0 {
				batch = append(batch, currentRow)
				currentRow = nil
			}

			// Send final batch and EOF signal
			sendBatch(cb, userData, batch, rowType, serverTiming, attemptCount, "", 0, true, takeMetadata())
			break
		}
	}()
}

// ---------------------------------------------------------------------------
// Native Write / Update / Mutation Core (Commit, ExecuteBatchDml, ExecuteSql)
// ---------------------------------------------------------------------------

func extractMetadataMap(metaKeys **C.char, metaVals **C.char, metaCount C.int, ensureLeader bool) map[string]string {
	count := int(metaCount)
	metaMap := make(map[string]string, count+1)
	if count > 0 && metaKeys != nil && metaVals != nil {
		keysSlice := (*[1 << 28]*C.char)(unsafe.Pointer(metaKeys))[:count:count]
		valsSlice := (*[1 << 28]*C.char)(unsafe.Pointer(metaVals))[:count:count]
		for i := 0; i < count; i++ {
			if keysSlice[i] != nil && valsSlice[i] != nil {
				k := strings.ToLower(C.GoString(keysSlice[i]))
				v := C.GoString(valsSlice[i])
				metaMap[k] = v
			}
		}
	}
	if ensureLeader {
		metaMap["x-goog-spanner-route-to-leader"] = "true"
	}
	return metaMap
}

func cellToProtoValue(cell *C.CSpannerCell) *structpb.Value {
	switch cell.kind {
	case C.CELL_KIND_NULL:
		return structpb.NewNullValue()
	case C.CELL_KIND_BOOL:
		return structpb.NewBoolValue(cell.bool_val != 0)
	case C.CELL_KIND_NUMBER:
		return structpb.NewNumberValue(float64(cell.number_val))
	case C.CELL_KIND_STRING:
		var s string
		if cell.str_len > 0 && cell.str_val != nil {
			s = C.GoStringN(cell.str_val, C.int(cell.str_len))
		}
		return structpb.NewStringValue(s)
	case C.CELL_KIND_PROTO_VALUE:
		if cell.str_len > 0 && cell.str_val != nil {
			raw := C.GoBytes(unsafe.Pointer(cell.str_val), C.int(cell.str_len))
			var v structpb.Value
			if err := proto.Unmarshal(raw, &v); err == nil {
				return &v
			}
		}
		return structpb.NewNullValue()
	default:
		return structpb.NewNullValue()
	}
}

func buildGoMutation(m *C.CSpannerMutation) *spannerpb.Mutation {
	if m.op == C.MUTATION_OP_RAW_PB {
		if m.raw_pb_len > 0 && m.raw_pb != nil {
			raw := C.GoBytes(unsafe.Pointer(m.raw_pb), C.int(m.raw_pb_len))
			var mut spannerpb.Mutation
			if err := proto.Unmarshal(raw, &mut); err == nil {
				return &mut
			}
		}
		return &spannerpb.Mutation{}
	}

	var tableName string
	if m.table != nil {
		tableName = C.GoString(m.table)
	}
	rowCount := int(m.row_count)
	colCount := int(m.col_count)

	if m.op == C.MUTATION_OP_DELETE {
		keys := make([]*structpb.ListValue, rowCount)
		if rowCount > 0 && colCount > 0 && m.cells != nil {
			cellSlice := (*[1 << 28]C.CSpannerCell)(unsafe.Pointer(m.cells))[: rowCount*colCount : rowCount*colCount]
			for r := 0; r < rowCount; r++ {
				kVals := make([]*structpb.Value, colCount)
				rowOffset := r * colCount
				for c := 0; c < colCount; c++ {
					kVals[c] = cellToProtoValue(&cellSlice[rowOffset+c])
				}
				keys[r] = &structpb.ListValue{Values: kVals}
			}
		}
		return &spannerpb.Mutation{
			Operation: &spannerpb.Mutation_Delete_{
				Delete: &spannerpb.Mutation_Delete{
					Table: tableName,
					KeySet: &spannerpb.KeySet{
						Keys: keys,
					},
				},
			},
		}
	}

	cols := make([]string, colCount)
	if colCount > 0 && m.columns != nil {
		colSlice := (*[1 << 28]*C.char)(unsafe.Pointer(m.columns))[:colCount:colCount]
		for c := 0; c < colCount; c++ {
			if colSlice[c] != nil {
				cols[c] = C.GoString(colSlice[c])
			}
		}
	}

	values := make([]*structpb.ListValue, rowCount)
	if rowCount > 0 && colCount > 0 && m.cells != nil {
		cellSlice := (*[1 << 28]C.CSpannerCell)(unsafe.Pointer(m.cells))[: rowCount*colCount : rowCount*colCount]
		for r := 0; r < rowCount; r++ {
			rVals := make([]*structpb.Value, colCount)
			rowOffset := r * colCount
			for c := 0; c < colCount; c++ {
				rVals[c] = cellToProtoValue(&cellSlice[rowOffset+c])
			}
			values[r] = &structpb.ListValue{Values: rVals}
		}
	}

	write := &spannerpb.Mutation_Write{
		Table:   tableName,
		Columns: cols,
		Values:  values,
	}

	switch m.op {
	case C.MUTATION_OP_INSERT:
		return &spannerpb.Mutation{Operation: &spannerpb.Mutation_Insert{Insert: write}}
	case C.MUTATION_OP_UPDATE:
		return &spannerpb.Mutation{Operation: &spannerpb.Mutation_Update{Update: write}}
	case C.MUTATION_OP_INSERT_OR_UPDATE:
		return &spannerpb.Mutation{Operation: &spannerpb.Mutation_InsertOrUpdate{InsertOrUpdate: write}}
	case C.MUTATION_OP_REPLACE:
		return &spannerpb.Mutation{Operation: &spannerpb.Mutation_Replace{Replace: write}}
	default:
		return &spannerpb.Mutation{Operation: &spannerpb.Mutation_Insert{Insert: write}}
	}
}

func selectMutationKey(mutations []*spannerpb.Mutation) *spannerpb.Mutation {
	if len(mutations) == 0 {
		return nil
	}
	var highPriority []*spannerpb.Mutation
	var bestInsert *spannerpb.Mutation
	maxInsertSize := -1

	for _, m := range mutations {
		switch op := m.Operation.(type) {
		case *spannerpb.Mutation_Delete_, *spannerpb.Mutation_Update, *spannerpb.Mutation_Replace, *spannerpb.Mutation_InsertOrUpdate:
			highPriority = append(highPriority, m)
		case *spannerpb.Mutation_Insert:
			size := 0
			if op.Insert != nil {
				size = len(op.Insert.Values)
			}
			if size > maxInsertSize {
				maxInsertSize = size
				bestInsert = m
			}
		}
	}
	if len(highPriority) > 0 {
		return highPriority[0]
	}
	return bestInsert
}

func attachMutationKeyToBeginReq(beginReq *spannerpb.BeginTransactionRequest, mut *spannerpb.Mutation) {
	if mut == nil {
		return
	}
	mutBytes, err := proto.Marshal(mut)
	if err != nil || len(mutBytes) == 0 {
		return
	}
	existing := beginReq.ProtoReflect().GetUnknown()
	existing = protowire.AppendTag(existing, 4, protowire.BytesType)
	existing = protowire.AppendBytes(existing, mutBytes)
	beginReq.ProtoReflect().SetUnknown(existing)
}

func copyPrecommitTokenToCommitReq(txResp *spannerpb.Transaction, commitReq *spannerpb.CommitRequest) {
	if txResp == nil || commitReq == nil {
		return
	}
	raw := txResp.ProtoReflect().GetUnknown()
	for len(raw) > 0 {
		num, wtype, n := protowire.ConsumeTag(raw)
		if n < 0 {
			break
		}
		raw = raw[n:]
		if num == 3 && wtype == protowire.BytesType {
			valBytes, vn := protowire.ConsumeBytes(raw)
			if vn >= 0 && len(valBytes) > 0 {
				setPrecommitTokenOnCommitReq(commitReq, valBytes)
			}
			break
		}
		vn := protowire.ConsumeFieldValue(num, wtype, raw)
		if vn < 0 {
			break
		}
		raw = raw[vn:]
	}
}

func copyChunkPrecommitTokenToTransaction(chunk *spannerpb.PartialResultSet, tx *spannerpb.Transaction) {
	if chunk == nil || tx == nil {
		return
	}
	raw := chunk.ProtoReflect().GetUnknown()
	for len(raw) > 0 {
		num, wtype, n := protowire.ConsumeTag(raw)
		if n < 0 {
			break
		}
		raw = raw[n:]
		if num == 8 && wtype == protowire.BytesType {
			valBytes, vn := protowire.ConsumeBytes(raw)
			if vn >= 0 && len(valBytes) > 0 {
				txRaw := tx.ProtoReflect().GetUnknown()
				var filtered []byte
				for len(txRaw) > 0 {
					tnum, twtype, tn := protowire.ConsumeTag(txRaw)
					if tn < 0 {
						break
					}
					tvn := protowire.ConsumeFieldValue(tnum, twtype, txRaw[tn:])
					if tvn < 0 {
						break
					}
					if tnum != 3 {
						filtered = append(filtered, txRaw[:tn+tvn]...)
					}
					txRaw = txRaw[tn+tvn:]
				}
				filtered = protowire.AppendTag(filtered, 3, protowire.BytesType)
				filtered = protowire.AppendBytes(filtered, valBytes)
				tx.ProtoReflect().SetUnknown(filtered)
			}
			break
		}
		vn := protowire.ConsumeFieldValue(num, wtype, raw)
		if vn < 0 {
			break
		}
		raw = raw[vn:]
	}
}

func setPrecommitTokenOnCommitReq(commitReq *spannerpb.CommitRequest, tokenBytes []byte) {
	if commitReq == nil || len(tokenBytes) == 0 {
		return
	}
	raw := commitReq.ProtoReflect().GetUnknown()
	var filtered []byte
	for len(raw) > 0 {
		num, wtype, n := protowire.ConsumeTag(raw)
		if n < 0 {
			break
		}
		vn := protowire.ConsumeFieldValue(num, wtype, raw[n:])
		if vn < 0 {
			break
		}
		if num != 9 {
			filtered = append(filtered, raw[:n+vn]...)
		}
		raw = raw[n+vn:]
	}
	filtered = protowire.AppendTag(filtered, 9, protowire.BytesType)
	filtered = protowire.AppendBytes(filtered, tokenBytes)
	commitReq.ProtoReflect().SetUnknown(filtered)
}

func checkAndExtractRetryPrecommitToken(commitResp *spannerpb.CommitResponse) []byte {
	if commitResp == nil || commitResp.CommitTimestamp != nil {
		return nil
	}
	raw := commitResp.ProtoReflect().GetUnknown()
	for len(raw) > 0 {
		num, wtype, n := protowire.ConsumeTag(raw)
		if n < 0 {
			break
		}
		raw = raw[n:]
		if num == 4 && wtype == protowire.BytesType {
			valBytes, vn := protowire.ConsumeBytes(raw)
			if vn >= 0 && len(valBytes) > 0 {
				return valBytes
			}
			break
		}
		vn := protowire.ConsumeFieldValue(num, wtype, raw)
		if vn < 0 {
			break
		}
		raw = raw[vn:]
	}
	return nil
}

func extractRetryInfo(err error, trailerMD metadata.MD) []byte {
	if trailerMD != nil {
		if vals := trailerMD.Get("google.rpc.retryinfo-bin"); len(vals) > 0 {
			return []byte(vals[0])
		}
	}
	if st, ok := status.FromError(err); ok && st.Proto() != nil {
		for _, det := range st.Proto().Details {
			if strings.EqualFold(det.TypeUrl, "type.googleapis.com/google.rpc.RetryInfo") {
				return det.Value
			}
		}
	}
	return nil
}

func sendUnaryResponse(
	cb C.UnaryCallback,
	userData unsafe.Pointer,
	respBytes []byte,
	txBytes []byte,
	err error,
	trailerMD metadata.MD,
) {
	cResp := (*C.CUnaryResponse)(C.malloc(C.size_t(unsafe.Sizeof(C.CUnaryResponse{}))))
	*cResp = C.CUnaryResponse{}

	if err != nil {
		st, _ := status.FromError(err)
		cResp.error_code = C.int(st.Code())
		cResp.error_msg = C.CString(st.Message())
		retryBytes := extractRetryInfo(err, trailerMD)
		if len(retryBytes) > 0 {
			cResp.retry_info_len = C.int(len(retryBytes))
			cResp.retry_info_pb = C.CBytes(retryBytes)
		}
	} else {
		if len(respBytes) > 0 {
			cResp.resp_len = C.int(len(respBytes))
			cResp.resp_pb = C.CBytes(respBytes)
		}
		if len(txBytes) > 0 {
			cResp.tx_len = C.int(len(txBytes))
			cResp.tx_pb = C.CBytes(txBytes)
		}
	}

	C.bridge_unary_callback(cb, userData, cResp)
}

func buildStatementParams(stmt *C.CSpannerStatement) (*structpb.Struct, map[string]*spannerpb.Type) {
	paramCount := int(stmt.param_count)
	if paramCount <= 0 || stmt.param_names == nil || stmt.param_cells == nil {
		return nil, nil
	}
	fields := make(map[string]*structpb.Value, paramCount)
	paramTypes := make(map[string]*spannerpb.Type, paramCount)

	nameSlice := (*[1 << 28]*C.char)(unsafe.Pointer(stmt.param_names))[:paramCount:paramCount]
	cellSlice := (*[1 << 28]C.CSpannerCell)(unsafe.Pointer(stmt.param_cells))[:paramCount:paramCount]

	var typesPbSlice []*C.uint8_t
	var typesLenSlice []C.int
	if stmt.param_types_pb != nil && stmt.param_types_len != nil {
		typesPbSlice = (*[1 << 28]*C.uint8_t)(unsafe.Pointer(stmt.param_types_pb))[:paramCount:paramCount]
		typesLenSlice = (*[1 << 28]C.int)(unsafe.Pointer(stmt.param_types_len))[:paramCount:paramCount]
	}

	for i := 0; i < paramCount; i++ {
		if nameSlice[i] == nil {
			continue
		}
		name := C.GoString(nameSlice[i])
		cell := &cellSlice[i]
		fields[name] = cellToProtoValue(cell)

		if typesPbSlice != nil && typesPbSlice[i] != nil && typesLenSlice[i] > 0 {
			rawType := C.GoBytes(unsafe.Pointer(typesPbSlice[i]), typesLenSlice[i])
			var t spannerpb.Type
			if err := proto.Unmarshal(rawType, &t); err == nil {
				paramTypes[name] = &t
				continue
			}
		}
		if cell.type_code > 0 {
			paramTypes[name] = &spannerpb.Type{
				Code: spannerpb.TypeCode(cell.type_code),
			}
		}
	}
	return &structpb.Struct{Fields: fields}, paramTypes
}

//export CommitNativeGo
func CommitNativeGo(
	handle C.uintptr_t,
	cReq *C.CSpannerCommitRequest,
	cb C.UnaryCallback,
	userData unsafe.Pointer,
) {
	client := getClient(uintptr(handle))
	if client == nil {
		sendUnaryResponse(cb, userData, nil, nil, status.Error(codes.InvalidArgument, "Invalid or closed CoreClient handle"), nil)
		return
	}

	var routingKey string
	if cReq.routing_key != nil {
		routingKey = C.GoString(cReq.routing_key)
	}
	metaMap := extractMetadataMap(cReq.meta_keys, cReq.meta_vals, cReq.meta_count, true)

	var commitReq spannerpb.CommitRequest
	if cReq.base_req_len > 0 && cReq.base_req_pb != nil {
		baseBytes := C.GoBytes(unsafe.Pointer(cReq.base_req_pb), cReq.base_req_len)
		_ = proto.Unmarshal(baseBytes, &commitReq)
	}

	mutCount := int(cReq.mutation_count)
	mutations := make([]*spannerpb.Mutation, mutCount)
	if mutCount > 0 && cReq.mutations != nil {
		mutSlice := (*[1 << 28]C.CSpannerMutation)(unsafe.Pointer(cReq.mutations))[:mutCount:mutCount]
		for i := 0; i < mutCount; i++ {
			mutations[i] = buildGoMutation(&mutSlice[i])
		}
	}
	commitReq.Mutations = mutations

	inlineBegin := cReq.inline_begin != 0
	isMuxRW := cReq.is_mux_rw != 0
	var beginReq spannerpb.BeginTransactionRequest
	if inlineBegin && cReq.begin_req_len > 0 && cReq.begin_req_pb != nil {
		beginBytes := C.GoBytes(unsafe.Pointer(cReq.begin_req_pb), cReq.begin_req_len)
		_ = proto.Unmarshal(beginBytes, &beginReq)
		if isMuxRW && len(mutations) > 0 {
			attachMutationKeyToBeginReq(&beginReq, selectMutationKey(mutations))
		}
	}

	go func() {
		token, err := client.GetToken()
		if err != nil {
			sendUnaryResponse(cb, userData, nil, nil, status.Errorf(codes.Unauthenticated, "Failed to get GCP auth token: %v", err), nil)
			return
		}
		if token != nil && token.AccessToken != "" {
			metaMap["authorization"] = "Bearer " + token.AccessToken
		}
		ctx := metadata.NewOutgoingContext(client.ctx, metadata.New(metaMap))

		var txBytes []byte
		if inlineBegin {
			txResp, trailerMD, beginErr := client.BeginTransaction(ctx, routingKey, &beginReq)
			if beginErr != nil {
				sendUnaryResponse(cb, userData, nil, nil, beginErr, trailerMD)
				return
			}
			commitReq.Transaction = &spannerpb.CommitRequest_TransactionId{
				TransactionId: txResp.Id,
			}
			copyPrecommitTokenToCommitReq(txResp, &commitReq)
			txBytes, _ = proto.Marshal(txResp)
		}

		commitResp, trailerMD, commitErr := client.Commit(ctx, routingKey, &commitReq)
		if commitErr == nil {
			if retryToken := checkAndExtractRetryPrecommitToken(commitResp); len(retryToken) > 0 {
				setPrecommitTokenOnCommitReq(&commitReq, retryToken)
				commitResp, trailerMD, commitErr = client.Commit(ctx, routingKey, &commitReq)
			}
		}
		if commitErr != nil {
			sendUnaryResponse(cb, userData, nil, txBytes, commitErr, trailerMD)
			return
		}
		respBytes, marshalErr := proto.Marshal(commitResp)
		if marshalErr != nil {
			sendUnaryResponse(cb, userData, nil, txBytes, status.Errorf(codes.Internal, "Failed to marshal CommitResponse: %v", marshalErr), nil)
			return
		}
		sendUnaryResponse(cb, userData, respBytes, txBytes, nil, nil)
	}()
}

//export ExecuteBatchDmlNativeGo
func ExecuteBatchDmlNativeGo(
	handle C.uintptr_t,
	cReq *C.CSpannerBatchDmlRequest,
	cb C.UnaryCallback,
	userData unsafe.Pointer,
) {
	client := getClient(uintptr(handle))
	if client == nil {
		sendUnaryResponse(cb, userData, nil, nil, status.Error(codes.InvalidArgument, "Invalid or closed CoreClient handle"), nil)
		return
	}

	var routingKey string
	if cReq.routing_key != nil {
		routingKey = C.GoString(cReq.routing_key)
	}
	metaMap := extractMetadataMap(cReq.meta_keys, cReq.meta_vals, cReq.meta_count, true)

	var req spannerpb.ExecuteBatchDmlRequest
	if cReq.base_req_len > 0 && cReq.base_req_pb != nil {
		baseBytes := C.GoBytes(unsafe.Pointer(cReq.base_req_pb), cReq.base_req_len)
		_ = proto.Unmarshal(baseBytes, &req)
	}

	stmtCount := int(cReq.stmt_count)
	statements := make([]*spannerpb.ExecuteBatchDmlRequest_Statement, stmtCount)
	if stmtCount > 0 && cReq.statements != nil {
		stmtSlice := (*[1 << 28]C.CSpannerStatement)(unsafe.Pointer(cReq.statements))[:stmtCount:stmtCount]
		for i := 0; i < stmtCount; i++ {
			cStmt := &stmtSlice[i]
			var sqlStr string
			if cStmt.sql != nil {
				sqlStr = C.GoString(cStmt.sql)
			}
			params, paramTypes := buildStatementParams(cStmt)
			statements[i] = &spannerpb.ExecuteBatchDmlRequest_Statement{
				Sql:        sqlStr,
				Params:     params,
				ParamTypes: paramTypes,
			}
		}
	}
	req.Statements = statements

	go func() {
		token, err := client.GetToken()
		if err != nil {
			sendUnaryResponse(cb, userData, nil, nil, status.Errorf(codes.Unauthenticated, "Failed to get GCP auth token: %v", err), nil)
			return
		}
		if token != nil && token.AccessToken != "" {
			metaMap["authorization"] = "Bearer " + token.AccessToken
		}
		ctx := metadata.NewOutgoingContext(client.ctx, metadata.New(metaMap))

		resp, trailerMD, rpcErr := client.ExecuteBatchDml(ctx, routingKey, &req)
		if rpcErr != nil {
			sendUnaryResponse(cb, userData, nil, nil, rpcErr, trailerMD)
			return
		}
		respBytes, marshalErr := proto.Marshal(resp)
		if marshalErr != nil {
			sendUnaryResponse(cb, userData, nil, nil, status.Errorf(codes.Internal, "Failed to marshal ExecuteBatchDmlResponse: %v", marshalErr), nil)
			return
		}
		sendUnaryResponse(cb, userData, respBytes, nil, nil, nil)
	}()
}

//export ExecuteSqlDmlNativeGo
func ExecuteSqlDmlNativeGo(
	handle C.uintptr_t,
	cReq *C.CSpannerBatchDmlRequest,
	cb C.UnaryCallback,
	userData unsafe.Pointer,
) {
	client := getClient(uintptr(handle))
	if client == nil {
		sendUnaryResponse(cb, userData, nil, nil, status.Error(codes.InvalidArgument, "Invalid or closed CoreClient handle"), nil)
		return
	}

	var routingKey string
	if cReq.routing_key != nil {
		routingKey = C.GoString(cReq.routing_key)
	}
	metaMap := extractMetadataMap(cReq.meta_keys, cReq.meta_vals, cReq.meta_count, true)

	var req spannerpb.ExecuteSqlRequest
	if cReq.base_req_len > 0 && cReq.base_req_pb != nil {
		baseBytes := C.GoBytes(unsafe.Pointer(cReq.base_req_pb), cReq.base_req_len)
		_ = proto.Unmarshal(baseBytes, &req)
	}

	if int(cReq.stmt_count) > 0 && cReq.statements != nil {
		stmtSlice := (*[1 << 28]C.CSpannerStatement)(unsafe.Pointer(cReq.statements))[:1:1]
		cStmt := &stmtSlice[0]
		if cStmt.sql != nil {
			req.Sql = C.GoString(cStmt.sql)
		}
		params, paramTypes := buildStatementParams(cStmt)
		req.Params = params
		req.ParamTypes = paramTypes
	}

	go func() {
		token, err := client.GetToken()
		if err != nil {
			sendUnaryResponse(cb, userData, nil, nil, status.Errorf(codes.Unauthenticated, "Failed to get GCP auth token: %v", err), nil)
			return
		}
		if token != nil && token.AccessToken != "" {
			metaMap["authorization"] = "Bearer " + token.AccessToken
		}
		ctx := metadata.NewOutgoingContext(client.ctx, metadata.New(metaMap))

		resp, trailerMD, rpcErr := client.ExecuteSql(ctx, routingKey, &req)
		if rpcErr != nil {
			sendUnaryResponse(cb, userData, nil, nil, rpcErr, trailerMD)
			return
		}
		respBytes, marshalErr := proto.Marshal(resp)
		if marshalErr != nil {
			sendUnaryResponse(cb, userData, nil, nil, status.Errorf(codes.Internal, "Failed to marshal ResultSet: %v", marshalErr), nil)
			return
		}
		sendUnaryResponse(cb, userData, respBytes, nil, nil, nil)
	}()
}

//export BeginTransactionNativeGo
func BeginTransactionNativeGo(
	handle C.uintptr_t,
	routingKey *C.char,
	metaKeys **C.char,
	metaVals **C.char,
	metaCount C.int,
	reqBytesPtr *C.char,
	reqLen C.int,
	cb C.UnaryCallback,
	userData unsafe.Pointer,
) {
	client := getClient(uintptr(handle))
	if client == nil {
		sendUnaryResponse(cb, userData, nil, nil, status.Error(codes.InvalidArgument, "Invalid or closed CoreClient handle"), nil)
		return
	}

	var rk string
	if routingKey != nil {
		rk = C.GoString(routingKey)
	}
	metaMap := extractMetadataMap(metaKeys, metaVals, metaCount, true)

	var req spannerpb.BeginTransactionRequest
	if reqLen > 0 && reqBytesPtr != nil {
		rawBytes := C.GoBytes(unsafe.Pointer(reqBytesPtr), reqLen)
		_ = proto.Unmarshal(rawBytes, &req)
	}

	go func() {
		token, err := client.GetToken()
		if err != nil {
			sendUnaryResponse(cb, userData, nil, nil, status.Errorf(codes.Unauthenticated, "Failed to get GCP auth token: %v", err), nil)
			return
		}
		if token != nil && token.AccessToken != "" {
			metaMap["authorization"] = "Bearer " + token.AccessToken
		}
		ctx := metadata.NewOutgoingContext(client.ctx, metadata.New(metaMap))

		resp, trailerMD, rpcErr := client.BeginTransaction(ctx, rk, &req)
		if rpcErr != nil {
			sendUnaryResponse(cb, userData, nil, nil, rpcErr, trailerMD)
			return
		}
		respBytes, marshalErr := proto.Marshal(resp)
		if marshalErr != nil {
			sendUnaryResponse(cb, userData, nil, nil, status.Errorf(codes.Internal, "Failed to marshal Transaction: %v", marshalErr), nil)
			return
		}
		sendUnaryResponse(cb, userData, respBytes, nil, nil, nil)
	}()
}

func main() {}
