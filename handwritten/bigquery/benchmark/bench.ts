// Copyright 2017 Google LLC
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

import * as fs from 'fs';
import {BigQuery} from '../src';

if (process.argv.length < 3) {
  throw new Error(
    'need query file; ' +
      `usage: '${process.argv[0]} ${process.argv[1]} <queries.json>'`,
  );
}

console.log('query,rows,cols,first_byte,total');

const queryJson = fs.readFileSync(process.argv[2], 'utf8');
const queries = JSON.parse(queryJson);
const client = new BigQuery();

Promise.all(
  queries.map((query: string) => {
    return doQuery(query).catch(console.error);
  }),
).catch(console.error);

async function doQuery(queryTxt: string) {
  return new Promise<void>((resolve, reject) => {
    const startMilli = new Date().getTime();
    let numRows = 0;
    let numCols: number;
    let timeFirstByteMilli: number;

    const query = {query: queryTxt, useLegacySql: false};
    const stream = client
      .createQueryStream(query)
      .on('error', reject)
      .on('data', row => {
        if (numRows === 0) {
          numCols = Object.keys(row).length;
          timeFirstByteMilli = new Date().getTime() - startMilli;
        } else if (numCols !== Object.keys(row).length) {
          stream.end();
          const receivedCols = Object.keys(row).length;
          const error = new Error(
            `query "${queryTxt}": ` +
              `wrong number of columns, want ${numCols} got ${receivedCols}`,
          );
          reject(error);
        }
        numRows++;
      })
      .on('end', () => {
        const timeTotalMilli = new Date().getTime() - startMilli;
        console.log(
          `"${queryTxt}",${numRows},${numCols},${timeFirstByteMilli / 1000},${
            timeTotalMilli / 1000
          }`,
        );
        resolve();
      });
  });
}
