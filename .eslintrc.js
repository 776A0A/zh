const prettierConfig = require('./.prettierrc.js')

module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/typescript/recommended',
        '@vue/prettier',
        '@vue/prettier/@typescript-eslint',
    ],
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'prettier/prettier': ['error', prettierConfig],
        '@typescript-eslint/no-var-requires': 'off',
        'no-case-declarations': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
    },
}
