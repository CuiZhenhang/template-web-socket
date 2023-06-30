module.exports = (env) => {
    return {
        mode: env.production ? 'production' : 'development',
        devtool: env.production ? false : 'inline-source-map',
        entry: {
            index: './src/index.ts'
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: `${__dirname}/node_modules`
                }
            ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        },
        output: {
            filename: '[name].bundle.js',
            path: `${__dirname}/../public/`
        }
    }
}
