module.exports = {
	extends: [
		'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript'
	],
	plugins: [
		'svelte3',
        '@typescript-eslint',
		'import'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
        extraFileExtensions: ['.svelte'],
		ecmaVersion: 2020,
		sourceType: 'module',
		warnOnUnsupportedTypeScriptVersion: false
	},
	ignorePatterns: ['*.cjs'],
    overrides: [
        {
            files: ['*.svelte'],
            processor: 'svelte3/svelte3'
        }
    ],
	settings: {
		'svelte3/typescript': () => require('typescript'),
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts']
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
				project: './tsconfig.json'
			},
		}
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	rules: {
		'import/default': 0,
		'@typescript-eslint/no-empty-interface': 0,
		'@typescript-eslint/consistent-type-imports': 'error',
		'import/no-duplicates': 'error',
		'import/no-unresolved': 0,
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
