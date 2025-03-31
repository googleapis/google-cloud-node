# Copyright 2022 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# Use a multi-stage docker build to limit production dependencies.

# Use the official lightweight Node.js 18 image.
# https://hub.docker.com/_/node
FROM golang:1.16-alpine as gobuild

RUN go install github.com/bazelbuild/buildtools/buildozer@latest

FROM node:18-slim as nodebuild

COPY package*.json /
 
RUN npm install

# Now copy all the code so we can compile
COPY . /

COPY --from=gobuild /go/bin/buildozer /go/bin/buildozer 


RUN chmod 755 /entrypoint.sh \
    /add-to-well-known-path.js \
    /create-folder-name.js \
    /create-gh-issue.js
# Run the web service on container startup.
ENTRYPOINT ["/entrypoint.sh" ]