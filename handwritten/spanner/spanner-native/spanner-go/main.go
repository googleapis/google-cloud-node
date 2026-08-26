package main

/*
#include <stdlib.h>
#include <stdint.h>

typedef enum {
    CELL_KIND_NULL = 0,
    CELL_KIND_BOOL = 1,
    CELL_KIND_NUMBER = 2,
    CELL_KIND_STRING = 3
} CellKind;

typedef struct {
    uint8_t kind;
    uint8_t bool_val;
    uint16_t _pad;
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
    uintptr_t go_handle;
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
*/
import "C"

import (
	"bytes"
	"fmt"
	"io"
	"os"
	"sync"
	"unsafe"

	spannerpb "cloud.google.com/go/spanner/apiv1/spannerpb"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/metadata"
	"google.golang.org/grpc/status"
	"google.golang.org/protobuf/proto"
	"google.golang.org/protobuf/types/known/structpb"
)

var (
	clientRegistryMutex sync.RWMutex
	clientRegistry      = make(map[uintptr]*CoreClient)
	nextClientId        uintptr = 1
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
func InitGoCoreClient(channelCount C.int) C.uintptr_t {
	client, err := NewCoreClient(int(channelCount))
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
	return val != "false" && val != "0"
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

var (
	pinnedBatchesMu sync.Mutex
	pinnedBatches   = make(map[uintptr]any)
	nextBatchId     uintptr
)

func pinGoBatch(val any) uintptr {
	pinnedBatchesMu.Lock()
	defer pinnedBatchesMu.Unlock()
	nextBatchId++
	id := nextBatchId
	pinnedBatches[id] = val
	return id
}

//export FreeGoBatchHandle
func FreeGoBatchHandle(handle C.uintptr_t) {
	if handle != 0 {
		pinnedBatchesMu.Lock()
		delete(pinnedBatches, uintptr(handle))
		pinnedBatchesMu.Unlock()
	}
}

func sendFlatBatch(
	cb C.StreamDataCallback,
	userData unsafe.Pointer,
	flatValues []*structpb.Value,
	colCount int,
	serverTiming string,
	attemptCount int,
	errMsg string,
	errCode int,
	isLast bool,
) {
	cBatch := (*C.CSpannerBatch)(C.calloc(1, C.size_t(unsafe.Sizeof(C.CSpannerBatch{}))))

	if isLast {
		cBatch.is_last = 1
	}
	cBatch.attempt_count = C.int(attemptCount)
	cBatch.error_code = C.int(errCode)

	if errMsg != "" {
		cBatch.error_msg = C.CString(errMsg)
	}
	if serverTiming != "" {
		cBatch.server_timing = C.CString(serverTiming)
	}

	totalCells := len(flatValues)
	if totalCells > 0 && colCount > 0 {
		rowCount := totalCells / colCount
		cBatch.row_count = C.int(rowCount)
		cBatch.col_count = C.int(colCount)
		cBatch.format = 1 // Native cells

		cBatch.go_handle = C.uintptr_t(pinGoBatch(flatValues))

		cBatch.cells = (*C.CSpannerCell)(C.calloc(C.size_t(totalCells), C.size_t(unsafe.Sizeof(C.CSpannerCell{}))))
		cellsSlice := (*[1 << 28]C.CSpannerCell)(unsafe.Pointer(cBatch.cells))[:totalCells:totalCells]

		for i, val := range flatValues {
			cell := &cellsSlice[i]
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
					// Direct pointer to Go string bytes (Zero-copy)
					cell.str_val = (*C.char)(unsafe.Pointer(unsafe.StringData(k.StringValue)))
				} else {
					cell.str_val = nil
				}
			default:
				cell.kind = C.CELL_KIND_NULL
			}
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
	cb C.StreamDataCallback,
	userData unsafe.Pointer,
) {
	client := getClient(uintptr(handle))
	if client == nil {
		sendFlatBatch(cb, userData, nil, 0, "", 1, "Invalid or closed CoreClient handle", int(codes.InvalidArgument), true)
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

		for {
			attemptCount++

			// 1. Decode ExecuteSqlRequest protobuf bytes
			var req spannerpb.ExecuteSqlRequest
			if err := proto.Unmarshal(rawBytes, &req); err != nil {
				sendFlatBatch(cb, userData, nil, 0, "", attemptCount, fmt.Sprintf("Failed to decode request bytes: %v", err), int(codes.InvalidArgument), true)
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
				sendFlatBatch(cb, userData, nil, 0, "", attemptCount, fmt.Sprintf("Failed to get GCP auth token: %v", err), int(codes.Unauthenticated), true)
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
				sendFlatBatch(cb, userData, nil, 0, "", attemptCount, st.Message(), int(st.Code()), true)
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

			var rowType []*spannerpb.StructType_Field
			var pendingValue *structpb.Value
			flatValues := make([]*structpb.Value, 0, 1024)

			// 4. Stream consumption loop (Single flat pass, zero intermediate row slices)
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
					sendFlatBatch(cb, userData, nil, 0, serverTiming, attemptCount, st.Message(), int(st.Code()), true)
					return
				}

				if len(chunk.ResumeToken) > 0 {
					lastResumeToken = chunk.ResumeToken
				}

				if rowType == nil && chunk.Metadata != nil && chunk.Metadata.RowType != nil {
					rowType = chunk.Metadata.RowType.Fields
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
						flatValues = append(flatValues, merged)
					}
				}

				// If this chunk has a chunked value at the end, pop it
				if chunk.ChunkedValue && len(vals) > 0 {
					pendingValue = vals[len(vals)-1]
					vals = vals[:len(vals)-1]
				}

				// Bulk append values directly to flat buffer
				flatValues = append(flatValues, vals...)

				if numFields > 0 {
					batchCells := 100 * numFields
					for len(flatValues) >= batchCells {
						sendFlatBatch(cb, userData, flatValues[:batchCells], numFields, serverTiming, attemptCount, "", 0, false)
						flatValues = flatValues[batchCells:]
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

			// Flush any pending value
			if pendingValue != nil {
				flatValues = append(flatValues, pendingValue)
				pendingValue = nil
			}

			numFields := len(rowType)
			// Send final batch and EOF signal
			sendFlatBatch(cb, userData, flatValues, numFields, serverTiming, attemptCount, "", 0, true)
			break
		}
	}()
}

func main() {}
