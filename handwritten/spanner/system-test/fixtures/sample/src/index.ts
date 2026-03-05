import {Spanner} from '@google-cloud/spanner';
async function main() {
  const spanner = new Spanner();
  console.log(spanner);
}
main();
