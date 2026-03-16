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

ARG NODE_VERSION=16
ARG FLAKYBOT_VERSION=1.1.0

FROM node:${NODE_VERSION}-slim as build

RUN apt-get update && apt-get install -y curl tar python3

# Install gcloud
RUN curl https://dl.google.com/dl/cloudsdk/release/google-cloud-sdk.tar.gz > /tmp/google-cloud-sdk.tar.gz

RUN mkdir -p /usr/local/gcloud \
  && tar -C /usr/local/gcloud -xvf /tmp/google-cloud-sdk.tar.gz \
  && /usr/local/gcloud/google-cloud-sdk/install.sh --quiet --usage-reporting=false

RUN ln -s /usr/bin/python3 /usr/bin/python

# Download flakybot release
RUN curl https://github.com/googleapis/repo-automation-bots/releases/download/flakybot-${FLAKYBOT_VERSION}/flakybot \
    -o /bin/flakybot -s -L \
    && chmod +x /bin/flakybot

ENV PNPM_VERSION=7.32.2
RUN curl https://get.pnpm.io/install.sh | ENV="$HOME/.shrc" SHELL="$(which sh)" sh -

FROM node:${NODE_VERSION}-slim

COPY --from=build /usr/local/gcloud /usr/local/gcloud
COPY --from=build /bin/flakybot /bin/flakybot
COPY --from=build /root/.local/share/pnpm /root/.local/share/pnpm

RUN apt-get update && apt-get install -y git bash python3 \
  && ln -s /usr/bin/python3 /usr/bin/python

ENV PNPM_HOME=/root/.local/share/pnpm
ENV PATH=$PNPM_HOME:/bin/flakybot:/usr/local/gcloud/google-cloud-sdk/bin:$PATH
