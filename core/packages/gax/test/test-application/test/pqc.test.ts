import {runPqcComplianceTests} from '../src/pqc-test';

describe('PQC Compliance Tests', () => {
  it(
    'should run PQC compliance tests successfully',
    async () => {
      await runPqcComplianceTests();
    },
    60000
  );
});
