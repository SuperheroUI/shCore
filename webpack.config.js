module.exports = {
    entry: {
        'sh-core': './src/index.js',
    },
    output: {
        path: './bin',
        filename: '[name].js',
        library: '[name]',
        libraryTarget: 'umd',
    },
    externals: [
        {
            react: {
                root: 'React',
                commonjs2: 'react',
                commonjs: 'react',
                amd: 'react',
            },
        },
        {
            'react-dom': {
                root: 'ReactDOM',
                commonjs2: 'react-dom',
                commonjs: 'react-dom',
                amd: 'react-dom',
            },
        },
        {
            lodash: {
                root: '_',
                commonjs2: 'lodash',
                commonjs: 'lodash',
                amd: 'lodash',
            },
        },
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },
        ],

    }
};
