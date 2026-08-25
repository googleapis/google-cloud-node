package main

/*
#include <stdlib.h>
#include <stdint.h>

typedef enum {
    CELL_KIND_NULL = 0,
    CELL_KIND_BOOL = 1,
    CELL_KIND_NUMBER = 2,
    CELL_KIND_STRING = 3,
    CELL_KIND_JSON_BLOB = 4
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
	"fmt"
	"io"
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
	clientRegistry sync.Map
	nextClientId   uintptr = 1
	clientIdMutex  sync.Mutex
)

func registerClient(client *CoreClient) uintptr {
	clientIdMutex.Lock()
	defer clientIdMutex.Unlock()
	id := nextClientId
	nextClientId++
	clientRegistry.Store(id, client)
	return id
}

func getClient(id uintptr) *CoreClient {
	if val, ok := clientRegistry.Load(id); ok {
		return val.(*CoreClient)
	}
	return nil
}

func unregisterClient(id uintptr) *CoreClient {
	if val, ok := clientRegistry.LoadAndDelete(id); ok {
		return val.(*CoreClient)
	}
	return nil
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

func sendBatchNative(
	cb C.StreamDataCallback,
	userData unsafe.Pointer,
	values []*structpb.Value,
	rowCount int,
	colCount int,
	serverTiming string,
	attemptCount int,
	errMsg string,
	errCode int,
	isLast bool,
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
	}
	if serverTiming != "" {
		cBatch.server_timing = C.CString(serverTiming)
	}

	cBatch.row_count = C.int(rowCount)
	cBatch.col_count = C.int(colCount)
	cBatch.format = 1 // ALWAYS Native Cells (Zero JSON)

	totalCells := rowCount * colCount
	if totalCells > 0 {
		cBatch.cells = (*C.CSpannerCell)(C.malloc(C.size_t(totalCells) * C.size_t(unsafe.Sizeof(C.CSpannerCell{}))))
		cellsSlice := (*[1 << 28]C.CSpannerCell)(unsafe.Pointer(cBatch.cells))[:totalCells:totalCells]

		// Single pass over cells: accumulate string bytes into arena
		arenaBuf := make([]byte, 0, totalCells*16)
		type strFixup struct {
			idx    int
			offset int
		}
		var fixups []strFixup

		for idx, val := range values {
			if idx >= totalCells {
				break
			}
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
					offset := len(arenaBuf)
					arenaBuf = append(arenaBuf, k.StringValue...)
					fixups = append(fixups, strFixup{idx: idx, offset: offset})
				} else {
					cell.str_val = nil
				}
			default:
				cell.kind = C.CELL_KIND_NULL
			}
		}

		if len(arenaBuf) > 0 {
			cBatch.string_arena = (*C.char)(C.CBytes(arenaBuf))
			arenaPtr := uintptr(unsafe.Pointer(cBatch.string_arena))
			for _, fixup := range fixups {
				cellsSlice[fixup.idx].str_val = (*C.char)(unsafe.Pointer(arenaPtr + uintptr(fixup.offset)))
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
		sendBatchNative(cb, userData, nil, 0, 0, "", 1, "Invalid or closed CoreClient handle", int(codes.InvalidArgument), true)
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
		currentRowValueCount := 0
		batchRowCount := 0
		batchValues := make([]*structpb.Value, 0, 500*16) // Flat reusable buffer

		for {
			attemptCount++

			// 1. Decode ExecuteSqlRequest protobuf bytes
			var req spannerpb.ExecuteSqlRequest
			if err := proto.Unmarshal(rawBytes, &req); err != nil {
				sendBatchNative(cb, userData, nil, 0, 0, "", attemptCount, fmt.Sprintf("Failed to decode request bytes: %v", err), int(codes.InvalidArgument), true)
				return
			}

			// Attach resume token if retrying
			if len(lastResumeToken) > 0 {
				req.ResumeToken = lastResumeToken
			}

			// 2. Prepare outgoing gRPC context with metadata headers
			md := metadata.New(nil)
			for k, v := range metaMap {
				// If using GAPIC client (DirectPath), skip headers that GAPIC manages internally
				if client.useGapic && (k == "x-goog-user-project" || k == "x-goog-api-client" || k == "x-goog-request-params") {
					continue
				}
				md.Set(k, v)
			}

			// Fetch OAuth2 bearer token from memory cache (only for raw connection pool; GAPIC manages its own auth)
			if !client.useGapic {
				token, err := client.GetToken()
				if err != nil {
					sendBatchNative(cb, userData, nil, 0, 0, "", attemptCount, fmt.Sprintf("Failed to get GCP auth token: %v", err), int(codes.Unauthenticated), true)
					return
				}
				if token != nil && token.AccessToken != "" {
					md.Set("authorization", "Bearer "+token.AccessToken)
				}
			}

			ctx := metadata.NewOutgoingContext(client.ctx, md)

			// 3. Dispatch streaming SQL request
			stream, err := client.ExecuteStreamingSql(ctx, &req)
			if err != nil {
				st, _ := status.FromError(err)
				if (st.Code() == codes.Unavailable || st.Code() == codes.Internal) && len(lastResumeToken) > 0 {
					continue // Retry loop
				}
				sendBatchNative(cb, userData, nil, 0, 0, "", attemptCount, st.Message(), int(st.Code()), true)
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
					sendBatchNative(cb, userData, nil, 0, 0, serverTiming, attemptCount, st.Message(), int(st.Code()), true)
					return
				}

				if len(chunk.ResumeToken) > 0 {
					lastResumeToken = chunk.ResumeToken
				}

				if rowType == nil && chunk.Metadata != nil && chunk.Metadata.RowType != nil {
					rowType = chunk.Metadata.RowType.Fields
					numFields := len(rowType)
					if numFields > 0 && cap(batchValues) < 500*numFields {
						batchValues = make([]*structpb.Value, 0, 500*numFields)
					}
				}

				numFields := len(rowType)
				vals := chunk.Values

				// Merge pending chunked value from previous chunk if present
				if pendingValue != nil && len(vals) > 0 {
					first := vals[0]
					vals = vals[1:]
					merged := mergeProtoValues(pendingValue, first)
					pendingValue = nil

					batchValues = append(batchValues, merged)
					currentRowValueCount++
					if numFields > 0 && currentRowValueCount == numFields {
						currentRowValueCount = 0
						batchRowCount++
					}
				}

				// If this chunk has a chunked value at the end, pop it
				if chunk.ChunkedValue && len(vals) > 0 {
					pendingValue = vals[len(vals)-1]
					vals = vals[:len(vals)-1]
				}

				for _, val := range vals {
					batchValues = append(batchValues, val)
					currentRowValueCount++
					if numFields > 0 && currentRowValueCount == numFields {
						currentRowValueCount = 0
						batchRowCount++
					}
				}

				// Adaptive batch dispatch: flush on >= 500 rows
				if batchRowCount >= 500 && numFields > 0 {
					sendBatchNative(cb, userData, batchValues, batchRowCount, numFields, serverTiming, attemptCount, "", 0, false)
					batchValues = batchValues[:0]
					batchRowCount = 0
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
			numFields := len(rowType)
			if pendingValue != nil {
				batchValues = append(batchValues, pendingValue)
				currentRowValueCount++
				if numFields > 0 && currentRowValueCount == numFields {
					currentRowValueCount = 0
					batchRowCount++
				}
				pendingValue = nil
			}

			// Send final batch and EOF signal
			sendBatchNative(cb, userData, batchValues, batchRowCount, numFields, serverTiming, attemptCount, "", 0, true)
			break
		}
	}()
}

func main() {}
