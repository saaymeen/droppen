import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';

import pkg from './package.json';

export default {
	input: 'src/index.ts',
	output: [
		{
			//file: pkg.main,
			dir: 'build',
			format: 'cjs',
			exports: 'named',
			sourcemap: true,
		},
		{
			//file: pkg.module,
			dir: 'build',
			format: 'es',
			exports: 'named',
			sourcemap: true,
		},
	],
	plugins: [
		external(),
		resolve(),
		typescript({
			rollupCommonJSResolveHack: true,
			exclude: '**/__tests__/**',
			clean: true,
		}),
		commonjs({
			include: ['node_modules/**'],
			namedExports: {
				'node_modules/react/react.js': [
					'Children',
					'Component',
					'PropTypes',
					'createElement',
					'cloneElement',
					'createContext',
				],
				'node_modules/react-dom/index.js': ['render', 'hydrate'],
				'node_modules/react-is/index.js': [
					'isElement',
					'isValidElementType',
					'ForwardRef',
					'typeOf',
				],
			},
		}),
	],
};
