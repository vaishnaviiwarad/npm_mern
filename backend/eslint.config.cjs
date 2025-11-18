const js = require('@eslint/js');
const globals = require('globals');
const { defineConfig, globalIgnores } = require('eslint/config');

module.exports = defineConfig([
  // Ignore node_modules globally
  globalIgnores(['node_modules']),

  // Backend Node files (all JS variants)
  {
    files: ['**/*.{js,mjs,cjs}'],
    extends: [js.configs.recommended],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs', // CJS syntax
      globals: { ...globals.node },
    },
    rules: {
      'no-unused-vars': ['warn'], // warn on unused variables
      'no-undef': ['error'],      // error on undefined variables
      'no-console': ['warn'],     // warn on console logs
    },
  },

  // Jest / Supertest test files
  {
    files: ['**/*.test.js', '**/*.spec.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: { ...globals.node, ...globals.jest }, // Node + Jest globals
    },
    rules: {
      'no-unused-vars': ['warn'],
      'no-undef': ['error'],
      'no-console': ['warn'],
    },
  },
]);
