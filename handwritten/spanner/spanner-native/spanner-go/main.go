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
    const char* wire_val;
    uint32_t wire_len;
} CSpannerRawValue;

typedef struct {
    int format; // 0 = JSON string, 1 = Direct Native Cells
    char* json_rows;
    CSpannerCell* cells;
    int row_count;
    int col_count;
    char* string_arena;
    CSpannerRawValue* raw_values;
    char* raw_arena;
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
	clientRegistry              = make(map[uintptr]*CoreClient)
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

// sendRawBatch copies one flattened batch of protobuf Value wire messages into
// C-owned memory. The asynchronous N-API callback never retains Go memory.
func sendRawBatch(
	cb C.StreamDataCallback,
	userData unsafe.Pointer,
	values [][]byte,
	rowCount int,
	colCount int,
	serverTiming string,
	attemptCount int,
	isLast bool,
) error {
	if rowCount < 0 || colCount < 0 || len(values) != rowCount*colCount {
		return fmt.Errorf("invalid raw batch shape: %d values for %dx%d", len(values), rowCount, colCount)
	}

	cBatch := (*C.CSpannerBatch)(C.malloc(C.size_t(unsafe.Sizeof(C.CSpannerBatch{}))))
	if cBatch == nil {
		return fmt.Errorf("failed to allocate raw batch")
	}
	*cBatch = C.CSpannerBatch{}
	cBatch.format = 2 // Raw protobuf Value wire slices.
	cBatch.row_count = C.int(rowCount)
	cBatch.col_count = C.int(colCount)
	cBatch.attempt_count = C.int(attemptCount)
	if isLast {
		cBatch.is_last = 1
	}
	if serverTiming != "" {
		cBatch.server_timing = C.CString(serverTiming)
	}

	if len(values) > 0 {
		descriptorBytes := C.size_t(len(values)) * C.size_t(unsafe.Sizeof(C.CSpannerRawValue{}))
		cBatch.raw_values = (*C.CSpannerRawValue)(C.malloc(descriptorBytes))
		if cBatch.raw_values == nil {
			if cBatch.server_timing != nil {
				C.free(unsafe.Pointer(cBatch.server_timing))
			}
			C.free(unsafe.Pointer(cBatch))
			return fmt.Errorf("failed to allocate raw value descriptors")
		}

		totalWireBytes := 0
		for _, value := range values {
			totalWireBytes += len(value)
		}
		if totalWireBytes > 0 {
			cBatch.raw_arena = (*C.char)(C.malloc(C.size_t(totalWireBytes)))
			if cBatch.raw_arena == nil {
				C.free(unsafe.Pointer(cBatch.raw_values))
				if cBatch.server_timing != nil {
					C.free(unsafe.Pointer(cBatch.server_timing))
				}
				C.free(unsafe.Pointer(cBatch))
				return fmt.Errorf("failed to allocate raw value arena")
			}
		}

		descriptors := unsafe.Slice(cBatch.raw_values, len(values))
		var arena []byte
		if totalWireBytes > 0 {
			arena = unsafe.Slice((*byte)(unsafe.Pointer(cBatch.raw_arena)), totalWireBytes)
		}
		offset := 0
		for i, value := range values {
			descriptors[i].wire_len = C.uint32_t(len(value))
			if len(value) == 0 {
				continue
			}
			copy(arena[offset:offset+len(value)], value)
			descriptors[i].wire_val = (*C.char)(unsafe.Pointer(&arena[offset]))
			offset += len(value)
		}
	}

	C.bridge_callback(cb, userData, cBatch)
	return nil
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
		sendBatch(cb, userData, nil, nil, "", 1, "Invalid or closed CoreClient handle", int(codes.InvalidArgument), true)
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
		var pendingValue []byte
		currentRowValueCount := 0
		batchRowCount := 0
		batchValues := make([][]byte, 0, 100)

		for {
			attemptCount++

			// 1. Decode ExecuteSqlRequest protobuf bytes
			var req spannerpb.ExecuteSqlRequest
			if err := proto.Unmarshal(rawBytes, &req); err != nil {
				sendBatch(cb, userData, nil, nil, "", attemptCount, fmt.Sprintf("Failed to decode request bytes: %v", err), int(codes.InvalidArgument), true)
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
				sendBatch(cb, userData, nil, nil, "", attemptCount, fmt.Sprintf("Failed to get GCP auth token: %v", err), int(codes.Unauthenticated), true)
				return
			}
			if token != nil && token.AccessToken != "" {
				md.Set("authorization", "Bearer "+token.AccessToken)
			}

			ctx := metadata.NewOutgoingContext(client.ctx, md)

			// 3. Dispatch streaming SQL request
			stream, err := client.ExecuteStreamingSqlRaw(ctx, &req)
			if err != nil {
				st, _ := status.FromError(err)
				if (st.Code() == codes.Unavailable || st.Code() == codes.Internal) && len(lastResumeToken) > 0 {
					continue // Retry loop
				}
				sendBatch(cb, userData, nil, nil, "", attemptCount, st.Message(), int(st.Code()), true)
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
				chunk, err := stream.RecvRaw()
				if err == io.EOF {
					break
				}
				if err != nil {
					st, _ := status.FromError(err)
					if (st.Code() == codes.Unavailable || st.Code() == codes.Internal) && len(lastResumeToken) > 0 {
						shouldRetry = true
						break
					}
					sendBatch(cb, userData, nil, nil, serverTiming, attemptCount, st.Message(), int(st.Code()), true)
					return
				}

				if len(chunk.resumeToken) > 0 {
					lastResumeToken = chunk.resumeToken
				}

				if rowType == nil && chunk.metadata != nil && chunk.metadata.RowType != nil {
					rowType = chunk.metadata.RowType.Fields
					if cap(batchValues) < 100*len(rowType) {
						batchValues = make([][]byte, 0, 100*len(rowType))
					}
				}

				numFields := len(rowType)
				if numFields == 0 && chunk.valueCount > 0 {
					sendBatch(cb, userData, nil, nil, serverTiming, attemptCount, "received values before row metadata", int(codes.DataLoss), true)
					return
				}

				appendCompleteValue := func(value []byte) error {
					batchValues = append(batchValues, value)
					currentRowValueCount++
					if currentRowValueCount > numFields {
						return fmt.Errorf("received more values than row fields")
					}
					if currentRowValueCount == numFields {
						currentRowValueCount = 0
						batchRowCount++
						if batchRowCount == 100 {
							if err := sendRawBatch(cb, userData, batchValues, batchRowCount, numFields, serverTiming, attemptCount, false); err != nil {
								return err
							}
							batchValues = batchValues[:0]
							batchRowCount = 0
						}
					}
					return nil
				}

				var candidate []byte
				firstValue := true
				processingErr := chunk.forEachValue(func(value []byte) error {
					if firstValue && pendingValue != nil {
						merged, err := mergeRawProtoValues(pendingValue, value)
						if err != nil {
							return err
						}
						candidate = merged
						pendingValue = nil
						firstValue = false
						return nil
					}
					firstValue = false
					if candidate != nil {
						if err := appendCompleteValue(candidate); err != nil {
							return err
						}
					}
					candidate = value
					return nil
				})
				if processingErr == nil && candidate != nil {
					if chunk.chunkedValue {
						pendingValue = candidate
					} else {
						processingErr = appendCompleteValue(candidate)
					}
				}
				if processingErr != nil {
					sendBatch(cb, userData, nil, nil, serverTiming, attemptCount, processingErr.Error(), int(codes.DataLoss), true)
					return
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
				batchValues = append(batchValues, pendingValue)
				currentRowValueCount++
				if len(rowType) > 0 && currentRowValueCount == len(rowType) {
					currentRowValueCount = 0
					batchRowCount++
				}
				pendingValue = nil
			}
			if currentRowValueCount != 0 {
				sendBatch(cb, userData, nil, nil, serverTiming, attemptCount, fmt.Sprintf("incomplete final row: %d of %d values", currentRowValueCount, len(rowType)), int(codes.DataLoss), true)
				return
			}

			// Send final batch and EOF signal
			if err := sendRawBatch(cb, userData, batchValues, batchRowCount, len(rowType), serverTiming, attemptCount, true); err != nil {
				sendBatch(cb, userData, nil, nil, serverTiming, attemptCount, err.Error(), int(codes.Internal), true)
			}
			break
		}
	}()
}

func main() {}
