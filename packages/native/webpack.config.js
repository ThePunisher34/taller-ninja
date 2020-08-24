const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const path = require('path');

module.exports = async function(env, argv) {
  const commonPath = path.resolve(__dirname, '../common/');
  const config = await createExpoWebpackConfigAsync(env, argv);

  config.module.rules[1].oneOf[2].include = [path.resolve(__dirname, '/'), commonPath];

  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      react: path.resolve(__dirname, 'node_modules/react'),
      reactDom: path.resolve(__dirname, 'node_modules/react-dom'),
    },
  };

  return config;
};
