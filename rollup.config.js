const buble = require('rollup-plugin-buble')
    , uglify = require('rollup-plugin-uglify')
    , eslint = require('rollup-plugin-eslint')


let config = {
    entry: 'src/index.js',
    dest: 'dist/{{libraryname}}.js',
    format: 'umd',
    context: 'window',
    moduleName: '{{libraryname}}',
    plugins: [ buble() ]
}

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        uglify()
    )
} else {
    config.plugins.unshift(
        eslint()
    )
}

module.exports = config
