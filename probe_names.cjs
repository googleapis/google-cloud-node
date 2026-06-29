const tls = require('tls');
const crypto = require('crypto');

const candidates = [
  'X25519MLKEM768',
  'x25519_mlkem768',
  'X25519_MLKEM768',
  'X25519-MLKEM768',
  'x25519-mlkem768',
  'x25519_kyber768',
  'X25519Kyber768',
  'X25519Kyber768Draft00',
  'P256_MLKEM768',
  'p256_mlkem768'
];

for (const name of candidates) {
  try {
    tls.createSecureContext({ ecdhCurve: name });
    console.log(`MATCH: ${name}`);
  } catch (e) {
    // console.log(`FAIL: ${name}`);
  }
}
