'use strict';

const crypto = require('crypto');
const { Spanner } = require('@google-cloud/spanner');

const SAMPLE_SIZE = envInt('SAMPLE_SIZE', 10000);
const DB_PROJECT_ID = process.env.DB_PROJECT_ID || 'span-cloud-testing';
const DB_INSTANCE = process.env.DB_INSTANCE || 'gargsurbhi-testing1';
const DB_DATABASE = process.env.DB_DATABASE || 'jack_henry_db';
const DB_SCHEMA = process.env.DB_SCHEMA || 'tracking';
const BATCH_SIZE = envInt('SEED_BATCH_SIZE', 500);

async function main() {
  const spanner = new Spanner({ projectId: DB_PROJECT_ID, disableBuiltInMetrics: true });
  const database = spanner.instance(DB_INSTANCE).database(DB_DATABASE);
  try {
    await seedTable(database, `${DB_SCHEMA}.Devices`, 'deviceRecordId', 'device');
    await seedTable(database, `${DB_SCHEMA}.DeviceDetails`, 'deviceDetailsId', 'detail');
    await seedTable(database, `${DB_SCHEMA}.HttpRequestDetails`, 'httpRequestDetailsId', 'request');
    await seedTable(database, `${DB_SCHEMA}.HttpRequestLocations`, 'httpRequestLocationId', 'location');
  } finally {
    await database.close();
    spanner.close();
  }
}

async function seedTable(database, tableName, idColumn, prefix) {
  const table = database.table(tableName);
  console.log(`Seeding ${tableName}: ${SAMPLE_SIZE} rows`);
  for (let offset = 0; offset < SAMPLE_SIZE; offset += BATCH_SIZE) {
    const rows = [];
    const end = Math.min(SAMPLE_SIZE, offset + BATCH_SIZE);
    for (let i = offset; i < end; i++) {
      rows.push({
        [idColumn]: sha256(`${prefix}-${i}`),
        createdAt: 'spanner.commit_timestamp()',
      });
    }
    await table.upsert(rows);
    console.log(`  ${tableName}: ${end}/${SAMPLE_SIZE}`);
  }
}

function sha256(value) {
  return crypto.createHash('sha256').update(value).digest('hex');
}

function envInt(key, fallback) {
  const value = process.env[key];
  return value === undefined || value === '' ? fallback : parseInt(value, 10);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
