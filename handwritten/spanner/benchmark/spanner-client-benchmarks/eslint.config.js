const gts = require('gts');

module.exports = [
  ...gts,
  {
    ignores: ['dist/', 'node_modules/'],
  },
  {
    rules: {
      'n/no-process-exit': 'off',
      'n/no-unsupported-features/node-builtins': 'off',
      'n/no-unsupported-features/es-builtins': 'off',
      'n/no-extraneous-import': 'off',
      'n/no-extraneous-require': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'no-unused-vars': 'off',
      'no-empty': 'off',
      eqeqeq: 'off',
      'no-inner-declarations': 'off',
      'no-constant-condition': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
    },
  },
];
