module.exports = {
    // ...
    module: {
      rules: [
        {
          test: /\.(gltf)$/,
          loader: "gltf-loader",
          /**
           * @type {import("gltf-loader").GLTFLoaderOptions}
           */
          options: {
            // ...
          },
        },
        {
          test: /\.(bin|png|jpe?g)$/,
          type: "asset/resource",
        },
      ],
    },
  };