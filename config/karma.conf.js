module.exports = function (config) {
	config.set ({
		basePath      : '../',
		frameworks    : ['mocha', 'requirejs', 'chai'],
		files         : [
			{pattern: 'public/lib/*.js', included: false},
			{pattern: 'public/js/*.js', included: false},
			{pattern: 'tests/_*.js', included: false},
			'tests/test-main.js'
		],
		exclude       : [
			'**/*min*',
			'public/main.js'
		],
		client: {
			mocha: {
					ui: 'bdd'
				,   reporter : 'nyan'
				,   growl : true
			}
		},
		specjson: {
			output: 'derp.json'
		},
		reporters     : ['unicorn', 'progress', 'growl', 'mocha'],
		port          : 9876,
		colors        : true,
		//logLevel      : config.LOG_DEBUG,
		logLevel      : config.LOG_INFO,
		//autoWatch     : true,
		autoWatch     : true,
		browsers      : ['Chrome'],
		plugins       : [
			'karma-requirejs',
			'karma-mocha',
			'karma-chai',
			'karma-chrome-launcher',
			'karma-firefox-launcher',
			'karma-unicorn-reporter',
			'karma-mocha-reporter',
			'karma-growl'
		],
		captureTimeout: 60000,
		singleRun     : false
	});
};
