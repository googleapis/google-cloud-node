#include <node_api.h>
#include <stdlib.h>
#include <string.h>

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

void CallJsCallback(napi_env env, napi_value js_cb, void* context, void* data) {
    napi_handle_scope scope;
    napi_open_handle_scope(env, &scope);

    StreamPayload* payload = (StreamPayload*)data;

    if (payload->deferred != NULL) {
        napi_deferred deferred = (napi_deferred)payload->deferred;
        if (payload->type_flag == -1) {
            napi_value error_msg, error_val;
            napi_create_string_utf8(env, payload->err_msg, NAPI_AUTO_LENGTH, &error_msg);
            napi_create_error(env, NULL, error_msg, &error_val);
            napi_reject_deferred(env, deferred, error_val);
        } else {
            napi_value js_buf;
            void* buffer_data;
            napi_create_arraybuffer(env, payload->bytes_len, &buffer_data, &js_buf);
            memcpy(buffer_data, payload->bytes_data, payload->bytes_len);
            napi_resolve_deferred(env, deferred, js_buf);
        }
    } else {
        napi_value args[3];
        napi_value undefined;
        napi_get_undefined(env, &undefined);

        if (payload->type_flag == -1) {
            napi_value error_msg;
            napi_create_string_utf8(env, payload->err_msg, NAPI_AUTO_LENGTH, &error_msg);
            napi_create_error(env, NULL, error_msg, &args[0]);
            args[1] = undefined;
            args[2] = undefined;
        } else {
            napi_get_null(env, &args[0]);
            napi_create_int32(env, payload->type_flag, &args[1]);
            if (payload->bytes_len > 0) {
                void* buffer_data;
                napi_value array_buffer;
                napi_create_arraybuffer(env, payload->bytes_len, &buffer_data, &array_buffer);
                memcpy(buffer_data, payload->bytes_data, payload->bytes_len);
                args[2] = array_buffer;
            } else {
                napi_get_null(env, &args[2]);
            }
        }

        napi_value global;
        napi_get_global(env, &global);
        napi_call_function(env, global, js_cb, 3, args, NULL);
    }

    if (payload->err_msg) free(payload->err_msg);
    if (payload->bytes_data) free(payload->bytes_data);
    free(payload);

    napi_close_handle_scope(env, scope);
}

void CallStreamJsCallback(napi_env env, napi_value js_cb, void* context, void* data) {
    napi_handle_scope scope;
    napi_open_handle_scope(env, &scope);

    StreamBatchPayload* batch = (StreamBatchPayload*)data;

    napi_value args[4];

    // arg 0: napiErr (if stream_err is not null)
    if (batch->stream_err != NULL) {
        napi_value error_msg;
        napi_create_string_utf8(env, batch->stream_err, NAPI_AUTO_LENGTH, &error_msg);
        napi_create_error(env, NULL, error_msg, &args[0]);
    } else {
        napi_get_null(env, &args[0]);
    }

    // arg 1: streamId
    napi_create_int32(env, batch->stream_id, &args[1]);

    // arg 2: realErr (always null for batch events)
    napi_get_null(env, &args[2]);

    // arg 3: events array
    if (batch->events_count > 0 && batch->events != NULL) {
        napi_value js_array;
        napi_create_array_with_length(env, batch->events_count, &js_array);

        for (int i = 0; i < batch->events_count; i++) {
            EventPayload* event = &batch->events[i];
            napi_value event_obj;
            napi_create_object(env, &event_obj);

            napi_value type_val;
            napi_create_int32(env, event->type_flag, &type_val);
            napi_set_named_property(env, event_obj, "typeFlag", type_val);

            napi_value payload_val;
            if (event->type_flag == -1) {
                napi_value error_msg;
                napi_create_string_utf8(env, event->err_msg, NAPI_AUTO_LENGTH, &error_msg);
                napi_create_error(env, NULL, error_msg, &payload_val);
            } else if (event->bytes_len > 0) {
                void* buffer_data;
                napi_create_arraybuffer(env, event->bytes_len, &buffer_data, &payload_val);
                memcpy(buffer_data, event->bytes_data, event->bytes_len);
            } else {
                napi_get_null(env, &payload_val);
            }
            napi_set_named_property(env, event_obj, "payload", payload_val);

            napi_set_element(env, js_array, i, event_obj);
        }
        args[3] = js_array;
    } else {
        napi_get_null(env, &args[3]);
    }

    napi_value global;
    napi_get_global(env, &global);
    napi_call_function(env, global, js_cb, 4, args, NULL);

    if (batch->stream_err) free(batch->stream_err);
    if (batch->events) {
        for (int i = 0; i < batch->events_count; i++) {
            if (batch->events[i].err_msg) free(batch->events[i].err_msg);
            if (batch->events[i].bytes_data) free(batch->events[i].bytes_data);
        }
        free(batch->events);
    }
    free(batch);

    napi_close_handle_scope(env, scope);
}

napi_value DummyCallback(napi_env env, napi_callback_info info) {
    return NULL;
}

void CallJsBatchCallback(napi_env env, napi_value js_cb, void* context, void* data) {
    napi_handle_scope scope;
    napi_open_handle_scope(env, &scope);

    BatchPayload* batch = (BatchPayload*)data;
    for (int i = 0; i < batch->count; i++) {
        BatchItem* item = &batch->items[i];
        if (item->deferred != NULL) {
            napi_deferred deferred = (napi_deferred)item->deferred;
            if (item->type_flag == -1) {
                napi_value error_msg, error_val;
                napi_create_string_utf8(env, item->err_msg, NAPI_AUTO_LENGTH, &error_msg);
                napi_create_error(env, NULL, error_msg, &error_val);
                napi_reject_deferred(env, deferred, error_val);
            } else {
                napi_value js_buf;
                void* buffer_data;
                napi_create_arraybuffer(env, item->bytes_len, &buffer_data, &js_buf);
                if (item->bytes_len > 0 && item->bytes_data != NULL) {
                    memcpy(buffer_data, item->bytes_data, item->bytes_len);
                }
                napi_resolve_deferred(env, deferred, js_buf);
            }
        }
        if (item->err_msg) free(item->err_msg);
        if (item->bytes_data) free(item->bytes_data);
    }

    free(batch->items);
    free(batch);

    napi_close_handle_scope(env, scope);
}
