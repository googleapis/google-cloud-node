import {runPqcServiceObjectTests} from '../src/pqc-service-object-test';

describe('ServiceObject PQC Compliance Tests', () => {
  it(
    'should run ServiceObject PQC compliance tests successfully',
    async () => {
      await runPqcServiceObjectTests();
    }
  ).timeout(60000);
});
