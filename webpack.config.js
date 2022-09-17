const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: "svg-inline-loader",
        use: [
          {
            loader: "raw-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: [
          [
            "imagemin-svgo",
            {
              plugins: [
                {
                  removeViewBox: false,
                  removeXMLNS: true,
                },
              ],
            },
          ],
        ],
      },
    }),
  ],
};
