import {runPqcBigQueryTests} from '../src/pqc-bigquery-test';

describe('BigQuery PQC Compliance Tests', () => {
  it(
    'should run BigQuery PQC compliance tests successfully',
    async () => {
      await runPqcBigQueryTests();
    }
  ).timeout(60000);
});
