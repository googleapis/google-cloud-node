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
  // [START spanner_query_with_proto_types_parameter]
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

  async function queryDataWithProtoTypes() {
    // Gets a reference to a Cloud Spanner instance and database.
    const instance = spanner.instance(instanceId);
    const database = instance.database(databaseId);

    const query = {
      sql: `SELECT SingerId,
                   SingerInfo,
                   SingerInfo.nationality,
                   SingerInfoArray,
                   SingerGenre,
                   SingerGenreArray
            FROM Singers 
            WHERE SingerInfo.nationality = @country 
            and SingerGenre=@singerGenre`,
      params: {
        country: 'Country2',
        singerGenre: music.Genre.FOLK,
      },
      /* `columnsMetadata` is an optional parameter and is used to deserialize the
      proto message and enum object back from bytearray and int respectively.
      If columnsMetadata is not passed for proto messages and enums, then the data
      types for these columns will be bytes and int respectively. */
      columnsMetadata: {
        SingerInfo: music.SingerInfo,
        SingerInfoArray: music.SingerInfo,
        SingerGenre: music.Genre,
        SingerGenreArray: music.Genre,
      },
    };

    // Queries rows from the Singers table.
    try {
      const [rows] = await database.run(query);

      rows.forEach(row => {
        const json = row.toJSON();
        console.log(
          `SingerId: ${json.SingerId}, SingerInfo: ${json.SingerInfo}, SingerGenre: ${json.SingerGenre}, 
          SingerInfoArray: ${json.SingerInfoArray}, SingerGenreArray: ${json.SingerGenreArray}`,
        );
      });
    } catch (err) {
      console.error('ERROR:', err);
    } finally {
      // Close the database when finished.
      database.close();
    }
  }

  queryDataWithProtoTypes();
  // [END spanner_query_with_proto_types_parameter]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
