import { execSync } from 'child_process';
import { describe, it } from 'mocha';
import * as path from 'path';

describe('bigquery.ts with BIGQUERY_PICOSECOND_SUPPORT', () => {
  it('should run bigquery.ts tests with picosecond support enabled', function () {
    this.timeout(700000);
    const testFile = path.resolve('system-test/bigquery.ts');
    const command = `BIGQUERY_PICOSECOND_SUPPORT=true npx mocha ${testFile} --timeout 600000`;
    execSync(command, { stdio: 'inherit' });
  });
});
