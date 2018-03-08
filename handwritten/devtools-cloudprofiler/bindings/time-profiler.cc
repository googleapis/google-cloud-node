/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

#include "v8-profiler.h"
#include "nan.h"

using namespace v8;

Local<Value> TranslateTimeProfileNode(const CpuProfileNode* node) {
  Local<Object> js_node = Nan::New<Object>();
  js_node->Set(Nan::New<String>("name").ToLocalChecked(),
    node->GetFunctionName());
  js_node->Set(Nan::New<String>("scriptName").ToLocalChecked(),
    node->GetScriptResourceName());
  js_node->Set(Nan::New<String>("scriptId").ToLocalChecked(),
    Nan::New<Integer>(node->GetScriptId()));
  js_node->Set(Nan::New<String>("lineNumber").ToLocalChecked(),
    Nan::New<Integer>(node->GetLineNumber()));
  js_node->Set(Nan::New<String>("columnNumber").ToLocalChecked(),
    Nan::New<Integer>(node->GetColumnNumber()));
  js_node->Set(Nan::New<String>("hitCount").ToLocalChecked(),
    Nan::New<Integer>(node->GetHitCount()));
  int32_t count = node->GetChildrenCount();
  Local<Array> children = Nan::New<Array>(count);
  for (int32_t i = 0; i < count; i++) {
    children->Set(i, TranslateTimeProfileNode(node->GetChild(i)));
  }
  js_node->Set(Nan::New<String>("children").ToLocalChecked(),
    children);
  return js_node;
}

Local<Value> TranslateTimeProfile(const CpuProfile* profile) {
  Local<Object> js_profile = Nan::New<Object>();
  js_profile->Set(Nan::New<String>("title").ToLocalChecked(),
    profile->GetTitle());
  js_profile->Set(Nan::New<String>("topDownRoot").ToLocalChecked(),
    TranslateTimeProfileNode(profile->GetTopDownRoot()));
  js_profile->Set(Nan::New<String>("startTime").ToLocalChecked(),
    Nan::New<Number>(profile->GetStartTime()));
  js_profile->Set(Nan::New<String>("endTime").ToLocalChecked(),
    Nan::New<Number>(profile->GetEndTime()));
  return js_profile;
}

NAN_METHOD(StartProfiling) {
  Local<String> name = info[0].As<String>();

  // Sample counts and timestamps are not used, so we do not need to record
  // samples.
  info.GetIsolate()->GetCpuProfiler()->StartProfiling(name, false);
}

NAN_METHOD(StopProfiling) {
  Local<String> name = info[0].As<String>();
  CpuProfile* profile =
    info.GetIsolate()->GetCpuProfiler()->StopProfiling(name);
  Local<Value> translated_profile = TranslateTimeProfile(profile);
  profile->Delete();
  info.GetReturnValue().Set(translated_profile);
}

NAN_METHOD(SetSamplingInterval) {
  int us = info[0].As<Integer>()->IntegerValue();
  info.GetIsolate()->GetCpuProfiler()->SetSamplingInterval(us);
}

NAN_METHOD(SetIdle) {
  bool is_idle = info[0].As<Boolean>()->BooleanValue();
  info.GetIsolate()->GetCpuProfiler()->SetIdle(is_idle);
}

NAN_MODULE_INIT(InitAll) {
  Nan::Set(target, Nan::New("startProfiling").ToLocalChecked(),
    Nan::GetFunction(Nan::New<FunctionTemplate>(StartProfiling)).ToLocalChecked());
  Nan::Set(target, Nan::New("stopProfiling").ToLocalChecked(),
    Nan::GetFunction(Nan::New<FunctionTemplate>(StopProfiling)).ToLocalChecked());
  Nan::Set(target, Nan::New("setSamplingInterval").ToLocalChecked(),
    Nan::GetFunction(Nan::New<FunctionTemplate>(SetSamplingInterval)).ToLocalChecked());
  Nan::Set(target, Nan::New("setIdle").ToLocalChecked(),
    Nan::GetFunction(Nan::New<FunctionTemplate>(SetIdle)).ToLocalChecked());
}

NODE_MODULE(time_profiler, InitAll);
