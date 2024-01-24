module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  extends: [
    'prettier',
    '@nuxt',
    '@nuxt/eslint-config',
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
    'airbnb'
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 0,
    camelcase: ['warn'],
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'comma-dangle': 'off',
    'eol-last': ['error', 'always'],
    'max-len': ['warn'],
    'consistent-return': 'off',
    'func-call-spacing': 'off',
    'no-undef': 'off',
    'no-unused-vars': ['warn'],
    'no-use-before-define': 'off',
    'no-spaced-func': 'off',
    'no-underscore-dangle': 'off',
    'no-restricted-globals': ['warn'],
    'no-plusplus': 'off',
    'import/no-unresolved': ['warn'],
    'import/extensions': ['warn'],
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/html-indent': ['error', 2],
    'vue/html-self-closing': ['error'],
    // 'vue/v-bind-style': ['warn'],
    'vue/singleline-html-element-content-newline': ['error'],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/valid-v-slot': [
      'error',
      {
        allowModifiers: true,
      },
    ],
    'vue/no-v-html': 'off',
    'vue/no-v-text-v-html-on-component': 'off'
  },
  globals: {
    _: true
  }
};
