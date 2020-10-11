const path = require('path');

module.exports = {
  webpack(config) {

    config.resolve.alias = {
      ...config.resolve.alias,
      "react": path.resolve(__dirname, "node_modules", "react"),
      "react-dom": path.resolve(__dirname, "node_modules", "react-dom"),
    }

    return config;
  },
};