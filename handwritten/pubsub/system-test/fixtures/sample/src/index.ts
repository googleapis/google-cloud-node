import {PubSub} from '@google-cloud/pubsub';

async function main() {
  const pubsub = new PubSub();
  console.log(pubsub);
}

main();
