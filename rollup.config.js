import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'

export default {
    input: 'src/index.js',
    watch: true,
    output: {
        file: 'public/bundle.js',
        format: 'cjs'
    },
    plugins: [
        nodeResolve({
            jsnext:true,
            main:true,
        }),
        commonjs({
            include:["node_modules/**"],
        })
    ]
};