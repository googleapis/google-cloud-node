// Copyright 2021 Google LLC
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

'use strict';

const protobufjs = require('protobufjs');

function main(channelConnection, id, providerId, eventType, date, textData) {
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The channel_connection that the events are published from. For example:
   *  `projects/{partner_project_id}/locations/{location}/channelConnections/{channel_connection_id}`.
   */
  // const channelConnection = 'abc123'
  /**
   *  The CloudEvents v1.0 events to publish. No other types are allowed.
   */
  // const events = 1234
  const GOOGLE_API = 'type.googleapis.com/';
  const CLOUD_EVENT_ID = 'io.cloudevents.v1.CloudEvent';
  const typeName = `${GOOGLE_API}/${CLOUD_EVENT_ID}`.replace(/^.*\//, '');

  // Imports the Publishing library
  // eslint-disable-next-line node/no-missing-require
  const {PublisherClient} = require('@google-cloud/eventarc-publishing').v1;

  // Instantiates a client
  const publishingClient = new PublisherClient();

  async function callPublishChannelConnectionEvents() {
    // Set up the call to wrap the Cloud Event object into a Protobuf 'Any' object
    // eslint-disable-next-line node/no-unpublished-require
    const root = protobufjs.Root.fromJSON(require('../protos/spec.json'));
    const type = root.lookupType(typeName);
    const Any = root.lookupType('protobuf.Any');

    // Need to construct an event of type Cloud Event
    const event = type.fromObject({
      '@type': `${GOOGLE_API}/${CLOUD_EVENT_ID}`,
      id,
      source: `//${providerId}`,
      specVersion: '1.0',
      type: eventType,
      attributes: {
        time: {
          ceTimestamp: new Date(date),
        },
        datacontenttype: {
          ceString: 'application/json',
        },
      },
      textData,
    });

    // Wrap that event in a Protobuf 'Any' object
    const message = Any.fromObject({
      type_url: `${GOOGLE_API}/${typeName}`,
      value: type.encode(event).finish(),
    });

    const request = {
      channelConnection,
      events: [message],
    };

    // Run request
    const response =
      await publishingClient.publishChannelConnectionEvents(request);
    console.log(response);
  }

  callPublishChannelConnectionEvents();
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
