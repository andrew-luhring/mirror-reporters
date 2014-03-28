/*jshint expr: true*/

var tests = []
	,   regex = /(tests\/)(_.*\.js)/
	,   not = /(.[_])*((^(?:(?!ignore).)*)(js))/;

for (var file in window.__karma__.files) {
	//console.log(file);
	if (regex.test(file)  && not.test(file) ) {
		//console.log("******************************");
		//console.log("testing: " + file);
		//console.log("******************************");
		tests.push(file);
	}
}
requirejs.config({
	baseUrl: '/base/public/lib/',

	paths: {
		'jquery': 'jquery',
		'angular': 'angular',
		'angular-touch': 'angular-touch',
		'angular-animate': 'angular-animate',
		'animate-shadow': 'angular-shadow',
		'attrchange': 'attrchange',
		'animateShadow': 'animateShadow',
		'chai': 'chai',
		'chaijq' : 'chai-jq',
		'shadow': 'shadow',
		'utility': 'utility',
		'shadowbox': 'shadowbox',
		'truck': '../js/truck',
		'ang': '../js/ang',
		'dynamictxt': '../js/dynamictxt',
		'initial': '../js/initial',
		'portfolio': '../js/portfolio',
		'resize': '../js/resize_image',
		'temp': '../js/temp'
	},

	shim: {
			'jquery' : { exports: '$' }
		,   jqueryui : ['jquery']
		,	shadowbox : ['jquery', 'jqueryui']
		,   shadow: ['shadowbox']
		,   portfolio : ['jquery', 'jqueryui', 'animateShadow', 'shadow']
		,   initial : ['jquery', 'jqueryui', 'animateShadow', 'shadowbox']
		,   animateShadow: ['jquery', 'jqueryui']
		,   dynamictxt : ['jquery', 'jqueryui']
		,   'angular' : {'exports' : 'angular'}
		,   'angularRoute': ['angular']
		,   'chaijq': ['jquery', 'chai']
	},

	// ask Require.js to load these files (all our tests)
	deps: tests,

	// start test run, once Require.js is done
	callback: window.__karma__.start
});


