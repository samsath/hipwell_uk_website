import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default defineConfig([
  globalIgnores([
    'src/models',
    '.astro/**/*',
    'src/content.config.ts',
    '.storybook/**/*',
    'storybook-static/**/*',
    'dist/**/*',
    '.sst/**/*',
    'infra/**/*',
    'sst.config.ts',
    '.github/**/*'
  ]),
  {
    extends: fixupConfigRules(
      compat.extends(
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended'
      )
    ),

    plugins: {
      'react': fixupPluginRules(react),
      '@typescript-eslint': fixupPluginRules(typescriptEslint)
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest
      },

      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module'
    },

    settings: {
      react: {
        version: 'detect'
      }
    },

    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'no-useless-escape': 'off',
      'no-console': ['warn'],
      'curly': ['warn', 'multi-line'],
      'no-redeclare': 2,
      'no-use-before-define': 2,
      'no-unused-vars': 'off',

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'none'
        }
      ],

      'no-undef': 2,
      'no-mixed-spaces-and-tabs': 1,
      'no-nested-ternary': 1,
      'no-var': 2,
      'semi': [2, 'always'],
      'keyword-spacing': ['error'],
      'space-before-blocks': ['error'],
      'object-curly-spacing': ['error', 'always'],
      'no-multiple-empty-lines': ['error'],
      'space-infix-ops': ['error'],
      'switch-colon-spacing': ['error'],
      'padded-blocks': ['error', 'never'],
      'rest-spread-spacing': ['error', 'never'],

      'space-before-function-paren': [
        'error',
        {
          anonymous: 'never',
          named: 'never',
          asyncArrow: 'always'
        }
      ],

      'template-curly-spacing': ['error', 'never'],
      'no-return-await': ['error'],
      'no-undef-init': ['error'],
      'no-useless-constructor': ['error'],
      'no-useless-return': ['error'],
      'prefer-const': ['warn'],
      'yoda': ['error'],
      'space-in-parens': ['error', 'never'],

      'arrow-body-style': [
        'error',
        'as-needed',
        {
          requireReturnForObjectLiteral: false
        }
      ]
    }
  }
]);
