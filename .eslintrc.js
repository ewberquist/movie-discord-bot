'use strict';

module.exports = {
  root: true,
  extends: ['airbnb-base'],
  env: {
    node: true,
  },
  parserOptions: {
    sourceType: 'script',
  },
  rules: {
    strict: [2, 'global'],
    'no-console': 0,
  },
};
