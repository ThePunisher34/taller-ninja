const path = require('path');

module.exports = function override(config, env) {
  const commonPath = path.resolve(__dirname, '../common/');

  return {
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.tsx?$/,
          include: [commonPath],
          loader: 'ts-loader',
          options: {
            instance: 'browser',
            configFile: path.join(commonPath, 'tsconfig.json'),
          },
        },
      ],
    },
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        react: path.resolve(__dirname, 'node_modules/react'),
      },
    },
  };
};
