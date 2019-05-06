const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
     entry: './src/app.js',
     output:{
          path: path.resolve(__dirname, '../public'),
          filename: 'js/bundle.js'
     },
     module:{
          rules:[
               {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                         MiniCssExtractPlugin.loader,
                         'css-loader',
                         'sass-loader'
                    ]
               },
               {
                    test: /\.hbs/,
                    loader: 'handlebars-loader'
               },
               {
                    test: /\.(jpg|png|gif|svg)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: 'static/',
                                useRelativePath: true
                            }
                        }
                    ]
               },
               {
                    loader: 'image-webpack-loader',
                    options: {
                    mozjpeg: {
                         progressive: true,
                         quality: 65
                    },
                    // optipng.enabled: false will disable optipng
                    optipng: {
                         enabled: true,
                    },
                    pngquant: {
                         quality: '65-90',
                         speed: 4
                    },
                    gifsicle: {
                         interlaced: true,
                    },
                    // the webp option will enable WEBP
                    webp: {
                         quality: 75
                    }
                    }
               }
          ]
     },
     plugins: [
          new HtmlWebpackPlugin({
               template: './src/index.hbs',
               minify:{
                    collapseWhitespace: true,
                    removeComments: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    useShortDoctype: true
               }
          }),
          new MiniCssExtractPlugin({
               filename: 'css/[name]-styles.css'
          })
     ]
};