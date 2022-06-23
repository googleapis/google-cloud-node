# Copyright 2022 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

ARG NODE_VERSION=14
ARG FLAKYBOT_VERSION=1.1.0

FROM node:${NODE_VERSION}-alpine as build

RUN apk add --no-cache curl tar python3

# Install gcloud
RUN curl https://dl.google.com/dl/cloudsdk/release/google-cloud-sdk.tar.gz > /tmp/google-cloud-sdk.tar.gz

RUN mkdir -p /usr/local/gcloud \
  && tar -C /usr/local/gcloud -xvf /tmp/google-cloud-sdk.tar.gz \
  && /usr/local/gcloud/google-cloud-sdk/install.sh

# Download flakybot release
RUN curl https://github.com/googleapis/repo-automation-bots/releases/download/flakybot-${FLAKYBOT_VERSION}/flakybot \
    -o /bin/flakybot -s -L \
    && chmod +x /bin/flakybot

FROM node:${NODE_VERSION}-alpine

COPY --from=build /bin/flakybot /bin/flakybot

# Hack for not found error with flakybot
RUN mkdir /lib64 && ln -s /lib/libc.musl-x86_64.so.1 /lib64/ld-linux-x86-64.so.2

COPY --from=build /usr/local/gcloud /usr/local/gcloud
RUN apk add --no-cache git bash python3

ENV PATH $PATH:/usr/local/gcloud/google-cloud-sdk/bin
