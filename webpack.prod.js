const { merge } = require("webpack-merge");
const common = require("./webpack.common");
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

// module.exports = merge(common, {
//   mode: "production",
//   optimization: {
//     minimize: true,
//     minimizer: [new OptimizeCSSAssetsPlugin({}), '...'],
//   },
// });

module.exports = merge(common, {
  mode: "production",
  optimization: {
    // minimizer: [
    //   new CssMinimizerPlugin(),
    // ],
  },
});