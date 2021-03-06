const path = require('path');

import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import image from '@rollup/plugin-image';
import typescript from '@rollup/plugin-typescript';
import rootImport from 'rollup-plugin-root-import';
import alias from '@rollup/plugin-alias';

const packageJson = require("./package.json");
const EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx', '.json'];

export default {
	input: 'src/index.js',

  output: [{
			file: packageJson.main,
			name: 'bundle',
      format: 'umd',
    },
  ],
  external: [
    'react',
    'react-dom'
  ],
	plugins: [
		alias({
      entries: [
        { find: 'react', replacement: path.resolve('node_modules/react') },
        { find: 'react-dom', replacement: path.resolve('node_modules/react-dom') }
      ]
    }),
		typescript({
			typescript: require('typescript'),
			include: [
				'./**/*.ts+(|x)',
				'../node_modules/**/*.ts+(|x)'
			]
		}),

    image(),
		peerDepsExternal(),
		resolve({
			extensions: EXTENSIONS,
			preferBuiltins: false,
		}),
    commonjs({
			include: 'node_modules/**',
			exclude: 'src/**',
		}),

		
		babel({
			exclude: 'node_modules/**',
		}),
	],
	context: "window"
	// onwarn: function(warning) {
	// 		// Skip certain warnings

	// 		// should intercept ... but doesn't in some rollup versions
	// 		if ( warning.code === 'THIS_IS_UNDEFINED' ) { return; }

	// 		// console.warn everything else
	// 		console.warn( warning.message );
	// }
}
