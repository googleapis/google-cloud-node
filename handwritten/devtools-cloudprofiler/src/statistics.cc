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

#include "v8.h"
#include "nan.h"

using namespace v8;

NAN_METHOD(GetHeapSpaceStatistics) {
  size_t num_spaces = info.GetIsolate()->NumberOfHeapSpaces();
  Local<Array> stats_array = Nan::New<Array>(num_spaces);
  for (size_t space = 0; space < num_spaces; space++) {
    HeapSpaceStatistics space_stats;
    info.GetIsolate()->GetHeapSpaceStatistics(&space_stats, space);
    Local<Object> stats_elem = Nan::New<Object>();
    stats_elem->Set(Nan::New<String>("name").ToLocalChecked(),
      Nan::New<String>(space_stats.space_name()).ToLocalChecked());
    stats_elem->Set(Nan::New<String>("spaceSize").ToLocalChecked(),
      Nan::New<Number>(space_stats.space_size()));
    stats_elem->Set(Nan::New<String>("spaceUsedSize").ToLocalChecked(),
      Nan::New<Number>(space_stats.space_used_size()));
    stats_elem->Set(Nan::New<String>("spaceAvailableSize").ToLocalChecked(),
      Nan::New<Number>(space_stats.space_available_size()));
    stats_elem->Set(Nan::New<String>("physicalSpaceSize").ToLocalChecked(),
      Nan::New<Number>(space_stats.physical_space_size()));
    stats_array->Set(space, stats_elem);
  }
  info.GetReturnValue().Set(stats_array);
}

NAN_MODULE_INIT(InitAll) {
  Nan::Set(target, Nan::New("getHeapSpaceStatistics").ToLocalChecked(),
    Nan::GetFunction(Nan::New<FunctionTemplate>(GetHeapSpaceStatistics)).ToLocalChecked());
}

NODE_MODULE(statistics, InitAll);
