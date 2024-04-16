//@ts-check

/** @type {import('@twbs/fantasticon').RunnerOptions} */
const config = {
	name: 'leoicons',
	prefix: 'leojs',
	codepoints: require('./leo-icons-thin/template/mapping.json'),
	inputDir: './leo-icons-thin',
	outputDir: './resources',
	fontsUrl: '#{root}/resources',
	// @ts-ignore
	fontTypes: ['woff2'],
	normalize: true,
	// @ts-ignore
	assetTypes: ['html', 'scss', 'json'],
	templates: {
		html: './leo-icons-thin/template/icons-contribution.hbs',
		scss: './leo-icons-thin/template/styles.hbs',
	},
	formatOptions: {
		json: {
			indent: 2,
		},
	},
	pathOptions: {
		woff2: './resources/leoicons.woff2',
		scss: './resources/leoicons.scss',
		html: './resources/icons-contribution.json',
		json: './leo-icons-thin/template/mapping.json',
	},
};

module.exports = config;
