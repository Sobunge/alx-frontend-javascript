module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    'no-console': 'off',
    'no-unused-vars': 'warn',
    'no-debugger': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'quotes': ['error', 'single'],
    'semi': ['error', 'always']
  }
};
