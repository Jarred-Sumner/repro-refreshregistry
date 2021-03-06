module.exports = {
  webpack: (config, { isServer }) => {
    config.module.rules.unshift({
      test: /\.worker\.(js|ts|tsx)$/,
      loader: "worker-loader",
      options: {
        name: "static/[hash].worker.js",
        publicPath: "/_next/",
      },
    });

    // Overcome webpack referencing `window` in chunks
    config.output.globalObject = "self";

    return config;
  },
};
