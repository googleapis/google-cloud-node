import {Datastore} from '@google-cloud/datastore';
async function main() {
  const datastore = new Datastore();
  console.log(datastore);
}
main();
