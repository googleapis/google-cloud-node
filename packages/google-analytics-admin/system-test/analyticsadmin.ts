import * as assert from 'assert';
import {describe, it} from 'mocha';

import {AnalyticsAdminServiceClient} from '../src';
import {google} from '../protos/protos';

describe('AnalyticsAdmin', () => {
  const analyticsAdminServiceClient = new AnalyticsAdminServiceClient();

  it('list Google Analytics accounts', async () => {
    const request = new google.analytics.admin.v1alpha.ListAccountsRequest();
    const [accounts] = await analyticsAdminServiceClient.listAccounts(request);
    assert(accounts.length);
  });
});
