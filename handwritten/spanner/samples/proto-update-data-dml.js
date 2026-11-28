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
  // [START spanner_update_data_with_proto_types_with_dml]
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

  async function updateDataUsingDmlWithProtoTypes() {
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

    const genre = music.Genre.ROCK;
    const singerInfo = music.SingerInfo.create({
      singerId: 1,
      genre: genre,
      birthDate: 'January',
      nationality: 'Country1',
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

    database.runTransaction(async (err, transaction) => {
      if (err) {
        console.error(err);
        return;
      }
      try {
        const [, stats] = await transaction.run({
          sql: `UPDATE Singers SET SingerInfo=@singerInfo, SingerInfoArray=@singerInfoArray, 
          SingerGenre=@singerGenre, SingerGenreArray=@singerGenreArray WHERE SingerId = 1`,
          params: {
            singerInfo: protoMessage,
            singerInfoArray: [protoMessage, null],
            singerGenre: genre,
            singerGenreArray: [protoEnum, null],
          },
        });

        const rowCount = stats[stats.rowCount];
        console.log(`${rowCount} record updated.`);

        const [, stats1] = await transaction.run({
          sql: 'UPDATE Singers SET SingerInfo.nationality=@singerNationality WHERE SingerId = 1',
          params: {
            singerNationality: 'Country2',
          },
        });
        const rowCount1 = stats1[stats1.rowCount];
        console.log(`${rowCount1} record updated.`);

        await transaction.commit();
      } catch (err) {
        console.error('ERROR:', err);
      } finally {
        // Close the database when finished.
        database.close();
      }
    });
  }

  updateDataUsingDmlWithProtoTypes();
  // [END spanner_update_data_with_proto_types_with_dml]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
