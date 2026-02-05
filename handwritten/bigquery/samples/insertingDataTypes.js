// Copyright 2020 Google LLC
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

function main(datasetId = 'my_dataset', tableId = 'my_table') {
  // [START bigquery_inserting_data_types]
  // Import the Google Cloud client library
  const {BigQuery} = require('@google-cloud/bigquery');
  const bigquery = new BigQuery();

  async function insertingDataTypes() {
    // Inserts data of various BigQuery-supported types into a table.

    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    // const datasetId = 'my_dataset';
    // const tableId = 'my_table';

    // Describe the schema of the table
    // For more information on supported data types, see
    // https://cloud.google.com/bigquery/docs/reference/standard-sql/data-types
    const schema = [
      {
        name: 'name',
        type: 'STRING',
      },
      {
        name: 'age',
        type: 'INTEGER',
      },
      {
        name: 'school',
        type: 'BYTES',
      },
      {
        name: 'metadata',
        type: 'JSON',
      },
      {
        name: 'location',
        type: 'GEOGRAPHY',
      },
      {
        name: 'measurements',
        mode: 'REPEATED',
        type: 'FLOAT',
      },
      {
        name: 'datesTimes',
        type: 'RECORD',
        fields: [
          {
            name: 'day',
            type: 'DATE',
          },
          {
            name: 'firstTime',
            type: 'DATETIME',
          },
          {
            name: 'secondTime',
            type: 'TIME',
          },
          {
            name: 'thirdTime',
            type: 'TIMESTAMP',
          },
        ],
      },
    ];

    // For all options, see https://cloud.google.com/bigquery/docs/reference/v2/tables#resource
    const options = {
      schema: schema,
    };

    // Create a new table in the dataset
    const [table] = await bigquery
      .dataset(datasetId)
      .createTable(tableId, options);

    console.log(`Table ${table.id} created.`);

    // The DATE type represents a logical calendar date, independent of time zone.
    // A DATE value does not represent a specific 24-hour time period.
    // Rather, a given DATE value represents a different 24-hour period when
    // interpreted in different time zones, and may represent a shorter or longer
    // day during Daylight Savings Time transitions.
    const bqDate = bigquery.date('2019-1-12');
    // A DATETIME object represents a date and time, as they might be
    // displayed on a calendar or clock, independent of time zone.
    const bqDatetime = bigquery.datetime('2019-02-17 11:24:00.000');
    // A TIME object represents a time, as might be displayed on a watch,
    // independent of a specific date and timezone.
    const bqTime = bigquery.time('14:00:00');
    // A TIMESTAMP object represents an absolute point in time,
    // independent of any time zone or convention such as Daylight
    // Savings Time with microsecond precision.
    const bqTimestamp = bigquery.timestamp('2020-04-27T18:07:25.356Z');
    const bqGeography = bigquery.geography('POINT(1 2)');
    const schoolBuffer = Buffer.from('Test University');
    // a JSON field needs to be converted to a string
    const metadata = JSON.stringify({
      owner: 'John Doe',
      contact: 'johndoe@example.com',
    });
    // Rows to be inserted into table
    const rows = [
      {
        name: 'Tom',
        age: '30',
        location: bqGeography,
        school: schoolBuffer,
        metadata: metadata,
        measurements: [50.05, 100.5],
        datesTimes: {
          day: bqDate,
          firstTime: bqDatetime,
          secondTime: bqTime,
          thirdTime: bqTimestamp,
        },
      },
      {
        name: 'Ada',
        age: '35',
        measurements: [30.08, 121.7],
      },
    ];

    // Insert data into table
    await bigquery.dataset(datasetId).table(tableId).insert(rows);

    console.log(`Inserted ${rows.length} rows`);
  }
  // [END bigquery_inserting_data_types]
  insertingDataTypes();
}
main(...process.argv.slice(2));
