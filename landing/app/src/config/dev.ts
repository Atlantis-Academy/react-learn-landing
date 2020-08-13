import * as path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import htmlTemplate from 'html-webpack-template'

export const mode = 'development'

export const entry = ['./src/index']

export const output = {
  path: path.resolve(__dirname, 'build'),
  filename: 'bundle.js',
  publicPath: '/',
}

export const devServer = {
  open: true,
  hot: true,
  port: 3000,
  contentBase: path.resolve(__dirname, 'build'),
}

export const module = {
  rules: [
    {
      test: /\.(ts|js)x?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react']
        },
      },
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
          },
        },
      ],
    },
    {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'img/',
          },
        },
      ],
    },
    {
      test: /\.js$/,
      enforce: 'pre',
      use: ['source-map-loader'],
    },
  ],
}

export const resolve = {
  extensions: ['.ts', '.tsx', '.js', '.json'],
}

export const plugins = [
  new HtmlWebpackPlugin({
    title: 'Riverdoc',
    template: htmlTemplate,
    lang: 'ru',
    appMountId: 'root',
  }),
]