import fs from 'node:fs/promises';

// Enables all `.js` files in `build/esm` to be treated as ESM
await fs.writeFile('./build/esm/package.json', '{"type": "module"}');
