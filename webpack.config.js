const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const devServer = (isDev) => !isDev ? {} : {
  devServer: {
    open: true,
    port: 5500,
    contentBase: path.join(__dirname, 'public'),
  },
};

const esLintPlugin = (isDev) => isDev ? [] : [new ESLintPlugin({ extensions: ['ts', 'js'] })];


module.exports = ({ development }) => ({
  mode: development ? 'development' : 'production',
  devtool: development ? 'inline-source-map' : false,
  entry: {
    main: './src/index.js',
    authorization: './src/authorization/authorization.js',
    registration: './src/registration/registration.js',
    textbook: './src/textbook/textbook.js',
    difficultWords: './src/textbook/difficultWords/difficultWords.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[hash][ext]',
  },
  module: {
    rules: [
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ],
  },
  plugins: [
    ...esLintPlugin(development),
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new HtmlWebpackPlugin({ inject: true, template: './src/authorization/authorization.html', filename: 'authorization.html', chunks: ['authorization'] }),
    new HtmlWebpackPlugin({ inject: true, template: './src/registration/registration.html', filename: 'registration.html', chunks: ['registration'] }),
    new HtmlWebpackPlugin({ inject: true, template: './src/textbook/textbook.html', filename: 'textbook.html', chunks: ['textbook'] }),
   
    new HtmlWebpackPlugin({ inject: true, template: './src/textbook/difficultWords/difficultWords.html', filename: 'difficultWords.html', chunks: ['difficultWords'] }),

    new HtmlWebpackPlugin({ template: './src/games/savannah/savannah.html', filename: 'savannah.html' }),
    new HtmlWebpackPlugin({ template: './src/games/oazis/oazis.html', filename: 'oazis.html' }),
    new HtmlWebpackPlugin({ template: './src/games/sprint/sprint.html', filename: 'sprint.html' }),
    new HtmlWebpackPlugin({ template: './src/games/listening/listening.html', filename: 'listening.html' }),
    new CopyPlugin({
      patterns: [{
        from: './src/assets',
        to: "assets",
        noErrorOnMissing: true,
      }],
    }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
  },
  ...devServer(development)
});