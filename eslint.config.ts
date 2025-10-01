import eslint from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts,tsx,jsx}'],
        languageOptions: { globals: globals.node },
        rules: {
            semi: 'error',
            'no-unused-vars': ['error', { args: 'none' }],
            'no-undef': 'error',
        },
    },
    tseslint.configs.recommended,
    eslint.configs.recommended,
]);
