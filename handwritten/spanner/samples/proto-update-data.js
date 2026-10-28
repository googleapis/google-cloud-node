// Copyright 2024 Google LLC
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

// eslint-disable-next-line n/no-unpublished-require
const singer = require('./resource/singer.js');
const music = singer.examples.spanner.music;

function main(
  instanceId = 'my-instance',
  databaseId = 'my-database',
  projectId = 'my-project-id',
) {
  // [START spanner_update_data_with_proto_types]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const instanceId = 'my-instance';
  // const databaseId = 'my-database';
  // const projectId = 'my-project-id';

  // Imports the Google Cloud Spanner client library
  const {Spanner} = require('@google-cloud/spanner');

  // Instantiates a client
  const spanner = new Spanner({
    projectId: projectId,
  });

  async function updateDataWithProtoTypes() {
    /*
    Updates Singers tables in the database with the ProtoMessage
    and ProtoEnum column.
    This updates the `SingerInfo`, `SingerInfoArray`, `SingerGenre` and
    SingerGenreArray` columns which must be created before running this sample.
    You can add the column by running the `add_proto_type_columns` sample or
    by running this DDL statement against your database:

    ALTER TABLE Singers ADD COLUMN SingerInfo examples.spanner.music.SingerInfo\n
    ALTER TABLE Singers ADD COLUMN SingerInfoArray ARRAY<examples.spanner.music.SingerInfo>\n
    ALTER TABLE Singers ADD COLUMN SingerGenre examples.spanner.music.Genre\n
    ALTER TABLE Singers ADD COLUMN SingerGenreArray ARRAY<examples.spanner.music.Genre>\n
    */

    // Gets a reference to a Cloud Spanner instance and database.
    const instance = spanner.instance(instanceId);
    const database = instance.database(databaseId);

    const genre = music.Genre.FOLK;
    const singerInfo = music.SingerInfo.create({
      singerId: 2,
      genre: genre,
      birthDate: 'February',
      nationality: 'Country2',
    });

    const protoMessage = Spanner.protoMessage({
      value: singerInfo,
      messageFunction: music.SingerInfo,
      fullName: 'examples.spanner.music.SingerInfo',
    });

    const protoEnum = Spanner.protoEnum({
      value: genre,
      enumObject: music.Genre,
      fullName: 'examples.spanner.music.Genre',
    });

    // Get a reference to the Singers table
    const table = database.table('Singers');

    const data = [
      {
        SingerId: 2,
        SingerInfo: protoMessage,
        SingerInfoArray: [protoMessage],
        SingerGenre: protoEnum,
        SingerGenreArray: [protoEnum],
      },
      {
        SingerId: 3,
        SingerInfo: null,
        SingerInfoArray: null,
        SingerGenre: null,
        SingerGenreArray: null,
      },
    ];

    try {
      await table.update(data);
      console.log('Data updated.');
    } catch (err) {
      console.error('ERROR:', err);
    } finally {
      // Close the database when finished.
      await database.close();
    }
  }

  updateDataWithProtoTypes();
  // [END spanner_update_data_with_proto_types]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
