module.exports = {
	extends: [
		'plugin:@next/eslint-plugin-next/recommended',
		'plugin:prettier/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript'
	],
	plugins: ['@typescript-eslint/eslint-plugin', 'import', 'jsx-a11y', 'react', 'react-hooks'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		},
		warnOnUnsupportedTypeScriptVersion: false
	},
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx']
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
				project: './tsconfig.json'
			}
		},
		react: {
			version: 'detect'
		}
	},
	rules: {
		'import/default': 0,
		'@typescript-eslint/consistent-type-imports': 'error',
		'import/no-duplicates': 'error',
		'import/no-unresolved': 'error',
		'import/no-named-as-default': 0,
		'import/order': [
			'error',
			{
				groups: [
					'index',
					'sibling',
					'parent',
					'internal',
					'external',
					'builtin',
					'object',
					'type'
				]
			}
		]
	}
};
