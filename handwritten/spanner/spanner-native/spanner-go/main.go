package main

/*
#include <stdlib.h>
#include <stdint.h>

typedef void (*StreamDataCallback)(
    void* user_data,
    char* json_rows,
    int row_count,
    char* server_timing,
    int attempt_count,
    char* error_msg,
    int error_code,
    int is_last
);

static void bridge_callback(
    StreamDataCallback cb,
    void* user_data,
    char* json_rows,
    int row_count,
    char* server_timing,
    int attempt_count,
    char* error_msg,
    int error_code,
    int is_last
) {
    if (cb != NULL) {
        cb(user_data, json_rows, row_count, server_timing, attempt_count, error_msg, error_code, is_last);
    }
}
*/
import "C"

import (
	"bytes"
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

func sendCallback(
	cb C.StreamDataCallback,
	userData unsafe.Pointer,
	cJson *C.char,
	rowCount int,
	serverTiming string,
	attemptCount int,
	errMsg string,
	errCode int,
	isLast bool,
) {
	var cServerTiming *C.char
	var cErrMsg *C.char

	if serverTiming != "" {
		cServerTiming = C.CString(serverTiming)
	}

	if errMsg != "" {
		cErrMsg = C.CString(errMsg)
	}

	lastFlag := 0
	if isLast {
		lastFlag = 1
	}

	C.bridge_callback(
		cb,
		userData,
		cJson,
		C.int(rowCount),
		cServerTiming,
		C.int(attemptCount),
		cErrMsg,
		C.int(errCode),
		C.int(lastFlag),
	)
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
		sendCallback(cb, userData, nil, 0, "", 1, "Invalid or closed CoreClient handle", int(codes.InvalidArgument), true)
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

		for {
			attemptCount++

			// 1. Decode ExecuteSqlRequest protobuf bytes
			var req spannerpb.ExecuteSqlRequest
			if err := proto.Unmarshal(rawBytes, &req); err != nil {
				sendCallback(cb, userData, nil, 0, "", attemptCount, fmt.Sprintf("Failed to decode request bytes: %v", err), int(codes.InvalidArgument), true)
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
				sendCallback(cb, userData, nil, 0, "", attemptCount, fmt.Sprintf("Failed to get GCP auth token: %v", err), int(codes.Unauthenticated), true)
				return
			}
			if token != nil && token.AccessToken != "" {
				md.Set("authorization", "Bearer "+token.AccessToken)
			}

			ctx := metadata.NewOutgoingContext(client.ctx, md)

			// 3. Select connection from pool via round-robin
			conn := client.GetConn()
			if conn == nil {
				sendCallback(cb, userData, nil, 0, "", attemptCount, "No active gRPC connection available", int(codes.Unavailable), true)
				return
			}

			spannerClient := spannerpb.NewSpannerClient(conn)
			stream, err := spannerClient.ExecuteStreamingSql(ctx, &req)
			if err != nil {
				st, _ := status.FromError(err)
				if (st.Code() == codes.Unavailable || st.Code() == codes.Internal) && len(lastResumeToken) > 0 {
					continue // Retry loop
				}
				sendCallback(cb, userData, nil, 0, "", attemptCount, st.Message(), int(st.Code()), true)
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
					sendCallback(cb, userData, nil, 0, serverTiming, attemptCount, st.Message(), int(st.Code()), true)
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

						currentRow = append(currentRow, merged)

						if numFields > 0 && len(currentRow) == numFields {
							batch = append(batch, currentRow)
							currentRow = make([]*structpb.Value, 0, numFields)
							if len(batch) >= 100 {
								cJson := writeBatchJson(batch, rowType)
								sendCallback(cb, userData, cJson, len(batch), serverTiming, attemptCount, "", 0, false)
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
							cJson := writeBatchJson(batch, rowType)
							sendCallback(cb, userData, cJson, len(batch), serverTiming, attemptCount, "", 0, false)
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
			cJson := writeBatchJson(batch, rowType)
			sendCallback(cb, userData, cJson, len(batch), serverTiming, attemptCount, "", 0, true)
			break
		}
	}()
}

func main() {}
