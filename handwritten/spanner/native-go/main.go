package main

/*
#cgo CFLAGS: -I.
#define NAPI_VERSION 4
#include <node_api.h>
#include <stdlib.h>
#include <string.h>

// Forward declarations of exported Go functions wrapped as N-API callbacks
napi_value Constructor(napi_env env, napi_callback_info info);
napi_value MakeUnaryCall(napi_env env, napi_callback_info info);
napi_value MakeStreamingCall(napi_env env, napi_callback_info info);
void Finalizer(napi_env env, void* finalize_data, void* finalize_hint);

// The C callback executor for the threadsafe function
typedef struct {
    int type_flag;
    char* err_msg;
    void* bytes_data;
    size_t bytes_len;
} EventPayload;

typedef struct {
    int stream_id;
    EventPayload* events;
    int events_count;
    char* stream_err;
} StreamBatchPayload;

typedef struct {
    int type_flag;
    char* err_msg;
    void* bytes_data;
    size_t bytes_len;
    void* deferred;
    int stream_id;
} StreamPayload;

typedef struct {
    int type_flag;
    char* err_msg;
    void* bytes_data;
    size_t bytes_len;
    void* deferred;
} BatchItem;

typedef struct {
    BatchItem* items;
    int count;
} BatchPayload;

void CallJsCallback(napi_env env, napi_value js_cb, void* context, void* data);
void CallStreamJsCallback(napi_env env, napi_value js_cb, void* context, void* data);
void CallJsBatchCallback(napi_env env, napi_value js_cb, void* context, void* data);
napi_value DummyCallback(napi_env env, napi_callback_info info);
*/
import "C"

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io"
	"math"
	"os"
	"reflect"
	"strconv"
	"strings"
	"sync"
	"unsafe"

	"cloud.google.com/go/spanner"
	sppb "cloud.google.com/go/spanner/apiv1/spannerpb"
	"github.com/apache/arrow/go/v18/arrow"
	"github.com/apache/arrow/go/v18/arrow/array"
	"github.com/apache/arrow/go/v18/arrow/ipc"
	"github.com/apache/arrow/go/v18/arrow/memory"
	"google.golang.org/api/iterator"
	"google.golang.org/api/option"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/protobuf/proto"
	"google.golang.org/protobuf/types/known/structpb"
)

type batchItemGo struct {
	deferred   unsafe.Pointer
	respBytes  []byte
	err        error
}

type ProxyInstance struct {
	dbPath       string
	endpoint     string
	opts         []option.ClientOption
	client       *spanner.Client
	mu           sync.RWMutex
	unaryTsfn    C.napi_threadsafe_function
	streamTsfn   C.napi_threadsafe_function
	batchTsfn    C.napi_threadsafe_function
	useBatch     bool
	batchChan    chan *batchItemGo
	closeChan    chan struct{}
	wg           sync.WaitGroup
}

func (inst *ProxyInstance) getClient(ctx context.Context) (*spanner.Client, error) {
	inst.mu.RLock()
	client := inst.client
	inst.mu.RUnlock()

	if client != nil {
		return client, nil
	}

	inst.mu.Lock()
	defer inst.mu.Unlock()

	if inst.client != nil {
		return inst.client, nil
	}

	// TODO: This prototype simplifies mapping by assuming a single database client
	// per addon instance via the SPANNER_NATIVE_DATABASE_PATH env variable.
	c, err := spanner.NewClient(ctx, inst.dbPath, inst.opts...)
	if err != nil {
		return nil, err
	}
	fmt.Printf("[GoProxy] Go Spanner client created for database: %s\n", inst.dbPath)
	inst.client = c
	return c, nil
}

var (
	instances      = make(map[uintptr]*ProxyInstance)
	instancesMu    sync.Mutex
	nextInstanceID uintptr = 1
)

//export Constructor
func Constructor(env C.napi_env, info C.napi_callback_info) C.napi_value {
	var this C.napi_value
	var argc C.size_t = 2
	argv := make([]C.napi_value, 2)

	C.napi_get_cb_info(env, info, &argc, &argv[0], &this, nil)

	var endpointBuf [512]C.char
	var result C.size_t
	C.napi_get_value_string_utf8(env, argv[0], &endpointBuf[0], 512, &result)
	endpoint := C.GoString(&endpointBuf[0])

	if strings.HasPrefix(endpoint, "https://") {
		endpoint = strings.TrimPrefix(endpoint, "https://")
	} else if strings.HasPrefix(endpoint, "http://") {
		endpoint = strings.TrimPrefix(endpoint, "http://")
	}

	var opts []option.ClientOption
	if endpoint != "" {
		opts = append(opts, option.WithEndpoint(endpoint))
		if strings.HasPrefix(endpoint, "127.0.0.1") || strings.HasPrefix(endpoint, "localhost") {
			opts = append(opts,
				option.WithGRPCDialOption(grpc.WithTransportCredentials(insecure.NewCredentials())),
				option.WithoutAuthentication(),
			)
		}
	}

	if numChannelsStr := os.Getenv("SPANNER_NUM_CHANNELS"); numChannelsStr != "" {
		if numChannels, err := strconv.Atoi(numChannelsStr); err == nil && numChannels > 0 {
			opts = append(opts, option.WithGRPCConnectionPool(numChannels))
		}
	}

	var dummyFunc C.napi_value
	C.napi_create_function(env, nil, 0, (C.napi_callback)(C.DummyCallback), nil, &dummyFunc)

	var resourceName C.napi_value
	C.napi_create_string_utf8(env, C.CString("UnaryCall"), C.size_t(len("UnaryCall")), &resourceName)

	var tsfn C.napi_threadsafe_function
	C.napi_create_threadsafe_function(
		env,
		dummyFunc,
		nil,
		resourceName,
		0,
		1,
		nil,
		nil,
		nil,
		(C.napi_threadsafe_function_call_js)(C.CallJsCallback),
		&tsfn,
	)

	var streamTsfn C.napi_threadsafe_function
	var streamResourceName C.napi_value
	C.napi_create_string_utf8(env, C.CString("StreamDispatcher"), C.size_t(len("StreamDispatcher")), &streamResourceName)
	C.napi_create_threadsafe_function(
		env,
		argv[1],
		nil,
		streamResourceName,
		0,
		1,
		nil,
		nil,
		nil,
		(C.napi_threadsafe_function_call_js)(C.CallStreamJsCallback),
		&streamTsfn,
	)

	var batchTsfn C.napi_threadsafe_function
	useBatch := os.Getenv("SPANNER_NATIVE_GO_BATCH_FLUSH") == "true"
	if useBatch {
		var batchResourceName C.napi_value
		C.napi_create_string_utf8(env, C.CString("BatchUnaryCall"), C.size_t(len("BatchUnaryCall")), &batchResourceName)
		C.napi_create_threadsafe_function(
			env,
			dummyFunc,
			nil,
			batchResourceName,
			0,
			1,
			nil,
			nil,
			nil,
			(C.napi_threadsafe_function_call_js)(C.CallJsBatchCallback),
			&batchTsfn,
		)
	}

	// In Go, the Spanner client binds to a specific database at instantiation.
	// For this prototype, we configure the database path using this environment
	// variable so that all requests made through the native proxy are directed to it.
	dbPath := os.Getenv("SPANNER_NATIVE_DATABASE_PATH")
	if dbPath == "" {
		C.napi_throw_error(env, nil, C.CString("SPANNER_NATIVE_DATABASE_PATH environment variable is required but not set"))
		return nil
	}

	inst := &ProxyInstance{
		dbPath:     dbPath,
		endpoint:   endpoint,
		opts:       opts,
		unaryTsfn:  tsfn,
		streamTsfn: streamTsfn,
		batchTsfn:  batchTsfn,
		useBatch:   useBatch,
	}

	if useBatch {
		inst.batchChan = make(chan *batchItemGo, 100000)
		inst.closeChan = make(chan struct{})
		go inst.dispatcherLoop()
	}

	instancesMu.Lock()
	instID := nextInstanceID
	nextInstanceID++
	instances[instID] = inst
	instancesMu.Unlock()

	C.napi_wrap(env, this, unsafe.Pointer(instID), (C.napi_finalize)(C.Finalizer), nil, nil)

	return this
}

//export Finalizer
func Finalizer(env C.napi_env, finalize_data unsafe.Pointer, finalize_hint unsafe.Pointer) {
	instID := uintptr(finalize_data)
	instancesMu.Lock()
	if inst, ok := instances[instID]; ok {
		inst.mu.Lock()
		if inst.useBatch {
			close(inst.closeChan)
			inst.wg.Wait()
		}
		if inst.client != nil {
			inst.client.Close()
		}
		C.napi_release_threadsafe_function(inst.unaryTsfn, C.napi_tsfn_release)
		C.napi_release_threadsafe_function(inst.streamTsfn, C.napi_tsfn_release)
		if inst.useBatch {
			C.napi_release_threadsafe_function(inst.batchTsfn, C.napi_tsfn_release)
		}
		inst.mu.Unlock()
		delete(instances, instID)
	}
	instancesMu.Unlock()
}

//export MakeUnaryCall
func MakeUnaryCall(env C.napi_env, info C.napi_callback_info) C.napi_value {
	var this C.napi_value
	var argc C.size_t = 4
	argv := make([]C.napi_value, 4)

	C.napi_get_cb_info(env, info, &argc, &argv[0], &this, nil)

	var instID unsafe.Pointer
	C.napi_unwrap(env, this, &instID)

	instancesMu.Lock()
	inst := instances[uintptr(instID)]
	instancesMu.Unlock()

	if inst == nil {
		C.napi_throw_error(env, nil, C.CString("Native proxy instance not found"))
		return nil
	}

	var pathBuf [512]C.char
	var result C.size_t
	C.napi_get_value_string_utf8(env, argv[0], &pathBuf[0], 512, &result)
	path := C.GoString(&pathBuf[0])

	var reqData unsafe.Pointer
	var reqLen C.size_t
	C.napi_get_arraybuffer_info(env, argv[1], &reqData, &reqLen)
	reqBytes := C.GoBytes(reqData, C.int(reqLen))

	headers := parseHeaders(env, argv[2])

	var channelHint C.uint32_t
	C.napi_get_value_uint32(env, argv[3], &channelHint)

	var deferred C.napi_deferred
	var promise C.napi_value
	C.napi_create_promise(env, &deferred, &promise)

	go func() {
		ctx := context.Background()
		client, err := inst.getClient(ctx)
		var respBytes []byte
		if err == nil {
			respBytes, err = client.MakeUnaryCall(ctx, path, reqBytes, headers, int(channelHint))
		}

		if inst.useBatch {
			inst.batchChan <- &batchItemGo{
				deferred:  unsafe.Pointer(deferred),
				respBytes: respBytes,
				err:       err,
			}
			return
		}

		payload := (*C.StreamPayload)(C.malloc(C.size_t(unsafe.Sizeof(C.StreamPayload{}))))
		payload.deferred = unsafe.Pointer(deferred)

		if err != nil {

			payload.type_flag = -1
			payload.err_msg = C.CString(err.Error())
			payload.bytes_data = nil
			payload.bytes_len = 0
		} else {

			payload.type_flag = 0
			payload.err_msg = nil
			payload.bytes_len = C.size_t(len(respBytes))
			payload.bytes_data = C.malloc(C.size_t(len(respBytes)))
			if len(respBytes) > 0 {
				C.memcpy(payload.bytes_data, unsafe.Pointer(&respBytes[0]), C.size_t(len(respBytes)))
			}
		}

		C.napi_call_threadsafe_function(inst.unaryTsfn, unsafe.Pointer(payload), C.napi_tsfn_blocking)
	}()

	return promise
}

//export MakeStreamingCall
func MakeStreamingCall(env C.napi_env, info C.napi_callback_info) C.napi_value {
	var this C.napi_value
	var argc C.size_t = 5
	argv := make([]C.napi_value, 5)

	C.napi_get_cb_info(env, info, &argc, &argv[0], &this, nil)

	var instID unsafe.Pointer
	C.napi_unwrap(env, this, &instID)

	instancesMu.Lock()
	inst := instances[uintptr(instID)]
	instancesMu.Unlock()

	if inst == nil {
		C.napi_throw_error(env, nil, C.CString("Native proxy instance not found"))
		return nil
	}

	var pathBuf [512]C.char
	var result C.size_t
	C.napi_get_value_string_utf8(env, argv[0], &pathBuf[0], 512, &result)
	path := C.GoString(&pathBuf[0])

	var reqData unsafe.Pointer
	var reqLen C.size_t
	C.napi_get_arraybuffer_info(env, argv[1], &reqData, &reqLen)
	reqBytes := C.GoBytes(reqData, C.int(reqLen))

	headers := parseHeaders(env, argv[2])

	var channelHint C.uint32_t
	C.napi_get_value_uint32(env, argv[3], &channelHint)

	var streamId C.int32_t
	C.napi_get_value_int32(env, argv[4], &streamId)

	go func() {
		ctx := context.Background()
		client, err := inst.getClient(ctx)
		if err != nil {
			sendStreamError(inst.streamTsfn, int(streamId), err)
			return
		}

		if path == "/google.spanner.v1.Spanner/ExecuteStreamingSql" {
			streamExecuteSqlArrow(ctx, client, reqBytes, headers, int(channelHint), int(streamId), inst.streamTsfn)
			return
		}

		rawStr, err := client.NewResumableRawStream(ctx, path, reqBytes, headers, int(channelHint))
		if err != nil {
			sendStreamError(inst.streamTsfn, int(streamId), err)
			return
		}
		defer rawStr.Close()

		for {
			chunkBytes, err := rawStr.Recv()
			if err == io.EOF {
				break
			}
			if err != nil {
				sendStreamError(inst.streamTsfn, int(streamId), err)
				return
			}
			sendStreamChunk(inst.streamTsfn, int(streamId), 0, chunkBytes)
		}

		eofPrs := &sppb.PartialResultSet{Last: true}
		eofBytes, _ := proto.Marshal(eofPrs)
		sendStreamChunk(inst.streamTsfn, int(streamId), 0, eofBytes)
		sendStreamChunk(inst.streamTsfn, int(streamId), 0, nil)
	}()

	var undefined C.napi_value
	C.napi_get_undefined(env, &undefined)
	return undefined
}

func parseHeaders(env C.napi_env, jsHeaders C.napi_value) map[string]string {
	headers := make(map[string]string)
	var length C.uint32_t
	C.napi_get_array_length(env, jsHeaders, &length)

	for i := uint32(0); i < uint32(length); i += 2 {
		var keyVal C.napi_value
		C.napi_get_element(env, jsHeaders, C.uint32_t(i), &keyVal)
		var keyBuf [256]C.char
		var keyRes C.size_t
		C.napi_get_value_string_utf8(env, keyVal, &keyBuf[0], 256, &keyRes)
		key := C.GoString(&keyBuf[0])

		var valVal C.napi_value
		C.napi_get_element(env, jsHeaders, C.uint32_t(i+1), &valVal)
		var valBuf [1024]C.char
		var valRes C.size_t
		C.napi_get_value_string_utf8(env, valVal, &valBuf[0], 1024, &valRes)
		val := C.GoString(&valBuf[0])

		headers[key] = val
	}
	return headers
}

func createError(env C.napi_env, msg string) C.napi_value {
	var errVal C.napi_value
	var strVal C.napi_value
	C.napi_create_string_utf8(env, C.CString(msg), C.size_t(len(msg)), &strVal)
	C.napi_create_error(env, nil, strVal, &errVal)
	return errVal
}

type StreamEvent struct {
	TypeFlag int
	Data     []byte
}

func sendStreamBatch(tsfn C.napi_threadsafe_function, streamId int, events []StreamEvent) {
	batch := (*C.StreamBatchPayload)(C.malloc(C.size_t(unsafe.Sizeof(C.StreamBatchPayload{}))))
	batch.stream_id = C.int(streamId)
	batch.stream_err = nil
	batch.events_count = C.int(len(events))

	if len(events) > 0 {
		eventsSize := C.size_t(uintptr(len(events)) * unsafe.Sizeof(C.EventPayload{}))
		batch.events = (*C.EventPayload)(C.malloc(eventsSize))

		var cEvents []C.EventPayload
		sliceHeader := (*reflect.SliceHeader)(unsafe.Pointer(&cEvents))
		sliceHeader.Data = uintptr(unsafe.Pointer(batch.events))
		sliceHeader.Len = len(events)
		sliceHeader.Cap = len(events)

		for i, event := range events {
			cEvents[i].type_flag = C.int(event.TypeFlag)
			cEvents[i].err_msg = nil
			if len(event.Data) > 0 {
				cEvents[i].bytes_len = C.size_t(len(event.Data))
				cEvents[i].bytes_data = C.malloc(C.size_t(len(event.Data)))
				C.memcpy(cEvents[i].bytes_data, unsafe.Pointer(&event.Data[0]), C.size_t(len(event.Data)))
			} else {
				cEvents[i].bytes_len = 0
				cEvents[i].bytes_data = nil
			}
		}
	} else {
		batch.events = nil
	}

	C.napi_call_threadsafe_function(tsfn, unsafe.Pointer(batch), C.napi_tsfn_blocking)
}

func sendStreamGlobalError(tsfn C.napi_threadsafe_function, streamId int, err error) {
	batch := (*C.StreamBatchPayload)(C.malloc(C.size_t(unsafe.Sizeof(C.StreamBatchPayload{}))))
	batch.stream_id = C.int(streamId)
	batch.stream_err = C.CString(err.Error())
	batch.events = nil
	batch.events_count = 0
	C.napi_call_threadsafe_function(tsfn, unsafe.Pointer(batch), C.napi_tsfn_blocking)
}

func sendStreamError(tsfn C.napi_threadsafe_function, streamId int, err error) {
	sendStreamGlobalError(tsfn, streamId, err)
}

func sendStreamChunk(tsfn C.napi_threadsafe_function, streamId int, typeFlag int, data []byte) {
	sendStreamBatch(tsfn, streamId, []StreamEvent{{TypeFlag: typeFlag, Data: data}})
}

func streamExecuteSqlArrow(ctx context.Context, client *spanner.Client, requestBytes []byte, headers map[string]string, channelHint int, streamId int, tsfn C.napi_threadsafe_function) {
	iter, err := client.NewResumableRowIterator(ctx, "/google.spanner.v1.Spanner/ExecuteStreamingSql", requestBytes, headers, channelHint)
	if err != nil {
		sendStreamError(tsfn, streamId, err)
		return
	}
	defer iter.Stop()

	var arrowSchema *arrow.Schema
	var builders []ArrowColumnBuilder
	var mem memory.Allocator = memory.NewGoAllocator()

	var carryRows []*spanner.Row
	var writer *ipc.Writer
	var buf bytes.Buffer
	var eventBatch []StreamEvent

	for {
		row, err := iter.Next()
		if err == iterator.Done {
			break
		}
		if err != nil {
			sendStreamGlobalError(tsfn, streamId, err)
			return
		}

		if writer == nil && iter.Metadata != nil {
			prsMetadata := &sppb.PartialResultSet{
				Metadata: iter.Metadata,
			}
			metadataBytes, err := proto.Marshal(prsMetadata)
			if err == nil {
				eventBatch = append(eventBatch, StreamEvent{TypeFlag: 0, Data: metadataBytes})
			}
			names := make([]string, len(iter.Metadata.RowType.Fields))
			types := make([]*sppb.Type, len(iter.Metadata.RowType.Fields))
			for i, f := range iter.Metadata.RowType.Fields {
				names[i] = f.Name
				types[i] = f.Type
			}
			arrowSchema, builders = BuildArrowSchemaAndBuilders(names, types, mem)
			writer = ipc.NewWriter(&buf, ipc.WithSchema(arrowSchema))
		}

		carryRows = append(carryRows, row)

		if writer != nil && len(carryRows) >= 1000 {
			batchBytes, err := WriteRecordBatch(writer, &buf, arrowSchema, builders, carryRows)
			if err != nil {
				sendStreamGlobalError(tsfn, streamId, err)
				return
			}
			eventBatch = append(eventBatch, StreamEvent{TypeFlag: 1, Data: batchBytes})
			sendStreamBatch(tsfn, streamId, eventBatch)
			eventBatch = nil
			carryRows = carryRows[:0]
		}
	}

	if writer != nil && len(carryRows) > 0 {
		batchBytes, err := WriteRecordBatch(writer, &buf, arrowSchema, builders, carryRows)
		if err != nil {
			sendStreamGlobalError(tsfn, streamId, err)
			return
		}
		eventBatch = append(eventBatch, StreamEvent{TypeFlag: 1, Data: batchBytes})
	}

	if writer != nil {
		if err := writer.Close(); err == nil {
			footerBytes := buf.Bytes()
			if len(footerBytes) > 0 {
				eventBatch = append(eventBatch, StreamEvent{TypeFlag: 1, Data: footerBytes})
			}
		}
	}

	eofPrs := &sppb.PartialResultSet{Last: true}
	eofBytes, _ := proto.Marshal(eofPrs)
	eventBatch = append(eventBatch, StreamEvent{TypeFlag: 0, Data: eofBytes})
	eventBatch = append(eventBatch, StreamEvent{TypeFlag: 0, Data: nil})
	sendStreamBatch(tsfn, streamId, eventBatch)
}

type ArrowColumnBuilder interface {
	AppendNull()
	AppendValue(v *structpb.Value)
}

type BoolBuilder struct {
	*array.BooleanBuilder
}

func (b *BoolBuilder) AppendValue(v *structpb.Value) {
	if v == nil {
		b.AppendNull()
		return
	}
	if val, ok := v.Kind.(*structpb.Value_BoolValue); ok {
		b.Append(val.BoolValue)
	} else {
		b.AppendNull()
	}
}

type Int64Builder struct {
	*array.Int64Builder
}

func (b *Int64Builder) AppendValue(v *structpb.Value) {
	if v == nil {
		b.AppendNull()
		return
	}
	if val, ok := v.Kind.(*structpb.Value_StringValue); ok {
		if i, err := strconv.ParseInt(val.StringValue, 10, 64); err == nil {
			b.Append(i)
		} else {
			b.AppendNull()
		}
	} else {
		b.AppendNull()
	}
}

type Float64Builder struct {
	*array.Float64Builder
}

func (b *Float64Builder) AppendValue(v *structpb.Value) {
	if v == nil {
		b.AppendNull()
		return
	}
	switch val := v.Kind.(type) {
	case *structpb.Value_NumberValue:
		b.Append(val.NumberValue)
	case *structpb.Value_StringValue:
		if val.StringValue == "NaN" {
			b.Append(math.NaN())
		} else if val.StringValue == "Infinity" {
			b.Append(math.Inf(1))
		} else if val.StringValue == "-Infinity" {
			b.Append(math.Inf(-1))
		} else if f, err := strconv.ParseFloat(val.StringValue, 64); err == nil {
			b.Append(f)
		} else {
			b.AppendNull()
		}
	default:
		b.AppendNull()
	}
}

type StringBuilder struct {
	*array.StringBuilder
}

func (b *StringBuilder) AppendValue(v *structpb.Value) {
	if v == nil {
		b.AppendNull()
		return
	}
	switch val := v.Kind.(type) {
	case *structpb.Value_StringValue:
		b.Append(val.StringValue)
	case *structpb.Value_BoolValue:
		b.Append(strconv.FormatBool(val.BoolValue))
	case *structpb.Value_NumberValue:
		b.Append(strconv.FormatFloat(val.NumberValue, 'g', -1, 64))
	case *structpb.Value_ListValue:
		jsonBytes, _ := json.Marshal(val.ListValue)
		b.Append(string(jsonBytes))
	case *structpb.Value_StructValue:
		jsonBytes, _ := json.Marshal(val.StructValue)
		b.Append(string(jsonBytes))
	default:
		b.AppendNull()
	}
}

func BuildArrowSchemaAndBuilders(names []string, types []*sppb.Type, mem memory.Allocator) (*arrow.Schema, []ArrowColumnBuilder) {
	fields := make([]arrow.Field, len(names))
	builders := make([]ArrowColumnBuilder, len(names))

	for i, name := range names {
		t := types[i]
		var dt arrow.DataType
		switch t.Code {
		case sppb.TypeCode_BOOL:
			dt = arrow.FixedWidthTypes.Boolean
			builders[i] = &BoolBuilder{BooleanBuilder: array.NewBooleanBuilder(mem)}
		case sppb.TypeCode_INT64:
			dt = arrow.PrimitiveTypes.Int64
			builders[i] = &Int64Builder{Int64Builder: array.NewInt64Builder(mem)}
		case sppb.TypeCode_FLOAT64:
			dt = arrow.PrimitiveTypes.Float64
			builders[i] = &Float64Builder{Float64Builder: array.NewFloat64Builder(mem)}
		default:
			dt = arrow.BinaryTypes.String
			builders[i] = &StringBuilder{StringBuilder: array.NewStringBuilder(mem)}
		}
		fields[i] = arrow.Field{Name: name, Type: dt, Nullable: true}
	}
	return arrow.NewSchema(fields, nil), builders
}

func WriteRecordBatch(writer *ipc.Writer, buf *bytes.Buffer, schema *arrow.Schema, builders []ArrowColumnBuilder, rows []*spanner.Row) ([]byte, error) {
	for _, row := range rows {
		for colIdx, builder := range builders {
			val := row.ColumnValue(colIdx)
			builder.AppendValue(val)
		}
	}

	arrays := make([]arrow.Array, len(builders))
	for i, b := range builders {
		switch builder := b.(type) {
		case *BoolBuilder:
			arrays[i] = builder.NewBooleanArray()
		case *Int64Builder:
			arrays[i] = builder.NewInt64Array()
		case *Float64Builder:
			arrays[i] = builder.NewFloat64Array()
		case *StringBuilder:
			arrays[i] = builder.NewStringArray()
		}
		defer arrays[i].Release()
	}

	record := array.NewRecord(schema, arrays, int64(len(rows)))
	defer record.Release()

	if err := writer.Write(record); err != nil {
		return nil, err
	}

	bytesWritten := buf.Bytes()
	res := make([]byte, len(bytesWritten))
	copy(res, bytesWritten)
	buf.Reset()

	return res, nil
}

//export napi_register_module_v1
func napi_register_module_v1(env C.napi_env, exports C.napi_value) C.napi_value {
	var proxyClass C.napi_value

	desc := []C.napi_property_descriptor{
		{
			utf8name:   C.CString("makeUnaryCall"),
			method:     (C.napi_callback)(C.MakeUnaryCall),
			attributes: C.napi_default,
		},
		{
			utf8name:   C.CString("makeStreamingCall"),
			method:     (C.napi_callback)(C.MakeStreamingCall),
			attributes: C.napi_default,
		},
	}

	C.napi_define_class(
		env,
		C.CString("NativeGrpcProxy"),
		C.NAPI_AUTO_LENGTH,
		(C.napi_callback)(C.Constructor),
		nil,
		C.size_t(len(desc)),
		&desc[0],
		&proxyClass,
	)

	C.napi_set_named_property(env, exports, C.CString("NativeGrpcProxy"), proxyClass)

	return exports
}

func (inst *ProxyInstance) dispatcherLoop() {
	inst.wg.Add(1)
	defer inst.wg.Done()

	for {
		select {
		case <-inst.closeChan:
			inst.flushPending()
			return
		case item := <-inst.batchChan:
			inst.gatherAndFlush(item)
		}
	}
}

func (inst *ProxyInstance) gatherAndFlush(firstItem *batchItemGo) {
	batch := []*batchItemGo{firstItem}

	maxBatchSize := 100
Loop:
	for len(batch) < maxBatchSize {
		select {
		case item := <-inst.batchChan:
			batch = append(batch, item)
		default:
			break Loop
		}
	}

	count := len(batch)

	batchPayload := (*C.BatchPayload)(C.malloc(C.size_t(unsafe.Sizeof(C.BatchPayload{}))))
	batchPayload.count = C.int(count)

	itemsSize := C.size_t(uintptr(count) * unsafe.Sizeof(C.BatchItem{}))
	batchPayload.items = (*C.BatchItem)(C.malloc(itemsSize))

	itemsSlice := unsafe.Slice(batchPayload.items, count)

	for i, item := range batch {
		cItem := &itemsSlice[i]
		cItem.deferred = item.deferred

		if item.err != nil {
			cItem.type_flag = -1
			cItem.err_msg = C.CString(item.err.Error())
			cItem.bytes_data = nil
			cItem.bytes_len = 0
		} else {
			cItem.type_flag = 0
			cItem.err_msg = nil
			cItem.bytes_len = C.size_t(len(item.respBytes))
			if len(item.respBytes) > 0 {
				cItem.bytes_data = C.malloc(C.size_t(len(item.respBytes)))
				C.memcpy(cItem.bytes_data, unsafe.Pointer(&item.respBytes[0]), C.size_t(len(item.respBytes)))
			} else {
				cItem.bytes_data = nil
			}
		}
	}

	C.napi_call_threadsafe_function(inst.batchTsfn, unsafe.Pointer(batchPayload), C.napi_tsfn_blocking)
}

func (inst *ProxyInstance) flushPending() {
	for {
		select {
		case item := <-inst.batchChan:
			inst.gatherAndFlush(item)
		default:
			return
		}
	}
}

func main() {}
