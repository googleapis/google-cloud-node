const tls = require('tls');

const options = {
  host: 'pq.cloudflareresearch.com',
  port: 443,
  servername: 'pq.cloudflareresearch.com',
  ecdhCurve: 'X25519MLKEM768',
};

const socket = tls.connect(options, () => {
  console.log('Connected');
  const cipher = socket.getCipher();
  console.log('Cipher:', cipher);
  const ephemeralKey = socket.getEphemeralKeyInfo();
  console.log('Ephemeral Key Info:', ephemeralKey);
  const protocol = socket.getProtocol();
  console.log('Protocol:', protocol);
  socket.end();
});

socket.on('error', (err) => {
  console.error('Error:', err);
});
