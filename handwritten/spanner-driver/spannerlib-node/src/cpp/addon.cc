// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

#include <napi.h>
#include "libspanner.h"

// Documentation for Go function return fields (r0 - r4):
// r0: Pinner ID (used for memory management to keep Go objects pinned)
// r1: Error Code (0 for success, non-zero for error)
// r2: Object ID (Handle to the created object, e.g., Pool or Connection)
// r3: Message Length (Length of the protobuf message or error string in r4)
// r4: Message Data (Pointer to protobuf bytes or JSON error message)

template <typename T>
Napi::Object CreateResultObject(Napi::Env env, const T& result) {
    Napi::Object obj = Napi::Object::New(env);
    obj.Set("r0", Napi::Number::New(env, 0));
    obj.Set("r1", Napi::Number::New(env, result.r1));
    obj.Set("r2", Napi::Number::New(env, result.r2));
    obj.Set("r3", Napi::Number::New(env, result.r3));
    if (result.r4 != nullptr && result.r3 > 0) {
        obj.Set("r4", Napi::Buffer<uint8_t>::Copy(env, (uint8_t*)result.r4, result.r3));
    } else {
        obj.Set("r4", env.Null());
    }
    if (result.r0 > 0) {
        ::Release(result.r0);
    }
    return obj;
}

//
// Worker 1: CreatePool asynchronously
//
class CreatePoolWorker : public Napi::AsyncWorker {
public:
    CreatePoolWorker(Napi::Function& callback, std::string userAgent, std::string connStr)
        : AsyncWorker(callback), userAgent_(userAgent), connStr_(connStr), result_({0, 0, 0, 0, nullptr}) {}

    void Execute() override {
        GoString goUserAgent = {userAgent_.c_str(), (ptrdiff_t)userAgent_.length()};
        GoString goConnStr = {connStr_.c_str(), (ptrdiff_t)connStr_.length()};
        result_ = CreatePool(goUserAgent, goConnStr);
    }

    void OnOK() override {
        Napi::Env env = Env();
        Napi::Object obj = CreateResultObject(env, result_);
        Callback().Call({env.Null(), obj});
    }

private:
    std::string userAgent_;
    std::string connStr_;
    CreatePool_return result_;
};

Napi::Value CreatePoolWrapper(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    if (info.Length() < 3 || !info[0].IsString() || !info[1].IsString() || !info[2].IsFunction()) {
        Napi::Error::New(env, "CreatePoolWrapper requires (String, String, Function)").ThrowAsJavaScriptException();
        return env.Null();
    }
    std::string ua = info[0].As<Napi::String>();
    std::string cs = info[1].As<Napi::String>();
    Napi::Function cb = info[2].As<Napi::Function>();
    CreatePoolWorker* worker = new CreatePoolWorker(cb, ua, cs);
    worker->Queue();
    return env.Undefined();
}

//
// Worker 2: ClosePool asynchronously
//
class ClosePoolWorker : public Napi::AsyncWorker {
public:
    ClosePoolWorker(Napi::Function& callback, int64_t poolId)
        : AsyncWorker(callback), poolId_(poolId), result_({0, 0, 0, 0, nullptr}) {}

    void Execute() override {
        result_ = ClosePool(poolId_);
    }

    void OnOK() override {
        Napi::Env env = Env();
        Napi::Object obj = CreateResultObject(env, result_);
        Callback().Call({env.Null(), obj});
    }
private:
    int64_t poolId_;
    ClosePool_return result_;
};

Napi::Value ClosePoolWrapper(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    if (info.Length() < 2 || !info[0].IsNumber() || !info[1].IsFunction()) {
        Napi::Error::New(env, "ClosePoolWrapper requires (Number, Function)").ThrowAsJavaScriptException();
        return env.Null();
    }
    int64_t pid = info[0].As<Napi::Number>().Int64Value();
    Napi::Function cb = info[1].As<Napi::Function>();
    ClosePoolWorker* worker = new ClosePoolWorker(cb, pid);
    worker->Queue();
    return env.Undefined();
}

//
// Worker 3: CreateConnection asynchronously
//
class CreateConnectionWorker : public Napi::AsyncWorker {
public:
    CreateConnectionWorker(Napi::Function& callback, int64_t poolId)
        : AsyncWorker(callback), poolId_(poolId), result_({0, 0, 0, 0, nullptr}) {}

    void Execute() override {
        result_ = CreateConnection(poolId_);
    }

    void OnOK() override {
        Napi::Env env = Env();
        Napi::Object obj = CreateResultObject(env, result_);
        Callback().Call({env.Null(), obj});
    }
private:
    int64_t poolId_;
    CreateConnection_return result_;
};

Napi::Value CreateConnectionWrapper(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    if (info.Length() < 2 || !info[0].IsNumber() || !info[1].IsFunction()) {
        Napi::Error::New(env, "CreateConnectionWrapper requires (Number, Function)").ThrowAsJavaScriptException();
        return env.Null();
    }
    int64_t pid = info[0].As<Napi::Number>().Int64Value();
    Napi::Function cb = info[1].As<Napi::Function>();
    CreateConnectionWorker* worker = new CreateConnectionWorker(cb, pid);
    worker->Queue();
    return env.Undefined();
}

//
// Worker 4: CloseConnection asynchronously
//
class CloseConnectionWorker : public Napi::AsyncWorker {
public:
    CloseConnectionWorker(Napi::Function& callback, int64_t poolId, int64_t connId)
        : AsyncWorker(callback), poolId_(poolId), connId_(connId), result_({0, 0, 0, 0, nullptr}) {}

    void Execute() override {
        result_ = CloseConnection(poolId_, connId_);
    }

    void OnOK() override {
        Napi::Env env = Env();
        Napi::Object obj = CreateResultObject(env, result_);
        Callback().Call({env.Null(), obj});
    }
private:
    int64_t poolId_, connId_;
    CloseConnection_return result_;
};

Napi::Value CloseConnectionWrapper(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    if (info.Length() < 3 || !info[0].IsNumber() || !info[1].IsNumber() || !info[2].IsFunction()) {
        Napi::Error::New(env, "CloseConnectionWrapper requires (Number, Number, Function)").ThrowAsJavaScriptException();
        return env.Null();
    }
    int64_t pid = info[0].As<Napi::Number>().Int64Value();
    int64_t cid = info[1].As<Napi::Number>().Int64Value();
    Napi::Function cb = info[2].As<Napi::Function>();
    CloseConnectionWorker* worker = new CloseConnectionWorker(cb, pid, cid);
    worker->Queue();
    return env.Undefined();
}

//
// Worker 5: Execute asynchronously
//
class ExecuteWorker : public Napi::AsyncWorker {
public:
    ExecuteWorker(Napi::Function& callback, int64_t poolId, int64_t connId, std::string payload)
        : AsyncWorker(callback), poolId_(poolId), connId_(connId), payload_(payload), result_({0, 0, 0, 0, nullptr}) {}

    void Execute() override {
        GoSlice goPayload = {(void*)payload_.data(), (ptrdiff_t)payload_.length(), (ptrdiff_t)payload_.length()};
        result_ = ::Execute(poolId_, connId_, goPayload);
    }

    void OnOK() override {
        Napi::Env env = Env();
        Napi::Object obj = CreateResultObject(env, result_);
        Callback().Call({env.Null(), obj});
    }
private:
    int64_t poolId_, connId_;
    std::string payload_;
    Execute_return result_;
};

Napi::Value ExecuteWrapper(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    if (info.Length() < 4) {
        Napi::Error::New(env, "ExecuteWrapper requires 4 arguments").ThrowAsJavaScriptException();
        return env.Null();
    }
    if (!info[0].IsNumber() || !info[1].IsNumber() || !info[2].IsBuffer() || !info[3].IsFunction()) {
        Napi::Error::New(env, "Invalid argument types in ExecuteWrapper").ThrowAsJavaScriptException();
        return env.Null();
    }
    int64_t pid = info[0].As<Napi::Number>().Int64Value();
    int64_t cid = info[1].As<Napi::Number>().Int64Value();
    
    Napi::Buffer<uint8_t> buffer = info[2].As<Napi::Buffer<uint8_t>>();
    std::string payload(buffer.Length() > 0 ? reinterpret_cast<const char*>(buffer.Data()) : "", buffer.Length());
    
    Napi::Function cb = info[3].As<Napi::Function>();
    ExecuteWorker* worker = new ExecuteWorker(cb, pid, cid, payload);
    worker->Queue();
    return env.Undefined();
}

//
// Worker 6: Next asynchronously
//
class NextWorker : public Napi::AsyncWorker {
public:
    NextWorker(Napi::Function& callback, int64_t poolId, int64_t connId, int64_t rowsId, int32_t numRows, int32_t encodeOtp)
        : AsyncWorker(callback), poolId_(poolId), connId_(connId), rowsId_(rowsId), numRows_(numRows), encodeOtp_(encodeOtp), result_({0, 0, 0, 0, nullptr}) {}

    void Execute() override {
        result_ = ::Next(poolId_, connId_, rowsId_, numRows_, encodeOtp_);
    }

    void OnOK() override {
        Napi::Env env = Env();
        Napi::Object obj = CreateResultObject(env, result_);
        Callback().Call({env.Null(), obj});
    }
private:
    int64_t poolId_, connId_, rowsId_;
    int32_t numRows_, encodeOtp_;
    Next_return result_;
};

Napi::Value NextWrapper(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    if (info.Length() < 6 || !info[0].IsNumber() || !info[1].IsNumber() || !info[2].IsNumber() || 
        !info[3].IsNumber() || !info[4].IsNumber() || !info[5].IsFunction()) {
        Napi::Error::New(env, "NextWrapper requires (Number, Number, Number, Number, Number, Function)").ThrowAsJavaScriptException();
        return env.Null();
    }
    int64_t pid = info[0].As<Napi::Number>().Int64Value();
    int64_t cid = info[1].As<Napi::Number>().Int64Value();
    int64_t rid = info[2].As<Napi::Number>().Int64Value();
    int32_t num = info[3].As<Napi::Number>().Int32Value();
    int32_t encode = info[4].As<Napi::Number>().Int32Value();
    Napi::Function cb = info[5].As<Napi::Function>();
    
    NextWorker* worker = new NextWorker(cb, pid, cid, rid, num, encode);
    worker->Queue();
    return env.Undefined();
}

//
// Worker 7: Metadata asynchronously
//
class MetadataWorker : public Napi::AsyncWorker {
public:
    MetadataWorker(Napi::Function& callback, int64_t poolId, int64_t connId, int64_t rowsId)
        : AsyncWorker(callback), poolId_(poolId), connId_(connId), rowsId_(rowsId), result_({0, 0, 0, 0, nullptr}) {}

    void Execute() override {
        result_ = ::Metadata(poolId_, connId_, rowsId_);
    }

    void OnOK() override {
        Napi::Env env = Env();
        Napi::Object obj = CreateResultObject(env, result_);
        Callback().Call({env.Null(), obj});
    }
private:
    int64_t poolId_, connId_, rowsId_;
    Metadata_return result_;
};

//
// Worker 8: CloseRows asynchronously
//
class CloseRowsWorker : public Napi::AsyncWorker {
public:
    CloseRowsWorker(Napi::Function& callback, int64_t poolId, int64_t connId, int64_t rowsId)
        : AsyncWorker(callback), poolId_(poolId), connId_(connId), rowsId_(rowsId), result_({0, 0, 0, 0, nullptr}) {}

    void Execute() override {
        result_ = ::CloseRows(poolId_, connId_, rowsId_);
    }

    void OnOK() override {
        Napi::Env env = Env();
        Napi::Object obj = CreateResultObject(env, result_);
        Callback().Call({env.Null(), obj});
    }
private:
    int64_t poolId_, connId_, rowsId_;
    CloseRows_return result_;
};

Napi::Value MetadataWrapper(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    if (info.Length() < 4 || !info[0].IsNumber() || !info[1].IsNumber() || !info[2].IsNumber() || !info[3].IsFunction()) {
        Napi::Error::New(env, "MetadataWrapper requires (Number, Number, Number, Function)").ThrowAsJavaScriptException();
        return env.Null();
    }
    int64_t pid = info[0].As<Napi::Number>().Int64Value();
    int64_t cid = info[1].As<Napi::Number>().Int64Value();
    int64_t rid = info[2].As<Napi::Number>().Int64Value();
    Napi::Function cb = info[3].As<Napi::Function>();
    
    MetadataWorker* worker = new MetadataWorker(cb, pid, cid, rid);
    worker->Queue();
    return env.Undefined();
}

//
// Worker 7b: ResultSetStats asynchronously
//
class ResultSetStatsWorker : public Napi::AsyncWorker {
public:
    ResultSetStatsWorker(Napi::Function& callback, int64_t poolId, int64_t connId, int64_t rowsId)
        : AsyncWorker(callback), poolId_(poolId), connId_(connId), rowsId_(rowsId), result_({0, 0, 0, 0, nullptr}) {}

    void Execute() override {
        result_ = ::ResultSetStats(poolId_, connId_, rowsId_);
    }

    void OnOK() override {
        Napi::Env env = Env();
        Napi::Object obj = CreateResultObject(env, result_);
        Callback().Call({env.Null(), obj});
    }
private:
    int64_t poolId_, connId_, rowsId_;
    ResultSetStats_return result_;
};

Napi::Value ResultSetStatsWrapper(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    if (info.Length() < 4 || !info[0].IsNumber() || !info[1].IsNumber() || !info[2].IsNumber() || !info[3].IsFunction()) {
        Napi::Error::New(env, "ResultSetStatsWrapper requires (Number, Number, Number, Function)").ThrowAsJavaScriptException();
        return env.Null();
    }
    int64_t pid = info[0].As<Napi::Number>().Int64Value();
    int64_t cid = info[1].As<Napi::Number>().Int64Value();
    int64_t rid = info[2].As<Napi::Number>().Int64Value();
    Napi::Function cb = info[3].As<Napi::Function>();
    
    ResultSetStatsWorker* worker = new ResultSetStatsWorker(cb, pid, cid, rid);
    worker->Queue();
    return env.Undefined();
}

//
// Worker 7c: NextResultSet asynchronously
//
class NextResultSetWorker : public Napi::AsyncWorker {
public:
    NextResultSetWorker(Napi::Function& callback, int64_t poolId, int64_t connId, int64_t rowsId)
        : AsyncWorker(callback), poolId_(poolId), connId_(connId), rowsId_(rowsId), result_({0, 0, 0, 0, nullptr}) {}

    void Execute() override {
        result_ = ::NextResultSet(poolId_, connId_, rowsId_);
    }

    void OnOK() override {
        Napi::Env env = Env();
        Napi::Object obj = CreateResultObject(env, result_);
        Callback().Call({env.Null(), obj});
    }
private:
    int64_t poolId_, connId_, rowsId_;
    NextResultSet_return result_;
};

Napi::Value NextResultSetWrapper(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    if (info.Length() < 4 || !info[0].IsNumber() || !info[1].IsNumber() || !info[2].IsNumber() || !info[3].IsFunction()) {
        Napi::Error::New(env, "NextResultSetWrapper requires (Number, Number, Number, Function)").ThrowAsJavaScriptException();
        return env.Null();
    }
    int64_t pid = info[0].As<Napi::Number>().Int64Value();
    int64_t cid = info[1].As<Napi::Number>().Int64Value();
    int64_t rid = info[2].As<Napi::Number>().Int64Value();
    Napi::Function cb = info[3].As<Napi::Function>();
    
    NextResultSetWorker* worker = new NextResultSetWorker(cb, pid, cid, rid);
    worker->Queue();
    return env.Undefined();
}


// Memory Release (Synchronous as it is just freeing RAM via GC)
Napi::Value NativeRelease(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    if (info.Length() < 1 || !info[0].IsNumber()) return env.Null();
    int64_t pid = info[0].As<Napi::Number>().Int64Value();
    Release(pid);
    return env.Undefined();
}

Napi::Value CloseRowsWrapper(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    if (info.Length() < 4 || !info[0].IsNumber() || !info[1].IsNumber() || !info[2].IsNumber() || !info[3].IsFunction()) {
        Napi::Error::New(env, "CloseRowsWrapper requires (Number, Number, Number, Function)").ThrowAsJavaScriptException();
        return env.Null();
    }
    int64_t pid = info[0].As<Napi::Number>().Int64Value();
    int64_t cid = info[1].As<Napi::Number>().Int64Value();
    int64_t rid = info[2].As<Napi::Number>().Int64Value();
    Napi::Function cb = info[3].As<Napi::Function>();
    
    CloseRowsWorker* worker = new CloseRowsWorker(cb, pid, cid, rid);
    worker->Queue();
    return env.Undefined();
}

//
// Worker 9: BeginTransaction asynchronously
//
class BeginTransactionWorker : public Napi::AsyncWorker {
public:
    BeginTransactionWorker(Napi::Function& callback, int64_t poolId, int64_t connId, std::string payload)
        : AsyncWorker(callback), poolId_(poolId), connId_(connId), payload_(payload), result_({0, 0, 0, 0, nullptr}) {}

    void Execute() override {
        GoSlice goPayload = {(void*)payload_.data(), (ptrdiff_t)payload_.length(), (ptrdiff_t)payload_.length()};
        result_ = ::BeginTransaction(poolId_, connId_, goPayload);
    }

    void OnOK() override {
        Napi::Env env = Env();
        Napi::Object obj = CreateResultObject(env, result_);
        Callback().Call({env.Null(), obj});
    }
private:
    int64_t poolId_, connId_;
    std::string payload_;
    BeginTransaction_return result_;
};

Napi::Value BeginTransactionWrapper(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    if (info.Length() < 4) {
        Napi::Error::New(env, "BeginTransactionWrapper requires 4 arguments").ThrowAsJavaScriptException();
        return env.Null();
    }
    if (!info[0].IsNumber() || !info[1].IsNumber() || !info[2].IsBuffer() || !info[3].IsFunction()) {
        Napi::Error::New(env, "Invalid argument types in BeginTransactionWrapper").ThrowAsJavaScriptException();
        return env.Null();
    }
    int64_t pid = info[0].As<Napi::Number>().Int64Value();
    int64_t cid = info[1].As<Napi::Number>().Int64Value();
    
    Napi::Buffer<uint8_t> buffer = info[2].As<Napi::Buffer<uint8_t>>();
    std::string payload(buffer.Length() > 0 ? reinterpret_cast<const char*>(buffer.Data()) : "", buffer.Length());
    
    Napi::Function cb = info[3].As<Napi::Function>();
    BeginTransactionWorker* worker = new BeginTransactionWorker(cb, pid, cid, payload);
    worker->Queue();
    return env.Undefined();
}

//
// Worker 10: Commit asynchronously
//
class CommitWorker : public Napi::AsyncWorker {
public:
    CommitWorker(Napi::Function& callback, int64_t poolId, int64_t connId)
        : AsyncWorker(callback), poolId_(poolId), connId_(connId), result_({0, 0, 0, 0, nullptr}) {}

    void Execute() override {
        result_ = ::Commit(poolId_, connId_);
    }

    void OnOK() override {
        Napi::Env env = Env();
        Napi::Object obj = CreateResultObject(env, result_);
        Callback().Call({env.Null(), obj});
    }
private:
    int64_t poolId_, connId_;
    Commit_return result_;
};

Napi::Value CommitWrapper(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    if (info.Length() < 3 || !info[0].IsNumber() || !info[1].IsNumber() || !info[2].IsFunction()) {
        Napi::Error::New(env, "CommitWrapper requires (Number, Number, Function)").ThrowAsJavaScriptException();
        return env.Null();
    }
    int64_t pid = info[0].As<Napi::Number>().Int64Value();
    int64_t cid = info[1].As<Napi::Number>().Int64Value();
    Napi::Function cb = info[2].As<Napi::Function>();
    CommitWorker* worker = new CommitWorker(cb, pid, cid);
    worker->Queue();
    return env.Undefined();
}

//
// Worker 11: Rollback asynchronously
//
class RollbackWorker : public Napi::AsyncWorker {
public:
    RollbackWorker(Napi::Function& callback, int64_t poolId, int64_t connId)
        : AsyncWorker(callback), poolId_(poolId), connId_(connId), result_({0, 0, 0, 0, nullptr}) {}

    void Execute() override {
        result_ = ::Rollback(poolId_, connId_);
    }

    void OnOK() override {
        Napi::Env env = Env();
        Napi::Object obj = CreateResultObject(env, result_);
        Callback().Call({env.Null(), obj});
    }
private:
    int64_t poolId_, connId_;
    Rollback_return result_;
};

Napi::Value RollbackWrapper(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    if (info.Length() < 3 || !info[0].IsNumber() || !info[1].IsNumber() || !info[2].IsFunction()) {
        Napi::Error::New(env, "RollbackWrapper requires (Number, Number, Function)").ThrowAsJavaScriptException();
        return env.Null();
    }
    int64_t pid = info[0].As<Napi::Number>().Int64Value();
    int64_t cid = info[1].As<Napi::Number>().Int64Value();
    Napi::Function cb = info[2].As<Napi::Function>();
    RollbackWorker* worker = new RollbackWorker(cb, pid, cid);
    worker->Queue();
    return env.Undefined();
}

//
// Worker 12: WriteMutations asynchronously
//
class WriteMutationsWorker : public Napi::AsyncWorker {
public:
    WriteMutationsWorker(Napi::Function& callback, int64_t poolId, int64_t connId, std::string payload)
        : AsyncWorker(callback), poolId_(poolId), connId_(connId), payload_(payload), result_({0, 0, 0, 0, nullptr}) {}

    void Execute() override {
        GoSlice goPayload = {(void*)payload_.data(), (ptrdiff_t)payload_.length(), (ptrdiff_t)payload_.length()};
        result_ = ::WriteMutations(poolId_, connId_, goPayload);
    }

    void OnOK() override {
        Napi::Env env = Env();
        Napi::Object obj = CreateResultObject(env, result_);
        Callback().Call({env.Null(), obj});
    }
private:
    int64_t poolId_, connId_;
    std::string payload_;
    WriteMutations_return result_;
};

Napi::Value WriteMutationsWrapper(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    if (info.Length() < 4) {
        Napi::Error::New(env, "WriteMutationsWrapper requires 4 arguments").ThrowAsJavaScriptException();
        return env.Null();
    }
    if (!info[0].IsNumber() || !info[1].IsNumber() || !info[2].IsBuffer() || !info[3].IsFunction()) {
        Napi::Error::New(env, "Invalid argument types in WriteMutationsWrapper").ThrowAsJavaScriptException();
        return env.Null();
    }
    int64_t pid = info[0].As<Napi::Number>().Int64Value();
    int64_t cid = info[1].As<Napi::Number>().Int64Value();
    
    Napi::Buffer<uint8_t> buffer = info[2].As<Napi::Buffer<uint8_t>>();
    std::string payload(buffer.Length() > 0 ? reinterpret_cast<const char*>(buffer.Data()) : "", buffer.Length());
    
    Napi::Function cb = info[3].As<Napi::Function>();
    WriteMutationsWorker* worker = new WriteMutationsWorker(cb, pid, cid, payload);
    worker->Queue();
    return env.Undefined();
}

//
// Worker 13: ExecuteBatch asynchronously
//
class ExecuteBatchWorker : public Napi::AsyncWorker {
public:
    ExecuteBatchWorker(Napi::Function& callback, int64_t poolId, int64_t connId, std::string payload)
        : AsyncWorker(callback), poolId_(poolId), connId_(connId), payload_(payload), result_({0, 0, 0, 0, nullptr}) {}

    void Execute() override {
        GoSlice goPayload = {(void*)payload_.data(), (ptrdiff_t)payload_.length(), (ptrdiff_t)payload_.length()};
        result_ = ::ExecuteBatch(poolId_, connId_, goPayload);
    }

    void OnOK() override {
        Napi::Env env = Env();
        Napi::Object obj = CreateResultObject(env, result_);
        Callback().Call({env.Null(), obj});
    }
private:
    int64_t poolId_, connId_;
    std::string payload_;
    ExecuteBatch_return result_;
};

Napi::Value ExecuteBatchWrapper(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    if (info.Length() < 4) {
        Napi::Error::New(env, "ExecuteBatchWrapper requires 4 arguments").ThrowAsJavaScriptException();
        return env.Null();
    }
    if (!info[0].IsNumber() || !info[1].IsNumber() || !info[2].IsBuffer() || !info[3].IsFunction()) {
        Napi::Error::New(env, "Invalid argument types in ExecuteBatchWrapper").ThrowAsJavaScriptException();
        return env.Null();
    }
    int64_t pid = info[0].As<Napi::Number>().Int64Value();
    int64_t cid = info[1].As<Napi::Number>().Int64Value();
    
    Napi::Buffer<uint8_t> buffer = info[2].As<Napi::Buffer<uint8_t>>();
    std::string payload(buffer.Length() > 0 ? reinterpret_cast<const char*>(buffer.Data()) : "", buffer.Length());
    
    Napi::Function cb = info[3].As<Napi::Function>();
    ExecuteBatchWorker* worker = new ExecuteBatchWorker(cb, pid, cid, payload);
    worker->Queue();
    return env.Undefined();
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
    exports.Set("CreatePool", Napi::Function::New(env, CreatePoolWrapper));
    exports.Set("ClosePool", Napi::Function::New(env, ClosePoolWrapper));
    exports.Set("CreateConnection", Napi::Function::New(env, CreateConnectionWrapper));
    exports.Set("CloseConnection", Napi::Function::New(env, CloseConnectionWrapper));
    exports.Set("Execute", Napi::Function::New(env, ExecuteWrapper));
    exports.Set("Next", Napi::Function::New(env, NextWrapper));
    
    exports.Set("CloseRows", Napi::Function::New(env, CloseRowsWrapper));
    exports.Set("Release", Napi::Function::New(env, NativeRelease));
    
    exports.Set("Metadata", Napi::Function::New(env, MetadataWrapper));
    exports.Set("ResultSetStats", Napi::Function::New(env, ResultSetStatsWrapper));
    exports.Set("NextResultSet", Napi::Function::New(env, NextResultSetWrapper));

    exports.Set("BeginTransaction", Napi::Function::New(env, BeginTransactionWrapper));
    exports.Set("Commit", Napi::Function::New(env, CommitWrapper));
    exports.Set("Rollback", Napi::Function::New(env, RollbackWrapper));
    exports.Set("WriteMutations", Napi::Function::New(env, WriteMutationsWrapper));
    exports.Set("ExecuteBatch", Napi::Function::New(env, ExecuteBatchWrapper));
    return exports;
}

NODE_API_MODULE(spanner_napi, Init)
