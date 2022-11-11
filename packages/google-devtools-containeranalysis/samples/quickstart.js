// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

// sample-metadata:
//   title: Quickstart
//   description: fetching an instance of Grafeas and creating a note.
//   usage: node quickstart.js "project-id" "note-id"
async function main(
  projectId = 'your-project-id', // Your GCP Project ID
  noteId = 'my-note-id' // Id of the note
) {
  // [START containeranalysis_quickstart]
  /**
   * TODO(developer): Uncomment these variables before running the sample
   */
  // const projectId = 'your-project-id', // Your GCP Project ID
  // const noteId = 'my-note-id' // Id of the note

  // Import the library and create a client
  const {ContainerAnalysisClient} = require('@google-cloud/containeranalysis');
  const client = new ContainerAnalysisClient();
  // Fetch an instance of a Grafeas client:
  // see: https://googleapis.dev/nodejs/grafeas/latest
  const grafeasClient = client.getGrafeasClient();

  // Construct request
  // Associate the Note with a metadata type
  // https://cloud.google.com/container-registry/docs/container-analysis#supported_metadata_types
  // Here, we use the type "vulnerabiltity"
  const formattedParent = grafeasClient.projectPath(projectId);

  // Creates and returns a new Note
  const [note] = await grafeasClient.createNote({
    parent: formattedParent,
    noteId: noteId,
    note: {
      vulnerability: {
        details: [
          {
            affectedCpeUri: 'foo.uri',
            affectedPackage: 'foo',
            minAffectedVersion: {
              kind: 'MINIMUM',
            },
            fixedVersion: {
              kind: 'MAXIMUM',
            },
          },
        ],
      },
    },
  });

  console.log(`Note ${note.name} created.`);
  // [END containeranalysis_quickstart]
}

main(...process.argv.slice(2));
