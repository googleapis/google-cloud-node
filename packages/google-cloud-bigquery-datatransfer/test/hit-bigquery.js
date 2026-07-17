const { google } = require('googleapis');
const { getAPI } = require('googleapis-common');
const { VERSIONS } = require('googleapis/build/src/apis/bigquery');

async function main() {
  const auth = new google.auth.GoogleAuth({
    scopes: ['https://www.googleapis.com/auth/bigquery']
  });

  const authClient = await auth.getClient();
  google.options({auth: authClient});

  // Call getAPI exactly like it is called internally inside the googleapis package
  const bigquery = getAPI('bigquery', 'v2', VERSIONS, google);
  
  try {
    const projectId = await auth.getProjectId();
    console.log(`Hitting bigquery service for project: ${projectId} using getAPI directly`);
    
    // This executes the request and hits the service
    const res = await bigquery.datasets.list({
      projectId: projectId,
    });
    
    console.log('Response from bigquery service:');
    console.dir(res.data, {depth: null, colors: true});
  } catch (e) {
    console.error('Error hitting bigquery service:', e.message);
  }
}

main();
