module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'react/jsx-props-no-spreading': [
      'error',
      {
        html: 'ignore',
        explicitSpread: 'ignore',
        exceptions: [
          'TableHeader',
          'TableSelectAll',
          'TableSelectRow',
          'TableExpandRow',
          'Table',
        ],
      },
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        aspects: ['preferButton'],
      },
    ],
    camelcase: [
      'error',
      {
        properties: 'never',
        ignoreDestructuring: true,
      },
    ],
    'max-len': ['warn'],
    'react/prop-types': ['warn'],
  },
};
