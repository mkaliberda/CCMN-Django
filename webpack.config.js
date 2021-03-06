//require our dependencies
const path = require('path')
const webpack = require('webpack')
const BundleTracker = require('webpack-bundle-tracker')

module.exports = {
    //the base directory (absolute path) for resolving the entry option
    context: __dirname,
    //the entry point we created earlier. Note that './' means 
    //your current directory. You don't have to specify the extension  now,
    //because you will specify extensions later in the `resolve` section
    entry: './frontend/src/index',
    
    output: {
        //where you want your compiled bundle to be stored
        path: path.resolve('./static/bundles/'), 
        //naming convention webpack should use for your files
        filename: '[name]-[hash].js', 
    },
    // to ensure that the sourcefile are shown in the browser
    devtool: 'eval-source-map',
    plugins: [
        //tells webpack where to store data about your bundles.
        new BundleTracker({filename: './webpack-stats.json'}), 
        //makes jQuery available in every module
        new webpack.ProvidePlugin({ 
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery' 
        }),
        
    ],
    
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['react']
              }
            }
          },
          {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
          }
        ]
      },
    
    resolve: {
        //tells webpack where to look for modules
        //extensions that should be used to resolve modules
        extensions: ['.js', '.jsx', 'less'] 
    }   
}